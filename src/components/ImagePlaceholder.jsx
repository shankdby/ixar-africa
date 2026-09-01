import React from 'react';
import Style from './Style';

/* Labelled image placeholder.

   Matches the treatment used on the Africa page — diagonal grey hatching,
   a dashed inset, the IMG reference and a description of what belongs there —
   so the whole site reads as one review artefact rather than two. */

export default function ImagePlaceholder({
  label,
  imgRef,
  aspect = '16/9',
  height,
  recommendedSize = '1200 x 675 px',
}) {
  return (
    <div
      className="img-ph"
      style={{ aspectRatio: aspect, minHeight: height }}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <svg className="img-ph__glyph" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14.5" rx="2" />
        <circle cx="12" cy="12.2" r="3.6" />
        <path d="M7.5 5l1.4-2.2h6.2L16.5 5" />
      </svg>

      {imgRef && <span className="img-ph__ref">{imgRef}</span>}
      <span className="img-ph__label">{label}</span>
      <span className="img-ph__hint">{recommendedSize}</span>

      <Style>{`
        .img-ph {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: repeating-linear-gradient(
            135deg,
            #E9ECEE 0 14px,
            #E1E5E8 14px 28px
          );
          border: 1px solid #D8DDE1;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 9px;
          padding: 20px;
          color: #8B9297;
        }
        .img-ph::after {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px dashed rgba(139, 146, 151, 0.42);
          pointer-events: none;
        }
        .img-ph__glyph {
          width: 32px;
          height: 32px;
          fill: none;
          stroke: #8B9297;
          stroke-width: 1.6;
          opacity: 0.75;
        }
        .img-ph__ref {
          font-size: 0.6875rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #D3D9DD;
          border-radius: 3px;
          padding: 3px 9px;
        }
        .img-ph__label {
          font-size: 0.8125rem;
          font-weight: 600;
          line-height: 1.45;
          max-width: 40ch;
        }
        .img-ph__hint {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #A3AAAF;
        }
      `}</Style>
    </div>
  );
}
