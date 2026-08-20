import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveSeo, SITE_NAME } from '../seo';

/**
 * Keeps <head> in sync with the current route.
 *
 * The *initial* head of every page is written statically by
 * scripts/prerender.mjs, so crawlers and social scrapers get the right tags
 * without executing any JavaScript. This component only exists to correct the
 * head after a client-side route change, which prerendering cannot cover.
 *
 * Renders nothing, and does nothing during server rendering.
 */
export default function RouteHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);

    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'title', seo.title);
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);

    if (seo.noindex) {
      // Nothing to canonicalise to on an unknown URL.
      setMeta('name', 'robots', 'noindex, follow');
      removeCanonical();
      removeMeta('property', 'og:url');
    } else {
      removeMeta('name', 'robots');
      setCanonical(seo.canonical);
      setMeta('property', 'og:url', seo.canonical);
    }
  }, [pathname]);

  return null;
}

function setMeta(keyAttr, keyValue, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(keyAttr, keyValue) {
  const el = document.head.querySelector(`meta[${keyAttr}="${keyValue}"]`);
  if (el) el.remove();
}

function removeCanonical() {
  const el = document.head.querySelector('link[rel="canonical"]');
  if (el) el.remove();
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
