'use client'

import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { track } from '@/lib/analytics/events'
import { GravelCalculator } from './gravel-calculator'
import {
  BreadcrumbListSchema,
  FAQPageSchema,
  HowToSchema,
  SoftwareApplicationSchema,
  WebPageSchema,
} from '@/components/seo/structured-data'

export type FAQItem = {
  question: string
  answer: string
}

export type SourceLink = {
  label: string
  href: string
}

export type HowToStepItem = {
  name: string
  text: string
}

export type MaterialPageConfig = {
  title: string
  description: string
  path: string
  preselectedMaterialId?: string
  intro: React.ReactNode
  howItWorks: React.ReactNode
  mistakes: React.ReactNode
  relatedCalculators: { label: string; href: string }[]
  faqs?: FAQItem[]
  howToSteps?: HowToStepItem[]
  sourceLinks?: SourceLink[]
}

const BASE_URL = 'https://returnflow.github.io/home-project-calculator'

export function MaterialCalculatorPage({ config }: { config: MaterialPageConfig }) {
  const pageUrl = `${BASE_URL}${config.path}`
  const breadcrumbLabel = config.title.replace(' — Calculate How Much You Need', '').replace(' — Calculate Drainage Stone', '').replace(' — Calculate Base and Surface Layers', '').replace(' — Calculate Compacted Base Material', '')

  const breadcrumbItems = [
    { name: 'Home', item: `${BASE_URL}/` },
    { name: 'Calculators', item: `${BASE_URL}/calculators` },
    { name: 'Gravel Calculator', item: `${BASE_URL}/calculators/gravel` },
    { name: breadcrumbLabel, item: pageUrl },
  ]

  const defaultHowToSteps: HowToStepItem[] = [
    {
      name: 'Measure your area',
      text: 'Measure the length and width of your project area in feet. For circular areas, measure the radius.',
    },
    {
      name: 'Choose your depth',
      text: 'Select the depth in inches based on your project type. Pathways need 2–3 inches, driveways need 4–6 inches.',
    },
    {
      name: 'Select your material',
      text: 'Choose the specific gravel or stone type. Different materials have different bulk densities.',
    },
    {
      name: 'Get your results',
      text: 'The calculator shows volume, weight, and number of bags. A waste allowance is included.',
    },
  ]

  const howToSteps = config.howToSteps ?? defaultHowToSteps

  return (
    <>
      <BreadcrumbListSchema items={breadcrumbItems} />
      {config.faqs && config.faqs.length > 0 && <FAQPageSchema faqs={config.faqs} />}
      <HowToSchema
        name={`How to Calculate ${breadcrumbLabel}`}
        description={`Step-by-step guide to calculating how much ${breadcrumbLabel.toLowerCase()} you need.`}
        steps={howToSteps}
      />
      <SoftwareApplicationSchema
        name={breadcrumbLabel}
        description={config.description}
        url={pageUrl}
      />
      <WebPageSchema
        name={breadcrumbLabel}
        description={config.description}
        url={pageUrl}
      />

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: breadcrumbLabel },
          ]}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{config.title}</h1>
        <div className="mt-4 text-lg text-gray-600">{config.intro}</div>

        <div className="mt-8">
          <GravelCalculator />
        </div>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          {config.howItWorks}
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">Common Mistakes</h2>
          {config.mistakes}
        </section>

        {config.faqs && config.faqs.length > 0 && (
          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-4">
              {config.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-1 text-gray-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {config.sourceLinks && config.sourceLinks.length > 0 && (
          <section className="mt-8 space-y-4">
            <h2 className="text-2xl font-semibold">Material Densities & Sources</h2>
            <p className="text-gray-700">
              Bulk densities used in this calculator are based on loose (uncompacted) measurements from
              industry-standard references:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {config.sourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">Related Calculators</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            {config.relatedCalculators.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-700 hover:underline"
                  onClick={() => {
                    track({
                      name: 'related_calculator_clicked',
                      payload: { from: config.path, to: item.href },
                    })
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}