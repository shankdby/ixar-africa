import React from 'react';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage({ onOpenContact }) {
  return (
    <div className="page-wrapper">
      <CaseStudies onOpenContact={onOpenContact} />
    </div>
  );
}
