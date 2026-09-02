import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays, Globe2, ClipboardList, Activity,
  Radiation, BadgeCheck, ShieldCheck, Award, FileText,
} from 'lucide-react';
import Style from '../components/Style';
import AfricaMap from '../components/AfricaMap';
import AppImage from '../components/AppImage';
import ExperienceTable from '../components/ExperienceTable';
import servicesContent from '../content/services.json';
import industriesContent from '../content/industries.json';
import { waLinkProps, WA_DEFAULT_MESSAGE } from '../lib/whatsapp';
import { sendEnquiry } from '../lib/enquiry';

/* ==========================================================================
   IXAR in Africa  ·  /africa
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


const INDUSTRIES = industriesContent.industries;


/* Services, industries and the experience record are edited in the CMS at
   /admin and stored as JSON under src/content. They are imported, not fetched,
   so the prerendered HTML carries the real content and a search engine sees it
   without running any JavaScript. Publishing a change in the CMS commits the
   JSON, which triggers a rebuild. */
const SERVICES = servicesContent.services;

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), 'Other'];

const TRACK_RECORD = [
  {
    title: 'Tilenga CPF (Central Processing Facility)',
    location: 'Buliisa & Nwoya, Uganda',
    capability: 'Automated Ultrasonics (AUT) & Radiography',
    desc: 'High-precision weld testing and NDT inspection on heavy pressure vessels, oil processing trains, and pipe spools.',
    img: '/images/east-africa/ea-hero-tilenga-cpf.webp',
  },
  {
    title: 'Tilenga Pipeline Feeder & Compound',
    location: 'Albertine Graben, Uganda',
    capability: 'Pipeline Girth Weld Inspection',
    desc: 'X-ray crawler radiography and automated ultrasonic scanning across crude oil feeder pipeline compounds.',
    img: '/images/east-africa/ea-svc-pipeline.webp',
  },
  {
    title: 'Praj Bio-Refinery & Industrial Facility',
    location: 'Dar es Salaam & Coast Region, Tanzania',
    capability: 'Tank & Tube Ultrasonic Inspection',
    desc: 'Thickness mapping, magnetic flux leakage, and weld flaw evaluation on process storage tanks and heat exchangers.',
    /* Was ea-svc-radiography.webp: a single technician from the Indian side of
       the group, on a card whose stated capability is ultrasonic work. This
       frame is both the right method and the African crew who ran it. */
    img: '/images/east-africa/ea-svc-ultrasonic.webp',
  },
  {
    title: 'Tilenga Well Pad CSB Operations',
    location: 'Murchison & Buliisa, Uganda',
    capability: 'Digital Radiography (DR) & PAUT',
    desc: 'Rapid digital radiography and phased array ultrasonic evaluation on live well pad piping manifolds.',
    img: '/images/east-africa/ea-svc-digital-radiography.webp',
  },
];

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

function ChevronRightGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18l6-6-6-6" />
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

function SectionHead({ eyebrow, title, center = false, light = false, children }) {
  return (
    <div className={`ea-sec-head${center ? ' ea-sec-head--center' : ''}${light ? ' ea-sec-head--light' : ''} ea-rev`}>
      <span className="ea-eyebrow">{eyebrow}</span>
      <h2 className="ea-sec-title" style={light ? { color: '#FFFFFF' } : undefined}>{title}</h2>
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

/* Genuine IXAR photography only. Two AI-generated frames were removed: one
   fabricated a "CERTIFIED NDT TECHNICIAN Level II UT-PA" patch and an invented
   instrument brand, the other composited Kilimanjaro behind a refinery that
   does not exist. Add stock frames here as they arrive. */
/* ---- page data -------------------------------------------------------- *
 * Countries, headline figures, compliance cards, client strip and the two
 * downloads. Services, industries and projects come from src/content via the
 * CMS; these are page furniture and change rarely. */

const COUNTRIES = [
  'Uganda', 'Tanzania', 'Kenya', 'Rwanda', 'Mozambique', 'Ethiopia', 'Sudan', 'Malawi',
];

const STATS = [
  { icon: CalendarDays,  value: '2019',  label: 'Established in Africa' },
  { icon: Globe2,        value: '8+',    label: 'Countries with Projects Completed' },
  { icon: ClipboardList, value: '12+',   label: 'Projects Completed in Africa' },
  { icon: Activity,      value: '20+',   label: 'NDT Methods Offered' },
];

const LICENCES = [
  {
    icon: Radiation,
    title: 'Radiation Safety Authorisation',
    body: 'Licensed to own, store, transport and operate sealed radioactive sources by the Uganda Atomic Energy Council and the Tanzania Atomic Energy Commission. Sources in use include Iridium-192, Selenium-75 and Cobalt-60, alongside X-ray crawlers and close proximity radiography systems.',
    credsLabel: 'Authorised by',
    creds: ['UAEC Uganda', 'TAEC Tanzania', 'BARC'],
    strong: 2,
  },
  {
    icon: BadgeCheck,
    title: 'Certified Personnel',
    body: 'Technicians qualified and certified to Level II and Level III in accordance with ASNT SNT-TC-1A. Level III personnel carry 7 to 25 years of field experience, Level II personnel 5 to 10 years. Qualified Radiation Protection Officers are assigned to all source handling work.',
    credsLabel: 'Certified to',
    creds: ['ASNT SNT-TC-1A', 'Level II', 'Level III', 'RPO'],
    strong: 1,
  },
  {
    icon: ShieldCheck,
    title: 'Quality Management',
    body: 'ISO 9001 certified since 2003, with written practices and procedures aligned to ASTM, ASME, API, BS, DIN and NACE, or to a client specified standard where one is imposed.',
    credsLabel: 'Certified to',
    creds: ['ISO 9001', 'Bureau Veritas', 'ASME', 'API', 'ASTM'],
    strong: 1,
  },
  {
    icon: Award,
    title: 'Industry Standing',
    body: 'Member of the American Society for Non-Destructive Testing, the American Welding Society, ASTM, NACE, ISNT and NANSO. Regular member of the International Pipeline and Offshore Contractors Association.',
    credsLabel: 'Member of',
    creds: ['IPLOCA', 'ASNT', 'AWS', 'NACE', 'ISNT', 'NANSO'],
    strong: 1,
  },
];

const CLIENT_LOGOS = [
  { name: 'Sinopec', logo: '/images/clients/sinopec.png', url: 'https://www.sinopecgroup.com/group/en/' },
  { name: 'CPECC', logo: '/images/clients/cpecc.png', url: 'http://cpecc.cnpc.com.cn/cpeccen/' },
  { name: 'CCJV', logo: '/images/clients/ccjv.png', url: 'https://www.cnoocuganda.com/' },
  { name: 'PRAJ Projects', logo: '/images/clients/praj.png', url: 'https://www.praj.net/' },
  { name: 'Larsen & Toubro', logo: '/images/clients/lt.png', url: 'https://www.larsentoubro.com/' },
  { name: 'Afrishell-Jeveeka', logo: '/images/clients/afrishell.png', url: 'https://www.jeveeka.com/' },
  { name: 'Ntake Bakery', logo: '/images/clients/ntake.png', url: 'https://ntakegroup.com/' },
  { name: 'Illovo Distillers', logo: '/images/clients/illovo.png', url: 'https://www.illovosugarafrica.com/' },
];

const DOWNLOADS = [
  {
    title: 'Company Profile',
    body: 'A full introduction to IXAR: history, service portfolio, certifications, equipment and international presence.',
    cta: 'Download Company Profile (PDF)',
    href: '/downloads/IXAR-Company-Profile.pdf',
  },
  {
    title: 'Completed Projects, Africa',
    body: 'A record of projects delivered across the continent, with client, scope, location and dates.',
    cta: 'Download Project List (PDF)',
    href: '/downloads/IXAR-Africa-Project-List.pdf',
    dark: true,
  },
];

/* Hero slideshow.
 *
 * Every frame shows the African crews who do this work. Two of the previous
 * five did not: ea-svc-pipeline.webp is equipment laid out in a yard with
 * nobody in it, and ea-svc-radiography.webp is a single technician from the
 * Indian side of the group. Both are still used elsewhere, where the subject
 * of the picture is the method rather than the people.
 *
 * ea-office-kampala.webp also came out. It is a mixed crew, and the two
 * photographs that are permanently on screen - the regional office card above
 * the Kampala map, and the shot beside "Backed by Over 55 Years" - now take
 * the clearest crew pictures in the set, so nothing in the hero repeats
 * something already sitting a few sections below.
 *
 * Ordered so consecutive frames do not look alike: wide establishing shot,
 * close two-hand work, night plant, mid group, wide group. */
const HERO_IMAGES = [
  '/images/east-africa/ea-hero-tilenga-cpf.webp',
  '/images/east-africa/ea-svc-digital-radiography.webp',
  '/images/east-africa/ea-ind-oil-gas.webp',
  '/images/east-africa/ea-svc-ultrasonic.webp',
  '/images/east-africa/ea-svc-mpi-lpt.webp',
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
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const activeService = SERVICES[activeServiceIdx] || SERVICES[0];
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);
  const [activeComplianceIdx, setActiveComplianceIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  /* page title is now owned by components/RouteHead, driven by src/seo.js,
     so it stays consistent with the statically rendered <head>. */

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
  /* Posts to /api/enquiry, which emails bd@ixar.africa. This used to set
     `sent` immediately and send nothing at all, so the thank-you panel was
     telling every visitor their enquiry had been received while it never left
     the browser. `sent` is now only set once delivery is confirmed; if it
     cannot be, sendEnquiry opens the visitor's mail client with the enquiry
     already written out and we say so rather than claiming success. */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      const bad = form.querySelector(':invalid');
      if (bad) bad.focus();
      return;
    }
    if (sending) return;

    const values = Object.fromEntries(new FormData(form).entries());
    setSendError('');
    setSending(true);
    const res = await sendEnquiry(values);
    setSending(false);
    if (res.ok) setSent(true);
    else setSendError('mail');
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
      <div className="hero" id="hero">
        <div className="stage">
          {HERO_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`slide ${i === heroIdx ? 'on' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
              aria-hidden="true"
            >
              <img src={src} alt="" aria-hidden="true" className="xray" />
            </div>
          ))}
        </div>
        <div className="scrim" aria-hidden="true" />
        <div className="grid" aria-hidden="true" />
        <div className="scanline" aria-hidden="true" />
        <div className="brackets" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hud" aria-hidden="true"><b /> NDT Coverage &middot; Africa</div>

        <div className="inner">
          <div className="wrap">
            <div className="box">
              <span className="flag">Non-Destructive Testing Across Africa</span>
              <h1>
                <span className="w" style={{ animationDelay: '0.15s' }}>IXAR</span>{' '}
                <span className="w" style={{ animationDelay: '0.3s' }}>in</span>{' '}
                <span className="w em" style={{ animationDelay: '0.45s' }}>Africa</span>
              </h1>
              <p className="sub fade">
                Non-destructive testing and industrial inspection, delivered from registered offices
                in Uganda and Tanzania by Industrial X-Ray and Allied Radiographers (EA) Ltd.
              </p>
              <p className="supp fade">
                Licensed for sealed radiation sources &middot; ASNT Level II / III certified &middot; ISO 9001 certified
              </p>
              <div className="acts fade">
                <a className="btn" href="#ea-enquiry" onClick={scrollToEnquiry}>Request a Quote</a>
                <a className="btn btn-ghost" href="/estimator">Build Your Scope</a>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap" style={{ position: 'relative' }}>
          <div className="dots">
            {HERO_IMAGES.map((src, i) => (
              <button
                key={src}
                className={i === heroIdx ? 'on' : ''}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setHeroIdx(i)}
              />
            ))}
          </div>
        </div>

        <div className="ticker">
          <div className="in">
            <span className="lbl">Projects Completed In</span>
            <div className="track">
              {[...COUNTRIES, ...COUNTRIES].map((c, i) => (
                <span key={i}><i>&#9679;</i>{c}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="rule" aria-hidden="true" />
      </div>

      {/* ================= 2. AFRICA IN NUMBERS ================= */}
      <section id="numbers">
        <div className="wrap center">
          <span className="eyebrow">Our Record</span>
          <h2 className="sec">Africa <span className="accent">in Numbers</span></h2>
          <p className="sec-intro">
            Continental figures only. The group&rsquo;s India record is set out further down this page.
          </p>
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="badge"><s.icon size={32} aria-hidden="true" /></div>
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. WHERE WE OPERATE ================= */}
      <section id="operate" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="mapgrid">
            <div className="mapwrap desktop-map"><AfricaMap mobile={mobileMap} /></div>
            <div>
              <span className="eyebrow">Continental Footprint</span>
              <h2 className="sec">Where We Operate</h2>
              <p className="sec-intro">
                IXAR holds registered offices in Uganda and Tanzania and has completed projects
                across the continent. Crews, equipment and sealed sources mobilise to site from
                within Africa, not from overseas.
              </p>
              <div className="cgrid">
                {COUNTRIES.map((c) => <span key={c}><i />{c}</span>)}
                <span className="more"><i />And more across Africa &mdash; mobilisation on request</span>
              </div>
              <ul className="legend">
                <li><em className="k-hl" />Projects Completed in Africa</li>
                <li><em className="k-pin" />Offices</li>
                <li><em className="k-n" />Mobilisation on Request</li>
              </ul>
              <a className="btn" style={{ marginTop: '26px' }} href="/network">Our Offices &amp; Coverage</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. LICENCES, APPROVALS AND COMPLIANCE ================= */}
      <section id="licences" style={{ background: 'var(--wash)' }}>
        <div className="wrap center">
          <span className="eyebrow">Cleared to Work</span>
          <h2 className="sec">Licences, Approvals <span className="accent">and Compliance</span></h2>
          <p className="sec-intro">
            Holding, storing and moving sealed radioactive sources is the highest barrier to entry
            in this market. IXAR is authorised, certified and audited to do it on the continent.
          </p>
          <div className="grid4">
            {LICENCES.map((l) => (
              <div className="lic" key={l.title}>
                <div className="ic"><l.icon size={30} aria-hidden="true" /></div>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
                <div className="creds">
                  <b>{l.credsLabel}</b>
                  {l.creds.map((c, i) => (
                    <span key={c} className={i < l.strong ? 'on' : ''}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. SERVICES WE OFFER ================= */}
      <section id="services">
        <div className="wrap center">
          <span className="eyebrow">Capability</span>
          <h2 className="sec">Services <span className="accent">We Offer</span></h2>
          <p className="sec-intro">
            Over twenty NDT methods, delivered on site or in the workshop, with group specialists
            and equipment mobilised whenever a project calls for it.
          </p>
        </div>
        <div className="wrap">
          <div className="svc">
            <div className="svclist" role="tablist" aria-label="Services">
              {SERVICES.map((s, i) => (
                <button
                  key={s.title}
                  className="svctab"
                  role="tab"
                  aria-selected={activeServiceIdx === i}
                  onClick={() => setActiveServiceIdx(i)}
                >
                  <span className="n">{s.num}</span>
                  <span className="t">{s.title}</span>
                  <span className="c" />
                </button>
              ))}
            </div>

            <div className="svcpanel" role="tabpanel">
              <div className="media">
                <span className="badge">{activeService.category}</span>
                <AppImage src={activeService.img} alt={activeService.title} />
              </div>
              <div className="body">
                <h3>{activeService.title}</h3>
                <p>{activeService.desc}</p>
                <div className="svcfoot">
                  <span className="std"><b>&#10003;</b>{activeService.standards}</span>
                  <a className="btn" href="/services">View Methodologies &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. INDUSTRIES WE SERVE ================= */}
      <section id="industries" style={{ background: 'var(--wash)' }}>
        <div className="wrap center">
          <span className="eyebrow">Sectors</span>
          <h2 className="sec">Industries <span className="accent">We Serve</span></h2>
          <p className="sec-intro">
            Inspection programmes built around each sector&rsquo;s assets, standards and shutdown windows.
          </p>
        </div>
        <div className="wrap">
          <div className="grid4">
            {INDUSTRIES.map((ind) => (
              <a className="ind" key={ind.title} href={`/applications/${ind.slug}`}>
                <div className="stub" />
                <div className="bg" style={ind.img ? { backgroundImage: `url(${ind.img})` } : undefined} />
                <div className="veil" />
                <div className="in">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. PROJECTS COMPLETED IN AFRICA ================= */}
      <section id="projects">
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Track Record</span>
            <h2 className="sec">Projects <span className="accent">Completed in Africa</span></h2>
            <p className="sec-intro">Search by client, location or scope. Sort any column.</p>
          </div>
          <div style={{ marginTop: '40px' }}><ExperienceTable /></div>
        </div>
      </section>

      {/* ================= 8. TRUSTED BY ================= */}
      <section id="trusted" style={{ background: 'var(--wash)' }}>
        <div className="wrap center">
          <span className="eyebrow">Social Proof</span>
          <h2 className="sec">Trusted <span className="accent">By</span></h2>
          <p className="sec-intro">Operators, EPC contractors and plant owners across the continent.</p>
        </div>
        <div className="marquee" style={{ background: 'var(--wash)' }}>
          <div className="track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <a
                className="ltile"
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${c.name} website`}
              >
                <img src={c.logo} alt={c.name} className="client-logo-img" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 9. LEARN MORE ================= */}
      <section id="learnmore" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center">
            <span className="eyebrow">Documents</span>
            <h2 className="sec">Learn <span className="accent">More</span></h2>
            <p className="sec-intro">Full depth for prospects who need it, without lengthening the page.</p>
          </div>
          <div className="grid2">
            {DOWNLOADS.map((d) => (
              <div className="dl" key={d.title}>
                <div className="doc"><FileText size={30} aria-hidden="true" /><b>PDF</b></div>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                  <a className={`btn ${d.dark ? 'btn-dark' : ''}`} href={d.href} download>{d.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 10. BACKED BY OVER 55 YEARS ================= */}
      <section className="legacy" id="legacy">
        <div className="wrap">
          <div className="g">
            <div>
              <span className="eyebrow">The Group Behind the Continent</span>
              <h2 className="sec">Backed by Over 55 Years of NDT Experience</h2>
              <p>
                IXAR Africa operates as part of Industrial X-Ray and Allied Radiographers (I) Pvt.
                Ltd., founded in 1969 and today a leader in non-destructive testing in India and
                internationally. The group employs over 1,000 technicians, holds ISO 9001
                certification, operates a fleet of mobile radiography units, and runs a training
                institute accredited in collaboration with the Bhabha Atomic Research Centre in
                Mumbai. African teams draw on group equipment, technical specialists and written
                practices whenever a project calls for it.
              </p>
              <div className="offices">
                {['India', 'Uganda', 'Tanzania', 'Nigeria', 'Netherlands', 'UAE', 'Oman', 'Saudi Arabia'].map((o) => (
                  <span key={o}>{o}</span>
                ))}
              </div>
              <a className="btn" href="https://ixar.in/about-us/">About IXAR</a>
            </div>
            <div className="shot">
              <AppImage src={`${IMG}ea-svc-advanced-ut.webp`} alt="IXAR technicians setting up an advanced ultrasonic scan, Uganda" />
              <span className="cap">IXAR African site team at work, Uganda</span>
            </div>
          </div>
        </div>
      </section>
      {/* ================= 11. CONTACT & DRAMATIC CTA ================= */}
      <section className="ea-section" id="ea-enquiry" style={{ background: '#FFFFFF', padding: '120px 0' }}>
        <div className="ea-wrap">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span className="ea-eyebrow" style={{ fontSize: '0.875rem', letterSpacing: '0.16em', color: '#DE0603', fontWeight: 800 }}>GET IN TOUCH</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', fontWeight: 900, color: '#15191F', lineHeight: '1.08', letterSpacing: '-0.02em', marginTop: '10px', marginBottom: '18px' }}>
              Let's build safer,<br />
              <span style={{ color: '#DE0603' }}>more reliable operations.</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#6B6B6B', maxWidth: '640px', margin: '0 auto' }}>
              Contact IXAR Africa's technical team today to request a quotation, schedule inspection crews, or discuss NDT project requirements.
            </p>
          </motion.div>

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

                  {/* Honeypot. Hidden from people and from screen readers and
                      never tabbable; bots that fill every field mark themselves
                      by filling it, and /api/enquiry drops those silently. */}
                  <div className="ea-hp" aria-hidden="true">
                    <label htmlFor="ea-f-website">Leave this field empty</label>
                    <input id="ea-f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="ea-form-foot">
                    <button
                      className="ea-btn ea-btn--primary"
                      type="submit"
                      disabled={sending}
                      aria-busy={sending || undefined}
                    >
                      {sending ? 'Sending\u2026' : 'Send Enquiry'}
                    </button>
                  </div>

                  <p className="ea-form-routing" style={{ marginTop: '14px', fontSize: '0.8125rem', color: '#6B6B6B' }}>
                    Submissions route directly to Business Development (<strong>bd@ixar.africa</strong>).
                  </p>

                  {sendError && (
                    <p className="ea-form-fallback" role="alert">
                      We could not send this from the website just now, so we have opened
                      your email application with the enquiry already written out. Press
                      send there, or write to{' '}
                      <a href="mailto:bd@ixar.africa">bd@ixar.africa</a> directly.
                    </p>
                  )}
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
                  <p>A member of the IXAR Africa team will respond via <strong>bd@ixar.africa</strong> shortly.</p>
                </div>
              )}
            </div>

            <div>
              <div className="ea-office-card">
                <p className="ea-office-card__tag">Regional office</p>
                <h3>Kampala, Uganda</h3>

                <figure className="ea-card__media ea-office-card__media">
                  <AppImage
                    src={`${IMG}ea-svc-visual-leak.webp`}
                    alt="IXAR (EA) Ltd inspection crew on a manifold spool, Uganda"
                    loading="lazy"
                  />
                  <figcaption className="ea-card__credit">
                    IXAR (EA) Ltd inspection crew, Uganda
                  </figcaption>
                </figure>

                <ul className="ea-office-lines" style={{ marginTop: '14px' }}>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                    <span>
                      Plot No. 72, Kanjokya Street, Kamwokya, P.O. Box 28673 Nakawa, Kampala, Uganda
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.4 3.5h3.1l1.6 4-2 1.3a12 12 0 0 0 6.1 6.1l1.3-2 4 1.6v3.1a1.8 1.8 0 0 1-2 1.8A16.8 16.8 0 0 1 4.6 5.5a1.8 1.8 0 0 1 1.8-2Z" />
                    </svg>
                    <span>
                      +256 414 251251 &middot; +256 777 166392
                    </span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3.8 6.2 8.2 6.3 8.2-6.3" />
                    </svg>
                    <span>bd@ixar.africa &middot; www.ixar.africa</span>
                  </li>
                </ul>

                <div className="ea-map-embed" style={{ marginTop: '20px' }}>
                  <iframe
                    title="IXAR Kampala Office Location"
                    src="https://maps.google.com/maps?q=Kampala,%20Uganda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0, borderRadius: '0' }}
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
                  &ldquo;{WA_DEFAULT_MESSAGE}&rdquo;
                </span>
                <a
                  className="ea-btn ea-btn--primary"
                  style={{ marginTop: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', borderColor: '#25D366' }}
                  {...waLinkProps()}
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
        {...waLinkProps()}
        aria-label="Chat with IXAR Africa on WhatsApp"
      >
        <WhatsAppGlyph />
      </motion.a>

      {/* ==========================================================================
          Scoped styles. Everything below is namespaced `ea-` AND scoped under
          `.ea-page`, so it cannot collide with index.css, Navbar or Footer.
          ========================================================================== */}
      <Style>{`
.ea-section--navy h2,.ea-section--navy h3,.ea-section--navy h4{color:var(--ea-white)}

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

/* Radiographic scan. A second copy of the frame is inverted to read as film and
   masked to a narrow diagonal band, which sweeps across with a red edge running
   ahead of it. Decorative: aria-hidden, and disabled under reduced motion. */
.ea-hero__xray{
  position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
  filter:invert(1) grayscale(1) contrast(1.3) brightness(1.06);
  opacity:.9;pointer-events:none;
  -webkit-mask-image:linear-gradient(102deg,transparent 43%,#000 47.5%,#000 52.5%,transparent 57%);
  mask-image:linear-gradient(102deg,transparent 43%,#000 47.5%,#000 52.5%,transparent 57%);
  -webkit-mask-size:260% 100%;mask-size:260% 100%;
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  animation:ea-scanmask 7s cubic-bezier(.6,0,.4,1) infinite;
}
@keyframes ea-scanmask{
  0%{-webkit-mask-position:126% 0;mask-position:126% 0}
  70%,100%{-webkit-mask-position:-62% 0;mask-position:-62% 0}
}
.ea-hero__scanline{
  position:absolute;top:0;bottom:0;left:-3%;width:2px;z-index:1;pointer-events:none;
  background:linear-gradient(180deg,transparent,rgba(222,6,3,.9) 18%,#FF4A48 50%,rgba(222,6,3,.9) 82%,transparent);
  box-shadow:0 0 26px 6px rgba(222,6,3,.45);
  animation:ea-scanline 7s cubic-bezier(.6,0,.4,1) infinite;
}
@keyframes ea-scanline{0%{left:-3%;opacity:0}6%{opacity:1}64%{left:103%;opacity:1}70%,100%{left:103%;opacity:0}}
.ea-hero__brackets{position:absolute;inset:34px;z-index:2;pointer-events:none}
.ea-hero__brackets i{
  position:absolute;width:34px;height:34px;border:2px solid rgba(222,6,3,.9);opacity:0;
  animation:ea-bracket .7s cubic-bezier(.16,1,.3,1) forwards;
}
.ea-hero__brackets i:nth-child(1){top:0;left:0;border-right:0;border-bottom:0;animation-delay:.35s}
.ea-hero__brackets i:nth-child(2){top:0;right:0;border-left:0;border-bottom:0;animation-delay:.45s}
.ea-hero__brackets i:nth-child(3){bottom:0;left:0;border-right:0;border-top:0;animation-delay:.55s}
.ea-hero__brackets i:nth-child(4){bottom:0;right:0;border-left:0;border-top:0;animation-delay:.65s}
@keyframes ea-bracket{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:none}}
.ea-hero__hud{
  position:absolute;top:52px;right:52px;z-index:3;display:flex;align-items:center;gap:9px;
  font-size:10.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;
  color:rgba(255,255,255,.72);background:rgba(10,13,17,.45);
  border:1px solid rgba(255,255,255,.14);padding:8px 13px;backdrop-filter:blur(5px);
}
.ea-hero__hud b{width:7px;height:7px;border-radius:50%;background:var(--ea-brand);animation:ea-blip 1.6s ease-in-out infinite}
@keyframes ea-blip{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(222,6,3,.7)}50%{opacity:.45;box-shadow:0 0 0 6px rgba(222,6,3,0)}}
.ea-hero__w{display:inline-block;opacity:0;transform:translateY(26px);animation:ea-wordup .85s cubic-bezier(.16,1,.3,1) forwards}
@keyframes ea-wordup{to{opacity:1;transform:none}}
.ea-hero__w--mark{position:relative}
.ea-hero__w--mark::after{
  content:"";position:absolute;left:0;right:0;bottom:.06em;height:5px;background:var(--ea-brand);
  transform:scaleX(0);transform-origin:left;animation:ea-underline .9s cubic-bezier(.16,1,.3,1) .85s forwards;
}
@keyframes ea-underline{to{transform:scaleX(1)}}
@media (prefers-reduced-motion:reduce){
  .ea-hero__xray,.ea-hero__scanline{display:none}
  .ea-hero__brackets i{opacity:1;animation:none}
  .ea-hero__w{opacity:1;transform:none;animation:none}
  .ea-hero__w--mark::after{transform:scaleX(1);animation:none}
  .ea-hero__hud b{animation:none}
}
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
.ea-offices__label{font-size:11.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#FF6B69;margin-bottom:12px}
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


/* ==========================================================================
   Responsive
   ========================================================================== */
/* ---------- responsive grid helpers --------------------------------------- */
.ea-intro-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 40px;
  align-items: center;
}
.ea-intro-col-6 {
  grid-column: span 6 / span 12;
}

/* ==========================================================================
   Responsive
   ========================================================================== */
@media (max-width:1024px){
  .ea-page{--ea-sec:76px}
  .ea-sec-title{font-size:34px}
  .ea-hero{min-height:auto;padding:110px 0 70px}
  .ea-hero h1{font-size: clamp(2rem, 5vw, 3.2rem)}
  .ea-hero__in{padding:60px 0 70px}
  .ea-hero__sub{font-size:17px}
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
  .ea-intro-grid{grid-template-columns:1fr;gap:24px}
  .ea-intro-col-6{grid-column:span 12 / span 12 !important}
  .ea-stats__grid{grid-template-columns:repeat(2,1fr)}
  .ea-stat{border-bottom:1px solid var(--ea-muted)}
  .ea-stat:nth-child(2n){border-right:0}
  .ea-stat:nth-child(n+3){border-bottom:0}
}
@media (max-width:860px){
  .ea-dl-card{grid-template-columns:1fr}
}
@media (max-width:767px){
  .ea-page{--ea-sec:54px;--ea-pad:18px}
  .ea-sec-title{font-size:26px}
  .ea-sec-head{margin-bottom:28px}
  .ea-sec-head p{font-size:15px}
  .ea-hero{padding:90px 0 60px}
  .ea-hero h1{font-size:clamp(1.8rem, 6.5vw, 2.6rem)}
  .ea-hero__in{padding:40px 0 50px}
  .ea-hero__phlabel{top:18px;left:20px;right:20px;max-width:none;padding:12px 14px}
  .ea-hero__phlabel .ea-ph__desc{font-size:11.5px}
  .ea-hero__sub{font-size:15px}
  .ea-hero__support{font-size:12px}
  .ea-hero__actions{gap:10px;flex-direction:column}
  .ea-hero__actions .ea-btn{width:100%;justify-content:center}
  .ea-hero__flag .ea-wrap{gap:8px 16px;font-size:11px}
  .ea-grid,.ea-dl-grid{gap:18px}
  .ea-grid--4,.ea-grid--2{grid-template-columns:1fr}
  .ea-stats__grid{grid-template-columns:1fr}
  .ea-stat{padding:24px 14px;border-right:0;border-bottom:1px solid var(--ea-muted)}
  .ea-stat:last-child{border-bottom:0}
  .ea-stat__fig{font-size:32px}
  .ea-stat__label{font-size:13px}
  .ea-logo-wall{grid-template-columns:repeat(2,1fr);gap:14px}
  .ea-logo-tile:nth-child(n+3){display:none}
  .ea-cert-row{padding:18px}
  .ea-cert-row__tiles{grid-template-columns:repeat(2,1fr)}
  .ea-dl-card{grid-template-columns:1fr}
  .ea-dl-card .ea-ph{height:auto;min-height:0;border-right:0;border-bottom:1px solid var(--ea-line);aspect-ratio:16/9}
  .ea-form-card,.ea-office-card,.ea-wa-card{padding:22px 18px}
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
  .ea-backed__copy p{font-size:14.5px}
}

/* ---------- reduced motion -------------------------------------------------- */
@media (prefers-reduced-motion:reduce){
  .ea-page *,.ea-page *::before,.ea-page *::after{
    animation-duration:.001ms !important;animation-iteration-count:1 !important;
    transition-duration:.001ms !important;
  }
  .ea-hero__zoom{animation:none;inset:0}
  .ea-hero__brackets{inset:16px}
  .ea-hero__brackets i{width:24px;height:24px}
  .ea-hero__hud{display:none}
  .ea-rev{opacity:1;transform:none}
  .ea-logo-slide{transition:none}
  .ea-card:hover,.ea-lcard:hover,.ea-dl-card:hover,.ea-wa-float:hover,.ea-btn:hover{transform:none}
}

/* ======================================================================
   The agreed design system, ported from the standalone build. Appended
   last so it wins over the older page rules above it.
   ====================================================================== */
.ea-page{--red:#DE0603; --red-dk:#B90502; --red-soft:#FDECEC;
  --navy:#001E57;
  --char:#15191F; --char-2:#1E242D;
  --ink:#4A505A; --head:#10141B; --muted:#78818D;
  --line:#E6E9EC; --wash:#F6F7F8; --footer:#F1F2F2;
  --gut:50px; --max:1470px;
  --shadow:0 2px 14px rgba(16,20,27,.06);
  --shadow-h:0 12px 30px rgba(16,20,27,.12);}
.ea-page *{box-sizing:border-box}
.ea-page{scroll-behavior:smooth}
.ea-page{margin:0;font-family:Mulish,-apple-system,Segoe UI,sans-serif;font-size:16px;line-height:1.5;color:var(--ink);background:#fff;-webkit-font-smoothing:antialiased}
.ea-page img{max-width:100%;display:block}
.ea-page a{color:inherit;text-decoration:none}
.ea-page .wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gut)}
.ea-page section{padding:74px 0}
.ea-page h1, .ea-page h2, .ea-page h3, .ea-page h4{color:var(--head);margin:0;font-weight:700;letter-spacing:-.015em}
.ea-page h2.sec{font-size:40px;line-height:1.16;margin-bottom:14px}
.ea-page h2.sec .accent{color:var(--red);font-style:italic}
.ea-page .sec-intro{max-width:840px;font-size:16.5px;color:var(--ink)}
.ea-page .center{text-align:center}
.ea-page .center .sec-intro{margin-left:auto;margin-right:auto}
.ea-page .eyebrow{display:inline-flex;align-items:center;gap:9px;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--red);margin-bottom:14px}
.ea-page .eyebrow:before{content:"";width:24px;height:2px;background:var(--red)}
.ea-page .center .eyebrow:after{content:"";width:24px;height:2px;background:var(--red)}
.ea-page .btn{display:inline-block;background:var(--red);color:#fff;font-size:14px;font-weight:700;padding:16px 30px;border:0;cursor:pointer;transition:background .2s,transform .2s;font-family:inherit}
.ea-page .btn:hover{background:var(--red-dk);transform:translateY(-2px)}
.ea-page .btn-ghost{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.8);padding:14px 28px}
.ea-page .btn-ghost:hover{background:#fff;color:var(--char)}
.ea-page .btn-dark{background:var(--char)}
.ea-page .btn-dark:hover{background:#000}
.ea-page .note{font-size:13.5px;color:var(--muted);margin-top:26px;padding-top:16px;border-top:1px solid var(--line)}
.ea-page .hero{position:relative;height:660px;overflow:hidden;margin:0 var(--gut);background:var(--char)}
.ea-page .hero .stage{position:absolute;inset:0}
.ea-page .hero .slide{position:absolute;inset:-4% -4% -4% -4%;opacity:0;background-size:cover;background-position:center;
  transition:opacity 1.8s cubic-bezier(.4,0,.2,1),transform 1.8s cubic-bezier(.4,0,.2,1);transform:scale(1.12) translate3d(0,0,0)}
.ea-page .hero .slide.on{opacity:1;animation:heroDrift 11s cubic-bezier(.25,.1,.25,1) forwards}
@keyframes heroDrift{

  0%{transform:scale(1.14) translate3d(2.2%,1%,0)}
  100%{transform:scale(1.02) translate3d(-1.6%,-.8%,0)}

}
.ea-page .hero .scrim{position:absolute;inset:0;background:
  linear-gradient(96deg,rgba(10,13,17,.94) 0%,rgba(10,13,17,.82) 34%,rgba(10,13,17,.35) 66%,rgba(10,13,17,.18) 100%)}
.ea-page .hero .grid{position:absolute;inset:0;pointer-events:none;opacity:.5;background-image:
  linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:64px 64px}
.ea-page .hero .slide .xray{position:absolute;inset:0;background-image:inherit;background-size:cover;background-position:center;
  filter:invert(1) grayscale(1) contrast(1.3) brightness(1.06);opacity:.9;pointer-events:none;
  -webkit-mask-image:linear-gradient(102deg,transparent 43%,#000 47.5%,#000 52.5%,transparent 57%);
  mask-image:linear-gradient(102deg,transparent 43%,#000 47.5%,#000 52.5%,transparent 57%);
  -webkit-mask-size:260% 100%;mask-size:260% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  animation:scanmask 7s cubic-bezier(.6,0,.4,1) infinite}
@keyframes scanmask{
0%{-webkit-mask-position:126% 0;mask-position:126% 0}
  70%,100%{-webkit-mask-position:-62% 0;mask-position:-62% 0}
}
.ea-page .hero .scanline{position:absolute;top:0;bottom:0;width:2px;left:-3%;z-index:2;pointer-events:none;
  background:linear-gradient(180deg,transparent,rgba(222,6,3,.9) 18%,#FF4A48 50%,rgba(222,6,3,.9) 82%,transparent);
  box-shadow:0 0 26px 6px rgba(222,6,3,.45);animation:scanline 7s cubic-bezier(.6,0,.4,1) infinite}
@keyframes scanline{
0%{left:-3%;opacity:0}6%{opacity:1}64%{left:103%;opacity:1}70%,100%{left:103%;opacity:0}
}
.ea-page .hero .brackets{position:absolute;inset:34px;z-index:2;pointer-events:none}
.ea-page .hero .brackets i{position:absolute;width:34px;height:34px;border:2px solid rgba(222,6,3,.9);opacity:0;animation:brk .7s cubic-bezier(.16,1,.3,1) forwards}
.ea-page .hero .brackets i:nth-child(1){top:0;left:0;border-right:0;border-bottom:0;animation-delay:.35s}
.ea-page .hero .brackets i:nth-child(2){top:0;right:0;border-left:0;border-bottom:0;animation-delay:.45s}
.ea-page .hero .brackets i:nth-child(3){bottom:0;left:0;border-right:0;border-top:0;animation-delay:.55s}
.ea-page .hero .brackets i:nth-child(4){bottom:0;right:0;border-left:0;border-top:0;animation-delay:.65s}
@keyframes brk{
from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}
}
.ea-page .hero .hud{position:absolute;top:52px;right:52px;z-index:4;display:flex;align-items:center;gap:9px;
  font-size:10.5px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.72);
  background:rgba(10,13,17,.45);border:1px solid rgba(255,255,255,.14);padding:8px 13px;backdrop-filter:blur(5px)}
.ea-page .hero .hud b{width:7px;height:7px;border-radius:50%;background:#DE0603;animation:blip 1.6s ease-in-out infinite}
@keyframes blip{
0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(222,6,3,.7)}50%{opacity:.45;box-shadow:0 0 0 6px rgba(222,6,3,0)}
}
.ea-page .hero .rule{position:absolute;left:0;bottom:0;height:4px;width:0;background:var(--red);z-index:5;animation:rule 9s linear infinite}
@keyframes rule{
0%{width:0}100%{width:100%}
}
.ea-page .hero .inner{position:relative;z-index:3;height:100%;display:flex;align-items:center}
.ea-page .hero .box{max-width:700px;color:#fff}
.ea-page .hero .flag{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:#fff;background:var(--red);padding:8px 15px;margin-bottom:24px}
.ea-page .hero h1{font-size:60px;line-height:1.04;color:#fff;margin-bottom:20px;font-weight:800;letter-spacing:-.03em}
.ea-page .hero h1 .w{display:inline-block;opacity:0;transform:translateY(26px);animation:wordUp .85s cubic-bezier(.16,1,.3,1) forwards}
.ea-page .hero h1 .em{color:var(--red-soft);position:relative}
.ea-page .hero h1 .em:after{content:"";position:absolute;left:0;right:0;bottom:.06em;height:5px;background:var(--red);
  transform:scaleX(0);transform-origin:left;animation:underline .9s cubic-bezier(.16,1,.3,1) .85s forwards}
@keyframes wordUp{
to{opacity:1;transform:translateY(0)}
}
@keyframes underline{
to{transform:scaleX(1)}
}
.ea-page .hero .fade{opacity:0;transform:translateY(16px);animation:wordUp .8s cubic-bezier(.16,1,.3,1) forwards}
.ea-page .hero .sub{font-size:19px;line-height:1.55;color:rgba(255,255,255,.94);margin-bottom:12px;animation-delay:.9s}
.ea-page .hero .supp{font-size:15px;color:rgba(255,255,255,.76);margin-bottom:32px;animation-delay:1.05s}
.ea-page .hero .acts{display:flex;gap:14px;flex-wrap:wrap;animation-delay:1.2s}
.ea-page .hero .ticker{position:absolute;left:0;right:0;bottom:0;z-index:4;background:rgba(10,13,17,.55);backdrop-filter:blur(6px);border-top:1px solid rgba(255,255,255,.12)}
.ea-page .hero .ticker .in{display:flex;align-items:center;gap:0;overflow:hidden;position:relative}
.ea-page .hero .ticker .lbl{position:relative;z-index:3;flex:none;background:var(--red);color:#fff;font-size:11.5px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:14px 18px}
.ea-page .hero .ticker .track{display:flex;gap:38px;white-space:nowrap;animation:march 26s linear infinite;padding-left:26px}
.ea-page .hero .ticker .track span{color:rgba(255,255,255,.86);font-size:13.5px;font-weight:600;letter-spacing:.04em}
.ea-page .hero .ticker .track span i{color:var(--red);font-style:normal;margin-right:8px}
@keyframes march{
from{transform:translateX(0)}to{transform:translateX(-50%)}
}
.ea-page .hero .dots{position:absolute;z-index:6;display:flex;gap:9px;bottom:76px}
.ea-page .hero .dots button{width:28px;height:4px;border:0;background:rgba(255,255,255,.35);cursor:pointer;padding:0;transition:.3s}
.ea-page .hero .dots button.on{background:var(--red);width:44px}
.ea-page .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:40px}
.ea-page .stat{text-align:center;padding:30px 18px;border:1px solid var(--line);background:#fff;transition:.25s}
.ea-page .stat:hover{border-color:var(--red);transform:translateY(-4px);box-shadow:var(--shadow-h)}
.ea-page .stat .badge{width:74px;height:74px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;background:var(--red-soft)}
.ea-page .stat .badge svg{width:34px;height:34px;fill:var(--red)}
.ea-page .stat:nth-child(even) .badge{background:#EDEFF1}
.ea-page .stat:nth-child(even) .badge svg{fill:var(--char)}
.ea-page .stat .num{font-size:34px;font-weight:800;color:var(--head);line-height:1.1;letter-spacing:-.02em}
.ea-page .stat .lbl{font-size:14.5px;color:var(--muted);margin-top:5px}
.ea-page .mapgrid{display:grid;grid-template-columns:.92fr 1.08fr;gap:56px;align-items:center}
.ea-page .mapwrap{position:relative;background:linear-gradient(160deg,#FAFBFB,#EFF1F2);padding:10px;border:1px solid var(--line)}
.ea-page .mapwrap svg{width:100%;height:auto;display:block}
.ea-page .ct{fill:#D9DDE1;stroke:#F6F7F8;stroke-width:.9;transition:fill .2s}
.ea-page .ct:hover{fill:#C3C9CF}
.ea-page .ct-hl{fill:var(--red);stroke:#fff;stroke-width:.9;transition:fill .2s}
.ea-page .ct-hl:hover{fill:var(--red-dk)}
.ea-page .pin-o{fill:#fff;opacity:.35}
.ea-page .pin-c{fill:var(--char);stroke:#fff;stroke-width:2.6}
.ea-page .mlabel{font:700 14px Mulish;fill:var(--char)}
.ea-page .mnote{font:600 12px Mulish;fill:#9AA3AD}
.ea-page .cgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:26px 0 0}
.ea-page .cgrid a, .ea-page .cgrid span{display:flex;align-items:center;gap:11px;border:1px solid var(--line);padding:12px 15px;font-size:14.5px;font-weight:700;color:var(--head);background:#fff;transition:.2s}
.ea-page .cgrid a:hover{border-color:var(--red);transform:translateX(3px)}
.ea-page .cgrid i{width:12px;height:12px;background:var(--red);flex:none}
.ea-page .cgrid .more{color:var(--muted);font-weight:600;grid-column:1/-1;border-style:dashed}
.ea-page .cgrid .more i{background:#D9DDE1}
.ea-page .legend{list-style:none;margin:24px 0 0;padding:0;display:flex;gap:26px;flex-wrap:wrap}
.ea-page .legend li{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:600;color:var(--head)}
.ea-page .legend em{width:14px;height:14px;display:inline-block;flex:none;font-style:normal}
.ea-page .legend .k-hl{background:var(--red)}
.ea-page .legend .k-pin{background:var(--char);border-radius:50%}
.ea-page .legend .k-n{background:#D9DDE1}
.ea-page .lic{text-align:left;background:#fff;border:1px solid var(--line);border-top:4px solid var(--red);padding:32px 28px;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:.25s}
.ea-page .lic:hover{transform:translateY(-5px);box-shadow:var(--shadow-h)}
.ea-page .lic .ic{width:64px;height:64px;border-radius:50%;background:var(--red-soft);display:flex;align-items:center;justify-content:center;margin-bottom:20px}
.ea-page .lic .ic svg{width:32px;height:32px;fill:var(--red)}
.ea-page .lic h3{font-size:19px;margin-bottom:11px}
.ea-page .lic p{font-size:14.5px;line-height:1.65;margin:0 0 20px}
.ea-page .creds{margin-top:auto;padding-top:18px;border-top:1px solid var(--line);display:flex;flex-wrap:wrap;gap:8px}
.ea-page .creds b{display:block;width:100%;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.ea-page .creds span{font-size:11.5px;font-weight:800;letter-spacing:.04em;color:var(--char);background:var(--wash);border:1px solid var(--line);padding:7px 11px}
.ea-page .creds span.on{background:var(--red);border-color:var(--red);color:#fff}
.ea-page .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;margin-top:40px}
.ea-page .grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:26px;margin-top:40px}
.ea-page .card{background:#fff;border:1px solid var(--line);box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
.ea-page .card:hover{transform:translateY(-5px);box-shadow:var(--shadow-h);border-color:#DCE0E4}
.ea-page .card .body{padding:26px;text-align:left;flex:1;display:flex;flex-direction:column}
.ea-page .card h3{font-size:19px;line-height:1.3;margin-bottom:9px}
.ea-page .card p{margin:0;font-size:14.5px;line-height:1.62;color:var(--ink)}
.ea-page .card .more{display:inline-block;margin-top:auto;padding-top:18px;align-self:flex-start;font-size:12.5px;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--red)}
.ea-page .card .more:after{content:" \\2192";transition:.2s;display:inline-block}
.ea-page .card:hover .more:after{transform:translateX(4px)}
.ea-page .thumb{aspect-ratio:4/3;overflow:hidden;background:var(--wash)}
.ea-page .thumb img{width:100%;height:100%;object-fit:cover;transition:transform .6s ease}
.ea-page .card:hover .thumb img{transform:scale(1.06)}
.ea-page .card.iconled{border-top:4px solid var(--red)}
.ea-page .card.iconled .body{padding-top:30px}
.ea-page .card.iconled .ic{width:62px;height:62px;border-radius:50%;background:var(--red-soft);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:.3s}
.ea-page .card.iconled:hover .ic{background:var(--red)}
.ea-page .card.iconled .ic svg{width:31px;height:31px;fill:var(--red);transition:.3s}
.ea-page .card.iconled:hover .ic svg{fill:#fff}
.ea-page .svc{display:grid;grid-template-columns:400px 1fr;gap:40px;margin-top:44px;align-items:start}
.ea-page .svclist{display:flex;flex-direction:column;gap:8px;max-height:660px;overflow-y:auto;padding-right:6px;scrollbar-width:thin}
.ea-page .svclist::-webkit-scrollbar{width:5px}
.ea-page .svclist::-webkit-scrollbar-thumb{background:#D3D8DD}
.ea-page .svctab{display:flex;align-items:center;gap:14px;width:100%;text-align:left;font-family:inherit;cursor:pointer;
  background:var(--wash);border:1px solid var(--line);border-left:3px solid transparent;padding:16px 18px;transition:.22s;color:var(--head)}
.ea-page .svctab:hover{background:#fff;border-left-color:var(--red);transform:translateX(3px)}
.ea-page .svctab .n{font-size:13px;font-weight:800;color:var(--red);flex:none;letter-spacing:.02em}
.ea-page .svctab .t{font-size:15px;font-weight:700;line-height:1.32;flex:1}
.ea-page .svctab .c{flex:none;width:8px;height:8px;border-right:2px solid #B9C0C8;border-top:2px solid #B9C0C8;transform:rotate(45deg);transition:.2s}
.ea-page .svctab[aria-selected="true"]{background:var(--char);border-color:var(--char);border-left-color:var(--red);color:#fff}
.ea-page .svctab[aria-selected="true"] .n{color:#FF6B69}
.ea-page .svctab[aria-selected="true"] .c{border-color:#fff;transform:rotate(45deg) translate(2px,-2px)}
.ea-page .svcpanel{background:#fff;border:1px solid var(--line);box-shadow:var(--shadow)}
.ea-page .svcpanel .media{position:relative;aspect-ratio:16/9;overflow:hidden;background:var(--char)}
.ea-page .svcpanel .media img{width:100%;height:100%;object-fit:cover}
.ea-page .svcpanel .badge{position:absolute;top:20px;left:20px;z-index:3;background:var(--red);color:#fff;
  font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:8px 14px}
.ea-page .svcpanel .body{padding:32px 34px 34px}
.ea-page .svcpanel h3{font-size:28px;line-height:1.2;margin-bottom:12px}
.ea-page .svcpanel p{font-size:16px;line-height:1.7;margin:0 0 24px;max-width:70ch}
.ea-page .svcfoot{display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding-top:22px;border-top:1px solid var(--line)}
.ea-page .svcfoot .std{flex:1;min-width:280px;background:var(--wash);border:1px solid var(--line);padding:13px 17px;
  font-size:13.5px;font-weight:700;color:var(--char)}
.ea-page .svcfoot .std b{color:var(--red);margin-right:7px}
.ea-page .svcfade{animation:svcIn .45s cubic-bezier(.16,1,.3,1)}
@keyframes svcIn{
from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}
}
.ea-page .techph{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;
  background:radial-gradient(120% 100% at 25% 0%,#2B3340 0%,#151A21 68%);color:#fff;overflow:hidden}
.ea-page .techph:before{content:"";position:absolute;inset:0;opacity:.5;background-image:
  linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:38px 38px}
.ea-page .techph:after{content:"";position:absolute;left:0;right:0;height:2px;top:0;
  background:linear-gradient(90deg,transparent,rgba(222,6,3,.85),transparent);animation:tscan 5.5s ease-in-out infinite}
@keyframes tscan{
0%{top:6%}50%{top:94%}100%{top:6%}
}
.ea-page .techph svg{width:56px;height:56px;fill:rgba(255,255,255,.9);position:relative;z-index:2}
.ea-page .techph .ref{position:relative;z-index:2;font-size:11px;font-weight:800;letter-spacing:.18em;color:rgba(255,255,255,.6)}
.ea-page .techph .cap{position:relative;z-index:2;font-size:12.5px;color:rgba(255,255,255,.55);max-width:74%;text-align:center}
.ea-page .ind{position:relative;overflow:hidden;background:var(--char);color:#fff;min-height:250px;display:flex;flex-direction:column;justify-content:flex-end;transition:.3s}
.ea-page .ind:hover{transform:translateY(-5px);box-shadow:var(--shadow-h)}
.ea-page .ind .bg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.55;transition:transform .6s ease,opacity .3s}
.ea-page .ind:hover .bg{transform:scale(1.06);opacity:.68}
.ea-page .ind .stub{position:absolute;inset:0;background:
  radial-gradient(120% 90% at 20% 0%,#2B3340 0%,#15191F 70%)}
.ea-page .ind .stub:before{content:"";position:absolute;inset:0;opacity:.45;background-image:
  linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:34px 34px}
.ea-page .ind .veil{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,13,17,.94) 12%,rgba(10,13,17,.45) 55%,rgba(10,13,17,.2) 100%)}
.ea-page .ind .in{position:relative;z-index:2;padding:24px}
.ea-page .ind .ic{width:44px;height:44px;background:var(--red);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.ea-page .ind .ic svg{width:23px;height:23px;fill:#fff}
.ea-page .ind h3{font-size:18px;color:#fff;margin-bottom:7px}
.ea-page .ind p{font-size:13.5px;line-height:1.55;margin:0;color:rgba(255,255,255,.78)}
.ea-page .ind .imgref{position:absolute;top:12px;right:12px;z-index:3;font-size:10px;font-weight:800;letter-spacing:.12em;color:rgba(255,255,255,.6);background:rgba(0,0,0,.4);padding:5px 8px}
.ea-page .tbar{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin:34px 0 18px}
.ea-page .tbar input, .ea-page .tbar select{font-family:inherit;font-size:14.5px;border:1px solid #D8DDE2;padding:12px 14px;background:#fff;color:var(--ink)}
.ea-page .tbar input{flex:1;min-width:220px}
.ea-page .tbar .count{margin-left:auto;font-size:13.5px;color:var(--muted);font-weight:600}
.ea-page .tablewrap{overflow-x:auto;border:1px solid var(--line);background:#fff;box-shadow:var(--shadow)}
.ea-page table.proj{width:100%;border-collapse:collapse;min-width:860px}
.ea-page table.proj th{background:var(--char);color:#fff;text-align:left;font-size:12px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:16px 18px;white-space:nowrap;cursor:pointer;user-select:none}
.ea-page table.proj th:hover{background:var(--char-2)}
.ea-page table.proj th .ar{opacity:.4;margin-left:6px;font-size:10px}
.ea-page table.proj th.sorted .ar{opacity:1;color:#FF9E9D}
.ea-page table.proj td{padding:16px 18px;font-size:14.5px;border-top:1px solid var(--line);vertical-align:top}
.ea-page table.proj tbody tr:hover{background:#FCFCFD}
.ea-page table.proj td.pname{font-weight:700;color:var(--head)}
.ea-page table.proj td .flagtag{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.05em;color:var(--red);background:var(--red-soft);padding:5px 10px;white-space:nowrap}
.ea-page table.proj .empty{text-align:center;padding:40px;color:var(--muted)}
.ea-page .marquee{position:relative;overflow:hidden;margin-top:40px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:6px 0}
.ea-page .marquee:before, .ea-page .marquee:after{content:"";position:absolute;top:0;bottom:0;width:120px;z-index:2;pointer-events:none}
.ea-page .marquee:before{left:0;background:linear-gradient(90deg,#fff,rgba(255,255,255,0))}
.ea-page .marquee:after{right:0;background:linear-gradient(270deg,#fff,rgba(255,255,255,0))}
.ea-page .marquee .track{display:flex;gap:0;width:max-content;animation:march 34s linear infinite}
.ea-page .marquee:hover .track{animation-play-state:paused}
.ea-page .ltile{width:260px;height:120px;display:flex;align-items:center;justify-content:center;border-right:1px solid var(--line);
  padding:16px;background:#FFFFFF;opacity:.92;transition:all .3s ease;text-decoration:none}
.ea-page .ltile:hover{opacity:1;background:#F8FAFC}
.ea-page .ltile img{max-width:210px;max-height:72px;width:auto;height:auto;object-fit:contain;transition:transform .3s ease}
.ea-page .ltile:hover img{transform:scale(1.08)}
.ea-page .dl{text-align:left;display:flex;gap:24px;align-items:flex-start;background:#fff;border:1px solid var(--line);box-shadow:var(--shadow);padding:32px;transition:.25s}
.ea-page .dl:hover{transform:translateY(-4px);box-shadow:var(--shadow-h)}
.ea-page .dl .doc{width:94px;height:120px;flex:none;background:var(--red);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}
.ea-page .dl:nth-child(even) .doc{background:var(--char)}
.ea-page .dl .doc svg{width:30px;height:30px;fill:#fff}
.ea-page .dl .doc b{font-size:10px;letter-spacing:.12em}
.ea-page .dl h3{font-size:20px;margin-bottom:8px}
.ea-page .dl p{font-size:14.5px;line-height:1.6;margin:0 0 18px}
.ea-page .dl .upd{display:block;margin-top:10px;font-size:12.5px;color:var(--muted)}
.ea-page .legacy{background:var(--char);color:#fff;position:relative;overflow:hidden}
.ea-page .legacy:before{content:"";position:absolute;top:-140px;right:-140px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(222,6,3,.16),transparent 62%)}
.ea-page .legacy h2, .ea-page .legacy h3{color:#fff}
.ea-page .legacy .eyebrow{color:#FF6B69}
.ea-page .legacy .eyebrow:before{background:#FF6B69}
.ea-page .legacy .g{display:grid;grid-template-columns:1.08fr .92fr;gap:56px;align-items:center;position:relative;z-index:2}
.ea-page .legacy p{color:rgba(255,255,255,.84);font-size:16px;line-height:1.78}
.ea-page .offices{display:flex;flex-wrap:wrap;gap:10px 0;margin:26px 0 30px;font-size:14px;font-weight:700;color:#fff}
.ea-page .offices span{padding-right:14px;margin-right:14px;border-right:1px solid rgba(255,255,255,.28)}
.ea-page .offices span:last-child{border-right:0}
.ea-page .legacy .shot{position:relative}
.ea-page .legacy .shot img{width:100%;height:400px;object-fit:cover}
.ea-page .legacy .shot .cap{position:absolute;left:0;bottom:0;background:var(--red);color:#fff;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:11px 17px}
.ea-page .contact{background:var(--wash)}
.ea-page .cwrap{display:grid;grid-template-columns:1.12fr .88fr;gap:46px;margin-top:40px}
.ea-page form.enq{text-align:left;background:#fff;border:1px solid var(--line);padding:36px;box-shadow:var(--shadow)}
.ea-page .frow{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.ea-page .field{margin-bottom:18px;display:flex;flex-direction:column}
.ea-page .field label{font-size:13px;font-weight:700;color:var(--head);margin-bottom:7px}
.ea-page .field label i{color:var(--red);font-style:normal}
.ea-page .field input, .ea-page .field select, .ea-page .field textarea{font-family:inherit;font-size:15px;color:var(--ink);border:1px solid #D8DDE2;padding:13px 14px;background:#fff;width:100%}
.ea-page .field textarea{min-height:120px;resize:vertical}
.ea-page .field input:focus, .ea-page .field select:focus, .ea-page .field textarea:focus{outline:2px solid var(--red);outline-offset:-2px}
.ea-page .other{display:grid;gap:14px;margin-bottom:22px}
.ea-page .opt{display:flex;align-items:center;gap:16px;background:#fff;border:1px solid var(--line);padding:20px;box-shadow:var(--shadow);transition:.25s}
.ea-page .opt:hover{border-color:var(--red);transform:translateX(4px)}
.ea-page .opt .oi{width:50px;height:50px;flex:none;border-radius:50%;background:var(--red-soft);display:flex;align-items:center;justify-content:center}
.ea-page .opt .oi svg{width:23px;height:23px;fill:var(--red)}
.ea-page .opt.wa .oi{background:#E4F9EC}
.ea-page .opt.wa .oi svg{fill:#1EBE5B}
.ea-page .opt b{display:block;font-size:15.5px;color:var(--head)}
.ea-page .opt span{font-size:13.5px;color:var(--muted)}
.ea-page .office{text-align:left;background:#fff;border:1px solid var(--line);padding:26px;box-shadow:var(--shadow);margin-bottom:16px}
.ea-page .office h3{font-size:18px;margin-bottom:6px}
.ea-page .office .tag{display:inline-block;font-size:10.5px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:var(--char);padding:5px 10px;margin-bottom:13px}
.ea-page .office ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.ea-page .office li{display:flex;gap:12px;font-size:14.5px;align-items:flex-start}
.ea-page .office li svg{width:17px;height:17px;fill:var(--red);flex:none;margin-top:3px}
.ea-page footer h4{font-size:20px;margin-bottom:16px}
.ea-page footer .flogo{height:38px;width:auto;margin-bottom:24px}
.ea-page footer p, .ea-page footer li{font-size:14.5px;color:var(--ink);line-height:1.65}
@keyframes pulse{
0%{transform:scale(1);opacity:.7}100%{transform:scale(1.5);opacity:0}
}
.ea-page .reveal.pre{opacity:0;transform:translateY(26px)}
.ea-page .reveal.in{opacity:1;transform:none;transition:opacity .7s ease,transform .7s cubic-bezier(.16,1,.3,1)}
@media(max-width:1200px){
.ea-page{--gut:32px}
.ea-page .svc{grid-template-columns:1fr;gap:26px}
.ea-page .svclist{max-height:none;flex-direction:row;overflow-x:auto;overflow-y:hidden;padding-bottom:8px}
.ea-page .svctab{min-width:250px;border-left-width:1px;border-top:3px solid transparent}
.ea-page .svcpanel h3{font-size:23px}
.ea-page .hero .hud{display:none}
.ea-page h2.sec{font-size:33px}
.ea-page .hero{height:600px}
.ea-page .hero h1{font-size:44px}
.ea-page .grid4{grid-template-columns:repeat(2,1fr)}
.ea-page .mapgrid, .ea-page .cwrap, .ea-page .legacy .g{grid-template-columns:1fr;gap:34px}
}
@media(max-width:760px){
.ea-page{--gut:18px}
.ea-page section{padding:52px 0}
.ea-page h2.sec{font-size:27px}
.ea-page .hero{height:600px;margin:0}
.ea-page .hero h1{font-size:34px}
.ea-page .hero .sub{font-size:16.5px}
.ea-page .hero .ticker .lbl{display:none}
.ea-page .stats{grid-template-columns:repeat(2,1fr);gap:14px}
.ea-page .stat{padding:22px 10px}
.ea-page .stat .num{font-size:27px}
.ea-page .grid4, .ea-page .grid2, .ea-page .cgrid{grid-template-columns:1fr}
.ea-page .frow{grid-template-columns:1fr}
.ea-page .dl{flex-direction:column}
.ea-page .mapwrap.desktop-map{display:none}
.ea-page .ltile{width:190px;height:110px}
.ea-page .hero .brackets{inset:16px}
.ea-page .svcpanel .body{padding:24px}
.ea-page .svcpanel h3{font-size:21px}
.ea-page .svcpanel p{font-size:15px}
}
.ea-page .mobile-map{display:none}
@media(max-width:760px){
.ea-page .mobile-map{display:block}
}
@media(prefers-reduced-motion:reduce){
.ea-page *{animation:none!important;transition:none!important}
.ea-page .reveal.pre{opacity:0}
.ea-page .hero .slide.on{opacity:1;transform:scale(1)}
.ea-page .hero h1 .w, .ea-page .hero .fade{opacity:1;transform:none}
.ea-page .hero h1 .em:after{transform:scaleX(1)}
.ea-page .hero .slide .xray, .ea-page .hero .scanline, .ea-page .techph:after{display:none}
.ea-page .hero .brackets i{opacity:1}
}
.ea-page .chips{display:flex;flex-wrap:wrap;gap:9px}
.ea-page .chips label{position:relative;cursor:pointer}
.ea-page .chips input{position:absolute;opacity:0;pointer-events:none}
.ea-page .chips span{display:block;border:1px solid var(--line);background:var(--wash);padding:11px 15px;
  font-size:14px;font-weight:700;color:var(--head);transition:.18s}
.ea-page .chips label:hover span{border-color:var(--red)}
.ea-page .chips input:checked+span{background:var(--char);border-color:var(--char);color:#fff}
.ea-page .chips input:focus-visible+span{outline:2px solid var(--red);outline-offset:2px}
.ea-page .ctaband{background:var(--red);color:#fff;text-align:center}
.ea-page .ctaband h2{color:#fff;font-size:34px;margin-bottom:12px}
.ea-page .ctaband p{color:rgba(255,255,255,.9);font-size:17px;max-width:640px;margin:0 auto 26px}
.ea-page .ctaband .btn{background:#fff;color:var(--red)}
.ea-page .ctaband .btn:hover{background:var(--char);color:#fff}
.ea-page .ctaband .btn-ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.85)}
.ea-page .ctaband .btn-ghost:hover{background:#fff;color:var(--red)}
@media(max-width:1200px){

}
@media(max-width:760px){
.ea-page .ctaband h2{font-size:26px}
}
      `}</Style>
    </div>
  );
}
