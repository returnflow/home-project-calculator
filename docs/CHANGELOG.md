# Changelog

## 2026-08-12 — PROMPT-008-ANALYTICS

### Added

- `src/lib/analytics/events.ts`: typed `AnalyticsEvent` union, `track()` function (GA4 + console fallback), never throws
- `src/lib/analytics/events.test.ts`: 3 tests (gtag call, no-throw on missing, dev console log)
- Analytics wired into `GravelCalculator`: `calculator_started`, `calculation_completed`, `calculator_error`, `material_selected`
- Analytics wired into `MaterialCalculatorPage`: `related_calculator_clicked`

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (136/136), `next build`: all pass

## 2026-08-12 — PROMPT-007-GRAVEL-CLUSTER

### Added

- `src/app/calculators/gravel/metadata.ts`: server-safe `createMaterialMetadata` factory
- `src/app/calculators/gravel/material-calculator-page.tsx`: reusable page wrapper with breadcrumbs, intro, how-it-works, mistakes, related calculators (client component)
- 6 distinct calculator pages with unique content and intent:
  1. **Pea Gravel Calculator** — decorative paths, playgrounds, lower density awareness
  2. **Driveway Gravel Calculator** — base + surface layers, compaction guidance
  3. **River Rock Calculator** — decorative stone, dry creek beds, erosion control
  4. **Crushed Stone Calculator** — angular stone, construction base, interlocking
  5. **Crusher Run Calculator** — compacted base material, DGA, ordering by volume
  6. **French Drain Gravel Calculator** — drainage stone, clean gravel, trench dimensions
- Each page: unique title/description, canonical, Open Graph, breadcrumbs, internal links
- Sitemap updated with all 7 gravel pages

### Skipped (trivial duplicates)

- Gravel Cost Calculator — same as base calculator with price field
- Gravel Tonnage Calculator — same output as base calculator
- Gravel Coverage Calculator — same calculation as base calculator

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (136/136), `next build` (13 static pages): all pass

## 2026-08-12 — PROMPT-006-SEO-TEMPLATE

### Added

- `src/lib/seo/metadata.ts`: `buildMetadata()` factory enforcing unique title, description, canonical, Open Graph, Twitter cards
- Updated `src/app/sitemap.ts`: dynamic page list with lastModified
- Updated `src/app/calculators/gravel/page.tsx`: uses `buildMetadata`, includes breadcrumbs

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (133/133), `next build`: all pass

## 2026-08-12 — PROMPT-005-GRAVEL-CALCULATOR

### Added

- `src/calculators/gravel/config.ts`: `GravelInputs` type and shape options (rectangle, circle, triangle)
- `src/calculators/gravel/validation.ts`: shape-aware input validation with `GravelValidationErrors`
- `src/calculators/gravel/calculator.ts`: `calculateGravel` pure function using shared engine + material data
- `src/app/calculators/gravel/gravel-calculator.tsx`: interactive client component with shape switching, material select, live error clearing
- `src/app/calculators/gravel/page.tsx`: server-rendered page with SEO metadata, how-it-works, common mistakes, related calculators

### Tests

- 7 new unit tests (133 total): rectangle, circle, triangle, cost, invalid inputs, unknown material, assumptions

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (133/133), `next build`: all pass

## 2026-08-12 — PROMPT-004-MATERIAL-DATA

### Added

- `src/data/materials/material.ts`: typed `Material` and `MaterialSource` with provenance fields (source name, URL, verified date, unit, notes)
- `src/data/materials/gravel.ts`: 6 gravel materials with verified bulk densities
  - Gravel, loose, dry: 105 lb/ft³ (Engineering ToolBox)
  - Pea Gravel: 95–105 lb/ft³
  - River Rock: 89–115 lb/ft³
  - Crushed Stone: 95–110 lb/ft³
  - Crusher Run: 120–140 lb/ft³
  - French Drain Gravel: 95–105 lb/ft³
- Density helpers: `getDensityValue`, `getDensityRange`, `formatDensity`

### Tests

- 14 new unit tests (126 total): material provenance, density validity, uniqueness, range formatting

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (126/126), `next build`: all pass

## 2026-08-12 — PROMPT-003-CALCULATION-ENGINE

### Added

- `src/calculators/core/geometry.ts`: rectangle, circle, triangle area + multi-shape composition (`totalArea`)
- `src/calculators/core/volume.ts`: `volumeFromAreaAndDepth`
- `src/calculators/core/weight.ts`: `weightFromVolumeAndDensity` (bulk density, never invented)
- `src/calculators/core/bags.ts`: `bagCount` with ceiling, never rounds down
- `src/calculators/core/waste.ts`: `applyWaste` with explicit base/adjusted separation
- `src/calculators/core/pricing.ts`: `calculateCost`
- `src/calculators/core/validation.ts`: `validatePositiveNumber`, `validateNonNegativeNumber`, `validateRange` with typed `ValidationError`
- `src/calculators/core/formatting.ts`: `formatNumber`, `formatCurrency`, `formatInteger` — presentation-only, full precision preserved internally
- Extended `src/calculators/core/units.ts`: metres↔feet, sq m↔sq ft, cu m↔cu ft, kg↔lb

### Tests

- 89 new unit tests (112 total): geometry (10), volume (4), weight (4), bags (5), waste (5), pricing (5), validation (14), formatting (13), units extended (13), known-answer regression fixtures (16)

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (112/112), `next build`: all pass

## 2026-08-11 — PROMPT-002-DESIGN-SYSTEM

### Added

- Design tokens via Tailwind v4 `@theme` in `globals.css`: restrained primary (green) palette, surface/border colors
- Base typography (h1–h4, paragraph rhythm, visible `:focus-visible`, `prefers-reduced-motion`)
- UI primitives (`src/components/ui`): `Button` (primary/secondary), `Input`/`Select` (`FieldShell` with label, hint and error wiring via `aria-describedby`/`aria-invalid`), `Card`, `ResultCard` (definition list, `aria-live="polite"`), `Alert` (info/warning/error, `role="status"`/`alert`), `cn` helper
- Layout components (`src/components/layout`): `SiteHeader` (skip link + static nav), `SiteFooter`, `Container`
- SEO components (`src/components/seo`): `Breadcrumbs` (ARIA breadcrumb pattern, `aria-current="page"`)
- Calculator skeleton (`src/components/calculator`): `CalculatorSection`, `CalculatorFieldset` — structure only, no formulas
- Root layout now composes header/footer/main landmarks; home page uses the new typography

### Tests

- 17 new unit tests (23 total): field labeling/hint/error association, alert roles, result card live region and section label, breadcrumb semantics, fieldset group naming, `cn`

### Validation

- `tsc --noEmit`, `eslint`, `vitest run` (23/23), `next build`, `playwright test` (1/1): all pass

## 2026-08-11 — PROMPT-001-BOOTSTRAP

### Added

- Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS 4
- ESLint (eslint-config-next) + Prettier (eslint-config-prettier)
- Vitest + React Testing Library (`npm test`), 6 unit tests for `calculators/core/units.ts`
- Playwright e2e setup (`npm run test:e2e`) with home page smoke test
- Agreed source structure: `src/components`, `src/calculators`, `src/data/materials`, `src/lib`, `src/content`, `src/types`
- Shared `CalculationResult` type per architecture contract
- Canonical unit conversion helpers (`src/calculators/core/units.ts`)
- Minimal static home page, `robots.ts`, `sitemap.ts`
- Scripts: `dev`, `build`, `start`, `lint`, `format`, `format:check`, `typecheck`, `test`, `test:e2e`

### Not built (per prompt scope)

Calculators, database, authentication, AdSense.

## 2026-08-11

- Created AI Developer Pack.
- Defined product, architecture, calculation, SEO, monetization and AI-governance specifications.
