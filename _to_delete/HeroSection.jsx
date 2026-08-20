import React from 'react';
import { ArrowRight, Shield, Award, CheckCircle2, Activity, Check } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="section-tag">
            <Activity size={14} />
            <span>PAN-AFRICAN INDUSTRIAL NDT & ASSET INTEGRITY</span>
          </div>

          <h1 className="hero-title">
            Certified Testing. <span className="text-orange">Proven Protection</span> Across Africa.
          </h1>

          <p className="hero-subtitle">
            Empowering Africa's Oil & Gas, Mining, Power Plants, and Railways with high-sensitivity Non-Destructive Testing (AUT, PAUT, TOFD, PECT, MFL, Railway USFD) backed by 55+ years of nuclear-grade precision and BARC certification.
          </p>

          {/* Quick Metrics Cards */}
          <div className="hero-stats-grid">
            <div className="stat-card">
              <span className="stat-num">55+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">12,000+</span>
              <span className="stat-label">Projects Inspected</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">99.8%</span>
              <span className="stat-label">Client Trust Rate</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button 
              onClick={() => onOpenContact()} 
              className="btn btn-primary btn-lg"
            >
              <span>Request Inspection Proposal</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#services" 
              className="btn btn-outline btn-lg"
            >
              <span>Explore NDT Methods</span>
            </a>
          </div>

          {/* Key Compliance Checklist */}
          <div className="hero-trust-list">
            <span><CheckCircle2 size={16} color="var(--primary)" /> BARC Radiation Safety</span>
            <span><CheckCircle2 size={16} color="var(--primary)" /> API & ASNT Level III Crew</span>
            <span><CheckCircle2 size={16} color="var(--primary)" /> Rapid Onsite Deployment</span>
          </div>
        </div>

        {/* Right Column: Hero Photographic Image Display */}
        <div className="hero-image-wrapper">
          <div className="image-frame">
            <img 
              src="/images/hero_pipeline_ndt.jpg" 
              alt="Automated Ultrasonic Testing Pipeline Inspection Africa" 
              className="hero-img"
            />
            <div className="image-overlay-badge">
              <div className="badge-icon-box">
                <Award size={22} />
              </div>
              <div>
                <div className="badge-title">AUT Pipeline Weld Inspection</div>
                <div className="badge-sub">High-Sensitivity Zero-Defect Mapping</div>
              </div>
            </div>

            <div className="image-floating-card">
              <div className="floating-live-dot"></div>
              <span>BARC & API 653 Compliant Field Operation</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 175px;
          padding-bottom: 90px;
          background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
          border-bottom: 1px solid #E2E8F0;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }
        .hero-title {
          font-size: 3.3rem;
          line-height: 1.15;
          margin-bottom: 20px;
          color: var(--navy);
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 30px;
        }
        
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          padding: 16px;
          box-shadow: var(--shadow-sm);
        }
        .stat-num {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--navy);
          display: block;
        }
        .stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }
        .hero-trust-list {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 500;
          flex-wrap: wrap;
        }
        .hero-trust-list span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Image Display */
        .hero-image-wrapper {
          position: relative;
        }
        .image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
          border: 4px solid #FFFFFF;
        }
        .hero-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .image-frame:hover .hero-img {
          transform: scale(1.03);
        }

        .image-overlay-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background: rgba(15, 23, 42, 0.92);
          backdrop-filter: blur(12px);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          color: #FFFFFF;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .badge-icon-box {
          width: 44px;
          height: 44px;
          background: var(--primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          flex-shrink: 0;
        }
        .badge-title {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .badge-sub {
          font-size: 0.78rem;
          color: #94A3B8;
        }

        .image-floating-card {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #FFFFFF;
          border-radius: 100px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--navy);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .floating-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #16A34A;
          box-shadow: 0 0 8px #16A34A;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-title { font-size: 2.7rem; }
          .hero-img { height: 380px; }
        }
      `}</style>
    </section>
  );
}
