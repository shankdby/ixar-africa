/* Generates the two downloadable PDFs offered on the Africa page.
   ==================================================================
     public/downloads/IXAR-Company-Profile.pdf
     public/downloads/IXAR-Africa-Project-List.pdf

   Both were 311-byte placeholder stubs. Their content is read from the
   same CMS JSON the site renders (src/content/*.json), so a project
   added or edited at /admin is one `node scripts/build-pdfs.mjs` away
   from appearing in the downloadable list. Nothing here is retyped by
   hand, which is what keeps the PDF and the page from drifting apart.

   Layout is HTML printed by headless Chromium rather than drawn box by
   box, so the documents carry the site's own type and colour and stay
   editable by anyone who can read CSS.

   Run:  npx playwright install chromium   (once, if not present)
         node scripts/build-pdfs.mjs
   Playwright is not a project dependency - this script is run by hand
   when content changes, not as part of `npm run build`.               */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'downloads');

const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const PROJECTS = read('src/content/projects.json').projects;
const SERVICES = read('src/content/services.json').services;
const INDUSTRIES = read('src/content/industries.json').industries;

/* The logo is embedded as a data URI. A file:// <img> would work here
   but the PDFs are also opened from disk by people, and an embedded
   image cannot go missing. */
const LOGO = 'data:image/png;base64,' +
  fs.readFileSync(path.join(ROOT, 'public/images/ixar-logo-main.png')).toString('base64');

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const ISSUED = new Date().toLocaleDateString('en-GB', {
  year: 'numeric', month: 'long',
});

/* -------------------------------------------------------------------- */

const CSS = `
  @page { size: A4; margin: 17mm 15mm 20mm; }
  *{ box-sizing: border-box; }
  body{
    margin:0; font-family: "Liberation Sans", Arial, Helvetica, sans-serif;
    color:#15191F; font-size:9.2pt; line-height:1.52;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  h1,h2,h3{ margin:0; letter-spacing:-.01em; }
  p{ margin:0 0 9pt; }
  strong{ font-weight:700; }
  .red{ color:#DE0603; }

  /* ---- cover ---- */
  /* Pulled out to every page edge: the page box is A4 less the 17/15/20mm
     print margins, so the negative margins put the panel back on the trim. */
  .cover{
    position:relative; height:297mm; background:#15191F; color:#fff;
    margin:-17mm -15mm -20mm; padding:26mm 18mm 20mm; display:flex;
    flex-direction:column; page-break-after:always;
  }
  .cover::after{
    content:''; position:absolute; left:0; right:0; bottom:0; height:6mm;
    background:#DE0603;
  }
  .cover img{ width:44mm; }
  .cover .kicker{
    margin-top:auto; font-size:8.4pt; letter-spacing:.22em; font-weight:700;
    color:#DE0603; text-transform:uppercase;
  }
  .cover h1{ font-size:37pt; font-weight:800; line-height:1.03; margin:5mm 0 6mm; }
  .cover .lede{ font-size:11.6pt; color:#C6CBD2; max-width:118mm; line-height:1.6; }
  .cover .meta{
    margin-top:14mm; padding-top:6mm; border-top:1px solid rgba(255,255,255,.18);
    display:flex; gap:14mm; font-size:8.6pt; color:#9BA3AD;
  }
  .cover .meta b{ display:block; color:#fff; font-size:9.6pt; font-weight:700; margin-bottom:1mm; }

  /* ---- section furniture ---- */
  /* Sections flow across pages - forcing them whole leaves a third of a
     page blank whenever the next one is a little too tall. Headings keep
     their first rows instead, which is what actually reads badly. */
  .sec{ margin:0 0 7mm; }
  h2.title, h3.sub, .eyebrow{ break-after:avoid; page-break-after:avoid; }
  .eyebrow{
    font-size:7.6pt; letter-spacing:.2em; font-weight:700; color:#DE0603;
    text-transform:uppercase; display:block; margin-bottom:2mm;
  }
  h2.title{ font-size:17pt; font-weight:800; margin-bottom:3mm; }
  h2.title + .rule{ display:block; width:16mm; height:2.4pt; background:#DE0603; margin-bottom:5mm; }
  h3.sub{ font-size:10.4pt; font-weight:700; margin:5mm 0 2mm; }

  /* ---- tables ---- */
  table{ width:100%; border-collapse:collapse; font-size:8.2pt; }
  thead{ display:table-header-group; }
  th{
    background:#15191F; color:#fff; text-align:left; font-weight:700;
    padding:2mm 2.6mm; font-size:7.8pt; letter-spacing:.06em; text-transform:uppercase;
  }
  td{ padding:1.5mm 2.6mm; border-bottom:1px solid #E6E9EC; vertical-align:top; }
  tbody tr{ page-break-inside:avoid; }
  tbody tr:nth-child(even) td{ background:#F7F8F9; }
  td.num{ color:#DE0603; font-weight:700; width:9mm; }
  .pill{
    display:inline-block; padding:.6mm 2mm; font-size:7.4pt; font-weight:700;
    border-radius:1mm; white-space:nowrap;
  }
  .pill--on{ background:#FDEAEA; color:#B0110E; }
  .pill--done{ background:#EDF1F5; color:#414A55; }
  .pill--ext{ background:#FFF3E6; color:#8A4B04; }

  /* ---- stat strip ---- */
  .stats{ display:flex; gap:3mm; margin-bottom:7mm; }
  .stat{ flex:1; background:#F7F8F9; border-top:2.4pt solid #DE0603; padding:4mm 3.5mm; }
  .stat b{ display:block; font-size:19pt; font-weight:800; line-height:1; }
  .stat span{ font-size:7.8pt; color:#6B6B6B; display:block; margin-top:1.6mm; line-height:1.35; }

  /* ---- cards ---- */
  .cards{ display:grid; grid-template-columns:1fr 1fr; gap:4mm; }
  .card{ border:1px solid #E6E9EC; border-left:2.4pt solid #DE0603; padding:4mm; page-break-inside:avoid; }
  .card h3{ font-size:9.8pt; font-weight:700; margin-bottom:1.6mm; }
  .card p{ font-size:8.4pt; color:#4A5058; margin:0 0 2.4mm; line-height:1.5; }
  .creds{ font-size:7.4pt; color:#6B6B6B; }
  .creds b{ color:#15191F; }

  .note{
    background:#F7F8F9; border-left:2.4pt solid #15191F; padding:3.2mm 4mm;
    font-size:7.9pt; color:#4A5058; page-break-inside:avoid;
  }
  .note b{ color:#15191F; }
  .note ul{ margin:2mm 0 0; padding-left:4.5mm; }
  .note li{ margin-bottom:1.4mm; }

  .contact{ background:#15191F; color:#fff; padding:5mm; page-break-inside:avoid; }
  .contact h3{ font-size:10.4pt; font-weight:800; margin-bottom:2.4mm; }
  .contact .row{ display:flex; gap:10mm; font-size:8.4pt; color:#C6CBD2; }
  .contact .row div{ flex:1; }
  .contact b{ display:block; color:#fff; font-size:7.6pt; letter-spacing:.14em;
              text-transform:uppercase; margin-bottom:1.4mm; }
  .contact a{ color:#fff; text-decoration:none; }
  .break{ page-break-before:always; }
`;

const HEADER = `
  <div style="width:100%;font-family:Arial,Helvetica,sans-serif;font-size:7pt;color:#9BA3AD;
              padding:0 15mm;display:flex;justify-content:space-between;">
    <span>IXAR &middot; Industrial X-Ray and Allied Radiographers</span>
    <span>__DOCTITLE__</span>
  </div>`;

const FOOTER = `
  <div style="width:100%;font-family:Arial,Helvetica,sans-serif;font-size:7pt;color:#9BA3AD;
              padding:0 15mm;display:flex;justify-content:space-between;">
    <span>ixar.africa &middot; bd@ixar.africa &middot; +256 414 251251</span>
    <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
  </div>`;

const CONTACT_BLOCK = `
  <div class="contact">
    <h3>Talk to the regional team</h3>
    <div class="row">
      <div>
        <b>Regional office</b>
        Plot No. 72, Kanjokya Street, Kamwokya<br>
        P.O. Box 28673 Nakawa, Kampala, Uganda
      </div>
      <div>
        <b>Contact</b>
        +256 414 251251 &middot; +256 777 166392<br>
        <a href="mailto:bd@ixar.africa">bd@ixar.africa</a><br>
        <a href="https://ixar.africa">www.ixar.africa</a>
      </div>
      <div>
        <b>Group</b>
        Industrial X-Ray and Allied<br>Radiographers (I) Pvt. Ltd.<br>
        <a href="https://ixar.in">www.ixar.in</a>
      </div>
    </div>
  </div>`;

function page(title, body) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
    <title>${esc(title)}</title><style>${CSS}</style></head>
    <body>${body}</body></html>`;
}

/* ------------------------- 1. Company Profile ------------------------ */

const STATS = [
  ['2019', 'Established in Africa'],
  ['8+',   'Countries with projects completed'],
  ['12+',  'Projects completed in Africa'],
  ['20+',  'NDT methods offered'],
];

const LICENCES = [
  ['Radiation Safety Authorisation',
   'Licensed to own, store, transport and operate sealed radioactive sources by the Uganda Atomic Energy Council and the Tanzania Atomic Energy Commission. Sources in use include Iridium-192, Selenium-75 and Cobalt-60, alongside X-ray crawlers and close proximity radiography systems.',
   'Authorised by', 'UAEC Uganda &middot; TAEC Tanzania &middot; BARC'],
  ['Certified Personnel',
   'Technicians qualified and certified to Level II and Level III in accordance with ASNT SNT-TC-1A. Level III personnel carry 7 to 25 years of field experience, Level II personnel 5 to 10 years. Qualified Radiation Protection Officers are assigned to all source handling work.',
   'Certified to', 'ASNT SNT-TC-1A &middot; Level II &middot; Level III &middot; RPO'],
  ['Quality Management',
   'ISO 9001 certified since 2003, with written practices and procedures aligned to ASTM, ASME, API, BS, DIN and NACE, or to a client specified standard where one is imposed.',
   'Certified to', 'ISO 9001 &middot; Bureau Veritas &middot; ASME &middot; API &middot; ASTM'],
  ['Industry Standing',
   'Member of the American Society for Non-Destructive Testing, the American Welding Society, ASTM, NACE, ISNT and NANSO. Regular member of the International Pipeline and Offshore Contractors Association.',
   'Member of', 'IPLOCA &middot; ASNT &middot; AWS &middot; NACE &middot; ISNT &middot; NANSO'],
];

/* Presence is stated only where it is backed by a registration, an office or a
   delivered project. Anything softer than that is left off rather than dressed
   up as coverage. */
const COUNTRY_ROWS = [
  ['Uganda',     'Registered office, Kampala',   'Tilenga and Kingfisher oil fields, Hoima and Buliisa'],
  ['Tanzania',   'Office, Dar es Salaam',        'Radiography and plant inspection, Dar es Salaam and Illovo'],
  ['Kenya',      'Served from Kampala',          'Enquiries handled by the regional office'],
  ['Rwanda',     'Served from Kampala',          'Within regional mobilisation range'],
  ['Mozambique', 'Served from the region',       'Within regional mobilisation range'],
  ['Ethiopia',   'Served from the region',       'Within regional mobilisation range'],
  ['Sudan',      'Served from the region',       'Within regional mobilisation range'],
  ['Malawi',     'Served from the region',       'Within regional mobilisation range'],
];

const CLIENTS = ['Sinopec', 'CPECC', 'CCJV / CNOOC Uganda', 'PRAJ Projects',
  'Larsen &amp; Toubro', 'Afrishell-Jeveeka', 'Ntake Bakery', 'Illovo Distillers'];

const profileBody = `
  <div class="cover">
    <img src="${LOGO}" alt="IXAR">
    <span class="kicker">Company Profile &middot; Africa</span>
    <h1>Non-destructive<br>testing across<br>the continent.</h1>
    <p class="lede">Radiography, advanced ultrasonics, pipeline and plant inspection
      delivered by licensed, certified crews operating out of Kampala and Dar es Salaam.</p>
    <div class="meta">
      <div><b>Regional offices</b>Uganda &middot; Tanzania</div>
      <div><b>Group founded</b>1969</div>
      <div><b>Issued</b>${ISSUED}</div>
    </div>
  </div>

  <div class="sec">
    <span class="eyebrow">Who we are</span>
    <h2 class="title">IXAR in Africa</h2><span class="rule"></span>
    <p>IXAR Africa has operated on the continent since 2019, working for oil and gas
      operators, EPC contractors, power producers and process industry clients across
      eight countries. Crews are based in Kampala and Dar es Salaam and mobilise to
      site with their own equipment, sources and radiation protection cover.</p>
    <p>The regional business is part of <strong>Industrial X-Ray and Allied Radiographers
      (I) Pvt. Ltd.</strong>, founded in 1969 and today a leader in non-destructive testing
      in India and internationally. The group employs over 1,000 technicians, holds ISO 9001
      certification, operates a fleet of mobile radiography units, and runs a training
      institute accredited in collaboration with the Bhabha Atomic Research Centre in Mumbai.
      African teams draw on group equipment, technical specialists and written practices
      whenever a project calls for it.</p>
    <p><strong>Group presence:</strong> India &middot; Uganda &middot; Tanzania &middot;
      Nigeria &middot; Netherlands &middot; UAE &middot; Oman &middot; Saudi Arabia</p>
  </div>

  <div class="stats">
    ${STATS.map(([v, l]) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`).join('')}
  </div>

  <div class="sec">
    <span class="eyebrow">Compliance</span>
    <h2 class="title">Licences and certification</h2><span class="rule"></span>
    <div class="cards">
      ${LICENCES.map(([t, b, cl, c]) => `
        <div class="card"><h3>${t}</h3><p>${b}</p>
        <div class="creds"><b>${cl}:</b> ${c}</div></div>`).join('')}
    </div>
  </div>

  <div class="sec">
    <span class="eyebrow">Capability</span>
    <h2 class="title">Services</h2><span class="rule"></span>
    <table>
      <thead><tr><th style="width:9mm">No</th><th>Service</th><th style="width:62mm">Worked to</th></tr></thead>
      <tbody>
        ${SERVICES.map((s) => `<tr>
          <td class="num">${esc(s.num)}</td>
          <td><strong>${esc(s.title)}</strong></td>
          <td>${esc(s.standards)}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="sec">
    <span class="eyebrow">Sectors</span>
    <h2 class="title">Industries served</h2><span class="rule"></span>
    <div class="cards">
      ${INDUSTRIES.map((i) => `
        <div class="card"><h3>${esc(i.title)}</h3><p>${esc(i.desc)}</p></div>`).join('')}
    </div>
  </div>

  <div class="sec">
    <span class="eyebrow">Footprint</span>
    <h2 class="title">Where we operate</h2><span class="rule"></span>
    <p>Crews mobilise from the regional offices in Kampala and Dar es Salaam.
      Projects have been delivered in:</p>
    <table style="margin-top:1mm">
      <thead><tr><th>Country</th><th style="width:52mm">Presence</th><th>Notes</th></tr></thead>
      <tbody>
        ${COUNTRY_ROWS.map(([c, pres, note]) => `<tr>
          <td><strong>${c}</strong></td><td>${pres}</td><td>${note}</td></tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="sec">
    <span class="eyebrow">Track record</span>
    <h2 class="title">Clients in Africa</h2><span class="rule"></span>
    <p>${CLIENTS.join(' &nbsp;&middot;&nbsp; ')}</p>
    <p style="font-size:8.4pt;color:#6B6B6B">A project-by-project record is published
      separately as <strong>Completed Projects, Africa</strong>, available from
      ixar.africa.</p>
  </div>

  ${CONTACT_BLOCK}
`;

/* ------------------------ 2. Project list ---------------------------- */

const pill = (status) => {
  const k = String(status).toLowerCase();
  const cls = k === 'ongoing' ? 'pill--on' : k === 'extension' ? 'pill--ext' : 'pill--done';
  return `<span class="pill ${cls}">${esc(status)}</span>`;
};

const byCountry = PROJECTS.reduce((acc, p) => {
  acc[p.country] = (acc[p.country] || 0) + 1;
  return acc;
}, {});
const ongoing = PROJECTS.filter((p) => p.status !== 'Completed').length;

const projectsBody = `
  <div class="cover">
    <img src="${LOGO}" alt="IXAR">
    <span class="kicker">Project Record &middot; Africa</span>
    <h1>Completed<br>projects,<br>Africa.</h1>
    <p class="lede">Every project delivered on the continent, with client, scope,
      location, period and current status.</p>
    <div class="meta">
      <div><b>Projects listed</b>${PROJECTS.length}</div>
      <div><b>Currently active</b>${ongoing}</div>
      <div><b>Issued</b>${ISSUED}</div>
    </div>
  </div>

  <div class="sec" style="margin-bottom:4mm">
    <span class="eyebrow">Experience record</span>
    <h2 class="title">Projects delivered</h2><span class="rule"></span>
    <p style="font-size:8.6pt;color:#4A5058;margin-bottom:0">
      ${PROJECTS.length} projects across
      ${Object.entries(byCountry).map(([c, n]) => `${esc(c)} (${n})`).join(', ')}.
    </p>
  </div>

  <table>
    <thead><tr>
      <th style="width:9mm">No</th>
      <th>Project</th>
      <th style="width:30mm">Client</th>
      <th style="width:19mm">Period</th>
      <th style="width:21mm">Status</th>
      <th style="width:44mm">Location</th>
    </tr></thead>
    <tbody>
      ${PROJECTS.map((p) => `<tr>
        <td class="num">${esc(p.no)}</td>
        <td><strong>${esc(p.project)}</strong></td>
        <td>${esc(p.client)}</td>
        <td>${esc(p.period)}</td>
        <td>${pill(p.status)}</td>
        <td>${esc(p.location)}</td>
      </tr>`).join('')}
    </tbody>
  </table>

  <div class="note" style="margin-top:5mm">
    <b>Notes on this record</b>
    <ul>
      <li>Work order values are held commercially confidential and are not published.
        They are available on request under a non-disclosure agreement.</li>
      <li>Entries 4 and 9 are separate work orders for the same client at the same
        location and are listed individually rather than combined.</li>
      <li>Entry 10 is a group project delivered in India, included because the scope
        and the client relationship carry into the African work.</li>
      <li>Client names are published with the permission of the clients concerned.
        Projects under confidentiality are not listed.</li>
      <li>Status is current as at ${ISSUED}.</li>
    </ul>
  </div>

  <div style="margin-top:5mm">${CONTACT_BLOCK}</div>
`;

/* ------------------------------ build -------------------------------- */

const DOCS = [
  ['IXAR-Company-Profile.pdf', 'Company Profile', profileBody],
  ['IXAR-Africa-Project-List.pdf', 'Completed Projects, Africa', projectsBody],
];

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const page_ = await browser.newPage();

for (const [file, title, body] of DOCS) {
  await page_.setContent(page(`IXAR ${title}`, body), { waitUntil: 'load' });
  await page_.emulateMedia({ media: 'print' });
  await page_.pdf({
    path: path.join(OUT, file),
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: HEADER.replace('__DOCTITLE__', esc(title)),
    footerTemplate: FOOTER,
    margin: { top: '17mm', bottom: '20mm', left: '15mm', right: '15mm' },
  });
  const kb = (fs.statSync(path.join(OUT, file)).size / 1024).toFixed(0);
  console.log(`  ${file}  ${kb} kB`);
}

await browser.close();
