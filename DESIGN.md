# DESIGN.md — Monifa Sultana Portfolio

> **Companion to:** `PRD.md`. Same product, same page names, same component names, same priority labels.
> **Labels:** **[E]** essential · **[D]** desirable · **[O]** optional · `[NEEDS USER CONFIRMATION]`.
> **Rule:** If this document and `PRD.md` disagree, `PRD.md` wins. Nothing here may introduce a feature the PRD does not support.
> **Placeholder policy:** Copy shown in quotes is *draft*, derived from CV facts. Facts not verified in PRD §30 must not appear in production.

---

## 1. Design vision

**"The annotated build."** A dark, editorial, typographic site where every project is presented the way a good teacher would explain it: a clear picture, numbered callouts, short margin notes. The one 3D moment (an exploded system stack) is itself an explanatory diagram, so the visual identity and the professional identity (developer + educator) are the same idea.

Principles:
1. **Explain, don't decorate.** Every visual element either clarifies a thing or organises the page.
2. **One accent, used rarely.** The accent marks *what to look at* (a word, a callout, a CTA), never surfaces.
3. **Type carries the personality.** Serif display + clean sans + mono annotations.
4. **Honesty is visible.** Status badges, "Concept" labels, no vanity metrics.
5. **Calm motion.** Motion shows structure or state change, then gets out of the way.

## 2. Brand personality

Precise · Warm · Curious · Credible · Quietly confident. **Not:** flashy, neon, hype-driven, corporate-stiff, "creative agency".
Voice in UI copy: plain, first-person, short sentences, no superlatives ("passionate", "expert", "cutting-edge" are banned).

## 3. Reference image analysis (design-specific)

| Reference | Take | Leave |
|---|---|---|
| R1 gold/dark | Accent on one headline word; horizontal timeline idea | Boxed bento panels everywhere; stats; stars; gold glow/halo around portrait |
| R2 blue/dark | Negative space; headline-first hero; benefit-led strip | Portrait-dependent composition; blue spotlight behind photo |
| R3 violet/dark | Type hierarchy; code-card motif | Skill bars; stats row; violet gradient circle; icon logo row |

Adapted outcome: accent word in H1 (italic serif, accent colour), timeline (vertical, quiet), a **code-snippet-like mono annotation** motif generalised into `Annotation` callouts. No glow, no bento, no icon walls, no bars, no counters.

## 4. Final creative direction

**Hybrid Editorial + Interactive (Direction D), restrained.**
- Editorial: large serif display, hairline rules, generous whitespace, numbered sections (`01 — Work`).
- Interactive: one 3D hero element; project panels with subtle parallax and annotation reveals; polished form.
- Rejected for fit/complexity: fully immersive 3D world (credibility + performance), experimental studio style (readability, honesty).

## 5. Visual identity

- **Mood:** late-evening study desk — dark ink surface, chalk/bone text, a single ember-orange marker for emphasis.
- **Motif system:** (1) hairline rules, (2) numbered mono labels, (3) `Annotation` pins (small numbered circles + leader lines), (4) layered-slab geometry (from the hero) reused as a tiny recurring glyph.
- **Brand mark:** wordmark "Monifa Sultana" in Instrument Serif (`SiteHeader`), with a 3-slab glyph (three offset thin rectangles, 20×20 px) preceding it [D]. No logo beyond that. Favicon: the glyph on ink, ember top slab.

## 6. Color tokens

Define as CSS variables on `:root`; expose in Tailwind theme. Never use raw hex in components.

| Token | Hex | Use |
|---|---|---|
| `--ink-950` | `#0B0C0E` | Page background |
| `--ink-900` | `#111316` | Alt section background, header (scrolled) |
| `--ink-850` | `#16191D` | Cards, frames |
| `--ink-800` | `#1C2025` | Raised surfaces, inputs |
| `--ink-700` | `#2A2F36` | Hairlines (default) |
| `--ink-600` | `#3A414A` | Hairlines (strong), borders on hover |
| `--text-mute` | `#8C939D` | Tertiary text, captions (≥ 4.5:1 on ink-950, verify) |
| `--text-soft` | `#B5BBC3` | Secondary/body copy |
| `--bone` | `#ECE8E1` | Primary text, headings |
| `--paper` | `#F5F2EC` | Reserved for [O] light theme |
| `--ember-400` | `#F08A57` | Accent hover / focus ring |
| `--ember-500` | `#E8743B` | **Accent** (≈ 6.5:1 on ink-950) |
| `--ember-600` | `#C85A24` | Accent pressed |
| `--ember-wash` | `rgba(232,116,59,0.10)` | Subtle accent tint (selected state only) |
| `--danger` | `#FF7A7A` | Form error text/border only |
| `--success` | `#6FCF97` | Form success text/icon only |

Rules: accent covers ≤ 5% of any viewport; no gradients except (a) the hero scene's soft ink vignette and (b) a 1-px hairline gradient fade on section rules; no glassmorphism; no neon glow; status colours never used decoratively. Text on accent buttons: `--ink-950`.
Per-project accent: **not used in v1** (projects share one accent for coherence). `accent` frontmatter field is reserved [O].

## 7. Typography system

Fonts (self-hosted via `next/font`, subsetted Latin): **Instrument Serif** (display; regular + italic), **Geist** (UI/body; 400, 500, 600), **Geist Mono** (labels; 400, 500). Fallbacks: `ui-serif, Georgia` / `ui-sans-serif, system-ui` / `ui-monospace`.

| Style | Font | Size (fluid) | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | Instrument Serif | `clamp(3rem, 1.4rem + 6.2vw, 7.5rem)` | 0.95 | -0.02em | Home H1 |
| `display-l` | Instrument Serif | `clamp(2.5rem, 1.4rem + 4.2vw, 5.5rem)` | 1.0 | -0.02em | Project Detail H1, About H1 |
| `h2` | Instrument Serif | `clamp(2rem, 1.3rem + 2.6vw, 3.75rem)` | 1.05 | -0.015em | Section titles |
| `h3` | Geist 600 | `clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)` | 1.25 | -0.01em | Sub-headings |
| `body-l` | Geist 400 | `clamp(1.125rem, 1.05rem + 0.3vw, 1.3125rem)` | 1.55 | 0 | Lead paragraphs |
| `body` | Geist 400 | `1.0625rem` (17px) | 1.65 | 0 | Body |
| `small` | Geist 400 | `0.9375rem` | 1.55 | 0 | Captions, meta |
| `label` | Geist Mono 500 | `0.75rem` | 1.3 | 0.08em, uppercase | Eyebrows, numbers, tags |

Rules: max line length 68ch; headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`; **accent word** in headings = italic Instrument Serif in `--ember-500` (max one per heading); body text colour `--text-soft`, headings `--bone`; numerals in labels use tabular figures.
Heading hierarchy: one H1/page → H2 per section → H3 per card/subsection.

## 8. Spacing and grid

- Base unit 4 px. Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192` (tokens `--space-1…11`).
- Section vertical padding: `clamp(72px, 10vw, 160px)`.
- Container: max-width 1280 px (content), 1440 px (wide, hero + project frames); page gutters 20 px mobile / 32 px tablet / 48 px desktop.
- Grid: 4 columns mobile (gutter 16) · 8 tablet (gutter 24) · 12 desktop (gutter 24). Use CSS grid; no float/absolute layout for content.
- Rhythm: stack spacing inside sections 24/32/48; between section header and content 48 (mobile) / 80 (desktop).

## 9. Layout rules

1. Each section = `SectionHeader` (mono number + label, H2) + content, separated from the previous by a 1 px `--ink-700` hairline spanning the container.
2. Left-aligned by default; centre alignment only for 404 and the closing Contact CTA headline [D].
3. Asymmetric composition: headline spans cols 1–7, supporting content cols 8–12 (desktop). Use whitespace instead of boxes.
4. Cards are used only for project-related content and form; elsewhere use rules and spacing.
5. Never nest cards inside cards. Max two surface levels.
6. Section backgrounds alternate `--ink-950` / `--ink-900` only where it aids separation (Stack and Direction use `--ink-900`).
7. No horizontal scrolling regions except `BrowserFrame` content wider than viewport (never on mobile; frames scale).

## 10. Navigation

**`SiteHeader`** (sticky, height 72 px desktop / 60 px mobile):
- Left: wordmark (+ glyph [D]) linking to `/`.
- Right (≥ 768 px): `Work`, `About`, `Contact` as `TextLink` style (label size, uppercase optional: use `body` weight 500, not uppercase), then `Download CV` as secondary `Button` (small).
- Background: transparent at top; after 24 px scroll: `--ink-900` at 85% opacity with 12 px backdrop blur (blur disabled if `prefers-reduced-transparency` or low-perf: solid `--ink-900`), bottom hairline `--ink-700`. Transition 200 ms.
- Active link: 1 px accent underline offset 6 px. Current page `aria-current="page"`.
- Hide-on-scroll-down / show-on-scroll-up: **not used** (predictable header).
- Skip link: first focusable, visually hidden until focus, appears top-left as `Button`.

**`MobileMenu`** (< 768 px): trigger is a 44×44 icon button (two-line hamburger → X) labelled "Menu". Opens a full-screen `--ink-950` dialog (`role="dialog" aria-modal`): links at `display-l`-lite (`h2` size, serif), stacked with 24 px gaps, mono index numbers (`01`…); CV button and confirmed social links at bottom. Open animation: opacity 0→1 over 200 ms, links stagger 40 ms translateY 12→0. Focus trap, `Esc` closes, body scroll locked, focus returns to trigger.

## 11. Buttons and links

| Variant | Spec |
|---|---|
| `Button` primary | Height 48 (small 40); padding 0 24; bg `--ember-500`; text `--ink-950` Geist 600 15px; radius 4; hover bg `--ember-400` + arrow icon shifts 3 px right; pressed `--ember-600`; focus ring 2 px `--ember-400` offset 2 px `--ink-950`; disabled 40% opacity, no pointer |
| `Button` secondary | Same size; bg transparent; border 1 px `--ink-600`; text `--bone`; hover border `--bone`, bg `rgba(236,232,225,0.04)` |
| `Button` ghost / `TextLink` | Text `--bone`, underline 1 px `--ink-600` offset 4; hover underline → `--ember-500`, arrow `↗` for external |
| External links | Trailing `↗` glyph, `aria-label` adds "(opens in new tab)" |
| Min target | 44×44 px incl. padding |
| Transition | 150 ms `ease-out` (colour, border, transform) |

Hero CTAs: primary **"View projects"** (→ `#work`), secondary **"Download CV"**. After Q-03: contact CTA text = "Get in touch" (default) or "Discuss a project" (if client work confirmed). Never "Hire me" unless confirmed.

## 12. Cards and containers

Used for: `ProjectFeature` frame area, `FactSheet`, `DirectionPanel`, `ContactForm`.
- Surface `--ink-850`, border 1 px `--ink-700`, radius 8, padding 24 (mobile) / 32 (desktop).
- Hover (interactive cards only): border → `--ink-600`, no lift, no shadow change.
- Shadow: only `BrowserFrame`: `0 24px 60px -24px rgba(0,0,0,0.6)`. No other shadows.
- `Tag`: label style, border 1 px `--ink-600`, radius 999, padding 4×10, bg transparent.
- `StatusBadge`: label style, border 1 px `--ink-600`, radius 4, icon (8 px dot shape varies per status: filled circle = Live, hollow circle = Built, half circle = In progress, square = Academic, dashed square = Concept) + text. **Meaning never colour-only.** Colour: all `--bone`; only `Live` uses accent dot.

## 13. Project presentation

### 13.1 `ProjectFeature` (Home › Selected Work) [E]
Full-width panel per project, stacked with 128 px (desktop) / 96 px (mobile) gaps. No carousel.

Desktop (≥ 1024): 12-col grid.
- Row 1 (above frame): mono index `01` + category (left); `StatusBadge` + year (right).
- Cols 1–7: `BrowserFrame` showing primary screenshot (16:10). Cols 8–12: H2-sized title (serif, max 2 lines), tagline (`body-l`), 3–4 key feature lines (from `features[]`, first 4), `Tag` row (up to 5 stack items), then `TextLink` "Read the case study →".
- Alternate sides? **No** — keep frame left for scan consistency; vary only via the secondary screenshot (see below).
- Secondary screenshot (admin/mobile) overlaps the frame bottom-right corner by 10% as a smaller `BrowserFrame` (60% width, 8 px offset layered; parallax 8 px opposite direction on scroll) [D].
- 2 `Annotation` pins on the primary screenshot, appear on hover/focus of panel and on first reveal (opacity 0→1, 300 ms, stagger 120 ms); pins are decorative on Home (`aria-hidden`), informative on Project Detail.

Tablet: frame full width, text block below in two columns (title+tagline | features+tags).
Mobile: frame full width (no secondary), text stacked: title, tagline, `Tag`s, link; features collapsed (hidden). Entire frame is a link (≥ 44 px tap area) in addition to the text link.

### 13.2 `BrowserFrame`
Top bar 32 px `--ink-800` with three 8 px dots (`--ink-600`, no colour) and a mono URL pill showing the **real live domain only if known**, else the project slug-label like `project preview` (never a fake URL). Body shows `next/image` with `aspect-ratio` fixed, `object-fit: cover`, `object-position: top`. Radius 8, border 1 px `--ink-700`. Alt text required. Screenshot missing → dev-only dashed placeholder ("Screenshot pending"), production hides project.

### 13.3 Presentation per project (initial set)
| Project | Primary visual | Signature element |
|---|---|---|
| BuildHub | Storefront + admin screenshot | **Feature map**: six grouped capabilities (Catalog · Inventory · Promotions · Orders · Reviews & Returns · Admin roles) as an annotated list tied to numbered pins |
| Starfair | Public site + admin panel | **Flipbook highlight**: separate full-width screenshot/video of digital magazine section with caption [D] |
| Sevix Global | Marketing site | **Modules breakdown**: Services · Pricing · Portfolio · Blog · Contact · Admin, plus "Production readiness" list (routing, DB structure, security, SEO, sitemap, performance) as CV-stated |
| COVID-19 system | Academic layout | Smaller panel, `Academic` badge, no `featured` |
| Techy Octopus OS | Two-column `FeatureList` | **Implemented / Planned** columns; planned items use dashed-border style |
| OTHM Citation Checker | Concept layout | `Concept` badge at header, requirements list, "Not built" notice if confirmed so |

## 14. Case-study layouts (`Project Detail`)

Order (sections omitted when empty):
1. **Header:** mono breadcrumb (`Work / BuildHub`), H1 (`display-l`), tagline, `StatusBadge` + `Tag`s.
2. **`FactSheet`** (card, 2×3 grid desktop, stacked mobile): Year · Type · My role · Status · Stack · Links (Live / Repository). Labels in `label` style, values `body`.
3. **Hero media:** `BrowserFrame` full container width (wide 1440), then optional video.
4. **Overview** (cols 4–10, `body-l`) with an aside (cols 1–3, sticky) containing the table of contents for the page (anchors) [D].
5. **Problem & Objectives** (two-column).
6. **Features:** `FeatureList` — numbered rows: number, title, body; each row optionally linked to an `Annotation` pin number on the screenshot above (hover pin ↔ row highlight, `--ember-wash`) [D].
7. **My contributions** (list with hairline separators).
8. **Gallery:** screenshots in 2-col grid (1-col mobile) with captions; click opens a lightbox dialog [D] (focus-trapped, arrow-key nav).
9. **Architecture / diagram** (SVG, authored from confirmed info only).
10. **Implementation & Challenges** (prose, MDX).
11. **Outcomes** (only `verified: true` items).
12. **Next/previous project** (large serif links with index).
13. **Contact CTA** band.

## 15. AI Automation visual language (`Direction`, `AutomationFlow`)

### 15.1 `DirectionPanel` (Home, § `Direction`) [E]
Layout: `--ink-900` section. Left (cols 1–5): label `06 — Direction`, H2 "Where I'm heading", short honest paragraph (≤ 60 words). Right (cols 6–12): up to three stacked rows separated by hairlines: **Evidence today** (links to F-05, F-10, F-11 items as plain text), **Interested in automating** `[NEEDS USER CONFIRMATION: Q-09]`, **Explored** (omit if empty). Footer line: "Case studies will appear here when they're documented." Link to `/automation` only when it exists.
Tone: calm, no robot imagery, no brain/circuit clichés, no glow, no chat-bubble mockups.

### 15.2 `AutomationFlow` (future case-study diagram) [D, built but not shown until content exists]
- Horizontal on ≥ 1024 px; vertical stepped list below.
- Nodes: 160×64 rounded-rect (radius 8), `--ink-850` fill, 1 px `--ink-600` border, mono kind label above (`TRIGGER`, `ACTION`, `AI`, `RULE`, `APPROVAL`, `OUTPUT`), title below.
- Node kind shapes (not colour): trigger = left-notched, AI = double-border, approval = person glyph, output = filled left bar in accent.
- Connectors: 1 px `--ink-600` lines with 6 px arrowheads; one 6 px accent "packet" moves along the path when the diagram enters view (once, 1.6 s total, linear stepped per node 250 ms). Reduced motion: no packet; all connectors static.
- Under the diagram: the nine-part template (Business problem, Manual process, Trigger, Workflow steps, AI/rules processing, Integrations, Human approval, Output, Verified results) as a definition list. Missing parts omitted.
- Dev-only route `/dev/automation-flow` with clearly marked dummy data; excluded from production.

## 16. 3D art direction (`HeroScene`)

**Concept: Exploded Stack.** Three thin slabs (Interface, Logic, Data) in an isometric-ish exploded view, joined by hairline connections, with one ember "request" pulse travelling top-to-bottom and back.

- **Geometry:** 3 rounded boxes 4.2 × 2.6 × 0.06 units (corner radius 0.12). Vertical gaps 0.9 at rest, expanding to 1.6 across the first 100vh of scroll.
- **Slab detail:** (Interface) fine inset line grid at 0.02 opacity-equivalent via a small procedural line set + 3 tiny rectangle "blocks"; (Logic) 8 small nodes (instanced spheres r 0.05) joined by thin line segments forming a small graph; (Data) 3 stacked thin cylinders (0.25 r, 0.08 h) as a database glyph. Total triangles ≤ 8,000.
- **Connections:** 6 vertical hairlines (Line segments, bone at 30% opacity) between slabs; the pulse is a 0.07 radius ember sphere with a short trailing line, loop 6 s, ease in-out per hop (0.9 s per slab).
- **Materials:** `MeshStandardMaterial` colour `--ink-850` (≈ `#16191D`), roughness 0.65, metalness 0.15; edges via `EdgesGeometry` lines in `--bone` at 35%; top face of each slab accent-free. Ember appears **only** on the pulse and one 0.01-thick edge strip on the top slab.
- **Lighting:** one directional key (warm white `#FFF1E6`, intensity 2.2, from upper-right-front), one hemisphere fill (sky `#2A2F36`, ground `#0B0C0E`, intensity 0.6). No shadows, no HDRI/environment map.
- **Camera:** perspective, FOV 32°, position `[6.2, 4.4, 7.0]`, looking at `[0, 0, 0]`; no user orbit controls.
- **Interaction:** pointer parallax ±4° rotation on Y, ±2.5° on X, damped (lerp 0.06); scroll linked: layer gap 0.9→1.6, whole group rotates 0°→12° around Y over the first viewport; resets on scroll back.
- **Placement:** canvas fills the right ~50% (desktop cols 7–12, bleeding to the viewport edge), height `min(100svh, 920px)`, with a CSS mask (linear-gradient to transparent on the left 12%) so geometry never touches the text column.
- **Annotation labels (HTML overlay, `aria-hidden`):** three mono labels `01 INTERFACE`, `02 LOGIC`, `03 DATA` with 24 px leader lines, placed at 24%, 50%, 76% of scene height at the right edge; fade out as scroll progress passes 25%.
- **Loading:** `HeroFallback` (same composition as inline SVG: three offset parallelogram slabs, hairlines, ember dot) renders from first paint. When `HeroScene` is ready, it fades in over 600 ms while the fallback fades out over 600 ms (crossfade, no layout change).
- **Fallback verification (AC-19):** test with WebGL disabled, reduced motion, `saveData`, and the 3D chunk blocked; the fallback occupies the same box (fixed aspect-ratio) so CLS stays ≤ 0.1, and the layout, labels and CTAs are identical in all four modes.
- **Fallback = permanent state** when gating fails (PRD §16.4). The fallback has a CSS-only parallax (translate ≤ 6 px on pointer, disabled for reduced motion) [D].
- **Never:** particle fields, spheres-as-globe, glow bloom, post-processing, GLB models, custom shaders.

## 17. Animation principles

- **Durations:** `fast 150 ms`, `base 300 ms`, `slow 600 ms`, `hero 900 ms`.
- **Easings:** `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`; `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)`. No bounce/elastic.
- **Reveal (`Reveal`):** opacity 0→1 + translateY 16→0, 600 ms ease-out, trigger at 20% in view, **once**, stagger children 60 ms (max 6 children, then no stagger).
- **Hero load sequence:** eyebrow (0 ms) → H1 line 1 (80) → line 2 (160) → line 3 (240) → subline (400) → CTAs (520) → scene crossfade (when ready). Total ≤ 900 ms. H1 text is present in the DOM and visible to crawlers; animation is clip/translate only (never `opacity:0` held waiting for JS: if JS fails, text is visible).
- **Hover:** colour/border changes 150 ms; arrow micro-shift 3 px; no scale-ups > 1.02; no tilt effects.
- **Reduced motion (`prefers-reduced-motion: reduce`):** remove translate/parallax/scroll-linking/idle motion/pulse; reveals become opacity-only 150 ms; `HeroScene` not loaded; menu fade only.
- **Performance:** animate only `transform` and `opacity`; no layout-property animation; `will-change` only on actively animating elements; batch via Motion `LazyMotion`.
- **Cap:** no more than 3 simultaneous animated regions in view.

## 18. Scroll interactions

- Native scroll only; no scroll-jacking, no snap, no horizontal-scroll sections, no pinned sections [E].
- Scroll-linked: (1) hero layer separation (first 100vh), (2) subtle project frame parallax (primary 0, secondary 8 px counter-direction, desktop only [D]), (3) `SiteHeader` condensation, (4) scroll progress indicator: **not used**.
- Anchor navigation (`#work`, `#contact`) uses smooth scroll (`scroll-behavior: smooth`, disabled under reduced motion) with `scroll-margin-top: 88px`.

## 19. Hover and cursor interactions

- **Native cursor everywhere** (no custom cursor, no magnetic buttons) — accessibility and predictability.
- Project panel hover/focus: border of `BrowserFrame` → `--ink-600`; `Annotation` pins reveal; text link arrow shifts. Keyboard focus triggers the same.
- Touch devices: hover effects absent; pins visible by default at 60% opacity on Project Detail only.
- Links: underline colour change (see §11). No hover-only information.

## 20. Page transitions

- Default [E]: route content fades 200 ms (opacity only), header stays mounted. Skip if reduced motion.
- [D]: View Transitions API shared-element transition for the project image (home → detail) with 500 ms ease-in-out; fall back silently if unsupported.
- No full-screen wipes, no loaders between routes.

## 21. Responsive behavior

| Aspect | Mobile < 768 | Tablet 768–1023 | Desktop 1024–1535 | Large ≥ 1536 |
|---|---|---|---|---|
| Columns | 4 | 8 | 12 | 12, container 1440 |
| Hero | Text first, `HeroFallback` below at 280 px height, CTAs full-width stacked | Text left (cols 1–5), scene right (cols 5–8) if gating passes | Full composition (§31.1) | Same, larger type caps |
| `display-xl` | ~48–60 px | ~72–90 px | up to 120 px | 120 px cap |
| Selected Work | Stacked, frame full-width, features hidden | Frame full width + 2-col text | 7/5 split | same |
| Stack | Groups as accordion-less stacked lists | 2-col | 3–4 col list | same |
| Timeline | Vertical, single col | Vertical, offset date col | Vertical with sticky date col | same |
| Header | Hamburger | Inline links, CV button | Inline | Inline |
| Section padding | 72 px | 96 px | 128 px | 160 px |

Rules: never simply scale desktop down — mobile reorders content (text before visuals, features trimmed), simplifies 3D (static), enlarges tap targets, reduces motion to opacity reveals. Images use `sizes` matching grid spans. Test widths: 320, 375, 414, 768, 1024, 1280, 1440, 1920.

## 22. Mobile-specific design

- Hero composition: eyebrow, H1 (3–4 lines max, `text-wrap: balance`), subline, two stacked full-width buttons (primary then secondary), then `HeroFallback` (decorative, 280 px) beneath.
- Header 60 px with menu button; no blur on low-end (solid).
- Project panels: tap anywhere on the frame navigates; sticky "Back to work" not needed.
- Bottom padding respects safe-area inset; no fixed bottom bars.
- Touch interactions: no hover reliance; no long-press; no gesture carousels.
- Fonts: body min 17 px; `label` min 12 px.
- Animation: opacity reveals only, once; hero sequence shortened to 400 ms total.

## 23. Accessibility (design-level)

- Contrast pairs pre-checked estimates: `--bone` on `--ink-950` ≈ 15:1; `--text-soft` ≈ 9:1; `--text-mute` ≈ 6:1; `--ember-500` on `--ink-950` ≈ 6.5:1; `--ink-950` on `--ember-500` ≈ 6.5:1. **Verification is mandatory (AC-18):** check every text/background and UI/background token pair with a contrast tool during implementation, record results in `docs/a11y-report.md`, and adjust any failing token (updating this table). Also check focus ring and hairline visibility (≥ 3:1 for UI components that convey state).
- Focus ring: 2 px `--ember-400`, offset 2 px; on accent buttons ring uses `--bone`.
- Status/pins/badges never rely on colour alone.
- 3D and decorative SVGs `aria-hidden`; labels in the scene overlay are decorative duplicates of nothing important.
- Link text descriptive ("Read the BuildHub case study", not "Read more").
- Respect `prefers-reduced-motion`, `prefers-reduced-transparency`, `forced-colors` (ensure borders remain visible; use system colours for focus).
- Lightbox/dialog patterns follow WAI-ARIA dialog guidance.

## 24. Loading states

- No full-screen preloader [E].
- Hero: text immediate; `HeroFallback` immediate; `HeroScene` crossfade on ready.
- Images: fixed `aspect-ratio` boxes with `--ink-850` background (no shimmer); `next/image` blur placeholder only if generated at build.
- Form submitting: button label "Sending…", spinner 16 px (CSS), button disabled, `aria-busy`.
- Route transitions: none visible beyond 200 ms fade.

## 25. Error states

- 3D failure: silent fallback (no message).
- Image failure: frame shows `--ink-850` block with mono text "Image unavailable" (alt text remains).
- Form errors: see §26.
- 404: `display-l` "Page not found", one sentence, buttons "Back home" and "See my work".
- Content guard failure: build-time only; never rendered to visitors.

## 26. Contact form (`ContactForm`, `FormStatus`)

Placement: Home › `Contact`, desktop layout cols 1–5 headline/support text, cols 6–12 form card; mobile stacked. Headline (draft): "Let's talk." + one sentence: "If you have a project or an academic opportunity in mind, send me a message." `[NEEDS USER CONFIRMATION: Q-03 for exact wording]`.

| Field | Type | Rules |
|---|---|---|
| Name | text, `autocomplete="name"` | required, 2–80 chars |
| Email | email, `autocomplete="email"` | required, valid email, ≤ 254 |
| Reason | select: "Project enquiry", "Teaching or academic", "Something else" `[NEEDS USER CONFIRMATION: Q-03]` | required |
| Message | textarea, 5 rows, autosize [D] | required, 20–2000 chars, live counter at ≥ 1800 |
| Honeypot | hidden text input (`tabindex="-1"`, `aria-hidden`, off-screen) | must be empty |
| Turnstile | [D] invisible/managed | token required if enabled |

Styling: labels above inputs (label style), inputs height 48, bg `--ink-800`, border 1 px `--ink-600`, radius 4, text `--bone`; focus border `--ember-500` + ring; error border `--danger`; helper text `small` `--text-mute`.
Validation: on blur (after first touch) + on submit; inline messages below fields (`--danger`, with icon, `aria-describedby`); on failed submit focus moves to first invalid field and a `FormStatus` summary announces count.
States: `idle` · `submitting` · `success` ("Thank you — your message has been sent. I'll reply to the email you provided." card replaces form, focus moves to heading) · `error-network` / `error-server` ("Something went wrong. Please try again, or email me directly at <confirmed email>." with mailto link; fields preserved) · `rate-limited` ("Too many messages — please try again later.") · `spam` (looks like success, silently dropped).
Privacy line under button: "Your details are used only to reply to you." + link to `/privacy`.
Fallback: if `/api/contact` unavailable/unconfigured, form is replaced by the confirmed email as a `mailto:` link (build-time flag).

## 27. Footer (`Footer`)

`--ink-900`, top hairline. Three columns desktop / stacked mobile:
1. Wordmark + one-line descriptor ("Web developer and CSE lecturer in Chattogram" `[NEEDS USER CONFIRMATION: Q-04]`).
2. Navigation: Work · About · Privacy · CV.
3. Contact/social: only confirmed public items `[NEEDS USER CONFIRMATION: Q-13]` (LinkedIn, GitHub, email).
Bottom row: `© 2026 Monifa Sultana` left; "Back to top" `TextLink` right. No "Made with ♥", no ratings.

## 28. Image treatment

- Screenshots only (owner-supplied). No stock imagery, no AI-generated photos or fake mockup content.
- Radius 8 inside `BrowserFrame`; 1 px `--ink-700` border; no filters, no duotone, no grayscale hover.
- Aspect ratios: primary 16:10; gallery 16:10 or intrinsic; thumbnails 4:3.
- Formats: AVIF/WebP via `next/image`; max source width 2400; `sizes` per grid span.
- Alt text: describe what the screen shows, not "screenshot of".
- Portrait [D, only if Q-08 = yes]: About page only by default; 4:5 crop, `object-fit: cover`, 1 px hairline border, radius 8, no glow/halo/background gradient, `loading="lazy"`; caption optional. Layout works identically without it.
- Sensitive: never edit/retouch screenshots to hide bugs; blur real personal data.

## 29. Component specifications

| Component | Props (key) | Behaviour |
|---|---|---|
| `SiteHeader` | `links[]`, `cvHref` | §10 |
| `MobileMenu` | `links[]`, `socials[]` | §10 |
| `Hero` | `eyebrow`, `headline` (with accent token), `subline`, `primaryCta`, `secondaryCta` | §31.1 |
| `HeroScene` / `HeroFallback` | none | §16, loaded via `HeroSceneLoader` (client, dynamic, `ssr:false`) |
| `SectionHeader` | `index`, `label`, `title`, `accentWord?` | Mono `0N — Label` + H2 |
| `ProjectFeature` | `project`, `index` | §13.1 |
| `BrowserFrame` | `src`, `alt`, `urlLabel?`, `pins?` | §13.2 |
| `Annotation` | `n`, `x%`, `y%`, `label?` | 20 px circle, 1 px `--ember-500` border, mono number `--ember-500`, bg `--ink-950`; hover/focus shows label tooltip (mono) |
| `FactSheet` | `project` | §14.2 |
| `StatusBadge` | `status` | §12 |
| `FeatureList` | `features[]`, `showStatus?` | Numbered rows; planned items dashed |
| `StackGroup` | `title`, `items[]` | Title (label), inline list separated by hairline dots; no icons |
| `EvidenceChip` | `text`, `projectSlug?` | `Tag` with trailing project link |
| `Timeline` | `entries[]` | §31.3 |
| `CredentialList` | `items[]` | Rows: title, issuer, year (if known) |
| `DirectionPanel` | `content` | §15.1 |
| `AutomationFlow` | `steps[]` | §15.2 |
| `ContactForm` / `FormStatus` | none | §26 |
| `Footer` | none | §27 |
| `Button` / `TextLink` / `Tag` | variants | §11–12 |
| `Reveal` | `delay?`, `as?` | §17 |

Naming: PascalCase components under `components/{ui,layout,sections,project,automation,three}`; tokens in `styles/tokens.css`.

## 30. Performance-aware design decisions

- Typography and layout do the visual work (cheap) instead of imagery/effects.
- One 3D scene, procedural, no downloads; paused off-screen; DPR clamp; auto-degrade.
- No blur filters except header (disabled on low-perf); no large box-shadows except `BrowserFrame` (single).
- Fixed aspect-ratio media boxes to prevent CLS.
- Only two font families above the fold (Instrument Serif + Geist); Geist Mono loaded for labels, subsetted, `display: swap`.
- No icon library (inline SVG for ~8 icons).
- Reveal animations once; observers disconnected after trigger.
- `content-visibility: auto` on below-fold sections [D].

## 31. Page-by-page visual specifications

### 31.1 Home

**Hero** (min-height `max(640px, 100svh)`, bottom padding 64):
- Layout desktop: grid 12. Text cols 1–7, vertically centred, offset to top ≈ 22vh. Scene occupies cols 7–12 absolute, right-bleed, behind nothing and masked at the left edge.
- Content stack (gap 24): eyebrow (`label`, `--text-mute`) → H1 `display-xl`: "Web applications, **built carefully** — and explained clearly." (accent on "built carefully" italic ember) → subline (`body-l`, `--text-soft`, max 52ch) → CTA row (gap 16).
- Bottom strip (hairline above, 24 px padding): left "Currently — IT Lecturer at AIMS Academy" (verified F-04; mono) · centre "MSc CSE, IIUC (pursuing)" · right "Scroll" glyph (↓, hides on scroll). On mobile: one line only ("Currently — IT Lecturer, AIMS Academy").
- No stats, no icon row, no portrait.

**01 Intro** (`--ink-950`): H2 (serif, ≤ 3 lines): "I build the whole application — and I teach the people who will build the next one." *(draft; remove "whole application" if Q-02 says otherwise)*. Right column three short blocks with mono labels: **Build** (databases, admin back-offices, public sites), **Teach** (university and academy courses since 2022), **Explore** (AI & automation, as a direction). Each ≤ 25 words, no icons.

**02 Selected Work** (`#work`): `SectionHeader` + count label "3 projects" (only real count). Stack of `ProjectFeature`s (§13.1). Closing line: "More projects will be added as they're documented." (shown while < 6 projects).

**03 Stack** (`#stack`, `--ink-900`): two sub-blocks.
- *Practical project experience* (first, because projects lead) — one row per project: project name (`TextLink`) → `EvidenceChip`s ("Used in BuildHub"). Intro line (`small`, mute): "Technologies I have used in the projects above." Rows only for published projects; no levels, bars or years.
- *Broader proficiency* — `StackGroup`s in a 4-column grid from the CV list: Languages · Frameworks & tools · Data & BI · Design · Professional. Plain text separated by hairline dots. Intro line: "From my studies and teaching." No icons.
- A technology appears in only one tier (PRD §17.5). React, Node.js and the portfolio's own stack never appear (D-04).

**04 Teaching & Academic** (`#teaching`): left H2 "Teaching is how I stay precise." *(draft; owner to approve)*; right: compact list of 4 roles (title, organization, dates; no bullets), then education summary (M.Sc pursuing, B.Sc 2023) and `CredentialList` (3 certs). Link "Full timeline →" to `/about`. This section is visually quieter than Selected Work (no frames, text only).

**05 Direction** (`--ink-900`): `DirectionPanel` (§15.1).

**06 Contact** (`#contact`): top hairline; large serif line "Let's talk." (`display-l`) left; `ContactForm` right (§26). Below on desktop: confirmed contact links row.

### 31.2 About
- Header: `display-l` "About" + intro (`body-l`).
- Two-column: left sticky mono nav (Summary · Timeline · Education · Research · Credentials · Skills); right content.
- **Summary:** 150–220 words, plain, first-person `[NEEDS USER CONFIRMATION]`; optional portrait (4:5) in left column at ≥ 1024 below nav [D].
- **Timeline** (§31.3) — Teaching & Academic Roles.
- **Education:** four rows: institution, degree/level, dates, result (CGPA/GPA as in CV).
- **Research:** dissertation title (F-11), research interests as `Tag`s, supervisor line only if Q-12.
- **Credentials:** `CredentialList`; coding platforms/extracurricular only if Q-15.
- **Skills with evidence:** same two tiers as Home (*Practical project experience*, *Broader proficiency*), with evidence labels ("Used in project", "CV skills", "Taught") in `small`.
- **CV block:** card with "Download my CV (PDF)" primary `Button`, file size and "Updated <Month Year>". Serves the **public CV edition** (no referees' contact details; PRD D-06). Hidden in production until the owner supplies the file.

### 31.3 `Timeline`
Vertical line 1 px `--ink-700`. Desktop: left sticky date column (cols 1–3, mono, e.g. "May 2026 — Present"), right entry (cols 4–12): role (`h3`), organization · location (`small`, mute), 2 bullets from CV (hairline separated, `body`). Dot on the line: 9 px; current role = accent dot, others `--ink-600` hollow. Entries in this order: AIMS Academy (IT Lecturer), GMIT Academy (Instructor), IIUC (Adjunct Lecturer), IIUC (Teaching Assistant). Category chip above timeline: "Teaching & academic roles". Project work is **not** in this timeline (PRD §10). Mobile: date above role, line on left (16 px gutter).

### 31.4 Project Detail
See §14. Additional: sticky mini-header showing project title appears after hero media scrolls out (desktop, height 48, `--ink-900`, hairline) [D]; back link "← All work" always in breadcrumb.

### 31.5 Privacy
Single column, max 68ch, `h2` headings, `body`, last-updated date mono. Contents per PRD §12.4.

### 31.6 Not Found
Centred; `display-l` "Page not found"; sentence; two buttons.

---

## Consistency checklist (for the implementing agent)
- Pages used: Home, About, Project Detail, Privacy, Not Found (+ deferred Work Index, Automation).
- Sections: Hero, Intro, Selected Work, Stack, Teaching & Academic, Direction, Contact (same order and anchors as PRD §12.1; nav uses `#work`, `/about`, `#contact`).
- No feature here beyond PRD: no custom cursor, no light theme ([O]), no CMS, no testimonials, no stats.
- All `[NEEDS USER CONFIRMATION]` copy must be resolved or removed before production build (PRD §17.4).
