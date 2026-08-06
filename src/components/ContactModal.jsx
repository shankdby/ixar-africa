import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, defaultScope }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    region: 'South Africa',
    details: defaultScope ? `Interested in: ${defaultScope}` : ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="clean-card modal-content-card">
        <button onClick={onClose} className="modal-close-btn">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <div className="modal-icon-badge">
                <Shield size={22} color="var(--primary)" />
              </div>
              <div>
                <h3 className="modal-title">Request Inspection Proposal</h3>
                <p className="modal-subtitle">Direct engineering desk inquiry for IXAR Africa.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                <div className="form-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. d.mensah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +27 82 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Energy Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Primary African Region / Deployment Hub *</label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="modal-select"
                >
                  <option value="South Africa">South Africa (Johannesburg / Cape Town)</option>
                  <option value="Nigeria">Nigeria (Lagos / Port Harcourt)</option>
                  <option value="Ghana">Ghana (Takoradi / Accra)</option>
                  <option value="Kenya">Kenya (Nairobi / Mombasa)</option>
                  <option value="Uganda">Uganda (Kampala)</option>
                  <option value="Mozambique">Mozambique (Maputo / Pemba)</option>
                  <option value="Other Africa">Other Pan-African Region</option>
                </select>
              </div>

              <div className="form-field">
                <label>Inspection Scope / Technical Requirements *</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Describe your NDT inspection requirements (e.g. Pipeline AUT, MFL Tube testing, USFD Rail Flaw Detection, API 653 Tank Floor Scanning)."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <span>Send Proposal Inquiry to Engineering Desk</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-screen">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={48} color="#16A34A" />
            </div>
            <h3 className="success-title">Inquiry Sent Successfully!</h3>
            <p className="success-text">
              Thank you, <strong>{formData.name}</strong>. Our regional engineering desk in <strong>{formData.region}</strong> has received your project inquiry.
            </p>
            <div className="ref-pill">Ref ID: IXAR-AFR-{Math.floor(100000 + Math.random() * 900000)}</div>
            <p className="sub-text">A senior NDT engineer will respond to <strong>{formData.email}</strong> within 2 business hours.</p>

            <button onClick={handleReset} className="btn btn-outline btn-lg" style={{ marginTop: '20px' }}>
              Close Window
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-content-card {
          width: 100%;
          max-width: 620px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
        }
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }
        .modal-close-btn:hover { color: var(--navy); }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .modal-icon-badge {
          width: 44px;
          height: 44px;
          background: var(--primary-light);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-title {
          font-size: 1.35rem;
          color: var(--navy);
        }
        .modal-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
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

        .modal-success-screen {
          text-align: center;
          padding: 24px 16px;
        }
        .success-icon-wrapper {
          margin-bottom: 14px;
        }
        .success-title {
          font-size: 1.5rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .success-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 14px;
        }
        .ref-pill {
          display: inline-block;
          background: #F0FDF4;
          color: #16A34A;
          border: 1px solid #BBF7D0;
          font-family: var(--font-mono);
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 100px;
          margin-bottom: 14px;
          font-size: 0.85rem;
        }
        .sub-text {
          font-size: 0.84rem;
          color: var(--text-dim);
        }

        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
