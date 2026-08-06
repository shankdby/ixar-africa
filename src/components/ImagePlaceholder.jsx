import React from 'react';
import { Image, Info } from 'lucide-react';

export default function ImagePlaceholder({ label, aspect = '16/9', height = '320px', recommendedSize = '1200 x 675 px' }) {
  return (
    <div 
      className="image-placeholder-frame"
      style={{ minHeight: height, aspectRatio: aspect }}
    >
      <div className="placeholder-content">
        <div className="placeholder-icon-box">
          <Image size={28} />
        </div>
        <div className="placeholder-label">{label}</div>
        <div className="placeholder-hint">
          <Info size={13} />
          <span>Image Placeholder ({recommendedSize})</span>
        </div>
      </div>

      <style>{`
        .image-placeholder-frame {
          width: 100%;
          background: #F1F5F9;
          border: 2px dashed #CBD5E1;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }
        .image-placeholder-frame:hover {
          border-color: var(--primary);
        }
        .placeholder-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
        }
        .placeholder-icon-box {
          width: 52px;
          height: 52px;
          background: #FFFFFF;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          box-shadow: var(--shadow-sm);
          border: 1px solid #E2E8F0;
        }
        .placeholder-label {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
        }
        .placeholder-hint {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          background: #FFFFFF;
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid #E2E8F0;
        }
      `}</style>
    </div>
  );
}
