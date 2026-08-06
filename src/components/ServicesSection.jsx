import React, { useState } from 'react';
import { Cpu, Radio, Shield, Train, Wrench, GraduationCap, ChevronRight, Activity, Zap, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('advanced');

  const categories = [
    { id: 'advanced', label: 'Advanced NDT Techniques', icon: Cpu },
    { id: 'railways', label: 'Railways USFD Testing', icon: Train },
    { id: 'integrity', label: 'API Asset Integrity & QA/QC', icon: Shield },
    { id: 'training', label: 'BARC Safety Training', icon: GraduationCap }
  ];

  const services = {
    advanced: [
      {
        id: 'pect',
        title: 'Pulse Eddy Current Testing (PECT)',
        badge: 'CUI Screening',
        desc: 'Advanced screening technique for detecting Corrosion Under Insulation (CUI) on carbon steel piping & vessels without removing insulation.',
        specs: ['Max Wall Thickness: Up to 50mm', 'Insulation Clearance: Up to 150mm', 'In-service / High Temp capability'],
        icon: Activity
      },
      {
        id: 'mfl',
        title: 'Tube Inspection (MFL / RFT / ECT)',
        badge: 'Heat Exchanger & Boiler',
        desc: 'High-speed electromagnetic testing for detecting wall loss, internal pitting, grooving, and cracks in ferromagnetic & non-ferromagnetic tubing.',
        specs: ['100% Full Length Probe Pass', 'Accurate Pitting Depth Sizing', 'Instant Mapping Software'],
        icon: Zap
      },
      {
        id: 'aut',
        title: 'Automated Ultrasonic Testing (AUT)',
        badge: 'Pipeline Girth Welds',
        desc: 'Precision computerized ultrasonic weld inspection for long-distance oil & gas pipelines during construction with full digital record traceability.',
        specs: ['High-speed automated scanning', 'ECA & TOFD zone discrimination', 'Zero operator subjective error'],
        icon: Cpu
      },
      {
        id: 'paut',
        title: 'Phased Array Ultrasonic (PAUT)',
        badge: 'Complex Geometry',
        desc: 'Multi-element transducer array generating steered acoustic beams to map internal defects in thick structural welds & forged components.',
        specs: ['Sectorial & E-Scan visualization', 'Real-time A, B, C, S scans', 'Code Compliant (ASME / API / EN)'],
        icon: Radio
      },
      {
        id: 'tofd',
        title: 'Time of Flight Diffraction (TOFD)',
        badge: 'Rapid Weld Screening',
        desc: 'Diffracted ultrasound wave technique providing extremely accurate height sizing of cracks and lack of fusion in heavy wall pressure vessels.',
        specs: ['Independent of flaw orientation', 'Rapid scanning speed', 'Sub-millimeter crack sizing accuracy'],
        icon: Shield
      },
      {
        id: 'cr',
        title: 'Digital / Computed Radiography (CR/DR)',
        badge: 'High-Definition Digital',
        desc: 'Next-generation radiography utilizing reusable phosphor imaging plates & flat panel detectors for instant defect analysis and zero chemical waste.',
        specs: ['Enhanced digital contrast zoom', '80% Reduced exposure time', 'Permanent cloud storage archive'],
        icon: Radio
      }
    ],
    railways: [
      {
        id: 'usfd-track',
        title: 'USFD Testing for Railway Tracks & Welds',
        badge: 'Pan-African Rail Safety',
        desc: 'Specialized ultrasonic flaw detection for continuous welded rails (CWR), joint bars, and alumino-thermic welds to prevent derailment hazards.',
        specs: ['Handheld & trolley USFD units', 'Internal flaw detection in rail head/web/foot', 'Verified against African Rail standards'],
        icon: Train
      },
      {
        id: 'axle-wheels',
        title: 'Railway Axle & Wheelset NDT',
        badge: 'Rolling Stock Integrity',
        desc: 'Ultrasonic and magnetic particle inspection of locomotive axles, wheel rims, and bogie components during overhaul maintenance.',
        specs: ['Solid & hollow axle testing', 'Surface & subsurface fatigue crack detection', 'Depot rapid inspection teams'],
        icon: Wrench
      }
    ],
    integrity: [
      {
        id: 'api-tanks',
        title: 'API 653 Aboveground Storage Tank Inspection',
        badge: 'API Certified',
        desc: 'Comprehensive tank floor MFL scanning, shell thickness surveys, roof integrity evaluation, and remaining life assessment.',
        specs: ['MFL Floor Scanner mapping', 'Vessel out-of-roundness check', 'Comprehensive API 653 Report'],
        icon: Shield
      },
      {
        id: 'api-piping',
        title: 'API 570 Process Piping & API 510 Vessels',
        badge: 'Refinery & Petrochem',
        desc: 'In-service inspection plans, fitness-for-service (FFS) evaluations, and RBI (Risk Based Inspection) programs for petrochemical plants.',
        specs: ['Thickness measurement locations (TML)', 'Corrosion rate calculations', 'Turnaround / Shutdown execution'],
        icon: Wrench
      }
    ],
    training: [
      {
        id: 'barc-course',
        title: 'BARC Radiation Safety Training (NDT)',
        badge: 'BARC Collaborative',
        desc: 'Official radiation safety certification course for industrial radiographers conducted in collaboration with Radiological Physics & Advisory Division, BARC.',
        specs: ['Mandatory compliance for RT personnel', 'Hands-on gamma/x-ray safety modules', 'Globally accepted certification'],
        icon: GraduationCap
      }
    ]
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} /> NDT SERVICES CATALOG
          </div>
          <h2 className="section-title">
            Comprehensive <span className="text-orange">NDT Methodologies</span>
          </h2>
          <p className="section-subtitle">
            Delivering high-sensitivity defect detection, remaining life estimation, and compliance auditing across Africa's critical infrastructure.
          </p>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <IconComp size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid-3">
          {services[activeCategory].map((service) => {
            const IconComp = service.icon;
            return (
              <div key={service.id} className="clean-card highlight-orange service-card">
                <div className="service-header">
                  <div className="service-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="badge badge-orange">{service.badge}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <div className="specs-list">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="spec-item">
                      <CheckCircle2 size={14} color="var(--primary)" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-footer">
                  <button 
                    onClick={() => onOpenContact(service.title)} 
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>Request Technical Scope</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background: #FFFFFF;
        }
        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.92rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .tab-btn:hover {
          color: var(--navy);
          border-color: #CBD5E1;
        }
        .tab-btn.active {
          background: var(--navy);
          color: #FFFFFF;
          border-color: var(--navy);
        }

        .service-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .service-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .service-icon-box {
          width: 46px;
          height: 46px;
          background: var(--primary-light);
          border: 1px solid var(--primary-border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .service-title {
          font-size: 1.25rem;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .service-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }
        .specs-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          padding-top: 14px;
          border-top: 1px solid #F1F5F9;
        }
        .spec-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: var(--text-main);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
