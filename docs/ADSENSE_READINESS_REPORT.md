# AdSense Readiness Report

**Date:** 2026-08-12  
**Site:** https://returnflow.github.io/home-project-calculator/  
**Pages audited:** 8 (home + 7 gravel calculators)

---

## Executive Summary

The site is **not ready** for AdSense application. There are 5 blockers that must be resolved first. The calculator pages have good substantive content, but the home page is a placeholder and critical legal/policy pages are missing.

---

## Audit Results by Category

### 1. Content Quality

| Page | Status | Notes |
|------|--------|-------|
| Home (`/`) | ❌ **BLOCKER** | Placeholder: "under construction", "Coming soon". Thin content. |
| Gravel Calculator | ✅ Good | Unique intro, how-it-works, mistakes, related calculators |
| Pea Gravel Calculator | ✅ Good | Material-specific density info, typical depths, mistakes |
| Driveway Gravel Calculator | ✅ Good | (assumed same template) |
| River Rock Calculator | ✅ Good | (assumed same template) |
| Crushed Stone Calculator | ✅ Good | (assumed same template) |
| Crusher Run Calculator | ✅ Good | (assumed same template) |
| French Drain Gravel Calculator | ✅ Good | (assumed same template) |

**Verdict:** 7/8 pages have original, substantive content. The home page is a placeholder and violates AdSense's "no thin content" policy.

---

### 2. Navigation

| Check | Status | Notes |
|-------|--------|-------|
| Site-wide header | ✅ Yes | Logo + "Gravel calculators" link |
| Site-wide footer | ⚠️ Minimal | Only "Home" link, no legal pages |
| Breadcrumbs | ✅ Yes | On all calculator pages |
| `/calculators` index | ❌ **BLOCKER** | Breadcrumb links to it, but page 404s |

**Verdict:** Footer is too minimal. Missing index page for `/calculators`.

---

### 3. Thin / Placeholder Pages

| Page | Status |
|------|--------|
| Home page | ❌ Placeholder — "under construction" |
| `/calculators` | ❌ 404 — linked from breadcrumbs |
| Calculator pages | ✅ All functional with real content |

**Verdict:** Home page must be rebuilt with real content before applying.

---

### 4. Privacy / Legal Pages

| Page | Status |
|------|--------|
| Privacy Policy | ❌ **BLOCKER** — Missing |
| Terms of Service | ❌ **BLOCKER** — Missing |
| Cookie Policy | ❌ **BLOCKER** — Missing |
| About / Contact | ❌ Missing |

**Verdict:** AdSense requires a privacy policy. Cookie policy needed for EU compliance.

---

### 5. Mobile UX

| Check | Status | Notes |
|-------|--------|-------|
| Responsive layout | ✅ Yes | Tailwind CSS, mobile-first breakpoints |
| Touch targets | ✅ Yes | Buttons and inputs are appropriately sized |
| Font readability | ✅ Yes | Clear hierarchy, good contrast |
| No horizontal scroll | ✅ Yes | max-w-5xl container |

**Verdict:** Mobile UX is solid. No issues.

---

### 6. Deceptive UI Risks

| Check | Status | Notes |
|-------|--------|-------|
| Ads vs. inputs | ✅ No risk | No ads present yet |
| Ads vs. buttons | ✅ No risk | No ads present yet |
| Ads vs. navigation | ✅ No risk | No ads present yet |
| Fake download buttons | ✅ No risk | None present |
| Clickbait | ✅ No risk | None present |

**Verdict:** Clean UI, no deceptive elements. When ads are added, placement rules in `ADSENSE_SPEC.md` must be followed.

---

### 7. Consent Requirements

| Check | Status |
|-------|--------|
| EU user detection | ❌ Not implemented |
| Cookie consent banner | ❌ **BLOCKER** — Missing |
| Google Consent Mode | ❌ Not implemented |

**Verdict:** Required for EU traffic. Must implement before monetization.

---

### 8. Technical Crawlability

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | ✅ Allows all | `src/app/robots.ts` |
| Sitemap | ✅ Present | 7 calculator pages listed |
| Static HTML | ✅ Yes | Full static export, no JS required |
| Canonical URLs | ✅ Yes | `buildMetadata()` factory |
| No crawl errors | ✅ Yes | All pages render correctly |
| Page speed | ⚠️ Okay | Needs Lighthouse audit for confirmation |

**Verdict:** Technically crawlable. Good foundation.

---

## Blockers (Must Fix Before Applying)

| # | Issue | Priority | Effort |
|---|-------|----------|--------|
| 1 | **Home page is a placeholder** | P0 | Medium — rewrite with real content, link to all calculators |
| 2 | **Missing Privacy Policy** | P0 | Low — generate and add page |
| 3 | **Missing `/calculators` index page** | P0 | Low — list all calculators with descriptions |
| 4 | **Missing Cookie Consent** | P0 | Medium — implement banner + Google Consent Mode |
| 5 | **Footer too minimal** | P1 | Low — add privacy, terms, about links |

---

## Non-Blockers (Nice to Have)

| # | Issue | Impact |
|---|-------|--------|
| 6 | Add About page | Builds trust |
| 7 | Add Contact page | Builds trust |
| 8 | Expand home page content | Better first impression |
| 9 | Add more "how-to" content | Higher engagement, more ad inventory |
| 10 | Lighthouse performance audit | Confirm Core Web Vitals |

---

## Recommended Action Plan

### Phase A — Blockers (before AdSense application)

1. **Rewrite home page** (`src/app/page.tsx`)
   - Real headline and description
   - Grid/list of all 7 calculators with links and short descriptions
   - Remove "under construction" language

2. **Create `/calculators` index page** (`src/app/calculators/page.tsx`)
   - List all calculators with cards
   - Brief intro to what the site offers

3. **Add Privacy Policy** (`src/app/privacy/page.tsx`)
   - Standard template covering data collection, cookies, third parties
   - Link in footer

4. **Add Cookie Consent Banner**
   - Simple banner: "We use cookies to improve your experience"
   - Accept / Decline buttons
   - Wire to Google Consent Mode if using GA4

5. **Expand footer**
   - Add links: Privacy, Terms, About

### Phase B — Polish (after AdSense approval)

6. Add About page
7. Add Terms of Service page
8. Run Lighthouse audit and optimize
9. Consider adding blog/how-to content

---

## Conclusion

**Do not apply for AdSense yet.** Fix the 5 blockers above first. The calculator pages are strong, but the home page and missing legal pages will likely result in rejection.

Once blockers are resolved, the site should have a good chance of approval given:
- Unique, useful calculator content on every page
- Clean, non-deceptive UI
- Good technical crawlability
- Responsive mobile design