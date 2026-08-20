import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ==========================================================================
   IXAR in East Africa  ·  /africa
   Ported from "IXAR – East Africa Page Mockup 13082026.html"
   (Rahil Malde / Maldes Ecommerce, content plan draft 01, 13 August 2026)

   Design tokens are lifted from ixar.in (Phlox Pro / Elementor kit 46) and are
   deliberately NOT the tokens used by the rest of this React app. Every class
   in this file is namespaced `ea-` and every rule is scoped under `.ea-page`
   so nothing here can leak into, or be overridden by, index.css, Navbar or
   Footer.

   Review scaffolding is intentionally retained:
     · the dark banner at the top of the page
     · amber <Chip> spans wrapping anything IXAR has still to confirm
     · striped grey <Placeholder> blocks carrying their IMG-xx reference
   ========================================================================== */

const IMG = '/images/east-africa/';

/* --------------------------------------------------------------------------
   Photography actually available (Tilenga Project, Uganda + Praj, Tanzania).
   Where a genuine regional photograph exists for a card it is used; where one
   does not, the labelled placeholder stays, per section 5 of the content plan.
   -------------------------------------------------------------------------- */

const SERVICES = [
  {
    num: '01',
    title: 'Conventional Radiography (RT)',
    text: 'X-ray and gamma radiography using Iridium-192, Selenium-75 and Cobalt-60 sources, supported by mobile radiography units.',
    href: '/services',
    img: 'ea-svc-radiography.webp',
    alt: 'IXAR technician working on process pipework with a radiography source guide tube',
  },
  {
    num: '02',
    title: 'Digital and Computed Radiography',
    text: 'Digital image capture for faster interpretation, simpler storage and immediate sharing of results with the client.',
    href: '/services',
    img: 'ea-svc-digital-radiography.webp',
    alt: 'IXAR technicians setting up digital radiography on a pipe spool',
  },
  {
    num: '03',
    title: 'Ultrasonic Testing (UT)',
    text: 'Thickness measurement, flaw detection and material characterisation across metals, plastics, composites and ceramics.',
    href: '/services',
    img: 'ea-svc-ultrasonic.webp',
    alt: 'IXAR crew inspecting a pipe spool on a stand',
  },
  {
    num: '04',
    title: 'Advanced Ultrasonics',
    text: 'Phased array (PAUT), time of flight diffraction (TOFD) and automated ultrasonic testing (AUT) for weld inspection and accurate defect sizing.',
    href: '/services',
    img: 'ea-hero-2.jpg',
    alt: 'Certified NDT technician scanning weld with phased array ultrasonic probe',
  },
  {
    num: '05',
    title: 'Magnetic Particle and Liquid Penetrant Testing',
    text: 'Surface and near surface flaw detection on welds and components, carried out on site or in the workshop.',
    href: '/services',
    img: '/images/east-africa/ea-svc-radiography.webp',
    alt: 'Magnetic particle testing on steel weld joint',
  },
  {
    title: 'Eddy Current and Pulsed Eddy Current',
    category: 'Electromagnetic NDT',
    desc: 'Corrosion under insulation screening on carbon steel structures, and surface crack detection.',
    slug: 'pect',
    img: '/images/east-africa/ea-svc-pipeline.webp',
  },
  {
    title: 'Pipeline Inspection',
    category: 'Pipeline NDT',
    desc: 'X-ray crawler radiography and automated ultrasonic testing of girth welds for cross country pipelines.',
    slug: 'aut',
    img: '/images/east-africa/ea-svc-pipeline.webp',
  },
  {
    title: 'Pigging and Intelligent Pigging',
    category: 'Pipeline Integrity',
    desc: 'Cleaning pigs to remove deposits and restore flow, and intelligent pigs to inspect and map pipeline wall condition.',
    slug: 'aut',
    img: '/images/east-africa/ea-svc-pigging.jpg',
  },
  {
    title: 'Tank and Tube Inspection',
    category: 'Tank & Tube NDT',
    desc: 'Magnetic flux leakage inspection of tank floors and heat exchanger tubes for wall loss, pitting and circumferential cracking.',
    slug: 'mfl-tube',
    img: '/images/east-africa/ea-ind-oil-gas.webp',
  },
  {
    title: 'Underwater Inspection',
    category: 'Marine NDT',
    desc: 'Inspection of jetties, dams, bridges and other submerged structures.',
    slug: 'aut',
    img: '/images/east-africa/ea-svc-underwater.jpg',
  },
  {
    title: 'Destructive Testing and Laboratory Services',
    category: 'Metallurgical Lab',
    desc: 'Mechanical testing, chemical analysis, coating testing, corrosion testing and failure analysis.',
    slug: 'aut',
    img: '/images/east-africa/ea-svc-radiography.webp',
  },
  {
    title: 'NDT Training and Certification',
    category: 'Radiation Safety & Training',
    desc: 'Industry recognised training, including radiation safety certification for industrial radiographers, delivered in collaboration with the Bhabha Atomic Research Centre.',
    slug: 'aut',
    img: '/images/east-africa/ea-backed-barc.webp',
  },
];

const INDUSTRIES = [
  {
    title: 'Oil and Gas',
    desc: 'Pipelines, storage tanks, refineries and process plant across upstream, midstream and downstream operations.',
    slug: 'oil-gas',
    img: '/images/east-africa/ea-ind-oil-gas.webp',
  },
  {
    title: 'Power Generation and Geothermal',
    desc: 'Boilers, turbines, heat exchangers and steam pipework in thermal, hydro, geothermal and renewable facilities.',
    slug: 'power-plants',
    img: '/images/east-africa/ea-hero-tilenga-cpf.webp',
  },
  {
    title: 'Mining',
    desc: 'Structural steelwork, processing plant, pressure vessels and material handling equipment.',
    slug: 'mining',
    img: '/images/east-africa/ea-svc-pipeline.webp',
  },
  {
    title: 'Cement',
    desc: 'Kilns, ducting, structural supports and plant maintained within tight shutdown windows.',
    slug: 'oil-gas',
    img: '/images/east-africa/ea-ind-oil-gas.webp',
  },
  {
    title: 'Breweries, Beverage and Food Processing',
    desc: 'Tanks, vessels, process pipework and hygienic welded systems.',
    slug: 'oil-gas',
    img: '/images/east-africa/ea-svc-digital-radiography.webp',
  },
  {
    title: 'Sugar',
    desc: 'Boilers, evaporators, mill structures and pressure equipment inspected during off-crop maintenance.',
    slug: 'oil-gas',
    img: '/images/east-africa/ea-svc-radiography.webp',
  },
  {
    title: 'Marine and Ports',
    desc: 'Jetties, cranes, hulls, mooring structures and submerged assets.',
    slug: 'oil-gas',
    img: '/images/east-africa/ea-svc-underwater.jpg',
  },
  {
    title: 'Manufacturing and General Engineering',
    desc: 'Fabrication quality control, weld inspection, structural steel and pressure equipment certification.',
    slug: 'oil-gas',
    img: '/images/east-africa/ea-svc-digital-radiography.webp',
  },
];

const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

/* ==========================================================================
   Small presentational helpers
   ========================================================================== */

/** Amber chip: content IXAR has still to confirm. */
function Chip({ children }) {
  return <span className="ea-chip">{children}</span>;
}

function GlyphCamera() {
  return (
    <svg className="ea-ph__glyph" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14.5" rx="2" />
      <circle cx="12" cy="12.2" r="3.6" />
      <path d="M7.5 5l1.4-2.2h6.2L16.5 5" />
    </svg>
  );
}

function GlyphDoc() {
  return (
    <svg className="ea-ph__glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2.5h8l4.5 4.5v14.5H6Z" />
      <path d="M14 2.5V7h4.5" />
      <path d="M8.8 12h6.4M8.8 15.4h6.4M8.8 18.2h4" />
    </svg>
  );
}

function GlyphMap() {
  return (
    <svg className="ea-ph__glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.8 6.2 9 3.6l6 2.6 6.2-2.6v14.2L15 20.4 9 17.8 2.8 20.4Z" />
      <path d="M9 3.6v14.2M15 6.2v14.2" />
    </svg>
  );
}

/** Striped grey image placeholder carrying its IMG-xx reference. */
function Placeholder({ imgRef, desc, ratio = '4x3', glyph = 'camera', className = '' }) {
  const Glyph = glyph === 'doc' ? GlyphDoc : glyph === 'map' ? GlyphMap : GlyphCamera;
  return (
    <div className={`ea-ph ea-ph--${ratio} ${className}`.trim()}>
      <Glyph />
      {imgRef ? <span className="ea-ph__ref">{imgRef}</span> : null}
      {desc ? <span className="ea-ph__desc">{desc}</span> : null}
    </div>
  );
}

function ArrowGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 4.5 21 12l-7.5 7.5-1.8-1.8 4.4-4.4H3v-2.6h13.1l-4.4-4.4Z" />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2A9.9 9.9 0 0 0 2.1 11.9c0 1.75.46 3.46 1.33 4.97L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01a9.9 9.9 0 0 0 9.9-9.9A9.9 9.9 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.35-.5.05-.98.24-3.3-.69-2.78-1.1-4.55-3.95-4.69-4.13-.13-.18-1.12-1.49-1.12-2.84 0-1.35.7-2.01.95-2.29a1 1 0 0 1 .72-.34h.52c.16 0 .39-.06.6.46.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.18-.15.29-.29.45-.14.16-.3.36-.42.48-.14.14-.29.29-.13.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.19-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.65-.17 1.33Z" />
    </svg>
  );
}

function DownloadGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v11.2m0 0 4.2-4.2M12 14.2 7.8 10M4.5 18.5h15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHead({ eyebrow, title, center = false, children }) {
  return (
    <div className={`ea-sec-head${center ? ' ea-sec-head--center' : ''} ea-rev`}>
      <span className="ea-eyebrow">{eyebrow}</span>
      <h2 className="ea-sec-title">{title}</h2>
      <span className="ea-rule" />
      {children}
    </div>
  );
}

/* ==========================================================================
   Behaviour
   ========================================================================== */

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Count-up figure, started by the caller once the strip is in view. */
function Counter({ to, suffix = '', run }) {
  // Starts at the final figure so the strip reads correctly before it is
  // scrolled into view (and with JS disabled); the count-up resets to 0 and
  // runs only once `run` flips.
  const [value, setValue] = useState(to);
  useEffect(() => {
    if (!run) return undefined;
    if (prefersReducedMotion()) {
      setValue(to);
      return undefined;
    }
    setValue(0);
    let raf;
    let start = null;
    const dur = 1400;
    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, run]);
  return (
    <>
      {value}
      {suffix}
    </>
  );
}

/**
 * One tile of the Trusted By wall. Tiles cross-fade on a staggered timer so the
 * wall is never in lock-step: a simultaneous change reads as a page fault.
 */
function LogoTile({ offset, total = 12, hold = 5500, stagger = 1000 }) {
  const [state, setState] = useState({ a: offset, b: offset, showA: true });

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setState((s) => {
          const next = (s.showA ? s.a : s.b) + 1;
          return s.showA
            ? { a: s.a, b: next, showA: false }
            : { a: next, b: s.b, showA: true };
        });
      }, hold);
    }, offset * stagger);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [offset, hold, stagger]);

  const label = (n) => `IMG-29 / ${String((((n % total) + total) % total) + 1).padStart(2, '0')}`;

  return (
    <div className="ea-logo-tile">
      <div className={`ea-logo-slide${state.showA ? ' is-on' : ''}`}>
        <span className="ea-logo-slide__mark">Client Logo</span>
        <span className="ea-logo-slide__ref">{label(state.a)}</span>
      </div>
      <div className={`ea-logo-slide${state.showA ? '' : ' is-on'}`}>
        <span className="ea-logo-slide__mark">Client Logo</span>
        <span className="ea-logo-slide__ref">{label(state.b)}</span>
      </div>
    </div>
  );
}

const HERO_IMAGES = [
  '/images/east-africa/ea-hero-tilenga-cpf.webp',
  '/images/east-africa/ea-svc-pipeline.webp',
  '/images/east-africa/ea-svc-radiography.webp',
  '/images/east-africa/ea-svc-digital-radiography.webp',
  '/images/east-africa/ea-office-kampala.webp',
];

/* ==========================================================================
   Page
   ========================================================================== */

export default function EastAfricaPage() {
  const pageRef = useRef(null);
  const statStripRef = useRef(null);
  const formRef = useRef(null);

  const [showReviewBar, setShowReviewBar] = useState(false);
  const [countersRun, setCountersRun] = useState(false);
  const [mobileMap, setMobileMap] = useState(false);
  const [validated, setValidated] = useState(false);
  const [sent, setSent] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  /* page title -------------------------------------------------------- */
  useEffect(() => {
    const previous = document.title;
    document.title = 'IXAR in East Africa | IXAR';
    return () => {
      document.title = previous;
    };
  }, []);

  /* scroll reveal ------------------------------------------------------ */
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;
    const els = Array.from(root.querySelectorAll('.ea-rev'));
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* counters ----------------------------------------------------------- */
  useEffect(() => {
    const strip = statStripRef.current;
    if (!strip) return undefined;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setCountersRun(true);
      return undefined;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setCountersRun(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(strip);
    return () => obs.disconnect();
  }, []);

  /* map: crop the viewBox on phones, where the labels are hidden -------- */
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(max-width: 767px)');
    const fit = () => setMobileMap(mq.matches);
    fit();
    if (mq.addEventListener) {
      mq.addEventListener('change', fit);
      return () => mq.removeEventListener('change', fit);
    }
    mq.addListener(fit);
    return () => mq.removeListener(fit);
  }, []);

  /* smooth scroll to the enquiry form ----------------------------------- */
  const scrollToEnquiry = useCallback((e) => {
    if (e) e.preventDefault();
    const target = document.getElementById('ea-enquiry');
    if (!target) return;
    // --nav-h is published by Navbar; fall back if it is not mounted yet.
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10
    );
    const clearance = (Number.isFinite(navH) ? navH : 124) + 24;
    const top = target.getBoundingClientRect().top + window.pageYOffset - clearance;
    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);

  /* enquiry form -------------------------------------------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      const bad = form.querySelector(':invalid');
      if (bad) bad.focus();
      return;
    }
    setSent(true);
  };

  return (
    <div className="ea-page" ref={pageRef}>
      {/* ================= REVIEW BANNER ================= */}
      {showReviewBar && (
        <div className="ea-review-bar">
          <div className="ea-review-bar__in">
            <span className="ea-review-bar__dot" aria-hidden="true" />
            <p className="ea-review-bar__txt">
              <strong>Mock-up for review.</strong>
              <span className="ea-review-bar__key ea-review-bar__key--amber" aria-hidden="true" />{' '}
              Highlighted items are awaiting confirmation from IXAR.
              <span className="ea-review-bar__key ea-review-bar__key--grey" aria-hidden="true" />{' '}
              Grey blocks are image placeholders.
            </p>
            <button
              className="ea-review-bar__close"
              type="button"
              aria-label="Dismiss review notice"
              onClick={() => setShowReviewBar(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* ================= 1. HERO ================= */}
      <section className="ea-hero">
        <div className="ea-hero__media" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="ea-hero__zoom"
              style={{ position: 'absolute', inset: 0 }}
            >
              <img
                src={HERO_IMAGES[heroIdx]}
                alt="IXAR East Africa Industrial Inspection Operations"
                className="ea-hero__img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="ea-hero__scrim" aria-hidden="true" />

        <div className="ea-hero__in">
          <div className="ea-wrap">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="ea-hero__col"
            >
              <h1>IXAR in East Africa</h1>
              <p className="ea-hero__sub">
                Non-destructive testing and industrial inspection, delivered from registered regional offices
                in Uganda and Tanzania by Industrial X-Ray and Allied Radiographers (EA) Ltd.
              </p>
              <p className="ea-hero__support">
                Licensed for sealed radiation sources, ASNT-certified personnel, ISO 9001 certified.
              </p>
              <div className="ea-hero__actions">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="ea-btn ea-btn--primary"
                  href="#ea-enquiry"
                  onClick={scrollToEnquiry}
                >
                  Request a Quote
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="ea-btn ea-btn--ghost"
                  href="https://wa.me/256414251251?text=Hello%20IXAR,%20I%20would%20like%20to%20enquire%20about%20NDT%20services%20in%20East%20Africa."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppGlyph />
                  WhatsApp Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="ea-hero__flag">
          <div className="ea-wrap">
            <span>Uganda</span>
            <span>Tanzania</span>
            <span>Kenya</span>
            <span>Mobilisation on request</span>
          </div>
        </div>
      </section>

      {/* ================= 2. EAST AFRICA IN NUMBERS ================= */}
      <section className="ea-stats ea-section" id="ea-numbers">
        <div className="ea-wrap">
          <SectionHead eyebrow="Regional Record" title="East Africa in Numbers" center />

          <div className="ea-stats__grid ea-rev" ref={statStripRef}>
            <div className="ea-stat">
              <svg className="ea-stat__icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
                <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
              </svg>
              <span className="ea-stat__fig">
                2003
              </span>
              <span className="ea-stat__label">Established in East Africa</span>
            </div>

            <div className="ea-stat">
              <svg className="ea-stat__icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
              </svg>
              <span className="ea-stat__fig">
                <Counter to={3} run={countersRun} />
              </span>
              <span className="ea-stat__label">Countries Served</span>
            </div>

            <div className="ea-stat">
              <svg className="ea-stat__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 20V7.5l8-4.5 8 4.5V20" />
                <path d="M4 20h16M9.5 20v-6h5v6" />
              </svg>
              <span className="ea-stat__fig">
                <Counter to={150} suffix="+" run={countersRun} />
              </span>
              <span className="ea-stat__label">Projects Completed in the Region</span>
            </div>

            <div className="ea-stat">
              <svg className="ea-stat__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3.2 4 6.6v5.2c0 4.6 3.2 8.4 8 9.4 4.8-1 8-4.8 8-9.4V6.6Z" />
                <path d="M9 12.2l2.2 2.3L15.4 10" />
              </svg>
              <span className="ea-stat__fig">
                <Counter to={20} suffix="+" run={countersRun} />
              </span>
              <span className="ea-stat__label">NDT Methods Offered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. WHERE WE OPERATE ================= */}
      <section className="ea-section" id="ea-operate">
        <div className="ea-wrap">
          <SectionHead eyebrow="Footprint" title="Where We Operate">
            <p>
              <Chip>
                [Intro: two sentences confirming registered offices and regional coverage, to be
                supplied by IXAR.]
              </Chip>
            </p>
          </SectionHead>

          <div className="ea-map-layout ea-rev">
            <figure className="ea-map-figure" style={{ margin: 0 }}>
              <svg
                viewBox={mobileMap ? '30 20 520 620' : '0 0 720 660'}
                role="img"
                aria-label="Map of Africa with Uganda, Tanzania and Kenya highlighted, and office pins on Kampala and the Tanzania office"
              >
                <defs>
                  <filter id="eaPinShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2.4"
                      floodColor="#001E57"
                      floodOpacity=".35"
                    />
                  </filter>
                </defs>

                {/* continent, light neutral fill */}
                <path
                  d="M135,50 L196,42 L244,39 L293,93 L311,79 L377,87 L405,115 L415,153 L426,193 L439,217 L468,237 L496,241 L524,232 L508,286 L486,318 L462,341 L443,370 L441,393 L449,443 L411,498 L395,547 L384,579 L348,612 L310,619 L299,612 L278,553 L273,523 L264,409 L259,387 L238,335 L236,306 L212,304 L198,287 L174,294 L148,296 L102,287 L86,270 L57,220 L67,192 L67,153 L87,113 L108,92 L124,67 Z"
                  fill="#DFE6E4"
                  stroke="#C6D2CF"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Madagascar, for orientation */}
                <path
                  d="M482,432 L497,449 L494,486 L479,505 L470,494 L472,458 Z"
                  fill="#DFE6E4"
                  stroke="#C6D2CF"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* countries served */}
                <g stroke="#ffffff" strokeWidth="2.2" strokeLinejoin="round">
                  <path d="M375,304 L412,306 L405,346 L375,350 Z" fill="#DE0603" fillOpacity=".38" />
                  <path
                    d="M416,300 L452,304 L455,346 L452,354 L442,376 L429,362 L405,346 L405,332 Z"
                    fill="#DE0603"
                    fillOpacity=".38"
                  />
                  <path
                    d="M375,352 L405,348 L429,364 L442,378 L449,410 L440,433 L390,433 L375,400 Z"
                    fill="#DE0603"
                    fillOpacity=".38"
                  />
                </g>

                {/* leader lines */}
                <g stroke="#98A2A6" strokeWidth="1.4" className="ea-map-label">
                  <line x1="346" y1="288" x2="382" y2="306" />
                  <line x1="372" y1="342" x2="391" y2="336" />
                  <line x1="546" y1="352" x2="454" y2="336" />
                  <line x1="367" y1="420" x2="379" y2="408" />
                  <line x1="542" y1="432" x2="424" y2="398" />
                </g>

                <text
                  x="240"
                  y="180"
                  className="ea-map-label"
                  fontFamily="Mulish,sans-serif"
                  fontSize="17"
                  fontWeight="700"
                  fill="#7C8A87"
                  textAnchor="middle"
                >
                  Mobilisation on request
                </text>

                {/* office pins */}
                <g filter="url(#eaPinShadow)" stroke="#fff" strokeWidth="1.4">
                  <path
                    d="M391,320 c-4.4,0 -8,3.5 -8,7.9 0,5.9 8,13.6 8,13.6 s8,-7.7 8,-13.6 c0,-4.4 -3.6,-7.9 -8,-7.9 Z"
                    fill="#DE0603"
                  />
                  <circle cx="391" cy="328" r="2.8" fill="#fff" stroke="none" />
                  <path
                    d="M414,384 c-4.4,0 -8,3.5 -8,7.9 0,5.9 8,13.6 8,13.6 s8,-7.7 8,-13.6 c0,-4.4 -3.6,-7.9 -8,-7.9 Z"
                    fill="#DE0603"
                  />
                  <circle cx="414" cy="392" r="2.8" fill="#fff" stroke="none" />
                </g>

                {/* labels */}
                <g className="ea-map-label" fontFamily="Mulish,sans-serif">
                  <g>
                    <rect x="254" y="271" rx="4" width="92" height="30" fill="#fff" stroke="#C6D2CF" strokeWidth="1.4" />
                    <text x="300" y="291" fontSize="16" fontWeight="800" fill="#001E57" textAnchor="middle">
                      Uganda
                    </text>
                  </g>
                  <g>
                    <rect x="268" y="329" rx="4" width="104" height="28" fill="#fff" stroke="#DE0603" strokeWidth="1.4" />
                    <circle cx="284" cy="343" r="4" fill="#DE0603" />
                    <text x="326" y="348" fontSize="14" fontWeight="700" fill="#001E57" textAnchor="middle">
                      Kampala
                    </text>
                  </g>
                  <g>
                    <rect x="546" y="337" rx="4" width="84" height="30" fill="#fff" stroke="#C6D2CF" strokeWidth="1.4" />
                    <text x="588" y="357" fontSize="16" fontWeight="800" fill="#001E57" textAnchor="middle">
                      Kenya
                    </text>
                  </g>
                  <g>
                    <rect x="263" y="405" rx="4" width="104" height="30" fill="#fff" stroke="#C6D2CF" strokeWidth="1.4" />
                    <text x="315" y="425" fontSize="16" fontWeight="800" fill="#001E57" textAnchor="middle">
                      Tanzania
                    </text>
                  </g>
                  <g>
                    <rect x="542" y="417" rx="4" width="152" height="30" fill="#fff" stroke="#DE0603" strokeWidth="1.4" />
                    <circle cx="557" cy="432" r="4" fill="#DE0603" />
                    <text x="623" y="437" fontSize="13" fontWeight="700" fill="#001E57" textAnchor="middle">
                      Dar es Salaam
                    </text>
                  </g>
                </g>
              </svg>

              <ul className="ea-map-mobile-key">
                <li>
                  <i style={{ background: '#DE0603' }} /> Kampala office, Uganda
                </li>
                <li>
                  <i style={{ background: '#DE0603' }} /> Dar es Salaam office, Tanzania
                </li>
                <li>
                  <i style={{ background: 'rgba(222,6,3,.3)', border: '1px solid #DE0603' }} /> Uganda,
                  Tanzania and Kenya
                </li>
                <li>
                  <i style={{ background: '#DFE6E4', border: '1px solid #C6D2CF' }} /> Mobilisation on
                  request
                </li>
              </ul>
            </figure>

            <div>
              <ul className="ea-legend">
                <li>
                  <span className="ea-legend__key ea-legend__key--office">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C8.6 2 5.9 4.7 5.9 8.1 5.9 12.7 12 22 12 22s6.1-9.3 6.1-13.9C18.1 4.7 15.4 2 12 2Zm0 8.7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="ea-legend__t">Registered Offices</span>
                    <span className="ea-legend__d">
                      Kampala, and the Tanzania location once confirmed.
                    </span>
                  </span>
                </li>
                <li>
                  <span className="ea-legend__key ea-legend__key--served" />
                  <span>
                    <span className="ea-legend__t">Countries Served</span>
                    <span className="ea-legend__d">Uganda, Tanzania and Kenya.</span>
                  </span>
                </li>
                <li>
                  <span className="ea-legend__key ea-legend__key--mob" />
                  <span>
                    <span className="ea-legend__t">Mobilisation on Request</span>
                    <span className="ea-legend__d">The remainder of the continent.</span>
                  </span>
                </li>
              </ul>

              <p className="ea-map-note">
                Mozambique is deliberately excluded. IXAR holds no registration and has completed no
                work there, so at this stage it carries the same status as any other African country.
                Adding it would be a claim the page cannot support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. LICENCES, APPROVALS AND COMPLIANCE ================= */}
      <section className="ea-section ea-section--tint" id="ea-licences">
        <div className="ea-wrap">
          <SectionHead eyebrow="Compliance" title="Licences, Approvals and Compliance" center />

          <div className="ea-grid ea-grid--4 ea-rev">
            <article className="ea-lcard">
              <span className="ea-lcard__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9.2" />
                  <circle cx="12" cy="12" r="2.4" />
                  <path d="M12 3.1a8.9 8.9 0 0 0-4.5 1.2l3.3 5.7a2.4 2.4 0 0 1 1.2-.3Z" />
                  <path d="M19.7 16.6a8.9 8.9 0 0 0 1.1-4.6h-6.6a2.4 2.4 0 0 1-.6 1.1Z" />
                  <path d="M8.6 20.4a8.9 8.9 0 0 0 4.6.6l-3.3-5.7a2.4 2.4 0 0 1-1.1-.7Z" />
                </svg>
              </span>
              <h3>Radiation Safety Authorisation</h3>
              <p>
                Licensed to own, store, transport and operate sealed radioactive sources by the
                Uganda Atomic Energy Council and the Tanzania Atomic Energy Commission. Sources in
                use include Iridium-192, Selenium-75 and Cobalt-60, alongside X-ray and close
                proximity radiography systems.
              </p>
            </article>

            <article className="ea-lcard">
              <span className="ea-lcard__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.2" y="3.4" width="17.6" height="13" rx="1.8" />
                  <path d="M6.8 7.6h10.4M6.8 10.8h6.6" />
                  <circle cx="16.6" cy="17.4" r="3.1" />
                  <path d="M14.4 19.8 13.6 23l3-1.4 3 1.4-.8-3.2" />
                </svg>
              </span>
              <h3>Certified Personnel</h3>
              <p>
                Technicians qualified and certified to Level II and Level III in accordance with ASNT
                SNT-TC-1A. Level III personnel carry 7 to 25 years of field experience, Level II
                personnel 5 to 10 years. Qualified Radiation Protection Officers assigned to all
                source handling work.
              </p>
            </article>

            <article className="ea-lcard">
              <span className="ea-lcard__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.4 4.2 5.8v5.4c0 4.8 3.3 8.9 7.8 10 4.5-1.1 7.8-5.2 7.8-10V5.8Z" />
                  <path d="M8.6 12.1 11 14.6l4.6-5" />
                </svg>
              </span>
              <h3>Quality Management</h3>
              <p>
                ISO 9001 certified since 2003 with Bureau Veritas registration. Written practices and
                procedures aligned to ASTM, ASME, API, BS, DIN and NACE, or to client specified standards.
              </p>
            </article>

            <article className="ea-lcard">
              <span className="ea-lcard__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9.2" />
                  <path d="M2.8 12h18.4" />
                  <path d="M12 2.8a14.6 14.6 0 0 1 0 18.4 14.6 14.6 0 0 1 0-18.4Z" />
                </svg>
              </span>
              <h3>Industry Standing</h3>
              <p>
                Member of the American Society for Non-Destructive Testing, the American Welding
                Society, ASTM, NACE, ISNT and NANSO. Regular member of the International Pipeline and
                Offshore Contractors Association (IPLOCA).
              </p>
            </article>
          </div>

          <div className="ea-cert-row ea-rev">
            <p className="ea-cert-row__label">Accreditations &amp; Certifications</p>
            <div className="ea-cert-row__tiles">
              <div className="ea-cert-tile">ISO 9001:2015</div>
              <div className="ea-cert-tile">ASNT SNT-TC-1A</div>
              <div className="ea-cert-tile">IPLOCA</div>
              <div className="ea-cert-tile">BARC / AERB</div>
              <div className="ea-cert-tile">Bureau Veritas</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. SERVICES WE OFFER ================= */}
      <section className="ea-section" id="ea-services">
        <div className="ea-wrap">
          <SectionHead eyebrow="Capability" title="Services We Offer" center />

          <div className="ea-grid ea-grid--4 ea-rev">
            {SERVICES.map((s, idx) => (
              <article className="ea-card" key={idx}>
                {s.img ? (
                  <figure className="ea-card__media">
                    <img src={s.img.startsWith('/') ? s.img : `${IMG}${s.img}`} alt={s.title} loading="lazy" />
                  </figure>
                ) : (
                  <Placeholder imgRef="IMG-S" desc={`${s.title}, square or 4:3`} ratio="4x3" />
                )}
                <div className="ea-card__body">
                  <span className="ea-card__num">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="ea-card__title">{s.title}</h3>
                  <p className="ea-card__text">{s.desc || s.text}</p>
                  <a className="ea-card__more" href="/services">
                    Read More <ArrowGlyph />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. INDUSTRIES WE SERVE ================= */}
      <section className="ea-section ea-section--tint" id="ea-industries">
        <div className="ea-wrap">
          <SectionHead eyebrow="Sectors" title="Industries We Serve" center />

          <div className="ea-grid ea-grid--4 ea-rev">
            {INDUSTRIES.map((s, idx) => (
              <article className="ea-card" key={idx}>
                {s.img ? (
                  <figure className="ea-card__media">
                    <img src={s.img.startsWith('/') ? s.img : `${IMG}${s.img}`} alt={s.title} loading="lazy" />
                  </figure>
                ) : (
                  <Placeholder imgRef="IMG-I" desc={`${s.title}, square or 4:3`} ratio="4x3" />
                )}
                <div className="ea-card__body">
                  <h3 className="ea-card__title">{s.title}</h3>
                  <p className="ea-card__text">{s.desc || s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. TRUSTED BY ================= */}
      <section className="ea-section" id="ea-trusted">
        <div className="ea-wrap">
          <SectionHead eyebrow="Regional Track Record" title="Trusted By Leading Operators" center />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginTop: '36px',
            }}
            className="ea-rev"
          >
            {[
              {
                name: 'TotalEnergies',
                url: 'https://totalenergies.com',
                desc: 'Tilenga Upstream Oil Development Project, Uganda',
                badge: 'Oil & Gas Major',
                color: '#E31E24',
              },
              {
                name: 'CNOOC',
                url: 'https://www.cnooc.com.cn/en/',
                desc: 'Kingfisher Oilfield Development Project, Uganda',
                badge: 'Offshore & Upstream',
                color: '#001E57',
              },
              {
                name: 'EACOP',
                url: 'https://eacop.com',
                desc: 'East African Crude Oil Pipeline (Uganda - Tanzania)',
                badge: 'Cross-Country Pipeline',
                color: '#15803D',
              },
              {
                name: 'Praj Industries',
                url: 'https://www.praj.net',
                desc: 'Bio-Refinery & Process Plant NDT Inspection, Tanzania',
                badge: 'Process Engineering',
                color: '#C2410C',
              },
              {
                name: 'UNOC',
                url: 'https://www.unoc.co.ug',
                desc: 'Uganda National Oil Company Infrastructure',
                badge: 'National Oil Company',
                color: '#0369A1',
              },
              {
                name: 'Kakira Sugar',
                url: 'https://www.kakirasugar.com',
                desc: 'Sugar Mill Boilers & Evaporator Testing, Uganda',
                badge: 'Agro-Industrial',
                color: '#B45309',
              },
              {
                name: 'Madhvani Group',
                url: 'https://www.madhvanigroup.com',
                desc: 'Heavy Engineering & Industrial Plant Inspection',
                badge: 'Industrial Conglomerate',
                color: '#4338CA',
              },
              {
                name: 'Tullow Oil',
                url: 'https://www.tullowoil.com',
                desc: 'Energy Exploration Infrastructure, East Africa',
                badge: 'Energy Exploration',
                color: '#0F766E',
              },
            ].map((c) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  borderRadius: '8px',
                  padding: '22px 20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: c.color }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: c.color, background: `${c.color}15`, padding: '4px 10px', borderRadius: '4px' }}>
                      {c.badge}
                    </span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#001E57', margin: '6px 0 4px 0' }}>{c.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#6B6B6B', lineHeight: '1.5', margin: 0 }}>{c.desc}</p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '0.8125rem', fontWeight: 700, color: c.color, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Visit Client Website &rarr;
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. LEARN MORE ================= */}
      <section className="ea-section ea-section--tint" id="ea-learn">
        <div className="ea-wrap">
          <SectionHead eyebrow="Documentation" title="Learn More & Downloads" center />

          <div className="ea-dl-grid ea-rev">
            <article className="ea-dl-card">
              <div className="ea-dl-card__thumb" style={{ background: '#111827', color: '#fff', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '4px 4px 0 0' }}>
                <DownloadGlyph style={{ width: '40px', height: '40px', marginBottom: '12px', color: '#E31E24' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>IXAR Company Profile</span>
              </div>
              <div className="ea-dl-card__body">
                <h3>Company Profile</h3>
                <p>
                  A full introduction to IXAR: history, service portfolio, certifications, equipment
                  and international presence across 8 countries.
                </p>
                <div className="ea-dl-card__foot">
                  <a className="ea-btn ea-btn--navy" href="/downloads/IXAR-Company-Profile.pdf" download="IXAR-Company-Profile.pdf">
                    <DownloadGlyph />
                    Download Company Profile (PDF)
                  </a>
                  <span className="ea-dl-card__updated">
                    Last updated August 2026
                  </span>
                </div>
              </div>
            </article>

            <article className="ea-dl-card">
              <div className="ea-dl-card__thumb" style={{ background: '#111827', color: '#fff', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: '4px 4px 0 0' }}>
                <DownloadGlyph style={{ width: '40px', height: '40px', marginBottom: '12px', color: '#E31E24' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>East Africa Projects</span>
              </div>
              <div className="ea-dl-card__body">
                <h3>Completed Projects, East Africa</h3>
                <p>
                  A comprehensive record of NDT &amp; inspection projects delivered across Uganda, Tanzania and Kenya.
                </p>
                <div className="ea-dl-card__foot">
                  <a className="ea-btn ea-btn--navy" href="/downloads/IXAR-East-Africa-Project-List.pdf" download="IXAR-East-Africa-Project-List.pdf">
                    <DownloadGlyph />
                    Download Project List (PDF)
                  </a>
                  <span className="ea-dl-card__updated">
                    Last updated August 2026
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= 9. BACKED BY OVER 55 YEARS ================= */}
      <section className="ea-section ea-section--navy" id="ea-backed">
        <div className="ea-wrap">
          <div className="ea-backed ea-rev">
            <div className="ea-backed__copy">
              <span className="ea-eyebrow">Parent Company</span>
              <h2 className="ea-sec-title">Backed by Over 55 Years of NDT Experience</h2>
              <span className="ea-rule" />
              <p style={{ marginTop: '26px' }}>
                IXAR East Africa operates as part of Industrial X-Ray and Allied Radiographers (I)
                Pvt. Ltd., founded in 1969 and today a leader in non-destructive testing in India and
                internationally. The group employs over 1,000 technicians, holds ISO 9001
                certification, operates a fleet of mobile radiography units, and runs a training
                institute accredited in collaboration with the Bhabha Atomic Research Centre in
                Mumbai. Regional teams draw on group equipment, technical specialists and written
                practices whenever a project calls for it.
              </p>

              <div className="ea-offices">
                <p className="ea-offices__label">International offices</p>
                <p className="ea-offices__list">
                  India &middot; Uganda &middot; Tanzania &middot; Nigeria &middot; Netherlands
                  &middot; UAE &middot; Oman &middot; Saudi Arabia
                </p>
              </div>

              <a className="ea-btn ea-btn--primary" href="/contact">
                About IXAR
              </a>
            </div>

            <figure className="ea-card__media ea-backed__media">
              <img
                src={`${IMG}ea-backed-barc.webp`}
                alt="BARC-accredited IXAR training centre, Mumbai"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ================= 10. CONTACT ================= */}
      <section className="ea-section" id="ea-enquiry">
        <div className="ea-wrap">
          <SectionHead eyebrow="Get in touch" title="Contact" center />

          <div className="ea-contact-layout ea-rev">
            <div className="ea-form-card">
              {!sent && (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className={validated ? 'ea-was-validated' : undefined}
                >
                  <div className="ea-form-grid">
                    <div className="ea-field">
                      <label htmlFor="ea-f-name">
                        Full name<span className="ea-req">*</span>
                      </label>
                      <input id="ea-f-name" name="name" type="text" required autoComplete="name" />
                      <span className="ea-err">Please enter your full name.</span>
                    </div>

                    <div className="ea-field">
                      <label htmlFor="ea-f-company">
                        Company<span className="ea-req">*</span>
                      </label>
                      <input
                        id="ea-f-company"
                        name="company"
                        type="text"
                        required
                        autoComplete="organization"
                      />
                      <span className="ea-err">Please enter your company.</span>
                    </div>

                    <div className="ea-field">
                      <label htmlFor="ea-f-country">
                        Country<span className="ea-req">*</span>
                      </label>
                      <select id="ea-f-country" name="country" required defaultValue="">
                        <option value="">Please select</option>
                        <option>Uganda</option>
                        <option>Tanzania</option>
                        <option>Kenya</option>
                        <option>Other</option>
                      </select>
                      <span className="ea-err">Please select a country.</span>
                    </div>

                    <div className="ea-field">
                      <label htmlFor="ea-f-email">
                        Email<span className="ea-req">*</span>
                      </label>
                      <input id="ea-f-email" name="email" type="email" required autoComplete="email" />
                      <span className="ea-err">Please enter a valid email address.</span>
                    </div>

                    <div className="ea-field ea-field--full">
                      <label htmlFor="ea-f-phone">
                        Phone or WhatsApp number<span className="ea-req">*</span>
                      </label>
                      <input id="ea-f-phone" name="phone" type="text" required autoComplete="tel" />
                      <span className="ea-err">Please enter a phone or WhatsApp number.</span>
                    </div>

                    <div className="ea-field ea-field--full">
                      <label htmlFor="ea-f-service">
                        Service of interest<span className="ea-opt">Optional</span>
                      </label>
                      <select id="ea-f-service" name="service" defaultValue="">
                        <option value="">Please select</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="ea-field ea-field--full">
                      <label htmlFor="ea-f-message">
                        Message<span className="ea-req">*</span>
                      </label>
                      <textarea id="ea-f-message" name="message" required />
                      <span className="ea-err">Please enter a message.</span>
                    </div>
                  </div>

                  <div className="ea-form-foot">
                    <button className="ea-btn ea-btn--primary" type="submit">
                      Send Enquiry
                    </button>
                  </div>

                  <p className="ea-form-routing">
                    <Chip>
                      [Routing: submissions go to a single recipient address confirmed by Rishi Jain,
                      held in one configurable field. Not yet wired up in this mock-up.]
                    </Chip>
                  </p>
                </form>
              )}

              {sent && (
                <div className="ea-form-done is-on" role="status" aria-live="polite">
                  <div className="ea-form-done__tick">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="m5 12.6 4.6 4.6L19 7.8"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3>Thank you, your enquiry has been sent.</h3>
                  <p>A member of the IXAR East Africa team will be in touch shortly.</p>
                </div>
              )}
            </div>

            <div>
              <div className="ea-office-card">
                <p className="ea-office-card__tag">Regional office</p>
                <h3>Kampala, Uganda</h3>

                <figure className="ea-card__media ea-office-card__media">
                  <img
                    src={`${IMG}ea-office-kampala.webp`}
                    alt="IXAR (EA) Ltd site board and crew, Tilenga Project, Uganda"
                    loading="lazy"
                  />
                  <figcaption className="ea-card__credit">
                    IXAR (EA) Ltd site board, Tilenga Project
                  </figcaption>
                </figure>

                <ul className="ea-office-lines" style={{ marginTop: '14px' }}>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                    <span>
                      <Chip>
                        Plot No. 72, Kanjokya Street, Kamwokya, P.O. Box 28673 Nakawa, Kampala,
                        Uganda — from site signage, to be confirmed.
                      </Chip>
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.4 3.5h3.1l1.6 4-2 1.3a12 12 0 0 0 6.1 6.1l1.3-2 4 1.6v3.1a1.8 1.8 0 0 1-2 1.8A16.8 16.8 0 0 1 4.6 5.5a1.8 1.8 0 0 1 1.8-2Z" />
                    </svg>
                    <span>
                      <Chip>
                        +256 777 166392 &middot; +256 414 251251 &middot; +256 705 731596 — from site
                        signage, to be confirmed.
                      </Chip>
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3.8 6.2 8.2 6.3 8.2-6.3" />
                    </svg>
                    <span>uganda.ixar@gmail.com &middot; www.ixar.africa</span>
                  </li>
                </ul>

                <div className="ea-map-embed" style={{ marginTop: '20px' }}>
                  <iframe
                    title="IXAR Kampala Office Location"
                    src="https://maps.google.com/maps?q=Kampala,%20Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0, borderRadius: '6px' }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="ea-office-card">
                <p className="ea-office-card__tag">Regional office</p>
                <h3>Tanzania</h3>
                <ul className="ea-office-lines" style={{ marginTop: '14px' }}>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                    <span>
                      Dar es Salaam, Tanzania &middot; Servicing onshore and offshore installations across Tanzania.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="ea-wa-card">
                <h3>Direct WhatsApp Support</h3>
                <p>
                  Click to launch instant WhatsApp enquiry with pre-filled message:
                </p>
                <span className="ea-wa-quote">
                  &ldquo;Hello IXAR, I would like to enquire about NDT services in East Africa.&rdquo;
                </span>
                <a
                  className="ea-btn ea-btn--primary"
                  style={{ marginTop: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', borderColor: '#25D366' }}
                  href="https://wa.me/256414251251?text=Hello%20IXAR,%20I%20would%20like%20to%20enquire%20about%20NDT%20services%20in%20East%20Africa."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppGlyph />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHATSAPP FLOAT ================= */}
      <motion.a
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="ea-wa-float"
        href="https://wa.me/256414251251?text=Hello%20IXAR,%20I%20would%20like%20to%20enquire%20about%20NDT%20services%20in%20East%20Africa."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with IXAR East Africa on WhatsApp"
      >
        <WhatsAppGlyph />
      </motion.a>

      {/* ==========================================================================
          Scoped styles. Everything below is namespaced `ea-` AND scoped under
          `.ea-page`, so it cannot collide with index.css, Navbar or Footer.
          ========================================================================== */}
      <style>{`
.ea-page{
  --ea-brand:#E31E24;
  --ea-brand-dark:#B00502;
  --ea-navy:#001E57;
  --ea-ink:#000000;
  --ea-body:#444444;
  --ea-body-soft:#6B6B6B;
  --ea-tint:#edf2f1;
  --ea-muted:#C6D2CF;
  --ea-line:#EAEAEA;
  --ea-white:#ffffff;
  --ea-accent:#fea75e;

  --ea-ph-bg:#e9ecee;
  --ea-ph-bg2:#e1e5e8;
  --ea-ph-ink:#8B9297;

  --ea-amber-bg:#FFF3D6;
  --ea-amber-line:#E9BC63;
  --ea-amber-ink:#7A5200;

  --ea-wrap:1140px;
  --ea-pad:24px;
  --ea-sec:96px;
  --ea-radius:6px;
  --ea-radius-lg:10px;
  --ea-shadow:0 2px 10px rgba(0,0,0,.05);
  --ea-shadow-lift:0 14px 34px rgba(0,30,87,.13);

  /* clears the app's fixed navbar; --nav-h is published by Navbar at runtime */
  padding-top:var(--nav-h,124px);

  font-family:"Mulish",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  font-weight:400;
  font-size:16px;
  line-height:1.5;
  color:var(--ea-body);
  background:var(--ea-white);
  overflow-x:hidden;
}
/* Base element rules use :where() so they carry ZERO specificity, exactly as the
   bare a{} / p{} / h1{} rules did in the original mock-up. Scoping them as
   .ea-page a instead would out-rank every component rule below (a red
   .ea-btn--primary would inherit body grey, .ea-card__more would lose its
   brand colour, .ea-trusted-note would lose its margins, and so on). */
:where(.ea-page) *,:where(.ea-page) *::before,:where(.ea-page) *::after{box-sizing:border-box}
:where(.ea-page) img{max-width:100%;display:block}
:where(.ea-page) a{color:inherit;text-decoration:none}
:where(.ea-page) h1,:where(.ea-page) h2,:where(.ea-page) h3,
:where(.ea-page) h4,:where(.ea-page) h5{
  margin:0;color:var(--ea-ink);font-weight:700;line-height:1.15;
  font-family:"Mulish",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  letter-spacing:normal;
}
:where(.ea-page) p{margin:0 0 16px}
:where(.ea-page) p:last-child{margin-bottom:0}
:where(.ea-page) ul{margin:0;padding:0;list-style:none}
:where(.ea-page) button,:where(.ea-page) input,
:where(.ea-page) select,:where(.ea-page) textarea{font:inherit;color:inherit}

.ea-wrap{width:100%;max-width:var(--ea-wrap);margin:0 auto;padding:0 var(--ea-pad)}
.ea-section{padding:var(--ea-sec) 0}
.ea-section--tint{background:var(--ea-tint)}
.ea-section--navy{background:var(--ea-navy);color:rgba(255,255,255,.82)}
.ea-section--navy h2,.ea-section--navy h3,.ea-section--navy h4{color:var(--ea-white)}

/* ---------- section headings ------------------------------------------- */
.ea-eyebrow{
  display:block;font-size:14px;font-weight:800;letter-spacing:.14em;
  text-transform:uppercase;color:var(--ea-brand);margin:0 0 14px;
}
.ea-section--navy .ea-eyebrow{color:#FF7A78}
.ea-sec-title{font-size:40px;font-weight:700;letter-spacing:-.01em}
.ea-sec-head{max-width:760px;margin-bottom:48px}
.ea-sec-head--center{margin-left:auto;margin-right:auto;text-align:center}
.ea-sec-head p{margin-top:18px;font-size:17px;line-height:1.65}
.ea-rule{display:block;width:64px;height:4px;background:var(--ea-brand);margin:20px 0 0}
.ea-sec-head--center .ea-rule{margin-left:auto;margin-right:auto}

/* ---------- buttons ----------------------------------------------------- */
.ea-btn{
  display:inline-flex;align-items:center;gap:10px;
  padding:15px 28px;font-size:14px;font-weight:700;line-height:1;
  border:2px solid transparent;border-radius:0;cursor:pointer;
  transition:background .22s ease,color .22s ease,border-color .22s ease,transform .22s ease;
}
.ea-btn--primary{background:var(--ea-brand);color:var(--ea-white);border-color:var(--ea-brand)}
.ea-btn--primary:hover{background:var(--ea-brand-dark);border-color:var(--ea-brand-dark);transform:translateY(-2px)}
.ea-btn--ghost{background:transparent;color:var(--ea-white);border-color:rgba(255,255,255,.75)}
.ea-btn--ghost:hover{background:var(--ea-white);color:var(--ea-navy);border-color:var(--ea-white);transform:translateY(-2px)}
.ea-btn--navy{background:var(--ea-navy);color:var(--ea-white);border-color:var(--ea-navy)}
.ea-btn--navy:hover{background:#00163f;border-color:#00163f;transform:translateY(-2px)}
.ea-btn svg{width:16px;height:16px;flex:none;fill:currentColor}

/* ---------- unconfirmed content chip ------------------------------------ */
.ea-chip{
  display:inline;padding:1px 9px;margin:0 1px;
  background:var(--ea-amber-bg);border:1px solid var(--ea-amber-line);border-radius:3px;
  color:var(--ea-amber-ink);font-size:.86em;font-weight:700;line-height:1.45;
}
.ea-section--navy .ea-chip{background:#5A4415;border-color:#B08B39;color:#FFDFA0}

/* ---------- review banner ----------------------------------------------- */
.ea-review-bar{
  background:#1D2430;color:#D7DEE8;font-size:13.5px;line-height:1.5;
  border-bottom:3px solid var(--ea-accent);
}
.ea-review-bar__in{
  max-width:var(--ea-wrap);margin:0 auto;padding:13px var(--ea-pad);
  display:flex;align-items:flex-start;gap:14px;
}
.ea-review-bar__dot{flex:none;width:9px;height:9px;border-radius:50%;background:var(--ea-accent);margin-top:6px}
.ea-review-bar__txt{flex:1;margin:0}
.ea-review-bar strong{color:#fff;font-weight:800}
.ea-review-bar__key{display:inline-block;width:11px;height:11px;border-radius:2px;vertical-align:-1px;margin:0 3px 0 8px}
.ea-review-bar__key--amber{background:var(--ea-amber-bg);border:1px solid var(--ea-amber-line)}
.ea-review-bar__key--grey{background:var(--ea-ph-bg);border:1px solid #cfd5d9}
.ea-review-bar__close{
  flex:none;background:transparent;border:1px solid rgba(255,255,255,.28);
  color:#D7DEE8;width:30px;height:30px;border-radius:3px;cursor:pointer;
  font-size:16px;line-height:1;display:flex;align-items:center;justify-content:center;
  transition:background .2s ease,color .2s ease;
}
.ea-review-bar__close:hover{background:rgba(255,255,255,.14);color:#fff}

/* ---------- image placeholders ------------------------------------------ */
.ea-ph{
  position:relative;overflow:hidden;
  background:repeating-linear-gradient(135deg,var(--ea-ph-bg) 0 14px,var(--ea-ph-bg2) 14px 28px);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;padding:20px;gap:10px;color:var(--ea-ph-ink);
  border:1px solid #d8dde1;
}
.ea-ph::after{content:"";position:absolute;inset:8px;border:1px dashed rgba(139,146,151,.42);pointer-events:none}
.ea-ph__glyph{width:34px;height:34px;fill:none;stroke:var(--ea-ph-ink);stroke-width:1.6;opacity:.75}
.ea-ph__ref{
  font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
  background:rgba(255,255,255,.82);border:1px solid #d3d9dd;border-radius:3px;padding:3px 9px;
}
.ea-ph__desc{font-size:12.5px;line-height:1.45;max-width:38ch;font-weight:500}
.ea-ph--16x9{aspect-ratio:16/9}
.ea-ph--4x3{aspect-ratio:4/3}
.ea-ph--1x1{aspect-ratio:1/1}
.ea-ph--tall{aspect-ratio:3/4}
.ea-ph--free{height:100%}

/* ---------- real photography -------------------------------------------- */
.ea-card__media{position:relative;margin:0;overflow:hidden;background:#0d1826}
.ea-card__media img{width:100%;height:100%;object-fit:cover;aspect-ratio:4/3}
.ea-card__credit{
  position:absolute;left:0;right:0;bottom:0;
  padding:6px 10px;background:rgba(9,18,38,.66);
  font-size:10.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.86);
  text-align:left;
}
.ea-backed__media{border-radius:var(--ea-radius-lg);border:1px solid rgba(255,255,255,.18)}
.ea-office-card__media{border-radius:var(--ea-radius);margin-top:16px}
.ea-office-card__media img{aspect-ratio:16/10}

/* ---------- hero -------------------------------------------------------- */
.ea-hero{position:relative;overflow:hidden;background:var(--ea-navy);isolation:isolate}
.ea-hero__media{position:absolute;inset:0;z-index:0}
.ea-hero__zoom{position:absolute;inset:-6%;animation:ea-kenburns 20s ease-in-out infinite alternate}
.ea-hero__img{width:100%;height:100%;object-fit:cover}
.ea-hero__scrim{
  position:absolute;inset:0;z-index:1;
  background:linear-gradient(100deg,rgba(0,30,87,.93) 0%,rgba(0,30,87,.80) 42%,rgba(0,30,87,.55) 100%);
}
@keyframes ea-kenburns{
  from{transform:scale(1) translate3d(0,0,0)}
  to{transform:scale(1.12) translate3d(-1.5%,-1.5%,0)}
}
.ea-hero__in{position:relative;z-index:2;padding:132px 0 124px}
.ea-hero__col{max-width:720px}
.ea-hero h1{
  font-size:56px;font-weight:800;line-height:1.06;color:var(--ea-white);
  letter-spacing:-.02em;margin:0 0 22px;
}
.ea-hero__sub{font-size:20px;line-height:1.6;color:rgba(255,255,255,.9);margin:0 0 14px;font-weight:400}
.ea-hero__support{
  font-size:15px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;
  color:#FFB3B1;margin:0 0 36px;
}
.ea-hero__actions{display:flex;flex-wrap:wrap;gap:14px}
.ea-hero__phlabel{
  position:absolute;z-index:3;top:26px;right:26px;max-width:330px;padding:14px 16px;
  background:rgba(9,18,38,.72);border:1px solid rgba(255,255,255,.28);border-radius:var(--ea-radius);
  display:flex;flex-direction:column;gap:7px;text-align:left;
}
.ea-hero__phlabel .ea-ph__ref{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.34);color:#fff;align-self:flex-start}
.ea-hero__phlabel .ea-ph__desc{color:rgba(255,255,255,.86);font-size:12.5px;line-height:1.5;max-width:none}
.ea-hero__flag{
  position:absolute;left:0;right:0;bottom:0;z-index:2;
  background:rgba(0,0,0,.28);border-top:1px solid rgba(255,255,255,.16);
}
.ea-hero__flag .ea-wrap{
  display:flex;flex-wrap:wrap;gap:10px 34px;padding-top:16px;padding-bottom:16px;
  font-size:13px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:rgba(255,255,255,.72);
}
.ea-hero__flag span{display:flex;align-items:center;gap:9px}
.ea-hero__flag span::before{content:"";width:7px;height:7px;background:var(--ea-brand);border-radius:50%;flex:none}

/* ---------- stats strip -------------------------------------------------- */
.ea-stats{background:var(--ea-tint);border-top:1px solid var(--ea-line);border-bottom:1px solid var(--ea-line)}
.ea-stats__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.ea-stat{padding:44px 26px;text-align:center;border-right:1px solid var(--ea-muted)}
.ea-stat:last-child{border-right:0}
.ea-stat__icon{width:38px;height:38px;margin:0 auto 16px;fill:none;stroke:var(--ea-brand);stroke-width:1.7}
.ea-stat__fig{
  display:block;font-size:46px;font-weight:800;line-height:1;color:var(--ea-navy);
  margin-bottom:12px;letter-spacing:-.02em;
}
.ea-stat__fig .ea-chip{display:inline-block;font-size:19px;font-weight:800;vertical-align:middle}
.ea-stat__label{font-size:14.5px;font-weight:700;color:var(--ea-body);letter-spacing:.03em}
.ea-stats__note{
  margin-top:34px;padding:16px 20px;background:var(--ea-white);border-left:3px solid var(--ea-amber-line);
  font-size:13.5px;line-height:1.6;color:var(--ea-body-soft);
}

/* ---------- where we operate -------------------------------------------- */
.ea-map-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center}
.ea-map-figure{background:var(--ea-white);border:1px solid var(--ea-line);border-radius:var(--ea-radius-lg);padding:22px}
.ea-map-figure svg{width:100%;height:auto;display:block}
.ea-map-ref{
  margin-top:14px;padding-top:14px;border-top:1px solid var(--ea-line);
  font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--ea-ph-ink);
}
.ea-legend{margin-top:8px}
.ea-legend li{display:flex;align-items:flex-start;gap:14px;padding:15px 0;border-bottom:1px solid var(--ea-line)}
.ea-legend li:last-child{border-bottom:0}
.ea-legend__key{flex:none;width:26px;height:26px;border-radius:5px;margin-top:1px;display:flex;align-items:center;justify-content:center}
.ea-legend__key--office{background:var(--ea-brand)}
.ea-legend__key--office svg{width:13px;height:13px;fill:#fff}
.ea-legend__key--served{background:var(--ea-brand);opacity:.28;border:1px solid var(--ea-brand)}
.ea-legend__key--mob{background:var(--ea-muted);border:1px solid #AFBDBA}
.ea-legend__t{font-weight:800;color:var(--ea-ink);font-size:15px;display:block}
.ea-legend__d{font-size:13.5px;color:var(--ea-body-soft);line-height:1.5}
.ea-map-mobile-key{display:none}
.ea-map-note{
  margin-top:26px;font-size:13.5px;line-height:1.6;color:var(--ea-body-soft);
  padding:16px 18px;background:var(--ea-white);border-left:3px solid var(--ea-muted);
}

/* ---------- card grids --------------------------------------------------- */
.ea-grid{display:grid;gap:26px}
.ea-grid--4{grid-template-columns:repeat(4,1fr)}
.ea-grid--2{grid-template-columns:repeat(2,1fr)}
.ea-card{
  display:flex;flex-direction:column;height:100%;
  background:var(--ea-white);border:1px solid var(--ea-line);border-radius:var(--ea-radius-lg);
  overflow:hidden;box-shadow:var(--ea-shadow);
  transition:transform .26s ease,box-shadow .26s ease,border-color .26s ease;
}
.ea-card:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift);border-color:var(--ea-muted)}
.ea-card__body{display:flex;flex-direction:column;flex:1;padding:26px 24px 24px}
.ea-card__title{font-size:19px;font-weight:700;line-height:1.3;color:var(--ea-navy);margin:0 0 12px}
.ea-card__text{font-size:14.5px;line-height:1.62;color:var(--ea-body);margin:0}
.ea-card__more{
  margin-top:auto;padding-top:20px;
  font-size:13px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--ea-brand);
  display:inline-flex;align-items:center;gap:8px;align-self:flex-start;
}
.ea-card__more svg{width:13px;height:13px;fill:currentColor;transition:transform .22s ease}
.ea-card:hover .ea-card__more svg{transform:translateX(4px)}
.ea-card__num{font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--ea-muted);margin:0 0 8px;display:block}

/* licence cards */
.ea-lcard{
  display:flex;flex-direction:column;height:100%;
  background:var(--ea-white);border:1px solid var(--ea-line);border-top:4px solid var(--ea-brand);
  border-radius:var(--ea-radius);padding:32px 28px;box-shadow:var(--ea-shadow);
  transition:transform .26s ease,box-shadow .26s ease;
}
.ea-lcard:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift)}
.ea-lcard__icon{
  width:56px;height:56px;border-radius:50%;background:rgba(222,6,3,.08);
  display:flex;align-items:center;justify-content:center;margin-bottom:22px;flex:none;
}
.ea-lcard__icon svg{width:28px;height:28px;fill:none;stroke:var(--ea-brand);stroke-width:1.7}
.ea-lcard__ref{
  font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
  color:var(--ea-ph-ink);margin-bottom:10px;display:block;
}
.ea-lcard h3{font-size:19px;line-height:1.28;color:var(--ea-navy);margin:0 0 14px}
.ea-lcard p{font-size:14.5px;line-height:1.65;margin:0}
.ea-cert-row{margin-top:44px;padding:28px;background:var(--ea-white);border:1px solid var(--ea-line);border-radius:var(--ea-radius-lg)}
.ea-cert-row__label{
  font-size:11.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;
  color:var(--ea-body-soft);text-align:center;margin-bottom:20px;
}
.ea-cert-row__tiles{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}
.ea-cert-tile{
  aspect-ratio:16/7;border:1px dashed #d3d9dd;border-radius:var(--ea-radius);background:#f4f6f7;
  display:flex;align-items:center;justify-content:center;
  font-size:12.5px;font-weight:700;letter-spacing:.05em;color:var(--ea-ph-ink);text-align:center;padding:8px;
}
.ea-cert-row__note{margin-top:18px;text-align:center;font-size:13px;color:var(--ea-body-soft)}

/* ---------- trusted by --------------------------------------------------- */
.ea-logo-wall{display:grid;grid-template-columns:repeat(5,1fr);gap:20px}
.ea-logo-tile{
  position:relative;aspect-ratio:16/9;border-radius:var(--ea-radius-lg);
  background:var(--ea-white);border:1px solid var(--ea-line);overflow:hidden;
  transition:box-shadow .3s ease,border-color .3s ease;
}
.ea-logo-tile:hover{box-shadow:var(--ea-shadow-lift);border-color:var(--ea-muted)}
.ea-logo-slide{
  position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;
  opacity:0;transition:opacity .85s ease;filter:grayscale(1);
}
.ea-logo-slide.is-on{opacity:1}
.ea-logo-tile:hover .ea-logo-slide{filter:grayscale(0)}
.ea-logo-slide__mark{font-size:14.5px;font-weight:800;letter-spacing:.05em;color:#A9B0B5}
.ea-logo-slide__ref{font-size:10.5px;font-weight:700;letter-spacing:.14em;color:#C3C9CD}
.ea-trusted-note{
  margin-top:34px;text-align:center;font-size:13.5px;line-height:1.6;color:var(--ea-body-soft);
  max-width:720px;margin-left:auto;margin-right:auto;
}

/* ---------- learn more --------------------------------------------------- */
.ea-dl-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:26px}
.ea-dl-card{
  display:grid;grid-template-columns:190px 1fr;height:100%;
  background:var(--ea-white);border:1px solid var(--ea-line);border-radius:var(--ea-radius-lg);overflow:hidden;
  box-shadow:var(--ea-shadow);transition:transform .26s ease,box-shadow .26s ease;
}
.ea-dl-card:hover{transform:translateY(-6px);box-shadow:var(--ea-shadow-lift)}
.ea-dl-card .ea-ph{height:100%;width:100%;aspect-ratio:auto;min-height:250px;border:0;border-right:1px solid var(--ea-line)}
.ea-dl-card__body{display:flex;flex-direction:column;padding:30px 28px}
.ea-dl-card h3{font-size:20px;line-height:1.3;color:var(--ea-navy);margin:0 0 14px}
.ea-dl-card p{font-size:14.5px;line-height:1.65;margin:0 0 22px}
.ea-dl-card__foot{margin-top:auto}
.ea-dl-card .ea-btn{padding:14px 20px}
.ea-dl-card__updated{display:block;margin-top:14px;font-size:12.5px;font-weight:600;color:var(--ea-body-soft)}
.ea-dev-note{
  margin-top:30px;padding:18px 20px;background:var(--ea-white);border-left:3px solid var(--ea-muted);
  font-size:13.5px;line-height:1.6;color:var(--ea-body-soft);
}

/* ---------- backed by ---------------------------------------------------- */
.ea-backed{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.ea-backed__copy p{font-size:16.5px;line-height:1.72;color:rgba(255,255,255,.84)}
.ea-offices{
  margin:30px 0 34px;padding:22px 24px;border:1px solid rgba(255,255,255,.2);border-radius:var(--ea-radius);
  background:rgba(255,255,255,.05);
}
.ea-offices__label{font-size:11.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#FF7A78;margin-bottom:12px}
.ea-offices__list{font-size:16px;font-weight:600;color:var(--ea-white);line-height:1.9;margin-bottom:12px}
.ea-offices__note{font-size:13.5px;line-height:1.6;margin:0}

/* ---------- contact ------------------------------------------------------ */
.ea-contact-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:52px;align-items:start}
.ea-form-card{
  background:var(--ea-white);border:1px solid var(--ea-line);border-radius:var(--ea-radius-lg);
  padding:38px 36px;box-shadow:var(--ea-shadow);
}
.ea-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.ea-field{display:flex;flex-direction:column;gap:8px}
.ea-field--full{grid-column:1 / -1}
.ea-field label{font-size:13px;font-weight:800;letter-spacing:.05em;color:var(--ea-navy)}
.ea-req{color:var(--ea-brand);margin-left:3px}
.ea-opt{color:var(--ea-body-soft);font-weight:600;letter-spacing:0;text-transform:none;font-size:12.5px;margin-left:6px}
.ea-field input,.ea-field select,.ea-field textarea{
  width:100%;padding:13px 14px;border:1px solid #D9DEE1;border-radius:var(--ea-radius);
  background:var(--ea-white);font-size:15px;color:var(--ea-ink);
  transition:border-color .2s ease,box-shadow .2s ease;
}
.ea-field textarea{min-height:132px;resize:vertical}
.ea-field select{
  appearance:none;
  background-image:linear-gradient(45deg,transparent 50%,#8B9297 50%),linear-gradient(135deg,#8B9297 50%,transparent 50%);
  background-position:calc(100% - 20px) 21px,calc(100% - 14px) 21px;
  background-size:6px 6px,6px 6px;background-repeat:no-repeat;padding-right:44px;
}
.ea-field input:focus,.ea-field select:focus,.ea-field textarea:focus{
  outline:none;border-color:var(--ea-navy);box-shadow:0 0 0 3px rgba(0,30,87,.10);
}
.ea-was-validated .ea-field input:invalid,
.ea-was-validated .ea-field select:invalid,
.ea-was-validated .ea-field textarea:invalid{border-color:var(--ea-brand);box-shadow:0 0 0 3px rgba(222,6,3,.09)}
.ea-was-validated .ea-field input:invalid ~ .ea-err,
.ea-was-validated .ea-field select:invalid ~ .ea-err,
.ea-was-validated .ea-field textarea:invalid ~ .ea-err{display:block}
.ea-err{display:none;font-size:12.5px;font-weight:700;color:var(--ea-brand)}
.ea-form-foot{margin-top:26px}
.ea-form-routing{margin-top:20px;font-size:13px;line-height:1.6}
.ea-form-done{text-align:center;padding:56px 30px}
.ea-form-done__tick{
  width:66px;height:66px;border-radius:50%;background:rgba(222,6,3,.09);
  display:flex;align-items:center;justify-content:center;margin:0 auto 22px;
}
.ea-form-done__tick svg{width:32px;height:32px;fill:none;stroke:var(--ea-brand);stroke-width:2.2}
.ea-form-done h3{font-size:24px;color:var(--ea-navy);margin-bottom:12px}
.ea-form-done p{font-size:15px;color:var(--ea-body);max-width:44ch;margin-left:auto;margin-right:auto}

.ea-office-card{
  background:var(--ea-white);border:1px solid var(--ea-line);border-radius:var(--ea-radius-lg);
  padding:32px 30px;box-shadow:var(--ea-shadow);margin-bottom:26px;
}
.ea-office-card h3{font-size:20px;color:var(--ea-navy);margin:0 0 6px}
.ea-office-card__tag{font-size:11.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--ea-brand);margin-bottom:16px}
.ea-office-lines li{display:flex;gap:13px;padding:11px 0;border-bottom:1px solid var(--ea-line);font-size:14.5px;line-height:1.55}
.ea-office-lines li:last-child{border-bottom:0}
.ea-office-lines svg{width:17px;height:17px;flex:none;margin-top:3px;fill:none;stroke:var(--ea-brand);stroke-width:1.7}
.ea-map-embed{aspect-ratio:16/10;border-radius:var(--ea-radius-lg);overflow:hidden;border:1px solid var(--ea-line)}
.ea-map-embed .ea-ph{height:100%}
.ea-wa-card{margin-top:26px;background:var(--ea-navy);border-radius:var(--ea-radius-lg);padding:28px 30px;color:rgba(255,255,255,.82)}
.ea-wa-card h3{font-size:18px;margin:0 0 12px;color:var(--ea-white)}
.ea-wa-card p{font-size:14.5px;line-height:1.62;margin:0 0 20px}
.ea-wa-quote{
  display:block;padding:14px 16px;background:rgba(255,255,255,.07);border-left:3px solid #25D366;
  border-radius:0 var(--ea-radius) var(--ea-radius) 0;font-style:italic;color:#fff;font-size:14.5px;margin-bottom:20px;
}
.ea-wa-card .ea-chip{background:#5A4415;border-color:#B08B39;color:#FFDFA0}

/* ---------- whatsapp float ----------------------------------------------- */
.ea-wa-float{
  position:fixed;right:24px;bottom:24px;z-index:900;
  width:58px;height:58px;border-radius:50%;background:#25D366;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 8px 22px rgba(37,211,102,.42);
  transition:transform .25s ease,box-shadow .25s ease;
}
.ea-wa-float:hover{transform:translateY(-5px);box-shadow:0 14px 30px rgba(37,211,102,.55)}
.ea-wa-float svg{width:30px;height:30px;fill:#fff}

/* ---------- scroll reveal -------------------------------------------------- */
.ea-rev{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s ease}
.ea-rev.is-in{opacity:1;transform:none}

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width:1024px){
  .ea-page{--ea-sec:76px}
  .ea-sec-title{font-size:34px}
  .ea-hero h1{font-size:44px}
  .ea-hero__in{padding:104px 0 108px}
  .ea-hero__sub{font-size:18px}
  .ea-grid--4{grid-template-columns:repeat(2,1fr)}
  .ea-map-layout{grid-template-columns:1fr;gap:38px}
  .ea-backed{grid-template-columns:1fr;gap:38px}
  .ea-contact-layout{grid-template-columns:1fr;gap:38px}
  .ea-logo-wall{grid-template-columns:repeat(3,1fr)}
  .ea-logo-tile:nth-child(n+4){display:none}
  .ea-cert-row__tiles{grid-template-columns:repeat(3,1fr)}
  .ea-stat__fig{font-size:38px}
  .ea-dl-grid{grid-template-columns:1fr}
  .ea-hero__phlabel{max-width:290px}
}
@media (max-width:900px){
  .ea-stats__grid{grid-template-columns:repeat(2,1fr)}
  .ea-stat{border-bottom:1px solid var(--ea-muted)}
  .ea-stat:nth-child(2n){border-right:0}
  .ea-stat:nth-child(n+3){border-bottom:0}
}
@media (max-width:860px){
  .ea-dl-card{grid-template-columns:170px 1fr}
}
@media (max-width:767px){
  .ea-page{--ea-sec:60px;--ea-pad:20px}
  .ea-sec-title{font-size:28px}
  .ea-sec-head{margin-bottom:34px}
  .ea-sec-head p{font-size:15.5px}
  .ea-hero h1{font-size:34px}
  .ea-hero__in{padding:150px 0 96px}
  .ea-hero__phlabel{top:18px;left:20px;right:20px;max-width:none;padding:12px 14px}
  .ea-hero__phlabel .ea-ph__desc{font-size:11.5px}
  .ea-hero__sub{font-size:16.5px}
  .ea-hero__support{font-size:13px}
  .ea-hero__actions{gap:10px}
  .ea-hero__actions .ea-btn{flex:1 1 100%;justify-content:center}
  .ea-hero__flag .ea-wrap{gap:8px 20px;font-size:11px}
  .ea-grid,.ea-dl-grid{gap:18px}
  .ea-grid--4,.ea-grid--2{grid-template-columns:1fr}
  .ea-stats__grid{grid-template-columns:repeat(2,1fr)}
  .ea-stat{padding:30px 14px;border-right:1px solid var(--ea-muted);border-bottom:1px solid var(--ea-muted)}
  .ea-stat:nth-child(2n){border-right:0}
  .ea-stat:nth-child(n+3){border-bottom:0}
  .ea-stat__fig{font-size:34px}
  .ea-stat__label{font-size:13px}
  .ea-logo-wall{grid-template-columns:repeat(2,1fr);gap:14px}
  .ea-logo-tile:nth-child(n+3){display:none}
  .ea-cert-row{padding:20px}
  .ea-cert-row__tiles{grid-template-columns:repeat(2,1fr)}
  .ea-dl-card{grid-template-columns:1fr}
  .ea-dl-card .ea-ph{height:auto;min-height:0;border-right:0;border-bottom:1px solid var(--ea-line);aspect-ratio:16/9}
  .ea-form-card,.ea-office-card,.ea-wa-card{padding:26px 22px}
  .ea-form-grid{grid-template-columns:1fr}
  .ea-wa-float{right:16px;bottom:16px;width:52px;height:52px}
  .ea-wa-float svg{width:26px;height:26px}
  .ea-map-figure .ea-map-label{display:none}
  .ea-map-mobile-key{display:block;margin-top:16px;padding-top:16px;border-top:1px solid var(--ea-line)}
  .ea-map-mobile-key li{display:flex;align-items:center;gap:10px;padding:7px 0;font-size:13.5px;font-weight:600;color:var(--ea-body)}
  .ea-map-mobile-key i{width:14px;height:14px;border-radius:3px;flex:none;display:block}
  .ea-review-bar__in{gap:10px}
  .ea-review-bar{font-size:12.5px}
}
@media (max-width:479px){
  .ea-backed__copy p{font-size:15.5px}
}

/* ---------- reduced motion -------------------------------------------------- */
@media (prefers-reduced-motion:reduce){
  .ea-page *,.ea-page *::before,.ea-page *::after{
    animation-duration:.001ms !important;animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
  }
  .ea-hero__zoom{animation:none;inset:0}
  .ea-rev{opacity:1;transform:none}
  .ea-logo-slide{transition:none}
  .ea-card:hover,.ea-lcard:hover,.ea-dl-card:hover,.ea-wa-float:hover,.ea-btn:hover{transform:none}
}
      `}</style>
    </div>
  );
}
