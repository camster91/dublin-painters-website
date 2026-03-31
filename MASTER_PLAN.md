# 🚀 Master Plan: Project Antigravity Takeover

## Vision
Transform the current static HTML/Tailwind prototype into a **2026-grade, fully functional, high-converting digital storefront** for Painters Dublin. This plan outlines the automated steps for Google Antigravity to replace placeholders, elevate the design, and wire up full backend functionality.

---

## Phase 1: 2026 UI/UX Elevation
Move beyond flat web design into an immersive, interactive experience.

- [ ] **Fluid Typography & Fluid Spacing:** Implement CSS `clamp()` for truly seamless scaling across all viewport sizes (from foldables to ultrawide 8k displays).
- [ ] **Micro-Interactions & Physics:** Introduce subtle, physics-based animations (using Framer Motion or GSAP). Buttons should have magnetic hover effects; page transitions should be seamless (no hard page reloads).
- [ ] **Advanced Material Design:** Upgrade flat backgrounds with subtle glassmorphism (backdrop-blur), mesh gradients, and dynamic lighting effects that track the user's cursor.
- [ ] **Dark Mode Sync:** Implement a system-aware dark theme that automatically flips the color palette using CSS variables, maintaining high contrast and brand identity.
- [ ] **Scroll-Triggered Storytelling:** Animate the "Our Process" steps so they build themselves dynamically as the user scrolls down the page.

---

## Phase 2: AI Asset Generation & Integration
Replace all generic Unsplash placeholders with hyper-realistic, localized, and brand-specific AI imagery.

- [ ] **Generate Hero Assets:** Prompt Imagen 3 / Midjourney to create 8K resolution, photorealistic images of painters working on classic Dublin architecture (e.g., Georgian doors, brick exteriors, modern dockland interiors).
- [ ] **Before/After Sliders:** Generate realistic "before" and "after" image pairs. Implement a draggable interactive component for users to slide between the old and new states.
- [ ] **Trust Badges & Icons:** Redesign Lucide icons into custom, semi-3D SVG assets that match the brand's premium feel.
- [ ] **Image Optimization:** Automatically convert all generated assets to `.avif` and `.webp` formats, implementing lazy loading and blurred placeholders (Lighthouse score target: 100/100).

---

## Phase 3: Full Backend Functionality
Wire up the multi-step quote form to be a functional lead-generation engine.

- [ ] **API Integration (Form Submission):** Connect the multi-step form to a backend service (e.g., Resend, SendGrid, or a custom Edge Function).
- [ ] **Automated Estimator Engine:** Enhance the JavaScript logic so the form calculates a rough dynamically generated price range based on the user's inputs before they submit, increasing conversion rates.
- [ ] **Auto-Responders:** Set up triggered email/SMS auto-responders that immediately thank the user and set expectations for the final quote.
- [ ] **Headless CMS Integration:** Connect the "Reviews" and "Gallery" sections to a Headless CMS (like Sanity or Strapi). This allows the business owner to upload new photos and sync Google My Business reviews automatically without touching code.

---

## Phase 4: Architecture Migration (Static to Framework)
Modernize the tech stack for maximum speed, SEO, and developer experience.

- [ ] **Migrate to Next.js (or Astro):** Convert the plain HTML/JS files into modular React components (or Astro islands for zero-JS delivery).
- [ ] **Componentization:** Break down the code into reusable components (`<Header />`, `<Hero />`, `<PricingTable />`, `<QuoteForm />`, `<Footer />`).
- [ ] **SEO Optimization:** Implement dynamic `<head>` tags, Open Graph meta tags, structured JSON-LD schema (LocalBusiness and Service), and automated sitemap generation.
- [ ] **Edge Delivery:** Configure the project to deploy globally on Edge networks (like Vercel or Cloudflare) for sub-50ms Time To First Byte (TTFB).

---

## Phase 5: CI/CD & Launch
Automate the deployment pipeline so the site is always live and flawless.

- [ ] **Automated Testing:** Write Playwright tests to ensure the multi-step form and mobile navigation never break.
- [ ] **GitHub Actions / Vercel Deploy:** Set up a pipeline where every push to the `main` branch automatically builds the site, runs tests, and deploys to the live domain.
- [ ] **Analytics Setup:** Inject privacy-first analytics (like Plausible or Google Analytics 4) to track form drop-off rates and user flow.

---

## Execution Protocol for Antigravity
When Antigravity initiates this plan:
1. **Initialize Framework:** Scaffold a new Next.js/Tailwind project in a new branch.
2. **Migrate & Componentize:** Port existing HTML/CSS into React components.
3. **Inject Backend:** Add Edge API routes for the form.
4. **Swap Assets:** Generate and replace images.
5. **Review & Merge:** Run Lighthouse, finalize QA, and merge to `main`.