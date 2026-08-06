import React, { useState } from 'react';
import { Globe, MapPin, Phone, Mail, Shield, CheckCircle2, ChevronRight, Server } from 'lucide-react';

export default function RegionalFootprint({ onOpenContact }) {
  const [activeRegion, setActiveRegion] = useState('sa');

  const regions = {
    sa: {
      country: "South Africa",
      flag: "🇿🇦",
      hubs: "Johannesburg | Cape Town | Secunda",
      emailNode: "ZA-JNB-TECH-01 (Primary Regional Desk)",
      sectors: ["Mining & Minerals", "Power Generation (Eskom)", "Railway Infrastructure", "Refineries"],
      services: ["USFD Railway Testing", "AUT Girth Weld", "API 653 Tank Floor Scanning", "Tube Testing"],
      address: "IXAR Africa Engineering Park, Sandton, Johannesburg, South Africa",
      phone: "+27 11 098 7654",
      email: "southafrica@ixar-africa.com"
    },
    ng: {
      country: "Nigeria",
      flag: "🇳🇬",
      hubs: "Lagos | Port Harcourt | Warri",
      emailNode: "NG-LOS-TECH-02 (West Africa Desk)",
      sectors: ["Offshore / Onshore Oil & Gas", "Deepwater Pipelines", "Petrochemical Plants"],
      services: ["AUT Girth Weld Pipeline", "PECT CUI Corrosion Screening", "Phased Array Ultrasonic"],
      address: "Victoria Island Energy Center, Lagos, Nigeria",
      phone: "+234 1 890 4321",
      email: "nigeria@ixar-africa.com"
    },
    gh: {
      country: "Ghana",
      flag: "🇬🇭",
      hubs: "Takoradi | Accra",
      emailNode: "GH-ACC-TECH-03",
      sectors: ["Gold Mining Facilities", "Offshore Oil Fields (Jubilee)", "Maritime Shipyards"],
      services: ["Tube Inspection (MFL)", "Structural Steel NDT", "Radiation Safety BARC Course"],
      address: "Harbor Commercial Area, Takoradi, Ghana",
      phone: "+233 30 298 7654",
      email: "ghana@ixar-africa.com"
    },
    ke: {
      country: "Kenya & East Africa",
      flag: "🇰🇪",
      hubs: "Nairobi | Mombasa",
      emailNode: "KE-NBO-TECH-04 (East Africa Hub)",
      sectors: ["Geothermal Power", "Standard Gauge Railway (SGR)", "Port Facilities"],
      services: ["USFD Rail & Weld Inspection", "Boiler Tube Testing", "Asset Integrity Management"],
      address: "Kilimani Business District, Nairobi, Kenya",
      phone: "+254 20 789 0123",
      email: "kenya@ixar-africa.com"
    },
    mz: {
      country: "Mozambique",
      flag: "🇲🇿",
      hubs: "Pemba | Maputo",
      emailNode: "MZ-MPM-TECH-05",
      sectors: ["LNG Deepwater Megaprojects", "Coal Logistics Rail", "Harbor Terminals"],
      services: ["AUT Long-Distance Gas Pipelines", "Computed Radiography", "SHEQ Audits"],
      address: "Av. Julius Nyerere, Maputo, Mozambique",
      phone: "+258 21 456 789",
      email: "mozambique@ixar-africa.com"
    }
  };

  return (
    <section id="footprint" className="section footprint-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Globe size={14} /> PAN-AFRICAN FOOTPRINT
          </div>
          <h2 className="section-title">
            Strategic Operations Across <span className="text-orange">African Industrial Hubs</span>
          </h2>
          <p className="section-subtitle">
            Local response teams, mobile NDT laboratories, and rapid deployment crews positioned to serve key industrial sectors across the continent.
          </p>

          {/* Region Buttons */}
          <div className="region-selector-bar">
            {Object.keys(regions).map((key) => (
              <button
                key={key}
                className={`region-btn ${activeRegion === key ? 'active' : ''}`}
                onClick={() => setActiveRegion(key)}
              >
                <span className="flag-icon">{regions[key].flag}</span>
                <span>{regions[key].country}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Region Detailed Card */}
        <div className="clean-card region-detail-card">
          <div className="region-card-grid">
            <div className="region-info-left">
              <div className="region-title-group">
                <span className="region-flag-large">{regions[activeRegion].flag}</span>
                <div>
                  <h3 className="region-name">{regions[activeRegion].country} Regional Hub</h3>
                  <div className="region-hubs"><MapPin size={14} /> {regions[activeRegion].hubs}</div>
                </div>
              </div>

              <div className="info-block">
                <div className="block-label"><Server size={14} color="var(--primary)" /> Operations Desk</div>
                <div className="block-val">{regions[activeRegion].emailNode}</div>
              </div>

              <div className="info-block">
                <div className="block-label"><Shield size={14} color="var(--navy)" /> Primary Sectors Served</div>
                <div className="tags-flex">
                  {regions[activeRegion].sectors.map((sec, i) => (
                    <span key={i} className="sector-tag">{sec}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="region-info-right">
              <div className="info-block">
                <div className="block-label"><CheckCircle2 size={14} color="#16A34A" /> Deployed Field Capabilities</div>
                <div className="capabilities-list">
                  {regions[activeRegion].services.map((serv, i) => (
                    <div key={i} className="cap-item">
                      <CheckCircle2 size={15} color="var(--primary)" />
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-sub-card">
                <div className="contact-item"><MapPin size={14} /> {regions[activeRegion].address}</div>
                <div className="contact-item"><Phone size={14} /> {regions[activeRegion].phone}</div>
                <div className="contact-item"><Mail size={14} /> {regions[activeRegion].email}</div>
                
                <button 
                  onClick={() => onOpenContact(`Regional Hub: ${regions[activeRegion].country}`)} 
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '14px', width: '100%' }}
                >
                  <span>Connect with Regional Engineering Office</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footprint-section {
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }
        .region-selector-bar {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .region-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 100px;
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .region-btn:hover {
          color: var(--navy);
          border-color: #CBD5E1;
        }
        .region-btn.active {
          background: var(--navy);
          color: #FFFFFF;
          border-color: var(--navy);
        }
        .flag-icon {
          font-size: 1.1rem;
        }

        .region-detail-card {
          margin-top: 36px;
          background: #FFFFFF;
        }
        .region-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
        }
        .region-title-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #F1F5F9;
        }
        .region-flag-large {
          font-size: 2.8rem;
          line-height: 1;
        }
        .region-name {
          font-size: 1.5rem;
          color: var(--navy);
        }
        .region-hubs {
          color: var(--primary);
          font-size: 0.88rem;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 2px;
          font-weight: 700;
        }

        .info-block {
          margin-bottom: 20px;
        }
        .block-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
        }
        .block-val {
          color: var(--navy);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.95rem;
        }

        .tags-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .sector-tag {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .capabilities-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cap-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-main);
          background: #F8FAFC;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          border: 1px solid #E2E8F0;
          font-weight: 500;
        }

        .contact-sub-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact-item {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .region-card-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
