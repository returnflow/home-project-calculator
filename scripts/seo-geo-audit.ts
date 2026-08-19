/**
 * SEO/GEO Audit Script
 *
 * Crawls the built `dist/` output, scores every page across:
 *   - crawlability (robots, canonical, sitemap)
 *   - indexation (title, description, viewport, lang)
 *   - page intent (H1, answer-first content, calculator presence)
 *   - titles (length, uniqueness, keyword targeting)
 *   - internal links (href values, anchor text, broken links)
 *   - structured data (JSON-LD, schema types)
 *   - source citations (authority links, data attribution)
 *   - answer-first content (FAQ, direct answers, featured-snippet readiness)
 *
 * Outputs a ranked gap report and benchmark JSON.
 */

import * as fs from 'fs'
import * as path from 'path'

const DIST = path.resolve(process.cwd(), 'dist')
const REPORT_PATH = path.resolve(process.cwd(), 'seo-geo-audit-report.json')
const BENCHMARK_PATH = path.resolve(process.cwd(), 'seo-geo-benchmark.json')

type Severity = 'P0' | 'P1' | 'P2' | 'P3'

type PageAudit = {
  urlPath: string
  filePath: string
  title: string
  titleLength: number
  description: string
  descriptionLength: number
  canonical: string | null
  ogTitle: string | null
  ogDescription: string | null
  ogUrl: string | null
  hasViewport: boolean
  hasLang: boolean
  h1: string | null
  h1Count: number
  hasCalculator: boolean
  hasAnswerFirst: boolean
  hasFAQ: boolean
  hasHowItWorks: boolean
  hasFormula: boolean
  internalLinks: { href: string; text: string; isBroken: boolean }[]
  structuredData: { type: string; raw: string }[]
  hasBreadcrumbSchema: boolean
  hasFAQSchema: boolean
  hasHowToSchema: boolean
  hasSoftwareApplicationSchema: boolean
  citationCount: number
  sourceLinks: string[]
  noIndex: boolean
  issues: { severity: Severity; category: string; message: string; fix: string }[]
  score: number
}

type Benchmark = {
  timestamp: string
  totalPages: number
  avgScore: number
  p0Count: number
  p1Count: number
  p2Count: number
  p3Count: number
  pages: PageAudit[]
  topIssues: { severity: Severity; category: string; message: string; count: number; fix: string }[]
}

const TARGET_QUERIES: Record<string, string[]> = {
  '/calculators/gravel': ['gravel calculator', 'how much gravel do i need', 'gravel yard calculator'],
  '/calculators/gravel/pea-gravel-calculator': ['pea gravel calculator', 'how much pea gravel do i need'],
  '/calculators/gravel/driveway-gravel-calculator': ['driveway gravel calculator', 'how much gravel for driveway'],
  '/calculators/gravel/river-rock-calculator': ['river rock calculator', 'how much river rock do i need'],
  '/calculators/gravel/crushed-stone-calculator': ['crushed stone calculator', 'how much crushed stone do i need'],
  '/calculators/gravel/crusher-run-calculator': ['crusher run calculator', 'how much crusher run do i need'],
  '/calculators/gravel/french-drain-gravel-calculator': ['french drain gravel calculator', 'drainage stone calculator'],
  '/calculators': ['home project calculators', 'landscaping calculators'],
  '/': ['free gravel calculator', 'home project calculator'],
}

const EXPECTED_SITEMAP_URLS = new Set([
  '/',
  '/calculators',
  '/calculators/gravel',
  '/calculators/gravel/pea-gravel-calculator',
  '/calculators/gravel/driveway-gravel-calculator',
  '/calculators/gravel/river-rock-calculator',
  '/calculators/gravel/crushed-stone-calculator',
  '/calculators/gravel/crusher-run-calculator',
  '/calculators/gravel/french-drain-gravel-calculator',
])

function findHtmlFiles(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      findHtmlFiles(full, files)
    } else if (entry.name.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

function extractMeta(html: string, name: string): string | null {
  const match = html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i'))
  if (match) return match[1]
  const ogMatch = html.match(new RegExp(`<meta[^>]+property=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i'))
  if (ogMatch) return ogMatch[1]
  return null
}

function extractCanonical(html: string): string | null {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
  return match ? match[1] : null
}

function extractStructuredData(html: string): { type: string; raw: string }[] {
  const results: { type: string; raw: string }[] = []
  const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let m: RegExpExecArray | null
  while ((m = regex.exec(html)) !== null) {
    try {
      const json = JSON.parse(m[1])
      const types: string[] = []
      const walk = (obj: unknown) => {
        if (Array.isArray(obj)) obj.forEach(walk)
        else if (obj && typeof obj === 'object') {
          if ('@type' in obj) types.push(String((obj as Record<string, unknown>)['@type']))
          Object.values(obj).forEach(walk)
        }
      }
      walk(json)
      results.push({ type: types.join(', ') || 'Unknown', raw: m[1].slice(0, 500) })
    } catch {
      results.push({ type: 'Invalid JSON', raw: m[1].slice(0, 200) })
    }
  }
  return results
}

function extractH1(html: string): { text: string | null; count: number } {
  const matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)]
  const texts = matches.map((m) => m[1].replace(/<[^>]+>/g, '').trim())
  return { text: texts[0] ?? null, count: texts.length }
}

function auditPage(filePath: string): PageAudit {
  const html = fs.readFileSync(filePath, 'utf-8')
  // Next.js static export with basePath puts files under dist/home-project-calculator/...
  const rawRel = filePath.replace(DIST, '').replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/\.html$/, '') || '/'
  const relPath = rawRel.replace(/^\/home-project-calculator/, '') || '/'
  const urlPath = `/home-project-calculator${relPath}`

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i)
  const title = titleMatch ? titleMatch[1].trim() : ''
  const description = extractMeta(html, 'description') ?? ''
  const canonical = extractCanonical(html)
  const ogTitle = extractMeta(html, 'og:title')
  const ogDescription = extractMeta(html, 'og:description')
  const ogUrl = extractMeta(html, 'og:url')
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html)
  const hasLang = /<html[^>]+lang=["']en["']/i.test(html)
  const h1Result = extractH1(html)
  const hasCalculator = /input.*type=["']number["']/i.test(html)
  const hasAnswerFirst = /<section[^>]*>[\s\S]*?(how (much|many)|answer|result|calculate)/i.test(html)
  const hasFAQ = /FAQ|frequently asked|question.*answer/i.test(html)
  const hasHowItWorks = /how it works|how (the calculator|this calculator)/i.test(html)
  const hasFormula = /formula|Volume =|Area.*Depth|density/i.test(html)
  const structuredData = extractStructuredData(html)
  const hasBreadcrumbSchema = structuredData.some((s) => s.type.includes('BreadcrumbList'))
  const hasFAQSchema = structuredData.some((s) => s.type.includes('FAQPage'))
  const hasHowToSchema = structuredData.some((s) => s.type.includes('HowTo'))
  const hasSoftwareApplicationSchema = structuredData.some((s) => s.type.includes('SoftwareApplication'))
  const noIndex = /robots["'][^>]+content=["'][^"']*noindex/i.test(html) || /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)

  // Internal links
  const linkMatches = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
  const internalLinks = linkMatches
    .map((m) => {
      const href = m[1]
      const text = m[2].replace(/<[^>]+>/g, '').trim()
      const isInternal = href.startsWith('/') && !href.startsWith('//')
      const isBroken = isInternal && !href.startsWith('/home-project-calculator') && href !== '/'
      return { href, text, isBroken: isInternal && isBroken }
    })
    .filter((l) => l.href.startsWith('/') && !l.href.startsWith('//'))

  // Citations / source links
  const allLinks = linkMatches.map((m) => m[1])
  const sourceLinks = allLinks.filter((h) => /astm|usgs|ncma|nrcs|epa|engineering|wikipedia|university|gov|edu/i.test(h))
  const citationCount = sourceLinks.length

  const issues: PageAudit['issues'] = []
  let score = 100

  // --- CRAWLABILITY ---
  if (!canonical) {
    issues.push({ severity: 'P0', category: 'crawlability', message: 'Missing canonical tag', fix: 'Add <link rel="canonical" href="...">' })
    score -= 15
  } else if (!canonical.includes('/home-project-calculator')) {
    issues.push({ severity: 'P0', category: 'crawlability', message: `Canonical points to wrong basePath: ${canonical}`, fix: 'Canonical must include /home-project-calculator basePath' })
    score -= 15
  }

  if (noIndex) {
    issues.push({ severity: 'P0', category: 'crawlability', message: 'Page has noindex directive', fix: 'Remove noindex if page should be indexed' })
    score -= 20
  }

  // --- INDEXATION ---
  if (!title) {
    issues.push({ severity: 'P0', category: 'indexation', message: 'Missing <title>', fix: 'Add unique <title>' })
    score -= 15
  } else if (title.length < 30) {
    issues.push({ severity: 'P1', category: 'indexation', message: `Title too short (${title.length} chars)`, fix: 'Expand title to 50-60 chars with primary keyword' })
    score -= 5
  } else if (title.length > 70) {
    issues.push({ severity: 'P1', category: 'indexation', message: `Title too long (${title.length} chars)`, fix: 'Trim title to ≤60 chars' })
    score -= 3
  }

  if (!description) {
    issues.push({ severity: 'P0', category: 'indexation', message: 'Missing meta description', fix: 'Add unique meta description' })
    score -= 15
  } else if (description.length < 80) {
    issues.push({ severity: 'P1', category: 'indexation', message: `Description too short (${description.length} chars)`, fix: 'Expand to 120-160 chars' })
    score -= 5
  } else if (description.length > 170) {
    issues.push({ severity: 'P2', category: 'indexation', message: `Description too long (${description.length} chars)`, fix: 'Trim to ≤160 chars' })
    score -= 2
  }

  if (!hasViewport) {
    issues.push({ severity: 'P1', category: 'indexation', message: 'Missing viewport meta', fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">' })
    score -= 5
  }

  if (!hasLang) {
    issues.push({ severity: 'P1', category: 'indexation', message: 'Missing lang attribute on <html>', fix: 'Add lang="en" to <html>' })
    score -= 3
  }

  // --- PAGE INTENT / ANSWER-FIRST ---
  if (!h1Result.text) {
    issues.push({ severity: 'P0', category: 'page-intent', message: 'Missing H1', fix: 'Add descriptive H1 matching target query intent' })
    score -= 15
  }

  const isCalculatorToolPage = relPath.endsWith('-calculator') || relPath === '/calculators/gravel'

  if (!hasCalculator && isCalculatorToolPage) {
    issues.push({ severity: 'P0', category: 'page-intent', message: 'Calculator page lacks calculator UI signals', fix: 'Ensure calculator inputs/results are present in static HTML' })
    score -= 10
  }

  if (!hasAnswerFirst && isCalculatorToolPage) {
    issues.push({ severity: 'P1', category: 'answer-first', message: 'No clear answer-first content block', fix: 'Add a section that directly answers "how much X do I need" before the calculator' })
    score -= 8
  }

  if (!hasHowItWorks && isCalculatorToolPage) {
    issues.push({ severity: 'P2', category: 'answer-first', message: 'Missing "How It Works" section', fix: 'Add methodology section with formula and worked example' })
    score -= 4
  }

  if (!hasFormula && isCalculatorToolPage) {
    issues.push({ severity: 'P2', category: 'answer-first', message: 'No formula visible on page', fix: 'Display the calculation formula explicitly' })
    score -= 3
  }

  // Only require FAQ on calculator pages and key landing pages
  const isIndexPage = relPath === '/' || relPath === '/calculators'
  if (!hasFAQ && (relPath.includes('calculator') || isIndexPage)) {
    issues.push({ severity: 'P1', category: 'answer-first', message: 'Missing FAQ section', fix: 'Add FAQ with 3-5 questions targeting long-tail queries' })
    score -= 6
  }

  // --- STRUCTURED DATA ---
  if (structuredData.length === 0) {
    issues.push({ severity: 'P0', category: 'structured-data', message: 'No JSON-LD structured data', fix: 'Add FAQPage, HowTo, SoftwareApplication, BreadcrumbList schemas' })
    score -= 15
  } else {
    if (!hasBreadcrumbSchema) {
      issues.push({ severity: 'P1', category: 'structured-data', message: 'Missing BreadcrumbList schema', fix: 'Add BreadcrumbList JSON-LD' })
      score -= 6
    }
    if (!hasFAQSchema && hasFAQ && isCalculatorToolPage) {
      issues.push({ severity: 'P1', category: 'structured-data', message: 'FAQ section exists but no FAQPage schema', fix: 'Add FAQPage JSON-LD matching on-page FAQ content' })
      score -= 6
    }
    if (!hasHowToSchema && hasHowItWorks && isCalculatorToolPage) {
      issues.push({ severity: 'P2', category: 'structured-data', message: 'How It Works section exists but no HowTo schema', fix: 'Add HowTo JSON-LD for the calculation steps' })
      score -= 4
    }
    if (!hasSoftwareApplicationSchema && hasCalculator) {
      issues.push({ severity: 'P1', category: 'structured-data', message: 'Calculator present but no SoftwareApplication schema', fix: 'Add SoftwareApplication JSON-LD for the calculator tool' })
      score -= 6
    }
  }

  // --- SOURCE CITATIONS ---
  if (citationCount === 0 && isCalculatorToolPage) {
    issues.push({ severity: 'P1', category: 'source-citations', message: 'No external source citations', fix: 'Link to ASTM, USGS, or engineering references for density data' })
    score -= 5
  }

  // --- INTERNAL LINKS ---
  const brokenLinks = internalLinks.filter((l) => l.isBroken)
  if (brokenLinks.length > 0) {
    issues.push({
      severity: 'P0',
      category: 'internal-links',
      message: `${brokenLinks.length} broken internal link(s): ${brokenLinks.map((l) => l.href).join(', ')}`,
      fix: 'Update hrefs to include /home-project-calculator basePath',
    })
    score -= 10
  }

  if (internalLinks.length < 3 && relPath !== '/') {
    issues.push({ severity: 'P1', category: 'internal-links', message: `Only ${internalLinks.length} internal links`, fix: 'Add 3-5 contextual internal links to related calculators' })
    score -= 5
  }

  // Target query mapping
  const queries = TARGET_QUERIES[relPath]
  if (queries && !queries.some((q) => title.toLowerCase().includes(q.toLowerCase()) || description.toLowerCase().includes(q.toLowerCase()))) {
    issues.push({
      severity: 'P1',
      category: 'page-intent',
      message: `Title/description do not target expected queries: ${queries.join(', ')}`,
      fix: 'Include primary keyword in title and description',
    })
    score -= 5
  }

  return {
    urlPath,
    filePath,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    hasViewport,
    hasLang,
    h1: h1Result.text,
    h1Count: h1Result.count,
    hasCalculator,
    hasAnswerFirst,
    hasFAQ,
    hasHowItWorks,
    hasFormula,
    internalLinks,
    structuredData,
    hasBreadcrumbSchema,
    hasFAQSchema,
    hasHowToSchema,
    hasSoftwareApplicationSchema,
    citationCount,
    sourceLinks,
    noIndex,
    issues,
    score: Math.max(0, score),
  }
}

function runAudit(): Benchmark {
  const htmlFiles = findHtmlFiles(DIST)
  const pages = htmlFiles.map(auditPage)

  // Sitemap/crawlability audit: check expected URLs exist
  const crawledPaths = new Set(pages.map((p) => p.urlPath.replace('/home-project-calculator', '')))
  for (const expected of EXPECTED_SITEMAP_URLS) {
    if (!crawledPaths.has(expected) && expected !== '/') {
      // synthetic page for missing file
      pages.push({
        urlPath: `/home-project-calculator${expected}`,
        filePath: '(missing)',
        title: '',
        titleLength: 0,
        description: '',
        descriptionLength: 0,
        canonical: null,
        ogTitle: null,
        ogDescription: null,
        ogUrl: null,
        hasViewport: false,
        hasLang: false,
        h1: null,
        h1Count: 0,
        hasCalculator: false,
        hasAnswerFirst: false,
        hasFAQ: false,
        hasHowItWorks: false,
        hasFormula: false,
        internalLinks: [],
        structuredData: [],
        hasBreadcrumbSchema: false,
        hasFAQSchema: false,
        hasHowToSchema: false,
        hasSoftwareApplicationSchema: false,
        citationCount: 0,
        sourceLinks: [],
        noIndex: false,
        issues: [{ severity: 'P0', category: 'crawlability', message: 'Page referenced in sitemap but not built', fix: 'Ensure page route exists and builds successfully' }],
        score: 0,
      })
    }
  }

  // Deduplicate: keep highest-scoring entry per unique URL path
  const pageMap = new Map<string, PageAudit>()
  for (const page of pages) {
    const existing = pageMap.get(page.urlPath)
    if (!existing || page.score > existing.score) {
      pageMap.set(page.urlPath, page)
    }
  }
  const dedupedPages = Array.from(pageMap.values())

  const allIssues = dedupedPages.flatMap((p) => p.issues)
  const issueCounts = new Map<string, { severity: Severity; category: string; message: string; fix: string; count: number }>()
  for (const issue of allIssues) {
    const key = `${issue.severity}|${issue.category}|${issue.message}`
    const existing = issueCounts.get(key)
    if (existing) {
      existing.count++
    } else {
      issueCounts.set(key, { ...issue, count: 1 })
    }
  }

  const topIssues = Array.from(issueCounts.values())
    .sort((a, b) => {
      const severityOrder = { P0: 0, P1: 1, P2: 2, P3: 3 }
      if (severityOrder[a.severity] !== severityOrder[b.severity]) return severityOrder[a.severity] - severityOrder[b.severity]
      return b.count - a.count
    })
    .slice(0, 15)

  const p0Count = allIssues.filter((i) => i.severity === 'P0').length
  const p1Count = allIssues.filter((i) => i.severity === 'P1').length
  const p2Count = allIssues.filter((i) => i.severity === 'P2').length
  const p3Count = allIssues.filter((i) => i.severity === 'P3').length

  const benchmark: Benchmark = {
    timestamp: new Date().toISOString(),
    totalPages: dedupedPages.length,
    avgScore: Math.round((dedupedPages.reduce((s, p) => s + p.score, 0) / dedupedPages.length) * 10) / 10,
    p0Count,
    p1Count,
    p2Count,
    p3Count,
    pages: dedupedPages,
    topIssues,
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify(benchmark, null, 2))
  fs.writeFileSync(BENCHMARK_PATH, JSON.stringify(benchmark, null, 2))
  return benchmark
}

function printReport(benchmark: Benchmark) {
  console.log('\n╔══════════════════════════════════════════════════════════════════════╗')
  console.log('║           SEO/GEO AUDIT REPORT                                       ║')
  console.log('╠══════════════════════════════════════════════════════════════════════╣')
  console.log(`  Timestamp: ${benchmark.timestamp}`)
  console.log(`  Pages audited: ${benchmark.totalPages}`)
  console.log(`  Average score: ${benchmark.avgScore}/100`)
  console.log(`  P0 (critical): ${benchmark.p0Count}  |  P1 (high): ${benchmark.p1Count}  |  P2 (medium): ${benchmark.p2Count}  |  P3 (low): ${benchmark.p3Count}`)
  console.log('╚══════════════════════════════════════════════════════════════════════╝\n')

  console.log('─'.repeat(70))
  console.log('TOP ISSUES (ranked by severity × frequency)')
  console.log('─'.repeat(70))
  for (const issue of benchmark.topIssues) {
    const badge = issue.severity === 'P0' ? '🔴' : issue.severity === 'P1' ? '🟠' : issue.severity === 'P2' ? '🟡' : '🔵'
    console.log(`${badge} [${issue.severity}] ${issue.category.toUpperCase()}: ${issue.message}`)
    console.log(`   Affected: ${issue.count} page(s)  |  Fix: ${issue.fix}`)
    console.log('')
  }

  console.log('─'.repeat(70))
  console.log('PER-PAGE SCORECARD')
  console.log('─'.repeat(70))
  for (const page of benchmark.pages.sort((a, b) => a.score - b.score)) {
    const icon = page.score >= 80 ? '✅' : page.score >= 60 ? '⚠️' : '❌'
    console.log(`${icon} ${page.urlPath.padEnd(55)} ${page.score.toString().padStart(3)}/100  (${page.issues.length} issues)`)
  }

  const criticalRemaining = benchmark.p0Count + benchmark.p1Count
  console.log('\n' + '═'.repeat(70))
  if (criticalRemaining === 0) {
    console.log('✅ NO CRITICAL ISSUES REMAIN. All P0/P1 gaps resolved.')
  } else {
    console.log(`⚠️  ${criticalRemaining} CRITICAL/P1 ISSUES REMAIN. Fix highest-leverage items and rerun.`)
  }
  console.log('═'.repeat(70) + '\n')
}

const benchmark = runAudit()
printReport(benchmark)