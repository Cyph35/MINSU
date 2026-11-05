# Sugilanon sa Kalinaw Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify locally the "Sugilanon sa Kalinaw" MINSUPALA interactive history & peace portal as a statically rendered Next.js site.

**Architecture:** Next.js 15 App Router, all pages statically generated from typed TS content files (`src/data`). Only the map, preview card, tabs and gallery are client components. Content integrity is enforced by Vitest tests over the data layer.

**Tech Stack:** Next.js 15, React 19, TypeScript strict, Tailwind CSS v4, Framer Motion, Vitest + Testing Library, Playwright. (Deployment and git push are handled by the user later.)

**Release policy:** No deployment and no `git push` by the agent. Everything is verified on localhost; the user pushes and deploys.

**Spec:** `docs/superpowers/specs/2026-11-05-sugilanon-sa-kalinaw-design.md`

## Global Constraints
- Tokens: bg `#0F172A`, surface `#1E293B`, surface-2 `#334155`, text `#F1F5F9`, muted `#94A3B8`, gold `#F59E0B`, emerald `#10B981`.
- Fonts: Fraunces (display), Plus Jakarta Sans (body) via `next/font/google`.
- Every factual paragraph cites ≥ 1 `Source` id; population always has year + cite.
- Use self-designations listed in spec; no blame framing of conflict.
- Images: Wikimedia PD / CC-BY / CC-BY-SA only, stored in `public/media/<slug>/`, credit + license required.
- `prefers-reduced-motion` disables map/route animation.
- Lighthouse ≥ 90 all categories on `/` and one region page (mobile).

## Review Focus
1. Touch devices (no hover): tap must open card, second action navigates — Playwright mobile test in Task 5.
2. Keyboard-only users: Tab reaches every region, Enter navigates — Playwright test in Task 5.
3. Unknown slug `/regions/foo` → 404 page, not crash — test in Task 6.
4. Preview card near viewport edge must stay fully on-screen — unit test of `clampCardPosition` in Task 5.
5. Missing/broken image src → gallery shows placeholder card with caption — test in Task 7.

---

### Task 1: Scaffold project, tokens, fonts, layout shell

**Files:**
- Create: Next app at repo root (`create-next-app` TS, Tailwind, App Router, `src/`), `src/app/globals.css` (Tailwind `@theme` with tokens), `src/app/layout.tsx`, `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `vitest.config.ts`, `playwright.config.ts`
- Test: `tests/e2e/shell.spec.ts`

**Interfaces:** Produces `SiteHeader` (nav links: Interactive Map `/`, The Tri-People `/tri-people`, Peace Initiatives `/peace-initiatives`, About & AI Disclosure `/about`), `SiteFooter` (props none; reads `src/data/site.ts` → `site: { course: string; school: string; author: string; section: string; instructor: string; submittedOn: string; url: string }`).

- [ ] Step 1: `git init`; `npx create-next-app@15 . --ts --tailwind --app --src-dir --eslint --no-import-alias`; add `framer-motion vitest @vitejs/plugin-react @testing-library/react jsdom @playwright/test`.
- [ ] Step 2: Write `tests/e2e/shell.spec.ts`: home has text "Sugilanon sa Kalinaw", "Ating Kuwento, Ating Kasaysayan", four nav links with exact labels above, footer contains "GEC110 Final Requirement – History of Filipino Muslims and Indigenous Peoples of Mindanao, Sulu, and Palawan".
- [ ] Step 3: Run `npx playwright test shell` → FAIL.
- [ ] Step 4: Implement tokens, fonts, header (mobile: hamburger → slide-down menu), footer (course line, school, AI disclosure summary + `/about` link, submission block from `site.ts`, instructor = "[Instructor name]" slot).
- [ ] Step 5: Run test → PASS; `npm run build` succeeds.
- [ ] Step 6: Commit `feat: scaffold Next.js shell with Midnight Pro tokens`.

### Task 2: Data types, sources, and integrity tests

**Files:**
- Create: `src/data/types.ts` (exact interfaces from spec), `src/data/sources.ts`, `src/data/regions/index.ts`, `src/data/regions/lanao.ts` (first full region as reference)
- Test: `tests/data/integrity.test.ts`

**Interfaces:** Produces `sources: Source[]`, `getSource(id): Source | undefined`, `regions: Region[]`, `getRegion(slug: string): Region | undefined`, `REGION_SLUGS` (the 10 slugs in spec order).

- [ ] Step 1: Write integrity tests: `regions.length === REGION_SLUGS.length` (skipped until Task 3 via `it.todo` list → convert to real), slugs + svgIds unique, every `cite` id resolves via `getSource`, `culturalMarker.length <= 200`, `media.length >= 4`, every `media` has non-empty `credit` and `license`, `history`/`heritage` each ≥ 3 paragraphs, `youthPeace` ≥ 3 items, `population.year >= 2015`.
- [ ] Step 2: Run `npx vitest run tests/data` → FAIL.
- [ ] Step 3: Research (WebSearch/WebFetch) and write `sources.ts` core bibliography (PSA POPCEN 2020, RA 11054, NCIP, OPAPRU peace-process docs, Majul, Rodil, Abinales) and full `lanao.ts`.
- [ ] Step 4: Run tests → PASS for Lanao.
- [ ] Step 5: Commit `feat: content model, sources, Lanao region`.

### Task 3: Research and write remaining 9 regions

**Files:** Create `src/data/regions/{maguindanao-cotabato,zamboanga,basilan,sulu,tawi-tawi,davao,northern-mindanao,soccsksargen,palawan}.ts`; Modify `src/data/sources.ts`, `src/data/regions/index.ts`.

**Interfaces:** Consumes `Region`, `Source`. Produces full `regions` array.

- [ ] Step 1: Enable the full-count integrity test → FAIL (1/10).
- [ ] Step 2: For each region: research history (pre-colonial polities/trade, colonial impact, land/migration history), heritage (peace pacts, shared markets, languages, IP justice systems), youth & peace pathways; add sources; note PSA 2020 figures.
- [ ] Step 3: Run `npx vitest run tests/data` → PASS (10/10).
- [ ] Step 4: Write `docs/content-review.md` — per-region checklist for proofreaders (names, spellings, figures, tone).
- [ ] Step 5: Commit `feat: content for all MINSUPALA regions`.

### Task 4: SVG map

**Files:** Create `src/components/map/MindanaoMap.tsx`, `src/components/map/paths.ts`; Test: `tests/unit/map.test.tsx`.

**Interfaces:** Produces `MAP_PATHS: Record<string, { d: string; label: { x: number; y: number } }>` keyed by `svgId` plus `caraga` (non-interactive); `<MindanaoMap activeId?: string; onEnter(id, ev); onLeave(); onSelect(id); renderRegion?>` with `viewBox="0 0 1000 1000"`.

- [ ] Step 1: Test: every `region.svgId` exists in `MAP_PATHS`; rendering produces 10 focusable elements with `aria-label` = region name; `caraga` path has no tabIndex.
- [ ] Step 2: Run → FAIL.
- [ ] Step 3: Build stylized paths simplified from public-domain admin boundaries (Natural Earth / PhilGIS-derived GeoJSON, simplified with mapshaper to < 40 KB total, projected to the viewBox via a one-off script in `scripts/build-map.mjs`); Palawan and Sulu/Tawi-Tawi islands placed at relative positions with a subtle sea grid and compass.
- [ ] Step 4: Run → PASS. Commit `feat: stylized MINSUPALA SVG map`.

### Task 5: MapHero interactivity + preview card

**Files:** Create `src/components/map/MapHero.tsx` (client), `src/components/map/RegionPreviewCard.tsx`, `src/lib/position.ts`; Modify `src/app/page.tsx`; Tests: `tests/unit/position.test.ts`, `tests/e2e/map.spec.ts`.

**Interfaces:** `clampCardPosition(pointer: {x,y}, card: {w,h}, viewport: {w,h}, offset = 16): {x,y}`. Card props: `region: Region; onClose(): void; variant: 'floating'|'sheet'`.

- [ ] Step 1: Unit tests: pointer at right edge → card x ≤ viewport.w − w − 8; bottom edge → flips above pointer; normal → pointer + 16.
- [ ] Step 2: E2E: desktop hover Lanao shows card containing "Lanao del Sur & Lake Lanao Basin" and "Explore Deep Dive →"; Tab to region + Enter → URL `/regions/lanao`; mobile (iPhone 13) tap region → sheet visible, tap CTA → navigates; Escape closes.
- [ ] Step 3: Run → FAIL.
- [ ] Step 4: Implement: pointer-type detection (`matchMedia('(hover: hover)')`), card sections (name, Tri-People composition as three colored chips: gold Moro, emerald Lumad, slate Settler; population + year; languages; cultural marker; CTA). Home page: hero headline, map, legend, short "What is MINSUPALA / Tri-People" intro.
- [ ] Step 5: Run → PASS. Commit `feat: interactive map hero with preview card`.

### Task 6: Region profile pages

**Files:** Create `src/app/regions/[slug]/page.tsx`, `src/components/region/{RegionHero,RegionTabs,CitedParagraph}.tsx`, `src/app/not-found.tsx`; Test: `tests/e2e/region.spec.ts`.

**Interfaces:** `generateStaticParams()` from `REGION_SLUGS`; `generateMetadata` → title `"<name> · Sugilanon sa Kalinaw"`; `notFound()` for unknown slug. Tabs keyed `history|heritage|youth|gallery`, synced to `?tab=`.

- [ ] Step 1: E2E: each of 10 slugs renders h1 = region name and 4 tabs; `?tab=heritage` opens Heritage; citation superscript links to `/about#src-<id>`; `/regions/foo` → 404 text "Hindi nakita".
- [ ] Step 2: Run → FAIL.
- [ ] Step 3: Implement hero (image, gradient scrim, name, summary, Tri-People chips), shared `layoutId` transition from map, prev/next region nav.
- [ ] Step 4: Run → PASS. Commit `feat: region profile pages`.

### Task 7: Media gallery + images

**Files:** Create `src/components/region/MediaGallery.tsx`, `src/components/region/Lightbox.tsx`, `public/media/<slug>/*`; Modify `next.config.ts` (images); Test: `tests/unit/gallery.test.tsx`.

- [ ] Step 1: Tests: image item renders `next/image` with alt + credit; `placeholder: true` or missing `src` renders placeholder card with caption and kind icon (audio/video); lightbox opens on click, closes on Escape, arrow keys navigate.
- [ ] Step 2: Run → FAIL.
- [ ] Step 3: Implement; source Wikimedia images per region (download via device shell if container egress blocked), record credit/license in data.
- [ ] Step 4: Run → PASS. Commit `feat: media gallery with credited images`.

### Task 8: Tri-People, Peace Initiatives, About pages

**Files:** Create `src/app/{tri-people,peace-initiatives,about}/page.tsx`, `src/data/{triPeople,peaceTimeline,disclosure}.ts`, `src/components/PeaceTimeline.tsx`; Test: `tests/e2e/pages.spec.ts`.

- [ ] Step 1: E2E: `/tri-people` has three sections (Filipino Muslims / Bangsamoro, Indigenous Peoples / Lumad, Migrant-Settlers); `/peace-initiatives` timeline contains 1976, 1996, 2014, 2018, 2019; `/about` has heading "AI Disclosure", "Academic Integrity", and an element `#src-<id>` for every source; image credits list.
- [ ] Step 2: Run → FAIL.
- [ ] Step 3: Research + write content (cited), implement pages.
- [ ] Step 4: Run → PASS. Commit `feat: tri-people, peace initiatives, about pages`.

### Task 9: Polish, a11y, performance, local verification

**Files:** Modify as needed; Create `README.md`, `src/app/opengraph-image.tsx`.

- [ ] Step 1: Reduced-motion check, color-contrast check (axe via `@axe-core/playwright` on `/` and `/regions/lanao`, zero serious violations).
- [ ] Step 2: `npm run build && npx lighthouse` (mobile) on `/` and `/regions/lanao` → all ≥ 90.
- [ ] Step 3: Full test run: `npx vitest run && npx playwright test` → all PASS.
- [ ] Step 4: Run locally: `npm run dev` → http://localhost:3000 and `npm run build && npm start` (production) — manually click through all routes on desktop + mobile viewport; README documents both commands. `site.url` stays "[Live URL — add after deploy]".
- [ ] Step 5: Local commits only — NO deploy, NO git push (user handles both). Commit `chore: polish and local verification`.
