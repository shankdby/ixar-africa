import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, CheckCircle2, Activity, Cpu, Layers, Train, Wrench, Globe, Calculator, FileCheck } from 'lucide-react';
import CompetitorBar from '../components/CompetitorBar';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function HomePage({ onOpenContact }) {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
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

            <div className="hero-cta-group">
              <button 
                onClick={() => onOpenContact()} 
                className="btn btn-primary btn-lg"
              >
                <span>Request Proposal</span>
                <ArrowRight size={18} />
              </button>

              <Link to="/services" className="btn btn-outline btn-lg">
                <span>Explore NDT Methods</span>
              </Link>
            </div>

            <div className="hero-trust-list">
              <span><CheckCircle2 size={16} color="var(--primary)" /> BARC Radiation Safety</span>
              <span><CheckCircle2 size={16} color="var(--primary)" /> API & ASNT Level III Crew</span>
              <span><CheckCircle2 size={16} color="var(--primary)" /> Rapid Onsite Deployment</span>
            </div>
          </div>

          {/* Hero Image Placeholder Frame */}
          <div className="hero-image-container">
            <ImagePlaceholder 
              label="Pipeline NDT & Field Inspection Operations"
              recommendedSize="1200 x 675 px (Hero Field Photography)"
              height="440px"
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      {/* Competitor Benchmark Bar */}
      <CompetitorBar />

      {/* Navigation Gateway Grid */}
      <section className="section gateway-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">EXPLORE IXAR PORTAL</div>
            <h2 className="section-title">
              Complete Engineering & <span className="text-orange">Testing Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Navigate through dedicated sections detailing our specialized inspection methodologies, industry application sub-pages, and Pan-African operational network.
            </p>
          </div>

          <div className="grid-3 gateway-grid">
            <Link to="/services" className="clean-card gateway-card">
              <div className="gate-icon-box"><Cpu size={24} /></div>
              <h3 className="gate-title">NDT Services & Methodologies</h3>
              <p className="gate-desc">Explore AUT, PAUT, TOFD, PECT CUI screening, and digital radiography sub-pages.</p>
              <div className="gate-link">Browse All NDT Methods →</div>
            </Link>

            <Link to="/applications" className="clean-card gateway-card">
              <div className="gate-icon-box"><Layers size={24} /></div>
              <h3 className="gate-title">Applications & Industry Sectors</h3>
              <p className="gate-desc">Oil & gas pipelines, refinery tanks, railway tracks (USFD), power plants, and mining.</p>
              <div className="gate-link">View Industry Sub-pages →</div>
            </Link>

            <Link to="/training" className="clean-card gateway-card">
              <div className="gate-icon-box"><Award size={24} /></div>
              <h3 className="gate-title">BARC Safety Training & Verifier</h3>
              <p className="gate-desc">Official BARC Radiation Safety course details & instant online certificate verification tool.</p>
              <div className="gate-link">Verify Credentials & Courses →</div>
            </Link>

            <Link to="/network" className="clean-card gateway-card">
              <div className="gate-icon-box"><Globe size={24} /></div>
              <h3 className="gate-title">Pan-African Operations Network</h3>
              <p className="gate-desc">Regional hubs in South Africa, Nigeria, Ghana, Kenya, Uganda, and Mozambique.</p>
              <div className="gate-link">Explore African Network →</div>
            </Link>

            <Link to="/estimator" className="clean-card gateway-card">
              <div className="gate-icon-box"><Calculator size={24} /></div>
              <h3 className="gate-title">Project Budget Estimator</h3>
              <p className="gate-desc">Calculate indicative mobilization & inspection budget range for your project.</p>
              <div className="gate-link">Calculate Budget Estimate →</div>
            </Link>

            <Link to="/case-studies" className="clean-card gateway-card">
              <div className="gate-icon-box"><FileCheck size={24} /></div>
              <h3 className="gate-title">African Case Studies</h3>
              <p className="gate-desc">Proven project achievements across pipelines, thermal power plants, and railway lines.</p>
              <div className="gate-link">Read Field Case Studies →</div>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          padding-top: 175px;
          padding-bottom: 80px;
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

        .gateway-section {
          background: #F8FAFC;
        }
        .gateway-card {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .gate-icon-box {
          width: 48px;
          height: 48px;
          background: var(--primary-light);
          border: 1px solid var(--primary-border);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          margin-bottom: 16px;
        }
        .gate-title {
          font-size: 1.25rem;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .gate-desc {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .gate-link {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.7rem; }
        }
      `}</style>
    </div>
  );
}
