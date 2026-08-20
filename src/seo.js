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

export const SITE_URL = 'https://ixar.africa';
export const SITE_NAME = 'IXAR';
// A JPEG, not the WebP used on-page: several link unfurlers still refuse WebP.
export const OG_IMAGE = '/images/og-cover.jpg';

const DEFAULT_DESCRIPTION =
  'Non-destructive testing and industrial inspection across Uganda, Tanzania and Kenya, delivered from registered regional offices. Licensed for sealed radioactive sources, ASNT-certified personnel, ISO 9001 since 2003.';

/**
 * changefreq / priority are sitemap hints only.
 * title and description are what actually matter for search results.
 */
export const ROUTE_SEO = {
  '/': {
    title: 'IXAR in East Africa | NDT and Industrial Inspection, Uganda & Tanzania',
    description: DEFAULT_DESCRIPTION,
    priority: '1.0',
    changefreq: 'weekly'
  },

  '/services': {
    title: 'NDT Services | Ultrasonic, Radiography & Inspection | IXAR East Africa',
    description:
      '12 core non-destructive testing and industrial inspection services delivered across Uganda, Tanzania, Kenya and regional project sites.',
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
    title: 'Phased Array Ultrasonic Testing (PAUT) | IXAR East Africa',
    description:
      'Multi-beam acoustic beam steering for complex geometry structural and pressure vessel welds, delivered across Uganda, Tanzania and Kenya.',
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
    title: 'Time of Flight Diffraction (TOFD) | Crack Sizing | IXAR East Africa',
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
    title: 'Digital & Computed Radiography (CR/DR) | IXAR East Africa',
    description:
      'High-definition digital radiography plates with zero chemical waste. Licensed for sealed radioactive sources in Uganda and Tanzania.',
    priority: '0.7',
    changefreq: 'yearly'
  },

  '/applications': {
    title: 'Industries We Serve | Oil & Gas, Rail, Power, Mining | IXAR East Africa',
    description:
      'Sector-specific non-destructive testing and asset integrity management tailored to the key industrial economic sectors of East Africa.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/applications/oil-gas': {
    title: 'Oil & Gas NDT | Pipelines, Refineries & Storage Tanks | IXAR East Africa',
    description:
      'Asset integrity solutions for upstream offshore rigs, midstream gas pipelines and downstream refineries across Uganda, Tanzania and Kenya.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/applications/railways': {
    title: 'Railway USFD Track & Rolling Stock Inspection | IXAR East Africa',
    description:
      'Ultrasonic flaw detection for African continuous welded rails, joints and rolling stock wheelsets.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/applications/power-plants': {
    title: 'Power Plant Inspection | Boilers & Turbines | IXAR East Africa',
    description:
      'Rapid turnaround tube testing and turbine inspection for thermal, hydro and geothermal generation facilities.',
    priority: '0.7',
    changefreq: 'yearly'
  },
  '/applications/mining': {
    title: 'Mining & Heavy Infrastructure NDT | IXAR East Africa',
    description:
      'Structural weld testing and heavy machinery fatigue inspection for African mine sites and heavy infrastructure projects.',
    priority: '0.7',
    changefreq: 'yearly'
  },

  '/training': {
    title: 'NDT Training and Certification | BARC & ASNT | IXAR East Africa',
    description:
      'NDT training and certification pathways for inspectors in East Africa, backed by BARC-recognised programmes and ASNT Level II & III qualification.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/products': {
    title: 'NDT Products & Equipment Supply | IXAR East Africa',
    description:
      'Certified non-destructive testing equipment, radiography cameras, calibration blocks and consumables supplied across East Africa.',
    priority: '0.8',
    changefreq: 'monthly'
  },
  '/careers': {
    title: 'Jobs @ IXAR East Africa | NDT Inspector Careers',
    description:
      'Join Africa’s premier non-destructive testing team. We recruit qualified ASNT Level II & III inspectors, radiation safety officers and site managers.',
    priority: '0.7',
    changefreq: 'weekly'
  },
  '/network': {
    title: 'Regional Footprint | Kampala, Dar es Salaam & Nairobi | IXAR',
    description:
      'IXAR’s registered East African offices and mobilisation reach across Uganda, Tanzania and Kenya.',
    priority: '0.7',
    changefreq: 'monthly'
  },
  '/case-studies': {
    title: 'NDT Case Studies & Project Record | IXAR East Africa',
    description:
      'Selected inspection projects delivered across East African pipelines, refineries, power plants and rail networks.',
    priority: '0.7',
    changefreq: 'monthly'
  },
  '/estimator': {
    title: 'NDT Cost Estimator | Scope Your Inspection | IXAR East Africa',
    description:
      'Estimate the scope and indicative cost of a non-destructive testing campaign in Uganda, Tanzania or Kenya before requesting a formal quotation.',
    priority: '0.6',
    changefreq: 'monthly'
  },
  '/contact': {
    title: 'Contact IXAR East Africa | Kampala Regional Office',
    description:
      'Enquiries for Uganda, Tanzania and Kenya are handled by the IXAR regional office in Kampala. Request an inspection quotation.',
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
      title: `Page not found | ${SITE_NAME} East Africa`,
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
