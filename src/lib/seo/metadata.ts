/**
 * Reusable SEO metadata factory.
 * Enforces every indexable page has unique title, description, canonical, and Open Graph.
 */

export type SeoConfig = {
  title: string
  description: string
  path: string
  ogImage?: string
  noIndex?: boolean
}

export function buildMetadata(config: SeoConfig) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
  const canonical = `${baseUrl}${config.path}`

  return {
    title: config.title,
    description: config.description,
    ...(config.noIndex ? { robots: { index: false, follow: false } } : {}),
    alternates: {
      canonical,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonical,
      type: 'website',
      ...(config.ogImage ? { images: [{ url: config.ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      ...(config.ogImage ? { images: [config.ogImage] } : {}),
    },
  }
}