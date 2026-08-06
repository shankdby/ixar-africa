import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Flame, Train, Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function ApplicationsPage({ onOpenContact }) {
  const sectors = [
    {
      slug: 'oil-gas',
      title: 'Oil & Gas (Pipelines, Refineries & Storage Tanks)',
      icon: Flame,
      desc: 'Advanced NDT solutions for upstream deepwater pipelines, downstream refinery turnarounds, process piping, and API 653 storage tank floor scanning.',
      placeholderLabel: 'Refinery API Storage Tank & Offshore Pipeline Inspection'
    },
    {
      slug: 'railways',
      title: 'Railways (USFD Track & Rolling Stock)',
      icon: Train,
      desc: 'Specialized ultrasonic flaw detection (USFD) for continuous rail tracks, thermit welds, locomotive solid/hollow axles, and wheelset overhauls.',
      placeholderLabel: 'Ultrasonic Railway Track USFD Trolley & Axle NDT'
    },
    {
      slug: 'power-plants',
      title: 'Power Generation (Boilers & Turbines)',
      icon: Wrench,
      desc: 'High-speed MFL tube testing for heat exchangers, boiler headers, steam line welds, and turbine rotor ultrasonic flaw evaluation.',
      placeholderLabel: 'Power Plant Boiler Tube MFL & Heat Exchanger NDT'
    },
    {
      slug: 'mining',
      title: 'Mining & Heavy Infrastructure',
      icon: Layers,
      desc: 'Structural steel weld testing, excavator boom fatigue inspection, conveyor structure NDT, and heavy mining component integrity.',
      placeholderLabel: 'Heavy Mining Excavator & Structural Steel Weld Inspection'
    }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">APPLICATIONS & INDUSTRY SECTORS</div>
          <h2 className="section-title">
            Sector-Specific <span className="text-orange">NDT Applications</span>
          </h2>
          <p className="section-subtitle">
            Dedicated industry sub-pages outlining high-risk asset challenges across Africa, specialized field inspection crews, and code compliance.
          </p>
        </div>

        <div className="grid-2 sector-full-grid">
          {sectors.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.slug} className="clean-card sector-overview-card">
                <div className="card-top-row">
                  <span className="badge badge-orange"><IconComp size={13} /> Industrial Sector</span>
                  <Link to={`/applications/${item.slug}`} className="view-subpage-link">
                    Detailed Sector Sub-page →
                  </Link>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>

                {/* Image Placeholder Frame */}
                <div className="card-placeholder-box">
                  <ImagePlaceholder 
                    label={item.placeholderLabel}
                    recommendedSize="800 x 450 px"
                    height="200px"
                    aspect="16/9"
                  />
                </div>

                <div className="card-action-bar">
                  <Link to={`/applications/${item.slug}`} className="btn btn-navy btn-sm">
                    <span>View Sector Sub-Page</span>
                    <ChevronRight size={14} />
                  </Link>
                  <button onClick={() => onOpenContact(item.title)} className="btn btn-outline btn-sm">
                    Request Scope
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .sector-full-grid {
          margin-bottom: 90px;
        }
        .sector-overview-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .view-subpage-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }
        .card-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .card-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .card-placeholder-box {
          margin-bottom: 20px;
        }
        .card-action-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #F1F5F9;
          padding-top: 16px;
        }
      `}</style>
    </div>
  );
}
