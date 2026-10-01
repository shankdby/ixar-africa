/* The site's navigation.
 *
 * ixar.africa represents IXAR Africa on its own. The header used to mirror
 * ixar.in, with five of its seven items leaving for the Indian site and all of
 * the Africa content packed under a single "Africa" menu. As of 1 October 2026
 * the header is IXAR Africa's own:
 *
 *   About Us  ·  Services  ·  Experience  ·  Jobs @ IXAR  ·  [Contact Us]
 *
 * Contact Us is the red button at the right of the header rather than a
 * sixth text item, so it is not offered twice in one row.
 *
 * Nothing in the header leads to ixar.in. The group is acknowledged once, in
 * the footer - see GROUP_SITE below.
 *
 * Every `to` is a router path, optionally with a #fragment. AppShell scrolls
 * to the fragment after navigation, so a menu item can open a page at a
 * section from anywhere on the site.
 */

/* The one link to the group site, used in the footer only. */
export const GROUP_SITE = 'https://ixar.in';

/* Kept under its old name for structuredData.js, which describes IXAR Africa
   as part of the group (schema.org parentOrganization). It is metadata, not a
   visible link. */
export const IXAR_IN = GROUP_SITE;

export const HEADER_ITEMS = [
  {
    label: 'About Us',
    to: '/about',
    children: [
      { to: '/about#who', label: 'Who We Are' },
      { to: '/about#leadership', label: 'Leadership' },
      { to: '/about#licences', label: 'Licences & Approvals' },
      { to: '/about#heritage', label: 'Our Heritage' },
      { to: '/about#training', label: 'People & Training' },
      { to: '/about#offices', label: 'Where We Operate' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { to: '/services#all', label: 'All Services' },
      { to: '/services#radiography', label: 'Radiography & Pipeline' },
      { to: '/services#pigging', label: 'Pigging & Intelligent Pigging' },
      { to: '/services#tank', label: 'Tank Inspection' },
      { to: '/services#vessels', label: 'Pressure Vessels' },
      { to: '/services#ultrasonic', label: 'Ultrasonic & Advanced UT' },
      { to: '/services#surface', label: 'Surface & Destructive Testing' },
      { to: '/services#equipment', label: 'Equipment Supply' },
      { to: '/estimator', label: 'Scope Builder' },
    ],
  },
  {
    label: 'Experience',
    to: '/experience',
    children: [
      { to: '/experience#industries', label: 'Industries We Serve' },
      { to: '/experience#projects', label: 'Flagship Projects' },
      { to: '/experience#field', label: 'From the Field' },
      { to: '/experience#clients', label: 'Our Clients' },
      { to: '/experience#record', label: 'Experience Record' },
    ],
  },
  {
    label: 'Jobs @ IXAR',
    to: '/careers',
    children: [
      { to: '/careers', label: 'Careers at IXAR Africa' },
      { to: '/careers#roles', label: 'Disciplines We Recruit' },
      { to: '/careers#apply', label: 'Send an Application' },
      { to: '/about#training', label: 'Training & Certification' },
    ],
  },
];

/* Site search.
 *
 * The header's search box used to send the query to ixar.in. It now searches
 * this site: every menu entry, every service, every industry and the main
 * pages, matched on title and keywords. Small enough to ship in the bundle,
 * and it means the box never leads off the site.
 */
const PAGES = [
  { to: '/', label: 'Home', keys: 'ixar africa home overview' },
  { to: '/contact', label: 'Contact Us', keys: 'contact enquiry quote quotation office kampala phone email whatsapp mozambique tanzania' },
  { to: '/estimator', label: 'Scope Builder', keys: 'scope builder estimator cost price proposal' },
  { to: '/services/radiography', label: 'Digital & Computed Radiography', keys: 'cr dr digital computed radiography film' },
  { to: '/services/paut', label: 'Phased Array UT (PAUT)', keys: 'paut phased array ultrasonic' },
  { to: '/services/tofd', label: 'Time of Flight Diffraction (TOFD)', keys: 'tofd time of flight crack sizing' },
  { to: '/services/aut', label: 'Automated Ultrasonic Testing (AUT)', keys: 'aut automated ultrasonic girth weld pipeline' },
  { to: '/services/pect', label: 'Pulsed Eddy Current (PECT)', keys: 'pect eddy current cui corrosion under insulation ect' },
  { to: '/services/mfl-tube', label: 'Tank & Tube Inspection (MFL)', keys: 'mfl magnetic flux leakage tube tank floor heat exchanger boiler' },
  { to: '/experience#industries', label: 'Oil & Gas', keys: 'oil gas pipeline refinery upstream midstream downstream' },
  { to: '/experience#industries', label: 'Power & Geothermal', keys: 'power geothermal boiler turbine' },
  { to: '/experience#industries', label: 'Mining', keys: 'mining mine structural' },
  { to: '/experience#industries', label: 'Cement', keys: 'cement kiln' },
  { to: '/experience#industries', label: 'Breweries, Beverage & Food', keys: 'brewery beverage food' },
  { to: '/experience#industries', label: 'Sugar & Distilleries', keys: 'sugar distillery mill' },
  { to: '/experience#industries', label: 'Marine & Ports', keys: 'marine port jetty underwater hull mooring' },
  { to: '/experience#industries', label: 'Manufacturing & Engineering', keys: 'manufacturing fabrication engineering' },
  { to: '/experience#projects', label: 'EACOP, Tilenga & Kingfisher', keys: 'eacop tilenga kingfisher sinopec cpecc ccjv projects' },
  { to: '/about#licences', label: 'Radiation licences (UAEC, TAEC)', keys: 'uaec taec barc radiation licence iso 9001 14001 45001 pcn asnt' },
];

export const SEARCH_INDEX = [
  ...HEADER_ITEMS.flatMap((item) => [
    { to: item.to, label: item.label, keys: item.label.toLowerCase() },
    ...item.children.map((c) => ({ to: c.to, label: c.label, section: item.label, keys: c.label.toLowerCase() })),
  ]),
  ...PAGES,
];

export function searchSite(query, limit = 7) {
  const words = String(query || '').toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const seen = new Set();
  return SEARCH_INDEX
    .map((e) => {
      const hay = `${e.label.toLowerCase()} ${e.keys}`;
      const hits = words.filter((w) => hay.includes(w)).length;
      const starts = e.label.toLowerCase().startsWith(words[0]) ? 1 : 0;
      return { e, score: hits * 2 + starts };
    })
    .filter((r) => r.score >= words.length * 2)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.e)
    .filter((e) => {
      const k = `${e.to}|${e.label}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .slice(0, limit);
}
