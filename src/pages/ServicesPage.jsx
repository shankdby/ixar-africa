import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Radio, Shield, Wrench, ChevronRight, Activity, Zap, CheckCircle2 } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function ServicesPage({ onOpenContact }) {
  const serviceList = [
    {
      slug: 'aut',
      title: 'Automated Ultrasonic Testing (AUT)',
      category: 'Advanced Ultrasonic',
      desc: 'Computerized girth weld inspection for long-distance oil & gas pipelines during construction with full digital record traceability.',
      placeholderLabel: 'AUT Pipeline Girth Weld Scanner Setup'
    },
    {
      slug: 'paut',
      title: 'Phased Array Ultrasonic Testing (PAUT)',
      category: 'Advanced Ultrasonic',
      desc: 'Multi-element probe array generating steered acoustic beams to map internal defects in thick structural welds & forged components.',
      placeholderLabel: 'PAUT Multi-Element Probe & S-Scan Screen'
    },
    {
      slug: 'pect',
      title: 'Pulse Eddy Current Testing (PECT)',
      category: 'Electromagnetic NDT',
      desc: 'Screening technique for detecting Corrosion Under Insulation (CUI) on carbon steel piping & vessels without removing insulation.',
      placeholderLabel: 'PECT Corrosion Under Insulation Screening'
    },
    {
      slug: 'tofd',
      title: 'Time of Flight Diffraction (TOFD)',
      category: 'Advanced Ultrasonic',
      desc: 'Diffracted wave technique providing accurate height sizing of cracks and lack of fusion in heavy wall pressure vessels.',
      placeholderLabel: 'TOFD Diffraction Wave Scan Display'
    },
    {
      slug: 'mfl-tube',
      title: 'Tube Inspection (MFL / RFT / ECT)',
      category: 'Tubular NDT',
      desc: 'High-speed electromagnetic testing for detecting wall loss, internal pitting, grooving, and cracks in boiler & heat exchanger tubes.',
      placeholderLabel: 'MFL Boiler & Exchanger Tube Probe Pass'
    },
    {
      slug: 'radiography',
      title: 'Digital & Computed Radiography (CR/DR)',
      category: 'Radiographic NDT',
      desc: 'Next-generation radiography utilizing phosphor imaging plates & flat panel detectors for instant defect analysis and zero chemical waste.',
      placeholderLabel: 'Computed Radiography Imaging Plate Scanner'
    }
  ];

  return (
    <div className="page-wrapper" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">NDT SERVICES & METHODOLOGIES</div>
          <h2 className="section-title">
            Advanced Non-Destructive <span className="text-orange">Testing Catalog</span>
          </h2>
          <p className="section-subtitle">
            Explore dedicated sub-pages for each advanced NDT method. Select any methodology below to view technical physics, code compliance, and application scope.
          </p>
        </div>

        <div className="grid-2 services-full-grid">
          {serviceList.map((item) => (
            <div key={item.slug} className="clean-card service-overview-card">
              <div className="card-top-row">
                <span className="badge badge-orange">{item.category}</span>
                <Link to={`/services/${item.slug}`} className="view-subpage-link">
                  Detailed Sub-page →
                </Link>
              </div>

              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>

              {/* Image Placeholder Frame for Service */}
              <div className="card-placeholder-box">
                <ImagePlaceholder 
                  label={item.placeholderLabel}
                  recommendedSize="800 x 450 px"
                  height="200px"
                  aspect="16/9"
                />
              </div>

              <div className="card-action-bar">
                <Link to={`/services/${item.slug}`} className="btn btn-navy btn-sm">
                  <span>View Technical Sub-Page</span>
                  <ChevronRight size={14} />
                </Link>
                <button onClick={() => onOpenContact(item.title)} className="btn btn-outline btn-sm">
                  Request RFP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-full-grid {
          margin-bottom: 90px;
        }
        .service-overview-card {
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
