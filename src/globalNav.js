/* Navigation shared with the global IXAR site (ixar.in).
 *
 * The header on ixar.africa mirrors ixar.in's menu. Everything that is a
 * *global* concern — the group's services, courses, products, clients and
 * careers — links straight out to ixar.in, which is the system of record for
 * that content. Only the Africa division's own pages stay on this domain.
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

/* --- Africa items: these stay on ixar.africa ------------------------ */

export const EA_LINKS = [
  { to: '/', label: 'Africa Overview' },
  { to: '/services', label: 'Services in Africa' },
  { to: '/applications', label: 'Industries We Serve' },
  { to: '/network', label: 'Regional Offices' },
  { to: '/case-studies', label: 'Regional Track Record' },
  { to: '/training', label: 'Training & Certification' },
  { to: '/products', label: 'Equipment & Supply' },
  { to: '/estimator', label: 'Scope Builder' },
  { to: '/careers', label: 'Careers in Africa' },
  { to: '/contact', label: 'Contact the Regional Office' },
];

/* The top-level header row.
 *
 * Every one of these used to be a plain link to ixar.in. A visitor who clicked
 * About Us, Services, NDT Course, NDT Products, Clients or Jobs left
 * ixar.africa, landed on an India-branded page, and had no route back - which
 * works directly against the purpose of this site.
 *
 * Each item now leads with its Africa equivalent and stays on this domain.
 * The ixar.in pages are still reachable, at the foot of each dropdown, and
 * they open in a new tab so the Africa page survives the click.
 *
 * `to` is a route on this site. `href` is the ixar.in page the item mirrors,
 * offered as "On ixar.in" inside the dropdown rather than as the item itself.
 */
export const HEADER_ITEMS = [
  {
    kind: 'ea',
    label: 'About Us',
    /* No standalone about page on this domain. The group's history is the
       "Backed by Over 55 Years" section of the homepage, which is the same
       content ixar.in's About Us carries. */
    to: '/#legacy',
    href: at('about-us'),
    children: [
      { to: '/#legacy', label: 'The IXAR Group' },
      { to: '/network', label: 'Regional Offices' },
      { to: '/case-studies', label: 'Regional Track Record' },
    ],
  },
  {
    kind: 'ea',
    label: 'Services',
    to: '/services',
    href: at('conventional-testing'),
    children: [
      { to: '/services', label: 'All Services in Africa' },
      { to: '/services/radiography', label: 'Digital & Computed Radiography' },
      { to: '/services/paut', label: 'Phased Array (PAUT)' },
      { to: '/services/aut', label: 'Automated Ultrasonics (AUT)' },
      { to: '/services/tofd', label: 'Time of Flight Diffraction' },
      { to: '/services/pect', label: 'Eddy Current (ECT / PECT)' },
      { to: '/services/mfl-tube', label: 'Tank and Tube Inspection' },
    ],
    external: GLOBAL_SERVICE_LINKS,
  },
  {
    kind: 'ea',
    label: 'NDT Course',
    to: '/training',
    href: at('ndt-course'),
    children: [{ to: '/training', label: 'Training and Certification in Africa' }],
    external: GLOBAL_COURSE_LINKS,
  },
  {
    kind: 'ea',
    label: 'NDT Products',
    to: '/products',
    href: at('ndt-products'),
    children: [{ to: '/products', label: 'Equipment and Supply in Africa' }],
    external: GLOBAL_PRODUCT_LINKS,
  },
  {
    kind: 'ea',
    label: 'Clients',
    to: '/case-studies',
    href: at('our-clients'),
    children: [
      { to: '/case-studies', label: 'Projects in Africa' },
      { to: '/#trusted', label: 'Who We Work For' },
    ],
  },
  {
    kind: 'ea',
    label: 'Jobs @ Ixar',
    to: '/careers',
    href: at('jobs-ixar'),
    children: [{ to: '/careers', label: 'Careers in Africa' }],
  },
  { kind: 'ea', label: 'Africa', to: '/', children: EA_LINKS, highlight: true },
];
