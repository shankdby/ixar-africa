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
 * TWO PAIRS LOOK LIKE DUPLICATES. Rows 4 and 9, and rows 6 and 8, are the
 * same client, work, year and site. They are separate work orders on the
 * source sheet, not repeated rows, and are kept distinct rather than silently
 * merged. Each carries `separateOrder: true`, which the table renders as a
 * note, until IXAR supplies the detail that tells them apart - a line number,
 * an area, a work order reference - in the `scope` field.
 *
 * THE INDIA ROW IS GONE. Larsen & Toubro, 2020, was a group project delivered
 * in India, on a page about Africa. Removed 8 September 2026. The country
 * filter is derived from the rows, so India left the filter with it.
 *
 * YEAR, NOT PERIOD. The sheet mixes single years and ranges. A range made two
 * work orders on one site read as a single long engagement, so this holds one
 * year: the year of completion, or the current year for work still running.
 *
 * `country` is derived for filtering only. Country names here also drive the
 * map and the hero ticker through src/countries.js - a country added here
 * without being added there will filter but will not be shaded.
 *
 * The rows themselves live in src/content/projects.json so the team can edit
 * them in the CMS at /admin. This module keeps the documentation above with
 * the data, and derives the filter lists.
 */
import projectsContent from './content/projects.json';

export const EXPERIENCE_RECORD = projectsContent.projects;

export const RECORD_COUNTRIES = [...new Set(EXPERIENCE_RECORD.map((r) => r.country))].sort();
export const RECORD_STATUSES = [...new Set(EXPERIENCE_RECORD.map((r) => r.status))];
