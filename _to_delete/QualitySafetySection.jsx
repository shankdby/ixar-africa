import React from 'react';
import { ShieldCheck, Award, FileCheck, Layers, Zap, HardDrive, CheckCircle2 } from 'lucide-react';

export default function QualitySafetySection({ onOpenContact }) {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'BARC Radiation Safety Protocol',
      desc: 'Certified radiation safety officers enforcing strict AERB & BARC safety thresholds during all industrial radiography field operations.'
    },
    {
      icon: Award,
      title: 'API 510 / 570 / 653 Compliant',
      desc: 'API certified inspectors conducting structural tank floor scanning, pressure vessel evaluation, and refinery process piping audits.'
    },
    {
      icon: FileCheck,
      title: 'ASNT Level III Oversight',
      desc: 'Senior ASNT Level III engineers approving procedure qualification records (PQR) and high-sensitivity ultrasonic scan results.'
    },
    {
      icon: Layers,
      title: 'SHEQ & ISO 45001 Standard',
      desc: 'Zero-harm policy with integrated Safety, Health, Environment, and Quality (SHEQ) management across onshore & offshore deployments.'
    },
    {
      icon: Zap,
      title: 'High-Sensitivity Equipment',
      desc: 'Calibrated state-of-the-art AUT, PAUT, TOFD, and PECT probes maintained to international metrology and ISO 17025 standards.'
    },
    {
      icon: HardDrive,
      title: 'Permanent Digital Traceability',
      desc: 'All inspection raw data, A-scans, B-scans, and radiographs are securely archived for full life-cycle asset integrity audits.'
    }
  ];

  return (
    <section id="safety-quality" className="section safety-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} /> OPERATIONAL EXCELLENCE & SAFETY
          </div>
          <h2 className="section-title">
            Uncompromising <span className="text-orange">Quality & Safety Standards</span>
          </h2>
          <p className="section-subtitle">
            Zero-compromise flaw detection backed by strict international accreditations, protecting high-risk asset investments across Africa.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-3 feature-cards-grid">
          {pillars.map((pil, idx) => {
            const IconComp = pil.icon;
            return (
              <div key={idx} className="clean-card quality-card">
                <div className="pil-icon-box">
                  <IconComp size={22} />
                </div>
                <h3 className="pil-title">{pil.title}</h3>
                <p className="pil-desc">{pil.desc}</p>
                <div className="pil-footer-link">
                  <span>Certified Standard</span>
                  <CheckCircle2 size={16} color="var(--primary)" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .safety-section {
          background: #FFFFFF;
        }
        .pil-icon-box {
          width: 46px;
          height: 46px;
          background: var(--navy-badge-bg);
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          margin-bottom: 18px;
        }
        .pil-title {
          font-size: 1.2rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .pil-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .pil-footer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--text-dim);
          border-top: 1px solid #F1F5F9;
          padding-top: 12px;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}
