/* Where IXAR Africa has worked, in one place.
 * ==================================================================
 * This existed as an eight-country list written out separately in the
 * hero ticker, the map, the "Where We Operate" copy, the footer, the
 * structured data and five SEO descriptions. They drifted, and the
 * claim was wrong in all of them: completed projects exist in Uganda,
 * Tanzania and Kenya only (Rahil Malde, review of 8 September 2026).
 *
 * Everything that names a country now derives from here, so the next
 * correction is one edit rather than nine.
 *
 * DELIVERED is a claim about work actually done and is the only list
 * that may be described as "projects completed". Everywhere else the
 * wording is "mobilisation on request", which is a statement about
 * capability and commits IXAR to nothing it has not done.
 */

export const DELIVERED = ['Uganda', 'Tanzania', 'Kenya'];

/* Reachable from the regional offices, but no completed project yet.
   These are deliberately NOT listed as countries served: they appear
   only behind "mobilisation on request". */
export const ON_REQUEST = [
  'Rwanda', 'Burundi', 'South Sudan', 'Ethiopia', 'Mozambique', 'Zambia', 'Malawi',
];

/** "Uganda, Tanzania and Kenya" */
export function deliveredProse(list = DELIVERED) {
  if (list.length < 2) return list[0] || '';
  return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
}

/** The count used by the "Africa in Numbers" strip and the map legend. */
export const DELIVERED_COUNT = DELIVERED.length;

/* The sentence appended to descriptions that used to enumerate eight
   countries. Kept here so the phrasing is identical everywhere. */
export const REACH_SENTENCE =
  `Delivered across ${deliveredProse()}, with mobilisation on request elsewhere in Africa.`;
