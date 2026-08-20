import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppShell from './AppShell';

/**
 * Browser entry point for the app tree.
 *
 * The routes themselves live in AppShell so that the build-time prerender
 * (src/entry-server.jsx) can render the exact same tree under a StaticRouter.
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
