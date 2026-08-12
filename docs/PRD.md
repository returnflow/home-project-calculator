# Product Requirements Document

## Product vision

A trustworthy calculator platform that helps homeowners and tradespeople determine material quantities, weights, bags, costs and project requirements.

## Users

- DIY homeowners
- Home-project planners
- Small contractors
- Landscapers/gardeners

## Core jobs-to-be-done

- How much material do I need?
- How many cubic yards/tons/bags should I buy?
- What waste allowance should I use?
- What will it cost?
- How do I convert volume to weight?

## Product principles

1. Correctness over feature count.
2. Explain assumptions.
3. Centralize formulas.
4. Make useful results immediate.
5. Mobile-first.
6. Fast.
7. Accessible.
8. Search-engine discoverable.
9. Never fabricate physical data.
10. Never create thin SEO pages merely to target keyword variants.

## Calculator UX

Inputs should be simple and clearly labelled. Outputs should include, where applicable:

- area
- volume
- cubic yards
- cubic metres
- weight
- US tons
- metric tonnes
- bags
- estimated cost
- recommended purchase quantity

## Error handling

Invalid or incomplete inputs must produce clear human-readable errors without destroying valid user input.

## Content requirements

Each major calculator page should contain:

- title and concise introduction
- calculator
- results
- explanation
- formula
- worked example
- assumptions
- material notes
- buying guidance
- common mistakes
- FAQ where useful
- related calculators

## SEO

Each indexable page must have:

- one primary search intent
- unique title/H1
- canonical URL
- useful original content
- internal links
- valid sitemap inclusion

## Analytics

Track only useful product events:

- calculator_started
- calculation_completed
- calculator_error
- material_selected
- unit_changed
- result_copied
- print_clicked
- related_calculator_clicked

## Definition of Done

A calculator is complete only when calculation tests, responsive UI, accessibility, critical E2E tests, SEO metadata, internal links, content, analytics, performance checks and documentation are complete.
