import React, { useState } from 'react';
import { Calculator, Cpu, ChevronRight } from 'lucide-react';

export default function CostCalculator({ onOpenContact }) {
  const [sector, setSector] = useState('oilgas');
  const [technique, setTechnique] = useState('aut');
  const [volume, setVolume] = useState('medium');

  const sectorMultipliers = {
    oilgas: { name: 'Oil & Gas Offshore / Onshore Pipeline', base: 4500 },
    refinery: { name: 'Refinery & Petrochem Storage', base: 3800 },
    power: { name: 'Power Plant Boiler / Turbine', base: 3200 },
    railway: { name: 'Railway USFD Track & Axle', base: 2800 },
    mining: { name: 'Mining Heavy Equipment & Structural', base: 2500 }
  };

  const techMultipliers = {
    aut: { name: 'Automated Ultrasonic (AUT)', mult: 1.5 },
    paut: { name: 'Phased Array (PAUT)', mult: 1.4 },
    pect: { name: 'Pulse Eddy Current (PECT)', mult: 1.3 },
    mfl: { name: 'Tube Inspection (MFL)', mult: 1.25 },
    usfd: { name: 'USFD Railway Flaw Detection', mult: 1.2 },
    cr: { name: 'Computed Radiography (CR/DR)', mult: 1.1 }
  };

  const volumeMultipliers = {
    small: { label: 'Small / Targeted Inspection (1-3 Days)', mult: 1.0 },
    medium: { label: 'Medium Project (1-2 Weeks)', mult: 2.2 },
    large: { label: 'Large Turnaround / Site-wide Shutdown', mult: 4.5 }
  };

  const estimatedNDTLow = Math.round(sectorMultipliers[sector].base * techMultipliers[technique].mult * volumeMultipliers[volume].mult);
  const estimatedNDTHigh = Math.round(estimatedNDTLow * 1.3);

  return (
    <section id="calculator" className="section calculator-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} /> INSTANT NDT PROJECT ESTIMATOR
          </div>
          <h2 className="section-title">
            Estimate Your <span className="text-orange">NDT Project Budget</span>
          </h2>
          <p className="section-subtitle">
            Configure your sector, inspection methodology, and project scale for an instant indicative budget estimate for field mobilization.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="clean-card calc-main-card">
          <div className="calc-grid">
            <div className="calc-controls">
              <h3 className="calc-box-title"><Cpu size={18} color="var(--primary)" /> NDT Scope Parameters</h3>
              
              {/* Sector */}
              <div className="control-group">
                <div className="control-label">
                  <span>Industrial Sector:</span>
                </div>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="calc-select"
                >
                  {Object.keys(sectorMultipliers).map((k) => (
                    <option key={k} value={k}>{sectorMultipliers[k].name}</option>
                  ))}
                </select>
              </div>

              {/* Technique */}
              <div className="control-group">
                <div className="control-label">
                  <span>Primary NDT Inspection Technique:</span>
                </div>
                <select
                  value={technique}
                  onChange={(e) => setTechnique(e.target.value)}
                  className="calc-select"
                >
                  {Object.keys(techMultipliers).map((k) => (
                    <option key={k} value={k}>{techMultipliers[k].name}</option>
                  ))}
                </select>
              </div>

              {/* Volume */}
              <div className="control-group">
                <div className="control-label">
                  <span>Project Scale & Duration:</span>
                </div>
                <div className="choice-grid column">
                  {Object.keys(volumeMultipliers).map((k) => (
                    <button
                      key={k}
                      className={`choice-btn ${volume === k ? 'active' : ''}`}
                      onClick={() => setVolume(k)}
                    >
                      {volumeMultipliers[k].label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimate Output Panel */}
            <div className="calc-summary-panel">
              <div className="summary-badge">ESTIMATED BUDGET RANGE</div>
              <div className="price-display">
                <div className="price-amount">
                  ${estimatedNDTLow.toLocaleString()} - ${estimatedNDTHigh.toLocaleString()}
                </div>
              </div>

              <div className="billing-note">
                Indicative mobilization & inspection cost range for African regional hub deployment.
              </div>

              <div className="summary-line-items">
                <div className="line-item">
                  <span>Target Industry:</span>
                  <strong>{sectorMultipliers[sector].name}</strong>
                </div>
                <div className="line-item">
                  <span>Selected Method:</span>
                  <strong>{techMultipliers[technique].name}</strong>
                </div>
                <div className="line-item">
                  <span>Certified Crew:</span>
                  <strong>ASNT & BARC Level II / III</strong>
                </div>
              </div>

              <button
                onClick={() => onOpenContact(`NDT Estimate: ${sectorMultipliers[sector].name} (${techMultipliers[technique].name}) - Est: $${estimatedNDTLow.toLocaleString()}-$${estimatedNDTHigh.toLocaleString()}`)}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '20px' }}
              >
                <span>Request Formal Proposal</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calculator-section {
          background: #FFFFFF;
        }
        .calc-main-card {
          margin-top: 10px;
          padding: 36px;
        }
        .calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 36px;
        }
        .calc-box-title {
          font-size: 1.25rem;
          color: var(--navy);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid #E2E8F0;
        }

        .control-group {
          margin-bottom: 20px;
        }
        .control-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--navy);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .choice-grid.column {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .choice-btn {
          padding: 12px 16px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .choice-btn:hover {
          border-color: #CBD5E1;
        }
        .choice-btn.active {
          background: var(--navy);
          color: #FFFFFF;
          border-color: var(--navy);
        }

        .calc-select {
          width: 100%;
          padding: 11px 14px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-sm);
          color: var(--navy);
          font-size: 0.92rem;
          outline: none;
          font-weight: 500;
        }

        /* Summary Panel */
        .calc-summary-panel {
          background: #F8FAFC;
          border-radius: var(--radius-lg);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #E2E8F0;
        }
        .summary-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .price-display {
          display: flex;
          align-items: baseline;
          margin-bottom: 8px;
        }
        .price-amount {
          font-family: var(--font-mono);
          font-size: 2.1rem;
          font-weight: 900;
          color: var(--navy);
        }

        .billing-note {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .summary-line-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid #E2E8F0;
          padding-top: 16px;
        }
        .line-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .line-item strong {
          color: var(--navy);
        }

        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr; }
          .calc-main-card { padding: 24px; }
        }
      `}</style>
    </section>
  );
}
