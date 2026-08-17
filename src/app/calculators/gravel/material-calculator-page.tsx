'use client'

import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { track } from '@/lib/analytics/events'
import { GravelCalculator } from './gravel-calculator'

export type MaterialPageConfig = {
  title: string
  description: string
  path: string
  preselectedMaterialId?: string
  intro: React.ReactNode
  howItWorks: React.ReactNode
  mistakes: React.ReactNode
  relatedCalculators: { label: string; href: string }[]
}

export function MaterialCalculatorPage({ config }: { config: MaterialPageConfig }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: config.title.replace(' — Calculate How Much You Need', '') },
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
  )
}