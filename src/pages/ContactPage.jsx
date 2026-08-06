import React from 'react';
import { Mail, Phone, MapPin, Shield, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '150px' }}>
      <div className="container" style={{ marginBottom: '90px' }}>
        <div className="section-header">
          <div className="section-tag">CONNECT WITH IXAR ENGINEERING</div>
          <h2 className="section-title">
            Request Inspection <span className="text-orange">RFP & Proposal</span>
          </h2>
          <p className="section-subtitle">
            Get in touch with our Pan-African regional engineering desk in South Africa, Nigeria, Ghana, Kenya, or Mozambique.
          </p>
        </div>

        <div className="grid-2 contact-page-grid">
          <div className="clean-card contact-info-card">
            <h3 className="card-heading"><Shield size={20} color="var(--primary)" /> Operational Headquarters</h3>
            
            <div className="contact-line-list">
              <div className="c-line">
                <MapPin size={18} color="var(--primary)" />
                <div>
                  <strong>South Africa Headquarters:</strong>
                  <p>IXAR Africa Tech Park, Sandton, Johannesburg</p>
                </div>
              </div>

              <div className="c-line">
                <Mail size={18} color="var(--navy)" />
                <div>
                  <strong>Email Inquiry Desk:</strong>
                  <p><a href="mailto:info@ixar-africa.com">info@ixar-africa.com</a></p>
                </div>
              </div>

              <div className="c-line">
                <Phone size={18} color="#16A34A" />
                <div>
                  <strong>Telephone / WhatsApp Hotline:</strong>
                  <p><a href="tel:+27110987654">+27 11 098 7654</a></p>
                </div>
              </div>
            </div>

            <div className="hub-hours-box">
              <strong>Emergency 24/7 Rapid Response Dispatch:</strong>
              <p>Mobile NDT crews ready to deploy for refinery turnarounds & railway outages.</p>
            </div>
          </div>

          <div className="clean-card contact-form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="page-form">
                <h3 className="form-heading">Send Technical Inquiry</h3>

                <div className="form-field">
                  <label>Full Name *</label>
                  <input type="text" required placeholder="e.g. David Mensah" />
                </div>

                <div className="form-field">
                  <label>Corporate Email *</label>
                  <input type="email" required placeholder="e.g. d.mensah@company.com" />
                </div>

                <div className="form-field">
                  <label>Phone / WhatsApp *</label>
                  <input type="text" required placeholder="e.g. +27 82 123 4567" />
                </div>

                <div className="form-field">
                  <label>African Deployment Region *</label>
                  <select className="modal-select">
                    <option>South Africa</option>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Mozambique</option>
                    <option>Other African Region</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Project Technical Requirements *</label>
                  <textarea rows="4" required placeholder="Describe asset type, pipe diameter, wall thickness, or USFD track kilometers."></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <span>Submit Inquiry to Engineering Desk</span>
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="modal-success-screen">
                <CheckCircle2 size={48} color="#16A34A" />
                <h3 className="success-title">Inquiry Submitted!</h3>
                <p className="success-text">Thank you. An IXAR NDT engineer will review your scope and contact you within 2 business hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-page-grid {
          align-items: start;
        }
        .contact-info-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .card-heading {
          font-size: 1.3rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 12px;
        }
        .contact-line-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .c-line {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.92rem;
        }
        .c-line strong {
          color: var(--navy);
          display: block;
        }
        .c-line p {
          color: var(--text-muted);
          margin-top: 2px;
        }
        .c-line a {
          color: var(--text-muted);
          text-decoration: none;
        }
        .c-line a:hover { color: var(--primary); }

        .hub-hours-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          font-size: 0.88rem;
          color: var(--navy);
        }
        .hub-hours-box p {
          color: var(--text-muted);
          margin-top: 4px;
        }

        .form-heading {
          font-size: 1.3rem;
          color: var(--navy);
          margin-bottom: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 14px;
        }
        .form-field label {
          font-size: 0.82rem;
          color: var(--navy);
          font-weight: 600;
        }
        .form-field input, .form-field textarea, .modal-select {
          padding: 11px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--navy);
          font-size: 0.9rem;
          outline: none;
          font-weight: 500;
        }
        .form-field input:focus, .form-field textarea:focus, .modal-select:focus {
          border-color: var(--primary);
          background: #FFFFFF;
        }
      `}</style>
    </div>
  );
}
