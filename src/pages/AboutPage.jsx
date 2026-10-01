import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, MapPin, ShieldCheck } from 'lucide-react';
import Style from '../components/Style';
import AppImage from '../components/AppImage';
import {
  Page, Section, SectionHead, PageHero, Crumbs, PageIndex, CloseBand, Chips, StatStrip,
} from '../components/ui';
import {
  ENTITY, TAGLINE, WHO_WE_ARE, KEY_STATS, LEADERSHIP, LICENCES_LEAD, LICENCES,
  FOUNDER, TIMELINE, AWARDS, PEOPLE, TRAINING_ROUTES, OFFICES, BY_COUNTRY, GROUP_PRESENCE,
} from '../content/company';

/* About Us.
 *
 * IXAR Africa's own page about itself - who the company is, who leads it,
 * what it is licensed to do, where it comes from, how it trains its people
 * and where it works. Every line is from the 2026 Company Profile (see
 * src/content/company.js for page references).
 *
 * It absorbs two pages that used to sit under the old "Africa" menu:
 *   /training  -> #training   (training routes; certificate checks go to the office)
 *   /network   -> #offices    (offices and licensing by jurisdiction)
 * Both old addresses redirect here, so a shared link still lands.
 */

const INDEX = [
  { id: 'who', label: 'Who We Are' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'licences', label: 'Licences' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'training', label: 'People & Training' },
  { id: 'offices', label: 'Where We Operate' },
];

const AT_A_GLANCE = [
  ['Company', ENTITY],
  ['In Africa since', '2012, Kampala'],
  ['Offices', 'Kampala · Dar es Salaam · Mozambique'],
  ['Projects delivered', 'Uganda · Tanzania · Kenya'],
  ['Group', 'IXAR, founded in Mumbai in 1969'],
];

export default function AboutPage({ onOpenContact }) {
  return (
    <Page className="ab-page">
      <PageHero
        eyebrow="About IXAR Africa"
        title="East Africa's NDT partner."
        sub="Industrial X-Ray and Allied Radiographers (EA) Ltd has delivered non-destructive testing and industrial inspection on the continent since 2012, with a group record behind every crew that goes back to 1969."
        image="/images/east-africa/ea-office-kampala.webp"
        imageAlt="The IXAR Africa team, Uganda"
        actions={
          <>
            <Link className="ea-btn ea-btn--primary" to="/contact">
              Contact Us <ChevronRight size={16} aria-hidden="true" />
            </Link>
            <a className="ea-btn ea-btn--ghost" href="/downloads/IXAR-Company-Profile.pdf" download>
              <Download size={16} aria-hidden="true" /> Company Profile (PDF)
            </a>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />}
      />

      <PageIndex items={INDEX} />

      {/* ============ WHO WE ARE ============ */}
      <Section id="who">
        <div className="ab-who">
          <div className="ab-who__copy ea-rev">
            <span className="ea-eyebrow">{TAGLINE}</span>
            <h2 className="ea-sec-title ab-who__title">{WHO_WE_ARE.title}</h2>
            <span className="ea-rule" aria-hidden="true" />
            {WHO_WE_ARE.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>

          <aside className="ab-who__side ea-rev">
            <figure className="ab-vision">
              <blockquote>
                Our vision: to be the world&rsquo;s premier{' '}
                <span>full-service NDT company</span>, focused on innovative technology and
                customer satisfaction.
              </blockquote>
              <figcaption>IXAR Group vision</figcaption>
            </figure>

            <dl className="ab-glance">
              {AT_A_GLANCE.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <section className="co-stats" aria-label="IXAR Africa in numbers">
        <div className="ea-wrap">
          <StatStrip stats={KEY_STATS} />
        </div>
      </section>

      {/* ============ LEADERSHIP ============ */}
      <Section id="leadership">
        <SectionHead eyebrow="Leadership" title="Directors, Africa region.">
          <p>
            IXAR Africa is led from Kampala, with the group&rsquo;s equipment, specialists and
            written practices a call away whenever a project needs them.
          </p>
        </SectionHead>

        <div className="co-grid2">
          {LEADERSHIP.map((l) => (
            <article className="ab-leader ea-rev" key={l.name}>
              <header className="ab-leader__head">
                <span className="ab-leader__badge" aria-hidden="true">{l.initials}</span>
                <ul className="ab-leader__meta">
                  {l.meta.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </header>
              <h3>{l.name}</h3>
              <span className="ab-leader__role">{l.role}</span>
              {l.bio.map((b) => <p key={b.slice(0, 30)}>{b}</p>)}
              <ul className="ab-leader__points">
                {l.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ============ LICENCES ============ */}
      <Section id="licences" tone="tint">
        <div className="co-split ea-rev">
          <div>
            <span className="co-split__num">Cleared to work</span>
            <h2>Licences, approvals &amp; compliance.</h2>
            <span className="ea-rule" aria-hidden="true" />
          </div>
          <div className="co-split__copy">
            <p className="co-split__lead">{LICENCES_LEAD.title}</p>
            <p>{LICENCES_LEAD.body}</p>
          </div>
        </div>

        <div className="co-grid4">
          {LICENCES.map((l) => (
            <article className="ab-lic ea-rev" key={l.title}>
              <span className="ab-lic__num">{l.num}</span>
              <h3>{l.title}</h3>
              <p>{l.body}</p>
              <Chips items={l.chips} />
            </article>
          ))}
        </div>
      </Section>

      {/* ============ HERITAGE ============ */}
      <Section id="heritage">
        <div className="co-split ea-rev">
          <div>
            <span className="co-split__num">The group behind the continent</span>
            <h2>55+ years of NDT heritage.</h2>
            <span className="ea-rule" aria-hidden="true" />
          </div>
          <div className="co-split__copy">
            <p className="co-split__lead">IXAR began in Mumbai in 1969, in radiography.</p>
            <p>
              Five decades on, the group runs the full range of NDT methods, a destructive
              testing laboratory and a BARC-collaborative training institute. IXAR Africa was
              established in 2012, and draws on all of it.
            </p>
          </div>
        </div>

        <div className="ab-heritage">
          <figure className="ab-founder ea-rev">
            <div className="ab-founder__frame">
              <AppImage src={FOUNDER.image} alt={`Portrait of the ${FOUNDER.name}`} />
            </div>
            <figcaption>
              <b>{FOUNDER.name}</b>
              <span>{FOUNDER.years}</span>
            </figcaption>
          </figure>

          <ol className="ab-timeline ea-rev">
            {TIMELINE.map((t) => (
              <li key={t.year} className={t.africa ? 'is-africa' : undefined}>
                <span className="ab-timeline__year">{t.year}</span>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>

          <ul className="ab-awards ea-rev">
            {AWARDS.map((a) => (
              <li key={a.title}>
                <div className="ab-awards__img">
                  <AppImage src={a.image} alt={`${a.title}, ${a.meta}`} />
                </div>
                <b>{a.title}</b>
                <span>{a.meta}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ============ PEOPLE & TRAINING ============ */}
      <Section id="training" tone="tint">
        <SectionHead eyebrow="Our people & training" title="Our strength lies in our technicians.">
          <p>
            Qualified, experienced and safety-led &mdash; and trained through a programme the group
            has run since 1969.
          </p>
        </SectionHead>

        <div className="ab-people">
          <figure className="ab-people__media ea-rev">
            <AppImage
              src="/images/east-africa/ea-svc-mpi-lpt.webp"
              alt="IXAR Africa technicians at work on a pipe spool, Uganda"
            />
          </figure>
          <div className="ab-people__cols">
            {PEOPLE.map((p, i) => (
              <div className="ab-people__item ea-rev" key={p.title}>
                <span className="ab-people__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="ab-sub ea-rev">Training routes</h3>
        <div className="co-grid3">
          {TRAINING_ROUTES.map((r) => (
            <article className="ab-route ea-rev" key={r.title}>
              <span className="co-kicker">{r.tag}</span>
              <h4>{r.title}</h4>
              <p>{r.body}</p>
              <button
                type="button"
                className="co-more ab-route__btn"
                onClick={() => onOpenContact(r.scope)}
              >
                Enquire <ChevronRight size={14} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        <p className="ab-verify ea-rev">
          <ShieldCheck size={17} aria-hidden="true" />
          <span>
            <b>Checking an IXAR certificate?</b> Send the certificate number and the holder&rsquo;s
            name and the office will confirm in writing whether it is current and what it covers.{' '}
            <button type="button" onClick={() => onOpenContact('Certificate verification')}>
              Ask for a certificate check
            </button>
          </span>
        </p>
      </Section>

      {/* ============ WHERE WE OPERATE ============ */}
      <Section id="offices">
        <div className="ab-ops">
          <div className="ab-ops__copy ea-rev">
            <span className="ea-eyebrow">Based in the region, not flown in</span>
            <h2 className="ea-sec-title">
              Registered offices in East Africa, projects completed in three countries.
            </h2>
            <span className="ea-rule" aria-hidden="true" />
            <p>
              Crews, equipment and sealed sources mobilise to site from within Africa. Wherever the
              next project is &mdash; from the Albertine Graben along the EACOP route to the coast
              of Mombasa &mdash; IXAR Africa can mobilise on request across the continent.
            </p>
            <div className="co-tiles ab-ops__tiles">
              {BY_COUNTRY.slice(0, 3).map((c) => (
                <div className="co-tile" key={c.code}>
                  <b>{c.n}</b>
                  <span>projects in {c.label}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="co-more">
              Office contacts <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="ab-ops__grid">
            {OFFICES.map((o) => (
              <article className={`ab-office ab-office--${o.tier} ea-rev`} key={o.id}>
                <span className="ab-office__kind">{o.kind}</span>
                <h3>{o.name}</h3>
                <p>{o.body}</p>
                {o.licence && (
                  <p className="ab-office__lic">
                    <ShieldCheck size={14} aria-hidden="true" /> {o.licence}
                  </p>
                )}
              </article>
            ))}
            <div className="ab-group ea-rev">
              <span className="ab-group__label">IXAR Group international presence</span>
              <p className="ab-group__list">
                <MapPin size={15} aria-hidden="true" />
                {GROUP_PRESENCE.join(' · ')}
              </p>
              <p>
                Group specialists, equipment and written practices are available to African
                projects whenever the scope requires it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CloseBand
        eyebrow="Work with us"
        title="Let's build safer, more reliable operations."
        actions={
          <>
            <Link to="/contact" className="ea-btn ea-btn--primary">
              Contact Us <ChevronRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/services" className="ea-btn ea-btn--ghost">
              Our Services
            </Link>
          </>
        }
      >
        <p>
          Tell us the asset, the scope and the standard you work to, and the Kampala regional
          office will come back with crews, methods and a written proposal.
        </p>
      </CloseBand>

      <Style>{`
        /* ---- who we are ---- */
        .ab-who{display:grid;grid-template-columns:1.18fr .82fr;gap:64px;align-items:start}
        .ab-who__title{font-size:clamp(1.7rem,2.8vw,2.3rem);line-height:1.16;max-width:640px}
        .ab-who__copy .ea-rule{margin-bottom:26px}
        .ab-who__copy p{font-size:16.5px;line-height:1.75;color:var(--ea-body)}
        .ab-vision{margin:0;background:var(--ea-navy);color:#FFFFFF;padding:34px 32px 30px;position:relative}
        .ab-vision::before{content:'';position:absolute;left:0;top:0;width:64px;height:4px;background:var(--ea-brand)}
        .ab-vision blockquote{margin:0;font-size:20px;font-weight:700;line-height:1.42;color:#FFFFFF}
        .ab-vision blockquote span{color:#FF5A57}
        .ab-vision figcaption{margin-top:16px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.6)}
        .ab-glance{margin:22px 0 0;border:1px solid var(--ea-line);background:#FFFFFF}
        .ab-glance div{display:grid;grid-template-columns:132px 1fr;gap:14px;padding:14px 20px;border-bottom:1px solid var(--ea-line)}
        .ab-glance div:last-child{border-bottom:0}
        .ab-glance dt{font-size:11.5px;font-weight:800;letter-spacing:.11em;text-transform:uppercase;color:var(--ea-body-soft);padding-top:2px}
        .ab-glance dd{margin:0;font-size:14.5px;font-weight:700;line-height:1.45;color:var(--ea-navy)}

        /* ---- leadership ---- */
        .ab-leader{background:var(--ea-tint);border:1px solid var(--ea-line);padding:34px 34px 30px;height:100%}
        .ab-leader__head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:22px}
        .ab-leader__badge{
          width:84px;height:84px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;
          background:var(--ea-brand);color:#FFFFFF;font-size:24px;font-weight:800;letter-spacing:.04em;
        }
        .ab-leader__meta{text-align:right;font-size:12px;line-height:1.6;color:var(--ea-body-soft)}
        .ab-leader h3{font-size:26px;font-weight:800;color:var(--ea-navy);margin:0 0 6px}
        .ab-leader__role{display:block;font-size:12.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--ea-brand);margin-bottom:18px}
        .ab-leader p{font-size:15px;line-height:1.72;color:var(--ea-body)}
        .ab-leader__points{margin:22px 0 0;border-top:1px solid var(--ea-line)}
        .ab-leader__points li{position:relative;padding:11px 0 11px 22px;border-bottom:1px solid var(--ea-line);font-size:13.5px;line-height:1.5;color:var(--ea-navy)}
        .ab-leader__points li:last-child{border-bottom:0}
        .ab-leader__points li::before{content:'';position:absolute;left:0;top:19px;width:10px;height:3px;background:var(--ea-brand)}

        /* ---- licences ---- */
        .ab-lic{display:flex;flex-direction:column;gap:0;height:100%;background:#FFFFFF;border:1px solid var(--ea-line);border-top:4px solid var(--ea-brand);padding:28px 24px 26px;box-shadow:var(--ea-shadow);transition:transform .26s ease,box-shadow .26s ease}
        .ab-lic:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift)}
        .ab-lic__num{font-size:12px;font-weight:800;letter-spacing:.16em;color:var(--ea-brand);margin-bottom:12px}
        .ab-lic h3{font-size:19px;font-weight:800;line-height:1.26;color:var(--ea-navy);margin:0 0 12px}
        .ab-lic p{font-size:14.2px;line-height:1.66;color:var(--ea-body);margin:0 0 20px}
        .ab-lic .co-chips{margin-top:auto}

        /* ---- heritage ---- */
        .ab-heritage{display:grid;grid-template-columns:220px 1fr 1fr;gap:48px;align-items:start}
        .ab-founder{margin:0}
        .ab-founder__frame{padding:8px;background:linear-gradient(145deg,#C9A452,#7A5A1E);box-shadow:var(--ea-shadow)}
        .ab-founder__frame img{width:100%;aspect-ratio:546/705;object-fit:cover}
        .ab-founder figcaption{margin-top:14px}
        .ab-founder b{display:block;font-size:16px;font-weight:800;color:var(--ea-navy)}
        .ab-founder span{font-size:13px;color:var(--ea-body-soft)}
        .ab-timeline{list-style:none;margin:0;padding:0;position:relative}
        .ab-timeline::before{content:'';position:absolute;left:8px;top:6px;bottom:6px;width:2px;background:var(--ea-line)}
        .ab-timeline li{position:relative;padding:0 0 22px 36px}
        .ab-timeline li:last-child{padding-bottom:0}
        .ab-timeline li::before{content:'';position:absolute;left:0;top:3px;width:18px;height:18px;border-radius:50%;background:#FFFFFF;border:3px solid var(--ea-brand)}
        .ab-timeline li.is-africa::before{background:var(--ea-brand)}
        .ab-timeline__year{display:block;font-size:15px;font-weight:800;color:var(--ea-brand);margin-bottom:3px}
        .ab-timeline p{font-size:14.5px;line-height:1.6;color:var(--ea-body);margin:0}
        .ab-timeline li.is-africa p{font-weight:700;color:var(--ea-navy)}
        .ab-awards{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:0;padding:0;list-style:none}
        .ab-awards li{background:var(--ea-tint);border:1px solid var(--ea-line);padding:16px 14px 16px;text-align:center}
        .ab-awards__img{height:128px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;background:#FFFFFF}
        .ab-awards__img img{max-height:118px;width:auto;max-width:100%;object-fit:contain}
        .ab-awards b{display:block;font-size:13.5px;font-weight:800;color:var(--ea-navy)}
        .ab-awards span{font-size:12.5px;color:var(--ea-body-soft)}

        /* ---- people & training ---- */
        .ab-people{display:grid;grid-template-columns:1fr 1.15fr;gap:48px;align-items:stretch;margin-bottom:64px}
        .ab-people__media{margin:0;min-height:100%;overflow:hidden;box-shadow:var(--ea-shadow-lift)}
        .ab-people__media img{width:100%;height:100%;object-fit:cover;min-height:340px}
        .ab-people__cols{display:flex;flex-direction:column;gap:26px;justify-content:center}
        .ab-people__item{border-top:3px solid var(--ea-brand);padding-top:18px}
        .ab-people__num{display:block;font-size:12px;font-weight:800;letter-spacing:.14em;color:var(--ea-brand);margin-bottom:8px}
        .ab-people__item h3{font-size:19px;font-weight:800;color:var(--ea-navy);margin:0 0 8px}
        .ab-people__item p{font-size:15px;line-height:1.68;color:var(--ea-body);margin:0}
        .ab-sub{font-size:22px;font-weight:800;color:var(--ea-navy);margin:0 0 22px}
        .ab-route{display:flex;flex-direction:column;height:100%;background:#FFFFFF;border:1px solid var(--ea-line);border-left:4px solid var(--ea-brand);padding:26px 24px}
        .ab-route h4{font-size:18px;font-weight:800;line-height:1.3;color:var(--ea-navy);margin:0 0 10px}
        .ab-route p{font-size:14.5px;line-height:1.65;color:var(--ea-body);margin:0}
        .ab-route__btn{background:none;border:0;padding:18px 0 0;cursor:pointer;font-family:inherit}
        .ab-verify{display:flex;gap:12px;align-items:flex-start;margin:30px 0 0;padding:18px 22px;background:#FFFFFF;border-left:3px solid var(--ea-navy);font-size:14.5px;line-height:1.6;color:var(--ea-body)}
        .ab-verify svg{flex:none;margin-top:2px;color:var(--ea-brand)}
        .ab-verify b{color:var(--ea-navy)}
        .ab-verify button{background:none;border:0;padding:0;font:inherit;font-weight:800;color:var(--ea-brand);cursor:pointer;text-decoration:underline;text-underline-offset:3px}

        /* ---- where we operate ---- */
        .ab-ops{display:grid;grid-template-columns:.92fr 1.08fr;gap:56px;align-items:start}
        .ab-ops__copy .ea-sec-title{font-size:clamp(1.6rem,2.6vw,2.15rem);line-height:1.16}
        .ab-ops__copy .ea-rule{margin-bottom:24px}
        .ab-ops__copy > p{font-size:16px;line-height:1.72;color:var(--ea-body)}
        .ab-ops__tiles{margin:28px 0 22px}
        .ab-ops__grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .ab-office{background:#FFFFFF;border:1px solid var(--ea-line);padding:24px 22px;box-shadow:var(--ea-shadow);display:flex;flex-direction:column}
        .ab-office__kind{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--ea-brand);margin-bottom:10px}
        .ab-office__kind::before{content:'';width:7px;height:7px;border-radius:50%;background:currentColor}
        .ab-office--served .ab-office__kind{color:var(--ea-body-soft)}
        .ab-office h3{font-size:20px;font-weight:800;color:var(--ea-navy);margin:0 0 8px}
        .ab-office p{font-size:14px;line-height:1.6;color:var(--ea-body);margin:0}
        .ab-office__lic{display:flex;align-items:center;gap:7px;margin-top:auto !important;padding-top:14px;font-size:12.5px !important;font-weight:700;color:var(--ea-navy) !important}
        .ab-office__lic svg{color:var(--ea-brand);flex:none}
        .ab-group{grid-column:1 / -1;background:var(--ea-tint);padding:24px 24px 22px}
        .ab-group__label{display:block;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--ea-body-soft);margin-bottom:10px}
        .ab-group__list{display:flex;gap:9px;align-items:flex-start;font-size:16px;font-weight:800;line-height:1.5;color:var(--ea-navy);margin:0 0 8px}
        .ab-group__list svg{flex:none;margin-top:4px;color:var(--ea-brand)}
        .ab-group p:last-child{font-size:14px;line-height:1.6;color:var(--ea-body);margin:0}

        @media (max-width:1100px){
          .ab-heritage{grid-template-columns:200px 1fr;gap:36px}
          .ab-awards{grid-column:1 / -1;grid-template-columns:repeat(4,1fr)}
        }
        @media (max-width:1024px){
          .ab-who,.ab-ops{grid-template-columns:1fr;gap:40px}
          .ab-people{grid-template-columns:1fr;gap:34px}
        }
        @media (max-width:767px){
          .ab-heritage{grid-template-columns:1fr;gap:32px}
          .ab-founder{max-width:220px}
          .ab-awards{grid-template-columns:1fr 1fr}
          .ab-leader{padding:26px 22px}
          .ab-leader__head{flex-direction:column}
          .ab-leader__meta{text-align:left}
          .ab-ops__grid{grid-template-columns:1fr}
          .ab-glance div{grid-template-columns:1fr;gap:4px}
          .ab-vision{padding:28px 24px}
          .ab-vision blockquote{font-size:18px}
        }
      `}</Style>
    </Page>
  );
}
