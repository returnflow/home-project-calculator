# Technical Architecture

## Architecture

Use a modular monolith. Do not introduce microservices.

```text
SEO page
  ↓
Calculator UI
  ↓
Calculator configuration
  ↓
Shared calculation engine
  ↓
Typed material/unit data
```

## Suggested source tree

```text
src/
  app/
    calculators/
    api/
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
  components/
    calculator/
    layout/
    seo/
    ui/
  calculators/
    core/
      geometry.ts
      units.ts
      volume.ts
      weight.ts
      pricing.ts
      validation.ts
      rounding.ts
    gravel/
      config.ts
      calculator.ts
  data/
    materials/
  lib/
    analytics/
    seo/
  content/
  types/
```

## Rendering

Use server rendering/static generation for SEO content. Use client components only where interaction requires them.

## Database

The calculation engine must be database-independent. Supabase is optional for future persistence/admin/content management.

## Canonical internal units

Normalize internally before calculation (user chooses imperial or metric measurements and weights):

- length: feet or metres
- area: square feet or square metres
- volume: cubic feet or cubic metres
- weight: pounds or kilograms
- price: USD or EUR (user decides)

Convert at boundaries.

## Material model

Material records must contain:

- id
- name
- category
- density or density range where relevant
- unit
- source
- source URL
- verified date
- notes

Never silently invent density.

## Result contract

```ts
type CalculationResult = {
  areaSqFt?: number
  volumeCuFt?: number
  volumeCuYd?: number
  volumeM3?: number
  weightLb?: number
  weightUsTons?: number
  weightMetricTonnes?: number
  bagCount?: number
  estimatedCost?: number
  recommendedOrderQuantity?: number
  assumptions: string[]
}
```

## Security

No secrets in source. Validate all inputs. Avoid unsafe HTML. Keep dependencies minimal.

## Performance

Target excellent Core Web Vitals. Minimize client JavaScript and third-party blocking scripts.

## Deployment

GitHub → Vercel.

Branches:

- main = production
- dev = integration
- feature/fix/refactor/docs branches for work
