import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import RouteHead from './components/RouteHead';

// Pages
import EastAfricaPage from './pages/EastAfricaPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ExperiencePage from './pages/ExperiencePage';
import EstimatorPage from './pages/EstimatorPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/* Pages folded into About Us, Services and Experience on 1 October 2026.
   vercel.json redirects these addresses at the edge; the routes below do the
   same for client-side navigation, so an old link inside the app lands on the
   right section too. */
export const FOLDED_ROUTES = [
  { from: '/network', to: '/about#offices' },
  { from: '/training', to: '/about#training' },
  { from: '/products', to: '/services#equipment' },
  { from: '/applications', to: '/experience#industries' },
  { from: '/applications/:slug', to: '/experience#industries' },
  { from: '/case-studies', to: '/experience#projects' },
];

/* Scroll handling on navigation.
   A plain route change goes to the top. A route with a #fragment - every
   section entry in the menus - goes to that section, below the fixed header
   (sections carry scroll-margin-top). It runs again on the same fragment, so
   choosing a menu entry twice still takes you there. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    const jump = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: 'start' });
      return Boolean(el);
    };
    /* Once now, and once more after images above the section have had a
       moment to take their space. */
    const raf = requestAnimationFrame(() => {
      if (!jump()) window.scrollTo(0, 0);
    });
    const later = window.setTimeout(jump, 350);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(later);
    };
  }, [pathname, hash, key]);
  return null;
}

/**
 * Everything inside the router.
 *
 * Deliberately router-agnostic: App.jsx wraps this in a BrowserRouter for the
 * browser, entry-server.jsx wraps it in a StaticRouter for the build-time
 * prerender. Keeping the router out of here is what lets both render the
 * identical tree, which is what makes hydration match.
 */
export default function AppShell() {
  const [contactOpen, setContactOpen] = useState(false);
  const [modalDefaultScope, setModalDefaultScope] = useState('');

  const handleOpenContact = (scope = '') => {
    setModalDefaultScope(scope);
    setContactOpen(true);
  };

  return (
    <>
      <RouteHead />
      <ScrollManager />
      <div className="app-main-wrapper">
        {/* Navigation Header */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Multi-Page Routes */}
        <Routes>
          {/* ixar.africa lands on the Africa page. */}
          <Route path="/" element={<EastAfricaPage />} />

          {/* The content plan agreed www.ixar.in/africa. On ixar.africa that path
              is redundant, so it redirects rather than serving a duplicate. */}
          <Route path="/africa" element={<Navigate to="/" replace />} />

          {/* IXAR Africa's own sections */}
          <Route path="/about" element={<AboutPage onOpenContact={handleOpenContact} />} />
          <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContact} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenContact={handleOpenContact} />} />
          <Route path="/experience" element={<ExperiencePage onOpenContact={handleOpenContact} />} />

          {/* Jobs @ IXAR. No onOpenContact: applications use the page's own
              form, which routes to HR rather than to Business Development. */}
          <Route path="/careers" element={<CareersPage />} />

          {/* Scope Builder, reached from Services and Contact */}
          <Route path="/estimator" element={<EstimatorPage onOpenContact={handleOpenContact} />} />

          {/* Contact & RFQ Page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Old addresses, now sections of the pages above */}
          {FOLDED_ROUTES.map((r) => (
            <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
          ))}

          {/* Anything else. Previously fell through to a blank page. */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Global Footer */}
        <Footer onOpenContact={handleOpenContact} />

        {/* Instant RFQ Proposal Modal */}
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          defaultScope={modalDefaultScope}
        />
      </div>
    </>
  );
}
