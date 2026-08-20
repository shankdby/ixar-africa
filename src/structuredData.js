/**
 * JSON-LD structured data, injected into the static HTML by
 * scripts/prerender.mjs so it is present without running JavaScript.
 *
 * Only facts that are actually verifiable from the site are emitted here.
 * The Tanzania office deliberately has no LocalBusiness entry: its address is
 * still marked "to be confirmed" in RegionalFootprint, and publishing a guessed
 * address in schema is worse than publishing none - Google cross-checks it
 * against Business Profile and inconsistent NAP data suppresses local results.
 */

import { SITE_URL, ROUTE_SEO } from './seo.js';
import { IXAR_IN } from './globalNav.js';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const KAMPALA_ID = `${SITE_URL}/#kampala`;

const LOGO = `${SITE_URL}/images/ixar-logo-main.png`;

/* The East Africa division as an organisation, tied to the Indian parent. */
const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'IXAR East Africa',
  legalName: 'Industrial X-Ray & Allied Radiographers (EA) Ltd',
  alternateName: 'Industrial X-Ray and Allied Radiographers East Africa',
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: LOGO },
  description:
    'Non-destructive testing, quality assurance and asset integrity services across Uganda, Tanzania and Kenya.',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Industrial X-Ray & Allied Radiographers (I) Pvt. Ltd.',
    url: `${IXAR_IN}/`,
  },
  areaServed: ['UG', 'TZ', 'KE'].map((c) => ({ '@type': 'Country', name: c })),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+256-414-251251',
    email: 'bd@ixar.africa',
    areaServed: ['UG', 'TZ', 'KE'],
    availableLanguage: ['en'],
  },
});

/* The Kampala office as a physical place of business. */
const kampalaOffice = () => ({
  '@type': 'ProfessionalService',
  '@id': KAMPALA_ID,
  name: 'IXAR East Africa - Kampala Office',
  parentOrganization: { '@id': ORG_ID },
  url: `${SITE_URL}/network`,
  image: `${SITE_URL}/images/east-africa/ea-office-kampala.webp`,
  telephone: '+256-414-251251',
  email: 'bd@ixar.africa',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 72, Kanjokya Street, Kamwokya',
    postOfficeBoxNumber: 'P.O. Box 28673 Nakawa',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  areaServed: ['UG', 'TZ', 'KE'].map((c) => ({ '@type': 'Country', name: c })),
  knowsAbout: [
    'Non-destructive testing',
    'Industrial radiography',
    'Ultrasonic testing',
    'Phased array ultrasonics',
    'Pipeline inspection',
    'Asset integrity',
  ],
});

const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: 'IXAR East Africa',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
});

/* Breadcrumbs for anything below the root, derived from the route path. */
function breadcrumbs(route) {
  if (route === '/' || route.startsWith('/__')) return null;
  const parts = route.split('/').filter(Boolean);
  const items = [{ name: 'East Africa', item: `${SITE_URL}/` }];
  let acc = '';
  for (const part of parts) {
    acc += `/${part}`;
    const seo = ROUTE_SEO[acc];
    items.push({
      name: seo ? seo.title.split('|')[0].trim() : titleise(part),
      item: `${SITE_URL}${acc}`,
    });
  }
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

/* A Service entity for each individual service page. */
function service(route, seo) {
  if (!route.startsWith('/services/')) return null;
  return {
    '@type': 'Service',
    name: seo.title.split('|')[0].trim(),
    description: seo.description,
    serviceType: 'Non-destructive testing',
    provider: { '@id': ORG_ID },
    areaServed: ['UG', 'TZ', 'KE'].map((c) => ({ '@type': 'Country', name: c })),
    url: `${SITE_URL}${route}`,
  };
}

function titleise(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Build the JSON-LD graph for one route.
 * Returns a string of <script type="application/ld+json"> markup, or ''.
 */
export function jsonLdFor(route, seo) {
  if (seo.noindex) return '';

  const graph = [];
  if (route === '/') graph.push(organization(), website(), kampalaOffice());
  if (route === '/network' || route === '/contact') graph.push(kampalaOffice());

  const crumbs = breadcrumbs(route);
  if (crumbs) graph.push(crumbs);

  const svc = service(route, seo);
  if (svc) graph.push(svc);

  if (!graph.length) return '';

  const payload = { '@context': 'https://schema.org', '@graph': graph };
  // </script> inside JSON would close the tag early; escape the sequence.
  const json = JSON.stringify(payload).replace(/<\//g, '<\\/');
  return `    <script type="application/ld+json">${json}</script>`;
}
