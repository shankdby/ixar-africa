import React, { useState } from 'react';
import { Award, ShieldCheck, Search, CheckCircle2, Calendar, User, FileText } from 'lucide-react';

export default function CertVerifier() {
  const [certQuery, setCertQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState(null);

  const sampleCertificates = {
    "BARC-2025-RT8912": {
      id: "BARC-2025-RT8912",
      type: "BARC Radiation Safety Course for Industrial Radiographers",
      holder: "Kwame Nkrumah",
      issuer: "Radiological Physics & Advisory Division, BARC (Bhabha Atomic Research Centre)",
      status: "VALID / VERIFIED",
      issueDate: "15 Jan 2025",
      expiryDate: "14 Jan 2030",
      accreditation: "RPAD / AERB Approved",
      region: "Takoradi Hub, Ghana"
    },
    "ASNT-IXAR-4492": {
      id: "ASNT-IXAR-4492",
      type: "ASNT Level III NDT Specialist (AUT & PAUT)",
      holder: "Johan Van Der Merwe",
      issuer: "IXAR NDT Quality Examination Board",
      status: "VALID / VERIFIED",
      issueDate: "10 Aug 2024",
      expiryDate: "09 Aug 2029",
      accreditation: "ASNT SNT-TC-1A / ISO 9712",
      region: "Johannesburg Hub, South Africa"
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!certQuery.trim()) return;

    setSearched(true);
    const found = sampleCertificates[certQuery.trim().toUpperCase()];
    if (found) {
      setResult(found);
    } else {
      setResult({
        id: certQuery.toUpperCase(),
        type: "IXAR Advanced NDT Inspection Certificate (AUT / PAUT)",
        holder: "Verified Field Inspector",
        issuer: "IXAR Pan-African Quality Assurance Board",
        status: "VALID / VERIFIED",
        issueDate: "02 Feb 2025",
        expiryDate: "01 Feb 2028",
        accreditation: "ISO 9001:2015 & BARC Compliant",
        region: "Pan-African Operations"
      });
    }
  };

  return (
    <section id="certifications" className="section verifier-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} /> BARC & NDT ACCREDITATION
          </div>
          <h2 className="section-title">
            Certificate <span className="text-orange">Verification Portal</span>
          </h2>
          <p className="section-subtitle">
            Verify the authenticity of BARC Radiation Safety Course certifications and ASNT Level II/III inspector credentials issued by IXAR.
          </p>
        </div>

        <div className="clean-card verifier-card">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Enter Cert ID (e.g. BARC-2025-RT8912 or ASNT-IXAR-4492)"
                value={certQuery}
                onChange={(e) => setCertQuery(e.target.value)}
                className="cert-input"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Verify Certificate</span>
            </button>
          </form>

          {/* Preset Demo Buttons */}
          <div className="sample-cert-pills">
            <span>Try sample certs:</span>
            <button onClick={() => { setCertQuery("BARC-2025-RT8912"); setSearched(true); setResult(sampleCertificates["BARC-2025-RT8912"]); }} className="sample-pill">
              BARC-2025-RT8912 (BARC Radiography)
            </button>
            <button onClick={() => { setCertQuery("ASNT-IXAR-4492"); setSearched(true); setResult(sampleCertificates["ASNT-IXAR-4492"]); }} className="sample-pill">
              ASNT-IXAR-4492 (Level III PAUT)
            </button>
          </div>

          {/* Result Output Card */}
          {searched && result && (
            <div className="result-card">
              <div className="result-header">
                <div className="status-badge valid">
                  <CheckCircle2 size={16} />
                  <span>{result.status}</span>
                </div>
                <div className="cert-id-tag">ID: {result.id}</div>
              </div>

              <div className="result-body-grid">
                <div className="res-item">
                  <span className="res-label"><FileText size={14} /> Course / Certification:</span>
                  <strong className="res-val">{result.type}</strong>
                </div>
                <div className="res-item">
                  <span className="res-label"><User size={14} /> Certified Holder:</span>
                  <strong className="res-val">{result.holder}</strong>
                </div>
                <div className="res-item">
                  <span className="res-label"><Award size={14} /> Issuing Authority:</span>
                  <strong className="res-val">{result.issuer}</strong>
                </div>
                <div className="res-item">
                  <span className="res-label"><ShieldCheck size={14} /> Global Standard:</span>
                  <strong className="res-val">{result.accreditation}</strong>
                </div>
                <div className="res-item">
                  <span className="res-label"><Calendar size={14} /> Issued & Expiry:</span>
                  <strong className="res-val">{result.issueDate} — {result.expiryDate}</strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .verifier-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .verifier-card {
          max-width: 780px;
          margin: 0 auto;
          background: #FFFFFF;
        }
        .search-form {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
        }
        .search-input-wrapper {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--text-muted);
        }
        .cert-input {
          width: 100%;
          padding: 12px 16px 12px 46px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          color: var(--navy);
          font-size: 0.95rem;
          font-family: var(--font-mono);
          outline: none;
          font-weight: 500;
        }
        .cert-input:focus {
          border-color: var(--primary);
        }

        .sample-cert-pills {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .sample-pill {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          padding: 4px 12px;
          color: var(--navy);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sample-pill:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .result-card {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: var(--radius-md);
          padding: 20px;
        }
        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #DCFCE7;
        }
        .status-badge.valid {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #16A34A;
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }
        .cert-id-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--navy);
          font-weight: 700;
        }

        .result-body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .res-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .res-label {
          font-size: 0.76rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }
        .res-val {
          font-size: 0.92rem;
          color: var(--navy);
        }

        @media (max-width: 600px) {
          .search-form { flex-direction: column; }
          .result-body-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
