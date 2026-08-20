import React from 'react';
import { Layers, ChevronRight, CheckCircle2, Shield, Wrench, Train, Flame, GraduationCap } from 'lucide-react';

export default function SectorShowcase({ onOpenContact }) {
  const sectorApps = [
    {
      id: 'oil-gas',
      title: 'Oil & Gas Onshore & Offshore',
      subtitle: 'Refineries, Pipelines & Storage Tanks',
      image: '/images/refinery_tank_inspection.jpg',
      icon: Flame,
      tag: 'API 653 & AUT Certified',
      highlights: [
        'AUT Girth Weld Pipeline Scanning',
        'API 653 Storage Tank Floor MFL',
        'Corrosion Under Insulation (PECT)',
        'Offshore Riser & Structure NDT'
      ]
    },
    {
      id: 'railways',
      title: 'Railway Networks & Rolling Stock',
      subtitle: 'Track Welds, Axles & Wheelsets',
      image: '/images/railway_track_testing.jpg',
      icon: Train,
      tag: 'USFD Railway Leader',
      highlights: [
        'Ultrasonic Track Flaw Detection (USFD)',
        'Alumino-thermic Weld Inspection',
        'Locomotive Axle Fatigue Crack Testing',
        'Depot Overhaul Rapid Response'
      ]
    },
    {
      id: 'power',
      title: 'Thermal & Hydro Power Generation',
      subtitle: 'Boilers, Turbines & Exchangers',
      image: '/images/power_plant_inspection.jpg',
      icon: Wrench,
      tag: 'MFL & RFT Tube Testing',
      highlights: [
        'Heat Exchanger Tube Wall Loss Sizing',
        'Boiler Header & Steam Pipe Inspection',
        'Turbine Rotor Ultrasonic Testing',
        'Emergency Shutdown Turnarounds'
      ]
    },
    {
      id: 'training',
      title: 'BARC Safety Training Center',
      subtitle: 'Radiation Safety for Radiographers',
      image: '/images/barc_training_center.jpg',
      icon: GraduationCap,
      tag: 'BARC Collaborative',
      highlights: [
        'Official BARC Radiation Safety Modules',
        'Industrial Radiography Certification',
        'Practical Gamma & X-Ray Lab Drills',
        'Globally Recognized Accreditation'
      ]
    }
  ];

  return (
    <section id="applications" className="section showcase-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> INDUSTRIAL SECTOR SHOWCASE
          </div>
          <h2 className="section-title">
            Key Applications Across <span className="text-orange">African Sectors</span>
          </h2>
          <p className="section-subtitle">
            Deploying field-proven testing methodologies with state-of-the-art equipment tailored to high-risk industrial environments.
          </p>
        </div>

        {/* 2x2 Artistic Photography Grid */}
        <div className="grid-2 showcase-grid">
          {sectorApps.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="sector-art-card">
                <div className="sector-img-box">
                  <img src={item.image} alt={item.title} className="sector-img" />
                  <div className="sector-img-gradient"></div>
                  
                  <span className="sector-tag-badge">
                    <IconComp size={14} />
                    <span>{item.tag}</span>
                  </span>
                </div>

                <div className="sector-card-body">
                  <h3 className="sector-title">{item.title}</h3>
                  <div className="sector-subtitle">{item.subtitle}</div>

                  <div className="sector-checklist">
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="check-row">
                        <CheckCircle2 size={15} color="var(--primary)" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onOpenContact(`Sector Application: ${item.title}`)} 
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%', marginTop: '16px' }}
                  >
                    <span>Request Sector Engineering Scope</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .showcase-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .sector-art-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .sector-art-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-border);
        }

        .sector-img-box {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .sector-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .sector-art-card:hover .sector-img {
          transform: scale(1.05);
        }
        .sector-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.6) 100%);
        }

        .sector-tag-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #FFFFFF;
          color: var(--navy);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .sector-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }
        .sector-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 2px;
        }
        .sector-subtitle {
          font-size: 0.88rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .sector-checklist {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }
        .check-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .sector-img-box { height: 200px; }
        }
      `}</style>
    </section>
  );
}
