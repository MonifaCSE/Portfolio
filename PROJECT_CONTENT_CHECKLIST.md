# PROJECT_CONTENT_CHECKLIST.md

Companion to `PRD.md` §14, §17, §29 and `DESIGN.md` §13–14.
Legend: ✅ known from CV/owner decision · ❓ `[NEEDS USER CONFIRMATION]` · ➖ optional.
Nothing marked ❓ may be invented. A project is published only when all **Required** items are ✅ (build guard, PRD §17.4).

---

## Required for every project

| # | Item | Notes |
|---|---|---|
| 1 | Completion state: `live` / `built` (completed), `in-progress` (ongoing), `academic`, `concept` | Decides badge and layout |
| 2 | Context: personal / client / academic / internal / agency-demo | Never implied |
| 3 | Your exact role, and solo vs team | One or two sentences in your words |
| 4 | Confirmation that the feature list is accurate (and which items are implemented vs planned) | Draft list below |
| 5 | Confirmation of the technology stack (checked against project files) | `composer.json`, `package.json`, or equivalent |
| 6 | At least 2 screenshots (primary + admin or mobile), real data blurred where personal | Min width 1600 px, PNG/JPG |
| 7 | Alt-text-ready description of each screenshot | One line each |
| 8 | Live URL and GitHub URL, or "none" | Only if you want them public |
| 9 | Year (or start/end) | |

---

## Featured projects

### 1. BuildHub — E-commerce Management System (2026)
| Item | Status |
|---|---|
| Type, completion state, ownership (solo/team), deployed? | ❓ |
| Stack: Laravel, PHP, MySQL, JavaScript, HTML, CSS, Git/GitHub | ✅ CV (verify in files) |
| Features drafted from CV: single-vendor store (building materials, power/hand tools, machinery, electrical, plumbing); product, category, brand, inventory, wishlist, cart, coupon, discount, campaign, order, review, return management; role-based admin; payment gateway support; backend structured for future API/integrations | ✅ CV, confirm each is implemented |
| Which payment gateway (or "not named publicly") | ❓ |
| Wording for "future API/third-party integrations": built-in groundwork or only planned? | ❓ |
| Screenshots: storefront (home/product/cart) + admin (orders/inventory) | ❓ needed |
| Live URL / repo URL | ❓ |
| Outcomes (only verifiable ones: users, orders, client) | ❓ none assumed |

### 2. Starfair Training Institute (2026)
| Item | Status |
|---|---|
| Type (client / personal / demo), completion state, deployed? | ❓ |
| Stack: Core PHP 8.x, MySQL, HTML, CSS, JavaScript, Bootstrap, Git | ✅ CV (verify) |
| Features drafted from CV: dynamic courses/programs (Modeling, Acting, Dance, Photography, Pageant, Makeup, Fine Arts, Communication, Grooming, Poetry, Hosting); admin CRUD (courses, content, images, registrations, publication status, display order); course-specific student registration; digital magazine with PDF flipbook; reusable PHP/MySQL components | ✅ CV, confirm |
| Is Starfair a real institute or a demo/concept build? Is the name usable publicly? | ❓ |
| Screenshots: public course page, registration form, admin panel, **flipbook** (or 10–15 s screen recording) | ❓ needed |
| Live URL / repo URL | ❓ |

### 3. Sevix Global — AI Digital Business Agency Platform (2026)
| Item | Status |
|---|---|
| Stack: Laravel, Filament, Livewire, Tailwind CSS, Alpine.js, Vite (+ PHP, MySQL/MariaDB) | ✅ Owner decision D-02, **verify against project files** |
| Deployment status | ❓ |
| Ownership / client context (own agency, client, or demo) | ❓ |
| Features drafted from CV: dynamic services, pricing, portfolio, blog, contact and content management; admin interface (Filament); production preparation (routing, DB structure, security, SEO, sitemap, performance) | ✅ CV, confirm |
| Reminder: AI automation, chatbots and voice agents are **services the site presents**, not solutions you implemented, unless you provide evidence | ✅ Decision D-02 |
| Which production-readiness items were actually done (e.g., sitemap, caching, security headers) | ❓ |
| Screenshots: homepage, services/pricing, blog, admin panel | ❓ needed |
| Live URL / repo URL | ❓ |

---

## Further projects (unpublished until answered)

### 4. COVID-19 Cases and Vaccination Management System (2021, academic)
| Item | Status |
|---|---|
| Academic context: course/university, solo or group | ❓ |
| Stack: Python, Flask, MySQL, HTML, CSS, Bootstrap | ❓ from your brief, not in the CV; verify in files |
| Purpose (hospital management of doctors, vaccines, COVID-19 patients, cases, vaccination registration) | ❓ from your brief; confirm what was implemented |
| Screenshots, repo, report/README | ❓ |
| Add to CV? (currently absent) | ❓ |

### 5. Techy Octopus OS (internal agency management platform)
| Item | Status |
|---|---|
| Completion state: which modules are implemented, in progress, planned | ❓ |
| Your role; whose agency; can the name be public? | ❓ |
| Stack | ❓ |
| Screenshots (internal; blur data) or architecture diagram | ❓ |

### 6. OTHM Assignment Reference and Citation Checker
| Item | Status |
|---|---|
| State: concept / requirements / design / prototype / built | ❓ (your brief calls it a concept; treated as `concept` until you say otherwise) |
| Requirements or wireframes you can share | ❓ |
| Intended features (citation vs reference-list check, reference accessibility, feedback) | ✅ concept only, shown as "planned" |
| Any prototype screenshots or repo | ❓ |

---

## Site-wide items

| Item | Status |
|---|---|
| Public CV file `Monifa-Sultana-CV-public.pdf` (no referees; phone included or not) | ❓ you supply (D-06) |
| Public email, phone, LinkedIn URL, GitHub URL | ❓ placeholders (D-05) |
| Site name/brand, location spelling (Chattogram/Chittagong), tagline | ❓ |
| Seeking: employment / freelance / teaching / all (sets CTA wording) | ❓ |
| Domain, hosting, email service for contact form, analytics | ❓ |
| About summary approval (150–220 words, drafted from CV) | ❓ |
| Portrait: yes/no, where | ❓ |
| Certification exact titles and years | ❓ |
| Supervisor name, Codeforces/HackerRank, graphic design/ICISET items shown? | ❓ |
| AI/automation: tools explored, processes of interest, any experiments | ❓ |

---

## How to deliver materials
Per project: a folder with screenshots (`public/projects/<slug>/`), a short text file answering the required items above, and (if allowed) repository access or `composer.json`/`package.json` so the stack can be verified.
