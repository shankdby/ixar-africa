import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Award, ChevronRight, Layers, Flame, Train, Wrench } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Style from '../components/Style';

export default function SectorDetailPage({ onOpenContact }) {
  const { slug } = useParams();

  const sectorMap = {
    'oil-gas': {
      title: 'Oil & Gas (Pipelines, Refineries & Storage Tanks)',
      icon: Flame,
      subtitle: 'Asset integrity solutions for upstream offshore rigs, midstream gas pipelines & downstream refineries.',
      overview: 'Africa’s Oil & Gas infrastructure operates under demanding environmental conditions—from marine corrosion in West Africa offshore deepwater fields to high-temperature operating units in refineries. IXAR Africa provides complete API compliant asset integrity and advanced NDT screening.',
      applications: [
        'Automated Ultrasonic Testing (AUT) for high-pressure gas & crude pipeline girth welds',
        'API 653 Aboveground Storage Tank Floor MFL Scanning & Out-of-Roundness Audits',
        'Pulse Eddy Current Testing (PECT) for Corrosion Under Insulation (CUI) on process lines',
        'API 570 Process Piping Thickness surveys & Risk-Based Inspection (RBI) programs'
      ],
      imgMain: '/images/east-africa/ea-ind-oil-gas.webp',
      imgDetail: '/images/east-africa/ea-svc-digital-radiography.webp'
    },
    railways: {
      title: 'Railways (USFD Track & Rolling Stock)',
      icon: Train,
      subtitle: 'Ultrasonic flaw detection for African continuous welded rails, joints & rolling stock wheelsets.',
      overview: 'Rail network safety is paramount to prevent derailments and catastrophic track failures. IXAR Africa has been an industry leader in Railway Ultrasonic Flaw Detection (USFD), deploying specialist teams with rail trolleys and axle probes across African rail freight corridors.',
      applications: [
        'Continuous Welded Rail (CWR) & joint bar ultrasonic flaw detection (USFD)',
        'Alumino-thermic weld quality verification & transverse crack sizing',
        'Locomotive solid & hollow axle fatigue crack ultrasonic testing',
        'Rolling stock wheelset rim & bogie structural magnetic particle inspection'
      ],
      imgMain: '/images/east-africa/ea-svc-ultrasonic.webp',
      imgDetail: '/images/east-africa/ea-svc-pipeline.webp'
    },
    'power-plants': {
      title: 'Power Generation (Boilers & Turbines)',
      icon: Wrench,
      subtitle: 'Rapid turnaround tube testing & turbine inspection for thermal, hydro & geothermal facilities.',
      overview: 'Unplanned power plant boiler tube outages cause severe grid disruption. IXAR Africa provides emergency shutdown tube testing (MFL/RFT) and high-temperature NDT inspections to guarantee boiler availability and turbine rotor integrity.',
      applications: [
        '100% full-length tube inspection of boilers, feedwater heaters, and condensers (MFL / RFT)',
        'Steam pipe girth weld Phased Array Ultrasonic (PAUT) & TOFD inspections',
        'Turbine rotor disk & blade root ultrasonic flaw sizing',
        'Geothermal steam separator & pressure vessel API 510 evaluations'
      ],
      imgMain: '/images/east-africa/ea-hero-tilenga-cpf.webp',
      imgDetail: '/images/east-africa/ea-svc-radiography.webp'
    },
    mining: {
      title: 'Mining & Heavy Infrastructure',
      icon: Layers,
      subtitle: 'Structural weld testing & heavy machinery fatigue inspection for African mine sites.',
      overview: 'Mining equipment such as draglines, excavators, crushers, and conveyor structures operate under extreme cyclic loads. IXAR Africa performs routine non-destructive testing to detect fatigue cracks before structural failure occurs.',
      applications: [
        'Excavator boom, arm, and chassis structural weld magnetic particle / ultrasonic NDT',
        'Crusher shaft & mill trunnion ultrasonic fatigue crack evaluation',
        'Mine shaft gantry & conveyor structural steel integrity audits',
        'Thick plate weld Radiographic & Ultrasonic testing according to AWS D1.1'
      ],
      imgMain: '/images/east-africa/ea-svc-pipeline.webp',
      imgDetail: '/images/east-africa/ea-svc-ultrasonic.webp'
    }
  };

  const sector = sectorMap[slug] || sectorMap['oil-gas'];
  const IconComp = sector.icon;

  return (
    <div className="page-wrapper">
      <div className="container">
        <Link to="/applications" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to All Industry Applications</span>
        </Link>

        <div className="detail-header">
          <span className="badge badge-navy"><IconComp size={13} /> Industrial Sector Sub-Page</span>
          <h1 className="detail-title">{sector.title}</h1>
          <p className="detail-subtitle">{sector.subtitle}</p>
        </div>

        {/* Hero Media Card */}
        <div className="clean-card detail-media-box" style={{ padding: '0', overflow: 'hidden', borderRadius: '12px', marginBottom: '32px' }}>
          <img 
            src={sector.imgMain} 
            alt={sector.title} 
            style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }} 
          />
        </div>

        {/* Overview & Applications Grid */}
        <div className="grid-2 detail-content-grid">
          <div className="clean-card detail-card">
            <h3 className="card-heading"><Shield size={18} color="var(--primary)" /> Industrial Sector Overview</h3>
            <p className="body-text">{sector.overview}</p>
          </div>

          <div className="clean-card detail-card">
            <h3 className="card-heading"><CheckCircle2 size={18} color="var(--navy)" /> Primary Field Applications</h3>
            <div className="advantages-list">
              {sector.applications.map((app, i) => (
                <div key={i} className="adv-item">
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>{app}</span>
                </div>
              ))}
            </div>

            <div className="sub-media-box" style={{ marginTop: '24px', borderRadius: '8px', overflow: 'hidden' }}>
              <img 
                src={sector.imgDetail} 
                alt={`${sector.title} inspection equipment`} 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
              />
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="clean-card detail-cta-box">
          <div>
            <h3 className="cta-heading">Need {sector.title} Inspection Services?</h3>
            <p className="cta-sub">Mobilize certified IXAR crews to your site anywhere across Africa.</p>
          </div>
          <button onClick={() => onOpenContact(sector.title)} className="btn btn-primary btn-lg">
            <span>Request Sector Inspection Proposal</span>
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
          font-size: 2.3rem;
          color: var(--navy);
          margin: 8px 0;
        }
        .detail-subtitle {
          font-size: 1.1rem;
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
