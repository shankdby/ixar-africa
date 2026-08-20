import React, { useState, useMemo } from 'react';
import { ClipboardList, Plus, Check, ChevronRight, Info } from 'lucide-react';

/* Scope builder.

   This was a cost calculator that multiplied invented day-rates by invented
   mobilisation fees and printed a currency figure. NDT is priced on scope,
   access, shutdown window, source logistics and standard — not on a slider —
   so any number it produced would have been a guess presented as a quote, and
   the first real proposal would have contradicted it.

   It now assembles the scope instead: the client picks methods, asset type
   and location, and the summary goes to the enquiry form so IXAR can price it
   properly. Same lead-generation job, nothing fabricated. */

const METHODS = [
  { id: 'rt', label: 'Conventional Radiography (RT)' },
  { id: 'crdr', label: 'Digital / Computed Radiography' },
  { id: 'ut', label: 'Ultrasonic Testing (UT)' },
  { id: 'paut', label: 'Advanced Ultrasonics (PAUT / TOFD / AUT)' },
  { id: 'mtpt', label: 'Magnetic Particle / Liquid Penetrant' },
  { id: 'ect', label: 'Eddy Current / Pulsed Eddy Current' },
  { id: 'mfl', label: 'Tank floor or tube inspection (MFL)' },
  { id: 'pigging', label: 'Pigging / intelligent pigging' },
  { id: 'uw', label: 'Underwater inspection' },
  { id: 'lab', label: 'Destructive testing and laboratory' },
];

const ASSETS = [
  'Cross-country pipeline',
  'Process piping and vessels',
  'Storage tank',
  'Boiler or heat exchanger',
  'Structural steelwork',
  'Jetty or submerged structure',
  'Other',
];

const TIMINGS = [
  'Planned shutdown or turnaround',
  'New construction',
  'In-service inspection',
  'Emergency or unplanned',
];

export default function CostCalculator({ onOpenContact }) {
  const [methods, setMethods] = useState([]);
  const [asset, setAsset] = useState('');
  const [country, setCountry] = useState('');
  const [timing, setTiming] = useState('');
  const [notes, setNotes] = useState('');

  const toggle = (id) =>
    setMethods((m) => (m.includes(id) ? m.filter((x) => x !== id) : [...m, id]));

  const summary = useMemo(() => {
    const chosen = METHODS.filter((m) => methods.includes(m.id)).map((m) => m.label);
    const lines = [];
    if (chosen.length) lines.push(`Methods: ${chosen.join(', ')}`);
    if (asset) lines.push(`Asset: ${asset}`);
    if (country) lines.push(`Location: ${country}`);
    if (timing) lines.push(`Timing: ${timing}`);
    if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);
    return lines.join('\n');
  }, [methods, asset, country, timing, notes]);

  const ready = methods.length > 0 && asset && country;

  return (
    <section className="section scope-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Scope builder</div>
          <h2 className="section-title">Tell Us What Needs Inspecting</h2>
          <p className="section-subtitle">
            Build the scope here and send it through. A written proposal comes back from the
            regional office with a price against your specification.
          </p>
        </div>

        <div className="scope-layout">
          <div className="scope-form">
            <fieldset className="scope-block">
              <legend className="scope-legend">1. Which methods do you need?</legend>
              <div className="method-grid">
                {METHODS.map((m) => {
                  const on = methods.includes(m.id);
                  return (
                    <button
                      type="button"
                      key={m.id}
                      className={`method-chip${on ? ' is-on' : ''}`}
                      onClick={() => toggle(m.id)}
                      aria-pressed={on}
                    >
                      <span className="method-chip__box">
                        {on ? <Check size={13} aria-hidden="true" /> : <Plus size={13} aria-hidden="true" />}
                      </span>
                      {m.label}
                    </button>
                  );
                })}
              </div>
              <p className="scope-hint">
                Not sure? Leave it blank and describe the problem in the notes instead.
              </p>
            </fieldset>

            <fieldset className="scope-block">
              <legend className="scope-legend">2. What is the asset?</legend>
              <div className="scope-row">
                <div className="scope-field">
                  <label className="field-label" htmlFor="sc-asset">Asset type</label>
                  <select id="sc-asset" className="field-input" value={asset} onChange={(e) => setAsset(e.target.value)}>
                    <option value="">Please select</option>
                    {ASSETS.map((a) => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div className="scope-field">
                  <label className="field-label" htmlFor="sc-country">Location</label>
                  <select id="sc-country" className="field-input" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Please select</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                    <option>Kenya</option>
                    <option>Elsewhere in Africa</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="scope-block">
              <legend className="scope-legend">3. When is the work?</legend>
              <div className="timing-row">
                {TIMINGS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    className={`timing-chip${timing === t ? ' is-on' : ''}`}
                    onClick={() => setTiming(t)}
                    aria-pressed={timing === t}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="scope-field scope-field--notes">
                <label className="field-label" htmlFor="sc-notes">
                  Anything else we should know
                </label>
                <textarea
                  id="sc-notes"
                  className="field-input"
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Wall thickness, number of welds, access constraints, applicable code or client specification."
                />
              </div>
            </fieldset>
          </div>

          <aside className="scope-summary">
            <div className="scope-summary__head">
              <ClipboardList size={20} aria-hidden="true" />
              <h3>Your scope</h3>
            </div>

            {summary ? (
              <pre className="scope-summary__body">{summary}</pre>
            ) : (
              <p className="scope-summary__empty">
                Choose a method and an asset and the scope will build up here.
              </p>
            )}

            <button
              className="btn btn-primary scope-send"
              disabled={!ready}
              onClick={() => onOpenContact(summary)}
            >
              <span>Send this scope</span>
              <ChevronRight size={15} aria-hidden="true" />
            </button>

            <p className="scope-disclaimer">
              <Info size={14} aria-hidden="true" />
              <span>
                No price is shown here on purpose. NDT is priced on access, shutdown window,
                source logistics and the standard being worked to — a figure generated from a
                form would be a guess, and the proposal would contradict it.
              </span>
            </p>
          </aside>
        </div>
      </div>

      <style>{`
        .scope-layout { display: grid; grid-template-columns: 1.4fr 0.6fr; gap: 40px; align-items: start; }

        .scope-block { border: 0; padding: 0; margin: 0 0 36px; }
        .scope-legend {
          font-size: 0.8125rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 16px;
          padding: 0;
        }

        .method-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        .method-chip {
          display: flex;
          align-items: center;
          gap: 11px;
          text-align: left;
          padding: 13px 15px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .method-chip:hover { border-color: var(--muted); }
        .method-chip.is-on { border-color: var(--brand); background: var(--primary-light); }
        .method-chip__box {
          width: 22px;
          height: 22px;
          flex: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--muted);
          background: #fff;
          color: var(--brand);
        }
        .method-chip.is-on .method-chip__box { border-color: var(--brand); }
        .scope-hint { margin-top: 12px; font-size: 0.8125rem; color: var(--text-dim); }

        .scope-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .scope-field--notes { margin-top: 20px; }
        .scope-field textarea.field-input { resize: vertical; }

        .timing-row { display: flex; flex-wrap: wrap; gap: 10px; }
        .timing-chip {
          padding: 11px 18px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .timing-chip:hover { border-color: var(--muted); }
        .timing-chip.is-on { border-color: var(--brand); background: var(--primary-light); }

        .scope-summary {
          position: sticky;
          top: calc(var(--nav-h, 124px) + 24px);
          background: var(--navy);
          color: rgba(255, 255, 255, 0.82);
          border-radius: var(--radius-lg);
          padding: 28px 26px;
        }
        .scope-summary__head { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
        .scope-summary__head h3 { color: #fff; font-size: 1.1rem; }
        .scope-summary__head svg { color: #FF7A78; }
        .scope-summary__body {
          font-family: inherit;
          font-size: 0.875rem;
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
          background: rgba(255, 255, 255, 0.06);
          border-left: 3px solid #FF7A78;
          padding: 16px;
          margin-bottom: 20px;
        }
        .scope-summary__empty {
          font-size: 0.875rem;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
        }
        .scope-send { width: 100%; }
        .scope-disclaimer {
          display: flex;
          gap: 9px;
          margin-top: 18px;
          font-size: 0.78rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.62);
        }
        .scope-disclaimer svg { flex: none; margin-top: 2px; }

        @media (max-width: 1024px) {
          .scope-layout { grid-template-columns: 1fr; }
          .scope-summary { position: static; }
        }
        @media (max-width: 767px) {
          .method-grid { grid-template-columns: 1fr; }
          .scope-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
