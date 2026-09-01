import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import EastAfricaPage from './pages/EastAfricaPage';

import './index.css';

/**
 * Entry point for the single-file review build.
 *
 * Differences from the real site entry (main.jsx):
 *   · HashRouter, not BrowserRouter — a file:// page has no server to resolve
 *     clean paths against, so BrowserRouter would break on any navigation.
 *   · Renders only the Africa page. The other routes are not reachable
 *     here; this file exists to be emailed to IXAR and double-clicked.
 *
 * Built by `npm run build:standalone`, which inlines the CSS, the JS and every
 * photograph as a data URI so the result is one portable .html file.
 */
function StandaloneApp() {
  const [contactOpen, setContactOpen] = useState(false);
  const [modalDefaultScope, setModalDefaultScope] = useState('');

  const handleOpenContact = (scope = '') => {
    setModalDefaultScope(scope);
    setContactOpen(true);
  };

  return (
    <HashRouter>
      <div className="app-main-wrapper">
        <Navbar onOpenContact={handleOpenContact} />
        <EastAfricaPage />
        <Footer onOpenContact={handleOpenContact} />
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          defaultScope={modalDefaultScope}
        />
      </div>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StandaloneApp />
  </React.StrictMode>
);
