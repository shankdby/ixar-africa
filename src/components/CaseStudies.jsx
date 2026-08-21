import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import AppImage from './AppImage';
import Style from './Style';
import { Section, SectionHead } from './ui';

/* Regional track record.
 *
 * WHAT IS HERE. Four scopes, all evidenced by IXAR East Africa's own site
 * photography. An earlier version of this file listed named clients, contract
 * values and defect-rate figures that nothing supported; those were removed and
 * are not coming back without documentation.
 *
 * WHAT IS DELIBERATELY ABSENT. Client names. IXAR (EA) works as a subcontractor
 * on most of these scopes and publication permission has not been obtained, so
 * the operator is described by project rather than named. This is normal
 * practice on EPC work and reads as discipline, not as a gap.
 *
 * Unknown fields are omitted, never printed as "to be confirmed".
 */

const PROJECTS = [
  {
    id: 'tilenga-cpf',
    scope: 'Central Processing Facility',
    project: 'Tilenga Project',
    country: 'Uganda',
    sector: 'Oil & Gas',
    period: 'August 2026',
    summary:
      'Inspection of process pipework and large-bore insulated lines at the central processing facility, worked across day and night shifts.',
    methods: ['Radiography (RT)', 'Ultrasonic Testing (UT)', 'Visual Inspection'],
    image: '/images/east-africa/ea-hero-tilenga-cpf.webp',
    alt: 'IXAR night shift crew beside a large insulated process line at the Tilenga central processing facility, Uganda',
  },
  {
    id: 'tilenga-wellpad',
    scope: 'Well pad works',
    project: 'Tilenga Project',
    country: 'Uganda',
    sector: 'Oil & Gas',
    period: 'August 2026',
    summary:
      'Spool and girth weld inspection at well pad locations, with crews working from a site compound established for the scope.',
    methods: ['Radiography (RT)', 'Ultrasonic Testing (UT)'],
    image: '/images/east-africa/ea-svc-ultrasonic.webp',
    alt: 'IXAR technicians inspecting a pipe spool mounted on a stand at a Tilenga well pad, Uganda',
  },
  {
    id: 'tilenga-csb',
    scope: 'Construction support base',
    project: 'Tilenga Project',
    country: 'Uganda',
    sector: 'Oil & Gas',
    period: 'August 2026',
    summary:
      'Radiography and ultrasonic inspection of pipe spools and fittings at the construction support base, ahead of installation.',
    methods: ['Radiography (RT)', 'Pipeline Inspection'],
    image: '/images/east-africa/ea-svc-pipeline.webp',
    alt: 'Pipe spools and radiography equipment laid out at the IXAR construction support base compound, Tilenga Project, Uganda',
  },
  {
    id: 'praj',
    scope: 'Process plant',
    project: 'Praj scope',
    country: 'Tanzania',
    sector: 'Process',
    // period deliberately absent: not confirmed, so not shown
    summary:
      'Radiographic inspection of process pipework and valve assemblies on operating plant, using gamma sources with guide tube deployment.',
    methods: ['Conventional Radiography (RT)'],
    image: '/images/east-africa/ea-svc-radiography.webp',
    alt: 'IXAR technician working on process pipework with a radiography source guide tube, Tanzania',
  },
];

const FILTERS = ['All', 'Uganda', 'Tanzania', 'Oil & Gas', 'Process'];

export default function CaseStudies({ onOpenContact }) {
  const [filter, setFilter] = useState('All');

  const shown = useMemo(
    () =>
      filter === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.country === filter || p.sector === filter),
    [filter]
  );

  return (
    <>
      <Section>
        <SectionHead eyebrow="Regional Track Record" title="Work delivered in East Africa.">
          <p>
            Scopes carried out by IXAR East Africa crews, each one backed by the division&apos;s own
            site photography. Operators are described by project rather than named: on
            subcontracted EPC work, publication permission belongs to the client.
          </p>
        </SectionHead>

        <div className="pj-filters ea-rev" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`pj-filter${filter === f ? ' is-on' : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="pj-filter__n">
                {f === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.country === f || p.sector === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="pj-grid">
          {shown.map((p) => (
            <article className="pj-card ea-rev" key={p.id}>
              <figure className="pj-card__media">
                <AppImage src={p.image} alt={p.alt} />
                <figcaption className="pj-card__country">
                  <MapPin size={13} aria-hidden="true" /> {p.country}
                </figcaption>
              </figure>
              <div className="pj-card__body">
                <span className="pj-card__scope">{p.scope}</span>
                <h3>{p.project}</h3>
                <p>{p.summary}</p>
                <ul className="pj-card__methods">
                  {p.methods.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                {p.period && <p className="pj-card__period">{p.period}</p>}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="svc-close">
          <div>
            <span className="ea-eyebrow">Next step</span>
            <h2>Ask for the detail behind any of these.</h2>
            <p>
              Procedures, personnel certification and reporting formats can be shared for a specific
              scope on request, subject to the client&apos;s own confidentiality terms.
            </p>
          </div>
          <div className="svc-close__actions">
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact()}>
              Request Project References <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link to="/services" className="ea-btn ea-btn--ghost">
              See Our Services
            </Link>
          </div>
        </div>
      </Section>

      <Style>{`
        .pj-filters{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:38px}
        .pj-filter{
          display:inline-flex;align-items:center;gap:9px;
          padding:11px 18px;background:#FFFFFF;
          border:1px solid var(--line);border-radius:var(--radius-md);
          font-size:13px;font-weight:700;letter-spacing:.02em;color:var(--navy);cursor:pointer;
          transition:background .2s ease,border-color .2s ease,color .2s ease;
        }
        .pj-filter:hover{border-color:var(--muted)}
        .pj-filter.is-on{background:var(--navy);border-color:var(--navy);color:#FFFFFF}
        .pj-filter__n{
          font-size:11px;font-weight:800;color:var(--text-dim);
          background:var(--bg-tint);border-radius:20px;padding:2px 7px;min-width:20px;text-align:center;
        }
        .pj-filter.is-on .pj-filter__n{background:rgba(255,255,255,.16);color:#FFFFFF}

        .pj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:30px}
        .pj-card{
          display:flex;flex-direction:column;background:#FFFFFF;
          border:1px solid var(--line);border-radius:var(--radius-lg);overflow:hidden;
          box-shadow:var(--shadow-sm);
          transition:transform .26s ease,box-shadow .26s ease,border-color .26s ease;
        }
        .pj-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:var(--muted)}
        .pj-card__media{position:relative;margin:0;aspect-ratio:16/9;overflow:hidden}
        .pj-card__media img{width:100%;height:100%;object-fit:cover}
        .pj-card__country{
          position:absolute;left:14px;bottom:14px;display:inline-flex;align-items:center;gap:6px;
          padding:6px 12px;background:rgba(0,30,87,.9);backdrop-filter:blur(4px);
          color:#FFFFFF;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;
          border-radius:var(--radius-sm);
        }
        .pj-card__body{display:flex;flex-direction:column;flex:1;padding:26px 24px 24px}
        .pj-card__scope{
          font-size:11.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
          color:var(--brand);margin-bottom:10px;
        }
        .pj-card h3{font-size:20px;font-weight:800;line-height:1.25;color:var(--navy);margin:0 0 12px}
        .pj-card p{font-size:14.5px;line-height:1.65;color:var(--text-body);margin:0}
        .pj-card__methods{display:flex;flex-wrap:wrap;gap:7px;list-style:none;margin:18px 0 0;padding:0}
        .pj-card__methods li{
          font-size:11.5px;font-weight:700;letter-spacing:.03em;color:var(--navy);
          background:var(--navy-badge-bg);border:1px solid #D3DBE7;border-radius:var(--radius-sm);padding:5px 11px;
        }
        .pj-card__period{
          margin-top:auto;padding-top:18px;
          font-size:12.5px;font-weight:700;letter-spacing:.04em;color:var(--text-dim);
        }

        @media (max-width:900px){ .pj-grid{grid-template-columns:1fr} }
      `}</Style>
    </>
  );
}
