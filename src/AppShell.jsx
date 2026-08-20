import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import RouteHead from './components/RouteHead';

// Pages
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ApplicationsPage from './pages/ApplicationsPage';
import SectorDetailPage from './pages/SectorDetailPage';
import TrainingPage from './pages/TrainingPage';
import NetworkPage from './pages/NetworkPage';
import EstimatorPage from './pages/EstimatorPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import EastAfricaPage from './pages/EastAfricaPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on page route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
      <ScrollToTop />
      <div className="app-main-wrapper">
        {/* Navigation Header */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Multi-Page Routes */}
        <Routes>
          {/* ixar.africa lands on the East Africa page. */}
          <Route path="/" element={<EastAfricaPage />} />

          {/* The content plan agreed www.ixar.in/africa. On ixar.africa that path
              is redundant, so it redirects rather than serving a duplicate. */}
          <Route path="/africa" element={<Navigate to="/" replace />} />

          {/* Services & NDT Methodology Sub-Pages */}
          <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContact} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenContact={handleOpenContact} />} />

          {/* Applications & Industry Sector Sub-Pages */}
          <Route path="/applications" element={<ApplicationsPage onOpenContact={handleOpenContact} />} />
          <Route path="/applications/:slug" element={<SectorDetailPage onOpenContact={handleOpenContact} />} />

          {/* BARC Training & Cert Verifier Page */}
          <Route path="/training" element={<TrainingPage onOpenContact={handleOpenContact} />} />

          {/* NDT Products & Supply Page */}
          <Route path="/products" element={<ProductsPage onOpenContact={handleOpenContact} />} />

          {/* Jobs @ Ixar Careers Page */}
          <Route path="/careers" element={<CareersPage onOpenContact={handleOpenContact} />} />

          {/* Regional footprint */}
          <Route path="/network" element={<NetworkPage onOpenContact={handleOpenContact} />} />

          {/* Estimator Page */}
          <Route path="/estimator" element={<EstimatorPage onOpenContact={handleOpenContact} />} />

          {/* Case Studies Page */}
          <Route path="/case-studies" element={<CaseStudiesPage onOpenContact={handleOpenContact} />} />

          {/* Contact & RFQ Page */}
          <Route path="/contact" element={<ContactPage />} />

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
