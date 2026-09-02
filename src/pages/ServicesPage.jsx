import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Page, Section, SectionHead, PageHero, Crumbs, EditorialRow, Media } from '../components/ui';

/* Services.
 *
 * Structured the way ixar.in structures its offering - by inspection
 * discipline rather than as one flat list of methods - but built in this
 * site's own visual language: navy hero, editorial rows, generous rhythm.
 *
 * CONTENT RULE. Every method below already appears in the East Africa content.
 * Nothing has been added to fill a category out. Where ixar.in lists a method
 * IXAR Africa has not claimed (IRIS, RFT, NFT, wire rope, leak testing,
 * PMI, hardness testing) it is absent here rather than assumed.
 *
 * IMAGERY. A photograph is used only where it genuinely depicts that
 * discipline. Six of these rows have one; the rest take a navy typographic
 * panel. Reusing a radiography photograph to illustrate laboratory work - as
 * this page previously did in five places - reads as padding, and an EPC
 * reader recognises it immediately.
 */

const CATEGORIES = [
  {
    num: '01',
    id: 'conventional',
    eyebrow: 'Conventional NDT',
    short: 'Conventional',
    title: 'The methods that qualify a weld.',
    body: [
      'Radiographic and ultrasonic inspection of welds, castings and pressure parts, with surface methods for near-surface indications. This is the volume of the work: fabrication yards, shutdown scopes, and construction QA where every joint needs a record.',
      'Crews and licensed sources mobilise from the Kampala office to site.',
    ],
    points: [
      'Conventional Radiography (RT)',
      'Digital & Computed Radiography (CR / DR)',
      'Ultrasonic Testing (UT)',
      'Magnetic Particle Testing (MT)',
      'Liquid Penetrant Testing (PT)',
    ],
    image: '/images/east-africa/ea-svc-radiography.webp',
    alt: 'Industrial radiography of a welded joint',
    panelMark: 'Conventional NDT',
    panelTitle: 'Radiography, ultrasonics & surface methods',
    to: '/services/radiography',
    ctaLabel: 'Radiography technical detail',
  },
  {
    num: '02',
    id: 'advanced',
    eyebrow: 'Advanced NDT',
    short: 'Advanced',
    title: 'Where a film shot stops being enough.',
    body: [
      'Encoded, recordable ultrasonics for the scopes conventional methods cannot size: phased array and time-of-flight diffraction for weld flaws, automated ultrasonics for production girth welds, and eddy current for surface and near-surface work.',
      'Pulsed eddy current screens for corrosion under insulation without removing the cladding, which is what makes it viable on a live plant.',
    ],
    points: [
      'Phased Array (PAUT)',
      'Time of Flight Diffraction (TOFD)',
      'Automated Ultrasonics (AUT)',
      'Eddy Current (ECT)',
      'Pulsed Eddy Current (PECT)',
    ],
    image: '/images/east-africa/ea-svc-advanced-ut.webp',
    alt: 'Phased array ultrasonic scanner on a pipe weld',
    panelMark: 'Advanced NDT',
    panelTitle: 'PAUT, TOFD, AUT & eddy current',
    to: '/services/paut',
    ctaLabel: 'Phased array technical detail',
  },
  {
    num: '03',
    id: 'pipeline',
    eyebrow: 'Pipeline Inspection',
    short: 'Pipeline',
    title: 'Pipeline integrity. From weld to network.',
    body: [
      'Girth weld inspection during construction, and condition assessment once the line is running. X-ray crawler radiography and automated ultrasonics on the spread; cleaning and intelligent pigging for in-service wall condition and mapping.',
      'The regional pipeline work is the reason the Africa division exists, and it is the scope the team is deepest in.',
    ],
    points: [
      'Girth weld radiography (X-ray crawler)',
      'Automated Ultrasonic Testing (AUT)',
      'PAUT & TOFD weld inspection',
      'Cleaning pigs',
      'Intelligent pigging (ILI)',
    ],
    image: '/images/east-africa/ea-svc-pipeline.webp',
    alt: 'Cross-country transmission pipeline under construction',
    panelMark: 'Pipeline',
    panelTitle: 'Girth welds, crawlers & intelligent pigging',
    to: '/services/aut',
    ctaLabel: 'Automated ultrasonics detail',
  },
  {
    num: '04',
    id: 'tube',
    eyebrow: 'Tube & Heat Exchanger Inspection',
    short: 'Tube & Exchanger',
    title: 'Tube bundles, without pulling the bundle.',
    body: [
      'Magnetic flux leakage inspection of heat exchanger and boiler tubing for wall loss, pitting, grooving and circumferential cracking — the failure modes that decide whether a bundle survives the next run.',
      'Scheduled into shutdown windows, where the inspection duration is usually the constraint rather than the inspection itself.',
    ],
    points: ['Magnetic Flux Leakage (MFL)', 'Tube wall loss & pitting', 'Boiler tube inspection'],
    image: '',
    alt: 'Heat exchanger tube bundle withdrawn for inspection',
    panelMark: 'Tube & Exchanger',
    panelTitle: 'Magnetic flux leakage on tube bundles',
    to: '/services/mfl-tube',
    ctaLabel: 'Tank & tube technical detail',
  },
  {
    num: '05',
    id: 'tank',
    eyebrow: 'Tank & Asset Integrity',
    short: 'Tank & Asset',
    title: 'Storage tanks and fixed equipment.',
    body: [
      'Floor plate scanning for under-side corrosion, shell and roof thickness survey, and weld inspection on repairs and alterations. Reported so the numbers can be carried straight into an integrity assessment.',
    ],
    points: [
      'Tank floor MFL scanning',
      'UT thickness measurement',
      'Corrosion mapping',
      'Weld inspection',
    ],
    image: '',
    alt: 'Bulk storage tanks at a fuel terminal',
    panelMark: 'Tank & Asset',
    panelTitle: 'Floor scanning & thickness survey',
    to: '/services/mfl-tube',
    ctaLabel: 'Tank & tube technical detail',
  },
  {
    num: '06',
    id: 'marine',
    eyebrow: 'Underwater & Marine',
    short: 'Underwater',
    title: 'Inspection below the waterline.',
    body: [
      'Commercial diver inspection of jetties, harbour structures, dams, bridges and other submerged assets, including ultrasonic thickness measurement in-water.',
    ],
    points: ['Diver ultrasonic thickness', 'Jetty & harbour structures', 'Dams & bridges'],
    image: '',
    alt: 'Commercial diver working on a submerged structure',
    panelMark: 'Underwater',
    panelTitle: 'Diver inspection below the waterline',
    to: null,
  },
  {
    num: '07',
    id: 'laboratory',
    eyebrow: 'Material Testing & Laboratory',
    short: 'Laboratory',
    title: 'When you need to know why it failed.',
    body: [
      'Destructive and laboratory work supporting the field scopes: mechanical testing, chemical analysis, coating and corrosion testing, metallurgical evaluation and failure analysis.',
    ],
    points: [
      'Mechanical testing',
      'Chemical analysis',
      'Coating testing',
      'Corrosion testing',
      'Metallurgical evaluation',
      'Failure analysis',
    ],
    image: '',
    alt: 'Materials testing laboratory',
    panelMark: 'Laboratory',
    panelTitle: 'Destructive testing & failure analysis',
    to: null,
  },
];

export default function ServicesPage({ onOpenContact }) {
  return (
    <Page className="svc-page">
      <PageHero
        eyebrow="Our Services"
        title="Inspection Without Compromise."
        sub="Advanced non-destructive testing and asset integrity solutions for critical industrial infrastructure across Uganda, Tanzania, Kenya, Rwanda, Mozambique, Ethiopia, Sudan and Malawi."
        image="/images/east-africa/ea-hero-tilenga-cpf.webp"
        imageAlt="IXAR crew at the central processing facility, Tilenga Project, Uganda"
        actions={
          <>
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact()}>
              Request a Quote <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link className="ea-btn ea-btn--ghost" to="/estimator">
              Build an Inspection Scope
            </Link>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'Africa', to: '/' }, { label: 'Services' }]} />}
      />

      {/* Discipline index — lets a reader jump to their scope without scrolling
          the whole page. Anchors, not a second navigation. */}
      <div className="svc-index">
        <div className="ea-wrap">
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`}>
                  <span className="svc-index__num">{c.num}</span>
                  {c.short || c.eyebrow}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Section>
        <SectionHead
          eyebrow="Capability"
          title="Seven inspection disciplines, delivered regionally."
        >
          <p>
            Every method listed here is delivered by IXAR Africa crews out of the regional
            offices. Where a scope needs capability the region does not hold, it is drawn from the
            group rather than subcontracted quietly.
          </p>
        </SectionHead>

        {CATEGORIES.map((c, i) => (
          <div id={c.id} key={c.id} className="svc-anchor">
            <EditorialRow
              index={i}
              num={c.num}
              eyebrow={c.eyebrow}
              title={c.title}
              points={c.points}
              media={
                <Media src={c.image} alt={c.alt} mark={c.panelMark} title={c.panelTitle} />
              }
              cta={
                c.to ? (
                  <Link to={c.to} className="ea-btn ea-btn--navy">
                    {c.ctaLabel} <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="ea-btn ea-btn--navy"
                    onClick={() => onOpenContact(c.eyebrow)}
                  >
                    Enquire about {c.eyebrow.toLowerCase()}{' '}
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                )
              }
            >
              {c.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </EditorialRow>
          </div>
        ))}
      </Section>

      <Section tone="navy">
        <div className="svc-close">
          <div>
            <span className="ea-eyebrow">Next step</span>
            <h2>Tell us what needs inspecting.</h2>
            <p>
              Scope, access, shutdown window and the standard being worked to. A written proposal
              comes back from the regional office against your specification — no figure is
              generated from a form, because it would not survive contact with the job.
            </p>
          </div>
          <div className="svc-close__actions">
            <Link to="/estimator" className="ea-btn ea-btn--primary">
              Build an Inspection Scope <ChevronRight size={16} aria-hidden="true" />
            </Link>
            <button type="button" className="ea-btn ea-btn--ghost" onClick={() => onOpenContact()}>
              Talk to the Regional Office
            </button>
          </div>
        </div>
      </Section>

      
    </Page>
  );
}
