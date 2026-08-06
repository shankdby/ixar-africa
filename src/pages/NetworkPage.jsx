import React from 'react';
import RegionalFootprint from '../components/RegionalFootprint';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function NetworkPage({ onOpenContact }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '150px' }}>
      <div className="container" style={{ marginBottom: '40px' }}>
        <div className="section-header">
          <div className="section-tag">PAN-AFRICAN OPERATIONS NETWORK</div>
          <h2 className="section-title">
            Regional Hubs & <span className="text-orange">Deployment Network</span>
          </h2>
          <p className="section-subtitle">
            Providing rapid-response NDT engineering crews, mobile laboratories, and localized technical support across Southern, West, and East Africa.
          </p>
        </div>

        <ImagePlaceholder 
          label="Pan-African Regional Hub Network & Operational Logistics Map"
          recommendedSize="1200 x 500 px"
          height="320px"
          aspect="16/9"
        />
      </div>

      <RegionalFootprint onOpenContact={onOpenContact} />
    </div>
  );
}
