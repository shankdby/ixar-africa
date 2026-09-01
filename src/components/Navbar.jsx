import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Mail, Phone, Menu, X, ChevronRight, ChevronDown, MapPin, ExternalLink, Search } from 'lucide-react';
import Style from './Style';
import { HEADER_ITEMS } from '../globalNav';

/* The primary navigation. Keep the outer class name `navbar-header`:
   EastAfricaPage measures this element to work out its own top padding.

   The menu mirrors ixar.in. Global items link out to ixar.in; the Africa
   item opens this domain's own pages. See src/globalNav.js for the mapping. */

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
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

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  /* Search queries the main ixar.in index. This app has no search backend of
     its own, and a box that silently does nothing is worse than no box. */
  const runSearch = () => {
    const q = searchInputRef.current ? searchInputRef.current.value.trim() : '';
    if (!q) return;
    window.open('https://ixar.in/?s=' + encodeURIComponent(q), '_blank', 'noopener');
    setSearchOpen(false);
  };

  const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  const renderDropdown = (id, label, to, links, highlight = false, showViewAll = true) => {
    const open = openDropdown === id;
    /* Every path starts with "/", so the Africa item — which owns this
       whole domain — is treated as active on any local route. */
    const sectionActive = to === '/' ? true : pathname.startsWith(to);
    return (
      <div
        key={id}
        className={highlight ? 'dropdown-wrapper dropdown-wrapper--ea' : 'dropdown-wrapper'}
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
            {showViewAll && (
              <Link to={to} className="dropdown-item view-all">
                {label} overview <ChevronRight size={13} />
              </Link>
            )}
          </div>
        )}
      </div>
    );
  };

  /* A top-level item that points at ixar.in. Rendered as a plain anchor so the
     browser does a real navigation instead of handing it to the router. */
  const renderGlobal = (item) => {
    const id = item.label;
    const open = openDropdown === id;
    if (!item.children) {
      return (
        <a key={id} href={item.href} className="nav-link nav-link--global">
          <span>{item.label}</span>
        </a>
      );
    }
    return (
      <div
        key={id}
        className="dropdown-wrapper"
        onMouseEnter={() => setOpenDropdown(id)}
        onMouseLeave={() => setOpenDropdown((cur) => (cur === id ? null : cur))}
      >
        <a
          href={item.href}
          className="nav-link nav-link--global"
          aria-expanded={open}
          aria-haspopup="true"
          onFocus={() => setOpenDropdown(id)}
        >
          <span>{item.label}</span>
          <ChevronDown size={14} aria-hidden="true" />
        </a>
        {open && (
          <div className="dropdown-menu">
            {item.children.map((l) => (
              <a key={l.href} href={l.href} className="dropdown-item">
                {l.label}
              </a>
            ))}
            <a href={item.href} className="dropdown-item view-all">
              On ixar.in <ExternalLink size={12} aria-hidden="true" />
            </a>
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
            <MapPin size={13} aria-hidden="true" /> Offices: Uganda &middot; Tanzania
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
        <Link to="/" className="brand-logo" aria-label="IXAR Africa, home">
          <img
            src="/images/ixar-logo-main.png"
            alt="IXAR"
            className="brand-logo-img"
            width="150"
            height="48"
            style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main">
          {HEADER_ITEMS.map((item) =>
            item.kind === 'ea'
              ? renderDropdown('east-africa', item.label, item.to, item.children, true, false)
              : renderGlobal(item)
          )}
        </nav>

        <div className="nav-actions">
          <form
            className={`nav-search ${searchOpen ? 'open' : ''}`}
            role="search"
            onSubmit={(e) => { e.preventDefault(); runSearch(); }}
          >
            <input
              ref={searchInputRef}
              type="search"
              name="s"
              placeholder="Search ixar.in"
              aria-label="Search"
              tabIndex={searchOpen ? 0 : -1}
              onBlur={() => setSearchOpen(false)}
            />
            <button
              type="button"
              className="nav-search__toggle"
              aria-label={searchOpen ? 'Submit search' : 'Search'}
              aria-expanded={searchOpen}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => (searchOpen ? runSearch() : setSearchOpen(true))}
            >
              <Search size={18} aria-hidden="true" />
            </button>
          </form>

          <button type="button" className="header-cta" onClick={() => onOpenContact()}>
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
            {HEADER_ITEMS.map((item) =>
              item.kind === 'ea' ? (
                <React.Fragment key={item.label}>
                  <Link to={item.to} style={{ color: '#E31E24', fontWeight: 800 }}>
                    {item.label}
                  </Link>
                  {item.children.slice(1).map((l) => (
                    <Link key={l.to} to={l.to} className="mobile-sub-link">
                      {l.label}
                    </Link>
                  ))}
                </React.Fragment>
              ) : (
                <a key={item.label} href={item.href} className="mobile-global-link">
                  {item.label}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              )
            )}
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

        /* Items that leave this domain for ixar.in. Same weight and colour as
           the local items — one brand, one menu — with only a hairline cue on
           hover so the jump to the global site is not a surprise. */
        .nav-link--global:hover { color: var(--brand); }
        .dropdown-wrapper--ea > .nav-link { color: var(--brand); font-weight: 800; }
        .mobile-global-link {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .mobile-global-link svg { opacity: 0.45; flex: none; }
        .mobile-sub-link {
          padding-left: 16px !important;
          font-size: 0.875rem !important;
          font-weight: 500 !important;
          opacity: 0.8;
        }
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
        /* Dropdowns follow ixar.in: a solid red panel, white centred labels,
           square corners, and a darker red hairline between rows. Colours are
           sampled from ixar.in itself (panel #D81F00, rule #AC1600, hover
           navy) so the two menus are the same object on both domains. */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 262px;
          background: var(--global-red);
          border: none;
          border-radius: 0;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
          padding: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 7px;
          padding: 15px 22px;
          font-size: 0.9375rem;
          font-weight: 700;
          line-height: 1.3;
          color: #FFFFFF;
          border-bottom: 2px solid var(--global-red-rule);
          transition: background 0.18s ease;
        }
        .dropdown-item:last-child { border-bottom: none; }
        .dropdown-item:hover { background: var(--global-navy); color: #FFFFFF; }
        /* The row that leaves for the parent site, held apart in navy the way
           ixar.in marks the item that opens a further panel. */
        .dropdown-item.view-all {
          background: var(--global-navy);
          color: #FFFFFF;
          font-weight: 800;
        }
        .dropdown-item.view-all:hover { background: var(--global-navy-dark); }
        .dropdown-item.view-all svg { opacity: 0.85; }
        /* Row separation now comes from each item's own border. */
        .dropdown-divider { display: none; }

        /* The search control and the Contact button run the full height of the
           header and sit flush to its right edge, matching ixar.in. They were
           previously small pills floating in the middle of an 84px bar. */
        .nav-actions {
          display: flex;
          align-self: stretch;
          align-items: stretch;
          gap: 0;
          flex: none;
          margin-right: calc(var(--gutter) * -1);
        }
        .nav-search { display: flex; align-items: stretch; }
        .nav-search input {
          width: 0;
          padding: 0;
          border: 0;
          opacity: 0;
          font-family: inherit;
          font-size: 0.9375rem;
          color: var(--navy);
          background: var(--bg-tint, #F4F6F7);
          transition: width 0.28s ease, padding 0.28s ease, opacity 0.2s ease;
        }
        .nav-search.open input { width: 220px; padding: 0 16px; opacity: 1; }
        .nav-search input:focus { outline: 2px solid #001E57; outline-offset: -2px; }
        .nav-search__toggle {
          width: 62px;
          border: 0;
          cursor: pointer;
          background: #001E57;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .nav-search__toggle:hover { background: #00164a; }
        .header-cta {
          border: 0;
          cursor: pointer;
          background: #E31E24;
          color: #fff;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.9375rem;
          letter-spacing: 0.02em;
          padding: 0 32px;
          white-space: nowrap;
          transition: background 0.2s ease;
        }
        .header-cta:hover { background: #C41217; }
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
          .desktop-nav, .header-cta, .nav-search { display: none; }
          .nav-actions { margin-right: 0; align-items: center; }
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
