import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Style from './Style';
import { IXAR_IN } from '../globalNav';

/* Footer.
   Office details are the Kampala ones from IXAR's own site board (Tilenga
   Project, August 2026). The Mumbai head office is the parent company's, and
   is labelled as such — the content plan is explicit that regional presence
   and Indian presence must not be blurred together. */

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
              Non-destructive testing and industrial inspection across Uganda, Tanzania, Kenya, Rwanda, Mozambique, Ethiopia, Sudan and Malawi,
              delivered by Industrial X-Ray and Allied Radiographers (EA) Ltd.
            </p>

            <div className="footer-accred-row">
              <span className="badge badge-navy">ISO 9001 since 2003</span>
              <span className="badge badge-navy">ASNT SNT-TC-1A</span>
              <span className="badge badge-navy">IPLOCA member</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/radiography">Radiography (RT / CR / DR)</Link></li>
              <li><Link to="/services/aut">Automated Ultrasonics (AUT)</Link></li>
              <li><Link to="/services/paut">Phased Array (PAUT)</Link></li>
              <li><Link to="/services/tofd">Time of Flight Diffraction</Link></li>
              <li><Link to="/services/pect">Eddy Current (ECT / PECT)</Link></li>
              <li><Link to="/services/mfl-tube">Tank and Tube Inspection</Link></li>
              <li><Link to="/services">All services</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-links">
              <li><Link to="/applications/oil-gas">Oil and Gas</Link></li>
              <li><Link to="/applications/power-plants">Power and Geothermal</Link></li>
              <li><Link to="/applications/mining">Mining</Link></li>
              <li><Link to="/applications/railways">Railways and Transport</Link></li>
              <li><Link to="/applications">All industries</Link></li>
              <li><Link to="/training">NDT Training</Link></li>
              <li><Link to="/case-studies">Projects</Link></li>
              <li><Link to="/network">Our Network</Link></li>
            </ul>
          </div>

          {/* The header sends Products and Jobs to ixar.in, so the Africa
              versions of those pages need their inbound links from here.
              Without them these pages are orphaned and drop out of the index. */}
          <div className="footer-col">
            <h4 className="footer-col-title">Africa</h4>
            <ul className="footer-links">
              <li><Link to="/products">Equipment and Supply</Link></li>
              <li><Link to="/estimator">Scope and Cost Estimator</Link></li>
              <li><Link to="/careers">Careers in Africa</Link></li>
              <li><Link to="/contact">Regional Office Contact</Link></li>
              <li>
                <a href={IXAR_IN + '/'} className="footer-global-link">
                  IXAR Global (ixar.in)
                </a>
              </li>
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
                <a href="tel:+256414251251">+256 414 251251</a>
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
          <span className="footer-parent-label">Parent company</span>
          <p>
            Industrial X-Ray &amp; Allied Radiographers (I) Pvt. Ltd., 102 Faizan Apartment,
            S. V. Road, Jogeshwari (West), Mumbai 400 102, India &middot; info@ixar.in
          </p>
          <p className="footer-offices">
            India &middot; Uganda &middot; Tanzania &middot; Nigeria &middot; Netherlands &middot;
            UAE &middot; Oman &middot; Saudi Arabia
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
        .f-contact-row svg { flex: none; margin-top: 3px; color: #FF7A78; }
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
          color: #FF7A78;
          margin-bottom: 8px;
        }
        .footer-offices { margin-top: 6px; font-weight: 600; color: rgba(255, 255, 255, 0.7); }

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
