import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'

  const pages = [
    '/',
    '/calculators/gravel',
    '/calculators/gravel/pea-gravel-calculator',
    '/calculators/gravel/driveway-gravel-calculator',
    '/calculators/gravel/river-rock-calculator',
    '/calculators/gravel/crushed-stone-calculator',
    '/calculators/gravel/crusher-run-calculator',
    '/calculators/gravel/french-drain-gravel-calculator',
  ]

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))
}