import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AppImage from '../components/AppImage';

export default function ServicesPage({ onOpenContact }) {
  const serviceList = [
    {
      slug: 'radiography',
      title: 'Conventional Radiography (RT)',
      category: 'Radiographic Inspection',
      desc: 'X-ray and gamma radiography using Iridium-192, Selenium-75 and Cobalt-60 sources, supported by mobile radiography units.',
      img: '/images/east-africa/ea-svc-radiography.webp',
      alt: 'Conventional Radiography testing on process pipework'
    },
    {
      slug: 'radiography',
      title: 'Digital and Computed Radiography (CR/DR)',
      category: 'Digital Radiography',
      desc: 'Digital image capture for faster interpretation, simpler storage and immediate sharing of results with zero chemical waste.',
      img: '/images/east-africa/ea-svc-digital-radiography.webp',
      alt: 'Digital radiography detector panel on pipe spool'
    },
    {
      slug: 'aut',
      title: 'Ultrasonic Testing (UT)',
      category: 'Ultrasonic Inspection',
      desc: 'Thickness measurement, flaw detection and material characterisation across metals, plastics, composites and ceramics.',
      img: '/images/east-africa/ea-svc-ultrasonic.webp',
      alt: 'Ultrasonic thickness measurement on steel pipe'
    },
    {
      slug: 'paut',
      title: 'Advanced Ultrasonics (PAUT / TOFD / AUT)',
      category: 'Advanced Ultrasonic',
      desc: 'Phased array (PAUT), time of flight diffraction (TOFD) and automated ultrasonic testing (AUT) for weld inspection and flaw sizing.',
      img: '/images/east-africa/ea-svc-ultrasonic.webp',
      alt: 'Automated Ultrasonic Testing crawler on pipeline weld'
    },
    {
      slug: 'aut',
      title: 'Magnetic Particle & Liquid Penetrant (MT/PT)',
      category: 'Surface Testing',
      desc: 'Surface and near-surface flaw detection on welds and structural components, carried out on site or in workshops.',
      img: '/images/east-africa/ea-svc-radiography.webp',
      alt: 'Magnetic particle flaw detection'
    },
    {
      slug: 'pect',
      title: 'Eddy Current & Pulsed Eddy Current (ECT/PECT)',
      category: 'Electromagnetic NDT',
      desc: 'Corrosion under insulation (CUI) screening on carbon steel structures, heat exchanger tubes, and surface crack detection.',
      img: '/images/east-africa/ea-svc-pipeline.webp',
      alt: 'Pulsed eddy current CUI inspection'
    },
    {
      slug: 'aut',
      title: 'Pipeline Inspection',
      category: 'Pipeline NDT',
      desc: 'X-ray crawler radiography and automated ultrasonic testing of girth welds for cross country transmission pipelines.',
      img: '/images/east-africa/ea-svc-pipeline.webp',
      alt: 'Pipeline X-ray crawler and girth weld testing'
    },
    {
      slug: 'aut',
      title: 'Pigging & Intelligent Pigging (ILI)',
      category: 'Pipeline Integrity',
      desc: 'Cleaning pigs to remove deposits and restore flow, and high-tech intelligent pigs to inspect and map pipeline wall condition.',
      img: '/images/east-africa/ea-svc-pigging.webp',
      alt: 'Intelligent pigging tool being launched into oil pipeline'
    },
    {
      slug: 'mfl-tube',
      title: 'Tank & Tube Inspection (MFL)',
      category: 'Tank & Tube NDT',
      desc: 'Magnetic flux leakage inspection of storage tank floor plates and heat exchanger tubes for wall loss, pitting, and cracking.',
      img: '/images/east-africa/ea-ind-oil-gas.webp',
      alt: 'Storage tank floor MFL scanner'
    },
    {
      slug: 'aut',
      title: 'Underwater Inspection',
      category: 'Marine NDT',
      desc: 'Commercial diver inspection of jetties, harbor structures, dams, bridges and other submerged marine assets.',
      img: '/images/east-africa/ea-svc-underwater.webp',
      alt: 'Commercial diver performing underwater ultrasonic testing'
    },
    {
      slug: 'aut',
      title: 'Destructive Testing & Laboratory Services',
      category: 'Metallurgical Lab',
      desc: 'Mechanical testing, chemical analysis, coating testing, corrosion testing, metallurgical evaluation, and failure analysis.',
      img: '/images/east-africa/ea-svc-radiography.webp',
      alt: 'Materials testing laboratory'
    },
    {
      slug: 'aut',
      title: 'NDT Training & BARC Certification',
      category: 'Radiation Safety & Training',
      desc: 'Industry recognized training including radiation safety certification for industrial radiographers in collaboration with BARC.',
      img: '/images/east-africa/ea-backed-barc.webp',
      alt: 'BARC accredited NDT training center'
    }
  ];

  return (
    <div className="page-wrapper services-page">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Comprehensive Portfolio</div>
          <h1 className="section-title">Services We Offer</h1>
          <p className="section-subtitle">
            12 core non-destructive testing and industrial inspection services delivered across Uganda, Tanzania, Kenya, and regional project sites.
          </p>
        </div>

        <div className="services-full-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '80px' }}>
          {serviceList.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="clean-card service-overview-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAEAEA',
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '210px', width: '100%', overflow: 'hidden' }}>
                  <AppImage
                    src={item.img}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(0, 30, 87, 0.9)',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      borderRadius: '4px',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <div style={{ padding: '24px 22px 16px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#001E57', marginBottom: '10px', lineHeight: '1.3' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div
                style={{
                  padding: '16px 22px 22px',
                  borderTop: '1px solid #F0F0F0',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}
              >
                <Link to={`/services/${item.slug}`} className="btn btn-navy btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>Technical Details</span>
                  <ChevronRight size={14} />
                </Link>
                <button
                  onClick={() => onOpenContact(item.title)}
                  className="btn btn-outline btn-sm"
                  style={{ fontSize: '0.8125rem' }}
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
