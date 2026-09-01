import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import RegionalFootprint from '../components/RegionalFootprint';
import { Page, PageHero, Crumbs } from '../components/ui';

export default function NetworkPage({ onOpenContact }) {
  return (
    <Page className="rn-page">
      <PageHero
        eyebrow="Regional Network"
        title="Local presence. Regional capability."
        sub="Registered offices in Uganda and Tanzania, with crews and licensed equipment mobilised to sites across Africa."
        image="/images/east-africa/ea-office-kampala.webp"
        imageAlt="IXAR Africa crew and site board, Uganda"
        actions={
          <>
            <button type="button" className="ea-btn ea-btn--primary" onClick={() => onOpenContact()}>
              Contact the Regional Office <ChevronRight size={16} aria-hidden="true" />
            </button>
            <Link className="ea-btn ea-btn--ghost" to="/case-studies">
              See Regional Projects
            </Link>
          </>
        }
        crumbs={<Crumbs trail={[{ label: 'Africa', to: '/' }, { label: 'Regional Offices' }]} />}
      />
      <RegionalFootprint onOpenContact={onOpenContact} />
    </Page>
  );
}
