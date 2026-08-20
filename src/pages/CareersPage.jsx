import React from 'react';
import { Briefcase, MapPin, Award, ChevronRight, CheckCircle2, Send } from 'lucide-react';

export default function CareersPage({ onOpenContact }) {
  const jobs = [
    {
      title: 'ASNT Level II Radiography (RT) Technicians',
      location: 'Kampala, Uganda & Regional Site Deployment',
      type: 'Full-time / Project Based',
      desc: 'Seeking ASNT Level II certified radiographers with active AERB / BARC or AEC radiation safety credentials for pipeline and refinery inspection contracts.',
      reqs: ['ASNT SNT-TC-1A Level II RT Certification', 'Minimum 3+ Years Field Experience', 'Valid Radiation Safety RPO Card']
    },
    {
      title: 'AUT & PAUT Ultrasonic Specialist Inspectors',
      location: 'Uganda (Tilenga) & Tanzania (EACOP Corridor)',
      type: 'Full-time Deployment',
      desc: 'Specialist operators for Automated Ultrasonic Testing (AUT) crawlers and Phased Array UT data interpretation on cross-country crude pipeline welds.',
      reqs: ['ISO 9712 or ASNT Level II/III PAUT/AUT', 'Experience with ECA Defect Acceptance Criteria', 'Pipeline Girth Weld Inspection Track Record']
    },
    {
      title: 'Radiation Protection Officers (RPO)',
      location: 'Kampala Base & Regional Operations',
      type: 'Full-time',
      desc: 'Certified RPO responsible for regulatory compliance, source transport logs, dosimeter monitoring, and radiation safety training under AEC / TAEC norms.',
      reqs: ['BARC / AERB RPO Level 1/2 Qualification', 'Thorough Knowledge of AEC & TAEC Statutory Rules', 'Safety Leadership & Field Audit Experience']
    }
  ];

  return (
    <div className="page-wrapper careers-page">
      <div className="container">
        <div className="section-header">
          <div className="section-tag"><Briefcase size={14} /> Careers @ IXAR</div>
          <h1 className="section-title">Jobs @ IXAR East Africa</h1>
          <p className="section-subtitle">
            Join Africa’s premier non-destructive testing team. We recruit qualified ASNT Level II & III inspectors, radiation safety officers, and site managers.
          </p>
        </div>

        <div className="jobs-list" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '80px' }}>
          {jobs.map((j, idx) => (
            <div
              key={idx}
              className="clean-card job-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAEAEA',
                borderRadius: '10px',
                padding: '28px 24px',
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ flex: '1 1 500px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <span className="badge badge-navy">{j.type}</span>
                  <span style={{ fontSize: '0.85rem', color: '#6B6B6B', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                    <MapPin size={14} color="#E31E24" /> {j.location}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#001E57', marginBottom: '8px' }}>
                  {j.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', marginBottom: '14px' }}>
                  {j.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {j.reqs.map((r, i) => (
                    <span key={i} style={{ fontSize: '0.8125rem', background: '#F4F6F9', color: '#001E57', padding: '4px 10px', borderRadius: '4px', fontWeight: 600 }}>
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="mailto:bd@ixar.africa?subject=Job%20Application%20-%20IXAR%20East%20Africa"
                  className="btn btn-primary btn-md"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Apply Now via Email</span>
                  <Send size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
