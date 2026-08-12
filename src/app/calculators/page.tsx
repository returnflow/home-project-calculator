import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculators — Free Gravel & Landscaping Tools',
  description:
    'Browse all free home project calculators. Gravel, pea gravel, crushed stone, river rock, driveway gravel, crusher run, and French drain gravel.',
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
      'Plan pea gravel projects for pathways, playgrounds, and decorative landscaping.',
  },
  {
    title: 'Driveway Gravel Calculator',
    href: '/calculators/gravel/driveway-gravel-calculator',
    description:
      'Estimate gravel quantities for driveway installations with compaction guidance.',
  },
  {
    title: 'River Rock Calculator',
    href: '/calculators/gravel/river-rock-calculator',
    description:
      'Calculate river rock volume and weight for landscaping beds and ground cover.',
  },
  {
    title: 'Crushed Stone Calculator',
    href: '/calculators/gravel/crushed-stone-calculator',
    description:
      'Get precise crushed stone estimates for construction and drainage projects.',
  },
  {
    title: 'Crusher Run Calculator',
    href: '/calculators/gravel/crusher-run-calculator',
    description:
      'Calculate crusher run quantities for sub-base and driveway foundations.',
  },
  {
    title: 'French Drain Gravel Calculator',
    href: '/calculators/gravel/french-drain-gravel-calculator',
    description:
      'Estimate gravel needed for French drain systems and drainage trenches.',
  },
]

export default function CalculatorsIndex() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All Calculators</h1>
        <p className="text-lg text-gray-600">
          Free online calculators for home improvement and landscaping projects. Choose a calculator
          below to get started.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {calculators.map((calc) => (
          <li key={calc.href}>
            <Link
              href={calc.href}
              className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:border-primary-300 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-primary-800">{calc.title}</h2>
              <p className="mt-1 flex-1 text-sm text-gray-600">{calc.description}</p>
              <span className="mt-3 text-sm font-medium text-primary-700 underline-offset-2 hover:underline">
                Open →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}