import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AppImage from '../AppImage';

/* ==========================================================================
   Shared page primitives
   ==========================================================================

   These are the homepage's own patterns, extracted so the subpages can be
   built from the same parts. Before this every subpage hand-rolled its own
   heading block and card grid, which is why they drifted.

   Styling lives in src/styles/system.css. Nothing here carries its own CSS.
   ========================================================================== */

/* --- Reveal ---------------------------------------------------------------
   Fades a block up as it scrolls into view. Renders visible by default and
   only hides once the .js class is on <html>, so prerendered HTML stays
   readable without JavaScript. Honours prefers-reduced-motion. */
export function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const nodes = Array.from(root.querySelectorAll('.ea-rev'));
    const still =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (still || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-in'));
      return undefined;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, [rootRef]);
}

/* --- Page shell -----------------------------------------------------------
   Every subpage wraps in this. Supplies the .ea-page frame (nav clearance,
   type defaults) and runs the reveal observer over its own subtree. */
export function Page({ children, className = '' }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div ref={ref} className={`ea-page ${className}`.trim()}>
      {children}
    </div>
  );
}

/* --- Section --------------------------------------------------------------
   tone: 'white' | 'tint' | 'navy'. Padding comes from --ea-sec so every
   section on the site breathes at the same rhythm. */
export function Section({ tone = 'white', id, children, style, className = '' }) {
  const tones = { white: '', tint: 'ea-section--tint', navy: 'ea-section--navy' };
  return (
    <section id={id} className={`ea-section ${tones[tone] || ''} ${className}`.trim()} style={style}>
      <div className="ea-wrap">{children}</div>
    </section>
  );
}

/* --- SectionHead ----------------------------------------------------------
   The site's heading unit: red uppercase eyebrow, navy title, 64px rule,
   optional supporting paragraph. This is the typographic hierarchy the whole
   design depends on, so it exists once. */
export function SectionHead({ eyebrow, title, center = false, light = false, children }) {
  return (
    <div
      className={`ea-sec-head${center ? ' ea-sec-head--center' : ''}${light ? ' ea-sec-head--light' : ''} ea-rev`}
    >
      {eyebrow && <span className="ea-eyebrow">{eyebrow}</span>}
      <h2 className="ea-sec-title" style={light ? { color: '#FFFFFF' } : undefined}>
        {title}
      </h2>
      <span className="ea-rule" aria-hidden="true" />
      {children}
    </div>
  );
}

/* --- PageHero -------------------------------------------------------------
   Subpages used to open on a centred heading in white space. This gives them
   the homepage's navy treatment at banner height.

   `image` is optional on purpose. With no genuine photograph of the subject,
   `variant="plain"` draws a navy field instead — a deliberate surface rather
   than a borrowed photo of something else. */
export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageAlt = '',
  actions,
  crumbs,
  variant = image ? 'photo' : 'plain',
}) {
  return (
    <section className={`ea-phero${variant === 'plain' ? ' ea-phero--plain' : ''}`}>
      {variant === 'photo' && image && (
        <>
          <div className="ea-phero__media" aria-hidden="true">
            <AppImage src={image} alt={imageAlt} priority />
          </div>
          <div className="ea-phero__scrim" aria-hidden="true" />
        </>
      )}
      <div className="ea-wrap">
        <div className="ea-phero__in">
          {eyebrow && <span className="ea-eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {sub && <p className="ea-phero__sub">{sub}</p>}
          {actions && <div className="ea-phero__actions">{actions}</div>}
        </div>
      </div>
      {crumbs && (
        <div className="ea-phero__crumbs">
          <div className="ea-wrap">{crumbs}</div>
        </div>
      )}
    </section>
  );
}

export function Crumbs({ trail }) {
  return (
    <>
      {trail.map((c, i) => (
        <React.Fragment key={c.label}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {c.to ? <Link to={c.to}>{c.label}</Link> : <span style={{ margin: 0, opacity: 1 }}>{c.label}</span>}
        </React.Fragment>
      ))}
    </>
  );
}

/* --- EditorialRow ---------------------------------------------------------
   One subject per row, image one side, copy the other, alternating. The
   alternative to a grid of thumbnails: it needs a quarter as many images at
   four times the size, which is the right shape for a 13-photograph library. */
export function EditorialRow({ index, num, eyebrow, title, children, points, media, cta }) {
  const flip = typeof index === 'number' && index % 2 === 1;
  return (
    <div className={`ea-row${flip ? ' ea-row--flip' : ''} ea-rev`}>
      <div className="ea-row__media">{media}</div>
      <div className="ea-row__copy">
        {(num || eyebrow) && (
          <span className="ea-row__num">
            {num ? `${num} — ` : ''}
            {eyebrow}
          </span>
        )}
        <h2>{title}</h2>
        {children}
        {points && points.length > 0 && (
          <ul className="ea-row__list">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {cta && <div className="ea-row__cta">{cta}</div>}
      </div>
    </div>
  );
}

/* A navy typographic panel used where no honest photograph exists. */
export function Panel({ mark, title }) {
  return (
    <div className="ea-panel">
      {mark && <span className="ea-panel__mark">{mark}</span>}
      <p className="ea-panel__title">{title}</p>
    </div>
  );
}

/* --- Counter --------------------------------------------------------------
   Counts up once the strip scrolls into view. Initial state is the FINAL
   figure, so the prerendered HTML and any reduced-motion visitor see the real
   number rather than a zero. */
export function Counter({ to, suffix = '', run }) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!run) return undefined;
    const still =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) {
      setValue(to);
      return undefined;
    }
    let raf;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setValue(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

/* Fires `run` the first time the returned ref scrolls into view. */
export function useCountersOnView() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setRun(true);
      return undefined;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, run];
}

/* --- StatStrip ------------------------------------------------------------
   stats: [{ figure, suffix, label, static }]. A `static` figure is printed
   verbatim instead of counted, for values like "24/7". */
export function StatStrip({ stats, note }) {
  const [ref, run] = useCountersOnView();
  return (
    <div className="ea-stats__grid ea-rev" ref={ref}>
      {stats.map((s) => (
        <div className="ea-stat" key={s.label}>
          <span className="ea-stat__fig">
            {s.static ? s.static : <Counter to={s.figure} suffix={s.suffix || ''} run={run} />}
          </span>
          <span className="ea-stat__label">{s.label}</span>
        </div>
      ))}
      {note && <p className="ea-stats__note">{note}</p>}
    </div>
  );
}
