import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Check } from 'lucide-react';

/* Enquiry modal.

   Country list is Uganda / Tanzania / Kenya / Other, matching the content
   plan's form spec. The previous version offered five African "deployment
   hubs" IXAR has no registration in, and the confirmation screen invented a
   reference number and a two-hour response SLA — both removed, since neither
   is backed by anything. */

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

export default function ContactModal({ isOpen, onClose, defaultScope }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Prefill the service when opened from a specific card.
  useEffect(() => {
    if (!isOpen) return;
    setForm((f) => ({
      ...f,
      service: defaultScope && SERVICES.includes(defaultScope) ? defaultScope : f.service,
      message: defaultScope && !f.message ? `Enquiry about: ${defaultScope}` : f.message,
    }));
  }, [isOpen, defaultScope]);

  // Move focus in on open and hand it back on close, so keyboard and screen
  // reader users are not dropped at the top of the page behind the overlay.
  useEffect(() => {
    if (!isOpen) return undefined;
    previouslyFocused.current = document.activeElement;
    const t = setTimeout(() => firstFieldRef.current?.focus(), 40);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
      if (previouslyFocused.current instanceof HTMLElement) previouslyFocused.current.focus();
    };
  }, [isOpen]);

  // Escape closes; Tab is trapped inside the dialog while it is open.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        ref={dialogRef}
      >
        <button onClick={handleClose} className="modal-close-btn" aria-label="Close">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="section-tag">Get in touch</span>
              <h3 className="modal-title" id="enquiry-modal-title">Request a Quote</h3>
              <span className="rule" />
            </div>

            <form onSubmit={handleSubmit} className="modal-form" noValidate={false}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="m-name" className="field-label">Full name *</label>
                  <input id="m-name" ref={firstFieldRef} type="text" required autoComplete="name"
                    className="field-input" value={form.name} onChange={set('name')} />
                </div>
                <div className="form-field">
                  <label htmlFor="m-company" className="field-label">Company *</label>
                  <input id="m-company" type="text" required autoComplete="organization"
                    className="field-input" value={form.company} onChange={set('company')} />
                </div>
                <div className="form-field">
                  <label htmlFor="m-country" className="field-label">Country *</label>
                  <select id="m-country" required className="field-input"
                    value={form.country} onChange={set('country')}>
                    <option value="">Please select</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                    <option>Kenya</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="m-email" className="field-label">Email *</label>
                  <input id="m-email" type="email" required autoComplete="email"
                    className="field-input" value={form.email} onChange={set('email')} />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="m-phone" className="field-label">Phone or WhatsApp number *</label>
                  <input id="m-phone" type="text" required autoComplete="tel"
                    className="field-input" value={form.phone} onChange={set('phone')} />
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="m-service" className="field-label">
                    Service of interest <span className="opt">Optional</span>
                  </label>
                  <select id="m-service" className="field-input" value={form.service} onChange={set('service')}>
                    <option value="">Please select</option>
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="m-message" className="field-label">Message *</label>
                  <textarea id="m-message" rows="4" required className="field-input"
                    value={form.message} onChange={set('message')} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg modal-submit">
                <span>Send Enquiry</span>
                <Send size={16} aria-hidden="true" />
              </button>

              <p className="modal-routing" style={{ marginTop: '12px', fontSize: '0.8125rem', color: 'var(--text-dim)' }}>
                Submissions route directly to Business Development (<a href="mailto:bd@ixar.africa" style={{ color: 'var(--brand)' }}>bd@ixar.africa</a>).
              </p>
            </form>
          </>
        ) : (
          <div className="modal-done" role="status" aria-live="polite">
            <div className="modal-done__tick"><Check size={32} aria-hidden="true" /></div>
            <h3 className="modal-title">Thank you, your enquiry has been sent.</h3>
            <p>A member of the IXAR East Africa team will respond via <strong>bd@ixar.africa</strong> shortly.</p>
            <button onClick={handleClose} className="btn btn-outline btn-lg modal-done__btn">
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 22, 63, 0.72);
          z-index: 2000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 24px 16px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .modal-card {
          width: 100%;
          max-width: 640px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border-top: 4px solid var(--brand);
          padding: 36px 34px;
          position: relative;
          box-shadow: var(--shadow-lg);
          margin: auto;
        }
        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--text-dim);
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .modal-close-btn:hover { background: var(--bg-tint); color: var(--navy); }

        .modal-header { margin-bottom: 28px; padding-right: 44px; }
        .modal-title { font-size: 1.6rem; color: var(--navy); }
        .modal-header .rule { margin-top: 16px; }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .form-field { display: flex; flex-direction: column; }
        .form-field--full { grid-column: 1 / -1; }
        .opt {
          color: var(--text-dim);
          font-weight: 600;
          letter-spacing: 0;
          text-transform: none;
          font-size: 0.78rem;
          margin-left: 6px;
        }
        .modal-form textarea.field-input { resize: vertical; min-height: 110px; }
        .modal-submit { width: 100%; margin-top: 24px; }
        .modal-routing { margin-top: 18px; font-size: 0.8125rem; line-height: 1.6; }

        .modal-done { text-align: center; padding: 30px 6px 6px; }
        .modal-done__tick {
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
        .modal-done p { color: var(--text-body); margin-top: 10px; }
        .modal-done__btn { margin-top: 24px; }

        @media (max-width: 600px) {
          .modal-card { padding: 28px 20px; }
          .form-grid { grid-template-columns: 1fr; gap: 14px; }
          .modal-title { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
}
