import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import Style from '../components/Style';
import { Page, Section, PageHero, Crumbs } from '../components/ui';

/* Contact.
 *
 * The form now actually delivers. The previous version set a success state and
 * displayed "Submissions route directly to Business Development" while
 * transmitting nothing at all - an enquiry typed into it was lost, and the
 * sender was told it had been received.
 *
 * With no backend on a static site, submit composes a pre-filled mail to
 * bd@ixar.africa in the visitor's own client. That is honest: the confirmation
 * says an email has been opened, not that IXAR has received anything, and the
 * address is shown in full so nothing depends on the mechanism working.
 */

const COUNTRIES = ['Uganda', 'Tanzania', 'Kenya', 'Other / regional'];

const INDUSTRIES = [
  'Oil & Gas',
  'Power & Energy',
  'Mining',
  'Marine & Ports',
  'Process / Food & Beverage',
  'Cement',
  'Sugar',
  'Other',
];

const SERVICES = [
  'Conventional NDT (RT / UT / MT / PT)',
  'Advanced NDT (PAUT / TOFD / AUT / ECT)',
  'Pipeline inspection',
  'Tube & heat exchanger inspection',
  'Tank & asset integrity',
  'Underwater & marine inspection',
  'Material testing & laboratory',
  'Training & certification',
  'Equipment supply',
  'Not sure yet',
];

const OFFICES = [
  {
    country: 'Uganda',
    status: 'Registered office',
    lines: ['Plot No. 72, Kanjokya Street, Kamwokya', 'P.O. Box 28673 Nakawa, Kampala'],
    phones: [
      { label: '+256 414 251251', href: 'tel:+256414251251' },
      { label: '+256 777 166392', href: 'tel:+256777166392' },
    ],
  },
  {
    country: 'Tanzania',
    status: 'Registered entity',
    via: 'Enquiries handled by the Kampala regional office',
  },
  {
    country: 'Kenya',
    status: 'Served from the region',
    via: 'Enquiries handled by the Kampala regional office',
  },
];

export default function ContactPage() {
  const formRef = useRef(null);
  const [validated, setValidated] = useState(false);
  const [opened, setOpened] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      setValidated(true);
      form.querySelector(':invalid')?.focus();
      return;
    }
    const v = (id) => form.querySelector(`#${id}`)?.value?.trim() || '—';
    const body = [
      `Name:      ${v('c-name')}`,
      `Company:   ${v('c-company')}`,
      `Country:   ${v('c-country')}`,
      `Industry:  ${v('c-industry')}`,
      `Service:   ${v('c-service')}`,
      `Phone:     ${v('c-phone')}`,
      `Email:     ${v('c-email')}`,
      '',
      'Project details',
      '---------------',
      v('c-details'),
    ].join('\n');

    window.location.href =
      `mailto:bd@ixar.africa?subject=${encodeURIComponent(
        `Enquiry — ${v('c-company')} (${v('c-country')})`
      )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <Page className="ct-page">
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your inspection requirements."
        sub="Scope, access, programme and the code being worked to. A written proposal comes back from the regional office against your specification."
        variant="plain"
        crumbs={<Crumbs trail={[{ label: 'Africa', to: '/' }, { label: 'Contact' }]} />}
      />

      <Section>
        <div className="ct-layout">
          <aside className="ct-side ea-rev">
            <span className="ea-eyebrow">Regional offices</span>
            <h2 className="ea-sec-title">Where to reach us.</h2>
            <span className="ea-rule" aria-hidden="true" />

            <div className="ct-direct">
              <p className="ct-line">
                <Mail size={16} aria-hidden="true" />
                <a href="mailto:bd@ixar.africa">bd@ixar.africa</a>
              </p>
              <p className="ct-line">
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+256414251251">+256 414 251251</a>
              </p>
            </div>

            {OFFICES.map((o) => (
              <div className="ct-office" key={o.country}>
                <h3>
                  {o.country}
                  <span>{o.status}</span>
                </h3>
                {o.lines && (
                  <p className="ct-line">
                    <MapPin size={15} aria-hidden="true" />
                    <span>
                      {o.lines.map((l) => (
                        <React.Fragment key={l}>
                          {l}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </p>
                )}
                {o.phones &&
                  o.phones.map((p) => (
                    <p className="ct-line" key={p.href}>
                      <Phone size={15} aria-hidden="true" />
                      <a href={p.href}>{p.label}</a>
                    </p>
                  ))}
                {o.via && <p className="ct-via">{o.via}</p>}
              </div>
            ))}

            <Link to="/network" className="ct-more">
              Full regional network <ChevronRight size={15} aria-hidden="true" />
            </Link>
          </aside>

          <div className="ct-form-card ea-rev">
            {opened ? (
              <div className="ct-done">
                <span className="ct-done__tick" aria-hidden="true">
                  <CheckCircle2 size={30} />
                </span>
                <h3>Your email client should now be open.</h3>
                <p>
                  The enquiry has been drafted with everything you entered. Send it and it reaches
                  the regional office directly. If nothing opened, email{' '}
                  <a href="mailto:bd@ixar.africa">bd@ixar.africa</a> or call{' '}
                  <a href="tel:+256414251251">+256 414 251251</a>.
                </p>
                <button type="button" className="ea-btn ea-btn--navy" onClick={() => setOpened(false)}>
                  Back to the form
                </button>
              </div>
            ) : (
              <>
                <h2 className="ct-form-title">Send an enquiry</h2>
                <p className="ct-form-sub">
                  Fields marked with an asterisk are required. The more scope detail you give, the
                  more useful the reply.
                </p>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className={validated ? 'ct-validated' : ''}
                >
                  <div className="ct-grid">
                    <div className="ct-field">
                      <label htmlFor="c-name">Name *</label>
                      <input id="c-name" type="text" required autoComplete="name" />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="c-company">Company *</label>
                      <input id="c-company" type="text" required autoComplete="organization" />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="c-country">Country *</label>
                      <select id="c-country" required defaultValue="">
                        <option value="" disabled>
                          Please select
                        </option>
                        {COUNTRIES.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="ct-field">
                      <label htmlFor="c-industry">Industry</label>
                      <select id="c-industry" defaultValue="">
                        <option value="">Please select</option>
                        {INDUSTRIES.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="ct-field">
                      <label htmlFor="c-email">Email *</label>
                      <input id="c-email" type="email" required autoComplete="email" />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="c-phone">Phone</label>
                      <input id="c-phone" type="tel" autoComplete="tel" />
                    </div>
                    <div className="ct-field ct-field--wide">
                      <label htmlFor="c-service">Service required</label>
                      <select id="c-service" defaultValue="">
                        <option value="">Please select</option>
                        {SERVICES.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="ct-field ct-field--wide">
                      <label htmlFor="c-details">Project details *</label>
                      <textarea
                        id="c-details"
                        rows={5}
                        required
                        placeholder="Asset, scope, location, programme dates and the code or specification being worked to."
                      />
                    </div>
                  </div>
                  <button type="submit" className="ea-btn ea-btn--primary ct-submit">
                    Submit Enquiry <ChevronRight size={16} aria-hidden="true" />
                  </button>
                  <p className="ct-note">
                    This opens a pre-filled email in your own mail application. Nothing is sent from
                    this page.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>

      <Style>{`
        .ct-layout{display:grid;grid-template-columns:0.85fr 1.15fr;gap:64px;align-items:start}

        .ct-side .ea-sec-title{font-size:32px}
        .ct-direct{margin:28px 0 8px;padding:20px 22px;background:var(--bg-tint);border-left:3px solid var(--brand)}
        .ct-direct .ct-line{font-size:16px;font-weight:700;color:var(--navy)}
        .ct-line{display:flex;gap:11px;align-items:flex-start;font-size:14.5px;line-height:1.6;margin:0 0 9px;color:var(--text-body)}
        .ct-line:last-child{margin-bottom:0}
        .ct-line svg{flex:none;margin-top:3px;color:var(--brand)}
        .ct-line a:hover{color:var(--brand)}
        .ct-office{padding:22px 0;border-bottom:1px solid var(--line)}
        .ct-office h3{
          display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
          font-size:17px;font-weight:800;color:var(--navy);margin:0 0 12px;
        }
        .ct-office h3 span{
          font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
          color:var(--text-dim);
        }
        .ct-via{font-size:13.5px;line-height:1.6;color:var(--text-dim);margin:0}
        .ct-more{
          display:inline-flex;align-items:center;gap:8px;margin-top:24px;
          font-size:13px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--brand);
        }
        .ct-more:hover svg{transform:translateX(4px)}
        .ct-more svg{transition:transform .22s ease}

        .ct-form-card{
          background:#FFFFFF;border:1px solid var(--line);border-top:4px solid var(--brand);
          border-radius:var(--radius-lg);padding:40px 38px;box-shadow:var(--shadow-md);
        }
        .ct-form-title{font-size:26px;font-weight:800;color:var(--navy);margin:0 0 10px}
        .ct-form-sub{font-size:14.5px;line-height:1.65;color:var(--text-body);margin:0 0 28px}
        .ct-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .ct-field{display:flex;flex-direction:column}
        .ct-field--wide{grid-column:1 / -1}
        .ct-field label{
          font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;
          color:var(--navy);margin-bottom:8px;
        }
        .ct-field input,.ct-field select,.ct-field textarea{
          width:100%;padding:13px 14px;background:#FFFFFF;
          border:1px solid #D9DEE1;border-radius:var(--radius-md);
          font-family:var(--font-body);font-size:15px;color:var(--ink);
          transition:border-color .2s ease,box-shadow .2s ease;
        }
        .ct-field textarea{resize:vertical;line-height:1.6}
        .ct-field input:focus,.ct-field select:focus,.ct-field textarea:focus{
          outline:none;border-color:var(--brand);box-shadow:0 0 0 3px rgba(227,30,36,.10);
        }
        .ct-validated :invalid{border-color:var(--brand)}
        .ct-submit{width:100%;justify-content:center;margin-top:26px}
        .ct-note{margin:14px 0 0;font-size:12.5px;line-height:1.6;color:var(--text-dim);text-align:center}

        .ct-done{text-align:center;padding:20px 0}
        .ct-done__tick{
          display:inline-flex;align-items:center;justify-content:center;
          width:64px;height:64px;border-radius:50%;background:var(--primary-light);
          color:var(--brand);margin-bottom:20px;
        }
        .ct-done h3{font-size:22px;font-weight:800;color:var(--navy);margin:0 0 14px}
        .ct-done p{font-size:15px;line-height:1.7;color:var(--text-body);margin:0 0 24px}
        .ct-done a{color:var(--brand);font-weight:700}

        @media (max-width:1024px){ .ct-layout{grid-template-columns:1fr;gap:44px} }
        @media (max-width:767px){
          .ct-form-card{padding:26px 20px}
          .ct-grid{grid-template-columns:1fr;gap:15px}
        }
      `}</Style>
    </Page>
  );
}
