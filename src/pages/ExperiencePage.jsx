import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, MapPin, FileText } from 'lucide-react';
import Style from '../components/Style';
import AppImage from '../components/AppImage';
import {
  Page, Section, SectionHead, PageHero, Crumbs, PageIndex, CloseBand, StatStrip,
} from '../components/ui';
import { INDUSTRIES, RECORD_STATS, FLAGSHIP, FIELD, CLIENT_LIST, BY_COUNTRY } from '../content/company';

/* Experience.
 *
 * Industries served, the flagship projects, the work as photographed on site,
 * and the clients - the brochure's sector and track-record pages (pp.12-14)
 * and the Experience Record that accompanies it.
 *
 * It absorbs three addresses from the old "Africa" menu, all of which now
 * redirect here:
 *   /applications and /applications/*  -> #industries
 *   /case-studies                      -> #projects
 *
 * Industry cards are typographic, exactly as in the brochure. The sector
 * photographs on the old Industries page were AI renders
 * (see public/images/stock/README.md) and are not used here.
 */

const INDEX = [
  { id: 'industries', label: 'Industries' },
  { id: 'projects', label: 'Flagship Projects' },
  { id: 'field', label: 'From the Field' },
  { id: 'clients', label: 'Clients' },
  { id: 'record', label: 'Experience Record' },
];

const RECORD_PDF = '/downloads/IXAR-Africa-Project-List.pdf';

export default function ExperiencePage({ onOpenContact }) {
  return (
    <Page className="xp-page">
      <PageHero
        eyebrow="Experience"
        title="A record built on East Africa's most demanding sites."
        sub="From the EACOP pipeline, Sinopec's Tilenga Project and CCJV's Kingfisher Oil Field to sugar mills, breweries and marine assets on the Kenyan coast, IXAR Africa has delivered radiography, ultrasonic and advanced NDT to operators and EPC contractors across the region."
        image="/images/east-africa/ea-hero-tilenga-cpf.webp"
        imageAlt="IXAR Africa crew at the central processing facility, Tilenga Project, Uganda"
        actions={
          <>
            <a className="ea-btn ea-btn--primary" href={RECORD_PDF} download>
              <Download size={16} aria-hidden="true" /> Experience Record (PDF)
            </a>
            <Link className="ea-btn ea-btn--ghost" to="/contact">
              Contact Us
            </Link>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Experience' }]} />}
      />

      <PageIndex items={INDEX} />

      <section className="co-stats" aria-label="Track record in numbers">
        <div className="ea-wrap">
          <StatStrip stats={RECORD_STATS} />
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <Section id="industries">
        <SectionHead eyebrow="Sectors" title="Industries we serve.">
          <p>Built around each sector&rsquo;s assets, standards and shutdown windows.</p>
        </SectionHead>
        <div className="xp-ind">
          {INDUSTRIES.map((ind, i) => (
            <article className={`xp-ind__card${i === 0 ? ' is-lead' : ''} ea-rev`} key={ind.num}>
              <span className="xp-ind__num" aria-hidden="true">{ind.num}</span>
              <h3>{ind.title}</h3>
              <p>{ind.body}</p>
            </article>
          ))}
        </div>
        <p className="xp-ind__note ea-rev">
          Not sure which methods your asset needs?{' '}
          <Link to="/services">See the services</Link> or{' '}
          <Link to="/estimator">build an inspection scope</Link>.
        </p>
      </Section>

      {/* ============ FLAGSHIP PROJECTS ============ */}
      <Section id="projects" tone="tint">
        <SectionHead eyebrow="Track record" title="Flagship projects.">
          <p>
            Four of the region&rsquo;s defining energy scopes, all running today. The full list of
            work orders is in the <a href={RECORD_PDF} download>Experience Record</a>.
          </p>
        </SectionHead>

        <div className="co-grid4">
          {FLAGSHIP.map((p) => (
            <article className="xp-flag ea-rev" key={p.client}>
              <header className="xp-flag__head">
                <span className="xp-flag__status">{p.status}</span>
                <h3>{p.client}</h3>
                <span className="xp-flag__meta">{p.meta}</span>
              </header>
              <div className="xp-flag__body">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="xp-country ea-rev">
          <span className="xp-country__label">Projects by country</span>
          <div className="co-tiles xp-country__tiles">
            {BY_COUNTRY.map((c) => (
              <div className="co-tile" key={c.code}>
                <em>{c.code}</em>
                <b>{c.n}</b>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
          <Link to="/about#offices" className="co-more">
            Where we operate <ChevronRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      {/* ============ FROM THE FIELD ============ */}
      <Section id="field">
        <SectionHead eyebrow="From the field" title="The work, as it was photographed.">
          <p>Scopes carried out by IXAR Africa crews, each shown in the division&rsquo;s own site photography.</p>
        </SectionHead>
        <div className="co-grid2 xp-field">
          {FIELD.map((f) => (
            <article className="co-pcard ea-rev" key={f.scope}>
              <div className="co-pcard__media xp-field__media">
                <AppImage src={f.image} alt={f.alt} />
                <span className="xp-field__where">
                  <MapPin size={13} aria-hidden="true" /> {f.country}
                </span>
              </div>
              <div className="co-pcard__body">
                <span className="co-kicker">{f.scope}</span>
                <h3>{f.project}</h3>
                <p>{f.body}</p>
                <ul className="co-chips xp-field__methods">
                  {f.methods.map((m) => <li className="co-chip" key={m}>{m}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============ CLIENTS ============ */}
      <Section id="clients" tone="tint">
        <SectionHead eyebrow="Trusted by" title="Our clients.">
          <p>Operators, EPC contractors and plant owners across the region.</p>
        </SectionHead>
        <ul className="xp-clients">
          {CLIENT_LIST.map((c) => (
            <li key={c.name} className={`xp-client${c.logo ? '' : ' xp-client--word'} ea-rev`}>
              {c.logo ? (
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span>{c.name}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="xp-clients__note">Logos are reproduced with permission and are the property of their owners.</p>
      </Section>

      {/* ============ EXPERIENCE RECORD ============ */}
      <Section id="record">
        <div className="xp-rec ea-rev">
          <a className="xp-rec__doc" href={RECORD_PDF} download aria-label="Download the Experience Record (PDF)">
            <AppImage src="/images/downloads/cover-projects.webp" alt="Cover page of the IXAR Africa Experience Record" />
            <span className="xp-rec__tag"><FileText size={13} aria-hidden="true" /> PDF</span>
          </a>
          <div className="xp-rec__copy">
            <span className="ea-eyebrow">Experience Record</span>
            <h2 className="ea-sec-title">Every work order, in one document.</h2>
            <span className="ea-rule" aria-hidden="true" />
            <p>
              Client, scope, location, year and current status for every project IXAR Africa has on
              record, with value by client and projects by country.
            </p>
            <div className="xp-rec__actions">
              <a className="ea-btn ea-btn--primary" href={RECORD_PDF} download>
                <Download size={16} aria-hidden="true" /> Download Experience Record
              </a>
              <a className="ea-btn ea-btn--navy" href="/downloads/IXAR-Company-Profile.pdf" download>
                Company Profile (PDF)
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CloseBand
        eyebrow="References"
        title="Ask for the detail behind any of these."
        actions={
          <>
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact('Project references')}>
              Request Project References <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link to="/services" className="ea-btn ea-btn--ghost">
              Our Services
            </Link>
          </>
        }
      >
        <p>
          Procedures, personnel certification and reporting formats can be shared for a specific
          scope on request, subject to the client&rsquo;s own confidentiality terms.
        </p>
      </CloseBand>

      <Style>{`
        /* ---- industries: the brochure's numbered cards ---- */
        .xp-ind{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .xp-ind__card{position:relative;min-height:230px;background:var(--ea-tint);padding:70px 24px 26px;transition:transform .26s ease,box-shadow .26s ease,background .26s ease}
        .xp-ind__card:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift);background:#FFFFFF}
        .xp-ind__num{position:absolute;top:20px;right:22px;font-size:30px;font-weight:800;line-height:1;color:#DDE1E5;letter-spacing:-.02em}
        .xp-ind__card h3{font-size:18.5px;font-weight:800;line-height:1.28;color:var(--ea-navy);margin:0 0 10px}
        .xp-ind__card p{font-size:14px;line-height:1.62;color:var(--ea-body);margin:0}
        .xp-ind__card.is-lead{background:var(--ea-brand)}
        .xp-ind__card.is-lead:hover{background:var(--ea-brand-dark)}
        .xp-ind__card.is-lead .xp-ind__num{color:rgba(255,255,255,.35)}
        .xp-ind__card.is-lead h3,.xp-ind__card.is-lead p{color:#FFFFFF}
        .xp-ind__note{margin:30px 0 0;font-size:15px;color:var(--ea-body)}
        .xp-ind__note a{font-weight:800;color:var(--ea-brand);text-decoration:underline;text-underline-offset:3px}

        /* ---- flagship ---- */
        .xp-flag{display:flex;flex-direction:column;height:100%;background:#FFFFFF;border:1px solid var(--ea-line);box-shadow:var(--ea-shadow);transition:transform .26s ease,box-shadow .26s ease}
        .xp-flag:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift)}
        .xp-flag__head{position:relative;background:var(--ea-navy);padding:46px 22px 22px}
        .xp-flag__status{position:absolute;top:16px;right:16px;background:var(--ea-brand);color:#FFFFFF;font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:5px 10px;border-radius:999px}
        .xp-flag h3{font-size:21px;font-weight:800;color:#FFFFFF;margin:0 0 6px}
        .xp-flag__meta{font-size:13px;font-weight:700;color:#FF8A87}
        .xp-flag__body{padding:22px 22px 24px}
        .xp-flag h4{font-size:16px;font-weight:800;line-height:1.32;color:var(--ea-navy);margin:0 0 10px}
        .xp-flag p{font-size:14px;line-height:1.62;color:var(--ea-body);margin:0}
        .xp-country{display:grid;grid-template-columns:auto 1fr auto;gap:28px;align-items:center;margin-top:40px;padding-top:34px;border-top:1px solid var(--ea-line)}
        .xp-country__label{font-size:18px;font-weight:800;color:var(--ea-navy);max-width:130px;line-height:1.25}
        .xp-country__tiles{grid-template-columns:repeat(4,1fr)}
        .xp-country .co-more{margin:0;padding:0;white-space:nowrap}

        /* ---- field ---- */
        .xp-field__media{aspect-ratio:16/9}
        .xp-field__where{position:absolute;left:14px;bottom:14px;display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(21,25,31,.88);color:#FFFFFF;font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
        .xp-field__methods{margin-top:18px}

        /* ---- clients ---- */
        .xp-clients{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;list-style:none;margin:0;padding:0}
        .xp-client{height:112px;display:flex;align-items:center;justify-content:center;padding:18px;background:#FFFFFF;border:1px solid var(--ea-line);transition:border-color .22s ease,box-shadow .22s ease,transform .22s ease}
        .xp-client:hover{border-color:var(--ea-brand);box-shadow:var(--ea-shadow-lift);transform:translateY(-3px)}
        /* Full colour here: this is the client page, and Ntake's mark - artwork
           reversed out of a red panel - turns to a grey block in greyscale. */
        .xp-client img{max-width:80%;max-height:56px;width:auto;height:auto;object-fit:contain}
        .xp-client--word span{font-size:14.5px;font-weight:800;line-height:1.3;color:var(--ea-navy);text-align:center}
        .xp-clients__note{margin:22px 0 0;font-size:12.5px;color:var(--ea-body-soft)}

        /* ---- record download ---- */
        .xp-rec{display:grid;grid-template-columns:380px 1fr;gap:56px;align-items:center}
        .xp-rec__doc{position:relative;display:block;border:1px solid var(--ea-line);box-shadow:0 18px 40px rgba(0,0,0,.14);transition:transform .25s ease}
        .xp-rec__doc:hover{transform:translateY(-4px)}
        .xp-rec__doc img{width:100%;height:auto;display:block}
        .xp-rec__tag{position:absolute;left:0;bottom:0;display:flex;align-items:center;gap:6px;background:var(--ea-brand);color:#FFFFFF;font-size:10.5px;font-weight:800;letter-spacing:.12em;padding:6px 10px}
        .xp-rec__copy .ea-rule{margin-bottom:22px}
        .xp-rec__copy p{font-size:16px;line-height:1.72;color:var(--ea-body);max-width:560px}
        .xp-rec__actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:26px}

        @media (max-width:1100px){
          .xp-clients{grid-template-columns:repeat(4,1fr)}
          .xp-country{grid-template-columns:1fr;gap:18px}
          .xp-country__label{max-width:none}
        }
        @media (max-width:1024px){
          .xp-ind{grid-template-columns:1fr 1fr}
          .xp-rec{grid-template-columns:1fr;gap:34px}
          .xp-rec__doc{max-width:440px}
        }
        @media (max-width:767px){
          .xp-clients{grid-template-columns:repeat(2,1fr)}
          .xp-client{height:96px}
          .xp-country__tiles{grid-template-columns:1fr 1fr}
          .xp-rec__actions .ea-btn{width:100%;justify-content:center}
        }
        @media (max-width:520px){
          .xp-ind{grid-template-columns:1fr}
          .xp-ind__card{min-height:0;padding-top:56px}
        }
      `}</Style>
    </Page>
  );
}
