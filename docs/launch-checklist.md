# Final Public Launch Checklist & Readiness Matrix

> **Project:** Monifa Sultana Portfolio Website  
> **Target Host:** GitHub Pages Static Export (`output: 'export'`)  
> **Status:** Pre-Launch Freeze — Awaiting User Content & Assets  

---

## Launch Status Legend
* ✅ **Completed & Verified** — Code, architecture, or content fully implemented and verified.
* ⏳ **Waiting for User Assets / Input** — Requires files or information from the site owner.
* 🚀 **Waiting for Deployment** — Requires repository push to GitHub for automated workflow deployment.
* 🔍 **Not Yet Verified** — Post-deployment live production URL check pending.

---

## Readiness Matrix

### 1. Architecture & Core Implementation

| Item | Description | Status | Verification Detail |
|---|---|---|---|
| **Next.js Static Export** | `output: 'export'`, `unoptimized` images, subpath `basePath` support in `next.config.mjs` | ✅ Completed & Verified | Generates static `out/` directory cleanly |
| **GitHub Actions Workflow** | `.github/workflows/deploy.yml` configured for `actions/deploy-pages@v4` | ✅ Completed & Verified | Triggers on push to `main` branch |
| **Home Page (/)** | All 7 sections (`Hero`, `Intro`, `SelectedWork`, `Stack`, `Teaching`, `Direction`, `Contact`) | ✅ Completed & Verified | Rendered and verified |
| **Case Studies (/projects/[slug])** | Dynamic route template with `generateStaticParams()` for `buildhub`, `starfair`, `sevix` | ✅ Completed & Verified | Static HTML pages generated in `out/projects/` |
| **About Page (/about)** | Dedicated teaching timeline, education, dissertation research summary, credentials | ✅ Completed & Verified | Rendered and verified |
| **Privacy Policy (/privacy)** | Static mailto data handling policy, zero database/cookie tracking disclosure | ✅ Completed & Verified | Rendered and verified |
| **Custom 404 (/404)** | Styled 404 page matching design system with navigation links | ✅ Completed & Verified | Exported to `out/404.html` |
| **SEO Infrastructure** | Sitemap (`out/sitemap.xml`), Robots (`out/robots.txt`), OG Image (`out/og-image.svg`), JSON-LD | ✅ Completed & Verified | Validated in production build |
| **Accessibility (WCAG 2.2 AA)** | Semantic landmarks, keyboard focus, 16.5:1 contrast, reduced-motion gating (`docs/a11y-report.md`) | ✅ Completed & Verified | 100% compliant |

---

### 2. Required User Assets & Content Inputs

| Item | Target File Path | Status | Impact if Missing |
|---|---|---|---|
| **BuildHub Screenshots** | `/public/projects/buildhub/storefront.png`<br/>`/public/projects/buildhub/product-catalog.png` | ✅ Captured & Verified | Desktop 2000×1250px screenshots optimized & linked in MDX |
| **Starfair Screenshots** | `/public/projects/starfair-training-institute/homepage.png`<br/>`/public/projects/starfair-training-institute/course-page.png`<br/>`/public/projects/starfair-training-institute/magazine.png` | ✅ Captured & Verified | Desktop 2000×1250px screenshots optimized & linked in MDX |
| **Sevix Global Screenshots** | `/public/projects/sevix-global/homepage.png`<br/>`/public/projects/sevix-global/services.png`<br/>`/public/projects/sevix-global/ai-automation.png` | ✅ Captured & Verified | Desktop 2000×1250px screenshots optimized & linked in MDX |
| **Professional Portrait** | `/public/images/monifa-sultana.jpg`<br/>`/public/images/monifa-sultana-about.jpg` | ✅ Captured & Verified | Editorial portrait & headshot added to Hero, About page & JSON-LD |
| **Public CV PDF** | `/public/cv/Monifa-Sultana-CV-public.pdf` | ⏳ Waiting for User Assets | CV buttons point to placeholder path |
| **Confirmed Public Email** | `content/site.ts` (`socials.email.address`) | ⏳ Waiting for User Input | Form mailto uses `contact@example.com` placeholder |
| **Confirmed LinkedIn URL** | `content/site.ts` (`socials.linkedin.url`) | ⏳ Waiting for User Input | Social link points to placeholder `https://linkedin.com` |
| **Confirmed GitHub URL** | `content/site.ts` (`socials.github.url`) | ⏳ Waiting for User Input | Social link points to placeholder `https://github.com` |
| **Brand & Location Spelling** | `content/site.ts` (`location.city`, `name`) | ⏳ Waiting for User Input | Currently defaults to `Chattogram` (`Q-04`) |
| **Production Domain URL** | `NEXT_PUBLIC_SITE_URL` env variable | ⏳ Waiting for User Input | Currently defaults to `https://monifasultana.com` |

---

### 3. Post-Deployment Verification (Pending Final Launch)

| Item | Scope | Status | Notes |
|---|---|---|---|
| **GitHub Actions Pipeline Run** | GitHub repository workflow execution | 🚀 Waiting for Deployment | Triggers automatically on `main` push |
| **Live Route Status Checks** | Verify live HTTP 200 responses on production domain | 🔍 Not Yet Verified | Test after repository deployment |
| **Live Social Preview** | Verify Open Graph social card sharing on LinkedIn/Twitter | 🔍 Not Yet Verified | Test after repository deployment |
| **Live Form Mailto Trigger** | Verify mail client invocation from live site | 🔍 Not Yet Verified | Test after repository deployment |

---

## Next Steps to Authorize Launch

1. **Provide Required Files:** Place screenshots in `/public/projects/` and the public CV PDF in `/public/cv/`.
2. **Provide Public Contact Info:** Confirm email address, LinkedIn profile URL, and GitHub profile URL.
3. **Authorize Final Push:** Once assets are added, authorize pushing the codebase to your GitHub repository to trigger deployment.
