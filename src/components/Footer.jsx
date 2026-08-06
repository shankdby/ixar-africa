import React from 'react';
import { Shield, Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Shield className="brand-shield" size={28} />
              <div>
                <div className="brand-name">IXAR <span className="brand-orange">AFRICA</span></div>
                <div className="brand-sub">NDT & Asset Integrity Engineering</div>
              </div>
            </div>
            <p className="footer-bio">
              Pan-African leader in Non-Destructive Testing (AUT, PAUT, TOFD, PECT, MFL, Railway USFD) backed by 55+ years of nuclear-grade testing precision and BARC certification.
            </p>

            <div className="footer-accred-row">
              <span className="badge badge-orange">BARC Certified</span>
              <span className="badge badge-navy">API 653/510/570</span>
              <span className="badge badge-emerald">ISO 9001:2015</span>
            </div>
          </div>

          {/* Industrial NDT Links */}
          <div className="footer-col">
            <h4 className="footer-col-title"><Shield size={16} color="var(--primary)" /> Industrial NDT Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Pulse Eddy Current Testing (PECT)</a></li>
              <li><a href="#services">Tube Inspection (MFL / RFT)</a></li>
              <li><a href="#services">Automated Ultrasonic (AUT)</a></li>
              <li><a href="#services">Phased Array Ultrasonic (PAUT)</a></li>
              <li><a href="#services">Railway USFD Flaw Detection</a></li>
              <li><a href="#services">BARC Radiation Safety Training</a></li>
            </ul>
          </div>

          {/* Quality & Safety Links */}
          <div className="footer-col">
            <h4 className="footer-col-title"><Globe size={16} color="var(--navy)" /> Standards & Compliance</h4>
            <ul className="footer-links">
              <li><a href="#safety-quality">BARC Radiation Safety Protocol</a></li>
              <li><a href="#safety-quality">API 510 / 570 / 653 Tank Audits</a></li>
              <li><a href="#safety-quality">ASNT Level III Procedure Qualification</a></li>
              <li><a href="#safety-quality">SHEQ & ISO 45001 Safety Management</a></li>
              <li><a href="#certifications">BARC Certificate Verifier Portal</a></li>
              <li><a href="#calculator">NDT Project Cost Estimator</a></li>
            </ul>
          </div>

          {/* Regional Hubs & Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title"><MapPin size={16} color="#16A34A" /> Pan-African Hubs</h4>
            <div className="footer-contacts">
              <div className="f-contact-row">
                <MapPin size={14} color="var(--primary)" />
                <span>Johannesburg | Lagos | Takoradi | Nairobi | Maputo</span>
              </div>
              <div className="f-contact-row">
                <Mail size={14} color="var(--navy)" />
                <a href="mailto:info@ixar-africa.com">info@ixar-africa.com</a>
              </div>
              <div className="f-contact-row">
                <Phone size={14} color="#16A34A" />
                <a href="tel:+27110987654">+27 11 098 7654</a>
              </div>
            </div>

            <button onClick={() => onOpenContact()} className="btn btn-primary btn-sm" style={{ marginTop: '16px', width: '100%' }}>
              <span>Request Inspection RFP</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} IXAR Africa (Pty) Ltd. All rights reserved. Pan-African Engineering Operations.</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#certifications">BARC Cert Portal</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #0F172A;
          padding-top: 70px;
          padding-bottom: 36px;
          color: #94A3B8;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.1fr;
          gap: 36px;
          margin-bottom: 50px;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .brand-shield {
          color: var(--primary);
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 900;
          color: #FFFFFF;
        }
        .brand-orange { color: var(--primary); }
        .brand-sub {
          font-size: 0.72rem;
          color: #94A3B8;
          text-transform: uppercase;
        }
        .footer-bio {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .footer-accred-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-col-title {
          font-size: 1.05rem;
          color: #FFFFFF;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: #FFFFFF;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.88rem;
        }
        .f-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .f-contact-row a {
          color: #94A3B8;
          text-decoration: none;
        }
        .f-contact-row a:hover { color: #FFFFFF; }

        .footer-bottom {
          border-top: 1px solid #1E293B;
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          flex-wrap: wrap;
          gap: 14px;
        }
        .footer-bottom-links {
          display: flex;
          gap: 12px;
        }
        .footer-bottom-links a {
          color: #94A3B8;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
