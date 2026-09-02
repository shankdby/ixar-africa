# Hero animation — a proposal

*Written as a recommendation only. Nothing in here is implemented; the hero on
`/` is unchanged.*

## What the hero does today

Five photographs cross-fade on an 11-second Ken Burns drift. Every 7 seconds a
red scanline sweeps left to right, and a masked copy of the same photograph —
inverted, desaturated, contrast-pushed — follows the line so a bright negative
band travels across the image. A 64px grid, four corner brackets and a country
ticker sit on top.

The idea underneath it is right. An inspection company's hero should look like
inspection, and a scanline crossing an image is exactly that gesture.

## Why it doesn't quite land

**The sweep is applied to photographs of people.** `invert(1) grayscale(1)`
across a group of crew reads as a colour negative — the thing you see when you
hold up old film — not as a radiograph. The visual grammar says "photo effect"
where it should say "we can see inside this."

**It never stops.** The 7-second loop runs while the visitor is reading the
headline. Motion in the peripheral field pulls the eye off the text it is
supposed to be supporting.

**It is expensive to load.** Five full-bleed photographs, each also rendered a
second time as the masked `.xray` layer, sit in front of the Largest Contentful
Paint. The hero is the slowest thing on the page.

**It is generic.** Grid, brackets, scanline and a HUD label are the standard
"technical" kit. Every industrial site has some version of it. None of it is
specifically about non-destructive testing, and none of it is specifically IXAR.

## The proposal: sweep to a real radiograph

Do the same gesture, but reveal something worth revealing.

Pair one photograph of a girth weld or pipe joint with **the actual radiograph
of that same joint**. Hold the photograph. Sweep the line. Behind the line the
photograph becomes the film: the weld cap, the root pass, the heat-affected
zone, the density strip down the edge. Hold the film for a beat. Sweep back.

That is the entire business in one gesture, and no competitor can copy it
without doing the work, because it requires a real radiograph of a real joint
IXAR shot.

It is also honest in a way the current version is not. A visitor who knows the
industry looks at an inverted group photo and sees a filter. They look at a
weld radiograph and see a company that owns the equipment.

### What it needs from IXAR

Small ask, and the material already exists:

1. **Two or three digital radiographs** of girth welds from Tilenga or
   Kingfisher — the DR or CR output, exported as PNG or TIFF. Any joint that
   passed, so nothing sensitive is on display.
2. **A photograph of the same joint** before shooting, ideally from the same
   angle. If an exact pair is impossible, any weld photograph plus any
   radiograph still works; the eye is not checking the geometry.
3. **Client clearance** to publish both, as with the project list.

If a pair is genuinely unavailable, a radiograph on its own still carries the
hero: hold the film, let the scanline sweep across it as a densitometer trace
would, and let the headline sit on the dark.

### What it needs in code

Roughly 40 lines, replacing what is there:

- The `.slide`/`.xray` double-render goes away. Two layers, one photograph and
  one radiograph, with a mask on the top layer driven by a CSS custom property.
- The sweep runs on a timeline that **stops** — sweep, hold, sweep back, hold,
  then idle. Motion that resolves reads as deliberate; motion that loops reads
  as a screensaver.
- The scanline sits on the same custom property, so line and reveal cannot drift
  apart the way two independent 7-second animations eventually do.
- `prefers-reduced-motion` gets the radiograph, held still. That is the more
  interesting frame anyway.

A working prototype is in `docs/hero-prototype.html` — open it in a browser.
The radiograph in it is procedurally drawn, not a real film, purely so the
motion can be judged before anyone goes looking for media.

## Other media worth considering

**PAUT sector scan (no media needed).** The S-scan fan of a phased array probe
— the coloured wedge sweeping through a weld cross-section — is drawn entirely
in SVG. It is the most recognisable image in advanced NDT, it costs about 6KB,
and it loads instantly. Weaker emotionally than a photograph, unbeatable on
performance.

**Six seconds of silent video.** A crawler entering a pipe, or an encoder
running a probe along a weld. Muted, looping, `playsinline`, with a poster
frame. Real motion beats simulated motion, but a video hero costs 1–3MB and
needs shooting.

**One photograph, no animation.** The Tilenga CPF frame, held still, with the
ticker underneath. Fastest possible LCP and quietly confident. Worth keeping on
the table — a lot of serious industrial firms do exactly this, and it never
looks cheap.

## Recommendation

The radiograph reveal, with the PAUT sector scan as the fallback if the
radiographs cannot be cleared for publication. Both are specific to what IXAR
does. Both are lighter than what is running now. Neither loops forever.
