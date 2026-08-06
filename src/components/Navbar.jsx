import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Mail, Phone, Menu, X, ChevronRight, Globe, Award, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [appsDropdown, setAppsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Corporate Info Bar */}
      <div className="top-info-bar">
        <div className="container top-info-container">
          <div className="top-left">
            <span className="top-badge"><Globe size={13} /> Pan-African Network</span>
            <span className="top-text">South Africa | Nigeria | Ghana | Kenya | Uganda | Mozambique</span>
          </div>
          <div className="top-right">
            <a href="mailto:info@ixar-africa.com" className="top-link"><Mail size={13} /> info@ixar-africa.com</a>
            <a href="tel:+27110987654" className="top-link"><Phone size={13} /> +27 11 098 7654</a>
            <span className="cert-pill"><Award size={13} /> BARC & API Certified</span>
          </div>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="container nav-main-container">
        <Link to="/" className="brand-logo">
          <div className="logo-icon-wrapper">
            <Shield className="shield-icon" size={24} />
          </div>
          <div className="brand-text">
            <div className="brand-title">IXAR <span className="brand-orange">AFRICA</span></div>
            <div className="brand-subtitle">NDT & Asset Integrity Engineering</div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div 
            className="dropdown-wrapper"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <span>NDT Services</span>
              <ChevronDown size={14} />
            </NavLink>
            {servicesDropdown && (
              <div className="dropdown-menu">
                <Link to="/services/aut" className="dropdown-item">Automated Ultrasonic (AUT)</Link>
                <Link to="/services/paut" className="dropdown-item">Phased Array Ultrasonic (PAUT)</Link>
                <Link to="/services/pect" className="dropdown-item">Pulse Eddy Current (PECT)</Link>
                <Link to="/services/tofd" className="dropdown-item">Time of Flight Diffraction (TOFD)</Link>
                <Link to="/services/mfl-tube" className="dropdown-item">Tube Inspection (MFL / RFT)</Link>
                <Link to="/services/radiography" className="dropdown-item">Digital Radiography (CR/DR)</Link>
                <div className="dropdown-divider"></div>
                <Link to="/services" className="dropdown-item view-all">View All Services →</Link>
              </div>
            )}
          </div>

          {/* Applications Dropdown */}
          <div 
            className="dropdown-wrapper"
            onMouseEnter={() => setAppsDropdown(true)}
            onMouseLeave={() => setAppsDropdown(false)}
          >
            <NavLink to="/applications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <span>Applications</span>
              <ChevronDown size={14} />
            </NavLink>
            {appsDropdown && (
              <div className="dropdown-menu">
                <Link to="/applications/oil-gas" className="dropdown-item">Oil & Gas (Pipelines & Tanks)</Link>
                <Link to="/applications/railways" className="dropdown-item">Railways USFD & Wheelsets</Link>
                <Link to="/applications/power-plants" className="dropdown-item">Power Plant Boilers & Turbines</Link>
                <Link to="/applications/mining" className="dropdown-item">Mining & Heavy Machinery</Link>
                <div className="dropdown-divider"></div>
                <Link to="/applications" className="dropdown-item view-all">View All Applications →</Link>
              </div>
            )}
          </div>

          <NavLink to="/training" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            BARC Training
          </NavLink>

          <NavLink to="/network" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            African Network
          </NavLink>

          <NavLink to="/estimator" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Estimator
          </NavLink>

          <NavLink to="/case-studies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Case Studies
          </NavLink>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button onClick={() => onOpenContact()} className="btn btn-primary btn-sm">
            <span>Request Proposal</span>
            <ChevronRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-nav-links">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>NDT Services Catalog</Link>
            <Link to="/applications" onClick={() => setMobileMenuOpen(false)}>Applications & Sectors</Link>
            <Link to="/training" onClick={() => setMobileMenuOpen(false)}>BARC Safety Training</Link>
            <Link to="/network" onClick={() => setMobileMenuOpen(false)}>African Network</Link>
            <Link to="/estimator" onClick={() => setMobileMenuOpen(false)}>Project Budget Estimator</Link>
            <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
          </div>

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', marginTop: '16px' }}
          >
            Request RFP Proposal
          </button>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.25s ease;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }
        .navbar-header.scrolled {
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
        }
        .top-info-bar {
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
          font-size: 0.8rem;
          padding: 7px 0;
          color: var(--text-muted);
        }
        .top-info-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-left, .top-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .top-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: var(--primary-light);
          color: var(--primary-dark);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.76rem;
        }
        .top-link {
          color: var(--text-muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 500;
        }
        .top-link:hover {
          color: var(--navy);
        }
        .cert-pill {
          color: #15803D;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
        }

        .nav-main-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          gap: 20px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-icon-wrapper {
          width: 44px;
          height: 44px;
          background: var(--navy);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .brand-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.35rem;
          color: var(--navy);
          line-height: 1;
        }
        .brand-orange {
          color: var(--primary);
        }
        .brand-subtitle {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 0;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        /* Dropdown */
        .dropdown-wrapper {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 240px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 8px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: fadeIn 0.2s ease;
        }
        .dropdown-item {
          padding: 8px 12px;
          font-size: 0.86rem;
          color: var(--navy);
          text-decoration: none;
          font-weight: 600;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
        }
        .dropdown-item:hover {
          background: #F8FAFC;
          color: var(--primary);
        }
        .dropdown-item.view-all {
          color: var(--primary);
          font-weight: 700;
        }
        .dropdown-divider {
          height: 1px;
          background: #E2E8F0;
          margin: 4px 0;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--navy);
          cursor: pointer;
        }

        .mobile-menu-dropdown {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-nav-links a {
          color: var(--navy);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          padding: 8px 0;
          border-bottom: 1px solid #F1F5F9;
        }

        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .top-info-bar { display: none; }
        }
      `}</style>
    </header>
  );
}
