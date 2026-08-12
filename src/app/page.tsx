import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Project Calculator — Free Gravel & Landscaping Calculators',
  description:
    'Free online calculators for home projects. Calculate gravel, pea gravel, crushed stone, river rock and more. Get volume, weight, bags and cost estimates instantly.',
}

const calculators = [
  {
    title: 'Gravel Calculator',
    href: '/calculators/gravel',
    description:
      'Calculate how much gravel you need for driveways, patios, and garden paths. Supports rectangle, circle, and triangle shapes.',
  },
  {
    title: 'Pea Gravel Calculator',
    href: '/calculators/gravel/pea-gravel-calculator',
    description:
      'Plan pea gravel projects for pathways, playgrounds, and decorative landscaping. Accounts for lower bulk density of rounded stone.',
  },
  {
    title: 'Driveway Gravel Calculator',
    href: '/calculators/gravel/driveway-gravel-calculator',
    description:
      'Estimate gravel quantities for driveway installations. Includes compaction considerations and base layer guidance.',
  },
  {
    title: 'River Rock Calculator',
    href: '/calculators/gravel/river-rock-calculator',
    description:
      'Calculate river rock volume and weight for landscaping beds, dry creek beds, and decorative ground cover.',
  },
  {
    title: 'Crushed Stone Calculator',
    href: '/calculators/gravel/crushed-stone-calculator',
    description:
      'Get precise crushed stone estimates for construction, drainage, and base layers. Higher density than pea gravel.',
  },
  {
    title: 'Crusher Run Calculator',
    href: '/calculators/gravel/crusher-run-calculator',
    description:
      'Calculate crusher run (crush and run) quantities for sub-base and driveway foundations. Includes compaction factors.',
  },
  {
    title: 'French Drain Gravel Calculator',
    href: '/calculators/gravel/french-drain-gravel-calculator',
    description:
      'Estimate gravel needed for French drain systems and drainage trenches. Accounts for pipe volume displacement.',
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="mx-auto max-w-3xl space-y-4 py-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Free Home Project Calculators
        </h1>
        <p className="text-lg text-gray-600">
          Accurate, easy-to-use calculators for gravel, landscaping, and home improvement projects.
          Enter your dimensions, choose your material, and get instant estimates.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Gravel & Landscaping Calculators</h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <li key={calc.href}>
              <Link
                href={calc.href}
                className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary-800">{calc.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{calc.description}</p>
                <span className="mt-4 text-sm font-medium text-primary-700 underline-offset-2 hover:underline">
                  Open calculator →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-surface-muted p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Why Use Our Calculators?</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-primary-600">✓</span>
            <span className="text-gray-700">Free with no signup required</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-primary-600">✓</span>
            <span className="text-gray-700">Multiple shapes: rectangle, circle, triangle</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-primary-600">✓</span>
            <span className="text-gray-700">Verified material densities from trusted sources</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-primary-600">✓</span>
            <span className="text-gray-700">Results in cubic yards, tons, and bags</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-primary-600">✓</span>
            <span className="text-gray-700">Optional cost estimation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-primary-600">✓</span>
            <span className="text-gray-700">Waste allowance built in</span>
          </li>
        </ul>
      </section>
    </div>
  )
}