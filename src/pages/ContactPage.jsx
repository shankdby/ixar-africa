import React, { useState, useRef } from 'react';
import { MapPin, Mail, Phone, MessageCircle, Send, Check } from 'lucide-react';

/* Contact.

   The previous version gave a South African headquarters address, a +27
   number and info@ixar-africa.com. None of those exist. What is here comes
   from IXAR's own site board at Tilenga, and stays chipped until Rishi
   confirms it — the same treatment the East Africa page uses. */

const SERVICES = [
  'Conventional Radiography (RT)',
  'Digital and Computed Radiography',
  'Ultrasonic Testing (UT)',
  'Advanced Ultrasonics (PAUT / TOFD / AUT)',
  'Magnetic Particle and Liquid Penetrant Testing',
  'Eddy Current and Pulsed Eddy Current',
  'Pipeline Inspection',
  'Pigging and Intelligent Pigging',
  'Tank and Tube Inspection',
  'Underwater Inspection',
  'Destructive Testing and Laboratory Services',
  'NDT Training and Certification',
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.querySelector(':invalid')?.focus();
      return;
    }
    setSent(true);
  };

  return (
    <div className="page-wrapper contact-page">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get in touch</div>
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">
            Enquiries for Uganda, Tanzania and Kenya are handled by the regional office in Kampala.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-card">
            {!sent ? (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className={validated ? 'was-validated' : undefined}
              >
                <div className="contact-grid">
                  <div className="c-field">
                    <label className="field-label" htmlFor="c-name">Full name *</label>
                    <input id="c-name" className="field-input" type="text" required autoComplete="name" />
                    <span className="c-err">Please enter your full name.</span>
                  </div>
                  <div className="c-field">
                    <label className="field-label" htmlFor="c-company">Company *</label>
                    <input id="c-company" className="field-input" type="text" required autoComplete="organization" />
                    <span className="c-err">Please enter your company.</span>
                  </div>
                  <div className="c-field">
                    <label className="field-label" htmlFor="c-country">Country *</label>
                    <select id="c-country" className="field-input" required defaultValue="">
                      <option value="">Please select</option>
                      <option>Uganda</option>
                      <option>Tanzania</option>
                      <option>Kenya</option>
                      <option>Other</option>
                    </select>
                    <span className="c-err">Please select a country.</span>
                  </div>
                  <div className="c-field">
                    <label className="field-label" htmlFor="c-email">Email *</label>
                    <input id="c-email" className="field-input" type="email" required autoComplete="email" />
                    <span className="c-err">Please enter a valid email address.</span>
                  </div>
                  <div className="c-field c-field--full">
                    <label className="field-label" htmlFor="c-phone">Phone or WhatsApp number *</label>
                    <input id="c-phone" className="field-input" type="text" required autoComplete="tel" />
                    <span className="c-err">Please enter a phone or WhatsApp number.</span>
                  </div>
                  <div className="c-field c-field--full">
                    <label className="field-label" htmlFor="c-service">
                      Service of interest <span className="c-opt">Optional</span>
                    </label>
                    <select id="c-service" className="field-input" defaultValue="">
                      <option value="">Please select</option>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="c-field c-field--full">
                    <label className="field-label" htmlFor="c-message">Message *</label>
                    <textarea id="c-message" className="field-input" rows="5" required />
                    <span className="c-err">Please enter a message.</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg contact-submit">
                  <span>Send Enquiry</span>
                  <Send size={16} aria-hidden="true" />
                </button>

                <p className="contact-routing" style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Submissions route directly to Business Development: <a href="mailto:bd@ixar.africa" style={{ color: 'var(--brand)', fontWeight: 600 }}>bd@ixar.africa</a>
                </p>
              </form>
            ) : (
              <div className="contact-done" role="status" aria-live="polite">
                <div className="contact-done__tick"><Check size={32} aria-hidden="true" /></div>
                <h2>Thank you, your enquiry has been sent.</h2>
                <p>A member of the IXAR East Africa team will respond via <strong>bd@ixar.africa</strong> shortly.</p>
              </div>
            )}
          </div>

          <aside className="contact-aside">
            <div className="office-card">
              <p className="office-tag">Departmental Contacts</p>
              <h2 className="office-name">IXAR Africa Email Directory</h2>
              <ul className="office-lines">
                <li>
                  <Mail size={17} aria-hidden="true" />
                  <span><strong>Business Development &amp; RFQ:</strong> <a href="mailto:bd@ixar.africa" style={{ color: 'var(--brand)' }}>bd@ixar.africa</a></span>
                </li>
                <li>
                  <Mail size={17} aria-hidden="true" />
                  <span><strong>Executive Management:</strong> <a href="mailto:rishi@ixar.africa" style={{ color: 'var(--brand)' }}>rishi@ixar.africa</a></span>
                </li>
                <li>
                  <Mail size={17} aria-hidden="true" />
                  <span><strong>Procurement &amp; Vendors:</strong> <a href="mailto:procurement@ixar.africa" style={{ color: 'var(--brand)' }}>procurement@ixar.africa</a></span>
                </li>
                <li>
                  <Mail size={17} aria-hidden="true" />
                  <span><strong>Finance &amp; Billing:</strong> <a href="mailto:finance@ixar.africa" style={{ color: 'var(--brand)' }}>finance@ixar.africa</a></span>
                </li>
              </ul>
            </div>

            <div className="office-card">
              <p className="office-tag">Regional Office</p>
              <h2 className="office-name">Kampala, Uganda</h2>
              <ul className="office-lines">
                <li>
                  <MapPin size={17} aria-hidden="true" />
                  <span>Plot No. 72, Kanjokya Street, Kamwokya, P.O. Box 28673 Nakawa, Kampala, Uganda</span>
                </li>
                <li>
                  <Phone size={17} aria-hidden="true" />
                  <span><a href="tel:+256414251251">+256 414 251251</a> &middot; <a href="tel:+256777166392">+256 777 166392</a></span>
                </li>
              </ul>
            </div>

            <div className="wa-card">
              <h2><MessageCircle size={18} aria-hidden="true" /> WhatsApp Enquiries</h2>
              <p>
                The regional team can be reached on WhatsApp for immediate site mobilisation and technical questions.
              </p>
              <a
                className="btn btn-primary btn-sm"
                style={{ marginTop: '12px', background: '#25D366', borderColor: '#25D366', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                href="https://wa.me/256414251251?text=Hello%20IXAR,%20I%20would%20like%20to%20enquire%20about%20NDT%20services%20in%20East%20Africa."
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch WhatsApp Chat
              </a>
            </div>

            <div className="parent-card">
              <p className="office-tag">Parent Company</p>
              <p>
                Industrial X-Ray &amp; Allied Radiographers (I) Pvt. Ltd.<br />
                102 Faizan Apartment, S. V. Road, Jogeshwari (West), Mumbai 400 102, India<br />
                <a href="tel:+912268126400">+91 22 68126400</a> &middot;{' '}
                <a href="mailto:info@ixar.in">info@ixar.in</a>
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .contact-page { padding-bottom: 90px; }
        .contact-layout {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: start;
        }

        .contact-form-card {
          background: #fff;
          border: 1px solid var(--line);
          border-top: 4px solid var(--brand);
          border-radius: var(--radius-lg);
          padding: 38px 34px;
          box-shadow: var(--shadow-sm);
        }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .c-field { display: flex; flex-direction: column; }
        .c-field--full { grid-column: 1 / -1; }
        .c-opt {
          color: var(--text-dim);
          font-weight: 600;
          letter-spacing: 0;
          text-transform: none;
          font-size: 0.78rem;
          margin-left: 6px;
        }
        .contact-form-card textarea.field-input { resize: vertical; }
        .c-err { display: none; font-size: 0.78rem; font-weight: 700; color: var(--brand); margin-top: 6px; }
        .was-validated .field-input:invalid {
          border-color: var(--brand);
          box-shadow: 0 0 0 3px rgba(222, 6, 3, 0.09);
        }
        .was-validated .field-input:invalid ~ .c-err { display: block; }
        .contact-submit { width: 100%; margin-top: 26px; }
        .contact-routing { margin-top: 18px; font-size: 0.8125rem; line-height: 1.6; }

        .contact-done { text-align: center; padding: 40px 10px; }
        .contact-done__tick {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--brand);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .contact-done h2 { font-size: 1.4rem; color: var(--navy); margin-bottom: 10px; }

        .contact-aside { display: flex; flex-direction: column; gap: 24px; }
        .office-card, .parent-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 30px 28px;
          box-shadow: var(--shadow-sm);
        }
        .office-tag {
          font-size: 0.6875rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 10px;
        }
        .office-name { font-size: 1.25rem; color: var(--navy); margin-bottom: 16px; }
        .office-lines { list-style: none; display: flex; flex-direction: column; }
        .office-lines li {
          display: flex;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .office-lines li:last-child { border-bottom: 0; }
        .office-lines svg { flex: none; margin-top: 3px; color: var(--brand); }

        .wa-card {
          background: var(--navy);
          border-radius: var(--radius-lg);
          padding: 28px 26px;
          color: rgba(255, 255, 255, 0.82);
        }
        .wa-card h2 {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 12px;
        }
        .wa-card h2 svg { color: #25D366; }
        .wa-card p { font-size: 0.9rem; line-height: 1.65; }
        .wa-tbc { margin-top: 14px; }
        .wa-card .chip { background: #5A4415; border-color: #B08B39; color: #FFDFA0; }

        .parent-card p { font-size: 0.875rem; line-height: 1.75; color: var(--text-dim); }
        .parent-card a { color: var(--navy); font-weight: 700; }

        @media (max-width: 1024px) {
          .contact-layout { grid-template-columns: 1fr; gap: 34px; }
        }
        @media (max-width: 767px) {
          .contact-form-card { padding: 26px 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 16px; }
          .office-card, .parent-card { padding: 24px 20px; }
        }
      `}</style>
    </div>
  );
}
