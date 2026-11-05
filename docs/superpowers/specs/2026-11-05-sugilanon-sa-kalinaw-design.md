# Sugilanon sa Kalinaw — Design Spec

**Title:** Sugilanon sa Kalinaw (Stories of Peace: MINSUPALA Interactive Map)
**Subtitle:** Ating Kuwento, Ating Kasaysayan (MINSUPALA History & Peace Portal)
**Purpose:** GEC110 Final Requirement – History of Filipino Muslims and Indigenous Peoples of Mindanao, Sulu, and Palawan. Submitted as a public link.
**Author:** Klint Vincent M. Lloren (sole developer/researcher; group proofreads).
**Success:** factually accurate and cited; respectful terminology; works on desktop + mobile; fast on PH mobile data; Lighthouse ≥ 90 (Perf, A11y, Best Practices, SEO).

## Stack
Next.js 15 (App Router) + TypeScript (strict) + Tailwind CSS v4 + Framer Motion. Fonts via `next/font`: Fraunces (display), Plus Jakarta Sans (body). Vitest for data/unit tests, Playwright for smoke e2e. Deployed on Vercel. No backend, no database, no auth; all content in typed TS data files.

## Design tokens
bg `#0F172A`, surface `#1E293B`, surface-2 `#334155`, text `#F1F5F9`, text-muted `#94A3B8`, gold (history) `#F59E0B`, emerald (peace) `#10B981`. Glass card: `rgba(30,41,59,0.6)` + `backdrop-blur(16px)` + 1px `rgba(255,255,255,0.08)` border. Radius 16px cards. Respect `prefers-reduced-motion`.

## Routes
- `/` — header, MapHero, intro, footer
- `/regions/[slug]` — region profile (static via `generateStaticParams`, per-page metadata)
- `/tri-people` — the three peoples, ethnolinguistic groups, the Tri-People concept
- `/peace-initiatives` — timeline of peace process (Tripoli 1976 → FPA 1996 → CAB 2014 → BOL 2018/plebiscite 2019 → BARMM) + grassroots/IP mechanisms
- `/about` — methodology, AI disclosure, academic integrity, full bibliography, image credits
- custom `not-found`

## Regions (10, slug → display name)
1. `lanao` — Lanao del Sur & Lake Lanao Basin
2. `maguindanao-cotabato` — Maguindanao & Cotabato (Pulangi/Rio Grande basin)
3. `zamboanga` — Zamboanga Peninsula
4. `basilan` — Basilan
5. `sulu` — Sulu Archipelago
6. `tawi-tawi` — Tawi-Tawi
7. `davao` — Davao Region
8. `northern-mindanao` — Bukidnon & Northern Mindanao
9. `soccsksargen` — SOCCSKSARGEN & Sarangani Bay (GenSan)
10. `palawan` — Palawan

Caraga is rendered as a non-interactive landmass labeled "Caraga" so the map stays geographically whole.

## Data model (`src/data/types.ts`)
```ts
type CitationId = string;
interface Cited { text: string; cite: CitationId[] }        // every factual paragraph cites ≥1 source
interface MediaItem { kind: 'image'|'audio'|'video'; src?: string; alt: string; caption: string; credit: string; license: string; placeholder?: boolean }
interface Region {
  slug: string; name: string; shortName: string; svgId: string;
  summary: string;
  triPeople: { moro: string[]; lumad: string[]; settler: string[] };
  population: { value: string; year: number; cite: CitationId[] };
  languages: string[];
  culturalMarker: string;            // ≤ 200 chars, hover card
  heroImage: MediaItem;
  history: Cited[];                  // Historical Roots & Context
  heritage: Cited[];                 // Shared Heritage & Culture
  youthPeace: { title: string; body: string }[];   // Youth & Peace Action
  media: MediaItem[];                // ≥ 4 items
}
interface Source { id: CitationId; author: string; title: string; year: number|string; publisher?: string; url?: string; accessed?: string }
```
Central `src/data/sources.ts` holds all sources; `src/data/regions/<slug>.ts` one per region; `src/data/regions/index.ts` exports `regions: Region[]` and `getRegion(slug)`.

## Research rules
Primary sources: PSA 2020 Census of Population (POPCEN); NCIP; RA 11054 (Bangsamoro Organic Law); OPAPRU; NCCA; Majul *Muslims in the Philippines*; Rodil *The Minoritization of the Indigenous Communities of Mindanao and the Sulu Archipelago*; Abinales *Making Mindanao*; Tan; peer-reviewed articles. Use self-designations (Meranaw, Maguindanaon, Iranun, Tausug, Sama, Bajau/Sama Dilaut, Yakan, Teduray, Lambangian, Manobo, B'laan, T'boli, Higaonon, Talaandig, Subanen, Mandaya, Mansaka, Bagobo/Tagabawa, Pala'wan, Tagbanwa, Batak, Molbog). Conflict described factually, no blame or stereotyping. Peace mechanisms highlighted (e.g., kandori, rido settlement, Teduray tiyawan/kefedewan, Talaandig/Higaonon tampuda hu balagon, Subanen boundary/peace pacts, sandugo). Unverifiable claims are omitted, not hedged. Population figures always dated + cited.

## Images
Wikimedia Commons public-domain / CC-BY / CC-BY-SA only; stored locally in `public/media/` (downloaded by hand when shell egress blocks it), credit + license shown in gallery and on `/about`. No photos of identifiable living public figures. Audio/video = labeled placeholder cards.

## Components
`SiteHeader` (title, subtitle, nav, mobile menu) · `MapHero` (client; inline SVG, hover/focus/tap state) · `MindanaoMap` (pure SVG paths keyed by `svgId`) · `RegionPreviewCard` (glass; follows pointer on desktop, bottom sheet on touch) · `RegionHero`, `RegionTabs` (History | Heritage | Youth & Peace | Gallery; tab state in `?tab=` query) · `CitedParagraph` (renders superscript refs linking to `/about#src-<id>`) · `MediaGallery` (+ lightbox) · `PeaceTimeline` · `SiteFooter`.

## Interaction
Desktop: hover region → highlight (gold stroke, fill lift) + preview card near cursor; click region or CTA → `/regions/[slug]` with shared-element transition (`layoutId`). Keyboard: regions are `role="link"` focusable `<a>`-wrapped paths, Tab cycles, Enter navigates, focus shows the card. Touch: first tap selects + opens bottom-sheet card; CTA navigates. Escape/outside tap closes.

## Footer copy
"GEC110 Final Requirement – History of Filipino Muslims and Indigenous Peoples of Mindanao, Sulu, and Palawan" · Mindanao State University – General Santos · AI disclosure summary + link to /about · Submission block: submitted by, section, instructor (slot), date, live URL.

## AI Disclosure (on /about)
States: AI (Claude) assisted with research synthesis, drafting, and code; all facts were cross-checked against cited sources by the author; group members proofread (names slot); final responsibility rests with the author.

## Quality
TS strict, ESLint, Vitest data-integrity tests (every region complete, every cite resolves, all slugs/svgIds unique and present in SVG, culturalMarker ≤ 200 chars, ≥ 4 media), Playwright smoke (home loads, hover/focus shows card, navigation to each region, mobile viewport bottom sheet). Lighthouse ≥ 90.

## Out of scope
CMS, accounts, comments, i18n beyond English UI with native terms, real audio/video recordings.
