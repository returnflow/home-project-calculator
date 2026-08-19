/**
 * JSON-LD Structured Data components for SEO/GEO.
 *
 * Uses raw `<script>` tags with `dangerouslySetInnerHTML` to ensure
 * JSON-LD is rendered in static HTML exports. Next.js `<Script>`
 * component defaults to client-side injection which is invisible to crawlers.
 */

export type BreadcrumbItem = {
  name: string
  item: string
}

export function BreadcrumbListSchema({ items }: { items: BreadcrumbItem[] }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}

export type FAQ = {
  question: string
  answer: string
}

export function FAQPageSchema({ faqs }: { faqs: FAQ[] }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}

export type HowToStep = {
  name: string
  text: string
  url?: string
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
}) {
  const json: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  }

  if (totalTime) {
    json.totalTime = totalTime
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = 'UtilitiesApplication',
}: {
  name: string
  description: string
  url: string
  applicationCategory?: string
}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}

export function WebPageSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}