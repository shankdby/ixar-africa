import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Style from '../components/Style';
import { Page, Section, SectionHead, PageHero, Crumbs } from '../components/ui';

/* Equipment and supply.
 *
 * A technical catalogue, not a shop. No prices, no stock counts, no basket -
 * every line goes to an enquiry, which is how industrial NDT equipment is
 * actually bought.
 *
 * TWO CLAIMS REMOVED. The previous version named a third-party manufacturer as
 * though IXAR were its distributor, and advertised "Immediate East Africa
 * Warehouse Stock" - no warehouse appears anywhere else in the site or the
 * content plan. Both are gone. Availability is now what it honestly is:
 * confirmed per enquiry.
 */

const CATEGORIES = [
  {
    id: 'radiography',
    ref: '01',
    name: 'Industrial Radiography',
    desc: 'Remote-control gamma radiography projectors, drive cables, source guide tubes and collimators, with the source types used across regional pipeline and fabrication work.',
    items: [
      'Gamma radiography projectors',
      'Iridium-192 / Selenium-75 / Cobalt-60 sources',
      'Drive cables & guide tubes',
      'Collimators',
    ],
    spec: 'Depleted uranium or tungsten shielding · safety interlock systems',
  },
  {
    id: 'ultrasonic',
    ref: '02',
    name: 'Ultrasonic Testing',
    desc: 'Portable thickness gauges and flaw detectors for field survey work, through to multi-channel phased array instruments for encoded weld inspection.',
    items: [
      'Dual-element thickness gauges',
      'Digital flaw detectors',
      'Phased array instruments',
      'Probes, wedges & cables',
    ],
    spec: 'A-scan and B-scan data logging · high-temperature probe options',
  },
  {
    id: 'surface',
    ref: '03',
    name: 'Magnetic Particle & Penetrant',
    desc: 'Consumables and yokes for surface and near-surface flaw detection, in the halogen and sulphur-free grades required for stainless and nickel alloys.',
    items: [
      'Magnetic particle powders & inks',
      'Contrast paints',
      'Liquid penetrant kits',
      'Electromagnetic yokes',
    ],
    spec: 'ASTM E1444 and ISO 3452 compliant grades',
  },
  {
    id: 'radiation-safety',
    ref: '04',
    name: 'Radiation Safety',
    desc: 'The monitoring and control equipment a licensed radiography operation is required to hold, supplied alongside the sources rather than separately.',
    items: [
      'Survey meters',
      'Personal dosimeters',
      'Audible dose-rate alarms',
      'Barriers & warning signage',
    ],
    spec: 'Specified against the licensing conditions of the operating jurisdiction',
  },
  {
    id: 'calibration',
    ref: '05',
    name: 'Calibration & Reference Standards',
    desc: 'Reference blocks manufactured from certified carbon steel, stainless and alloy stock, with material traceability documentation.',
    items: [
      'ASME / API / IIW blocks',
      'V1, V2 and step blocks',
      'DAC blocks',
      'EDM notch & flat-bottom-hole standards',
    ],
    spec: 'EN 10204 3.1 material certificates · serialised traceability',
  },
  {
    id: 'accessories',
    ref: '06',
    name: 'Consumables & Accessories',
    desc: 'The supply items that keep an inspection crew working: film and digital media, screens, cassettes, marking and cleaning materials.',
    items: [
      'Lead intensifying screens',
      'Digital radiography cassettes',
      'DICONDE-compatible media',
      'Darkroom supplies',
    ],
    spec: 'Availability and lead time confirmed per enquiry',
  },
];

export default function ProductsPage({ onOpenContact }) {
  return (
    <Page className="pr-page">
      <PageHero
        eyebrow="Equipment & Supply"
        title="NDT equipment, specified properly."
        sub="Radiography, ultrasonic and surface-method equipment, calibration standards and consumables, supplied to industrial users across East Africa."
        variant="plain"
        actions={
          <>
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => onOpenContact('Equipment enquiry')}
            >
              Request a Quotation <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link className="ea-btn ea-btn--ghost" to="/services">
              See Inspection Services
            </Link>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'East Africa', to: '/' }, { label: 'Equipment & Supply' }]} />}
      />

      <Section>
        <SectionHead eyebrow="Catalogue" title="Six supply categories.">
          <p>
            No prices are published. Equipment specification depends on the material, the code being
            worked to and the licensing conditions where it will be used — so every line here goes
            to a written quotation rather than a basket.
          </p>
        </SectionHead>

        <div className="pr-grid">
          {CATEGORIES.map((c) => (
            <article className="pr-card ea-rev" key={c.id}>
              <div className="pr-card__head">
                <span className="pr-card__ref">{c.ref}</span>
                <h3>{c.name}</h3>
              </div>
              <p className="pr-card__desc">{c.desc}</p>
              <ul className="pr-card__items">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="pr-card__spec">{c.spec}</p>
              <button
                type="button"
                className="pr-card__cta"
                onClick={() => onOpenContact(`${c.name} enquiry`)}
              >
                Enquire <ChevronRight size={14} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="svc-close">
          <div>
            <span className="ea-eyebrow">Next step</span>
            <h2>Send the specification, not just the item.</h2>
            <p>
              Material, thickness range, code and where the equipment will be licensed. That is
              enough for the regional office to quote something that will actually pass an audit.
            </p>
          </div>
          <div className="svc-close__actions">
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => onOpenContact('Equipment enquiry')}
            >
              Request a Quotation <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link to="/contact" className="ea-btn ea-btn--ghost">
              Contact the Regional Office
            </Link>
          </div>
        </div>
      </Section>

      <Style>{`
        .pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
        .pr-card{
          display:flex;flex-direction:column;background:#FFFFFF;
          border:1px solid var(--line);border-radius:var(--radius-lg);
          padding:30px 26px 24px;box-shadow:var(--shadow-sm);
          transition:transform .26s ease,box-shadow .26s ease,border-color .26s ease;
        }
        .pr-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:var(--muted)}
        .pr-card__head{display:flex;align-items:baseline;gap:14px;margin-bottom:16px}
        .pr-card__ref{
          font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--brand);
          border:1px solid var(--primary-border);background:var(--primary-light);
          border-radius:var(--radius-sm);padding:4px 9px;flex:none;
        }
        .pr-card h3{font-size:19px;font-weight:800;line-height:1.25;color:var(--navy);margin:0}
        .pr-card__desc{font-size:14.5px;line-height:1.65;color:var(--text-body);margin:0 0 20px}
        .pr-card__items{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
        .pr-card__items li{
          padding:10px 0;border-bottom:1px solid var(--line);
          font-size:13.5px;font-weight:600;color:var(--navy);
        }
        .pr-card__spec{
          margin:16px 0 0;font-size:12.5px;line-height:1.6;color:var(--text-dim);font-style:italic;
        }
        .pr-card__cta{
          margin-top:auto;padding-top:20px;background:none;border:0;cursor:pointer;
          display:inline-flex;align-items:center;gap:8px;align-self:flex-start;
          font-size:13px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--brand);
        }
        .pr-card__cta svg{transition:transform .22s ease}
        .pr-card:hover .pr-card__cta svg{transform:translateX(4px)}

        @media (max-width:1024px){ .pr-grid{grid-template-columns:1fr 1fr} }
        @media (max-width:767px){ .pr-grid{grid-template-columns:1fr} }
      `}</Style>
    </Page>
  );
}
