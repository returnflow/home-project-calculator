import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { buildMetadata } from '@/lib/seo/metadata'
import { GravelCalculator } from './gravel-calculator'

export const metadata = buildMetadata({
  title: 'Gravel Calculator — Calculate How Much Gravel You Need',
  description:
    'Free gravel calculator. Calculate gravel volume, weight, cubic yards, bags and cost for driveways, patios and garden paths. Supports rectangle, circle and triangle shapes.',
  path: '/calculators/gravel',
})

export default function GravelCalculatorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Calculators', href: '/calculators' },
          { label: 'Gravel Calculator' },
        ]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Gravel Calculator</h1>
      <p className="mt-4 text-lg text-gray-600">
        Calculate how much gravel you need for your driveway, patio, or garden path. Enter your
        dimensions, choose your material, and get instant results in cubic yards, tons, and bags.
      </p>

      <div className="mt-8">
        <GravelCalculator />
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="text-gray-700">
          Our gravel calculator uses the standard formula: <strong>Volume = Area &times; Depth</strong>.
          Once we know the volume in cubic feet, we multiply by the material&#39;s bulk density to get
          the weight. A waste allowance is added to ensure you order enough material.
        </p>
        <p className="text-gray-700">
          <strong>Important:</strong> These calculations use <em>loose</em> (uncompacted) bulk
          density. If your gravel will be compacted (for example, for a driveway base), you may need less
          volume but the weight will be higher. Always confirm quantities with your supplier.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Common Mistakes</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>Measuring depth in feet instead of inches — our calculator uses inches.</li>
          <li>Forgetting waste allowance — always add 5–10% for spillage and uneven depths.</li>
          <li>Using compacted density for loose gravel — this leads to over-ordering.</li>
          <li>Ignoring the shape — a circular patio needs the radius, not the diameter.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Related Calculators</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-700">
          <li>
            <a href="/calculators/gravel/pea-gravel-calculator" className="text-primary-700 hover:underline">
              Pea Gravel Calculator
            </a>
          </li>
          <li>
            <a href="/calculators/gravel/driveway-gravel-calculator" className="text-primary-700 hover:underline">
              Driveway Gravel Calculator
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}