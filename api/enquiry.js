/* POST /api/enquiry  ->  email to Business Development
   ==================================================================
   Before this existed the enquiry form on /africa validated its fields
   and then showed the thank-you panel without sending anything. The
   copy under the button promised the enquiry routed to bd@ixar.africa;
   nothing left the browser. Every enquiry submitted through the site
   was lost. This endpoint is what makes that promise true.

   Delivery goes through Resend's REST API over plain fetch, so there
   is no npm dependency to keep patched in the serverless bundle.

   Vercel environment variables (Project -> Settings -> Environment
   Variables, set for Production and Preview):

     RESEND_API_KEY   required. re_... from resend.com/api-keys
     ENQUIRY_TO       optional. default bd@ixar.africa
     ENQUIRY_FROM     optional. default "IXAR Africa Website
                      <website@ixar.africa>". The domain here must be
                      verified in Resend (DNS records on ixar.africa),
                      otherwise Resend refuses the send. Until the
                      domain is verified, onboarding@resend.dev works
                      for testing but only delivers to the account
                      owner's own address.

   Without RESEND_API_KEY the endpoint returns 503 and the browser
   falls back to opening a pre-filled mail client, so an enquiry is
   never silently swallowed even when the key is missing.            */

const TO_DEFAULT = 'bd@ixar.africa';
const FROM_DEFAULT = 'IXAR Africa Website <website@ixar.africa>';

const FIELDS = ['name', 'company', 'country', 'email', 'phone', 'service', 'message'];
const REQUIRED = ['name', 'company', 'country', 'email', 'phone', 'message'];

/* Length caps. A form post is unauthenticated input from the open
   internet; without caps a single request can push a megabyte of text
   into the mailbox. */
const MAX = { name: 200, company: 200, country: 100, email: 254, phone: 60, service: 200, message: 5000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value, cap) {
  return String(value == null ? '' : value).replace(/\s+/g, ' ').trim().slice(0, cap);
}

/* Header injection guard: a newline in a value that reaches a header
   (reply_to, subject) can append headers of the attacker's choosing. */
function headerSafe(value) {
  return String(value || '').replace(/[\r\n]+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function readBody(req) {
  /* Vercel parses JSON bodies for us, but a form posted with
     application/x-www-form-urlencoded, or a raw string body from a
     runtime that did not parse, both still need handling. */
  const b = req.body;
  if (!b) return {};
  if (typeof b === 'object') return b;
  if (typeof b === 'string') {
    try {
      return JSON.parse(b);
    } catch {
      return Object.fromEntries(new URLSearchParams(b));
    }
  }
  return {};
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = readBody(req);

  /* Honeypot. A field hidden from people but filled in by most naive
     form bots; a 200 keeps the bot from learning it was rejected. */
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const data = {};
  for (const f of FIELDS) data[f] = clean(body[f], MAX[f]);

  const missing = REQUIRED.filter((f) => !data[f]);
  if (missing.length) {
    return res.status(400).json({ ok: false, error: 'Missing required fields', fields: missing });
  }
  if (!EMAIL_RE.test(data.email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address', fields: ['email'] });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    /* Deliberately explicit. The browser uses this to open a mail
       client rather than tell the user their enquiry was sent. */
    return res.status(503).json({ ok: false, error: 'Email delivery is not configured' });
  }

  const to = headerSafe(process.env.ENQUIRY_TO || TO_DEFAULT);
  const from = headerSafe(process.env.ENQUIRY_FROM || FROM_DEFAULT);
  const subject = headerSafe(
    `Website enquiry - ${data.name}, ${data.company} (${data.country})`
  );

  const rows = [
    ['Name', data.name],
    ['Company', data.company],
    ['Country', data.country],
    ['Email', data.email],
    ['Phone / WhatsApp', data.phone],
    ['Service of interest', data.service || '-'],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    data.message,
    '',
    `Submitted via ixar.africa at ${new Date().toISOString()}`,
  ].join('\n');

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#15191F">
  <h2 style="margin:0 0 4px;font-size:18px">New enquiry from ixar.africa</h2>
  <p style="margin:0 0 18px;color:#6B6B6B;font-size:13px">${escapeHtml(new Date().toUTCString())}</p>
  <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px">
    ${rows
      .map(
        ([k, v]) =>
          `<tr><td style="border:1px solid #E6E9EC;background:#F5F6F8;font-weight:700">${escapeHtml(
            k
          )}</td><td style="border:1px solid #E6E9EC">${escapeHtml(v)}</td></tr>`
      )
      .join('')}
  </table>
  <h3 style="margin:20px 0 6px;font-size:15px">Message</h3>
  <p style="white-space:pre-wrap;margin:0;line-height:1.6">${escapeHtml(data.message)}</p>
</div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        /* Replying to the notification replies to the enquirer, which
           is the whole point of a business-development inbox. */
        reply_to: headerSafe(data.email),
        subject,
        text,
        html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('Resend rejected the enquiry:', r.status, detail);
      return res.status(502).json({ ok: false, error: 'Email provider rejected the message' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Enquiry send failed:', err);
    return res.status(502).json({ ok: false, error: 'Could not reach the email provider' });
  }
}
