import React from 'react';
import { Layers, MapPin, Calendar, Award, ChevronRight } from 'lucide-react';

export default function CaseStudies({ onOpenContact }) {
  const cases = [
    {
      title: "AUT Pipeline Girth Weld Inspection",
      client: "Ace Pipeline Contracts & West Africa Offshore",
      location: "Takoradi / Chaara Offshore Corridor",
      date: "Feb 2023 - Jan 2024",
      highlight: "100% Zero Defect Tolerance Traceability",
      desc: "Deployed Automated Ultrasonic Testing (AUT) scanners on 36-inch high-pressure gas pipelines under stringent marine offshore environment with zero turnaround delays.",
      tag: "Oil & Gas"
    },
    {
      title: "USFD Testing of Rail Tracks & Axles",
      client: "East Coast & Southern African Railways",
      location: "Mozambique & South Africa Rail Networks",
      date: "April 2023 - July 2025",
      highlight: "Over 4,500 km Rail Inspected",
      desc: "High-sensitivity ultrasonic flaw detection deployed on critical rail tracks, thermit welds, and rolling stock wheelsets to ensure rail safety compliance.",
      tag: "Railways"
    },
    {
      title: "Thermal Power Plant Boiler Tube Testing",
      client: "600 MW Thermal Power Facility",
      location: "Secunda Hub, South Africa",
      date: "Nov 2024 - Feb 2025",
      highlight: "Magnetic Flux Leakage (MFL)",
      desc: "Emergency shutdown inspection of 12,000+ boiler tubes using MFL and Remote Field Testing (RFT) to locate wall loss and prevent boiler tube leaks.",
      tag: "Power Generation"
    },
    {
      title: "API 653 Aboveground Storage Tank Audit",
      client: "Major West African Refinery Complex",
      location: "Lagos / Takoradi Refinery Terminals",
      date: "Aug 2024 - Dec 2024",
      highlight: "Full Tank Floor MFL Mapping",
      desc: "Comprehensive out-of-service inspection using motorized MFL floor scanners, shell ultrasonic thickness mapping, and API 653 fitness-for-service reporting.",
      tag: "Refinery Integrity"
    }
  ];

  return (
    <section id="case-studies" className="section cases-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} /> PROVEN TRACK RECORD
          </div>
          <h2 className="section-title">
            Featured <span className="text-orange">Pan-African Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating our technical excellence, speed of deployment, and asset integrity compliance across major continental industrial projects.
          </p>
        </div>

        <div className="grid-2">
          {cases.map((item, idx) => (
            <div key={idx} className="clean-card highlight-orange case-card">
              <div className="case-card-header">
                <span className="badge badge-orange">{item.tag}</span>
                <span className="case-highlight"><Award size={13} /> {item.highlight}</span>
              </div>

              <h3 className="case-title">{item.title}</h3>
              
              <div className="case-meta">
                <span><MapPin size={13} color="var(--primary)" /> {item.location}</span>
                <span><Calendar size={13} color="var(--text-muted)" /> {item.date}</span>
              </div>

              <p className="case-desc">{item.desc}</p>

              <div className="case-footer">
                <div className="client-name"><strong>Client:</strong> {item.client}</div>
                <button onClick={() => onOpenContact(`Case Study Inquiry: ${item.title}`)} className="btn btn-outline btn-sm">
                  <span>View Technical Details</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cases-section {
          background: #FFFFFF;
        }
        .case-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .case-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .case-highlight {
          font-size: 0.78rem;
          color: #15803D;
          font-weight: 700;
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .case-title {
          font-size: 1.3rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .case-meta {
          display: flex;
          gap: 16px;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 12px;
          font-weight: 500;
        }
        .case-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .case-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .case-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 14px;
        }
        .client-name {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .case-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </section>
  );
}
