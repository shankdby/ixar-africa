import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Wrench } from 'lucide-react';
import Style from '../components/Style';
import AppImage from '../components/AppImage';
import {
  Page, Section, PageHero, Crumbs, PageIndex, CloseBand, Chips, SectionHead,
} from '../components/ui';
import { SERVICE_LIST, CAPABILITIES, MORE_SERVICES, EQUIPMENT } from '../content/company';

/* Services.
 *
 * Rebuilt from the Company Profile's own structure: the sixteen services it
 * lists (brochure p.5), then its six capability spreads (pp.6-11), each with
 * the brochure's three subjects, photographs and tags. The four services the
 * brochure lists without a spread close the page, followed by equipment
 * supply - which used to be its own page at /products and now redirects here.
 *
 * The method pages under /services/* are unchanged; capability sections link
 * to them where one exists.
 */

const INDEX = [
  { id: 'all', label: 'All Services' },
  ...CAPABILITIES.map((c) => ({ id: c.id, label: c.short })),
  { id: 'more', label: 'Also Delivered' },
  { id: 'equipment', label: 'Equipment' },
];

/* A line in the service list leads either to a section of this page or to a
   method page. Fragments stay plain anchors so the jump is instant. */
function ServiceLink({ to, children }) {
  if (to.startsWith('#')) return <a href={to}>{children}</a>;
  return <Link to={to}>{children}</Link>;
}

export default function ServicesPage({ onOpenContact }) {
  return (
    <Page className="sv-page">
      <PageHero
        eyebrow="Our Services"
        title="Sixteen NDT services. One regional team."
        sub="Radiography, ultrasonics, pigging, tank and vessel inspection, surface methods and laboratory testing, delivered by licensed crews based in East Africa, with the IXAR group's specialists and equipment behind them."
        image="/images/east-africa/ea-svc-advanced-ut.webp"
        imageAlt="IXAR Africa technicians preparing an ultrasonic inspection, Uganda"
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
        crumbs={<Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />}
      />

      <PageIndex items={INDEX} />

      {/* ============ ALL SERVICES ============ */}
      <Section id="all">
        <div className="sv-all">
          <div>
            <SectionHead eyebrow="Capability" title="Services we offer.">
              <p>
                Every service below is delivered by IXAR Africa crews out of the regional offices.
                Where a scope needs more, the group&rsquo;s specialists and equipment fleet are
                brought in under the same management.
              </p>
            </SectionHead>
            <ol className="sv-list">
              {SERVICE_LIST.map((s) => (
                <li key={s.num} className="ea-rev">
                  <ServiceLink to={s.to}>
                    <span className="sv-list__num">{s.num}</span>
                    <span className="sv-list__title">{s.title}</span>
                    <ArrowRight size={15} aria-hidden="true" className="sv-list__go" />
                  </ServiceLink>
                </li>
              ))}
            </ol>
          </div>
          <figure className="sv-all__media ea-rev">
            <AppImage
              src="/images/east-africa/ea-svc-visual-leak.webp"
              alt="IXAR Africa technicians on a site compound, Uganda"
            />
            <figcaption>IXAR Africa technicians on site, Uganda</figcaption>
          </figure>
        </div>
      </Section>

      {/* ============ SIX CAPABILITY SPREADS ============ */}
      {CAPABILITIES.map((c, i) => (
        <Section key={c.id} id={c.id} tone={i % 2 === 0 ? 'tint' : 'white'}>
          <div className="co-split ea-rev">
            <div>
              <span className="co-split__num">
                {String(i + 1).padStart(2, '0')} &middot; {c.eyebrow}
              </span>
              <h2>{c.title}</h2>
              <span className="ea-rule" aria-hidden="true" />
            </div>
            <div className="co-split__copy">
              <p className="co-split__lead">{c.lead}</p>
              <p>{c.body}</p>
              {c.more && (
                <Link to={c.more.to} className="co-split__more">
                  {c.more.label} <ChevronRight size={14} aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>

          <div className="co-grid3">
            {c.cards.map((card) => (
              <article className="co-pcard ea-rev" key={card.title}>
                <div className="co-pcard__media">
                  <AppImage src={card.image} alt={card.alt} />
                </div>
                <div className="co-pcard__body">
                  <span className="co-kicker">{card.kicker}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  {card.to && (
                    <Link to={card.to} className="co-more">
                      Method detail <ChevronRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          {c.chips && <Chips items={c.chips} on={1} className="sv-chips ea-rev" />}
        </Section>
      ))}

      {/* ============ ALSO DELIVERED ============ */}
      <Section id="more">
        <SectionHead eyebrow="Also delivered" title="Specialist services, on the same contract.">
          <p>
            Four services from the list above that run alongside the main inspection scope, so a
            project closes out with one contractor rather than several.
          </p>
        </SectionHead>
        <div className="co-grid4">
          {MORE_SERVICES.map((m) => (
            <article className="sv-more ea-rev" key={m.num}>
              <span className="sv-more__num">{m.num}</span>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              {m.to ? (
                <Link to={m.to} className="co-more">
                  Method detail <ChevronRight size={14} aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  className="co-more sv-more__btn"
                  onClick={() => onOpenContact(m.title)}
                >
                  Enquire <ChevronRight size={14} aria-hidden="true" />
                </button>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* ============ EQUIPMENT ============ */}
      <Section id="equipment" tone="tint">
        <div className="sv-eq">
          <div className="sv-eq__copy ea-rev">
            <span className="ea-eyebrow">16 &middot; Equipment supply &amp; maintenance</span>
            <h2 className="ea-sec-title">NDT equipment, specified properly.</h2>
            <span className="ea-rule" aria-hidden="true" />
            <p>
              Radiography, ultrasonic and surface-method equipment, radiation safety instruments,
              calibration standards and consumables, with servicing and calibration to keep a
              crew&rsquo;s kit in date.
            </p>
            <p>
              No prices are published. Specification depends on the material, the code being
              worked to and the licensing conditions where the equipment will be used, so every
              line goes to a written quotation.
            </p>
            <button
              type="button"
              className="ea-btn ea-btn--primary"
              onClick={() => onOpenContact('Equipment enquiry')}
            >
              Request a Quotation <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
          <ul className="sv-eq__grid">
            {EQUIPMENT.map((e) => (
              <li key={e.title} className="ea-rev">
                <Wrench size={18} aria-hidden="true" />
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.items}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CloseBand
        eyebrow="Next step"
        title="Tell us what needs inspecting."
        actions={
          <>
            <Link to="/estimator" className="ea-btn ea-btn--primary">
              Build an Inspection Scope <ChevronRight size={16} aria-hidden="true" />
            </Link>
            <button type="button" className="ea-btn ea-btn--ghost" onClick={() => onOpenContact()}>
              Talk to the Regional Office
            </button>
          </>
        }
      >
        <p>
          Scope, access, shutdown window and the standard being worked to. A written proposal comes
          back from the Kampala regional office against your specification.
        </p>
      </CloseBand>

      <Style>{`
        /* Nine entries in the section index: tighter than the shared default
           so all nine fit at desktop width. */
        .sv-page .svc-index a{padding-left:10px;padding-right:10px}

        /* ---- all services ---- */
        .sv-all{display:grid;grid-template-columns:1.25fr .75fr;gap:60px;align-items:stretch}
        .sv-all .ea-sec-head{margin-bottom:34px}
        .sv-list{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;column-gap:34px}
        .sv-list a{
          display:grid;grid-template-columns:34px 1fr 16px;align-items:center;gap:6px;
          padding:15px 0;border-bottom:1px solid var(--ea-line);
          font-size:15px;font-weight:700;line-height:1.35;color:var(--ea-navy);
          transition:color .2s ease,padding .2s ease;
        }
        .sv-list a:hover{color:var(--ea-brand);padding-left:6px}
        .sv-list__num{font-size:12px;font-weight:800;color:var(--ea-brand);letter-spacing:.04em}
        .sv-list__go{opacity:0;color:var(--ea-brand);transition:opacity .2s ease,transform .2s ease}
        .sv-list a:hover .sv-list__go{opacity:1;transform:translateX(3px)}
        .sv-all__media{margin:0;position:relative;overflow:hidden;box-shadow:var(--ea-shadow-lift);min-height:420px}
        .sv-all__media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .sv-all__media figcaption{
          position:absolute;left:0;right:0;bottom:0;padding:44px 22px 18px;
          background:linear-gradient(180deg,transparent,rgba(11,14,18,.82));
          color:#FFFFFF;font-size:12.5px;font-weight:700;letter-spacing:.04em;
        }

        /* ---- capability chips ---- */
        .sv-chips{margin-top:34px;padding-top:26px;border-top:1px solid var(--ea-line)}

        /* ---- also delivered ---- */
        .sv-more{display:flex;flex-direction:column;height:100%;background:#FFFFFF;border:1px solid var(--ea-line);border-top:4px solid var(--ea-brand);padding:26px 22px 24px;box-shadow:var(--ea-shadow);transition:transform .26s ease,box-shadow .26s ease}
        .sv-more:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift)}
        .sv-more__num{font-size:30px;font-weight:800;line-height:1;color:var(--ea-line);margin-bottom:16px;letter-spacing:-.02em}
        .sv-more h3{font-size:18px;font-weight:800;line-height:1.3;color:var(--ea-navy);margin:0 0 10px}
        .sv-more p{font-size:14.2px;line-height:1.64;color:var(--ea-body);margin:0}
        .sv-more__btn{background:none;border:0;cursor:pointer;font-family:inherit;padding-left:0;padding-right:0;padding-bottom:0}

        /* ---- equipment ---- */
        .sv-eq{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:start}
        .sv-eq__copy .ea-rule{margin-bottom:24px}
        .sv-eq__copy p{font-size:16px;line-height:1.72;color:var(--ea-body)}
        .sv-eq__copy .ea-btn{margin-top:10px}
        .sv-eq__grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;list-style:none;margin:0;padding:0}
        .sv-eq__grid li{display:flex;gap:14px;align-items:flex-start;background:#FFFFFF;border:1px solid var(--ea-line);padding:20px 20px 18px}
        .sv-eq__grid svg{flex:none;color:var(--ea-brand);margin-top:2px}
        .sv-eq__grid h3{font-size:16px;font-weight:800;color:var(--ea-navy);margin:0 0 6px}
        .sv-eq__grid p{font-size:13.5px;line-height:1.55;color:var(--ea-body);margin:0}

        @media (max-width:1024px){
          .sv-all{grid-template-columns:1fr;gap:38px}
          .sv-all__media{min-height:320px}
          .sv-eq{grid-template-columns:1fr;gap:36px}
        }
        @media (max-width:767px){
          .sv-list{grid-template-columns:1fr}
          .sv-eq__grid{grid-template-columns:1fr}
          .sv-all__media{min-height:260px}
        }
      `}</Style>
    </Page>
  );
}
