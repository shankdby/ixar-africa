import React from 'react';
import CostCalculator from '../components/CostCalculator';

export default function EstimatorPage({ onOpenContact }) {
  return (
    <div className="page-wrapper">
      <CostCalculator onOpenContact={onOpenContact} />
    </div>
  );
}
