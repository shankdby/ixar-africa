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

export function enquiryMailto(v) {
  const body = [
    `Name: ${v.name || ''}`,
    `Company: ${v.company || ''}`,
    `Country: ${v.country || ''}`,
    `Email: ${v.email || ''}`,
    `Phone / WhatsApp: ${v.phone || ''}`,
    `Service of interest: ${v.service || '-'}`,
    '',
    'Message:',
    v.message || '',
  ].join('\n');
  const subject = `Website enquiry - ${v.name || ''}${v.company ? `, ${v.company}` : ''}`;
  return `mailto:${BD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
