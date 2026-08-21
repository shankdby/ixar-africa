import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Award, ChevronRight, Cpu, FileCheck } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Style from '../components/Style';
import AppImage from '../components/AppImage';

export default function ServiceDetailPage({ onOpenContact }) {
  const { slug } = useParams();

  const detailsMap = {
    aut: {
      title: 'Automated Ultrasonic Testing (AUT)',
      category: 'Advanced Ultrasonic Inspection',
      subtitle: 'High-speed computerized girth weld inspection for long-distance oil & gas pipelines.',
      overview: 'Automated Ultrasonic Testing (AUT) has replaced conventional radiography as the global standard for girth weld inspection during pipeline construction. Utilizing motorized band crawlers and multi-element probe arrays, AUT delivers instant zero-subjective defect sizing and full digital traceability.',
      advantages: [
        'Rapid scan speeds (complete 36-inch pipe weld scan in under 3 minutes)',
        'Precise flaw depth, height, and circumferential position measurement',
        'Independent of weather conditions and zero radiation safety hazard',
        'Immediate pass/fail determination based on ECA (Engineering Critical Assessment) acceptance criteria'
      ],
      standards: ['ASME Section V Article 4', 'API 1104 Appendix A', 'ISO 13588 / DNV-ST-F101'],
      imgMain: '/images/east-africa/ea-svc-ultrasonic.webp',
      imgDetail: '/images/east-africa/ea-svc-pipeline.webp'
    },
    paut: {
      title: 'Phased Array Ultrasonic Testing (PAUT)',
      category: 'Advanced Ultrasonic Inspection',
      subtitle: 'Multi-beam acoustic beam steering for complex geometry structural & vessel welds.',
      overview: 'Phased Array Ultrasonic Testing (PAUT) utilizes multi-element piezoelectric transducers where each element is independently pulsed with computer-controlled phase timing. This allows sweeping acoustic beams across multiple angles simultaneously to inspect complex geometries.',
      advantages: [
        'Real-time S-Scan (Sectorial) and E-Scan (Electronic) color display',
        'High defect detection probability for cracks, lack of fusion, and volumetric flaws',
        'Electronic beam focusing enhances signal-to-noise ratio in heavy-wall components',
        'Fully digital raw A-scan data saved for life-cycle asset auditing'
      ],
      standards: ['ASME Code Case 2235 / Section V', 'API 620 / 650 / 653', 'BS EN ISO 18563'],
      imgMain: '/images/east-africa/ea-svc-ultrasonic.webp',
      imgDetail: '/images/east-africa/ea-svc-pipeline.webp'
    },
    pect: {
      title: 'Pulse Eddy Current Testing (PECT)',
      category: 'Electromagnetic NDT',
      subtitle: 'Non-invasive screening for Corrosion Under Insulation (CUI) on carbon steel assets.',
      overview: 'Pulse Eddy Current Testing (PECT) is an advanced electromagnetic technique designed to measure wall thickness of carbon steel structures through thermal insulation, fireproofing, or protective coatings without needing to remove the insulation.',
      advantages: [
        'Eliminates expensive insulation stripping and scaffolding costs',
        'Capable of inspecting through insulation up to 150mm thick',
        'Operates in-service at elevated surface temperatures up to 500°C',
        'Rapid footprint screening of storage tanks, spheres, and piping'
      ],
      standards: ['ISO 20669', 'API RP 583 (CUI Management)', 'ASTM E3047'],
      imgMain: '/images/east-africa/ea-svc-pipeline.webp',
      imgDetail: '/images/east-africa/ea-svc-digital-radiography.webp'
    },
    tofd: {
      title: 'Time of Flight Diffraction (TOFD)',
      category: 'Advanced Ultrasonic Inspection',
      subtitle: 'Diffracted wave physics for rapid sub-millimeter crack sizing accuracy.',
      overview: 'Time of Flight Diffraction (TOFD) relies on the diffracted ultrasound waves originating from flaw tips rather than reflected amplitude signals. This makes TOFD exceptionally accurate for height sizing of cracks regardless of flaw orientation or surface tilt.',
      advantages: [
        'Sub-millimeter crack height measurement accuracy',
        'Fast linear scanning speed covering the entire weld volume in a single pass',
        'Unaffected by weld mismatch or surface roughness',
        'Combines seamlessly with PAUT for comprehensive ASME compliant inspections'
      ],
      standards: ['ASME Section V Article 4', 'BS EN ISO 10863', 'ASTM E2373'],
      imgMain: '/images/east-africa/ea-svc-radiography.webp',
      imgDetail: '/images/east-africa/ea-svc-ultrasonic.webp'
    },
    'mfl-tube': {
      title: 'Tube Inspection (MFL / RFT / ECT)',
      category: 'Tubular NDT Inspection',
      subtitle: '100% full-length tube inspection for heat exchangers, boilers & chillers.',
      overview: 'Our tubular inspection service combines Magnetic Flux Leakage (MFL), Remote Field Testing (RFT), Near Field Testing (NFT), and Eddy Current Testing (ECT) to detect internal/external pitting, wall thinning, and circumferential cracking in heat exchanger tubes.',
      advantages: [
        'High-speed motorized probe pusher (up to 2 meters/sec scan speed)',
        'Inspects both ferromagnetic (steel) and non-ferromagnetic (copper/titanium) tubes',
        'Accurate depth sizing of ID/OD pitting and baffle plate wear',
        'Instant tube sheet color grid report indicating plugged or damaged tubes'
      ],
      standards: ['ASME Section V Article 8 / 17', 'ASTM E571 / E703', 'EPRI Guidelines'],
      imgMain: '/images/east-africa/ea-ind-oil-gas.webp',
      imgDetail: '/images/stock/stk-training.webp'
    },
    radiography: {
      title: 'Digital & Computed Radiography (CR/DR)',
      category: 'Radiographic NDT Inspection',
      subtitle: 'High-definition digital radiography plates with zero chemical waste.',
      overview: 'Digital Radiography replaces conventional film with reusable flexible phosphor imaging plates (CR) or flat panel detectors (DR). Images are scanned into high-resolution digital files instantly, reducing radiation exposure times by up to 80%.',
      advantages: [
        'Instant digital contrast enhancement, digital zoom, and wall thickness measurement',
        '80% reduction in source exposure time, improving site radiation safety',
        'Zero chemical processing waste (eco-friendly zero film footprint)',
        'Permanent DICONDE compliant digital archive'
      ],
      standards: ['ASME Section V Article 2', 'ISO 17636-2', 'BARC / AERB Radiation Norms'],
      imgMain: '/images/east-africa/ea-svc-digital-radiography.webp',
      imgDetail: '/images/east-africa/ea-svc-radiography.webp'
    }
  };

  const service = detailsMap[slug] || detailsMap['aut'];

  return (
    <div className="page-wrapper service-detail-page">
      <div className="container">
        <Link to="/services" className="back-link">
          <ArrowLeft size={16} /> Back to All Services
        </Link>

        <div className="detail-header">
          <span className="badge badge-navy mb-2">{service.category}</span>
          <h1 className="detail-title">{service.title}</h1>
          <p className="detail-subtitle">{service.subtitle}</p>
        </div>

        {/* Hero Media Card */}
        <div className="clean-card detail-media-box" style={{ padding: '0', overflow: 'hidden', borderRadius: '12px', marginBottom: '32px' }}>
          <AppImage 
            src={service.imgMain} 
            alt={service.title} 
            style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} 
          />
        </div>

        <div className="detail-grid">
          <div className="clean-card detail-card">
            <h3 className="card-heading"><Cpu size={18} color="var(--primary)" /> Technical Overview</h3>
            <p className="overview-text">{service.overview}</p>

            <h4 className="sub-heading">Code Compliance &amp; Standards:</h4>
            <div className="standards-list">
              {service.standards.map((std, i) => (
                <span key={i} className="std-pill"><FileCheck size={14} /> {std}</span>
              ))}
            </div>
          </div>

          <div className="clean-card detail-card">
            <h3 className="card-heading"><Shield size={18} color="var(--navy)" /> Key Advantages &amp; Capabilities</h3>
            <div className="advantages-list">
              {service.advantages.map((adv, i) => (
                <div key={i} className="adv-item">
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>

            <div className="sub-media-box" style={{ marginTop: '24px', borderRadius: '8px', overflow: 'hidden' }}>
              <AppImage 
                src={service.imgDetail} 
                alt={`${service.title} equipment data`} 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="clean-card detail-cta-box">
          <div>
            <h3 className="cta-heading">Require {service.title} for Your Project?</h3>
            <p className="cta-sub">Crews and certified equipment mobilise from the Kampala and Tanzania offices.</p>
          </div>
          <button onClick={() => onOpenContact(service.title)} className="btn btn-primary btn-lg">
            <span>Request Technical Scope & Proposal</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <Style>{`
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .back-link:hover { color: var(--primary); }

        .detail-header {
          margin-bottom: 24px;
        }
        .detail-title {
          font-size: 2.5rem;
          color: var(--navy);
          margin: 8px 0;
        }
        .detail-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
        }

        .detail-hero-placeholder {
          margin-bottom: 40px;
        }

        .detail-content-grid {
          margin-bottom: 40px;
        }
        .detail-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .card-heading {
          font-size: 1.3rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--bg-tint);
          padding-bottom: 12px;
        }
        .body-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .sub-heading {
          font-size: 0.95rem;
          color: var(--navy);
          margin-top: 8px;
        }

        .standards-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .std-pill {
          background: var(--bg-tint);
          border: 1px solid var(--line);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.84rem;
          color: var(--navy);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .advantages-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .adv-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-main);
        }

        .sub-placeholder-box {
          margin-top: 14px;
        }

        .detail-cta-box {
          background: var(--navy-badge-bg);
          border-color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px;
          margin-bottom: 90px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .cta-heading {
          font-size: 1.4rem;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .cta-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `}</Style>
    </div>
  );
}
