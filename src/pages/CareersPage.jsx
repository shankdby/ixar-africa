import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock } from 'lucide-react';
import Style from '../components/Style';
import { Page, Section, SectionHead, PageHero, Crumbs } from '../components/ui';

/* Careers.
 *
 * TWO CLAIMS DEMOTED. "Join Africa's premier non-destructive testing team" was
 * an unsupportable superlative. And one role advertised deployment to the
 * "EACOP Corridor", which asserts a contract on a named project; it now reads
 * as regional deployment, which is true either way.
 *
 * Roles are described as the disciplines IXAR East Africa recruits for. Nothing
 * here states a vacancy count or a start date.
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

export default function CareersPage({ onOpenContact }) {
  return (
    <Page className="cr-page">
      <PageHero
        eyebrow="Careers"
        title="Build your career with IXAR."
        sub="Technical careers in non-destructive testing across Uganda, Tanzania and the wider region, backed by a training programme running since 1969."
        image="/images/east-africa/ea-ind-oil-gas.webp"
        imageAlt="IXAR East Africa crew on site at night"
        actions={
          <>
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => onOpenContact('Career enquiry')}
            >
              Send Your CV <ChevronRight size={16} aria-hidden="true" />
            </button>
            <a className="ea-btn ea-btn--ghost" href="#roles">
              See Disciplines
            </a>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'East Africa', to: '/' }, { label: 'Careers' }]} />}
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
        <SectionHead eyebrow="Disciplines" title="Where IXAR East Africa recruits.">
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
                  onClick={() => onOpenContact(`Application — ${r.title}`)}
                >
                  Apply <ChevronRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
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
              onClick={() => onOpenContact('Speculative application')}
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
