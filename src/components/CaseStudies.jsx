import React from 'react';
import { MapPin, Calendar, ChevronRight, FileText } from 'lucide-react';
import Style from './Style';

/* Projects.

   The previous version listed four case studies with named clients, defect
   counts and completion figures for work in Ghana, Mozambique, South Africa
   and Nigeria. None of it was evidenced.

   What follows is only the work there is photographic evidence of: the
   Tilenga Project in Uganda (CSB, well pad and CPF scopes) and the Praj
   scope in Tanzania. Client names and dates are marked for confirmation
   rather than invented, and the content plan's approach is kept — the full
   record lives in a downloadable project list IXAR maintains, not in prose
   on the page. */

const PROJECTS = [
  {
    id: 'tilenga-cpf',
    scope: 'Central Processing Facility',
    project: 'Tilenga Project',
    country: 'Uganda',
    period: 'August 2026',
    summary:
      'Inspection of process pipework and large-bore insulated lines at the central processing facility, worked across day and night shifts.',
    methods: ['Radiography (RT)', 'Ultrasonic Testing (UT)', 'Visual Inspection'],
    image: '/images/east-africa/ea-ind-oil-gas.webp',
    alt: 'IXAR night shift crew beside a large insulated process line at the Tilenga central processing facility, Uganda',
  },
  {
    id: 'tilenga-wellpad',
    scope: 'Well pad works',
    project: 'Tilenga Project',
    country: 'Uganda',
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
    period: 'Dates to be confirmed',
    summary:
      'Radiographic inspection of process pipework and valve assemblies on operating plant, using gamma sources with guide tube deployment.',
    methods: ['Conventional Radiography (RT)'],
    image: '/images/east-africa/ea-svc-radiography.webp',
    alt: 'IXAR technician working on process pipework with a radiography source guide tube, Tanzania',
  },
];

export default function CaseStudies({ onOpenContact }) {
  return (
    <section className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Track record</div>
          <h1 className="section-title">Projects in the Region</h1>
          <p className="section-subtitle">
            Work delivered from the East Africa offices. Client names, dates and scope detail are
            confirmed with IXAR before publication.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project-card">
              <figure className="project-media">
                <img src={p.image} alt={p.alt} loading="lazy" />
              </figure>

              <div className="project-body">
                <span className="project-scope">{p.scope}</span>
                <h3 className="project-title">{p.project}</h3>

                <div className="project-meta">
                  <span><MapPin size={14} aria-hidden="true" /> {p.country}</span>
                  <span><Calendar size={14} aria-hidden="true" /> {p.period}</span>
                </div>

                <p className="project-summary">{p.summary}</p>

                <ul className="project-methods">
                  {p.methods.map((m) => (
                    <li key={m}><span className="badge badge-navy">{m}</span></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note">
          <span className="chip">
            Client names and publication permission to be confirmed for every project before this
            section goes live.
          </span>
        </div>

        <div className="projects-cta">
          <div className="projects-cta__icon"><FileText size={24} aria-hidden="true" /></div>
          <div className="projects-cta__copy">
            <h3>Completed projects, East Africa</h3>
            <p>
              The full record — client, scope, location and dates — is maintained as a downloadable
              project list, refreshed as work completes.
            </p>
          </div>
          <button onClick={() => onOpenContact()} className="btn btn-primary">
            <span>Request the project list</span>
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>

      <Style>{`
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }

        .project-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--muted);
        }

        .project-media { margin: 0; background: var(--navy); }
        .project-media img {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }

        .project-body { padding: 26px 24px 24px; display: flex; flex-direction: column; flex: 1; }
        .project-scope {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 8px;
        }
        .project-title { font-size: 1.3rem; color: var(--navy); margin-bottom: 12px; }
        .project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
          padding-bottom: 14px;
          margin-bottom: 14px;
          border-bottom: 1px solid var(--line);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--text-dim);
        }
        .project-meta span { display: inline-flex; align-items: center; gap: 6px; }
        .project-meta svg { color: var(--brand); flex: none; }
        .project-summary { font-size: 0.9375rem; line-height: 1.65; margin-bottom: 18px; }
        .project-methods {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .projects-note { margin-top: 30px; font-size: 0.875rem; line-height: 1.7; }

        .projects-cta {
          margin-top: 48px;
          padding: 32px;
          background: var(--bg-tint);
          border-left: 4px solid var(--brand);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .projects-cta__icon {
          width: 56px;
          height: 56px;
          flex: none;
          background: #fff;
          border: 1px solid var(--line);
          color: var(--brand);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .projects-cta__copy { flex: 1 1 320px; }
        .projects-cta h3 { font-size: 1.2rem; color: var(--navy); margin-bottom: 6px; }
        .projects-cta p { font-size: 0.9375rem; line-height: 1.6; }

        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 767px) {
          .projects-cta { padding: 24px 20px; }
          .projects-cta .btn { width: 100%; }
        }
      `}</Style>
    </section>
  );
}
