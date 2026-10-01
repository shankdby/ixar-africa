/* IXAR Africa - company content.
 * ==========================================================================
 * Everything on the About Us, Services and Experience pages comes from here,
 * and everything here comes from IXAR's own Company Profile (2026 edition,
 * the same PDF offered for download at /downloads/IXAR-Company-Profile.pdf)
 * and its companion Experience Record. Brochure page numbers are noted so a
 * reviewer can check any line against its source.
 *
 * Three pages draw on one file so a figure cannot be right on one page and
 * stale on another. When IXAR revises the brochure, revise it here.
 *
 * Photographs:
 *   /images/east-africa/*  IXAR Africa's own site photography (Uganda).
 *   /images/services/*     cropped from the brochure's capability spreads.
 *   /images/about/*        the founder's portrait and the group's awards,
 *                          from the brochure's heritage page.
 * Nothing here uses the AI-generated stock in /images/stock.
 * ========================================================================== */

/* --- Who we are (brochure p.2) ------------------------------------------ */

export const ENTITY = 'Industrial X-Ray and Allied Radiographers (EA) Ltd';

export const TAGLINE = 'Experience… our expertise.';

export const WHO_WE_ARE = {
  title: 'East Africa’s NDT partner, with a 55-year group record behind every crew.',
  paragraphs: [
    'Industrial X-Ray and Allied Radiographers (EA) Ltd — IXAR Africa — has delivered non-destructive testing and industrial inspection on the continent since 2012. From our regional office in Kampala and our offices in Dar es Salaam and Mozambique, we serve oil and gas operators, EPC contractors and plant owners across Uganda, Tanzania and Kenya, with mobilisation on request anywhere in Africa.',
    'Our crews, equipment and licensed sealed sources are based in the region, so a new site is a mobilisation rather than an import exercise. Today IXAR Africa supports some of the region’s most important energy projects, including UT thickness monitoring on the East African Crude Oil Pipeline (EACOP), Sinopec’s work on the Tilenga Project and PAUT on the Kingfisher Oil Field.',
    'We operate as part of Industrial X-Ray & Allied Radiographers (I) Pvt. Ltd., Mumbai — a leader in NDT since 1969 with more than 1,000 technicians — and draw on the group’s specialists, equipment fleet and written practices whenever a project calls for it.',
  ],
  vision:
    'To be the world’s premier full-service NDT company, focused on innovative technology and customer satisfaction.',
};

/* p.2 and p.14. `figure` is counted up on screen; `static` is printed as is. */
export const KEY_STATS = [
  { static: '2012', label: 'Established in Africa' },
  { figure: 28, label: 'Projects on record' },
  { static: '$2.0M+', label: 'Contract value delivered & ongoing' },
  { figure: 20, suffix: '+', label: 'NDT methods offered' },
];

/* --- Leadership (brochure p.3) ------------------------------------------ */

export const LEADERSHIP = [
  {
    initials: 'RJ',
    name: 'Rishi Jain',
    role: 'Managing Director',
    meta: ['IIT Bombay alumnus', 'Based in Kampala & Mumbai'],
    bio: [
      'Rishi leads Industrial X-Ray and Allied Radiographers (EA) Ltd, with responsibility for IXAR’s growth, licensing and project delivery across East Africa. He has built the regional business around the operators and EPC contractors developing Uganda’s oil fields, bringing group-level equipment and technology to projects such as Tilenga and Kingfisher.',
      'An alumnus of the Indian Institute of Technology Bombay, he also founded IXAR Robotic Solutions in 2019 — an IIT Bombay alumni start-up incubated at SINE, IIT Bombay, offering ROV-based underwater survey and inspection.',
    ],
    points: [
      'Managing Director, IXAR (EA) Ltd — Uganda',
      'Founder, IXAR Robotic Solutions — underwater robotic inspection',
      'Earlier: business development, Metal Analysis & Services',
    ],
  },
  {
    initials: 'ML',
    name: 'Marina López Rodríguez',
    role: 'Director',
    meta: ['University of Groningen', 'Based in Kampala'],
    bio: [
      'Marina brings more than eight years of international experience across Europe and Africa, much of it managing programmes and partnerships on the ground in East and West Africa. Based in Kampala, she supports IXAR Africa’s regional operations, stakeholder relationships and commitment to developing local talent.',
      'She has worked with organisations including the Suyana Foundation in Uganda and Street Child in Sierra Leone, and studied at the University of Groningen in the Netherlands.',
    ],
    points: [
      'Director, IXAR Africa — Kampala',
      '8+ years in international development across Europe & Africa',
      'Suyana Foundation (Uganda) · Street Child (Sierra Leone)',
    ],
  },
];

/* --- Licences, approvals & compliance (brochure p.4) -------------------- */

export const LICENCES_LEAD = {
  title: 'Authorised, certified and audited to handle radiation work on the continent.',
  body: 'Holding, storing and moving sealed radioactive sources is the highest barrier to entry in the African NDT market. IXAR Africa holds the national authorisations to do it — so clients get radiography on their schedule, not an import licence timeline.',
};

export const LICENCES = [
  {
    num: '01',
    title: 'Radiation Safety Authorisation',
    body: 'Licensed to own, store, transport and operate sealed radioactive sources by the Uganda Atomic Energy Council and the Tanzania Atomic Energy Commission. Sources in use include Ir-192, Se-75 and Co-60, alongside X-ray crawlers and close-proximity systems.',
    chips: ['UAEC Uganda', 'TAEC Tanzania', 'BARC'],
  },
  {
    num: '02',
    title: 'Certified Personnel',
    body: 'Technicians certified to Level II and Level III under PCN and ISO 9712, and to ASNT SNT-TC-1A. Level III staff carry 7–25 years of field experience, Level II staff 5–10 years. BARC-qualified Radiation Safety Officers oversee all source handling.',
    chips: ['PCN II / III', 'ISO 9712', 'SNT-TC-1A'],
  },
  {
    num: '03',
    title: 'Quality Management',
    body: 'ISO 9001 certified since 2003, with ISO 14001 environmental and ISO 45001 occupational health & safety systems. Written practices align to ASTM, ASME, API, BS, DIN and NACE, or to the client’s specified standard.',
    chips: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
  },
  {
    num: '04',
    title: 'Industry Standing',
    body: 'Member of the American Society for Non-Destructive Testing, American Welding Society, ASTM, NACE, ISNT and NANSO — and one of very few NDT companies that are regular members of the International Pipeline & Offshore Contractors Association.',
    chips: ['IPLOCA', 'ASNT', 'AWS', 'NACE'],
  },
];

/* --- Heritage (brochure p.15) ------------------------------------------- */

export const FOUNDER = {
  name: 'Late Shri V. S. Jain',
  years: 'Founder · 1940 – 2003',
  image: '/images/about/founder-vs-jain.webp',
};

export const TIMELINE = [
  { year: '1969', text: 'Founded in Mumbai as Industrial X-Ray & Allied Radiographers, starting in radiography.' },
  { year: '1986', text: 'Becomes a Private Limited Company and expands into the full range of NDT methods.' },
  { year: '1996', text: 'Honoured at the 14th World Conference on NDT for contributions to NDT and quality.' },
  { year: '1999', text: 'Destructive testing laboratory launched.' },
  { year: '2003', text: 'ISO 9001 certification achieved.' },
  { year: '2012', text: 'IXAR Africa established in East Africa.', africa: true },
  { year: 'Today', text: '1,000+ technicians, 12,000+ projects tested and a BARC-collaborative training institute.' },
];

export const AWARDS = [
  { title: '14th WCNDT', meta: 'New Delhi, 1996', image: '/images/about/award-wcndt-1996.webp' },
  { title: 'NAARRI Award 1997', meta: 'Shri R.G. Deshpande Memorial', image: '/images/about/award-naarri-1997.webp' },
  { title: 'NDT Achievement Award', meta: 'ISNT, 2008', image: '/images/about/award-isnt-2008.webp' },
  { title: 'NAARRI Entrepreneur', meta: 'of the Year, 2010', image: '/images/about/award-naarri-2010.webp' },
];

/* --- People & training (brochure p.16, plus the group training routes) -- */

export const PEOPLE = [
  {
    title: 'Experienced technicians',
    body: 'Our strength lies in our technicians. ASNT Level III personnel carry 7–25 years of experience, Level II personnel 5–10 years, and senior team members more than 25 years.',
  },
  {
    title: 'Safety first',
    body: 'BARC-qualified Radiation Safety Officers are assigned to all source handling, backed by ISO 45001 occupational health and safety systems and group awards for managing workplace risk.',
  },
  {
    title: 'Building local capability',
    body: 'The group’s training institute runs ASNT Level I & II courses in RT, UT, MT, PT, ET and PAUT, and radiation-safety certification with BARC — expertise we bring to developing East African talent.',
  },
];

/* What used to be the separate Training page, reduced to the routes a
   candidate or client can actually take. The radiation safety course runs at
   the group institute in Mumbai with BARC; it is not presented as a Kampala
   centre. */
export const TRAINING_ROUTES = [
  {
    tag: 'Group programme · BARC collaboration',
    title: 'Radiation safety for industrial radiographers',
    body: 'The qualification course for personnel operating gamma cameras and X-ray generators, run with the Radiological Physics & Advisory Division, BARC.',
    scope: 'Radiation safety training',
  },
  {
    tag: 'ASNT Level I & II',
    title: 'Method training',
    body: 'RT, UT, MT, PT, ET and PAUT, built around the equipment crews actually use on site.',
    scope: 'Method training',
  },
  {
    tag: 'At your site',
    title: 'Client & corporate sessions',
    body: 'For engineering, QA and maintenance teams: what each method can detect, how to read a report, and how to write a scope that returns useful data.',
    scope: 'Client training session',
  },
];

/* --- Where we operate (brochure p.13) ----------------------------------- */

export const OFFICES = [
  {
    id: 'kampala',
    kind: 'Regional office',
    name: 'Kampala, Uganda',
    body: 'Plot 72, Kanjokya Street, Kamwokya. Projects in Buliisa, Hoima, Jinja, Namanve and Luwero.',
    licence: 'Uganda Atomic Energy Council',
    tier: 'office',
  },
  {
    id: 'dar',
    kind: 'Office',
    name: 'Dar es Salaam, Tanzania',
    body: 'Serving onshore and offshore installations across Tanzania.',
    licence: 'Tanzania Atomic Energy Commission',
    tier: 'office',
  },
  {
    id: 'mozambique',
    kind: 'Office',
    name: 'Mozambique',
    body: 'Supporting energy and industrial clients in southern East Africa.',
    tier: 'office',
  },
  {
    id: 'mombasa',
    kind: 'Projects completed',
    name: 'Mombasa, Kenya',
    body: 'Marine, fabrication and mooring-boat inspection for SECO and Hull Marine.',
    tier: 'served',
  },
];

export const BY_COUNTRY = [
  { code: 'UG', n: 19, label: 'Uganda' },
  { code: 'TZ', n: 4, label: 'Tanzania' },
  { code: 'KE', n: 4, label: 'Kenya' },
  { code: 'UG-TZ', n: 1, label: 'Cross-border (EACOP)' },
];

export const GROUP_PRESENCE = [
  'India', 'Uganda', 'Tanzania', 'Mozambique', 'Nigeria', 'Netherlands', 'UAE', 'Oman', 'Saudi Arabia',
];

/* --- Services (brochure p.5) -------------------------------------------- */

/* `to` is where each line leads: a capability section on this page, or a
   method page where one exists. */
export const SERVICE_LIST = [
  { num: '01', title: 'Radiography Testing — X-ray & isotope', to: '#radiography' },
  { num: '02', title: 'Digital & Computed Radiography', to: '/services/radiography' },
  { num: '03', title: 'Ultrasonic Testing (UT)', to: '#ultrasonic' },
  { num: '04', title: 'Advanced Ultrasonics — PAUT / TOFD / AUT', to: '/services/paut' },
  { num: '05', title: 'Magnetic Particle & Liquid Penetrant', to: '#surface' },
  { num: '06', title: 'Eddy Current & Pulsed Eddy Current', to: '/services/pect' },
  { num: '07', title: 'Pipeline Inspection', to: '#radiography' },
  { num: '08', title: 'Pigging & Intelligent Pigging', to: '#pigging' },
  { num: '09', title: 'Tank, Vessel & Tube Inspection', to: '#tank' },
  { num: '10', title: 'Underwater & Marine NDT', to: '#more' },
  { num: '11', title: 'Destructive Testing & Laboratory', to: '#surface' },
  { num: '12', title: 'Radiation Safety & NDT Training', to: '/about#training' },
  { num: '13', title: 'Robotic & Remote Inspection', to: '#more' },
  { num: '14', title: 'Heat Treatment & Stress Relieving', to: '#more' },
  { num: '15', title: 'Visual Inspection & Helium Leak Testing', to: '#surface' },
  { num: '16', title: 'NDT Equipment Supply & Maintenance', to: '#equipment' },
];

/* The six capability spreads, brochure pp.6-11. */
export const CAPABILITIES = [
  {
    id: 'radiography',
    short: 'Radiography',
    eyebrow: 'Radiation NDT',
    title: 'Radiography & Pipeline Inspection',
    lead: 'Radiography that keeps pace with the construction front.',
    body: 'Using X-ray generators and gamma sources — Iridium-192, Selenium-75 and Cobalt-60 — our licensed crews inspect welds on pipelines, tanks and live plant, with results in film or digital format. On the Tilenga Project we deploy 8″ and 10″ X-ray crawlers for Sinopec, and provide tank radiography with film digitization for CPECC.',
    cards: [
      {
        kicker: 'Cross-country pipelines',
        title: 'X-Ray Crawler Radiography',
        body: 'Internal crawlers deliver high radiographic quality and imaging sensitivity with a low failure rate and high productivity on long pipeline spreads.',
        image: '/images/services/rt-crawler.webp',
        alt: 'Technician positioning an internal X-ray crawler inside a large-bore pipe',
      },
      {
        kicker: 'Minimal disruption',
        title: 'Close Proximity Radiography',
        body: 'Se-75 based systems restrict the radiation area, removing the need to evacuate the work area so production targets and daily schedules keep moving.',
        image: '/images/services/rt-close-proximity.webp',
        alt: 'Technician running close-proximity radiography on a pipeline girth weld',
      },
      {
        kicker: 'Conventional & digital',
        title: 'Conventional, Digital & Computed RT',
        body: 'Mobile RT units, computed radiography and high-resolution film digitization give clients precise, easily archived records — to ASME Sec V and ISO 17636.',
        image: '/images/services/rt-conventional-digital.webp',
        alt: 'Two technicians setting up an external X-ray tube on a pipe weld',
      },
    ],
    more: { label: 'Digital & computed radiography in detail', to: '/services/radiography' },
  },
  {
    id: 'pigging',
    short: 'Pigging',
    eyebrow: 'Pipeline integrity',
    title: 'Pigging & Intelligent Pigging',
    lead: 'Keeping pipelines clean, clear and fit for service.',
    body: 'IXAR Africa pigs pipelines from pre-commissioning through to in-service integrity. Our crews and group specialists bring launchers, receivers and pig trains to site, backed by the same UT and MFL know-how we use on tanks and exchanger tubes, so every run ends in a clear picture of the pipe wall.',
    cards: [
      {
        kicker: 'Launching & pre-commissioning',
        title: 'Cleaning, Gauging & Dewatering',
        body: 'Pigs are loaded, launched and received at the traps. Cleaning and gauging runs remove construction debris and confirm bore, and dewatering and drying follow the hydrotest.',
        image: '/images/services/pig-cleaning.webp',
        alt: 'Cleaning pig with steel brushes seated in a pipe flange',
      },
      {
        kicker: 'In-line inspection (ILI)',
        title: 'Intelligent Pigging',
        body: 'Smart pigs with MFL and UT technology map metal loss, corrosion, dents and ovality along the whole length of the line. We deliver the data as a report, with each feature located.',
        image: '/images/services/pig-intelligent.webp',
        alt: 'Intelligent in-line inspection pig with MFL sensor rings',
      },
      {
        kicker: 'Data & integrity',
        title: 'ILI Data & Field Verification',
        body: 'Features are reported on C-scan maps with depth, length and location. We then verify priority anomalies at the dig site with UT, PAUT and radiography, feeding a repair plan to ASME and API.',
        image: '/images/services/pig-ili-data.webp',
        alt: 'C-scan map of in-line inspection data showing a located wall-loss feature',
      },
    ],
    chips: ['Cleaning pigs', 'Gauging & calliper', 'Dewatering & drying', 'MFL & UT in-line inspection', 'Wall condition mapping', 'Dig-site verification'],
  },
  {
    id: 'tank',
    short: 'Tanks',
    eyebrow: 'Storage assets',
    title: 'Tank Inspection',
    lead: 'Every plate of the tank, floor to roof.',
    body: 'Our tank integrity work covers floor plate scanning for under-side corrosion, shell and roof thickness surveys, and weld inspection on repairs and alterations. We use the Silverwing 3D Floor Map, which combines MFL and STARS technology, and report the numbers in a form that goes straight into your integrity assessment — planned to fit your shutdown window.',
    cards: [
      {
        kicker: 'Out-of-service inspection',
        title: 'Floor Scanning — MFL & STARS',
        body: 'MFL saturates the floor plate and Hall-effect sensors pick up the flux leaking from corrosion. STARS then tells top-side from bottom-side loss, and UT confirms the remaining wall.',
        image: '/images/services/tank-floor-mfl.webp',
        alt: 'Technician pushing an MFL floor scanner across a tank floor',
      },
      {
        kicker: 'Reporting',
        title: '3D Floor Map & Corrosion Report',
        body: 'Top-side, bottom-side and complete plate views show where the floor is thinning and where leak paths are forming, ready for repair planning and fitness-for-service review.',
        image: '/images/services/tank-floor-map.webp',
        alt: 'Colour-coded corrosion map of a tank floor, plate by plate',
      },
      {
        kicker: 'Shell, roof & welds',
        title: 'Shell, Roof & Weld Inspection',
        body: 'UT thickness surveys on shell courses and roof, plus TOFD, PAUT, RT, MPI and DP on shell welds, repairs and shell-to-bottom joints, as delivered for CPECC at Tilenga.',
        image: '/images/services/tank-shell-weld.webp',
        alt: 'Encoded ultrasonic scanner on a tank shell weld',
      },
    ],
    chips: ['Tank floor MFL', 'STARS top/bottom discrimination', 'Corrosion mapping', 'Shell & roof UT', 'Weld RT / MPI / DP', 'Film digitization'],
    more: { label: 'Tank & tube inspection in detail', to: '/services/mfl-tube' },
  },
  {
    id: 'vessels',
    short: 'Vessels',
    eyebrow: 'Static equipment',
    title: 'Pressure Vessel Inspection',
    lead: 'Vessels, spheres and exchangers kept safe and in service.',
    body: 'Pressure vessels, LPG spheres, columns, boilers and heat exchangers get a mix of volumetric, surface and tube inspection. We cover new fabrication QC and in-service turnarounds alike, with Level II and III technicians reporting to ASME, API or the client’s standard.',
    cards: [
      {
        kicker: 'Internal & weld inspection',
        title: 'Internal Inspection, PAUT & TOFD',
        body: 'Confined-space internal inspection of vessels and columns, with encoded PAUT and TOFD on long seams, circumferential seams and nozzle welds, plus RT where the code calls for it.',
        image: '/images/services/pv-internal.webp',
        alt: 'Encoded scanner inside a pressure vessel',
      },
      {
        kicker: 'Spheres & columns',
        title: 'Surface Crack Detection & Hardness',
        body: 'Wet fluorescent MPI, DP, hardness testing and visual inspection find stress-corrosion and fatigue cracking at nozzles, attachments and support legs.',
        image: '/images/services/pv-sphere.webp',
        alt: 'LPG storage sphere with access stair',
      },
      {
        kicker: 'Heat exchangers & boilers',
        title: 'Tube Inspection — MFL & ECT',
        body: 'MFL and eddy current probes inspect every tube for wall loss, pitting, grooving and circumferential cracks. Results come back as a tube-sheet map to guide plugging and retubing.',
        image: '/images/services/pv-exchanger-tubes.webp',
        alt: 'Technician inspecting heat exchanger tubes at the tube sheet',
      },
    ],
    chips: ['ASME Sec V & VIII', 'PAUT / TOFD', 'Corrosion mapping', 'Wet fluorescent MPI', 'MFL & ECT tubes', 'Hardness & PMI support'],
    more: { label: 'Time-of-flight diffraction in detail', to: '/services/tofd' },
  },
  {
    id: 'ultrasonic',
    short: 'Ultrasonics',
    eyebrow: 'Sound-based NDT',
    title: 'Ultrasonic & Advanced Ultrasonic Testing',
    lead: 'From manual thickness checks to fully encoded weld data.',
    body: 'High-frequency, directional sound waves let our Level II and Level III technicians measure thickness, find hidden internal flaws and characterise metals, composites and more. Since September 2026 we have been running UT thickness monitoring for EACOP, and for CCJV on the Kingfisher Oil Field we delivered PAUT with purpose-made calibration and validation blocks.',
    cards: [
      {
        kicker: 'Pipeline girth welds',
        title: 'Automated Ultrasonic Testing (AUT)',
        body: 'The industry-standard method for girth-weld inspection, with computerised data management, faster cycle times, accurate detection and no radiation hazard.',
        image: '/images/services/ut-aut.webp',
        alt: 'Automated ultrasonic scanner band clamped around a pipeline girth weld',
        to: '/services/aut',
      },
      {
        kicker: 'Flaw detection & sizing',
        title: 'PAUT & TOFD',
        body: 'Electronically steered, focused phased-array beams for weld testing and plant monitoring, paired with TOFD for highly accurate defect height, length and position.',
        image: '/images/services/ut-paut-tofd.webp',
        alt: 'Two technicians reading a phased array instrument on a pipe',
        to: '/services/paut',
      },
      {
        kicker: 'Quick & cost-effective',
        title: 'Manual Ultrasonic Testing',
        body: 'Flaw detection, dimensional measurement and material characterisation with proven flaw detectors — fast, non-intrusive and reliable on site.',
        image: '/images/services/ut-manual.webp',
        alt: 'Technician taking a manual ultrasonic reading on a pipe',
      },
    ],
  },
  {
    id: 'surface',
    short: 'Surface & Lab',
    eyebrow: 'Surface NDT & laboratory',
    title: 'Surface Methods & Destructive Testing',
    lead: 'The complete picture — on site and in the lab.',
    body: 'Surface methods catch the defects that volumetric methods can miss, while our group laboratory supports procedure and welder qualification with mechanical, corrosion, coating and chemical testing to ASTM, BS, IS, DIN, NACE or client standards.',
    cards: [
      {
        kicker: 'Surface & near-surface',
        title: 'Magnetic Particle Testing',
        body: 'Fast, easy to apply and less sensitive to surface preparation — on site or in-house. Liquid penetrant (visible and fluorescent) covers non-magnetic and non-porous materials.',
        image: '/images/services/st-mpi.webp',
        alt: 'Electromagnetic yoke on steel test plates',
      },
      {
        kicker: 'Qualification support',
        title: 'Destructive Testing & Lab',
        body: 'Tensile, bend, hardness and impact testing (to −60°C), intergranular corrosion, coating tests, chemical analysis and failure analysis — as delivered for Essar’s procedure qualification.',
        image: '/images/services/st-lab-utm.webp',
        alt: 'Universal testing machine in the group laboratory',
      },
      {
        kicker: 'Plant integrity',
        title: 'Visual, Leak & Specialist Testing',
        body: 'Visual inspection, helium leak testing, wire rope testing, eddy current, MFL tube and tank-floor inspection, plus stress relieving — the full plant-integrity toolkit.',
        image: '/images/services/st-penetrant-leak.webp',
        alt: 'Penetrant developer being sprayed onto a welded test piece',
      },
    ],
  },
];

/* Services on the list with no spread of their own in the brochure. Each
   line is drawn from what the brochure says about it elsewhere. */
export const MORE_SERVICES = [
  {
    num: '06',
    title: 'Eddy Current & Pulsed Eddy Current',
    body: 'Eddy current for surface and tube inspection, and pulsed eddy current to screen for corrosion under insulation without stripping the cladding.',
    to: '/services/pect',
  },
  {
    num: '10',
    title: 'Underwater & Marine NDT',
    body: 'Jetties, cranes, hulls, mooring structures and submerged assets — including the marine and mooring-boat inspection delivered in Mombasa.',
  },
  {
    num: '13',
    title: 'Robotic & Remote Inspection',
    body: 'ROV-based underwater survey and inspection through IXAR Robotic Solutions, the group’s robotics venture incubated at SINE, IIT Bombay.',
  },
  {
    num: '14',
    title: 'Heat Treatment & Stress Relieving',
    body: 'Heat treatment and stress relieving alongside the inspection scope, so fabrication and repair work closes out with one contractor.',
  },
];

/* What used to be the Equipment & Supply page. No prices and no stock
   claims: every line goes to a quotation. */
export const EQUIPMENT = [
  { title: 'Industrial radiography', items: 'Gamma projectors, Ir-192 / Se-75 / Co-60 sources, drive cables, guide tubes and collimators' },
  { title: 'Ultrasonic testing', items: 'Thickness gauges, digital flaw detectors, phased array instruments, probes and wedges' },
  { title: 'Magnetic particle & penetrant', items: 'Powders, inks, contrast paints, penetrant kits and electromagnetic yokes' },
  { title: 'Radiation safety', items: 'Survey meters, personal dosimeters, dose-rate alarms, barriers and signage' },
  { title: 'Calibration standards', items: 'ASME / API / IIW, V1, V2, step and DAC blocks, with material traceability' },
  { title: 'Maintenance & calibration', items: 'Servicing and calibration of NDT equipment, so a crew’s instruments stay in date' },
];

/* --- Industries (brochure p.12) ----------------------------------------- */

export const INDUSTRIES = [
  { num: '01', title: 'Oil & Gas', body: 'Pipelines, storage tanks, refineries and process plant — upstream, midstream and downstream.' },
  { num: '02', title: 'Power & Geothermal', body: 'Boilers, turbines, heat exchangers and steam pipework in thermal, hydro, geothermal and renewable plant.' },
  { num: '03', title: 'Mining', body: 'Structural steelwork, processing plant, pressure vessels and material-handling equipment.' },
  { num: '04', title: 'Cement', body: 'Kilns, ducting and structural supports maintained within tight shutdown windows.' },
  { num: '05', title: 'Breweries, Beverage & Food', body: 'Tanks, vessels, process pipework and hygienic welded systems.' },
  { num: '06', title: 'Sugar & Distilleries', body: 'Boilers, evaporators, mill structures and steam lines inspected in off-crop maintenance.' },
  { num: '07', title: 'Marine & Ports', body: 'Jetties, cranes, hulls, mooring structures and submerged assets.' },
  { num: '08', title: 'Manufacturing & Engineering', body: 'Fabrication QC, weld inspection, structural steel and pressure equipment certification.' },
];

/* --- Track record (brochure p.14, Experience Record p.1) ---------------- */

export const RECORD_STATS = [
  { figure: 28, label: 'Projects on record across Uganda, Tanzania & Kenya' },
  { static: 'USD 2.0M+', label: 'Combined contract value, completed and ongoing' },
  { figure: 6, label: 'Active contracts and extensions in 2025–2027' },
  { figure: 3, label: 'Flagship energy projects: EACOP, Tilenga & Kingfisher' },
];

export const FLAGSHIP = [
  {
    client: 'Sinopec',
    status: 'Ongoing',
    meta: 'USD 1.54M · 2025–2027',
    title: 'Conventional NDT — Tilenga Project',
    body: 'Buliisa, Uganda. Plus 8″ & 10″ crawler and external X-ray at the Tilenga site (2024–2025, extended 2025).',
  },
  {
    client: 'EACOP',
    status: 'Ongoing',
    meta: 'USD 72K · from Sep 2026',
    title: 'UT Thickness Monitoring',
    body: 'East African Crude Oil Pipeline, Uganda – Tanzania.',
  },
  {
    client: 'CPECC',
    status: 'Ongoing',
    meta: 'USD 110K · 2024–2026',
    title: 'Tank NDT & Film Digitization',
    body: 'RT, MPI and DP on storage tanks with film digitization. Tilenga Oil Field, Hoima, Uganda.',
  },
  {
    client: 'CCJV',
    status: 'Ongoing',
    meta: 'USD 122K · 2024–2026',
    title: 'Phased Array UT — Kingfisher',
    body: 'Kingfisher Oil Field, Hoima, Uganda. PAUT, extension and calibration & validation blocks.',
  },
];

/* From the field: scopes evidenced by IXAR Africa's own site photography.
   Carried over from the old Track Record page. */
export const FIELD = [
  {
    scope: 'Central processing facility',
    project: 'Tilenga Project',
    country: 'Uganda',
    body: 'Process pipework and large-bore insulated lines at the central processing facility, worked across day and night shifts.',
    methods: ['RT', 'UT', 'Visual'],
    image: '/images/east-africa/ea-ind-oil-gas.webp',
    alt: 'IXAR Africa night-shift crew at the Tilenga central processing facility, Uganda',
  },
  {
    scope: 'Well pad works',
    project: 'Tilenga Project',
    country: 'Uganda',
    body: 'Spool and girth weld inspection at well pad locations, from a site compound established for the scope.',
    methods: ['RT', 'UT'],
    image: '/images/east-africa/ea-svc-ultrasonic.webp',
    alt: 'IXAR technicians inspecting a pipe spool at a Tilenga well pad, Uganda',
  },
  {
    scope: 'Construction support base',
    project: 'Tilenga Project',
    country: 'Uganda',
    body: 'Radiography and ultrasonic inspection of pipe spools and fittings ahead of installation.',
    methods: ['RT', 'Pipeline'],
    image: '/images/east-africa/ea-svc-pipeline.webp',
    alt: 'Pipe spools and radiography equipment at the IXAR construction support base, Uganda',
  },
  {
    scope: 'Process plant',
    project: 'PRAJ Projects',
    country: 'Tanzania',
    body: 'Radiographic inspection of process pipework and valve assemblies on operating plant, using gamma sources with guide tube deployment.',
    methods: ['RT'],
    image: '/images/east-africa/ea-svc-radiography.webp',
    alt: 'IXAR technician working on process pipework with a radiography guide tube, Tanzania',
  },
];

/* Brochure p.14, "Trusted by". The marks we hold are shown as marks; the
   rest are set as type rather than borrowed from the web. */
export const CLIENT_LIST = [
  { name: 'EACOP' },
  { name: 'Sinopec', logo: '/images/clients/trimmed/sinopec.png' },
  { name: 'CPECC', logo: '/images/clients/trimmed/cpecc.png' },
  { name: 'CCJV', logo: '/images/clients/trimmed/ccjv.png' },
  { name: 'PRAJ Projects', logo: '/images/clients/trimmed/praj.png' },
  { name: 'Illovo Distillers', logo: '/images/clients/trimmed/illovo.png' },
  { name: 'TotalEnergies', logo: '/images/clients/trimmed/total.png' },
  { name: 'Essar Infrastructure' },
  { name: 'Kakira Sugar' },
  { name: 'Nile Breweries' },
  { name: 'Afrishell – Jeveeka' },
  { name: 'Southern Engineering Co. (SECO)' },
  { name: 'Inspecta Africa' },
  { name: 'Hull Marine' },
  { name: 'Ntake Bakery', logo: '/images/clients/trimmed/ntake.png' },
  { name: 'Weldcon Uganda' },
  { name: 'AG PRO Industries' },
  { name: 'Uni Engineering' },
];

