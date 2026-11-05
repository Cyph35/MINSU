# Sugilanon sa Kalinaw — Stories of Peace: MINSUPALA Interactive Map

GEC110 Final Requirement – History of Filipino Muslims and Indigenous Peoples of Mindanao, Sulu, and Palawan.
Author: Klint Vincent M. Lloren · Instructor: IVY G. MASQUE · MSU–General Santos

Next.js 15 (App Router) · TypeScript · Tailwind v4 · fully static (no backend).

## Run locally
```bash
npm install
npm run dev                 # http://localhost:3000
npm run build && npm start  # production build
```

## Tests
```bash
npm test                    # Vitest: content integrity (citations, media credits) + map/position units
npx playwright install chromium   # first time only
npx playwright test         # E2E: map hover/tap/keyboard, region tabs, gallery, 404, a11y (axe)
```
`npx playwright test` expects a production build (`npm run build`) first.

## Editing content
- Regions: `src/data/regions/<slug>.ts` — every paragraph needs `cite: [sourceId]`.
- Sources: `src/data/sources.ts` · Timeline: `src/data/peaceTimeline.ts` · Tri-People: `src/data/triPeople.ts`
- Submission details (section, proofreaders, live URL): `src/data/site.ts`
- Proofreading checklist: `docs/content-review.md`

## Credits
Images from Wikimedia Commons (authors/licenses on /about). Map boundaries simplified from GADM via github.com/macoymejia/geojsonph (`scripts/build-map.mjs`).
