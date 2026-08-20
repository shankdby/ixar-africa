import React from 'react';
import { ShieldCheck, Cpu, ChevronRight, Package, Wrench, CheckCircle2 } from 'lucide-react';

export default function ProductsPage({ onOpenContact }) {
  const products = [
    {
      title: 'Industrial Gamma Radiography Equipment & Cameras',
      category: 'Radiography Equipment',
      desc: 'Remote control gamma radiography projectors (Iridium-192, Cobalt-60, Selenium-75), drive cables, source guide tubes, and collimators.',
      specs: ['AERB / BARC Approved Designs', 'Depleted Uranium / Tungsten Shielding', 'High Safety Interlock System']
    },
    {
      title: 'Ultrasonic Thickness Gauges & Digital Flaw Detectors',
      category: 'Ultrasonic Products',
      desc: 'Portable dual-element A-scan thickness gauges, High-Temperature probes (up to 500°C), and multi-channel Phased Array flaw detectors.',
      specs: ['Sub-millimeter Accuracy', 'A-Scan & B-Scan Data Logging', 'Ruggedized IP67 Enclosure']
    },
    {
      title: 'Calibration Blocks & Reference Standards',
      category: 'Calibration Standards',
      desc: 'ASME, API, and IIW calibration blocks (V1, V2, Step Blocks, DAC blocks) manufactured from certified carbon steel, stainless steel, and alloy stock.',
      specs: ['EN 10204 3.1 Material Certificates', 'EDM Notch & Flat Bottom Hole Precision', 'Serialised Traceability']
    },
    {
      title: 'NDT Consumables & Darkroom Supplies',
      category: 'Consumables & Accessories',
      desc: 'Magnaflux magnetic powders, contrast paints, liquid penetrant aerosol kits, lead intensifying screens, and DICONDE digital radiography cassettes.',
      specs: ['ASTM E1444 & ISO 3452 Compliant', 'Halogen & Sulfur Free Penetrants', 'Immediate East Africa Warehouse Stock']
    }
  ];

  return (
    <div className="page-wrapper products-page">
      <div className="container">
        <div className="section-header">
          <div className="section-tag"><Package size={14} /> NDT Products & Supply</div>
          <h1 className="section-title">NDT Products & Equipment Supply</h1>
          <p className="section-subtitle">
            Certified non-destructive testing equipment, radiography cameras, calibration blocks, and consumables supplied across East Africa.
          </p>
        </div>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '80px' }}>
          {products.map((p, idx) => (
            <div
              key={idx}
              className="clean-card product-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAEAEA',
                borderRadius: '10px',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
              }}
            >
              <div>
                <span className="badge badge-navy" style={{ marginBottom: '14px', display: 'inline-block' }}>
                  {p.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#001E57', marginBottom: '10px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: '1.6', marginBottom: '18px' }}>
                  {p.desc}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  {p.specs.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#001E57', marginBottom: '6px', fontWeight: 600 }}>
                      <CheckCircle2 size={14} color="#E31E24" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenContact(`Product Enquiry: ${p.title}`)}
                className="btn btn-primary btn-md"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Inquire About Equipment</span>
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
