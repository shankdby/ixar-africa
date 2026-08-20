import React from 'react';
import MANIFEST from '../imageManifest.json';

/* A thin wrapper over <img> that fills in the things it is easy to forget.
 *
 *  - width/height come from the real file via src/imageManifest.json, so the
 *    browser reserves the correct box before the image downloads. Without them
 *    every image is a layout shift, which Core Web Vitals scores directly.
 *  - loading="lazy" by default. Pass `priority` for anything above the fold:
 *    lazy-loading the hero delays the Largest Contentful Paint instead of
 *    helping it.
 *  - decoding="async" so image decode never blocks the main thread.
 *
 * Props pass straight through, so this is a drop-in for <img>. An unknown src
 * (an external URL, say) simply renders without the dimension hints.
 */
/* For the places that cannot use <AppImage> directly — a motion.img, say —
   spread this onto the element to get the same dimension hints:
     <motion.img src={src} {...dimsFor(src)} /> */
export function dimsFor(src) {
  const known = typeof src === 'string' ? MANIFEST[src] : undefined;
  return known ? { width: known[0], height: known[1], decoding: 'async' } : { decoding: 'async' };
}

export default function AppImage({ src, alt = '', priority = false, width, height, ...rest }) {
  const known = typeof src === 'string' ? MANIFEST[src] : undefined;
  const w = width ?? known?.[0];
  const h = height ?? known?.[1];

  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      // fetchPriority is respected by Chromium; harmless elsewhere.
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      {...rest}
    />
  );
}
