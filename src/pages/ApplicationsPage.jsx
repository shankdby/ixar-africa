import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Style from '../components/Style';
import { Page, Section, SectionHead, PageHero, Crumbs, EditorialRow, Media } from '../components/ui';

/* Industries.
 *
 * Same system as Services: navy hero, editorial rows, one subject per row.
 *
 * ROUTING. Only four sectors have a detail page (oil-gas, railways,
 * power-plants, mining). The other four were previously slugged 'oil-gas' too,
 * so clicking "Marine and Ports" opened the Oil & Gas refinery page. A sector
 * without a detail page now offers an enquiry instead of a wrong destination.
 *
 * IMAGERY. Cement was illustrated with the oil & gas photograph and Sugar with
 * a radiography photograph. Neither showed the sector. Both now take a navy
 * panel, which says nothing false.
 */

const SECTORS = [
  {
    slug: 'oil-gas',
    id: 'oil-gas',
    short: 'Oil & Gas',
    eyebrow: 'Oil and Gas',
    title: 'Upstream, midstream and downstream.',
    body: [
      'Pipelines, storage tanks, refineries and process plant — from cross-country transmission lines through to downstream processing facilities. The largest part of the regional workload, and the sector the East Africa crews are deepest in.',
    ],
    points: [
      'Pipeline girth welds',
      'Storage tanks',
      'Pressure vessels',
      'Process pipework',
      'Corrosion monitoring',
    ],
    image: '/images/stock/stk-oil-gas.webp',
    alt: 'Oil and gas processing facility',
    panelMark: 'Oil & Gas',
    panelTitle: 'Pipelines, tanks, refineries & process plant',
  },
  {
    slug: 'power-plants',
    id: 'power',
    short: 'Power & Energy',
    eyebrow: 'Power Generation and Geothermal',
    title: 'Plant that cannot stay down.',
    body: [
      'Boilers, turbines, heat exchangers, steam pipework and separator vessels across thermal, hydro, geothermal and renewable facilities. Inspection is scheduled into the outage window, and the window is the constraint.',
    ],
    points: ['Boiler tubes', 'Turbines', 'Heat exchangers', 'Steam pipework', 'Separator vessels'],
    image: '/images/stock/stk-power.webp',
    alt: 'Turbine hall at a power generation plant',
    panelMark: 'Power & Energy',
    panelTitle: 'Boilers, turbines & heat exchangers',
  },
  {
    slug: 'mining',
    id: 'mining',
    short: 'Mining',
    eyebrow: 'Mining and Heavy Infrastructure',
    title: 'Structures under load, for years.',
    body: [
      'Structural steelwork, excavators, draglines, crushers, mill trunnions, shaft gantries and material handling equipment. Fatigue cracking in heavy plant is progressive, so the value is in the trend across inspections rather than any single one.',
    ],
    points: [
      'Structural welds',
      'Mill trunnions',
      'Crushers & draglines',
      'Shaft gantries',
      'Material handling',
    ],
    image: '/images/stock/stk-mining.webp',
    alt: 'Heavy equipment and structural steelwork at a mine site',
    panelMark: 'Mining',
    panelTitle: 'Structures, mills & material handling',
  },
  {
    slug: 'railways',
    id: 'railways',
    short: 'Railways',
    eyebrow: 'Railways and Transportation',
    title: 'Rail, welds and wheelsets.',
    body: [
      'Ultrasonic flaw detection on continuous welded rail, thermit weld verification, locomotive axles and rolling stock wheelset integrity.',
    ],
    points: ['USFD on rail', 'Thermit weld verification', 'Axles', 'Wheelsets'],
    image: '/images/stock/stk-railway.webp',
    alt: 'Continuous welded rail track',
    panelMark: 'Railways',
    panelTitle: 'Rail, thermit welds & wheelsets',
  },
  {
    slug: null,
    id: 'marine',
    short: 'Marine & Ports',
    eyebrow: 'Marine and Ports',
    title: 'Berths, jetties and hulls.',
    body: [
      'Port berth jetties, gantry cranes, vessel hulls, mooring bollards and submerged infrastructure, inspected by commercial diving crews where the asset sits below the waterline.',
    ],
    points: ['Jetties & berths', 'Gantry cranes', 'Vessel hulls', 'Submerged structures'],
    image: '/images/stock/stk-marine-port.webp',
    alt: 'Port jetty and gantry cranes',
    panelMark: 'Marine & Ports',
    panelTitle: 'Jetties, cranes, hulls & submerged structures',
  },
  {
    slug: null,
    id: 'petrochemical',
    short: 'Process & Food',
    eyebrow: 'Breweries, Beverage and Food Processing',
    title: 'Hygienic systems, same standards.',
    body: [
      'Stainless steel tanks, pressure vessels, hygienic process pipework, fermentation cellars and steam boilers. Weld quality carries a product-safety consequence here as much as a structural one.',
    ],
    points: ['Stainless tanks', 'Hygienic pipework', 'Fermentation cellars', 'Steam boilers'],
    image: '/images/stock/stk-process-food.webp',
    alt: 'Stainless steel process tanks in a food and beverage plant',
    panelMark: 'Process & Food',
    panelTitle: 'Stainless tanks & hygienic pipework',
  },
  {
    slug: null,
    id: 'cement',
    short: 'Cement',
    eyebrow: 'Cement',
    title: 'Kilns, on a shutdown clock.',
    body: [
      'Rotary kilns, ducting, structural supports and cyclone towers, maintained inside tight emergency shutdown windows.',
    ],
    points: ['Rotary kilns', 'Ducting', 'Structural supports', 'Cyclone towers'],
    image: '/images/stock/stk-cement.webp',
    alt: 'Cement plant kiln and cyclone tower',
    panelMark: 'Cement',
    panelTitle: 'Kilns, cyclone towers & structural supports',
  },
  {
    slug: null,
    id: 'sugar',
    short: 'Sugar',
    eyebrow: 'Sugar Industry',
    title: 'Off-crop, when the mill stops.',
    body: [
      'Boilers, evaporators, mill structures, crystallizers and pressure equipment, inspected during off-crop maintenance turnarounds.',
    ],
    points: ['Boilers', 'Evaporators', 'Mill structures', 'Crystallizers'],
    image: '/images/stock/stk-sugar.webp',
    alt: 'Sugar mill processing plant',
    panelMark: 'Sugar',
    panelTitle: 'Boilers, evaporators & mill structures',
  },
];

export default function ApplicationsPage({ onOpenContact }) {
  return (
    <Page className="ind-page">
      <PageHero
        eyebrow="Industries We Serve"
        title="Built for the industries that cannot afford failure."
        sub="Sector-specific non-destructive testing and asset integrity work across the industrial base of Uganda, Tanzania and Kenya."
        image="/images/stock/stk-hero-industries.webp"
        imageAlt="Industrial processing facility at dusk"
        actions={
          <>
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact()}>
              Discuss Your Sector <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link className="ea-btn ea-btn--ghost" to="/services">
              See All Services
            </Link>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'East Africa', to: '/' }, { label: 'Industries' }]} />}
      />

      <div className="svc-index">
        <div className="ea-wrap">
          <ul>
            {SECTORS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.short}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Section>
        <SectionHead eyebrow="Sector Focus" title="Eight sectors, one standard of evidence.">
          <p>
            The method changes with the asset; the reporting does not. Every sector below is worked
            by the same regional crews to the same codes, so a result from a sugar mill reads the
            same way as a result from a pipeline spread.
          </p>
        </SectionHead>

        {SECTORS.map((s, i) => (
          <div id={s.id} key={s.id} className="svc-anchor">
            <EditorialRow
              index={i}
              eyebrow={s.eyebrow}
              title={s.title}
              points={s.points}
              media={
                <Media src={s.image} alt={s.alt} mark={s.panelMark} title={s.panelTitle} />
              }
              cta={
                s.slug ? (
                  <Link to={`/applications/${s.slug}`} className="ea-btn ea-btn--navy">
                    Sector detail <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="ea-btn ea-btn--navy"
                    onClick={() => onOpenContact(s.eyebrow)}
                  >
                    Enquire about this sector <ChevronRight size={16} aria-hidden="true" />
                  </button>
                )
              }
            >
              {s.body.map((p) => (
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
            <h2>Your sector, your shutdown window.</h2>
            <p>
              Tell us the asset, the access and the code being worked to. The regional office comes
              back with a scope and a crew plan against your programme.
            </p>
          </div>
          <div className="svc-close__actions">
            <Link to="/case-studies" className="ea-btn ea-btn--primary">
              See Regional Projects <ChevronRight size={16} aria-hidden="true" />
            </Link>
            <button type="button" className="ea-btn ea-btn--ghost" onClick={() => onOpenContact()}>
              Talk to the Regional Office
            </button>
          </div>
        </div>
      </Section>

      <Style>{`
        .ind-page .svc-index ul{justify-content:space-between}
        .ind-page .svc-index a{padding:15px 14px 12px}
      `}</Style>
    </Page>
  );
}
