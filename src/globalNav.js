/* Navigation shared with the global IXAR site (ixar.in).
 *
 * The header on ixar.africa mirrors ixar.in's menu. Everything that is a
 * *global* concern — the group's services, courses, products, clients and
 * careers — links straight out to ixar.in, which is the system of record for
 * that content. Only the East Africa division's own pages stay on this domain.
 *
 * Keep the labels here identical to ixar.in's menu. A visitor moving between
 * the two domains should not notice the boundary.
 */

export const IXAR_IN = 'https://ixar.in';

const at = (slug) => `${IXAR_IN}/${slug}/`;

/* --- Global items: these leave ixar.africa ------------------------------- */

export const GLOBAL_SERVICE_LINKS = [
  { href: at('conventional-testing'), label: 'Conventional Testing' },
  { href: at('advance-testing'), label: 'Advance Testing' },
  { href: at('pipeline-inspection'), label: 'Pipeline Inspection' },
  { href: at('tank-floor-inspection'), label: 'Tank Floor Inspection' },
  { href: at('tube-inspection'), label: 'Tube Inspection' },
  { href: at('eddy-current-testing'), label: 'Eddy Current Testing' },
  { href: at('destructive-testing'), label: 'Destructive Testing' },
  { href: at('robotic-inspection'), label: 'Robotic Inspection' },
];

export const GLOBAL_COURSE_LINKS = [
  { href: at('ndt-course'), label: 'NDT Course Overview' },
  { href: at('admission-form'), label: 'Admission Form' },
  { href: at('admission-form-asnt'), label: 'ASNT Admission Form' },
];

export const GLOBAL_PRODUCT_LINKS = [
  { href: at('ndt-products'), label: 'NDT Products' },
  { href: at('equipment-maintenance'), label: 'Equipment Maintenance' },
];

/* --- East Africa items: these stay on ixar.africa ------------------------ */

export const EA_LINKS = [
  { to: '/', label: 'East Africa Overview' },
  { to: '/services', label: 'Services in East Africa' },
  { to: '/applications', label: 'Industries We Serve' },
  { to: '/network', label: 'Regional Offices' },
  { to: '/case-studies', label: 'Regional Track Record' },
  { to: '/training', label: 'Training & Certification' },
  { to: '/products', label: 'Equipment & Supply' },
  { to: '/estimator', label: 'Scope & Cost Estimator' },
  { to: '/careers', label: 'Careers in East Africa' },
  { to: '/contact', label: 'Contact the Regional Office' },
];

/* Rendered as the top-level header row, in ixar.in's own order.
 * `external: true` means the item points off this domain. */
export const HEADER_ITEMS = [
  { kind: 'external', label: 'About Us', href: at('about-us') },
  { kind: 'ea', label: 'East Africa', to: '/', children: EA_LINKS, highlight: true },
  { kind: 'external', label: 'Services', href: at('conventional-testing'), children: GLOBAL_SERVICE_LINKS },
  { kind: 'external', label: 'NDT Course', href: at('ndt-course'), children: GLOBAL_COURSE_LINKS },
  { kind: 'external', label: 'NDT Products', href: at('ndt-products'), children: GLOBAL_PRODUCT_LINKS },
  { kind: 'external', label: 'Clients', href: at('our-clients') },
  { kind: 'external', label: 'Jobs @ Ixar', href: at('jobs-ixar') },
];
