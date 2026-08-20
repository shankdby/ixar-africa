import React from 'react';
import { renderToString } from 'react-dom/server';
// react-router v7 merged the packages: StaticRouter now comes from
// 'react-router' itself, not the v6-era 'react-router-dom/server'.
import { StaticRouter } from 'react-router';
import AppShell from './AppShell';

/**
 * Build-time renderer. Called once per route by scripts/prerender.mjs.
 *
 * No StrictMode here: it double-invokes render in development builds and buys
 * nothing in a one-shot server render.
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
