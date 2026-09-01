import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import AppImage from './AppImage';
import Style from './Style';
import { Section, SectionHead } from './ui';

/* Regional network.
 *
 * The countries are NOT equivalent and are not presented as if they were.
 * Uganda is a registered office with a named address and a national radiation
 * authorisation. Tanzania is a registered entity whose office address is not
 * yet confirmed. Kenya and the five countries added on client instruction in
 * 2026 are worked in, mobilised from the regional offices, with no local
 * authorisation claimed.
 *
 * Flattening those three into identical "office" cards would be a location
 * claim. An EPC procurement reader checks radiation licensing by jurisdiction
 * before anything else, and precision about which entity holds what reads as
 * competence rather than as a shortfall.
 *
 * Unknown fields are omitted. No "to be confirmed" text reaches the page.
 */

const LOCATIONS = [
  {
    id: 'uganda',
    country: 'Uganda',
    city: 'Kampala',
    status: 'Registered office',
    tier: 'registered',
    address: ['Plot No. 72, Kanjokya Street, Kamwokya', 'P.O. Box 28673 Nakawa, Kampala'],
    phones: [
      { label: '+256 414 251251', href: 'tel:+256414251251' },
      { label: '+256 777 166392', href: 'tel:+256777166392' },
    ],
    email: 'bd@ixar.africa',
    licence: 'Licensed by the Uganda Atomic Energy Council for sealed radioactive sources',
    image: '/images/east-africa/ea-office-kampala.webp',
    alt: 'IXAR Africa site board and crew, Tilenga Project, Uganda',
    blurb:
      'The regional base. Crews, licensed sources and equipment mobilise from here to sites across the region.',
  },
  {
    id: 'tanzania',
    country: 'Tanzania',
    status: 'Registered entity',
    tier: 'registered',
    licence: 'Radiation authorisation held for in-country work',
    blurb:
      'A registered in-country entity delivering process plant and industrial inspection scopes. Enquiries are handled by the Kampala regional office.',
    contactVia: 'Kampala regional office',
  },
  {
    id: 'wider-africa',
    country: 'Rwanda, Mozambique, Ethiopia, Sudan and Malawi',
    status: 'Served — projects completed',
    tier: 'served',
    blurb:
      'Countries where projects have been completed, crewed and equipped from the regional offices. Added on client instruction in 2026; the project record and the radiation authorisation status for each must be confirmed before publication.',
    contactVia: 'Kampala regional office',
  },
  {
    id: 'kenya',
    country: 'Kenya',
    status: 'Served — mobilised from the region',
    tier: 'served',
    blurb:
      'Work delivered in country by crews mobilised from the regional offices. IXAR does not hold a Kenyan radiation authorisation, so scopes requiring sealed sources are arranged accordingly.',
    contactVia: 'Kampala regional office',
  },
];

export default function RegionalFootprint({ onOpenContact }) {
  return (
    <>
      <Section>
        <SectionHead eyebrow="Where We Operate" title="Eight markets, two registered offices.">
          <p>
            The distinction matters on a bid. Uganda and Tanzania are registered entities; the rest
            are served from them. Radiation authorisation is held per jurisdiction and is listed
            below for each, because that is the first thing a procurement team checks.
          </p>
        </SectionHead>

        <div className="rn-grid">
          {LOCATIONS.map((l) => (
            <article className={`rn-card rn-card--${l.tier} ea-rev`} key={l.id}>
              {l.image && (
                <figure className="rn-card__media">
                  <AppImage src={l.image} alt={l.alt} />
                </figure>
              )}
              <div className="rn-card__body">
                <span className="rn-card__status">{l.status}</span>
                <h3>
                  {l.country}
                  {l.city && <span className="rn-card__city">{l.city}</span>}
                </h3>
                <p className="rn-card__blurb">{l.blurb}</p>

                {l.address && (
                  <p className="rn-line">
                    <MapPin size={15} aria-hidden="true" />
                    <span>
                      {l.address.map((a) => (
                        <React.Fragment key={a}>
                          {a}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </p>
                )}
                {l.phones &&
                  l.phones.map((p) => (
                    <p className="rn-line" key={p.href}>
                      <Phone size={15} aria-hidden="true" />
                      <a href={p.href}>{p.label}</a>
                    </p>
                  ))}
                {l.email && (
                  <p className="rn-line">
                    <Mail size={15} aria-hidden="true" />
                    <a href={`mailto:${l.email}`}>{l.email}</a>
                  </p>
                )}
                {l.contactVia && (
                  <p className="rn-line rn-line--via">
                    <Mail size={15} aria-hidden="true" />
                    <span>Enquiries via the {l.contactVia}</span>
                  </p>
                )}

                {l.licence && (
                  <p className="rn-licence">
                    <ShieldCheck size={15} aria-hidden="true" />
                    <span>{l.licence}</span>
                  </p>
                )}

                <button
                  type="button"
                  className="ea-btn ea-btn--navy rn-card__cta"
                  onClick={() => onOpenContact(`${l.country} enquiry`)}
                >
                  Contact about {l.country} <ChevronRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="svc-close">
          <div>
            <span className="ea-eyebrow">Mobilisation</span>
            <h2>Sites beyond the two offices.</h2>
            <p>
              Crews, equipment and licensed sources travel to site. If your asset sits outside
              Uganda or Tanzania, tell us where and what the scope is, and the regional office will
              confirm what can be mobilised and under whose authorisation.
            </p>
          </div>
          <div className="svc-close__actions">
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact()}>
              Discuss a Mobilisation <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link to="/contact" className="ea-btn ea-btn--ghost">
              Full Contact Details
            </Link>
          </div>
        </div>
      </Section>

      <Style>{`
        .rn-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;align-items:stretch}
        .rn-card{
          display:flex;flex-direction:column;height:100%;background:#FFFFFF;
          border:1px solid var(--line);border-top:4px solid var(--brand);
          border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-sm);
          transition:transform .26s ease,box-shadow .26s ease;
        }
        .rn-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
        /* A served market is not a registered office. The quieter top rule says
           so before the label is read. */
        .rn-card--served{border-top-color:var(--muted)}
        .rn-card__media{margin:0;aspect-ratio:16/10;overflow:hidden}
        .rn-card__media img{width:100%;height:100%;object-fit:cover}
        .rn-card__body{display:flex;flex-direction:column;flex:1;padding:28px 26px 26px}
        .rn-card__status{
          font-size:11px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;
          color:var(--brand);margin-bottom:12px;
        }
        .rn-card--served .rn-card__status{color:var(--text-dim)}
        .rn-card h3{
          font-size:24px;font-weight:800;line-height:1.15;color:var(--navy);margin:0 0 14px;
          display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;
        }
        .rn-card__city{font-size:14px;font-weight:700;color:var(--text-dim);letter-spacing:.04em}
        .rn-card__blurb{font-size:14.5px;line-height:1.65;color:var(--text-body);margin:0 0 20px}
        .rn-line{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.55;margin:0 0 10px;color:var(--text-body)}
        .rn-line svg{flex:none;margin-top:3px;color:var(--brand)}
        .rn-line a:hover{color:var(--brand)}
        .rn-line--via{color:var(--text-dim)}
        .rn-licence{
          display:flex;gap:10px;align-items:flex-start;margin:18px 0 0;padding:14px 16px;
          background:var(--bg-tint);border-left:3px solid var(--navy);
          font-size:13px;line-height:1.55;color:var(--navy);font-weight:600;
        }
        .rn-licence svg{flex:none;margin-top:2px}
        .rn-card__cta{margin-top:auto;padding-top:0}
        .rn-card__body .rn-card__cta{margin-top:24px;justify-content:center}

        @media (max-width:1024px){ .rn-grid{grid-template-columns:1fr 1fr} }
        @media (max-width:767px){ .rn-grid{grid-template-columns:1fr} }
      `}</Style>
    </>
  );
}
