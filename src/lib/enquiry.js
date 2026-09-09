/* One client-side path for every enquiry form on the site.
   ==================================================================
   There are three: the section on /africa, the site-wide modal, and
   /contact. Two of them used to show a thank-you without sending
   anything and the third opened a mail client. They now all POST the
   same shape to /api/enquiry, which emails bd@ixar.africa.

   sendEnquiry never throws. It resolves to one of:
     { ok: true }                    delivered
     { ok: false, fallback: true }   not delivered; the visitor's mail
                                     client has been opened with the
                                     enquiry already written out
   so a caller only ever shows the thank-you panel on a real send.  */

export const BD_EMAIL = 'bd@ixar.africa';
export const HR_EMAIL = 'hr@ixar.africa';

/* The fallback has to land in the same inbox the endpoint would have used.
   It was hardcoded to Business Development, so a job application that failed
   to send opened an email to the wrong department - the one case where the
   fallback silently undoes the routing it is standing in for. */
export function enquiryMailto(v) {
  const isApplication = v.department === 'hr';

  const body = (isApplication
    ? [
        `Name: ${v.name || ''}`,
        `Applying for: ${v.role || ''}`,
        `Country: ${v.country || ''}`,
        `Email: ${v.email || ''}`,
        `Phone / WhatsApp: ${v.phone || ''}`,
        `Certifications: ${v.certification || '-'}`,
        `Years of experience: ${v.experience || '-'}`,
        `CV: ${v.cv || '-'}`,
        '',
        'Covering note:',
      ]
    : [
        `Name: ${v.name || ''}`,
        `Company: ${v.company || ''}`,
        `Country: ${v.country || ''}`,
        `Email: ${v.email || ''}`,
        `Phone / WhatsApp: ${v.phone || ''}`,
        `Service of interest: ${v.service || '-'}`,
        '',
        'Message:',
      ]
  ).concat(v.message || '').join('\n');

  const subject = isApplication
    ? `Job application - ${v.name || ''}${v.role ? `, ${v.role}` : ''}`
    : `Website enquiry - ${v.name || ''}${v.company ? `, ${v.company}` : ''}`;

  return `mailto:${isApplication ? HR_EMAIL : BD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendEnquiry(values) {
  try {
    const res = await fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const out = await res.json().catch(() => ({}));
    if (res.ok && out.ok) return { ok: true };
  } catch {
    /* network down, offline, endpoint missing - fall through */
  }
  if (typeof window !== 'undefined') window.location.href = enquiryMailto(values);
  return { ok: false, fallback: true };
}
