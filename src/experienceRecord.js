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
 *
 * The rows themselves live in src/content/projects.json so the team can edit
 * them in the CMS at /admin. This module keeps the documentation above with
 * the data, and derives the filter lists.
 */
import projectsContent from './content/projects.json';

export const EXPERIENCE_RECORD = projectsContent.projects;

export const RECORD_COUNTRIES = [...new Set(EXPERIENCE_RECORD.map((r) => r.country))].sort();
export const RECORD_STATUSES = [...new Set(EXPERIENCE_RECORD.map((r) => r.status))];
