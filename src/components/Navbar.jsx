import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ChevronRight, ChevronDown, MapPin } from 'lucide-react';
import Style from './Style';

/* The primary navigation. Keep the outer class name `navbar-header`:
   EastAfricaPage measures this element to work out its own top padding. */

const SERVICE_LINKS = [
  { to: '/services/radiography', label: 'Conventional Radiography (RT)' },
  { to: '/services/radiography', label: 'Digital & Computed Radiography (CR/DR)' },
  { to: '/services/aut', label: 'Ultrasonic Testing (UT)' },
  { to: '/services/aut', label: 'Automated Ultrasonics (AUT)' },
  { to: '/services/paut', label: 'Phased Array (PAUT)' },
  { to: '/services/tofd', label: 'Time of Flight Diffraction (TOFD)' },
  { to: '/services/pect', label: 'Eddy Current & PECT' },
  { to: '/services/mfl-tube', label: 'Tank & Tube Inspection (MFL)' },
  { to: '/services/aut', label: 'Pipeline Inspection & Pigging' },
  { to: '/services/aut', label: 'Underwater & Marine Inspection' },
];

const COURSE_LINKS = [
  { to: '/training', label: 'BARC Radiation Safety Course' },
  { to: '/training', label: 'ASNT Level II / III Preparation' },
  { to: '/training', label: 'NDT Practitioner Certification' },
  { to: '/training', label: 'Certificate Verification' },
];

const PRODUCT_LINKS = [
  { to: '/products', label: 'Radiography Cameras & Gamma Sources' },
  { to: '/products', label: 'Ultrasonic Gauges & Flaw Detectors' },
  { to: '/products', label: 'Calibration Blocks & Standards' },
  { to: '/products', label: 'NDT Consumables & Accessories' },
];

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    const publish = () => {
      const drawer = el.querySelector('.mobile-menu-dropdown');
      const h = Math.ceil(
        el.getBoundingClientRect().height -
        (drawer ? drawer.getBoundingClientRect().height : 0)
      );
      document.documentElement.style.setProperty('--nav-h', `${h}px`);
    };
    publish();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', publish);
      return () => window.removeEventListener('resize', publish);
    }
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    window.addEventListener('resize', publish);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', publish);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setMobileMenuOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  const renderDropdown = (id, label, to, links) => {
    const open = openDropdown === id;
    const sectionActive = pathname.startsWith(to);
    return (
      <div
        className="dropdown-wrapper"
        onMouseEnter={() => setOpenDropdown(id)}
        onMouseLeave={() => setOpenDropdown((cur) => (cur === id ? null : cur))}
      >
        <NavLink
          to={to}
          className={sectionActive ? 'nav-link active' : 'nav-link'}
          aria-expanded={open}
          aria-haspopup="true"
          onFocus={() => setOpenDropdown(id)}
        >
          <span>{label}</span>
          <ChevronDown size={14} aria-hidden="true" />
        </NavLink>
        {open && (
          <div className="dropdown-menu">
            {links.map((l, i) => (
              <Link key={i} to={l.to} className="dropdown-item">
                {l.label}
              </Link>
            ))}
            <div className="dropdown-divider" />
            <Link to={to} className="dropdown-item view-all">
              View all {label.toLowerCase()} <ChevronRight size={13} />
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <header ref={headerRef} className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-info-bar">
        <div className="container top-info-container">
          <span className="top-badge">
            <MapPin size={13} aria-hidden="true" /> Uganda &middot; Tanzania &middot; Kenya
          </span>
          <div className="top-right">
            <a href="mailto:bd@ixar.africa" className="top-link">
              <Mail size={13} aria-hidden="true" /> bd@ixar.africa
            </a>
            <a href="tel:+256414251251" className="top-link">
              <Phone size={13} aria-hidden="true" /> +256 414 251251
            </a>
          </div>
        </div>
      </div>

      <div className="container nav-main-container">
        <Link to="/" className="brand-logo" aria-label="IXAR East Africa, home">
          <img 
            src="https://ixar.in/wp-content/uploads/2025/05/logo.png" 
            alt="IXAR" 
            className="brand-logo-img" 
            onError={(e) => { e.currentTarget.src = '/images/ixar-logo-main.png'; }}
            style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }} 
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          <a href="#ea-backed" className="nav-link">
            About Us
          </a>
          <NavLink to="/" end className={navClass}>
            East Africa
          </NavLink>
          {renderDropdown('services', 'Services', '/services', SERVICE_LINKS)}
          {renderDropdown('course', 'NDT Course', '/training', COURSE_LINKS)}
          {renderDropdown('products', 'NDT Products', '/products', PRODUCT_LINKS)}
          <NavLink to="/case-studies" className={navClass}>
            Clients
          </NavLink>
          <NavLink to="/careers" className={navClass}>
            Jobs @ Ixar
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button
            onClick={() => onOpenContact()}
            style={{
              background: '#E31E24',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.875rem',
              padding: '9px 22px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              transition: 'background 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#C41217')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#E31E24')}
          >
            Contact us
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown" id="mobile-menu">
          <nav className="mobile-nav-links" aria-label="Main, mobile">
            <a href="#ea-backed">About Us</a>
            <Link to="/" style={{ color: '#E31E24', fontWeight: 800 }}>East Africa</Link>
            <Link to="/services">Services</Link>
            <Link to="/training">NDT Course</Link>
            <Link to="/products">NDT Products</Link>
            <Link to="/case-studies">Clients</Link>
            <Link to="/careers">Jobs @ Ixar</Link>
            <Link to="/contact">Contact us</Link>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="btn btn-primary btn-lg mobile-cta"
          >
            Request a Quote
          </button>

          <div className="mobile-contact">
            <a href="tel:+256414251251">
              <Phone size={14} aria-hidden="true" /> +256 414 251251
            </a>
            <a href="mailto:bd@ixar.africa">
              <Mail size={14} aria-hidden="true" /> bd@ixar.africa
            </a>
          </div>
        </div>
      )}

      <Style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #FFFFFF;
          border-bottom: 1px solid var(--line);
          transition: box-shadow 0.25s ease;
        }
        .navbar-header.scrolled {
          box-shadow: 0 1px 14px rgba(0, 30, 87, 0.10);
        }

        .top-info-bar {
          background: var(--navy);
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.8125rem;
          padding: 8px 0;
        }
        .top-info-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .top-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #fff;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
        .top-badge svg { color: #FF7A78; }
        .top-right { display: flex; align-items: center; gap: 22px; }
        .top-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .top-link:hover { color: #fff; }

        .nav-main-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          height: 84px;
        }

        .brand-logo { display: flex; align-items: center; gap: 12px; flex: none; }
        .brand-mark { width: 42px; height: 42px; flex: none; display: block; }
        .brand-mark svg { width: 100%; height: 100%; display: block; }
        .brand-text { display: flex; flex-direction: column; }
        .brand-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          color: var(--navy);
          line-height: 1;
        }
        .brand-subtitle {
          font-size: 0.6875rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 3px;
          font-weight: 700;
          white-space: nowrap;
        }

        .desktop-nav { display: flex; align-items: center; gap: 26px; }
        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 30px 0;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--navy);
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--brand); }
        .nav-link.active { color: var(--brand); font-weight: 800; }
        .nav-link.active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: var(--brand);
        }

        .dropdown-wrapper { position: relative; }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 290px;
          background: #FFFFFF;
          border: 1px solid var(--line);
          border-top: 3px solid var(--brand);
          box-shadow: var(--shadow-lg);
          padding: 8px;
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 12px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--navy);
          transition: background 0.18s ease, color 0.18s ease;
        }
        .dropdown-item:hover { background: var(--bg-tint); color: var(--brand); }
        .dropdown-item.view-all { color: var(--brand); font-weight: 800; }
        .dropdown-divider { height: 1px; background: var(--line); margin: 6px 0; }

        .nav-actions { display: flex; align-items: center; gap: 12px; flex: none; }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--line);
          color: var(--navy);
          cursor: pointer;
          width: 46px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-dropdown {
          background: #FFFFFF;
          border-top: 1px solid var(--line);
          padding: 8px 0 24px;
          max-height: calc(100vh - 130px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-nav-links { display: flex; flex-direction: column; padding: 0 var(--gutter); }
        .mobile-nav-links a {
          padding: 15px 0;
          border-bottom: 1px solid var(--line);
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy);
        }
        .mobile-cta { width: calc(100% - var(--gutter) * 2); margin: 20px var(--gutter) 0; }
        .mobile-contact {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 20px var(--gutter) 0;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--navy);
        }
        .mobile-contact a { display: inline-flex; align-items: center; gap: 8px; }
        .mobile-contact svg { color: var(--brand); }

        /* The nav needs a lot of horizontal room; collapse before it wraps. */
        @media (max-width: 1180px) {
          .desktop-nav { gap: 18px; }
          .nav-link { font-size: 0.875rem; }
        }
        @media (max-width: 1080px) {
          .desktop-nav, .header-cta { display: none; }
          .mobile-toggle { display: flex; }
          .nav-main-container { height: 72px; }
        }
        @media (max-width: 720px) {
          .top-right { gap: 14px; }
          .top-info-bar { font-size: 0.75rem; }
          .top-link span { display: none; }
        }
        @media (max-width: 560px) {
          .top-badge { font-size: 0.6875rem; }
          .top-link:first-child { display: none; }
          .brand-title { font-size: 1.3rem; }
          .brand-subtitle { font-size: 0.625rem; }
          .brand-mark { width: 36px; height: 36px; }
        }
      `}</Style>
    </header>
  );
}
