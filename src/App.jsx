import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ApplicationsPage from './pages/ApplicationsPage';
import SectorDetailPage from './pages/SectorDetailPage';
import TrainingPage from './pages/TrainingPage';
import NetworkPage from './pages/NetworkPage';
import EstimatorPage from './pages/EstimatorPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on page route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [modalDefaultScope, setModalDefaultScope] = useState('');

  const handleOpenContact = (scope = '') => {
    setModalDefaultScope(scope);
    setContactOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-main-wrapper">
        {/* Navigation Header */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Multi-Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={handleOpenContact} />} />
          
          {/* Services & NDT Methodology Sub-Pages */}
          <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContact} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenContact={handleOpenContact} />} />

          {/* Applications & Industry Sector Sub-Pages */}
          <Route path="/applications" element={<ApplicationsPage onOpenContact={handleOpenContact} />} />
          <Route path="/applications/:slug" element={<SectorDetailPage onOpenContact={handleOpenContact} />} />

          {/* BARC Training & Cert Verifier Page */}
          <Route path="/training" element={<TrainingPage onOpenContact={handleOpenContact} />} />

          {/* Pan-African Network Page */}
          <Route path="/network" element={<NetworkPage onOpenContact={handleOpenContact} />} />

          {/* Estimator Page */}
          <Route path="/estimator" element={<EstimatorPage onOpenContact={handleOpenContact} />} />

          {/* Case Studies Page */}
          <Route path="/case-studies" element={<CaseStudiesPage onOpenContact={handleOpenContact} />} />

          {/* Contact & RFQ Page */}
          <Route path="/contact" element={<ContactPage />} />
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
    </Router>
  );
}
