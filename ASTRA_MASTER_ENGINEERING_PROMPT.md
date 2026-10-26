# SYAHMIAOF — ASTRA MASTER FRONTEND ENGINEERING DIRECTIVE

## YOUR MISSION
You are the autonomous frontend implementation lead for **SYAHMIAOF — The Story of Becoming**, a premium cinematic editorial personal-brand website. The user has **already approved all 5 desktop reference designs**. They are the contract and visual source of truth: **RECONSTRUCT, DO NOT REDESIGN.** Deliver a functioning, responsive, accessible and production-quality website with exceptional layout fidelity and GSAP-driven editorial motion.

**Communication:** Write progress and completion reports to the user in conversational Bahasa Melayu. Source code, technical comments and test logs may be in English. The website uses Bahasa Melayu first-person **“Aku”**, with small English editorial labels.

**Autonomy:** You have authorization to inspect the workspace, use the available IDE skills and tools, create or transform assets where your environment supports it, implement, run commands, troubleshoot, compare screenshots, self-repair and test without requesting approval for routine steps. Do not stop after merely drafting a plan. Never claim an asset is exact if it is a recreation; document fidelity limitations. Never claim you ran tests that were not actually run. If tool/skill support is unavailable, use the best practical fallbacks.

## 0 — INSPECT BEFORE CODING
1. Print workspace tree and inspect package.json, lockfiles, existing components, routing, styles, public assets and scripts. Preserve the current working project and user code. Do not overwrite unrelated work or wipe the repository.
2. Discover which **actual** local/IDE skills are installed for design-from-image, frontend UI, image/asset editing, GSAP, responsive design, browser automation and testing. Read and use relevant skills when available; **do not invent skill names or assert their availability**.
3. Inspect every image in `design-reference/desktop/` at its native resolution; inspect each transparent PNG in `public/assets/characters/` and `public/assets/hero-layers/` including alpha channels and edge quality. Create an asset inventory and note what can be reused versus what is missing.
4. Prefer existing framework and versions. If project is empty, create **Next.js App Router + TypeScript + Tailwind CSS**. Use GSAP + ScrollTrigger; `@gsap/react` if appropriate. Use `next/image`/optimized images where appropriate. Use a single global design-tokens stylesheet. Use Lenis smooth scrolling only if it works correctly with ScrollTrigger and does not harm usability; otherwise native scroll.
5. If subagents/multi-agent workflows are genuinely supported, delegate isolated, non-conflicting scopes (visual measurement, asset processing, component engineering, GSAP, QA) and integrate centrally. Otherwise execute these roles sequentially. Never let concurrent agents edit the same files.

## 1 — LOCKED DESIGN REFERENCES (5 PAGES)
| Route | Design reference file | Native resolution | Hero and structure |
|---|---|---|---|
| `/` | `design-reference/desktop/01-utama-homepage.png` | 1672×941 | Cream editorial hero: **INI BARU / PERMULAAN.**, portrait on right, cream marble, glossy burgundy glass ribbon, red orb & disc, two CTAs, bottom **01 CERITA** teaser. |
| `/kisah` | `design-reference/desktop/02-kisah-my-story.png` | 1672×941 | **SEMUANYA / ADA CERITA.** Portrait seated/reflection on stone, ribbon, red sphere, floating image panels. Bottom story cards **ASAL-USUL / PERJUANGAN / TITIK PERUBAHAN**. |
| `/perjalanan` | `design-reference/desktop/03-perjalanan-my-journey.png` | 1672×941 | **AKU MASIH / MELANGKAH.** The **large hero person faces AWAY and walks UP STONE STAIRS**, not profile-facing. Timeline 2022 / 2025 / 2026 underneath, with architectural thumbnails. Use the revised attached reference rather than older versions. |
| `/karya` | `design-reference/desktop/04-karya-creations.png` | 2048×752 | **KARYA. / DARI FIKIRAN KE REALITI.** Distinct, dark moody cinematic split composition: left type, **floating project UI screens** emerging from architecture on right; no giant portrait required. Burgundy glass orbs, red rock and haze. This reference is a **hero crop**, not a whole-page layout; implement a matching hero beneath the shared global navigation and add genuine portfolio below it. |
| `/catatan` | `design-reference/desktop/05-catatan-reflections.png` | 1774×887 | Dark cinematic editorial: **CATATAN. / AKU PERCAYA PADA PROSES.**, relaxed seated portrait in center, emotional pull-quote on right and **PEMIKIRAN / PENGAJARAN / MOTIVASI / IMPIAN** cards below. Navbar adopts legible dark variant. |

**Fidelity hierarchy:** (1) same composition, (2) image placement/crop/layering, (3) typography shape/scale and wrapping, (4) spacing/alignment, (5) color/material lighting, (6) transition/motion. Do NOT invent a generic glassmorphism/SaaS dashboard look, change the palette, replace the photographic artwork with emoji/gradient blobs, or rearrange to stock template cards. Treat mockup text and controls as *reference*, not as raster UI: live labels, buttons, nav, cards, links and headings must be semantic real HTML.

## 2 — EXISTING ASSETS
`public/assets/characters/` includes:
- `00-original-hero-cutout.png` — hero/original
- `01-profile-looking-up.png`
- `02-quiet-looking-down.png`
- `03-front-arms-crossed.png`
- `04-side-profile.png`
- `05-seated-reflective.png`
- `06-reclined-looking-up.png`
- `07-standing-hands-pockets.png`
- `08-back-facing.png` — back-facing pose candidate for Perjalanan; compare against approved stairs hero

`public/assets/hero-layers/` includes:
- `01-hero-character-main.png`
- `02-hero-ribbon-front.png`
- `03-hero-ribbon-back.png`
- `04-hero-stone-foreground.png`
- `05-hero-stone-background.png`
- `06-hero-red-disc.png`
- `07-hero-red-sphere.png`

**Important quality warning:** These are helpful **recreated** transparent assets, not guaranteed lossless pixel-exact extraction from the final mockups. Compare carefully against each approved reference. Reuse only if it improves fidelity. If mismatched, generate/reconstruct additional layers from the reference using available skills/tools (segmentation, masking, inpainting, editor or image-generation tools if actually connected), save under descriptive names, and preserve generated source. For occluded complex artwork, a tightly **cropped reference visual layer** can be used as a *non-interactive image* ONLY when necessary, carefully avoiding baked-in duplicate headers, text, controls or buttons. Never pretend a composited screenshot is a fully editable element. For the best result, use transparent cutouts + CSS positioning, depth/perspective, masks and clipped decorative imagery, with real text UI in the foreground. Every asset should have appropriate alpha, no black/checkerboard painted background, clean edges, and visual consistency.

**Suggested pose assignments:** Home original hero; Kisah seated reflective and looking down; Perjalanan back-facing walking on stairs (reconstruct using ref if pose doesn't match); Karya focus primarily on floating project displays, optional subtle arms-crossed portrait in sub-sections; Catatan reclined/reflective. Avoid repeating the identical person pose on every page.

## 3 — DESIGN SYSTEM / PIXEL ACCURACY
- Primary background: warm ivory/cream ~`#F3ECE1`; ink ~`#100C0B`; burgundy ~`#650A14` to `#750B18`; subdued stone ~`#A89D8F`. **Sample actual pixels** from approved images before finalizing tokens.
- Desktop horizontal gutter at 1672 px: about 64–70 px; top nav about 70 px; fluid spacing below/above; large breathing room on the left; sculptural artworks dominate the right with intentional overlap.
- Display heading: **extremely large, tall, high-contrast, condensed Didone/editorial serif**, closely matching screenshot letterforms and line breaks. Test suitable legally available fonts; avoid a generic serif. Use font metrics, letter spacing, variable scaling or careful text wrappers if necessary. Keep text selectable, responsive and accessible. Secondary copy/nav use elegant serif, micro-labels tracking around 0.18–0.28em.
- Strong type hierarchy, burgundy lower-line headlines, hairline rules, red nodes, arrow motifs, subtle grain, refined buttons (burgundy solid primary, ivory outline secondary), virtually no conventional shadows.
- Desktop navbar: `SYAHMIAOF` on left; links `Utama`, `Kisah`, `Perjalanan`, `Karya`, `Catatan`; `BM / EN` toggle on right; active link uses fine burgundy underline. Dark adaptation on Catatan. Navigation must really work.
- Preserve intentional editorial asymmetry. Do not force equal-width generic two-column hero if it breaks the exact positioning. It is acceptable to use CSS grid + absolutely positioned, pointer-events-none decorative art layers, with viewport-relative/clamp positions.
- Do not use a single full screenshot as the entire UI. The site must be accessible/searchable, real headings/buttons, scroll and route transitions.

## 4 — REAL CONTENT, NO PLACEHOLDER LANDING PAGE
Use authentic, natural Bahasa Melayu in the first-person voice **Aku**. Headline hierarchy exactly as approved:

**Home**: `INI BARU` / `PERMULAAN.`; eyebrow `MY STORY` / `MY JOURNEY`; description `Aku tak bermula dengan segala-galanya. Aku cuma ada impian, keberanian untuk mencuba, dan satu keputusan — untuk tidak berhenti membina masa depan aku sendiri.`; CTA `Kenali Kisah Aku` → `/kisah`, `Terokai Perjalanan` → `/perjalanan`; teaser section `01 CERITA`.

**Kisah**: `SEMUANYA` / `ADA CERITA.`; intro about a simple beginning, doubts, perseverance, experiences that formed the person; three teaser stories: `ASAL-USUL`, `PERJUANGAN`, `TITIK PERUBAHAN`; narrative continues in readable body sections. Avoid fabricated intimate or exaggerated claims.

**Perjalanan**: `AKU MASIH` / `MELANGKAH.`; intro about learning and building toward the future; 2022 `ASAS DISIPLIN` (silat/leadership), 2025 `BAB BAHARU` (cloud-computing studies, technology), 2026 `TERUS MEMBINA` (web/apps, AI, cloud, development). Dates and life claims should align with user's already supplied project context; don't invent awards or employers. Primary CTA scrolls to `#timeline`.

**Karya**: `03 — THE CREATIONS`; `KARYA.` / `DARI FIKIRAN KE REALITI.`; description `Idea yang bermula di dalam fikiran, kini menjadi website, sistem, automasi dan lebih banyak lagi.`; CTA `Terokai Karya` scrolls to actual project showcase. Project cards can cover websites, systems/apps, Cloud & Infrastructure, AI & Automation. Use existing **real project screenshots** if located, otherwise tasteful clearly marked visual concept tiles; don't fabricate live screenshots or results. Links must go to real URLs only if verified from project metadata.

**Catatan**: `05 — THE REFLECTIONS`; `CATATAN.` / `AKU PERCAYA PADA PROSES.`; introduction about reflective notes on life, learning, struggle and the future. Main quote as reference: `Setiap proses, walaupun tampak perlahan, tetap membawa kita ke tempat yang lebih baik.` Four categories: `PEMIKIRAN`, `PENGAJARAN`, `MOTIVASI`, `IMPIAN`. Store their cards/notes as typed data to be maintainable, and ensure controls lead to meaningful content, not empty interactions.

Language toggle: Default BM. If time allows, implement a **real** English content map for all 5 pages, retaining the overall compositions; if unable to complete faithful translation, do not implement a fake inert toggle. Ideally include both languages fully.

## 5 — IMPLEMENTATION ARCHITECTURE
Suggested component and source architecture (adapt to discovered existing project):
```
src/
  app/{page.tsx,kisah/page.tsx,perjalanan/page.tsx,karya/page.tsx,catatan/page.tsx,layout.tsx,globals.css}
  components/{layout/{Navbar,Footer,PageTransition},editorial/{Eyebrow,DisplayHeading,EditorialButton,SectionNumber},art/{CinematicScene,LayeredArtwork,FloatingScreens},motion/{RevealText,ParallaxLayer,ScrollScene,MagneticButton},content/{Timeline,ProjectGallery,NotesGrid}}
  data/{navigation,story,timeline,projects,notes,translations}
  styles/{tokens,typography,motion}.css
public/assets/{characters,hero-layers,generated,projects}
design-reference/desktop/
```
Create reusable primitives, but allow **per-page custom art direction/layout**. No oversized single component with 1,000 lines, no repetitive hand-copied boilerplate, no untyped motion glue. Prevent hydration warnings, clean up animation contexts, avoid race conditions, and honor viewport changes.

## 6 — MOTION DIRECTION: INTENTIONAL, CINEMATIC, NOT CHAOTIC
Use real **GSAP** timelines and `ScrollTrigger`, with `gsap.context()` / `useGSAP()` cleanup. Design the animations as one coherent visual language:

1. **Opening sequence:** An unobtrusive short reveal: navigation and decorative rules fade in, eyebrow slides into place, display letters/lines wipe upward via a mask, description and CTAs stagger; then artwork fades/scales subtly. Avoid long blocking loaders.
2. **Hero parallax:** On pointer-capable desktops, different art layers respond to pointer with restrained shifts (4–16 px) and rotation (<2deg) via `gsap.quickTo` or equivalent. Suspend when offscreen and disable on coarse pointer/reduced-motion.
3. **Glass ribbon/orbs:** Slight floating drift and specular depth effect; **do not loop everything aggressively**. Use compositor-friendly transforms/opacity, never animate heavy blur continuously.
4. **Scroll choreography:** Triggered text line reveals, stone-depth parallax, elegant section dividers and micro-label fades; use stagger (0.05–0.1s) sparingly.
5. **Kisah:** Narrative sections enter as the reader scrolls; portraits and architectural layers shift independently; story cards react with refined hover, not giant scaling.
6. **Perjalanan:** Responsive timeline reveal. On wide desktop, horizontal or sticky-scroll **only when content remains easy to read and keyboard accessible**; make 2022→2025→2026 visibly progress as user scrolls. The hero back-facing figure has very subtle upward movement, fitting the walking-up-steps metaphor. On mobile use a legible vertical timeline.
7. **Karya:** Floating web screens enter at staggered depths with gentle perspective and hover tilt; project cards use intelligent reveals. Treat any screenshot in the mockup as *visual inspiration* and recreate UI/graphics as live content or accessible imagery.
8. **Catatan:** Dark-to-light section interplay, elegant quote line reveals and slow orb drift; notes/cards reveal progressively and may have accessible detail panels or real routes.
9. **Between-page transitions:** Short premium crossfade/masked curtain or brand line sweep (approx 350–650 ms), **without impairing navigation, browser history or focus**. Respect native browser transitions if React routing needs it.
10. **Interactive polish:** Button arrow glide, underline draw, focus-visible states, menu overlay transitions, scroll-to-section, scroll progress indicator if it fits design.

**Accessibility/performance:** `prefers-reduced-motion` must switch to minimal or no movement; no scrolljacking, trapped scrolling, perpetual layout thrashing, or pointer-follow effects on touch devices. Clean all ScrollTriggers on route change and handle resize via refresh. Keep animation durations restrained, maintain readable contrast, and avoid using `will-change` permanently on large numbers of elements.

## 7 — MOBILE/TABLET ART DIRECTION
The user has approved only desktop mockups so far. **Do not invent new desktop design.** Derive responsive adaptations: 390×844 and 375×812 phones, 768×1024 tablets, 1024×768 laptops; keep key art identity while changing layout intentionally. Display heading in readable wrapped sizes (clamp), preserve ivory/burgundy/high-contrast serif, show hamburger full-screen editorial menu, make tap areas >=44×44 px, avoid horizontally clipped CTAs, convert multiple-column cards to clean stacked or swipe-friendly content; make floating art occupy a distinct framed region under/behind text without obscuring legibility. No horizontal overflow. Maintain same actual content and working routes.

## 8 — VISUAL QA / AUTOMATED SELF-REPAIR
This is a **visual reconstruction** challenge. Compilation success is NOT completion. Require a closed-loop comparison:

1. Start dev server and run the app locally. Implement basic route smoke tests for all five pages.
2. Use Playwright/browser tooling if actually available to capture desktop screens for **the same viewports as the references** (Home/Kisah/Perjalanan 1672×941; Catatan 1774×887; Karya 2048×752 hero reference). The Karya reference is only a hero crop, so compare the relevant hero region rather than an entire page including navbar.
3. Save captures to `qa/screenshots/`, overlays or difference images to `qa/diffs/`. Compare headline wrapping, navigation position, 2D coordinates, contrast, character size/crop, marbles, burgundy ribbon, red discs, perspective screens, first visible fold and bottom content.
4. Repair the highest visual mismatch first. Run **at least 3 iterative screenshot→compare→fix cycles per page where technically possible**, or until clear visual convergence. Don't stop after the first pass or declare 100% exactness if it isn't.
5. Check mobile/touch, reduced motion, keyboard navigation, dead links, missing images, console errors, responsive overflow and animation teardown.
6. Run real project checks (matching scripts, e.g. `npm run lint`, `npm run build`, Playwright tests); fix errors. Don't invent test results. Avoid regressions on already-correct pages.
7. Prioritize Core Web Vitals (LCP target <2.5s under normal production conditions, CLS <0.1) and image optimization, with realistic compromises for sophisticated artwork.

Maintain a concise `qa/visual-qa-report.md` for each page: screenshot name, reference size, major mismatches repaired, known remaining gaps, functional test result, and what was not testable.

## 9 — NON-NEGOTIABLE ACCEPTANCE CRITERIA
- Five real routes render: `/`, `/kisah`, `/perjalanan`, `/karya`, `/catatan`.
- Navbar/CTAs/section links work. The visual language and page-specific approved hero compositions are honored. Dark Catatan matches its distinct art direction.
- **Perjalanan hero is back-facing, walking up steps**, never defaulting to the old looking-up/profile character.
- Karya retains the approved dark floating-screen aesthetic, not a pale generic card grid; do not substitute previous rejected Karya mockups.
- Semantic, searchable text overlays on composed layers, not a flat screenshot masquerading as a website.
- Type looks editorial; responsive mobile; meaningful animation transitions; reduced-motion support; acceptable keyboard/accessibility behavior.
- Use/prefer provided transparent assets, reconstruct missing decorative layers where viable, annotate approximation instead of claiming perfect extraction.
- Build/lint/tests that are available pass, with QA evidence and a concise completion report.

## 10 — FINAL DELIVERABLES AND REPORT
- Working project source and assets in the existing workspace.
- An updated README with install/run/build/deploy instructions and important tech stack choices.
- A clear asset-manifest mapping each generated/reused asset to its page/role.
- Desktop + mobile QA screenshots and visual comparison report.
- Final Bahasa Melayu report with: pages built, key motion effects implemented, desktop fidelity summary, what was tested, blockers/approximations, and any manual user actions still necessary.

**BEGIN NOW.** Start by examining the five files and available assets. Audit and implement, do not ask open-ended design questions. This is a finished visual direction to execute faithfully, not a brief to reinterpret.
