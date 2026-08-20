import React from 'react';
import RegionalFootprint from '../components/RegionalFootprint';

export default function NetworkPage({ onOpenContact }) {
  return (
    <div className="page-wrapper">
      <RegionalFootprint onOpenContact={onOpenContact} />
    </div>
  );
}
