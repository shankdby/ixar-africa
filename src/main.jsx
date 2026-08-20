import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pages built by `npm run build` ship with real server-rendered markup inside
// #root, so we attach to it rather than throwing it away and re-rendering.
// `npm run dev` serves an empty #root, which falls through to createRoot.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
