/* WhatsApp deep links that actually land in the chat.
   ==================================================================
   The plain wa.me link shows an interstitial with two buttons. On a
   desktop, "Open app" hands WhatsApp Desktop a bare launch with no
   chat and no text - the number and the message are dropped, which is
   the behaviour reported against the site. wa.me only carries them
   through reliably on a phone, where the OS resolves the link into the
   installed app.

   So the target is chosen per device:
     phone/tablet  -> wa.me, which opens the app on the right chat
     desktop       -> web.whatsapp.com/send, which opens the chat with
                      the message typed into the compose box and waits
                      for the user to press send

   WA_DESKTOP_NATIVE below switches the desktop target to the native
   whatsapp:// protocol instead. It drives WhatsApp Desktop directly
   (same result, no browser tab) but does nothing at all when the app
   is not installed, so web.whatsapp.com is the safer default.       */

export const WA_NUMBER = '256414251251';

export const WA_DEFAULT_MESSAGE =
  'Hello IXAR, I would like to enquire about NDT services in Africa.';

const WA_DESKTOP_NATIVE = false;

/* Digits only. WhatsApp rejects '+', spaces and dashes in the phone
   parameter, and silently opens a blank chat rather than erroring. */
function digits(number) {
  return String(number || '').replace(/\D/g, '');
}

/* The link rendered into the HTML. It is what a crawler sees, what a
   right-click copies, and what runs if JavaScript never boots, so it
   stays the universal wa.me form. */
export function waHref(message = WA_DEFAULT_MESSAGE, number = WA_NUMBER) {
  return `https://wa.me/${digits(number)}?text=${encodeURIComponent(message)}`;
}

function isMobile() {
  if (typeof navigator === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

/* Resolved at click time, not at render time: prerendering runs in
   Node, where there is no navigator to test. */
export function waTarget(message = WA_DEFAULT_MESSAGE, number = WA_NUMBER) {
  const n = digits(number);
  const t = encodeURIComponent(message);
  if (isMobile()) return `https://wa.me/${n}?text=${t}`;
  if (WA_DESKTOP_NATIVE) return `whatsapp://send?phone=${n}&text=${t}`;
  return `https://web.whatsapp.com/send?phone=${n}&text=${t}`;
}

/* Spread onto any <a>: keeps the wa.me href for no-JS and for copy
   link, and upgrades the destination on click. Modified clicks
   (middle-click, ctrl/cmd-click) are left to the browser so "open in
   new tab" still behaves normally. */
export function waLinkProps(message = WA_DEFAULT_MESSAGE, number = WA_NUMBER) {
  return {
    href: waHref(message, number),
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: (e) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      window.open(waTarget(message, number), '_blank', 'noopener,noreferrer');
    },
  };
}
