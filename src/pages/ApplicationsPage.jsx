import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Flame, Wrench, Layers, Train, Anchor, Factory, Container, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import AppImage from '../components/AppImage';

export default function ApplicationsPage({ onOpenContact }) {
  const sectors = [
    {
      slug: 'oil-gas',
      title: 'Oil and Gas',
      icon: Flame,
      category: 'Upstream / Midstream / Downstream',
      desc: 'Pipelines, storage tanks, refineries and process plant across upstream offshore fields, cross-country pipelines, and downstream processing facilities.',
      img: '/images/east-africa/ea-ind-oil-gas.webp',
      alt: 'Oil and gas refinery and pipeline inspection'
    },
    {
      slug: 'power-plants',
      title: 'Power Generation and Geothermal',
      icon: Wrench,
      category: 'Thermal / Hydro / Geothermal',
      desc: 'Boilers, turbines, heat exchangers, steam pipework, and separator vessels in thermal, hydro, geothermal and renewable power facilities.',
      img: '/images/east-africa/ea-hero-tilenga-cpf.webp',
      alt: 'Geothermal power generation plant inspection'
    },
    {
      slug: 'mining',
      title: 'Mining & Heavy Infrastructure',
      icon: Layers,
      category: 'Heavy Equipment & Structural',
      desc: 'Structural steelwork, excavators, draglines, crushers, mill trunnions, shaft gantries, and material handling equipment.',
      img: '/images/east-africa/ea-svc-pipeline.webp',
      alt: 'Heavy mining structural steelwork NDT'
    },
    {
      slug: 'railways',
      title: 'Railways & Transportation',
      icon: Train,
      category: 'Rail Tracks & Rolling Stock',
      desc: 'Continuous welded rails (USFD), thermit weld quality verification, locomotive axles, and rolling stock wheelset integrity.',
      img: '/images/east-africa/ea-svc-ultrasonic.webp',
      alt: 'Railway track ultrasonic flaw detection'
    },
    {
      slug: 'oil-gas',
      title: 'Cement',
      icon: Factory,
      category: 'Heavy Processing Plant',
      desc: 'Rotary kilns, ducting, structural supports, cyclone towers, and plant maintained within tight emergency shutdown windows.',
      img: '/images/east-africa/ea-ind-oil-gas.webp',
      alt: 'Cement plant rotary kiln inspection'
    },
    {
      slug: 'oil-gas',
      title: 'Breweries, Beverage & Food Processing',
      icon: Coffee,
      category: 'Hygienic Welded Systems',
      desc: 'Stainless steel tanks, pressure vessels, hygienic process pipework, fermentation cellars, and steam boilers.',
      img: '/images/east-africa/ea-svc-digital-radiography.webp',
      alt: 'Beverage processing stainless steel tank inspection'
    },
    {
      slug: 'oil-gas',
      title: 'Sugar Industry',
      icon: Container,
      category: 'Agro-Industrial Processing',
      desc: 'Boilers, evaporators, mill structures, crystallizers, and pressure equipment inspected during off-crop maintenance turnarounds.',
      img: '/images/east-africa/ea-svc-radiography.webp',
      alt: 'Sugar mill boiler and evaporator testing'
    },
    {
      slug: 'oil-gas',
      title: 'Marine and Ports',
      icon: Anchor,
      category: 'Submerged Assets & Jetties',
      desc: 'Port berth jetties, gantry cranes, vessel hulls, mooring bollards, and submerged infrastructure inspected by commercial NDT divers.',
      img: '/images/east-africa/ea-svc-underwater.webp',
      alt: 'Marine port terminal jetty underwater NDT'
    }
  ];

  return (
    <div className="page-wrapper applications-page">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Industry Focus</div>
          <h1 className="section-title">Industries We Serve</h1>
          <p className="section-subtitle">
            Sector-specific non-destructive testing and asset integrity management tailored to the key industrial economic sectors of East Africa.
          </p>
        </div>

        <div className="sector-full-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '80px' }}>
          {sectors.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="clean-card sector-overview-card"
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
                        backdropFilter: 'blur(4px)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <IconComp size={13} /> {item.category}
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
                  <Link to={`/applications/${item.slug}`} className="btn btn-navy btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>Sector Details</span>
                    <ChevronRight size={14} />
                  </Link>
                  <button
                    onClick={() => onOpenContact(item.title)}
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: '0.8125rem' }}
                  >
                    Request Scope
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
