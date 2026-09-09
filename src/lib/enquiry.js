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

/* What the visitor sees when a send fails is deliberately vague - a form is
   not the place to explain a server's configuration. But the cause has to be
   findable, and a mail client opening with no explanation is exactly the
   silent failure this whole path exists to avoid. So the reason goes to the
   console, where whoever is maintaining the site can read it and nobody else
   has to. The endpoint never returns secrets, only which check failed. */
function report(detail) {
  if (typeof console === 'undefined') return;
  console.error(
    `[ixar] The enquiry endpoint did not accept this submission: ${detail}\n` +
    'The form has fallen back to opening a mail client. Most often this is ' +
    'RESEND_API_KEY missing from the Vercel project, or set without a ' +
    'redeploy afterwards. See docs/enquiry-email.md.'
  );
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
    report(`HTTP ${res.status}${out.error ? ` - ${out.error}` : ''}${
      out.fields ? ` (fields: ${out.fields.join(', ')})` : ''}`);
  } catch (err) {
    report(`the request never completed - ${err && err.message ? err.message : 'network error'}`);
  }
  if (typeof window !== 'undefined') window.location.href = enquiryMailto(values);
  return { ok: false, fallback: true };
}
