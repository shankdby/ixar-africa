import React from 'react';
import { Award, GraduationCap, ShieldCheck, CheckCircle2, ChevronRight, BookOpen, Calendar, UserCheck } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CertVerifier from '../components/CertVerifier';

export default function TrainingPage({ onOpenContact }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag"><Award size={14} /> BARC & NDT ACCREDITATION</div>
          <h2 className="section-title">
            Radiation Safety <span className="text-orange">Training & Certification</span>
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

            <div className="course-placeholder">
              <ImagePlaceholder 
                label="BARC Training Center Classroom & Gamma Radiography Practical Lab"
                recommendedSize="800 x 450 px"
                height="220px"
                aspect="16/9"
              />
            </div>

            <div className="course-features">
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> RPAD / BARC Advisory Division Curriculum</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Practical Exposure & Shielding Calculations</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Radiation Protection Officer (RPO) Path</div>
            </div>

            <button onClick={() => onOpenContact('BARC Training Course Registration')} className="btn btn-primary btn-lg" style={{ marginTop: '20px', width: '100%' }}>
              <span>Register for 2026 Batch</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="clean-card course-card">
            <div className="course-badge"><UserCheck size={14} /> Level II & III Prep</div>
            <h3 className="course-title">ASNT Level II / III Examination Preparation Courses</h3>
            <p className="course-desc">
              Advanced technical preparatory training for UT, PAUT, TOFD, MFL, and PT/MT methods following SNT-TC-1A and ISO 9712 guidelines.
            </p>

            <div className="course-placeholder">
              <ImagePlaceholder 
                label="Ultrasonic & Phased Array Calibration Practical Testing Room"
                recommendedSize="800 x 450 px"
                height="220px"
                aspect="16/9"
              />
            </div>

            <div className="course-features">
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Instructed by Senior ASNT Level III Specialists</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Calibration Block & Flawed Sample Scanning</div>
              <div className="c-feat"><CheckCircle2 size={15} color="var(--primary)" /> Procedure Qualification Record (PQR) Writing</div>
            </div>

            <button onClick={() => onOpenContact('ASNT Level II/III Training Enrollment')} className="btn btn-navy btn-lg" style={{ marginTop: '20px', width: '100%' }}>
              <span>Enroll in ASNT Course</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Certificate Verifier Section */}
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
