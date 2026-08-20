import React from 'react';
import { Award, GraduationCap, ShieldCheck, CheckCircle2, ChevronRight, BookOpen, Calendar, UserCheck } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CertVerifier from '../components/CertVerifier';

export default function TrainingPage({ onOpenContact }) {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag"><Award size={14} /> Training and certification</div>
          <h2 className="section-title">
            NDT Training and Certification
          </h2>
          <p className="section-subtitle">
            Industry-recognized training courses in collaboration with Radiological Physics & Advisory Division, Bhabha Atomic Research Centre (BARC), Mumbai.
          </p>
        </div>

        {/* Course Overview Cards */}
        <div className="grid-2 training-grid" style={{ marginBottom: '50px' }}>
          <div className="clean-card course-card">
            <div className="course-badge"><GraduationCap size={14} /> BARC Collaborative Course</div>
            <h3 className="course-title">Training Cum Certification Course on Radiation Safety for Industrial Radiographers</h3>
            <p className="course-desc">
              Mandatory qualification course for NDT radiographers operating industrial gamma radiography cameras and X-ray generators in compliance with AERB radiation safety rules.
            </p>

            <div className="course-media" style={{ borderRadius: '8px', overflow: 'hidden', marginTop: '16px', marginBottom: '16px' }}>
              <img 
                src="/images/barc_training_center.jpg" 
                alt="BARC-accredited training centre and gamma radiography practical lab" 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
              />
            </div>

            <div className="course-features">
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> RPAD / BARC Advisory Division Curriculum</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Practical Exposure &amp; Shielding Calculations</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Radiation Protection Officer (RPO) Path</div>
            </div>

            <button onClick={() => onOpenContact('BARC Training Course Registration')} className="btn btn-primary btn-lg" style={{ marginTop: '20px', width: '100%' }}>
              <span>Ask about the next course</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="clean-card course-card">
            <div className="course-badge"><UserCheck size={14} /> Level II &amp; III Prep</div>
            <h3 className="course-title">ASNT Level II / III Examination Preparation Courses</h3>
            <p className="course-desc">
              Advanced technical preparatory training for UT, PAUT, TOFD, MFL, and PT/MT methods following SNT-TC-1A and ISO 9712 guidelines.
            </p>

            <div className="course-media" style={{ borderRadius: '8px', overflow: 'hidden', marginTop: '16px', marginBottom: '16px' }}>
              <img 
                src="/images/radiography_detail_hero.jpg" 
                alt="Ultrasonic and phased array calibration room" 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
              />
            </div>

            <div className="course-features">
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Instructed by Senior ASNT Level III Specialists</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Calibration Block & Flawed Sample Scanning</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Procedure Qualification Record (PQR) Writing</div>
            </div>

            <button onClick={() => onOpenContact('ASNT Level II/III Training Enrollment')} className="btn btn-navy btn-lg" style={{ marginTop: '20px', width: '100%' }}>
              <span>Ask about ASNT preparation</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>



        {/* Certificate verification */}
        <CertVerifier />
      </div>

      <style>{`
        .course-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .course-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-light);
          color: var(--primary-dark);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          width: fit-content;
          margin-bottom: 12px;
        }
        .course-title {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .course-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .course-placeholder {
          margin-bottom: 20px;
        }
        .course-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .training-caveat {
          margin: 0 0 40px;
          font-size: 0.875rem;
          line-height: 1.7;
        }
        .c-feat {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-main);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
