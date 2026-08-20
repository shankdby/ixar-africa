import React from 'react';
import { MapPin, ShieldCheck, Plane, ChevronRight } from 'lucide-react';

/* The regional footprint, stated accurately.

   The previous version listed staffed offices with street addresses, phone
   numbers and email addresses in South Africa, Nigeria, Ghana, Kenya and
   Mozambique. None of that is supported. Section 3 of the content plan is
   explicit: Mozambique "carries the same status as any other African country.
   Adding it would be a claim the page cannot support." The same reasoning
   applies to the rest.

   Three honest tiers: registered offices, countries served, mobilisation on
   request. */

const TIERS = [
  {
    key: 'registered',
    icon: MapPin,
    label: 'Registered offices',
    blurb: 'A registered legal entity, with equipment and personnel based in country.',
    entries: [
      {
        country: 'Uganda',
        city: 'Kampala',
        detail:
          'Plot No. 72, Kanjokya Street, Kamwokya, P.O. Box 28673 Nakawa, Kampala.',
        note: 'From site signage, to be confirmed.',
        licence: 'Uganda Atomic Energy Council',
      },
      {
        country: 'Tanzania',
        city: 'Office location to be confirmed',
        detail: 'Registered entity operating in country; address pending confirmation.',
        note: 'Address to be confirmed.',
        licence: 'Tanzania Atomic Energy Commission',
      },
    ],
  },
  {
    key: 'served',
    icon: ShieldCheck,
    label: 'Countries served',
    blurb: 'Work delivered in country, mobilised from the regional offices.',
    entries: [
      {
        country: 'Kenya',
        city: 'Served from the region',
        detail:
          'Inspection work delivered on client sites, crewed and equipped from Uganda and Tanzania.',
        note: 'Radiation authorisation status in Kenya to be confirmed.',
        licence: null,
      },
    ],
  },
  {
    key: 'mobilisation',
    icon: Plane,
    label: 'Mobilisation on request',
    blurb: 'The remainder of the continent.',
    entries: [
      {
        country: 'Rest of Africa',
        city: 'By arrangement',
        detail:
          'Crews and equipment can be mobilised outside the region on a project basis. Cross-border movement of sealed sources is subject to the licences held in each jurisdiction.',
        note: null,
        licence: null,
      },
    ],
  },
];

export default function RegionalFootprint({ onOpenContact }) {
  return (
    <section className="section footprint-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Footprint</div>
          <h2 className="section-title">Where We Operate</h2>
          <p className="section-subtitle">
            Stated by tier, so a prospect can tell the difference between a country where IXAR
            holds a registration and one it can mobilise to.
          </p>
        </div>

        <div className="footprint-tiers">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.key} className={`footprint-tier tier-${tier.key}`}>
                <div className="tier-head">
                  <span className="tier-icon"><Icon size={20} aria-hidden="true" /></span>
                  <div>
                    <h3 className="tier-label">{tier.label}</h3>
                    <p className="tier-blurb">{tier.blurb}</p>
                  </div>
                </div>

                <div className="tier-entries">
                  {tier.entries.map((e) => (
                    <article key={e.country} className="clean-card entry-card">
                      <h4 className="entry-country">{e.country}</h4>
                      <p className="entry-city">{e.city}</p>
                      <p className="entry-detail">{e.detail}</p>
                      {e.licence && (
                        <p className="entry-licence">
                          <ShieldCheck size={14} aria-hidden="true" />
                          Licensed by the {e.licence}
                        </p>
                      )}
                      {e.note && <p className="entry-note"><span className="chip">{e.note}</span></p>}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="footprint-cta">
          <div>
            <h3>Working somewhere else in Africa?</h3>
            <p>Tell us the scope and location and we will confirm what can be mobilised.</p>
          </div>
          <button onClick={() => onOpenContact()} className="btn btn-primary">
            <span>Request a Quote</span>
            <ChevronRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>

      <style>{`
        .footprint-tiers { display: flex; flex-direction: column; gap: 44px; }
        .footprint-tier { border-top: 3px solid var(--line); padding-top: 26px; }
        .footprint-tier.tier-registered { border-top-color: var(--brand); }
        .footprint-tier.tier-served { border-top-color: rgba(222, 6, 3, 0.35); }

        .tier-head { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
        .tier-icon {
          width: 46px;
          height: 46px;
          flex: none;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-light);
          color: var(--brand);
        }
        .tier-label { font-size: 1.25rem; color: var(--navy); }
        .tier-blurb { color: var(--text-dim); font-size: 0.9375rem; margin-top: 4px; }

        .tier-entries { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .tier-mobilisation .tier-entries { grid-template-columns: 1fr; }

        .entry-country { font-size: 1.15rem; color: var(--navy); margin-bottom: 2px; }
        .entry-city {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 14px;
        }
        .entry-detail { font-size: 0.9375rem; line-height: 1.65; }
        .entry-licence {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid var(--line);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--navy);
        }
        .entry-licence svg { color: var(--brand); flex: none; }
        .entry-note { margin-top: 12px; font-size: 0.85rem; line-height: 1.6; }

        .footprint-cta {
          margin-top: 56px;
          padding: 34px;
          background: var(--navy);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          flex-wrap: wrap;
        }
        .footprint-cta h3 { color: #fff; font-size: 1.3rem; }
        .footprint-cta p { color: rgba(255, 255, 255, 0.76); margin-top: 6px; }

        @media (max-width: 767px) {
          .tier-entries { grid-template-columns: 1fr; }
          .footprint-cta { padding: 26px 22px; }
          .footprint-cta .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
