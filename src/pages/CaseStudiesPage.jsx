import React from 'react';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage({ onOpenContact }) {
  return (
    <div className="page-wrapper" style={{ paddingTop: '150px' }}>
      <CaseStudies onOpenContact={onOpenContact} />
    </div>
  );
}
