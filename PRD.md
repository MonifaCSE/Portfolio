# PRD.md — Monifa Sultana Portfolio

> **Status:** Draft v1.0 — implementation-ready, content-flexible.
> **Companion document:** `DESIGN.md` (same product, same names, same priority labels).
> **Audience:** An AI coding agent (Claude Code / Antigravity) and the site owner.
> **Rule zero:** Never invent facts. Anything not in the Verified Facts table (§30) is either an assumption (labelled `A-xx`) or `[NEEDS USER CONFIRMATION]`. The build must be able to *refuse to publish* unconfirmed content (see §17.4).

---

## Conventions used in both documents

| Label | Meaning |
|---|---|
| **[E]** | Essential — required for launch |
| **[D]** | Desirable — ship if time allows, no launch blocker |
| **[O]** | Optional experiment — only after all [E] and [D] are done |
| `[NEEDS USER CONFIRMATION]` | Content/decision missing; use a placeholder, never guess |
| `F-xx` / `A-xx` / `Q-xx` | Verified Fact / Assumption / Open Question IDs (see §30, §29) |

**Canonical names** (use exactly these in code, copy, and docs):
Pages — `Home`, `About`, `Project Detail`, `Privacy`, `Not Found`. Deferred pages — `Work Index`, `Automation`.
Home sections — `Hero`, `Intro`, `Selected Work`, `Stack`, `Teaching & Academic`, `Direction` (AI & Automation), `Contact`.
Components — `SiteHeader`, `MobileMenu`, `Hero`, `EcosystemMap`, `EcosystemNode`, `EcosystemChip`, `HeroScene` [O], `HeroFallback`, `SectionHeader`, `ProjectFeature`, `BrowserFrame`, `Annotation`, `FactSheet`, `StatusBadge`, `FeatureList`, `StackGroup`, `EvidenceChip`, `Timeline`, `CredentialList`, `DirectionPanel`, `AutomationFlow`, `ContactForm`, `FormStatus`, `Footer`, `Button`, `TextLink`, `Tag`, `Reveal`.

---

## 1. Product overview

A personal portfolio website for **Monifa Sultana** (F-01), a web developer who is also a university/academy-level computer science lecturer. The site presents real, documented web application projects as editorial case studies, positions teaching and academic work as a differentiator, and reserves a small, honest space for AI Automation as a future direction.

It is a **content-driven, statically generated site** with one selective 3D element (the hero), file-based content, and one small server endpoint (contact form).

## 2. Product vision

A portfolio that feels like a custom-designed product, and reads like a developer who explains things well: clear structure, annotated project breakdowns, restrained visuals, honest claims. The visitor should leave thinking: *"She builds real database-driven web applications, she understands them well enough to teach them, and she is credible."*

## 3. Business and professional goals

| # | Goal | Priority |
|---|---|---|
| G1 | Present web development as the primary professional identity, backed by real projects | [E] |
| G2 | Make teaching/academic background a visible differentiator without overshadowing projects | [E] |
| G3 | Give recruiters and academic hiring panels a fast route to CV, experience, education | [E] |
| G4 | Give potential clients/collaborators a clear route to contact | [E] |
| G5 | Create a content structure that grows (new projects, automation case studies, blog, experience) without redesign | [E] |
| G6 | Demonstrate frontend craft (3D hero, motion, typography) without hurting performance or accessibility | [E] |
| G7 | Be discoverable by name search and project/skill keywords | [D] |

## 4. Target audiences

1. **Recruiters / hiring managers** (web dev roles, junior-to-mid) — need: stack, projects, dates, CV, within 60 seconds.
2. **Academic employers / institutions** (lecturer, instructor, research roles) — need: teaching history, education, research interests, credentials.
3. **Small business owners / clients** — need: proof that she ships working business applications (e-commerce, institute site, agency site), and how to start a conversation. *Only relevant if freelance/client work is intended `[NEEDS USER CONFIRMATION: Q-03]`.*
4. **Technical collaborators / peers / students** — need: project depth, stack decisions, GitHub links.

Primary: 1 and 2. Secondary: 3 and 4. The site must not try to answer every audience on the first screen.

## 5. User personas

| Persona | Context | Goal | Success signal |
|---|---|---|---|
| **Nusrat — Tech recruiter** | Screens 30 profiles/day on a phone | Judge stack + evidence quickly | Opens ≥1 project, downloads CV |
| **Dr. Rahman — Academic panel member** | Reviewing a lecturer application on desktop | Verify teaching roles, degrees, research interests | Visits About, reads timeline, downloads CV |
| **Imran — Small business owner** | Looking for someone to build an online shop | See comparable work, trust her, reach out | Opens BuildHub case study, submits Contact form |
| **Tasnim — Junior developer/peer** | Curious about implementation | See stack, repos, structure | Clicks GitHub link |

*(Personas are illustrative design aids, not real people. A-01)*

## 6. Positioning strategy

**Primary:** Web Developer. **Differentiator:** teaches software development (since Jan 2022, F-04…F-07) and is pursuing an MSc in CSE (F-09). **Secondary/future:** AI Automation (interest and direction only).

**Honest-claim rules (binding):**
1. Lead with *projects*, support with *teaching*. No section order may put teaching above Selected Work on Home.
2. Do not use: years-of-experience counters, "projects completed" counters, client counts, satisfaction percentages, star ratings, testimonials, percentage skill bars.
3. Project descriptions use only CV-stated or user-supplied facts. Role, ownership and context (personal / client / academic / internal) are explicit fields, never implied.
4. AI Automation: the site may say it is an area of interest and direction. It must not state or imply delivered automation projects, n8n workflows, agents, chatbots or voice agents *built by the owner*. The Sevix Global CV entry describes an agency site that **presents** AI services (F-13); the site must say so precisely ("a business agency website presenting AI automation, chatbot…services"), never "I build AI chatbots".
5. AI/ML credibility comes from verified evidence only: instructor role in AI & ML (F-05), dissertation (F-11), research interests (F-12), certification (F-10).
6. The words "full-stack", "expert", "senior", "freelance", "available for hire" are **not used** unless confirmed `[NEEDS USER CONFIRMATION: Q-02, Q-03]`.

**Recommended hero statement (default copy, editable):**
- H1: *Web applications, built carefully — and explained clearly.*
- Subline: *I build database-driven web applications — e-commerce, training-institute and agency platforms — and teach software development at university and academy level.*
- Alternates (owner to pick): "I build web applications, and I teach how they work." / "Developer by practice. Teacher by habit."

**Eyebrow:** `WEB DEVELOPER · IT LECTURER · CHATTOGRAM [NEEDS USER CONFIRMATION: Q-04 location spelling]`

## 7. Value proposition

*"Working web applications from someone who understands them well enough to teach them."* Supported by: three documented 2026 projects with admin back-offices and database-driven content (F-14…F-16), four teaching/academic roles from 2022 (F-04…F-07), and a CSE degree trajectory (F-08, F-09).

## 8. Design reference analysis

Three Pinterest references were supplied. They are **static concept mockups with placeholder content**; live behaviour (animation, cursor, scroll, 3D) cannot be assessed from screenshots, and no 3D is visible in any of them. Original sites were not identified or inspected.

| Reference | Strengths worth adapting | Weaknesses to avoid |
|---|---|---|
| **R1 "Dev.Arjun"** (dark + gold, bento-style panels) | Single accent used on one headline word; horizontal experience timeline; clear closing contact block | Everything boxed in dense panels (bento overload); invented stats (5+/30+/20+); testimonials with stars; service cards that restate generic skills |
| **R2 "Florian Weber"** (dark + blue, German) | Strongest: direct value proposition, generous negative space, one restrained accent, services strip tied to benefits, honest tech line | Portrait-dependent hero; "measurable results" claim without evidence |
| **R3 "CodeCraft"** (dark + violet) | Clean type hierarchy; code-snippet card as brand motif; clear "Technologies I work with" row | Percentage skill bars; stats row; "100% client satisfaction"; generic headline; stock-portrait composition |

**Common patterns:** dark UI, left-headline/right-portrait hero, one accent colour, tech-icon row, stats, skill bars, three project cards, testimonials, contact block.
**Useful contrast:** R2 is sparse and credible; R1/R3 are dense and template-like.
**Strongest ideas:** single-word accent, honest tech line, timeline, negative space, a recurring brand motif.
**Original opportunities:** (a) a *teacher's annotation* motif — margin notes and numbered callouts explaining how projects work; (b) an *exploded system diagram* as the 3D hero; (c) typographic (serif + sans + mono) identity instead of icon grids.
**Technical risks:** heavy hero 3D on mid-range mobiles; glow/blur effects costing paint time; scroll-jacking harming accessibility; icon walls adding weight.
**Adapt, don't copy:** accent-word idea, timeline, honest tech line. Not reproduced: palettes, layouts, portraits, copy, logos, stats.

## 9. Sitemap

```
/                      Home          [E]  (single long page, anchored sections)
/about                 About         [E]  (full timeline, education, credentials, CV)
/projects/[slug]       Project Detail[E]  (one per published project)
/privacy               Privacy       [E]  (short; contact form + analytics disclosure)
/404                   Not Found     [E]
/api/contact           Contact endpoint [E] (server route, no UI)
/sitemap.xml, /robots.txt, /opengraph-image   [E]
/cv.pdf  (alias of /cv/<file>.pdf)   [E]

Deferred (create only when trigger is met):
/projects              Work Index    [D]  trigger: ≥ 7 published projects
/automation            Automation    [D]  trigger: ≥ 1 published automation case study
/writing, /writing/[slug]  Blog      [O]  trigger: owner decides to write
```

**Primary navigation (SiteHeader):** `Work` (`/#work`) · `About` (`/about`) · `Contact` (`/#contact`) · `Download CV` (button/secondary). Four items maximum.
**Footer navigation:** Work · About · Privacy · CV · confirmed social links.

## 10. Information architecture

- **Home** answers: who, what, proof, how to proceed. It carries *summaries* and links to depth.
- **About** carries depth: full experience timeline (grouped by type), education, credentials, research, technical skills with evidence, personal summary, optional portrait.
- **Project Detail** carries depth per project via one content model (§17).
- **Direction** (AI & Automation) lives as a Home section until an `/automation` page is justified.
- Experience types are **never mixed** in one undifferentiated list: `Teaching & Academic Roles`, `Projects (by type)`, `Education`, `Credentials`. Projects never appear in the employment timeline.

## 11. User journeys

| ID | Journey | Path | Done when |
|---|---|---|---|
| J1 | Recruiter fast screen | Home Hero → Selected Work → one Project Detail → Download CV | CV download event or project open |
| J2 | Academic verification | Home → About → Timeline/Education → Download CV | About page viewed ≥ 30 s or CV downloaded |
| J3 | Client enquiry | Home → Selected Work (BuildHub/Sevix) → Project Detail → Contact form | Form submitted |
| J4 | Peer/technical | Home → Project Detail → GitHub link | Outbound GitHub click |
| J5 | Direct link visitor | Project Detail (from CV/LinkedIn) → Home or About via header | Navigates to ≥ 1 other page |

## 12. Page-by-page requirements

### 12.1 Home `/` [E]
Section order is fixed:

| # | Section | Purpose | Content source | Priority |
|---|---|---|---|---|
| 1 | **Hero** | Identity + CTAs + 3D | `content/site.ts` | [E] |
| 2 | **Intro** | Two-sentence positioning + three "what I do" points (Build · Teach · Explore) | `content/site.ts` | [E] |
| 3 | **Selected Work** | Up to 3 `ProjectFeature` panels (BuildHub, Starfair, Sevix Global) | `content/projects/*` where `featured: true`, `publish: true` | [E] |
| 4 | **Stack** | Two tiers: *Practical project experience* (project-backed) and *Broader proficiency* (CV skills) | `content/skills.ts` + project data | [E] |
| 5 | **Teaching & Academic** | Roles summary (4 entries), degrees, credentials, link to About | `content/experience.ts`, `education.ts`, `credentials.ts` | [E] |
| 6 | **Direction** | AI & Automation: honest "where I'm heading" panel | `content/direction.ts` | [E] |
| 7 | **Contact** | Closing CTA + `ContactForm` | `content/site.ts` | [E] |

Requirements: H1 appears exactly once; hero text renders server-side with no JS dependency; each section has an `id` anchor (`work`, `stack`, `teaching`, `direction`, `contact`); `Selected Work` renders only projects with `publish: true`.

### 12.2 About `/about` [E]
Sections: **Summary** (150–220 words, written from CV facts; draft supplied in `content/profile.ts` with `[NEEDS USER CONFIRMATION]` flag until approved) · **Experience Timeline** (`Teaching & Academic Roles`, newest first) · **Education** (4 entries from CV) · **Research** (dissertation title, research interests; supervisor name shown only if confirmed Q-12) · **Credentials** (3 certifications, coding platforms [D], extracurricular [D]) · **Technical skills with evidence** · **CV download** · **Portrait** [D, only if Q-08 = yes].

### 12.3 Project Detail `/projects/[slug]` [E]
Template-driven (see §14, §17). Sections render **only if data exists**. Always: header, `FactSheet`, overview. Footer of page: previous/next project, back to Selected Work, Contact CTA.

### 12.4 Privacy `/privacy` [E]
Plain-language: what the contact form collects (name, email, message), where it is sent, analytics approach, retention, contact route. Text drafted from implemented behaviour; owner approves `[NEEDS USER CONFIRMATION]`.

### 12.5 Not Found [E]
Message, link to Home, link to Selected Work. Same layout shell.

### 12.6 Work Index [D, deferred] / Automation [D, deferred]
Defined by triggers in §9; use existing `ProjectFeature` row variant and `AutomationFlow`.

## 13. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Site is statically generated except `/api/contact` | [E] |
| FR-02 | Projects, experience, education, credentials, skills, direction content live in files under `/content`, validated by Zod schemas at build time | [E] |
| FR-03 | Adding a project requires only adding one MDX file + images (no code change) | [E] |
| FR-04 | `publish: false` or any unresolved `NEEDS_CONFIRMATION` token blocks production rendering/build (§17.4) | [E] |
| FR-05 | `SiteHeader` is sticky, condenses on scroll, and exposes a skip-to-content link | [E] |
| FR-06 | `MobileMenu` is a full-screen dialog with focus trap, `Esc` to close, scroll lock | [E] |
| FR-07 | `HeroScene` loads lazily, only when capability checks pass (§16.4), else `HeroFallback` stays | [E] |
| FR-08 | `ContactForm` validates client + server, has honeypot, rate limit, accessible states | [E] |
| FR-09 | CV download link serves a PDF from `/public/cv/` | [E] |
| FR-10 | Outbound links to live sites/GitHub open in a new tab with `rel="noopener noreferrer"` and are labelled | [E] |
| FR-11 | Project Detail pages have previous/next navigation based on `order` | [D] |
| FR-12 | Shared-element transition from home `ProjectFeature` image to Project Detail header (View Transitions API, graceful fallback) | [D] |
| FR-13 | Light theme | [O] |
| FR-14 | Bangla language version | [O] (out of v1 scope; do not block i18n-ability — keep all copy in content files) |
| FR-15 | Custom cursor | **Not included.** Native cursor only (see DESIGN §19) |

## 14. Project showcase requirements

**Presentation by project (initial set, subject to verification):**

| Slug | Title | Presentation | Why |
|---|---|---|---|
| `buildhub` | BuildHub — E-commerce Management System | `BrowserFrame` storefront + admin view; **feature map** (catalog, inventory, promotions, orders, returns) with `Annotation` callouts | Rich, structured feature set stated in CV |
| `starfair-training-institute` | Starfair — Training Institute Management Website | `BrowserFrame` public site + admin panel; highlight **digital magazine PDF flipbook** | Distinctive, visual feature |
| `sevix-global` | Sevix Global — AI Digital Business Agency Platform | `BrowserFrame` marketing site; **content/service modules** breakdown; production-readiness list | Agency site; AI content is *the agency's offerings*, say so |
| `covid-vaccination-system` | COVID-19 Cases and Vaccination Management System | Academic-project layout (smaller, no `featured`) | **Not in CV; unpublished until Q-06 answered** |
| `techy-octopus-os` | Techy Octopus OS | Split "Implemented / Planned" `FeatureList` | **Not in CV; unpublished until Q-07 answered** |
| `othm-citation-checker` | OTHM Assignment Reference and Citation Checker | Concept layout: status badge `Concept`, requirements-only | **Not in CV; unpublished until Q-07 answered; never shown as built unless confirmed** |

**Rules:**
- PR-01 [E] Every project shows a `StatusBadge` from the enum `live | built | in-progress | academic | concept`, plus a `Type` from `personal | client | academic | internal | agency-demo`.
- PR-02 [E] `FactSheet` shows: Year, Type, My role (exact wording from owner), Status, Stack, Links. A missing value shows nothing (no "N/A").
- PR-03 [E] No outcomes, metrics, user counts, revenue, or client names unless provided in `outcomes[]` with `verified: true`.
- PR-04 [E] "My contributions" list only items the owner confirmed. CV bullets use "Developed/Implemented" language, which is acceptable as the CV is the owner's own statement, but **ownership scope (solo vs team)** is flagged `[NEEDS USER CONFIRMATION]` per project.
- PR-05 [E] Screenshots: placeholders (`ScreenshotPlaceholder` with dashed frame and text "Screenshot pending") appear **only in development**; production hides projects lacking ≥ 1 screenshot.
- PR-06 [D] Optional video demo per project (self-hosted MP4/WebM ≤ 8 MB or none; no autoplay with sound).
- PR-07 [D] Technical diagram per project (SVG authored by owner/agent from confirmed architecture only).
- PR-08 [E] Live URL and GitHub URL fields are optional and rendered only if present.
- PR-09 [E] Every project carries a completion state that is shown honestly: `live`/`built` (completed), `in-progress` (ongoing development), `academic` (academic project), `concept` (conceptual, not built). A project whose state is unknown is **not publishable**. `Implemented` vs `Planned` is tracked per feature for in-progress projects.
- PR-10 [E] Sevix Global: AI-related offerings appear only under a heading such as "Services the agency presents" and never under "My contributions" unless evidenced.

**Project facts available from the CV (all "CV-stated", ownership scope unconfirmed):**

*BuildHub* (2026; Laravel, PHP, MySQL, JavaScript, HTML, CSS, Git/GitHub): single-vendor e-commerce platform for building materials, power tools, hand tools, machinery, electrical and plumbing products; product, category, brand, inventory, wishlist, cart, coupon, discount, campaign, order, review and return management; role-based administration (products, customers, orders, stock, promotions, operations); online payment gateway support (**which gateway: Q-05**); backend structured for future API/third-party integrations.

*Starfair* (2026; Core PHP 8.x, MySQL, HTML, CSS, JavaScript, Bootstrap, Git): dynamic training institute site for courses, programs, institute info, student registration; dynamic course management (Modeling, Acting, Dance, Photography, Pageant, Makeup, Fine Arts, Communication, Grooming, Poetry, Hosting); admin panel with CRUD for courses, content, images, registrations, publication status, display ordering; course-specific registration; digital magazine with PDF flipbook; reusable PHP/MySQL components.

*Sevix Global* (2026; **stack per owner decision D-02: Laravel, Filament, Livewire, Tailwind CSS, Alpine.js, Vite (+ PHP, MySQL/MariaDB per CV tools line); the CV heading "Core PHP, MySQL" is treated as an error. Verify against the actual project files before publishing**): business agency platform presenting AI automation, AI chatbots, AI voice agents, digital marketing, SEO, e-commerce, web development, branding and business services; dynamic service, pricing, portfolio, blog, contact and content management; administrative interface; prepared for production deployment (routing, DB structure, security, SEO, sitemap, performance). **Deployment status and ownership/client context stay `[NEEDS USER CONFIRMATION: Q-05]`.** The AI automation, chatbot and voice-agent items are services the agency site *presents*; they must never be written as solutions the owner implemented (D-02) unless evidence is supplied.

## 15. AI Automation section requirements (`Direction`)

**Purpose:** An honest, modest, growable panel. Not a services pitch.

- AD-01 [E] Heading framed as direction: e.g. "Where I'm heading: AI & automation". Copy states it is an area of interest and learning, and that case studies will be added when work is documented.
- AD-02 [E] Content blocks, each backed by evidence or labelled interest:
  1. **What I can evidence today** — AI & ML instructor role (F-05); Data Science using Python certification (F-10); dissertation on hybrid deep learning (F-11); research interests (F-12).
  2. **Processes I'm interested in automating** — owner-supplied list `[NEEDS USER CONFIRMATION: Q-09]`; placeholder copy is not shipped.
  3. **Tools I've genuinely explored** — owner-supplied `[NEEDS USER CONFIRMATION: Q-09]`; **omit block if empty**.
  4. **Case studies** — "None published yet" is acceptable honest copy; a link appears only when ≥ 1 exists.
- AD-03 [E] Forbidden wording: "AI automation expert", "I build AI agents/chatbots/voice agents" (unless confirmed), "workflows delivered", any invented tool names.
- AD-04 [D] `AutomationFlow` component implemented and documented, **rendered only for published automation case studies**. A dev-only route `/dev/automation-flow` shows the template with clearly labelled dummy data; route is excluded from production build and sitemap.
- AD-05 [E] Automation case-study content model (§17.3) supports: business problem, manual process, trigger, steps, AI/rules processing, integrations, human approval, output, verified results.
- AD-06 [E] Adding an automation case study = adding one MDX file in `content/automation/` and (when the first exists) enabling the `/automation` route via the `FEATURES.automationPage` flag. No redesign.

## 16. 3D and interaction requirements

### 16.1 Concept decision
| Concept | Fit | Complexity | Risk | Verdict |
|---|---|---|---|---|
| **A. Exploded Stack** — three offset layers (Interface / Logic / Data) joined by thin vertical connections with one accent "request" travelling through | Matches web-dev + teaching (exploded diagram = explanatory) | Low–medium | Low | **Selected** |
| B. Node graph / constellation | Generic, associated with "AI landing pages" | Medium | Medium (looks templated) | Rejected |
| C. Extruded 3D name/typography | Strong identity | Medium | Legibility/duplication with H1 | Rejected |
| D. Wireframe laptop/device | Literal | Medium | Cliché | Rejected |

### 16.2 Requirements
- 3D-01 [E] `HeroScene` built with React Three Fiber (+ minimal `drei` imports), **procedural geometry only** (no GLB/texture/HDR downloads).
- 3D-02 [E] Scene must never cover or reduce legibility of the H1 or CTAs; text column and scene column are separate in layout.
- 3D-03 [E] Interactions: pointer parallax (desktop pointers only), scroll-linked layer separation across the first viewport, accent "request" pulse loop.
- 3D-04 [E] Rendering pauses (`frameloop="never"` or demand) when hero is < 10% visible or tab is hidden.
- 3D-05 [E] `HeroFallback` (inline SVG, same composition) is the default and the permanent state when 3D is unavailable.
- 3D-06 [D] Gentle idle motion (≤ 0.15 rad/s); disabled for reduced motion.
- 3D-07 [O] 3D on mobile for high-capability devices only (see §16.4); default mobile = fallback.
- 3D-08 [E] No other 3D scenes anywhere else in v1. Case-study visuals use 2D frames and SVG.

### 16.3 Animation system
- **Motion** (`motion` / Framer Motion, `LazyMotion` + `domAnimation`) for UI reveals, menu, route fade. [E]
- **R3F `useFrame`** for 3D. [E]
- **CSS** for hover, focus, marquee-free micro-interactions. [E]
- GSAP/ScrollTrigger, Lenis (smooth scroll), Lottie, Spline: **not used** (cost/accessibility/benefit).
- Scroll-linking via Motion `useScroll`. No scroll-jacking; native scroll only.

### 16.4 Capability gating for `HeroScene`
Load 3D only if **all** pass: WebGL2 available · `prefers-reduced-motion: no-preference` · `navigator.connection.saveData !== true` · viewport ≥ 768 px (unless 3D-07 enabled) · `hardwareConcurrency ≥ 4` (if available) · page idle (`requestIdleCallback`, 2 s timeout fallback). Any failure, or a runtime context-loss/error, → remain on `HeroFallback`, no error UI.

## 17. Content model

### 17.1 File layout
```
/content
  site.ts            name, title, tagline, eyebrow, nav, socials (confirmed only), contact config
  profile.ts         About summary, optional portrait ref
  experience.ts      Teaching & academic roles
  education.ts       Degrees/schools
  credentials.ts     certifications, coding platforms, extracurricular
  skills.ts          CV-verified skills (+ evidence tags)
  direction.ts       AI & Automation panel content
  projects/<slug>.mdx
  automation/<slug>.mdx   (empty until first case study)
/public/cv/          CV PDF(s)
/public/projects/<slug>/ images, optional video
```

### 17.2 Project schema (frontmatter, validated by Zod)
```ts
{
  slug: string,                      // kebab-case, unique
  title: string,
  tagline: string,                   // ≤ 140 chars
  category: string,                  // e.g. "E-commerce", "Institute website"
  year: number,
  type: 'personal'|'client'|'academic'|'internal'|'agency-demo',
  status: 'live'|'built'|'in-progress'|'academic'|'concept',
  role: string,                      // owner's exact wording
  teamScope?: 'solo'|'team',         // omit if unknown
  featured: boolean,
  order: number,
  publish: boolean,                  // false = hidden in production
  accent?: string,                   // optional per-project tint (token name, not raw hex)
  overview: string,
  problem?: string,
  objectives?: string[],
  contributions?: string[],
  features?: { title: string, body?: string, status?: 'implemented'|'planned' }[],
  stack: { name: string, area: 'frontend'|'backend'|'database'|'tooling' }[],
  implementation?: string[],         // MDX body may also carry this
  architecture?: { diagram?: string, notes?: string },
  challenges?: string[],
  outcomes?: { text: string, verified: true }[],   // verified:true is mandatory literal
  screenshots: { src: string, alt: string, caption?: string, kind: 'public'|'admin'|'mobile'|'other', width: number, height: number }[],
  video?: { src: string, poster: string },
  links?: { live?: string, repo?: string },
  verification: { stack: boolean, role: boolean, features: boolean, links: boolean }  // all true required to publish
}
```

### 17.3 Automation case study schema (future)
```ts
{ slug, title, status: 'case-study'|'experiment'|'concept', year,
  businessProblem, manualProcess, trigger,
  steps: { label: string, kind: 'trigger'|'action'|'ai'|'rule'|'approval'|'output', note?: string }[],
  aiOrRules?: string, integrations?: string[], humanApproval?: string,
  output: string, verifiedResults?: { text: string, verified: true }[],
  publish: boolean }
```

### 17.4 Publication guard
`scripts/check-content.ts` runs on `pnpm build` in production (`NODE_ENV=production`) and **fails the build** if any *published* content contains: the literal token `NEEDS_CONFIRMATION`, `TODO`, an unresolved screenshot placeholder, a project with any `verification.*: false`, or a link to a non-https URL. In development it prints warnings instead.

### 17.5 Skills model
```ts
{ name: string, group: 'languages'|'frameworks'|'data-and-bi'|'tools'|'design'|'professional',
  level: 'practical-project'|'broader-proficiency',   // see below
  evidence: 'cv-skills'|'cv-project'|'cv-teaching'|'owner-statement', confirmed: boolean, projects?: string[] }
```
**Two tiers (owner decision D-03):**
- `practical-project` = "Practical project experience": technologies the owner has used in documented projects (shown with `EvidenceChip` "Used in <Project>"). This tier makes **no claim of mastery**.
- `broader-proficiency` = "Broader proficiency": the CV's Technical Skills list (languages, frameworks, tools). Shown as plain lists.
A technology may appear in **one tier only** (the CV list wins if it is in both). Only `confirmed: true` items render. Promoting a technology from practical-project to broader-proficiency requires an explicit owner instruction. Section copy must label the tiers; no proficiency levels, bars or years.

**CV-listed (confirmed in CV):** Languages: C, C++, Python, JavaScript, SQL · Frameworks/Technologies: Flask, Django, Bootstrap, Power BI, Tableau · Tools: Jupyter Notebook, VS Code, PyCharm, Adobe Photoshop, Adobe Illustrator, Canva · Professional: Problem Solving, Analytical Skill, Teaching, Communication, Organizational, Team Work.
**Practical project experience (owner-stated, D-03; `confirmed: true`, tier `practical-project`):** PHP, Laravel, MySQL, HTML, CSS, JavaScript, Git/GitHub, Tailwind CSS, Livewire, Filament, Alpine.js, Vite. Each must map to at least one project in which it is used (PHP/Laravel/MySQL → BuildHub; Laravel/Filament/Livewire/Tailwind/Alpine.js/Vite → Sevix Global, **subject to verification against project files**; Core PHP → Starfair). *MariaDB* and *Core PHP* are shown only as project-stack details, not skills, unless the owner asks otherwise.
**Never listed unless supplied (D-04):** React, Next.js, Node.js, TypeScript, Docker, AWS, n8n, LangChain, or any AI-automation tool. (Even though this site is built with Next.js, listing it as a skill requires confirmation.)

## 18. Technical architecture

### 18.1 Options compared

| Criterion | **A. Next.js + R3F + GSAP** | **B. Next.js, no 3D engine** | **C. Laravel Blade + Tailwind + Three.js** |
|---|---|---|---|
| SEO | Excellent (SSG) | Excellent | Good (SSR) |
| Hero 3D | Excellent | None (CSS/SVG only) | Good (imperative Three.js) |
| Animation | Two libs (GSAP + R3F) = heavier | Light | Manual |
| Maintainability | Good (typed) | Best | Good, but PHP host needed |
| Hosting/cost | Static/edge, free tier | Same | Needs PHP host |
| Content updates | Files in repo | Files in repo | DB or files |
| Complexity | Medium | Low | Medium |
| Fit with owner's skills | New stack `[Q-02]` | New stack | **Matches owner's Laravel experience** |

### 18.2 Decision
**Option A, trimmed:** Next.js (App Router) + React + TypeScript (strict) + Tailwind CSS + React Three Fiber (hero only, lazy) + **Motion** instead of GSAP. Rationale: SSG gives SEO and speed; one 3D scene justifies R3F; Motion is lighter than GSAP and integrates with React; no database/CMS because content changes are infrequent and owned by one person.
**Escape hatch:** If the owner prefers Laravel for maintainability (A-03, Q-14), the DESIGN.md is framework-agnostic; swap to Option C by keeping tokens, components and the `HeroScene` module (vanilla Three.js port). This is not the recommendation.

### 18.3 Specifics
- Package manager: pnpm. Node: current LTS. Versions: latest stable at implementation time; agent must verify compatibility (Next, React, R3F, drei, three, Tailwind).
- Tailwind: tokens exposed as CSS variables from DESIGN.md; no arbitrary one-off colours.
- Fonts: `next/font` self-hosted — Instrument Serif (display), Geist (UI/body), Geist Mono (labels).
- Content: MDX via `next-mdx-remote` or `@next/mdx` + `gray-matter`/`contentlayer`-free custom loader (agent chooses the simplest, no unmaintained packages) + Zod.
- Images: `next/image`, AVIF/WebP, explicit dimensions, `priority` only for hero-adjacent media.
- Hosting: Vercel assumed (A-04) `[NEEDS USER CONFIRMATION: Q-10]`; any host supporting Next.js works. Domain `[NEEDS USER CONFIRMATION: Q-11]`.
- Env vars (document in `.env.example`, never commit secrets): `NEXT_PUBLIC_SITE_URL`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `RESEND_API_KEY` (or SMTP equivalents), `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_ANALYTICS_ID` (if applicable).

### 18.4 Server vs Client components
| Server (default) | Client (`"use client"`, minimal) |
|---|---|
| All pages, `SectionHeader`, `ProjectFeature` (static shell), `FactSheet`, `FeatureList`, `Timeline`, `StackGroup`, `Footer`, `HeroFallback` | `MobileMenu`, `SiteHeader` scroll-condense wrapper, `Reveal`, `HeroSceneLoader` (dynamic import, `ssr:false`), `HeroScene`, `ContactForm`, `ProjectFeature` parallax wrapper (thin) |

### 18.5 Backend
Only `POST /api/contact` (route handler). No database, no auth, no admin, no CMS. **Concrete trigger to revisit CMS:** owner reports editing content more often than monthly and dislikes Git/MDX workflow (Q-14).

## 19. SEO requirements

- SEO-01 [E] Title template `%s — Monifa Sultana`; Home title: `Monifa Sultana — Web Developer & IT Lecturer` `[NEEDS USER CONFIRMATION: Q-04]`.
- SEO-02 [E] Unique meta description (≤ 155 chars) per page, derived from content.
- SEO-03 [E] Canonical URL from `NEXT_PUBLIC_SITE_URL` (do not hardcode).
- SEO-04 [E] Open Graph + Twitter card metadata; OG image generated with `next/og` (name, role line, brand motif; no photo required); per-project OG image with title.
- SEO-05 [E] `sitemap.ts` lists Home, About, published projects, Privacy; `robots.ts` allows all in production, **disallows all on preview/staging and until domain is confirmed**.
- SEO-06 [E] JSON-LD: `WebSite`, `Person` (name, jobTitle = "Web Developer & IT Lecturer", `worksFor` = confirmed current roles only, `sameAs` = confirmed profiles only, `alumniOf` = IIUC; **no email/phone**), per project `CreativeWork` (name, description, dateCreated year, `creator`). No fabricated ratings/reviews.
- SEO-07 [E] One H1/page; logical heading order; descriptive link text; image alt text.
- SEO-08 [E] CV download link with descriptive anchor text; filename `Monifa-Sultana-CV.pdf`.
- SEO-09 [E] Contact info on site: only fields confirmed public (Q-13). Social links: only confirmed.
- SEO-10 [D] `hreflang` unnecessary in v1 (single language).

## 20. Accessibility requirements (WCAG 2.2 AA target)

- A11Y-01 [E] Semantic landmarks (`header`, `nav`, `main`, `footer`), one `main`, skip link as first focusable element.
- A11Y-02 [E] Contrast ≥ 4.5:1 body, ≥ 3:1 large text/UI; verify with tooling, token values in DESIGN.md are pre-checked estimates.
- A11Y-03 [E] Visible focus ring on all interactive elements (2 px, offset 2 px, ≥ 3:1).
- A11Y-04 [E] Full keyboard operability; logical tab order; `MobileMenu` focus trap + restore.
- A11Y-05 [E] `prefers-reduced-motion` honoured (§16, DESIGN §17).
- A11Y-06 [E] 3D canvas is `aria-hidden="true"`, not focusable; informational content lives in HTML. `HeroFallback` has `role="img"` + concise `aria-label` *or* is decorative (`aria-hidden`) — choose decorative.
- A11Y-07 [E] Form: labels bound to inputs, errors via `aria-describedby`, `aria-invalid`, summary focus on submit failure, `aria-live="polite"` status.
- A11Y-08 [E] Touch targets ≥ 44×44 px.
- A11Y-09 [E] No information conveyed by colour alone (status badges use text + icon).
- A11Y-10 [E] Zoom to 200% and 320 px width without loss of content or horizontal scroll.
- A11Y-11 [E] Images: meaningful `alt`; decorative `alt=""`.
- A11Y-12 [E] Video (if any): controls, captions or transcript, no autoplay with audio.

## 21. Performance requirements

Targets are **validation goals measured after implementation**, not guarantees.

| Metric | Target (mobile, p75 field / Lighthouse lab mid-tier) |
|---|---|
| LCP | ≤ 2.5 s (LCP element = H1 or hero text, **never the 3D canvas**) |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| Lighthouse (mobile) | Performance ≥ 90 on Home with 3D deferred/off; ≥ 80 with 3D active; Accessibility ≥ 95; Best Practices ≥ 95; SEO ≥ 95 |
| Initial JS (Home, gzip) | ≤ 170 KB excluding lazy 3D chunk |
| 3D chunk (gzip) | ≤ 350 KB, loaded after idle |
| Hero 3D triangles | ≤ 8,000; draw calls ≤ 40; DPR clamp `[1, 1.75]` |
| Image weight (Home first view) | ≤ 200 KB |
| Fonts | ≤ 3 families, ≤ 4 files total, `display: swap`, subsetted |
| Frame rate | ≥ 50 fps median on a mid-range laptop; auto-degrade (DPR → 1, stop idle motion) if frame time > 24 ms for 2 s |

Techniques: SSG, `next/image`, dynamic import for `HeroScene`, no 3D assets, route-level code splitting, `loading="lazy"` below fold, no layout-shifting embeds, long-cache immutable static assets, `content-visibility: auto` on below-fold sections [D].

## 22. Security requirements

- SEC-01 [E] Contact endpoint: schema validation (Zod), max body 10 KB, honeypot, per-IP rate limit (e.g., 5/hour; implement with the host's edge KV or an in-memory fallback, document limits), optional Turnstile token verification `[D]`, reject on failure with generic error.
- SEC-02 [E] No secrets in client bundle; env-only; `.env*` git-ignored.
- SEC-03 [E] Security headers: CSP (allow only self, fonts self-hosted, analytics origin if used, Turnstile if used), `X-Content-Type-Options`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal, HSTS on production.
- SEC-04 [E] Sanitize/escape all user input used in email bodies; no HTML email from user content.
- SEC-05 [E] No storage of contact messages in v1 (email only); no logging of message bodies.
- SEC-06 [E] Dependency audit in CI (`pnpm audit`), lockfile committed.
- SEC-07 [E] The CV PDF served is a **separate public edition without referees' names/contact details** (D-06) and without the personal phone number unless the owner confirms (Q-13). The original CV (which contains referees' phone/email) must never be placed in `/public`. The agent must not generate or edit the CV; the owner supplies `Monifa-Sultana-CV-public.pdf`; until then the CV buttons are hidden in production (content guard).
- SEC-08 [E] External links `noopener noreferrer`.

## 23. Analytics requirements

- AN-01 [D] Privacy-friendly, cookieless analytics (Plausible, Umami, or host-native) `[NEEDS USER CONFIRMATION: Q-10]`. No consent banner needed if no cookies/personal data; document in Privacy.
- AN-02 [D] Events (names fixed): `cta_view_projects`, `cta_download_cv`, `project_open` (slug), `external_link_click` (type: live|repo|social), `contact_submit_success`, `contact_submit_error`.
- AN-03 [E] Do not use session replay, fingerprinting or ad pixels.
- AN-04 [E] Analytics must not block rendering (`defer`/`afterInteractive`) and respects Do Not Track where the provider supports it.

## 24. Responsive requirements

| Band | Width | Notes |
|---|---|---|
| Mobile | < 768 px | Single column; hero uses `HeroFallback`; menu dialog; project panels stacked |
| Tablet | 768–1023 px | 8-col grid; 3D enabled if gating passes; two-column where useful |
| Desktop | 1024–1535 px | 12-col grid; full hero composition |
| Large | ≥ 1536 px | Container capped at 1440 px; type caps; larger spacing |

Detailed layouts are in DESIGN §21–22 and §31. Global rules: no horizontal overflow at 320 px; text min 16 px body; touch targets ≥ 44 px; images never upscaled past intrinsic size; tables become stacked lists on mobile.

## 25. Future scalability

- New project → one MDX + images. New automation case study → one MDX in `content/automation/` + flip `FEATURES.automationPage`. Blog → add `content/writing/` + routes (optional). New experience entry → add object in `experience.ts`. CV update → replace PDF. New contact option → extend `site.ts.contact`.
- If projects > 6: enable `Work Index`; if automation case studies ≥ 1: enable `Automation`; if blog added: add nav item (max 5 total).
- i18n readiness: copy lives in content files (not hard-coded in components).

## 26. Acceptance criteria

| ID | Criterion | Verify by |
|---|---|---|
| AC-01 | All [E] pages exist, render, and are reachable via nav/footer | Manual + e2e |
| AC-02 | `pnpm build` in production fails when a published item has `NEEDS_CONFIRMATION`, missing screenshot, or `verification` false | Test with fixture |
| AC-03 | Hero text visible and CTAs usable with JS disabled | Disable JS test |
| AC-04 | With reduced motion on: no parallax, no scroll-linked motion, no idle 3D motion; 3D not loaded | Manual (OS setting) |
| AC-05 | With WebGL disabled or `saveData`: `HeroFallback` shown, no console errors | Manual |
| AC-06 | Home Lighthouse/CWV targets in §21 are met or deviations documented | Lighthouse CI + field data |
| AC-07 | axe-core: 0 critical/serious violations on all pages; manual keyboard pass | axe + manual |
| AC-08 | No horizontal scroll at 320, 375, 768, 1024, 1440, 1920 px | Responsive test |
| AC-09 | Contact form: valid submit → success state; invalid → inline errors; honeypot filled → silent drop; server error → error state with mailto fallback; rate limit → friendly message | Test matrix §12/DESIGN §26 |
| AC-10 | Each page has unique title, description, canonical, OG; sitemap lists correct URLs; robots disallows staging | Inspect output |
| AC-11 | No forbidden claims (stats counters, percentage bars, testimonials, "expert", unverified skills) present | Grep + review checklist |
| AC-12 | Adding a new valid project MDX displays it on Home/Project Detail without code change | Fixture test |
| AC-13 | Project Detail hides sections with no data | Fixture test |
| AC-14 | Skills list shows only `confirmed: true`; project stacks appear under their projects | Unit test |
| AC-15 | Direction section contains no automation project claims | Content review |
| AC-16 | CV PDF contains no referee contacts or personal phone (unless owner confirms) | Manual |
| AC-17 | 3D chunk absent from initial network waterfall; loads after idle | DevTools |
| AC-18 | Colour contrast verified with a tool (axe/Lighthouse + manual check of every token pair in DESIGN §6/§23): body ≥ 4.5:1, large text/UI ≥ 3:1; results recorded in `docs/a11y-report.md`; any failing token is adjusted and DESIGN.md updated | Tool + report |
| AC-19 | Static fallback verified in four modes — WebGL disabled, `prefers-reduced-motion`, `saveData`, JS chunk blocked/failed — hero composition intact, no layout shift (CLS ≤ 0.1), no console errors | Manual + Playwright |
| AC-20 | Stack section shows the two tiers with labels; no technology outside the confirmed lists (e.g., React, Node.js) appears anywhere as a skill | Unit test + grep |
| AC-21 | No contact detail, social link or domain appears in production unless its `confirmed` flag is true; placeholders never render | Content guard test |
| AC-22 | Sevix Global page contains no first-person claim about AI/chatbot/voice-agent implementation; deployment/ownership fields are absent unless confirmed | Content review |
| AC-23 | No CV file containing referee details exists in `/public` or build output | Build-output scan |
| AC-24 | Role wording site-wide uses "IT Lecturer at AIMS Academy" and "Web Developer at Sevix Global"; no instance of "CSE Lecturer" exists in codebase or metadata | Grep check |
| AC-25 | Ecosystem panel ("Projects & stack") data is generated dynamically from published content files (projects MDX + experience TS); Build view displays published projects with monochrome tech chips connected by SVG hairlines; Teach view displays institutions and courses | Unit test + visual audit |
| AC-26 | No unverified technology (e.g. Python, Flask, Django, React, Node) appears in Build view of the ecosystem map; only confirmed project technologies render | Data verification |

## 27. Implementation priorities

| Phase | Scope | Priority |
|---|---|---|
| P0 | Repo, Next/TS/Tailwind, tokens, fonts, lint/test, `content` loaders + Zod + `check-content` | [E] |
| P1 | Layout shell: `SiteHeader`, `MobileMenu`, `Footer`, `Button`, `TextLink`, `Tag`, `SectionHeader`, `Reveal` | [E] |
| P2 | Home (all sections) with `HeroFallback`, content from files, placeholders in dev | [E] |
| P3 | `Project Detail` template + `BrowserFrame`, `FactSheet`, `FeatureList`, `Annotation`; BuildHub, Starfair, Sevix (as data arrives) | [E] |
| P4 | About page, `Timeline`, `CredentialList`, Privacy, Not Found | [E] |
| P5 | `ContactForm` + `/api/contact` + states + anti-spam | [E] |
| P6 | `HeroScene` (3D) with gating + fallback crossfade | [E] |
| P7 | SEO (metadata, sitemap, robots, OG, JSON-LD), analytics | [E]/[D] |
| P8 | QA: a11y, performance, responsive, content guard; fix | [E] |
| P9 | Shared-element transition, `content-visibility`, project video | [D] |
| P10 | Light theme, mobile 3D, blog, Automation page | [O] |

## 28. Risks and dependencies

| Risk | Impact | Mitigation |
|---|---|---|
| Project details/screenshots delayed | Empty Selected Work | Dev placeholders; publish guard; launch with ≥ 1 verified project |
| Sevix stack/role ambiguity | Inaccurate claim | Q-01/Q-05 must be answered before publishing it |
| Skills mismatch | Overclaiming or underselling | Evidence model §17.5 |
| 3D performance on mobile | Poor UX | Gating, fallback, budgets |
| Dense CV vs teaching objective | Mixed message | Positioning rules §6 |
| New-stack maintenance (Next.js vs owner's PHP/Python/Laravel) | Owner can't maintain | MDX content workflow; documentation; Q-14 |
| Contact backend not configured | Form not working | mailto fallback; env guard |
| Personal data in CV | Privacy | Web CV edition (SEC-07) |
| Dependencies: owner's decisions Q-01…Q-14, screenshots, domain, email service, hosting | Blockers | See §29 |

## 29. Open questions

| ID | Question | Blocks |
|---|---|---|
| Q-01 | ~~Sevix stack~~ **Resolved (D-02):** Laravel, Filament, Livewire, Tailwind CSS, Alpine.js, Vite. Remaining: agent verifies against project files (`composer.json`, `package.json`) once supplied | Sevix publish (verification only) |
| Q-02 | ~~Skills list~~ **Resolved (D-03, D-04):** project technologies may appear as *practical project experience*; React, Node.js etc. are not added. Remaining: any other technologies to add explicitly? | Stack section |
| Q-03 | Seeking: employment, freelance/client work, teaching roles, or all? Controls CTA wording ("Discuss a project" vs "Get in touch") | Hero/Contact copy |
| Q-04 | Preferred site/brand name, location spelling (Chattogram vs Chittagong), tagline | Metadata |
| Q-05 | Per project: context (personal/client/academic/internal), solo vs team, deployed or not, payment gateway used (BuildHub) | Projects |
| Q-06 | COVID-19 system: README/screenshots/repo; academic context | Optional project |
| Q-07 | Techy Octopus OS and OTHM Checker: what exists vs planned? | Optional projects |
| Q-08 | Use your portrait? Where (About only / Home)? Style preference | About/Hero |
| Q-09 | Any AI/automation tools explored, processes of interest, small experiments? | Direction |
| Q-10 | Hosting and analytics choices; email service (Resend/SMTP) for contact | Deploy/Contact |
| Q-11 | Domain name | SEO/robots |
| Q-12 | Show supervisor name / dissertation title / research interests publicly? | About |
| Q-13 | Which contact methods are public (email, phone, LinkedIn, GitHub URLs)? **All remain placeholders until confirmed (D-05).** Public CV edition without referees is decided (D-06); confirm whether it should also omit the phone number | Contact/Footer |
| Q-14 | Comfortable maintaining MDX/Git content? Prefer Laravel instead? | Architecture |
| Q-15 | Show Codeforces rating (811 max) and HackerRank? Show Graphic Designer/ICISET volunteer? | About |
| Q-16 | Bangla version wanted now or later? | Scope |
| Q-17 | Certification years/issuers' exact titles | Credentials |
| Q-18 | Sevix Global professional role details: exact title ("Web Developer"), start date, employment type (full-time/part-time/contract), and relation to the Sevix project (e.g. built within this role)? | About/Roles |

## 30. Verified facts versus assumptions

### 30.1 Verified facts (source: CV, uploaded)
| ID | Fact |
|---|---|
| F-01 | Name: Monifa Sultana |
| F-02 | CV lists email, phone, LinkedIn and GitHub (URLs not visible in text; **public use unconfirmed**, Q-13) |
| F-03 | CV career objective: "build a career in teaching profession…" (CV text, with typo "CARRER") |
| F-04 | IT Lecturer, AIMS Academy, Mehedibag, Chittagong, May 2026–Present: OTHM Level 3 IT and Level 5 Extended IT |
| F-05 | Instructor, GMIT Academy, Chawkbazar, Chittagong, Nov 2025–Apr 2026: AI and Machine Learning courses, hands-on coding labs |
| F-06 | Adjunct Lecturer, Dept. of CSE, IIUC, Kumira, Jan 2024–Mar 2025: Computer Fundamentals, Software Development, Compiler Design; guided applications using Python, Flask, Django, HTML, CSS, JavaScript |
| F-07 | Teaching Assistant, Dept. of CSE, IIUC, Jan 2022–Feb 2023: C++, Python, Flask, JavaScript, HTML, CSS; weekly labs |
| F-08 | B.Sc CSE, IIUC, 2018–2023, CGPA 3.858 |
| F-09 | M.Sc CSE, IIUC, pursuing, CGPA 3.75 |
| F-10 | Certifications: Software Quality Assurance (Manual and Automation) — Ostad; Data Science using Python — IEEE Computer Society; KPMG Data analytics job simulation — Forage |
| F-11 | Undergraduate dissertation: "Hybrid Deep Learning approach for smartphone sensor-based activity intensity pattern recognition in prognosis of Insomnia" |
| F-12 | Research interests: HAR, AI, ML, Deep Learning, Neural Network |
| F-13 | Sevix Global (2026) is described as a business agency platform focused on AI automation, chatbots, voice agents, digital marketing, SEO, e-commerce, web development, branding, business services (i.e. services the agency presents) |
| F-14 | BuildHub (2026) per CV: Laravel, PHP, MySQL; features as in §14 |
| F-15 | Starfair (2026) per CV: Core PHP 8.x, MySQL; features as in §14 |
| F-16 | Sevix Global (2026) per CV tools line: Laravel, PHP, Filament, Livewire, MySQL/MariaDB, Tailwind CSS, Alpine.js, Vite; CV heading says "Core PHP, MySQL" (resolved by D-02) |
| F-17 | Technical skills, coding platforms, extracurricular as in §17.5 and Q-15 |
| F-18 | HSC GPA 3.92 (Kapasgola City Corporation Women College, 2015–2017); SSC GPA 5.00 (Krishna Kumari City Corporation Girls High School, 2014–2015) |

### 30.2 Assumptions (change only on owner instruction)
| ID | Assumption |
|---|---|
| A-01 | Personas are illustrative |
| A-02 | Site is in English only for v1 |
| A-03 | Owner accepts learning/maintaining an MDX + Git workflow |
| A-04 | Hosting on Vercel or similar Next.js-compatible static/edge host |
| A-05 | Owner wants teaching visible but secondary to projects (per brief) |
| A-06 | Project "Role" wording will be supplied by owner; CV bullets are used only as draft contributions |
| A-07 | Project images will be screenshots supplied by owner, not stock or generated |
| A-08 | The portrait is optional; no layout depends on it |

### 30.3 Not verified / not present
Live URLs · GitHub repo URLs · screenshots · deployment status · clients/users · outcomes · contact form email service · domain · COVID-19 system details · Techy Octopus OS details · OTHM Citation Checker status · any automation work · testimonials · years of web-development experience · freelance status.

### 30.4 Owner decisions log (binding)

| ID | Decision | Date |
|---|---|---|
| D-01 | Position primarily as Web Developer; teaching/academic as differentiator; AI Automation secondary, interest/direction only, no claimed professional automation experience | Rev. 2 |
| D-02 | Sevix Global stack = Laravel, Filament, Livewire, Tailwind CSS, Alpine.js, Vite, subject to verification against project files. AI automation/chatbot/voice-agent offerings are the agency's, not personally implemented, absent evidence. Deployment status and ownership remain `[NEEDS USER CONFIRMATION]` | Rev. 2 |
| D-03 | Owner has worked on projects with PHP, Laravel, MySQL, HTML, CSS, JavaScript, Git/GitHub, Tailwind CSS, Livewire, Filament, Alpine.js, Vite. Shown as *practical project experience*, distinct from *broader proficiency* (CV skills) | Rev. 2 |
| D-04 | React, Node.js and the portfolio's own stack are **not** added to skills | Rev. 2 |
| D-05 | Personal contact details, domain and social links are placeholders until the owner confirms what is public | Rev. 2 |
| D-06 | A separate public CV without referees' personal contact information will be used | Rev. 2 |
| D-07 | Keep annotated-build concept, dark editorial style, ember accent, selective 3D hero; contrast must be verified during implementation; static fallback must be verified | Rev. 2 |
| D-08 | Documentation and the initial implementation plan are not blocked by missing information; open questions are tracked (§29) and the per-project checklist in `PROJECT_CONTENT_CHECKLIST.md` | Rev. 2 |
| D-09 | Project states (completed / ongoing / conceptual) must be distinguished for all six projects; none may be published with an unknown state | Rev. 2 |
| D-10 | Current roles: Web Developer at Sevix Global (agency) + IT Lecturer at AIMS Academy (since May 2026). Retired "CSE Lecturer" title site-wide. Sevix start date, employment type, and relation to Sevix project remain `[NEEDS USER CONFIRMATION]` (Q-18). | Rev. 3 |
| D-11 | Hero visual = evidence-based "Build ↔ Teach" ecosystem map (`EcosystemMap`, `EcosystemNode`, `EcosystemChip`), replacing exploded-stack 3D hero; R3F scene demoted to [O]. Build view tech chips connected to published projects via 1px SVG lines; Teach view shows institution nodes and courses. | Rev. 3 |

**Placeholder rendering rule (D-05):** contact/social/domain fields in `content/site.ts` use `{ value: null, confirmed: false }`. In development they render a visible `[placeholder]` marker; in production they are omitted, and the build fails if a page that requires them (e.g., Contact fallback `mailto:`) has none.
