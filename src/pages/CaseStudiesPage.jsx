import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CaseStudies from '../components/CaseStudies';
import { Page, PageHero, Crumbs } from '../components/ui';

export default function CaseStudiesPage({ onOpenContact }) {
  return (
    <Page className="pj-page">
      <PageHero
        eyebrow="Regional Track Record"
        title="Proven in the field."
        sub="Inspection scopes delivered by IXAR East Africa crews on operating plant and live construction spreads in Uganda and Tanzania."
        image="/images/east-africa/ea-hero-tilenga-cpf.webp"
        imageAlt="Central processing facility under construction, Tilenga Project, Uganda"
        actions={
          <>
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact()}>
              Request Project References <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link className="ea-btn ea-btn--ghost" to="/services">
              See Our Services
            </Link>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'East Africa', to: '/' }, { label: 'Projects' }]} />}
      />
      <CaseStudies onOpenContact={onOpenContact} />
    </Page>
  );
}
