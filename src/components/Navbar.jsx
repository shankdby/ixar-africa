import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, Menu, X, ChevronDown, MapPin, Search, ArrowRight } from 'lucide-react';
import Style from './Style';
import { HEADER_ITEMS, searchSite } from '../globalNav';

/* The primary navigation. Keep the outer class name `navbar-header`:
   EastAfricaPage measures this element to work out its own top padding.

   IXAR Africa's own menu: About Us, Services, Experience, Jobs @ IXAR, and
   Contact Us as the red button. Every item stays on ixar.africa. See
   src/globalNav.js for the entries and the reasoning. */

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const results = searchOpen ? searchSite(query) : [];
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

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setSearchOpen(false);
  }, [pathname, location.hash, location.key]);

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

  /* Search runs over this site's own pages and sections (globalNav.js). It
     used to send the query to ixar.in, which took the visitor off the site. */
  const go = (to) => {
    setSearchOpen(false);
    setQuery('');
    navigate(to);
  };
  const runSearch = () => {
    if (results.length) go(results[0].to);
  };

  /* One header item: the label opens its page, hover or focus opens the
     section menu. Fragment links go through the router too, and AppShell
     scrolls to the section once the page is there. */
  const renderItem = (item) => {
    const { label, to, children = [] } = item;
    const open = openDropdown === label;
    const base = to.split('#')[0] || '/';
    const active = base === '/' ? pathname === '/' : pathname.startsWith(base);

    return (
      <div
        key={label}
        className="dropdown-wrapper"
        onMouseEnter={() => setOpenDropdown(label)}
        onMouseLeave={() => setOpenDropdown((cur) => (cur === label ? null : cur))}
      >
        <Link
          to={to}
          className={active ? 'nav-link active' : 'nav-link'}
          aria-expanded={open}
          aria-haspopup="true"
          onFocus={() => setOpenDropdown(label)}
        >
          <span>{label}</span>
          <ChevronDown size={14} aria-hidden="true" />
        </Link>
        {open && (
          <div className="dropdown-menu">
            {children.map((l) => (
              <Link key={l.to + l.label} to={l.to} className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                {l.label}
              </Link>
            ))}
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
            <MapPin size={13} aria-hidden="true" /> Offices: Uganda &middot; Tanzania &middot; Mozambique
          </span>
          <div className="top-right">
            <a href="mailto:bd@ixar.africa" className="top-link">
              <Mail size={13} aria-hidden="true" /> bd@ixar.africa
            </a>
            <a href="tel:+256705731596" className="top-link">
              <Phone size={13} aria-hidden="true" /> +256 705 731596
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
          {HEADER_ITEMS.map(renderItem)}
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
              placeholder="Search IXAR Africa"
              aria-label="Search this site"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
            {searchOpen && query.trim() && (
              <div className="nav-search__results" role="listbox" aria-label="Search results">
                {results.length ? (
                  results.map((r) => (
                    <button
                      type="button"
                      role="option"
                      aria-selected="false"
                      key={r.to + r.label}
                      className="nav-search__hit"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => go(r.to)}
                    >
                      <span>
                        <b>{r.label}</b>
                        {r.section && <small>{r.section}</small>}
                      </span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                  ))
                ) : (
                  <p className="nav-search__none">
                    Nothing matches &ldquo;{query.trim()}&rdquo;.{' '}
                    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => go('/contact')}>
                      Ask the office
                    </button>
                  </p>
                )}
              </div>
            )}
          </form>

          <Link to="/contact" className="header-cta">
            Contact Us
          </Link>

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
            {HEADER_ITEMS.map((item) => (
              <React.Fragment key={item.label}>
                <Link to={item.to} className="mobile-top-link">{item.label}</Link>
                {item.children
                  .filter((l) => l.to !== item.to)
                  .map((l) => (
                    <Link key={l.to + l.label} to={l.to} className="mobile-sub-link">{l.label}</Link>
                  ))}
              </React.Fragment>
            ))}
            <Link to="/contact" className="mobile-top-link">Contact Us</Link>
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
            <a href="tel:+256705731596">
              <Phone size={14} aria-hidden="true" /> +256 705 731596
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
        .top-badge svg { color: #FF6B69; }
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
        .dropdown-sep {
          display: block; padding: 12px 18px 5px; margin-top: 4px;
          border-top: 1px solid var(--line);
          font-size: 0.625rem; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--text-dim);
        }
        .dropdown-item--out { display: flex; align-items: center; gap: 6px; }
        .nav-out { opacity: 0.4; margin-left: 4px; }
        .dropdown-item--out svg { opacity: 0.5; flex: none; }
        .mobile-nav-links a.mobile-top-link { color: var(--brand); font-weight: 800; }
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
          background: #DE0603;
          color: #fff;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.9375rem;
          letter-spacing: 0.02em;
          padding: 0 32px;
          white-space: nowrap;
          transition: background 0.2s ease;
        }
        .header-cta:hover { background: #B90502; color: #fff; }
        /* A Link now, not a button: it leads to the Contact page. */
        .header-cta { display: flex; align-items: center; text-decoration: none; }

        .nav-search { position: relative; }
        .nav-search__results {
          position: absolute;
          top: 100%;
          right: 0;
          width: 340px;
          background: #FFFFFF;
          border: 1px solid var(--line);
          border-top: 3px solid var(--brand);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.18);
          z-index: 120;
          display: flex;
          flex-direction: column;
        }
        .nav-search__hit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 18px;
          border: 0;
          border-bottom: 1px solid var(--line);
          background: #FFFFFF;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          color: var(--navy);
        }
        .nav-search__hit:last-child { border-bottom: 0; }
        .nav-search__hit:hover, .nav-search__hit:focus { background: var(--bg-tint); color: var(--brand); outline: none; }
        .nav-search__hit b { display: block; font-size: 0.9375rem; font-weight: 700; }
        .nav-search__hit small { display: block; font-size: 0.75rem; color: var(--text-dim); margin-top: 2px; }
        .nav-search__hit svg { flex: none; color: var(--brand); }
        .nav-search__none { margin: 0; padding: 16px 18px; font-size: 0.875rem; color: var(--text-body); }
        .nav-search__none button {
          background: none; border: 0; padding: 0; font: inherit; font-weight: 800;
          color: var(--brand); cursor: pointer; text-decoration: underline;
        }
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
