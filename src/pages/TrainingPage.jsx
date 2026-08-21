import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, ShieldCheck, UserCheck, BookOpen } from 'lucide-react';
import CertVerifier from '../components/CertVerifier';
import Style from '../components/Style';
import { Page, Section, SectionHead, PageHero, Crumbs, Media } from '../components/ui';

/* Training.
 *
 * The BARC collaboration is the PARENT company's, run at its Mumbai institute.
 * That is a genuine and substantial credential, and East Africa candidates do
 * go through it — but it is a group programme, and the page now says so rather
 * than implying an accredited centre exists in Kampala.
 *
 * The previous photographs here were AI-generated and fabricated a BARC banner,
 * roundel and seals - synthetic imagery of a government institution's branding,
 * on the page describing the relationship with it. Both are deleted.
 */

const COURSES = [
  {
    id: 'radiation-safety',
    icon: ShieldCheck,
    tag: 'Group programme · BARC collaboration',
    title: 'Radiation Safety for Industrial Radiographers',
    desc: 'The qualification course for personnel operating industrial gamma radiography cameras and X-ray generators. Run by IXAR in collaboration with the Radiological Physics & Advisory Division, Bhabha Atomic Research Centre, Mumbai.',
    points: [
      'RPAD / BARC advisory curriculum',
      'Practical exposure & shielding calculations',
      'Radiation Protection Officer pathway',
    ],
    cta: 'Ask about the next course',
  },
  {
    id: 'level-ii',
    icon: UserCheck,
    tag: 'Method training',
    title: 'Level II Method Preparation',
    desc: 'Preparation for Level II qualification across the methods the region works in — radiography, ultrasonics, magnetic particle and liquid penetrant — built around the equipment crews actually use on site.',
    points: ['RT · UT · MT · PT', 'Written and practical preparation', 'Procedure and reporting practice'],
    cta: 'Discuss method training',
  },
  {
    id: 'corporate',
    icon: BookOpen,
    tag: 'On site',
    title: 'Client and Corporate Sessions',
    desc: 'Sessions delivered at a client site for engineering, QA and maintenance teams: what each method can and cannot detect, how to read a report, and how to write an inspection scope that returns useful data.',
    points: ['Delivered at your site', 'Engineering & QA audiences', 'Scope-writing workshops'],
    cta: 'Arrange a session',
  },
];

export default function TrainingPage({ onOpenContact }) {
  return (
    <Page className="tr-page">
      <PageHero
        eyebrow="Training & Certification"
        title="Build capability. Raise standards."
        sub="Technical training for inspection personnel and the engineering teams who commission them, drawn from IXAR's group training programme."
        image="/images/stock/stk-training.webp"
        imageAlt="Technical training session with inspection instruments"
        actions={
          <>
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => onOpenContact('Training enquiry')}
            >
              Enquire About Training <ChevronRight size={16} aria-hidden="true" />
            </button>
            <a className="ea-btn ea-btn--ghost" href="#verify">
              Verify a Certificate
            </a>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'East Africa', to: '/' }, { label: 'Training' }]} />}
      />

      <Section>
        <SectionHead eyebrow="Courses" title="Three ways IXAR trains.">
          <p>
            Radiation safety qualification runs through the group&apos;s institute in Mumbai in
            collaboration with BARC. Method preparation and client sessions are arranged regionally.
          </p>
        </SectionHead>

        <div className="tr-grid">
          {COURSES.map((c) => {
            const Icon = c.icon;
            return (
              <article className="tr-card ea-rev" key={c.id}>
                <span className="tr-card__icon" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <span className="tr-card__tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul className="tr-card__points">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="ea-btn ea-btn--navy tr-card__cta"
                  onClick={() => onOpenContact(c.title)}
                >
                  {c.cta} <ChevronRight size={15} aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="tint">
        <div className="tr-backing">
          <figure className="tr-backing__media ea-rev">
            <Media
              src="/images/stock/stk-training-lab.webp"
              alt="Practical NDT training laboratory"
              mark="Training"
              title="A programme running since 1969"
            />
          </figure>
          <div className="ea-rev">
            <span className="ea-eyebrow">Behind the training</span>
            <h2 className="ea-sec-title">A programme older than most of the industry here.</h2>
            <span className="ea-rule" aria-hidden="true" />
            <p>
              IXAR has trained industrial radiographers since 1969. The East Africa division draws
              on that programme rather than running a parallel one, which is why a certificate
              issued to a Kampala technician carries the same curriculum as one issued in Mumbai.
            </p>
            <p>
              Course scheduling, eligibility and current fees are confirmed by the regional office
              on enquiry — they change per intake, so they are not published here.
            </p>
          </div>
        </div>
      </Section>

      <div id="verify">
        <CertVerifier />
      </div>

      <Section tone="navy">
        <div className="svc-close">
          <div>
            <span className="ea-eyebrow">Next step</span>
            <h2>Training a team, or qualifying one person?</h2>
            <p>
              Tell us the methods, the number of candidates and where they are based. The regional
              office confirms the next available intake and what it involves.
            </p>
          </div>
          <div className="svc-close__actions">
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => onOpenContact('Training enquiry')}
            >
              Enquire About Training <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link to="/careers" className="ea-btn ea-btn--ghost">
              Careers at IXAR
            </Link>
          </div>
        </div>
      </Section>

      <Style>{`
        .tr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;align-items:stretch}
        .tr-card{
          display:flex;flex-direction:column;background:#FFFFFF;
          border:1px solid var(--line);border-top:4px solid var(--brand);
          border-radius:var(--radius-lg);padding:32px 28px;box-shadow:var(--shadow-sm);
          transition:transform .26s ease,box-shadow .26s ease;
        }
        .tr-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
        .tr-card__icon{
          width:54px;height:54px;border-radius:50%;background:var(--primary-light);
          display:flex;align-items:center;justify-content:center;color:var(--brand);margin-bottom:20px;
        }
        .tr-card__tag{
          font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
          color:var(--text-dim);margin-bottom:10px;
        }
        .tr-card h3{font-size:20px;font-weight:800;line-height:1.25;color:var(--navy);margin:0 0 14px}
        .tr-card p{font-size:14.5px;line-height:1.65;color:var(--text-body);margin:0}
        .tr-card__points{list-style:none;margin:20px 0 0;padding:0}
        .tr-card__points li{
          position:relative;padding-left:20px;margin-bottom:9px;
          font-size:13.5px;font-weight:600;color:var(--navy);
        }
        .tr-card__points li::before{
          content:'';position:absolute;left:0;top:7px;width:7px;height:7px;
          background:var(--brand);border-radius:50%;
        }
        .tr-card__cta{margin-top:auto;justify-content:center}
        .tr-card .tr-card__cta{margin-top:26px}

        .tr-backing{display:grid;grid-template-columns:1fr 1.15fr;gap:56px;align-items:center}
        .tr-backing__media{margin:0;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg)}
        .tr-backing__media img{width:100%;height:100%;object-fit:cover;aspect-ratio:4/3}
        .tr-backing p{font-size:16px;line-height:1.72;color:var(--text-body);margin:20px 0 0}

        @media (max-width:1024px){ .tr-grid{grid-template-columns:1fr 1fr} }
        @media (max-width:900px){
          .tr-backing{grid-template-columns:1fr;gap:30px}
          .tr-grid{grid-template-columns:1fr}
        }
      `}</Style>
    </Page>
  );
}
