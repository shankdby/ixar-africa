import React, { useState } from 'react';
import { ShieldCheck, Mail, Send, Info } from 'lucide-react';
import Style from './Style';

/* Certificate verification.

   The previous component was a simulated lookup: it held three invented
   certificate records and returned an authoritative-looking "VERIFIED" panel
   for them, complete with holder names, issue dates and an "IXAR Pan-African
   Quality Assurance Board" that does not exist. A verification tool that
   confirms fabricated credentials is worse than no tool at all — the entire
   point of one is that its answer can be relied on.

   This replaces it with what IXAR can actually stand behind today: a request
   form that routes a certificate number to the office for a human to confirm
   against the training records. */

export default function CertVerifier() {
  const [certNo, setCertNo] = useState('');
  const [holder, setHolder] = useState('');
  const [requester, setRequester] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="cert-section">
      <div className="cert-inner">
        <div className="cert-copy">
          <span className="section-tag">Verification</span>
          <h2 className="cert-title">Verify a Certificate</h2>
          <span className="rule" />

          <p className="cert-lede">
            Certificates issued by IXAR carry a certificate number and the name of the holder.
            Send us both and the training office will confirm, in writing, whether the certificate
            is current and what it covers.
          </p>

          <ul className="cert-points">
            <li>
              <ShieldCheck size={17} aria-hidden="true" />
              <span>
                Personnel certified to Level II and Level III in accordance with
                ASNT SNT-TC-1A.
              </span>
            </li>
            <li>
              <ShieldCheck size={17} aria-hidden="true" />
              <span>
                Radiation safety certification for industrial radiographers, delivered in
                collaboration with the Bhabha Atomic Research Centre.
              </span>
            </li>
            <li>
              <Info size={17} aria-hidden="true" />
              <span>
                Verification is handled by a person, not an automated lookup. Expect a reply by
                email rather than an instant result on screen.
              </span>
            </li>
          </ul>

          <p className="cert-direct">
            <Mail size={15} aria-hidden="true" />
            <a href="mailto:uganda.ixar@gmail.com">uganda.ixar@gmail.com</a>
          </p>
        </div>

        <div className="cert-form-card">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <h3 className="cert-form-title">Request verification</h3>

              <div className="cert-field">
                <label className="field-label" htmlFor="cv-no">Certificate number *</label>
                <input
                  id="cv-no"
                  className="field-input"
                  type="text"
                  required
                  value={certNo}
                  onChange={(e) => setCertNo(e.target.value)}
                  placeholder="As printed on the certificate"
                />
              </div>

              <div className="cert-field">
                <label className="field-label" htmlFor="cv-holder">Name of holder *</label>
                <input
                  id="cv-holder"
                  className="field-input"
                  type="text"
                  required
                  value={holder}
                  onChange={(e) => setHolder(e.target.value)}
                />
              </div>

              <div className="cert-field">
                <label className="field-label" htmlFor="cv-email">Your email *</label>
                <input
                  id="cv-email"
                  className="field-input"
                  type="email"
                  required
                  value={requester}
                  onChange={(e) => setRequester(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary cert-submit">
                <span>Send verification request</span>
                <Send size={15} aria-hidden="true" />
              </button>

              <p className="cert-note">
                Verification requests are answered by the regional office. Certificates issued
                under the group training programme can be checked against the original record.
              </p>
            </form>
          ) : (
            <div className="cert-done" role="status" aria-live="polite">
              <div className="cert-done__tick"><ShieldCheck size={30} aria-hidden="true" /></div>
              <h3 className="cert-form-title">Request sent</h3>
              <p>
                The training office will check certificate <strong>{certNo}</strong> against its
                records and reply to <strong>{requester}</strong>.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setCertNo('');
                  setHolder('');
                  setRequester('');
                }}
                className="btn btn-outline cert-submit"
              >
                Check another certificate
              </button>
            </div>
          )}
        </div>
      </div>

      <Style>{`
        .cert-section {
          background: var(--bg-tint);
          border-radius: var(--radius-lg);
          padding: 46px 42px;
        }
        .cert-inner {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: start;
        }
        .cert-title { font-size: clamp(1.5rem, 1.2rem + 1.2vw, 2rem); color: var(--navy); }
        .cert-lede { margin-top: 24px; font-size: 1rem; line-height: 1.7; }

        .cert-points { list-style: none; margin: 24px 0 0; display: flex; flex-direction: column; gap: 14px; }
        .cert-points li { display: flex; gap: 12px; font-size: 0.9375rem; line-height: 1.6; }
        .cert-points svg { flex: none; margin-top: 3px; color: var(--brand); }

        .cert-direct {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--muted);
          display: flex;
          align-items: center;
          gap: 9px;
          font-weight: 700;
          color: var(--navy);
        }
        .cert-direct svg { color: var(--brand); flex: none; }

        .cert-form-card {
          background: #fff;
          border: 1px solid var(--line);
          border-top: 4px solid var(--brand);
          border-radius: var(--radius-md);
          padding: 30px 28px;
          box-shadow: var(--shadow-sm);
        }
        .cert-form-title { font-size: 1.2rem; color: var(--navy); margin-bottom: 20px; }
        .cert-field { margin-bottom: 16px; }
        .cert-submit { width: 100%; margin-top: 8px; }
        .cert-note { margin-top: 16px; font-size: 0.8125rem; line-height: 1.6; }

        .cert-done { text-align: center; }
        .cert-done__tick {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--brand);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
        }
        .cert-done p { font-size: 0.9375rem; line-height: 1.65; margin-top: 10px; }

        @media (max-width: 900px) {
          .cert-inner { grid-template-columns: 1fr; gap: 34px; }
        }
        @media (max-width: 767px) {
          .cert-section { padding: 30px 22px; }
          .cert-form-card { padding: 24px 20px; }
        }
      `}</Style>
    </section>
  );
}
