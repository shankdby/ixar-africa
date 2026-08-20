import React from 'react';
import { Award, ShieldCheck, Check, Layers, Cpu, Globe2 } from 'lucide-react';
import Style from './Style';

export default function CompetitorBar() {
  const certifications = [
    { name: "BARC Radiation Safety", level: "Industrial Radiography Certified", icon: Award },
    { name: "API Inspection", level: "API 510, 570 & 653 Compliant", icon: ShieldCheck },
    { name: "ASNT Level III", level: "Senior NDT Engineers Onsite", icon: Cpu },
    { name: "ISO 9001:2015", level: "Global Quality Standard", icon: Check },
    { name: "SHEQ & ISO 45001", level: "Zero Harm Safety Compliance", icon: Layers }
  ];

  return (
    <section className="competitor-bar-section">
      <div className="container">
        <div className="bar-grid">
          {/* Left info box */}
          <div className="bar-intro">
            <div className="bar-tag"><Globe2 size={13} /> COMPETITOR BENCHMARK CHAMPION</div>
            <h3 className="bar-title">Surpassing African Industry Benchmarks</h3>
            <p className="bar-desc">
              Setting international precision standards across conventional and advanced NDT engineering.
            </p>
          </div>

          {/* Right badges */}
          <div className="cert-badges-grid">
            {certifications.map((cert, index) => {
              const IconComp = cert.icon;
              return (
                <div key={index} className="cert-card">
                  <div className="cert-icon">
                    <IconComp size={18} />
                  </div>
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-level">{cert.level}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Style>{`
        .competitor-bar-section {
          background: #FFFFFF;
          border-bottom: 1px solid var(--line);
          padding: 36px 0;
        }
        .bar-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }
        .bar-tag {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--primary);
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }
        .bar-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .bar-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .cert-badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .cert-card {
          background: var(--bg-secondary);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
        }
        .cert-card:hover {
          border-color: var(--primary);
          background: #FFFFFF;
          box-shadow: var(--shadow-sm);
        }
        .cert-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cert-name {
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
        }
        .cert-level {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .bar-grid { grid-template-columns: 1fr; }
          .cert-badges-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .cert-badges-grid { grid-template-columns: 1fr; }
        }
      `}</Style>
    </section>
  );
}
