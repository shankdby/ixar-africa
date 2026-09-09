import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock, Mail, CheckCircle2 } from 'lucide-react';
import Style from '../components/Style';
import { Page, Section, SectionHead, PageHero, Crumbs } from '../components/ui';
import { sendEnquiry } from '../lib/enquiry';

/* Careers.
 *
 * TWO CLAIMS DEMOTED. "Join Africa's premier non-destructive testing team" was
 * an unsupportable superlative. And one role advertised deployment to the
 * "EACOP Corridor", which asserts a contract on a named project; it now reads
 * as regional deployment, which is true either way.
 *
 * Roles are described as the disciplines IXAR Africa recruits for. Nothing
 * here states a vacancy count or a start date.
 *
 * APPLICATIONS GO TO HR, NOT BUSINESS DEVELOPMENT. Every Apply button used to
 * open the general contact modal, so a CV landed in the same inbox as a
 * request for a quotation. The form below posts department: 'hr', which
 * /api/enquiry routes to hr@ixar.africa, and it asks the things an
 * application needs - discipline, certification, years, a link to a CV -
 * rather than the things a quotation needs.
 *
 * This page is also the reason "Jobs @ Ixar" no longer leaves the domain. It
 * pointed at ixar.in, where an African applicant landed on India-based
 * vacancies and had no way back.
 */

const WHY = [
  {
    title: 'Work that is checked',
    text: 'Every report carries a name. Personnel are certified to SNT-TC-1A or ISO 9712 and work to written procedures, which means the standard is external rather than a matter of opinion.',
  },
  {
    title: 'Qualification is paid for',
    text: 'IXAR has run its own training programme since 1969. Method progression and radiation safety qualification are routes the company funds, not something you arrange on your own time.',
  },
  {
    title: 'Regional, not desk-bound',
    text: 'Scopes run across Uganda and Tanzania and mobilise further. Field work is the job, with the shift patterns and site conditions that implies — worth knowing before you apply.',
  },
];

const ROLES = [
  {
    id: 'rt',
    title: 'Radiography Technicians (RT)',
    location: 'Kampala base · regional site deployment',
    type: 'Full-time / project based',
    desc: 'Industrial radiography on pipeline, fabrication and process plant scopes, using gamma projectors and X-ray generators under a licensed radiation safety regime.',
    reqs: [
      'Level II RT certification (SNT-TC-1A or ISO 9712)',
      'Field experience on industrial scopes',
      'Valid radiation safety credential',
    ],
  },
  {
    id: 'ut',
    title: 'Advanced Ultrasonic Inspectors (AUT / PAUT)',
    location: 'Uganda & Tanzania · regional deployment',
    type: 'Full-time',
    desc: 'Encoded ultrasonic inspection of girth and fabrication welds, including scanner setup, calibration and data interpretation against the applicable acceptance criteria.',
    reqs: [
      'Level II or III PAUT / AUT (ISO 9712 or SNT-TC-1A)',
      'Weld inspection track record',
      'Familiarity with ECA acceptance criteria',
    ],
  },
  {
    id: 'rpo',
    title: 'Radiation Protection Officers',
    location: 'Kampala base · regional operations',
    type: 'Full-time',
    desc: 'Regulatory compliance for sealed sources: transport logs, dosimetry monitoring, site radiation surveys and safety training, under the relevant national authority.',
    reqs: [
      'Recognised RPO qualification',
      'Working knowledge of national radiation regulations',
      'Field audit and safety leadership experience',
    ],
  },
];

export default function CareersPage() {
  const formRef = useRef(null);
  const [role, setRole] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const [validated, setValidated] = useState(false);

  /* Apply on a discipline preselects it and moves the visitor to the form,
     rather than opening a modal that then has to ask what they are applying
     for. */
  const applyFor = (title) => {
    setRole(title);
    setSent(false);
    const el = document.getElementById('apply');
    if (!el) return;
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10);
    const top = el.getBoundingClientRect().top + window.pageYOffset - ((Number.isFinite(navH) ? navH : 124) + 20);
    window.scrollTo({ top, behavior: 'smooth' });
    window.setTimeout(() => {
      const first = el.querySelector('#ap-name');
      if (first) first.focus({ preventScroll: true });
    }, 420);
  };

  const submit = async (e) => {
    e.preventDefault();
    setValidated(true);
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.querySelector(':invalid')?.focus();
      return;
    }
    if (sending) return;
    const values = Object.fromEntries(new FormData(form).entries());
    setFailed(false);
    setSending(true);
    /* department: 'hr' is what routes this to hr@ixar.africa instead of
       Business Development. */
    const res = await sendEnquiry({ ...values, department: 'hr' });
    setSending(false);
    if (res.ok) setSent(true);
    else setFailed(true);
  };

  return (
    <Page className="cr-page">
      <PageHero
        eyebrow="Careers"
        title="Build your career with IXAR."
        sub="Technical careers in non-destructive testing across Uganda, Tanzania and the wider region, backed by a training programme running since 1969."
        image="/images/east-africa/ea-ind-oil-gas.webp"
        imageAlt="IXAR Africa crew on site at night"
        actions={
          <>
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => applyFor('')}
            >
              Send Your CV <ChevronRight size={16} aria-hidden="true" />
            </button>
            <a className="ea-btn ea-btn--ghost" href="#roles">
              See Disciplines
            </a>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'Africa', to: '/' }, { label: 'Careers' }]} />}
      />

      <Section>
        <SectionHead eyebrow="Why IXAR" title="What the job actually involves.">
          <p>
            Inspection work is technical, regulated and physical. These are the three things worth
            knowing before you decide whether it suits you.
          </p>
        </SectionHead>
        <div className="cr-why">
          {WHY.map((w, i) => (
            <div className="cr-why__item ea-rev" key={w.title}>
              <span className="cr-why__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="tint" id="roles">
        <SectionHead eyebrow="Disciplines" title="Where IXAR Africa recruits.">
          <p>
            These are the disciplines the division hires into. Applications are held against
            upcoming scopes, so it is worth applying before a vacancy is posted rather than after.
          </p>
        </SectionHead>

        <div className="cr-roles">
          {ROLES.map((r) => (
            <article className="cr-role ea-rev" key={r.id}>
              <div className="cr-role__main">
                <h3>{r.title}</h3>
                <div className="cr-role__meta">
                  <span>
                    <MapPin size={14} aria-hidden="true" /> {r.location}
                  </span>
                  <span>
                    <Clock size={14} aria-hidden="true" /> {r.type}
                  </span>
                </div>
                <p>{r.desc}</p>
                <ul className="cr-role__reqs">
                  {r.reqs.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="cr-role__side">
                <button
                  type="button"
                  className="ea-btn ea-btn--primary"
                  onClick={() => applyFor(r.title)}
                >
                  Apply <ChevronRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="apply" tone="tint">
        <div className="cr-apply">
          <div className="cr-apply__intro">
            <span className="ea-eyebrow">Apply</span>
            <h2 className="cr-apply__title">Send an application.</h2>
            <span className="cr-apply__rule" aria-hidden="true" />
            <p>
              Applications go to the regional HR team and are held against upcoming scopes, so it
              is worth applying before a vacancy is posted rather than after.
            </p>
            <ul className="cr-apply__facts">
              <li>
                <Mail size={15} aria-hidden="true" />
                <span>
                  Goes to <a href="mailto:hr@ixar.africa">hr@ixar.africa</a>
                </span>
              </li>
              <li>
                <MapPin size={15} aria-hidden="true" />
                <span>Uganda, Tanzania and Mozambique</span>
              </li>
              <li>
                <Clock size={15} aria-hidden="true" />
                <span>Held on file and reviewed against awarded scopes</span>
              </li>
            </ul>
          </div>

          <div className="cr-form-card">
            {sent ? (
              <div className="cr-done" role="status" aria-live="polite">
                <span className="cr-done__tick" aria-hidden="true">
                  <CheckCircle2 size={30} />
                </span>
                <h3>Thank you, your application has been sent.</h3>
                <p>
                  It has gone to <strong>hr@ixar.africa</strong>. If you have a CV to attach, reply
                  to the acknowledgement and it reaches the same place.
                </p>
                <button type="button" className="ea-btn ea-btn--navy" onClick={() => setSent(false)}>
                  Send another application
                </button>
              </div>
            ) : (
              <>
                <h3 className="cr-form-title">Application</h3>
                <p className="cr-form-sub">
                  Fields marked with an asterisk are required. The more detail you give on
                  certification and method experience, the more useful the reply.
                </p>

                <form ref={formRef} onSubmit={submit} noValidate className={validated ? 'cr-validated' : ''}>
                  <div className="cr-grid">
                    <div className="cr-field">
                      <label htmlFor="ap-name">Full name *</label>
                      <input id="ap-name" name="name" type="text" required autoComplete="name" />
                      <span className="cr-err">Please enter your full name.</span>
                    </div>
                    <div className="cr-field">
                      <label htmlFor="ap-role">Discipline applying for *</label>
                      <select
                        id="ap-role"
                        name="role"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">Please select</option>
                        {ROLES.map((r) => <option key={r.id}>{r.title}</option>)}
                        <option>Speculative application</option>
                      </select>
                      <span className="cr-err">Please choose a discipline.</span>
                    </div>
                    <div className="cr-field">
                      <label htmlFor="ap-email">Email *</label>
                      <input id="ap-email" name="email" type="email" required autoComplete="email" />
                      <span className="cr-err">Please enter a valid email address.</span>
                    </div>
                    <div className="cr-field">
                      <label htmlFor="ap-phone">Phone or WhatsApp *</label>
                      <input id="ap-phone" name="phone" type="text" required autoComplete="tel" />
                      <span className="cr-err">Please enter a phone or WhatsApp number.</span>
                    </div>
                    <div className="cr-field">
                      <label htmlFor="ap-country">Country you are based in *</label>
                      <input id="ap-country" name="country" type="text" required autoComplete="country-name" />
                      <span className="cr-err">Please enter the country you are based in.</span>
                    </div>
                    <div className="cr-field">
                      <label htmlFor="ap-experience">Years of experience</label>
                      <input id="ap-experience" name="experience" type="text" inputMode="numeric" />
                    </div>
                    <div className="cr-field cr-field--wide">
                      <label htmlFor="ap-cert">Certifications held</label>
                      <input
                        id="ap-cert"
                        name="certification"
                        type="text"
                        placeholder="PCN Level II RT, ISO 9712 UT, BARC RSO"
                      />
                    </div>
                    <div className="cr-field cr-field--wide">
                      <label htmlFor="ap-cv">Link to your CV</label>
                      {/* Deliberately type="text". It was type="url", which made
                          the browser reject anything that was not a full URL -
                          so an applicant who wrote "NA" in an optional field got
                          a red box, no message, and a form that refused to
                          submit with nothing to tell them why. Nothing is
                          validated here; HR reads it. */}
                      <input
                        id="ap-cv"
                        name="cv"
                        type="text"
                        placeholder="A Drive or Dropbox link, or leave blank"
                      />
                    </div>
                    <div className="cr-field cr-field--wide">
                      <label htmlFor="ap-msg">Covering note *</label>
                      <textarea id="ap-msg" name="message" rows="5" required />
                      <span className="cr-err">Please tell us briefly why you are applying.</span>
                    </div>
                  </div>

                  {/* Hidden from people and never tabbable. Bots that fill every
                      field mark themselves, and /api/enquiry drops those. */}
                  <div className="cr-hp" aria-hidden="true">
                    <label htmlFor="ap-website">Leave this field empty</label>
                    <input id="ap-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <button
                    type="submit"
                    className="ea-btn ea-btn--primary cr-submit"
                    disabled={sending}
                    aria-busy={sending || undefined}
                  >
                    {sending ? 'Sending\u2026' : 'Send Application'}{' '}
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>

                  <p className="cr-note">
                    Applications route directly to the regional HR team
                    (<a href="mailto:hr@ixar.africa">hr@ixar.africa</a>).
                  </p>

                  {failed && (
                    <p className="cr-fallback" role="alert">
                      We could not send this from the website just now, so we have opened your email
                      application with the details already written out. Press send there, or write to{' '}
                      <a href="mailto:hr@ixar.africa">hr@ixar.africa</a> directly.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="svc-close">
          <div>
            <span className="ea-eyebrow">Speculative applications</span>
            <h2>Not seeing your discipline?</h2>
            <p>
              Send your CV with your certifications and the methods you hold. Applications are kept
              on file and reviewed against scopes as they are awarded.
            </p>
          </div>
          <div className="svc-close__actions">
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => applyFor('Speculative application')}
            >
              Send Your CV <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link to="/training" className="ea-btn ea-btn--ghost">
              Training & Certification
            </Link>
          </div>
        </div>
      </Section>

      <Style>{`
        /* The application sits in the same card the contact page uses: white
           on tint, red top rule, uppercase labels. It was a bare stack of
           inputs on white, which read as a different site. */
        .cr-apply{display:grid;grid-template-columns:.82fr 1.18fr;gap:52px;align-items:start}
        .cr-apply__title{font-size:34px;font-weight:800;line-height:1.15;color:var(--navy);margin:10px 0 0}
        .cr-apply__rule{display:block;width:54px;height:3px;background:var(--brand);margin:18px 0 20px}
        .cr-apply__intro p{font-size:15.5px;line-height:1.7;color:var(--text-body);margin:0 0 24px}
        .cr-apply__facts{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
        .cr-apply__facts li{display:flex;gap:12px;align-items:flex-start;font-size:14.5px;
          line-height:1.55;color:var(--text-body)}
        .cr-apply__facts svg{color:var(--brand);flex:none;margin-top:2px}
        .cr-apply__facts a{color:var(--brand);font-weight:700}

        .cr-form-card{
          background:#FFFFFF;border:1px solid var(--line);border-top:4px solid var(--brand);
          border-radius:var(--radius-lg);padding:40px 38px;box-shadow:var(--shadow-md);
        }
        .cr-form-title{font-size:24px;font-weight:800;color:var(--navy);margin:0 0 10px}
        .cr-form-sub{font-size:14.5px;line-height:1.65;color:var(--text-body);margin:0 0 28px}
        .cr-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .cr-field{display:flex;flex-direction:column}
        .cr-field--wide{grid-column:1 / -1}
        .cr-field label{
          font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;
          color:var(--navy);margin-bottom:8px;
        }
        .cr-field input,.cr-field select,.cr-field textarea{
          width:100%;padding:13px 14px;background:#FFFFFF;
          border:1px solid #D9DEE1;border-radius:var(--radius-md);
          font-family:var(--font-body);font-size:15px;color:var(--ink);
          transition:border-color .2s ease,box-shadow .2s ease;
        }
        .cr-field textarea{resize:vertical;line-height:1.6}
        .cr-field input:focus,.cr-field select:focus,.cr-field textarea:focus{
          outline:none;border-color:var(--brand);box-shadow:0 0 0 3px rgba(227,30,36,.10);
        }
        .cr-field input::placeholder{color:#A9B2B9}
        /* A red box with no words is what an applicant met before: the browser
           blocked the submit and nothing on screen said which field or why. */
        .cr-err{display:none;margin-top:7px;font-size:12.5px;font-weight:600;color:var(--brand)}
        .cr-validated :invalid{border-color:var(--brand)}
        .cr-validated :invalid ~ .cr-err{display:block}
        .cr-submit{width:100%;justify-content:center;margin-top:26px}
        .cr-note{margin:14px 0 0;font-size:12.5px;line-height:1.6;color:var(--text-dim);text-align:center}
        .cr-note a{color:var(--brand);font-weight:700}
        .cr-hp{position:absolute!important;left:-9999px!important;width:1px!important;
          height:1px!important;overflow:hidden!important}
        .cr-fallback{margin-top:14px;padding:12px 14px;font-size:13.5px;line-height:1.55;
          color:#7A2E12;background:#FFF4EC;border-left:3px solid var(--brand)}
        .cr-fallback a{color:var(--brand);font-weight:700}

        .cr-done{text-align:center;padding:20px 0}
        .cr-done__tick{
          display:inline-flex;align-items:center;justify-content:center;
          width:64px;height:64px;border-radius:50%;background:var(--primary-light);
          color:var(--brand);margin-bottom:20px;
        }
        .cr-done h3{font-size:22px;font-weight:800;color:var(--navy);margin:0 0 14px}
        .cr-done p{font-size:15px;line-height:1.7;color:var(--text-body);margin:0 0 24px}

        @media(max-width:1024px){ .cr-apply{grid-template-columns:1fr;gap:36px} }
        @media(max-width:680px){
          .cr-form-card{padding:26px 20px}
          .cr-grid{grid-template-columns:1fr;gap:15px}
        }

        .cr-why{display:grid;grid-template-columns:repeat(3,1fr);gap:40px}
        .cr-why__item{border-top:3px solid var(--brand);padding-top:24px}
        .cr-why__num{
          display:block;font-size:12px;font-weight:800;letter-spacing:.14em;
          color:var(--brand);margin-bottom:12px;
        }
        .cr-why h3{font-size:20px;font-weight:800;line-height:1.25;color:var(--navy);margin:0 0 12px}
        .cr-why p{font-size:15px;line-height:1.7;color:var(--text-body);margin:0}

        .cr-roles{display:flex;flex-direction:column;gap:20px}
        .cr-role{
          display:grid;grid-template-columns:1fr auto;gap:36px;align-items:center;
          background:#FFFFFF;border:1px solid var(--line);border-left:4px solid var(--brand);
          border-radius:var(--radius-lg);padding:32px 34px;box-shadow:var(--shadow-sm);
          transition:transform .26s ease,box-shadow .26s ease;
        }
        .cr-role:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
        .cr-role h3{font-size:21px;font-weight:800;line-height:1.25;color:var(--navy);margin:0 0 12px}
        .cr-role__meta{display:flex;flex-wrap:wrap;gap:8px 22px;margin-bottom:14px}
        .cr-role__meta span{
          display:inline-flex;align-items:center;gap:7px;
          font-size:12.5px;font-weight:700;letter-spacing:.03em;color:var(--text-dim);
        }
        .cr-role__meta svg{color:var(--brand)}
        .cr-role p{font-size:14.5px;line-height:1.68;color:var(--text-body);margin:0}
        .cr-role__reqs{display:flex;flex-wrap:wrap;gap:8px;list-style:none;margin:18px 0 0;padding:0}
        .cr-role__reqs li{
          font-size:12.5px;font-weight:700;color:var(--navy);
          background:var(--bg-tint);border:1px solid var(--muted);
          border-radius:var(--radius-md);padding:7px 13px;
        }
        .cr-role__side .ea-btn{white-space:nowrap}

        @media (max-width:1024px){ .cr-why{grid-template-columns:1fr;gap:28px} }
        @media (max-width:767px){
          .cr-role{grid-template-columns:1fr;gap:22px;padding:26px 22px}
          .cr-role__side .ea-btn{width:100%;justify-content:center}
        }
      `}</Style>
    </Page>
  );
}
