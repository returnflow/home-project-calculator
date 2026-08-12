# Project State

## Phase

Phase 3 — In Progress

## Current milestone

All 5 AdSense blockers resolved. Site ready for AdSense application review.

## Completed

- Business model defined
- Initial calculator cluster defined
- Technical architecture defined
- Calculation engine specification defined
- SEO architecture defined
- AdSense governance defined
- AI development playbook defined
- Drift prevention system defined
- Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS 4 initialized
- ESLint + Prettier configured
- Vitest configured (6 unit tests passing)
- Playwright configured (e2e smoke test passing)
- Agreed source structure created under src/
- Minimal static home page, robots.ts and sitemap.ts
- Shared `CalculationResult` type and canonical unit conversion helpers scaffolded
- Design system: tokens, typography, buttons, inputs/selects, cards, result cards, alerts, breadcrumbs, header/footer navigation, calculator section skeleton
- Design system accessibility: skip link, labelled fields with error/hint association, live-region results, ARIA breadcrumbs, keyboard-visible focus
- Shared calculation engine: geometry, unit conversions, volume, weight, bags, waste, pricing, validation, formatting
- Calculation engine tests: 112 unit tests including known-answer regression fixtures
- Material data architecture with provenance: `Material` type, `MaterialSource`, density helpers
- Gravel material dataset: 6 materials with verified bulk densities and source URLs
- Material tests: 14 tests for provenance, density validity, uniqueness
- Gravel Calculator: full page with shape selection, material selection, depth, waste, optional pricing
- Gravel Calculator tests: 7 domain tests
- SEO template: `buildMetadata` factory, canonical URLs, Open Graph, Twitter cards
- Sitemap: all 7 gravel pages included
- Gravel calculator cluster (7 pages): Gravel, Pea Gravel, Driveway Gravel, River Rock, Crushed Stone, Crusher Run, French Drain Gravel — each with unique content, intent, and internal links
- Analytics: `track()` function with typed `AnalyticsEvent` union, GA4 integration, console fallback in dev, never throws
- Analytics wired: `calculator_started`, `calculation_completed`, `calculator_error`, `material_selected`, `related_calculator_clicked`
- Analytics tests: 3 tests (gtag call, no-throw, dev console log)
- Typecheck, lint, unit tests (136), e2e test and production build (13 static pages) all green
- GitHub repository public at `returnflow/home-project-calculator`
- GitHub Actions CI/CD workflow for automated Pages deployment
- Live staging: `https://returnflow.github.io/home-project-calculator/`
- Home page: real content with calculator grid and feature list
- `/calculators` index page: all 7 calculators with descriptions
- Privacy Policy page with cookie and analytics disclosure
- Cookie consent banner with Accept/Decline, linked to Privacy Policy
- Footer expanded with Home, Calculators, Privacy links
- Analytics gated behind cookie consent

## Next

1. Apply for AdSense.
2. Choose final domain/brand for custom domain.
3. Configure Google Search Console.

## First production calculator

Gravel Calculator — live at `/calculators/gravel`.

## Open decisions

- Final domain/brand
- Target market/language
- Exact material source hierarchy
- Consent-management implementation
- Whether Supabase is needed for MVP

## Do not build yet

- Accounts
- Saved calculations
- AI chatbot
- Marketplace
- Paid acquisition
- Mass programmatic content
- AdSense integration