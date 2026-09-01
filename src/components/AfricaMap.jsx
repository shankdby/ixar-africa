import React, { useState } from 'react';
import Style from './Style';
import { AFRICA_PATHS, MAP_VIEWBOX } from '../africaPaths';

/* Africa, drawn from Natural Earth 1:50m country geometry.
 *
 * Every country is a separate hoverable path, so the map can be checked rather
 * than taken on trust: point at any shape and it names itself and says whether
 * a project has been completed there. That matters because at this size the
 * small countries are only a few pixels across — Rwanda is about ten — and a
 * grey neighbour between two red ones is easy to misread as part of the red.
 *
 * The same reason drives the labels: every highlighted country is named on the
 * map, with a leader line for the ones too small to hold text.
 *
 * Office pins are projected from real coordinates through the same transform as
 * the borders, so a pin cannot drift off its country.
 */

const KAMPALA = { x: 492, y: 340 };
const TANZANIA_OFFICE = { x: 546, y: 397 };

/* Where each highlighted country's label sits. `leader` draws a line back to
   the country for the ones too small to letter directly. */
const LABELS = [
  { name: 'Sudan',      x: 471, y: 214, anchor: 'middle' },
  { name: 'Ethiopia',   x: 560, y: 276, anchor: 'middle' },
  { name: 'Kenya',      x: 545, y: 341, anchor: 'middle' },
  { name: 'Uganda',     x: 432, y: 318, anchor: 'end',   leader: [438, 318, 484, 330] },
  { name: 'Rwanda',     x: 396, y: 360, anchor: 'end',   leader: [402, 358, 466, 358] },
  { name: 'Tanzania',   x: 512, y: 398, anchor: 'middle' },
  { name: 'Malawi',     x: 452, y: 452, anchor: 'end',   leader: [458, 450, 501, 450] },
  { name: 'Mozambique', x: 585, y: 492, anchor: 'start', leader: [579, 488, 528, 482] },
];

export default function AfricaMap({ mobile = false }) {
  const [hover, setHover] = useState(null);

  return (
    <div className="afmap">
      <svg
        viewBox={mobile ? '380 180 340 460' : MAP_VIEWBOX}
        role="img"
        aria-label="Map of Africa. Uganda, Tanzania, Kenya, Rwanda, Mozambique, Ethiopia, Sudan and Malawi are highlighted as countries with completed projects, with office pins on Kampala and Tanzania."
      >
        <defs>
          <filter id="afPinShadow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.4" floodColor="#15191F" floodOpacity=".35" />
          </filter>
        </defs>

        <g>
          {AFRICA_PATHS.map((c) => (
            <path
              key={c.name}
              d={c.d}
              className={`afc ${c.hl ? 'afc--on' : ''} ${hover === c.name ? 'afc--hover' : ''}`}
              onMouseEnter={() => setHover(c.name)}
              onMouseLeave={() => setHover((h) => (h === c.name ? null : h))}
              onFocus={() => setHover(c.name)}
              onBlur={() => setHover(null)}
              tabIndex={c.hl ? 0 : -1}
              role={c.hl ? 'button' : undefined}
              aria-label={c.hl ? `${c.name}: projects completed` : undefined}
            >
              <title>{c.hl ? `${c.name} — projects completed` : `${c.name} — mobilisation on request`}</title>
            </path>
          ))}
        </g>

        {/* Labels for every highlighted country, so none of them depends on the
            reader recognising a shape. */}
        <g className="afl" aria-hidden="true">
          {LABELS.map((l) => (
            <g key={l.name} className={hover === l.name ? 'afl--on' : ''}>
              {l.leader && (
                <line x1={l.leader[0]} y1={l.leader[1]} x2={l.leader[2]} y2={l.leader[3]} />
              )}
              <text x={l.x} y={l.y} textAnchor={l.anchor}>{l.name}</text>
            </g>
          ))}
        </g>

        <g filter="url(#afPinShadow)" aria-hidden="true">
          <circle cx={KAMPALA.x} cy={KAMPALA.y} r="15" fill="#DE0603" opacity=".18" />
          <circle cx={KAMPALA.x} cy={KAMPALA.y} r="6.4" fill="#15191F" stroke="#fff" strokeWidth="2.2" />
          <circle cx={TANZANIA_OFFICE.x} cy={TANZANIA_OFFICE.y} r="15" fill="#DE0603" opacity=".18" />
          <circle cx={TANZANIA_OFFICE.x} cy={TANZANIA_OFFICE.y} r="6.4" fill="#15191F" stroke="#fff" strokeWidth="2.2" />
        </g>
        <g className="afpin" aria-hidden="true">
          <text x={KAMPALA.x - 17} y={KAMPALA.y + 4} textAnchor="end">Kampala</text>
          <text x={TANZANIA_OFFICE.x + 13} y={TANZANIA_OFFICE.y + 1}>Tanzania office</text>
        </g>
      </svg>

      <p className="afmap__read" aria-live="polite">
        {hover
          ? <><strong>{hover}</strong> — {AFRICA_PATHS.find((c) => c.name === hover)?.hl
              ? 'projects completed' : 'mobilisation on request'}</>
          : 'Point at any country to check it.'}
      </p>

      <Style>{`
        .afmap svg{width:100%;height:auto;display:block}
        .afc{fill:#DFE6E4;stroke:#FFFFFF;stroke-width:.9;stroke-linejoin:round;transition:fill .15s ease}
        .afc--on{fill:#DE0603}
        /* A grey country between two red ones has to read as grey, so the
           borders are drawn heavier than the geometry strictly needs. */
        .afc--on + .afc{stroke-width:1.1}
        .afc--hover{fill:#B9C0C8}
        .afc--on.afc--hover{fill:#B90502}
        .afc:focus{outline:none}
        .afc:focus-visible{stroke:#15191F;stroke-width:2.4}

        .afl text{font:800 13px Mulish,sans-serif;fill:#15191F;paint-order:stroke;
          stroke:#fff;stroke-width:3.5;pointer-events:none}
        .afl line{stroke:#15191F;stroke-width:1.2;opacity:.5}
        .afl--on text{fill:#DE0603}
        .afl--on line{opacity:1;stroke:#DE0603}

        .afpin text{font:800 13px Mulish,sans-serif;fill:#15191F;paint-order:stroke;
          stroke:#fff;stroke-width:3.5;pointer-events:none}

        .afmap__read{margin:14px 0 0;font-size:13.5px;font-weight:600;color:#78818D;
          border-top:1px solid #E6E9EC;padding-top:12px}
        .afmap__read strong{color:#15191F;font-weight:800}
      `}</Style>
    </div>
  );
}
