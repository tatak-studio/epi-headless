# EPI Colorspace — Design System

A complete design system and UI kit for **EPI-Colorspace**, a graphics, printing, fabrication and
installation company based in Gaithersburg, Maryland, serving the DMV (DC / Maryland / Virginia).

> Improve brand visibility and impact with the top-tier graphics & printing solutions of EPI-Colorspace.

---

## 1. Company & product context

EPI-Colorspace has operated for over 20 years as a single-shop partner for high-impact environmental
graphics: design, large-format print, fabrication, logistics and on-site installation. Their own
positioning line is *"We bring visions to life."* Their published client roster includes the
**Smithsonian**, the **Library of Congress** and **The Kennedy Center**.

**Five service lines** (this is the real inventory, taken from the live services page):

1. **Tradeshows** — booth design, fabrication, logistics and post-event storage.
2. **Exhibits & Displays** — museum-grade custom fabrication, professional install, specialty lighting and interactives.
3. **Signage Solutions** — exterior/construction signage, retail graphics, permanent garage signage and wayfinding.
4. **Large Format Printing** — wall murals, floor graphics, banners, outdoor displays.
5. **Corporate Branding & Environmental Graphics** — workplace graphics, murals, custom framing.

**Markets served:** museums and cultural institutions, universities, commercial real estate,
corporate environments, retail, construction.

**Surfaces / products represented in this system:** one product — the **marketing website**
(`epicolorspace.com`). There is no app, dashboard or docs site. Two adjacent properties are linked
from the site but are not part of it: `booth2biz.com` (a separate brand) and a Hightail file-drop.

### Sources used

| Source | Access | What was taken from it |
| --- | --- | --- |
| `https://www.epicolorspace.com/` | Read (rendered text) | Positioning, homepage copy, testimonial, nav and footer structure |
| `https://www.epicolorspace.com/services/` | Read (rendered text) | All five service lines, verbatim kickers, summaries and "Label: description" bullets |
| `https://www.epicolorspace.com/epi-colorspace-team/` | Read (summary) | Team framing and tone |
| `https://www.epicolorspace.com/wp-content/uploads/2023/08/revised-epi-logo.svg` | **NOT retrievable** | — see *Logo* below |
| `https://www.epicolorspace.com/wp-content/uploads/2026/01/cropped-Favicon-Transparent-270x270.png` | **NOT retrievable** | — |
| Site CSS (Bricks Builder / WordPress build) | **NOT retrievable** | — see *Colour provenance* below |
| `https://www.booth2biz.com/` | Not explored | Separate brand, out of scope |

No codebase, Figma file or slide deck was provided. No decks were built for that reason.

### ⚠️ Colour provenance — read this first

The brief said *"use the colors from the website."* The site is a WordPress/Bricks build and its
stylesheet, logo SVG and favicon could not be fetched into this project — only rendered page text
came through. **The palette below was therefore authored, not sampled.** It is built from the
brand's own subject matter — print process colour — rather than guessed from memory, and every
pairing is contrast-verified. Treat the specific hex values as a **proposal awaiting one round of
correction**: send the logo SVG or the real hex codes and the whole system re-tints from
`tokens/colors.css` alone.

### Logo

**There is no logo file in this system.** The real mark exists but could not be retrieved, and
fabricating a company's logo from memory is not acceptable. Every place a mark belongs, the
`Wordmark` component sets "EPI **COLORSPACE**" in Archivo 800 — "EPI" in the inherited colour,
"COLORSPACE" in Signal Red. See `assets/README.md` for the exact drop-in list.

---

## 2. Content fundamentals

**Voice: the confident specialist subcontractor.** EPI writes as the people who actually build and
hang the thing, addressing marketing and facilities decision-makers who need it done right and on a
date. Warm, but never chatty.

**Person.** First-person plural for the company, second person for the reader. *"We specialize in
transforming a wide variety of spaces…"* / *"…helping you stand out on the show floor."* Never "I".
Never third-person self-reference except in the formal opener, where the full brand name is used:
*"For over 20 years, EPI-Colorspace has been a trusted partner…"*

**The brand name.** Hyphenated in prose — **EPI-Colorspace**. Unhyphenated only in the logotype and
in page titles. Never "EPI" alone in body copy.

**Sentence shapes.**
- Headings are complete, declarative sentences, often long: *"EPI-Colorspace is the trusted partner for custom signage, fabrication, and installation in the DMV."* They are not clipped fragments and never questions.
- One-line kickers sit above the body copy in Title Case: *"From Concept to Execution we help our Clients create a Show-Stopping Presence."*
- Body copy is 1–3 sentences. Long em-dash asides are house style: *"a wide variety of spaces—from museums and universities to commercial real estate and corporate environments—into dynamic, immersive brand experiences."*

**The bullet pattern.** Every service detail uses **`Bold Label:` then a description**, in exactly
that shape. `ServiceCard` takes `{label, text}` for this reason.
> **Exterior Signage:** Durable, weather-resistant banners and wraps for construction branding and retail leasing.

**Casing.** Sentence case for headings and body. Title Case for kickers and service names.
UPPERCASE only for eyebrows/overlines, display hero headings and the wordmark. Never ALL-CAPS a
sentence.

**Recurring vocabulary** — reuse these, they are the brand's own words: *immersive*, *high-impact*,
*turnkey*, *precision craftsmanship*, *from concept to execution*, *trusted partner*,
*show-stopping*, *captivate*, *state-of-the-art*, *unforgettable*, *responsiveness*, *DMV*.

**CTAs.** Imperative, three words or fewer, sentence-case-with-caps-as-on-site: **Start Your
Project**, **Read More**, **See our Projects**, **See our Markets**, **Send Files**. One primary CTA
per view.

**Numbers.** Numerals always, with a `+` for approximations: *20+ years*, *400+ years of combined
expertise*. Dimensions and specs set in mono: `96 × 48 in`, `0.125 in bleed`, `13 oz scrim vinyl`.

**Emoji: never.** Not in UI, not in headings, not in body copy. The one place emoji appear anywhere
near this brand is third-party directory listings, which are not the brand's own writing.

**Vibe check.** Confident, specific, proud of the client list, allergic to fluff. If a sentence
could describe any print shop, it is wrong. If it names a substrate, an institution, a deadline or a
city, it is right.

---

## 3. Visual foundations

### Colour
An **ink-on-paper** base with a **process-colour accent gamut** — the literal subject matter of a
print company.

- **Ink** (`--ink-50` … `--ink-950`) is warm-neutral, not blue-grey. It carries all text, borders and dark sections.
- **Paper** is three grounds: `--paper` #FFFFFF, `--paper-warm` #FAF8F5, `--paper-warm-deep` #F2EEE8. Alternating paper and paper-warm is what gives a page rhythm; there are **no more than two background colours on any page**.
- **Signal Red** is the one accent. `--red-600` #C42711 is the text- and fill-safe primary (5.8:1 on paper). `--red-500` #E8341C is hotter and **graphic-only** — it fails AA at body size.
- **The process gamut** — cyan #0090D4, magenta #D6006E, yellow #FFC400 — is for the spectrum rule, category coding and charts. `-700` steps exist so the gamut can carry text when it must.
- Semantic status is four `fg`/`bg` pairs; the foreground always clears 4.5:1 on its own background.

Never introduce a colour outside `tokens/colors.css`. Never use a gradient as a background fill —
the only gradients in the system are the spectrum rule and the two protection gradients.

### Type
Three roles, no more.

| Role | Face | Use |
| --- | --- | --- |
| Display | **Archivo** 700/800, wide axis (112%), −0.025em | Hero, H1–H3, wordmark, stat numerals, quotes |
| Text | **Source Sans 3** 400/600, 1.6 line-height | Body, ledes, UI, H4 |
| Data | **Source Code Pro**, tabular figures | Dimensions, quantities, file names, percentages, indices |

Display type is uppercase in heroes and sentence case elsewhere. Body copy never exceeds
`--measure-wide` (78ch); the default is `--measure` (64ch). Type scale is fluid `clamp()`, so there
are almost no typographic breakpoints.

**Substitution flag:** the live site serves type from an Adobe Fonts kit whose binaries are not
publicly downloadable. Archivo / Source Sans 3 / Source Code Pro are the nearest Google Fonts
match — a wide industrial grotesque plus Adobe's own text family. **Send the kit id or the licensed
files and `tokens/fonts.css` is the only file that changes.**

### Spacing & layout
4px base. Component padding lives in `--space-1` … `--space-8`; layout in `--space-10` … `--space-32`.
Section rhythm is fluid (`--section-y` = `clamp(4rem, 8vw, 7rem)`), so pages compress on small
screens without new breakpoints. Container is 1240px with a `clamp(1rem, 4vw, 3rem)` gutter;
`--container-wide` 1600px exists for full-bleed media bands. Grid is 12 / 8 / 4 columns.

Fixed elements: the header is `position: sticky` at `--z-nav`; the mobile drawer is `position: fixed`
full-bleed. Nothing else is pinned — no floating chat bubbles, no sticky sidebars, no cookie shelf
in the design system.

### Backgrounds & imagery
Photography-led, never illustrated. **No hand-drawn illustration, no isometric vector scenes, no
repeating decorative patterns.** Images are full-bleed in heroes and ratio-locked in grids.

Photographic vibe: **cool-neutral, architectural, available light**. Wide shots of installed work in
real spaces — galleries, lobbies, garages, show floors — with people incidental rather than posed.
No warm filters, no grain, no duotone, no colour wash.

The only textures in the system are functional: the diagonal hatch inside an empty `MediaFrame`
(a stand-in that reads as "art pending", not as decoration) and the ink hatch behind an image-less
`Hero`.

### The spectrum rule
The signature device: a **4px hard-stop cyan / magenta / yellow / ink bar**. It appears under the
nav, under section eyebrows, on the footer's top edge, on the bottom edge of the Hero, and as the
quote mark in `TestimonialCard`. Rules: hard stops only (never blended), 0° or 90° only, **at most
once per section**.

### Protection vs capsules
Text over imagery always uses a **protection gradient**, never a capsule or a solid plate.
`--gradient-protect-bottom` for captions; the Hero uses a 100° directional scrim from 94% to 35%
ink so the display type sits on the dense side of the frame.

### Borders, radii, shadows
The brand is **square**. `--radius-md` 4px for controls, `--radius-lg` 8px for cards,
`--radius-sm` 2px for badges, `--radius-pill` for tags and avatars only. Nothing else is round;
photographs are never cropped to circles.

**Hairline borders do the work that shadows do elsewhere.** A card is a 1px `--border-subtle` box on
white; it earns a shadow only when raised or hovered. Shadows are tight, low-spread and neutral —
`--shadow-2` for card hover, `--shadow-3` for popovers, `--shadow-4` for modals. **No coloured
shadows, no glows, no inner shadows** except the `--shadow-hairline` border trick. `ServiceCard`'s
3px ink top border, turning Signal Red on hover, is the system's structural-accent pattern.

### Transparency & blur
Two uses only: the scrolled header (`--backdrop-tint` white at 82% + 12px blur) and the modal scrim
(ink at 62% + 4px blur). Never on cards, never on nav panels, never as a "glass" aesthetic.

### Animation
**Short, flat, no bounce.** 130ms for hover and focus, 200ms for card lift and switch travel, 320ms
for drawers and dialogs. Easing is `cubic-bezier(.2,.7,.3,1)` for everything that responds to input;
`--ease-entrance` is reserved for scroll reveals (fade + 12px rise). No spring, no overshoot, no
staggered letter animation, no parallax. `prefers-reduced-motion` zeroes every duration and the lift.

### Interaction states
- **Hover** — buttons darken one ramp step (600→700); cards lift `-1px` and gain `--shadow-2`; nav links grow a 2px Signal Red underline from the left; `ServiceCard` swaps its top border to Signal Red; secondary buttons **invert** to ink-fill/white-text.
- **Press** — darken a second step (700→800) plus `scale(0.985)`. Never a colour change alone.
- **Focus** — 3px `--focus-ring` (Signal Red) outline at 2px offset; yellow on ink surfaces. Never removed, never replaced by a shadow.
- **Disabled** — 45% opacity, no transform, `cursor: not-allowed`. Never a grey repaint.
- **Selected** — ink fill (tags, pagination, tabs' 3px red underline).

### Accessibility (WCAG AA)
Contrast for every approved pairing is published in `guidelines/color-pairings.html`. Minimum tap
target is `--tap-min` 44px (`sm` controls are 36px and only permitted inside a 44px row). Focus is
always visible. Icons are `aria-hidden` unless given a `label`; `IconButton` **requires** one.
Errors use `role="alert"` and are never colour-only — they always carry an icon and text.

---

## 4. Iconography

**System: Lucide, pinned to `lucide-static@0.469.0`, loaded per glyph from CDN.**

The live site is a Bricks/WordPress build with no exposed icon font or sprite sheet, and its inline
SVGs were not retrievable — **so Lucide is a flagged substitution.** It was chosen because it is the
closest match to what the site shows: single-stroke, geometric, ~1.5px, no fills, square-ish
terminals.

- **Delivery:** the `Icon` component fetches each glyph once from the pinned CDN and inlines the SVG, caching it by name. Lucide SVGs use `stroke="currentColor"`, so an icon inherits colour like a glyph and needs no per-colour variants. (Cross-origin CSS masks are blocked by browsers, so inlining rather than masking.) No local binaries, no icon font.
- **Sizes:** 12px inside badges, 14–16px inline with text, 18px in buttons, 20px default and in nav, 26px+ as a service-card feature glyph.
- **Colour:** `currentColor` by default; `--text-accent` when an icon is the feature element of a card. Never multicolour.
- **House glyph set:** `arrow-right` (the CTA affordance), `arrow-up-right` (external), `chevron-down`/`left`/`right`, `check`, `x`, `menu`, `plus`/`minus` (accordion), `mail`, `phone`, `linkedin`, `upload`, `download`, `info`, `alert-circle`, `alert-triangle`, `alert-octagon`, `check-circle`, `search`, and the service glyphs `presentation`, `landmark`, `signpost`, `printer`, `building-2`, `ruler`, `truck`.
- **Emoji: never.** Not as icons, not as bullets, not in copy.
- **Unicode as icons: never.** No `→`, no `✓`, no `•` standing in for a glyph — use `Icon`.
- **No hand-drawn SVG.** If a needed glyph is not in Lucide, ask; do not draw one.
- **Client and partner logos are never redrawn.** `LogoWall` sets names in display type unless a real logo file is supplied.

**Replace this** if the brand has a real icon set: drop the SVGs into `assets/icons/` and point
`Icon` at them. One file changes.

---

## 5. Index

### Root
| File | What it is |
| --- | --- |
| `styles.css` | The single global entry point — `@import` list only. Consumers link this. |
| `readme.md` | This file. |
| `SKILL.md` | Agent Skills front-matter so this folder works as a Claude Code skill. |
| `thumbnail.html` | Homepage tile for the design system. |
| `tokens/` | `fonts · colors · typography · spacing · radius · elevation · motion · layout · base` |
| `components/epi-components.css` | Class contracts backing the React primitives; usable in plain HTML. |
| `guidelines/` | 25 foundation specimen cards (Colors · Type · Spacing · Brand · Responsive). |
| `assets/` | **Read `assets/README.md`** — the logo, favicon and photography gaps and how to close them. |
| `ui_kits/website/` | Interactive four-screen recreation of the marketing site. |

### Components (37)

**`components/core/`** — `Icon`, `Button`, `IconButton`, `Badge`, `Tag`, `Card` (+ `CardMedia`,
`CardBody`, `CardFooter`), `MediaFrame`, `Stat`, `SpectrumRule`, `Wordmark`

**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`,
`RadioGroup`, `Switch`

**`components/navigation/`** — `Navbar`, `MobileMenu`, `Tabs`, `Breadcrumbs`, `Pagination`, `Footer`

**`components/feedback/`** — `Alert`, `Toast`, `ToastStack`, `Dialog`, `Tooltip`, `ProgressBar`,
`Spinner`

**`components/layout/`** — `Section`, `SectionHeader`, `StatBand`

**`components/marketing/`** — `Hero`, `ServiceCard`, `CaseStudyCard`, `TestimonialCard`, `CTABand`,
`LogoWall`, `Accordion`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage), and
every directory has a `@dsCard`-tagged showcase HTML.

### Intentional additions

No source defined a component inventory (there was no codebase, Figma file or kit — only a live
marketing site), so the set above is a standard marketing-site system sized to EPI's five service
lines. Three items are brand-specific rather than generic and are worth calling out:

- **`SpectrumRule`** — encodes the process-colour bar so it is used consistently instead of hand-rolled per page.
- **`Wordmark`** — a deliberate placeholder for the missing logo file, so the gap is visible in code rather than papered over.
- **`MediaFrame`** — forces every image slot to declare a ratio and to render an honest "art pending" placeholder instead of a stock photo.

### UI kit
`ui_kits/website/` — Home, Services, Case Studies and Contact, click-through, composed only from the
primitives above. See its own `README.md` for what is interactive and what is deliberately blank.

### Slides
None. No slide template or deck was provided, so none was invented.
