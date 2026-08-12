# Architecture Decision Records

## ADR-001 — Modular monolith

Status: Accepted

Use a modular monolith because the initial product is a relatively small SEO web application. Complexity belongs in the reusable calculation/content systems, not distributed infrastructure.

## ADR-002 — Central calculation engine

Status: Accepted

All calculators share geometry, unit conversion, volume, weight, pricing and validation modules.

## ADR-003 — Database-independent calculation core

Status: Accepted

Calculations are deterministic and do not inherently require persistence.

## ADR-004 — SEO-first rendering

Status: Accepted

Informational content and calculator pages should be server-rendered/static where practical.

## ADR-005 — AdSense as gated integration

Status: Accepted

Ads are added only after the site is useful, complete and ready for policy review.
