import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CostCalculator from '../components/CostCalculator';
import { Page, PageHero, Crumbs } from '../components/ui';

export default function EstimatorPage({ onOpenContact }) {
  return (
    <Page className="es-page">
      <PageHero
        eyebrow="Scope Builder"
        title="Define the scope. Get a real proposal."
        sub="Build your inspection scope here and send it through. A written proposal comes back from the regional office priced against your specification."
        variant="plain"
        crumbs={<Crumbs trail={[{ label: 'Africa', to: '/' }, { label: 'Scope Estimator' }]} />}
        actions={
          <Link className="ea-btn ea-btn--ghost" to="/services">
            Browse Services First
          </Link>
        }
      />
      <CostCalculator onOpenContact={onOpenContact} />
    </Page>
  );
}
