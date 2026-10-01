import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Style from './Style';
import { GROUP_SITE } from '../globalNav';
import { deliveredProse } from '../countries';

/* Footer.
   Office details are the Kampala ones from IXAR's own site board (Tilenga
   Project, August 2026).

   IXAR Africa stands on its own here. The group is acknowledged in one line
   at the foot - "A member of the IXAR Group, founded 1969", as the Company
   Profile's back page puts it - and that line holds the site's only link to
   ixar.in. The Mumbai address and the group's office list that used to sit
   here are gone; the group's footprint is on the About page. */

export default function Footer({ onOpenContact }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-brand" style={{ marginBottom: '22px' }}>
              <img
                src="/images/ixar-logo-main.png"
                alt="IXAR"
                className="footer-logo-img"
                width="150"
                height="48"
                loading="lazy"
                style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p className="footer-bio">
              Non-destructive testing and industrial inspection across {deliveredProse()},
              with mobilisation on request elsewhere in Africa, delivered by
              Industrial X-Ray and Allied Radiographers (EA) Ltd.
            </p>

            <div className="footer-accred-row">
              <span className="badge badge-navy">ISO 9001 since 2003</span>
              <span className="badge badge-navy">ASNT SNT-TC-1A</span>
              <span className="badge badge-navy">IPLOCA member</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">About Us</h4>
            <ul className="footer-links">
              <li><Link to="/about#who">Who We Are</Link></li>
              <li><Link to="/about#leadership">Leadership</Link></li>
              <li><Link to="/about#licences">Licences &amp; Approvals</Link></li>
              <li><Link to="/about#heritage">Our Heritage</Link></li>
              <li><Link to="/about#training">People &amp; Training</Link></li>
              <li><Link to="/about#offices">Where We Operate</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#radiography">Radiography &amp; Pipeline</Link></li>
              <li><Link to="/services#pigging">Pigging</Link></li>
              <li><Link to="/services#tank">Tank Inspection</Link></li>
              <li><Link to="/services#ultrasonic">Ultrasonic &amp; Advanced UT</Link></li>
              <li><Link to="/services#equipment">Equipment Supply</Link></li>
              <li><Link to="/estimator">Scope Builder</Link></li>
              <li><Link to="/services">All services</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Experience</h4>
            <ul className="footer-links">
              <li><Link to="/experience#industries">Industries We Serve</Link></li>
              <li><Link to="/experience#projects">Flagship Projects</Link></li>
              <li><Link to="/experience#clients">Our Clients</Link></li>
              <li><Link to="/experience#record">Experience Record</Link></li>
              <li><Link to="/careers">Jobs @ IXAR</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Regional office</h4>
            <div className="footer-contacts">
              <div className="f-contact-row">
                <MapPin size={15} aria-hidden="true" />
                <span>
                  Plot No. 72, Kanjokya Street, Kamwokya,<br />
                  P.O. Box 28673 Nakawa, Kampala, Uganda
                </span>
              </div>
              <div className="f-contact-row">
                <Phone size={15} aria-hidden="true" />
                <a href="tel:+256705731596">+256 705 731596</a>
              </div>
              <div className="f-contact-row">
                <Mail size={15} aria-hidden="true" />
                <a href="mailto:bd@ixar.africa">bd@ixar.africa</a>
              </div>
            </div>

            {/* The Tanzania address is not yet confirmed. An unconfirmed field is
                omitted rather than shown with an internal note beside it - a
                visitor should never read our review scaffolding. The country is
                still listed above, which is the part that is true. */}

            <button
              onClick={() => onOpenContact()}
              className="btn btn-primary btn-sm footer-cta"
            >
              <span>Request a Quote</span>
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="footer-parent">
          <p>
            A member of the IXAR Group, founded 1969 &middot;{' '}
            <a href={GROUP_SITE} target="_blank" rel="noopener noreferrer">ixar.in</a>
          </p>
        </div>

        <div className="footer-bottom">
          <div>&copy; {year} Industrial X-Ray and Allied Radiographers (EA) Ltd. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link to="/contact">Contact</Link>
            <span aria-hidden="true">&middot;</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>

      <Style>{`
        .footer-section {
          background: var(--navy);
          color: rgba(255, 255, 255, 0.72);
          padding: 70px 0 32px;
          font-size: 0.9375rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1.2fr;
          gap: 36px;
          padding-bottom: 44px;
        }

        .footer-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .footer-mark { width: 40px; height: 40px; flex: none; }
        .footer-mark svg { width: 100%; height: 100%; display: block; }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #FFFFFF;
          line-height: 1;
        }
        .brand-sub {
          font-size: 0.6875rem;
          color: rgba(255, 255, 255, 0.62);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-top: 4px;
        }
        .footer-bio { line-height: 1.7; margin-bottom: 18px; font-size: 0.9rem; }
        .footer-bio .chip {
          background: #5A4415;
          border-color: #B08B39;
          color: #FFDFA0;
        }
        .footer-accred-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .footer-accred-row .badge-navy {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.86);
        }

        .footer-col-title {
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 11px; }
        .footer-links a {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .footer-links a:hover { color: #FFFFFF; }

        .footer-contacts { display: flex; flex-direction: column; gap: 14px; }
        .f-contact-row { display: flex; align-items: flex-start; gap: 10px; line-height: 1.6; font-size: 0.9rem; }
        .f-contact-row svg { flex: none; margin-top: 3px; color: #FF6B69; }
        .f-contact-row a { color: rgba(255, 255, 255, 0.72); }
        .f-contact-row a:hover { color: #FFFFFF; }
        .footer-tbc { margin-top: 14px; font-size: 0.85rem; }
        .footer-tbc .chip { background: #5A4415; border-color: #B08B39; color: #FFDFA0; }
        .footer-cta { margin-top: 18px; }

        .footer-parent {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding: 26px 0;
          font-size: 0.85rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.58);
        }
        .footer-parent-label {
          display: block;
          font-size: 0.6875rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FF6B69;
          margin-bottom: 8px;
        }
        .footer-parent p { margin: 0; }
        .footer-parent a { color: rgba(255, 255, 255, 0.82); font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }
        .footer-parent a:hover { color: #FFFFFF; }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.58);
        }
        .footer-bottom-links { display: flex; gap: 10px; align-items: center; }
        .footer-bottom-links a { color: rgba(255, 255, 255, 0.58); }
        .footer-bottom-links a:hover { color: #FFFFFF; }

        /* Five columns need more room than four did. */
        @media (max-width: 1280px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr; }
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 34px; }
        }
        @media (max-width: 600px) {
          .footer-section { padding-top: 52px; }
          .footer-grid { grid-template-columns: 1fr; gap: 30px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .footer-cta { width: 100%; }
        }
      `}</Style>
    </footer>
  );
}
