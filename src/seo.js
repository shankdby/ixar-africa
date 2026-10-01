/**
 * Single source of truth for per-route SEO metadata.
 *
 * Used in three places:
 *   1. scripts/prerender.mjs  - injects these tags into each static HTML file
 *   2. components/RouteHead   - keeps the tags correct after client-side navigation
 *   3. scripts/prerender.mjs  - generates sitemap.xml from PRERENDER_ROUTES
 *
 * Add a route here and it is prerendered, gets its own head tags, and appears
 * in the sitemap. Nothing else needs touching.
 */

import { deliveredProse } from './countries.js';

export const SITE_URL = 'https://ixar.africa';
export const SITE_NAME = 'IXAR';
// A JPEG, not the WebP used on-page: several link unfurlers still refuse WebP.
export const OG_IMAGE = '/images/og-cover.jpg';

/* Every description that enumerated eight countries claimed completed
   projects in five where there are none. They are built from
   countries.js now, so the list cannot go stale in the metadata while
   being right on the page. */
const REACH = deliveredProse();

const DEFAULT_DESCRIPTION =
  `Non-destructive testing and industrial inspection across ${REACH}, delivered from registered regional offices, with mobilisation on request elsewhere in Africa. Licensed for sealed radioactive sources, ASNT-certified personnel, ISO 9001 since 2003.`;

/**
 * changefreq / priority are sitemap hints only.
 * title and description are what actually matter for search results.
 */
export const ROUTE_SEO = {
  '/': {
    title: 'IXAR in Africa | NDT & Industrial Inspection, Uganda & Tanzania',
    description: DEFAULT_DESCRIPTION,
    priority: '1.0',
    changefreq: 'weekly'
  },

  '/about': {
    title: 'About IXAR Africa | NDT Partner in East Africa since 2012',
    description:
      'Industrial X-Ray and Allied Radiographers (EA) Ltd: offices in Kampala, Dar es Salaam and Mozambique, radiation licences from UAEC and TAEC, ISO 9001, 14001 and 45001, and a group NDT record going back to 1969.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  '/services': {
    title: 'NDT Services | Radiography, Ultrasonics, Pigging & Tank Inspection | IXAR Africa',
    description:
      'Sixteen NDT and inspection services from IXAR Africa: radiography and pipeline inspection, intelligent pigging, tank and pressure vessel inspection, advanced ultrasonics, surface methods, destructive testing and equipment supply.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  '/experience': {
    title: 'Experience | Industries, Projects & Clients | IXAR Africa',
    description:
      `28 projects on record across ${REACH}, including EACOP, Sinopec on the Tilenga Project and CCJV on the Kingfisher Oil Field. Industries served, flagship projects and clients.`,
    priority: '0.9',
    changefreq: 'monthly'
  },
  '/services/aut': {
    title: 'Automated Ultrasonic Testing (AUT) | Pipeline Girth Welds | IXAR',
    description:
      'High-speed computerized girth weld inspection for long-distance oil & gas pipelines. Instant zero-subjective defect sizing with full digital traceability.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/services/paut': {
    title: 'Phased Array Ultrasonic Testing (PAUT) | IXAR Africa',
    description:
      `Multi-beam acoustic beam steering for complex geometry structural and pressure vessel welds, delivered across ${REACH}.`,
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/services/pect': {
    title: 'Pulse Eddy Current Testing (PECT) | Corrosion Under Insulation | IXAR',
    description:
      'Non-invasive screening for Corrosion Under Insulation (CUI) on carbon steel assets — no insulation stripping, no production shutdown.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/services/tofd': {
    title: 'Time of Flight Diffraction (TOFD) | Crack Sizing | IXAR Africa',
    description:
      'Diffracted wave physics for rapid sub-millimetre crack sizing accuracy on welds and pressure-retaining components.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/services/mfl-tube': {
    title: 'Tube Inspection (MFL / RFT / ECT) | Heat Exchangers & Boilers | IXAR',
    description:
      '100% full-length tube inspection for heat exchangers, boilers and chillers using magnetic flux leakage, remote field and eddy current techniques.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/services/radiography': {
    title: 'Digital & Computed Radiography (CR/DR) | IXAR Africa',
    description:
      'High-definition digital radiography plates with zero chemical waste. Licensed for sealed radioactive sources in Uganda and Tanzania.',
    priority: '0.7',
    changefreq: 'yearly'
  },

  '/careers': {
    title: 'Jobs @ IXAR Africa | NDT Inspector Careers in Uganda & Tanzania',
    description:
      'NDT careers with IXAR Africa. We recruit PCN and ISO 9712 certified Level II and Level III inspectors, BARC-qualified radiation safety officers and site managers. Applications go to hr@ixar.africa.',
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/estimator': {
    /* Renamed from "NDT Cost Estimator". The page deliberately does not
       give a figure, and a title promising one set an expectation the
       page then refused - which reads as a bait rather than as the
       considered position it is. */
    title: 'Scope Builder | Define Your Inspection Scope | IXAR Africa',
    description:
      'Build a non-destructive testing scope for a project in Uganda, Tanzania or Kenya and send it to the regional office for a written proposal priced against your specification.',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/contact': {
    title: 'Contact IXAR Africa | Kampala Regional Office',
    description:
      `Enquiries for ${REACH}, and for mobilisation elsewhere in Africa, are handled by the IXAR regional office in Kampala. Request an inspection quotation.`,
    priority: '0.8',
    changefreq: 'monthly'
  }
};

/** Every path the build should turn into a real HTML file. */
export const PRERENDER_ROUTES = Object.keys(ROUTE_SEO);

/**
 * Metadata for a pathname, falling back to the homepage entry for anything
 * unrecognised (a client-side deep link into an unlisted route, say).
 * Unknown routes are marked noindex so they can never outrank a real page.
 */
export function resolveSeo(pathname) {
  const path = normalisePath(pathname);
  const entry = ROUTE_SEO[path];

  if (!entry) {
    return {
      title: `Page not found | ${SITE_NAME} Africa`,
      description: DEFAULT_DESCRIPTION,
      canonical: `${SITE_URL}${path}`,
      noindex: true
    };
  }

  return {
    title: entry.title,
    description: entry.description,
    // Canonical is per-route. Pointing every page at the homepage tells Google
    // the whole site is one duplicated document.
    canonical: `${SITE_URL}${path === '/' ? '/' : path}`,
    noindex: false
  };
}

export function normalisePath(pathname) {
  if (!pathname) return '/';
  const [clean] = pathname.split(/[?#]/);
  if (clean === '/' || clean === '') return '/';
  return clean.endsWith('/') ? clean.slice(0, -1) : clean;
}
