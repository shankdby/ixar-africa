/* IXAR (EA) Ltd experience record.
 *
 * Transcribed from the company's own Experience Record sheet (Industrial X-Ray
 * and Allied Radiographers (EA) Ltd, Plot 72 Kanjokya Street, Kampala).
 *
 * WORK ORDER VALUE IS DELIBERATELY OMITTED. The source sheet carries a value
 * column; it is a bid document, not a public page, and contract values are not
 * published here. Do not add the column back.
 *
 * CLIENT NAMES. The sheet names its clients, and the client supplied it for
 * publication. Note that using a client name in a tender submission is not the
 * same as publishing it on a public website: confirm publication permission per
 * client before this goes live.
 *
 * Rows 4 and 9 are two separate work orders for the same client and scope in
 * the same year. They are distinct contracts on the source sheet and are kept
 * distinct here rather than silently merged.
 *
 * `client` and `country` are derived for filtering only; the four displayed
 * columns match the source sheet exactly, minus the value.
 */

export const EXPERIENCE_RECORD = [
  { no: 1,  project: 'Sinopec Conventional NDT',
    client: 'Sinopec', period: '2025–2027', status: 'Ongoing',
    location: 'Tilenga Project, Buliisa, Uganda', country: 'Uganda' },

  { no: 2,  project: 'CPECC: NDT for tank (RT, MPI and DP)',
    client: 'CPECC', period: '2024–2026', status: 'Ongoing',
    location: 'Tilenga Oil Field, Hoima, Uganda', country: 'Uganda' },

  { no: 3,  project: 'CCJV: Phased Array Ultrasonic Testing',
    client: 'CCJV', period: '2024–2025', status: 'Completed',
    location: 'Kingfisher Oil Field, Hoima, Uganda', country: 'Uganda' },

  { no: 4,  project: 'Afrishell-Jeveeka Tanzania: Radiography Testing',
    client: 'Afrishell-Jeveeka', period: '2024', status: 'Completed',
    location: 'Dar es Salaam, Tanzania', country: 'Tanzania' },

  { no: 5,  project: 'PRAJ Projects Tanzania Limited',
    client: 'PRAJ Projects', period: '2026', status: 'Ongoing',
    location: 'Illovo Distillers (Tanzania) Limited, Tanzania', country: 'Tanzania' },

  { no: 6,  project: 'Sinopec: 8" and 10" crawler and external X-ray at Tilenga site',
    client: 'Sinopec', period: '2024–2025', status: 'Completed',
    location: 'Tilenga Oil Field, Hoima, Uganda', country: 'Uganda' },

  { no: 7,  project: 'CCJV: Phased Array Ultrasonic Testing (extension)',
    client: 'CCJV', period: '2026', status: 'Ongoing',
    location: 'Kingfisher Oil Field, Hoima, Uganda', country: 'Uganda' },

  { no: 8,  project: 'Sinopec: 8" and 10" crawler and external X-ray at Tilenga site',
    client: 'Sinopec', period: '2025', status: 'Extension',
    location: 'Tilenga Oil Field, Hoima, Uganda', country: 'Uganda' },

  { no: 9,  project: 'Afrishell-Jeveeka Tanzania: Radiography Testing',
    client: 'Afrishell-Jeveeka', period: '2024', status: 'Completed',
    location: 'Dar es Salaam, Tanzania', country: 'Tanzania' },

  { no: 10, project: 'Larsen & Toubro Limited: NDT works to fabrication',
    client: 'Larsen & Toubro', period: '2020', status: 'Completed',
    location: 'India', country: 'India' },

  { no: 11, project: 'CCJV: Calibration and validation blocks for PAUT',
    client: 'CCJV', period: '2024', status: 'Completed',
    location: 'Kingfisher Oil Field, Hoima, Uganda', country: 'Uganda' },

  { no: 12, project: 'Ntake Bakery-Jeveeka Uganda: Radiography Testing',
    client: 'Ntake Bakery-Jeveeka', period: '2024', status: 'Completed',
    location: 'Uganda', country: 'Uganda' },
];

export const RECORD_COUNTRIES = [...new Set(EXPERIENCE_RECORD.map((r) => r.country))].sort();
export const RECORD_STATUSES = [...new Set(EXPERIENCE_RECORD.map((r) => r.status))];
