import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { buildMetadata } from '@/lib/seo/metadata'
import {
  BreadcrumbListSchema,
  FAQPageSchema,
  HowToSchema,
  SoftwareApplicationSchema,
  WebPageSchema,
} from '@/components/seo/structured-data'
import { GravelCalculator } from './gravel-calculator'

export const metadata = buildMetadata({
  title: 'Gravel Calculator — Calculate How Much Gravel You Need',
  description:
    'Free gravel calculator. Calculate volume, weight, cubic yards, bags and cost for driveways, patios and garden paths. Supports rectangle, circle and triangle shapes.',
  path: '/calculators/gravel',
})

const BASE_URL = 'https://returnflow.github.io/home-project-calculator'

const breadcrumbItems = [
  { name: 'Home', item: `${BASE_URL}/` },
  { name: 'Calculators', item: `${BASE_URL}/calculators` },
  { name: 'Gravel Calculator', item: `${BASE_URL}/calculators/gravel` },
]

const howToSteps = [
  {
    name: 'Measure your area',
    text: 'Measure the length and width of your project area in feet. For circular areas, measure the radius. For triangular areas, measure the base and height.',
  },
  {
    name: 'Choose your depth',
    text: 'Select the depth of gravel in inches. Typical depths are 2–4 inches for pathways, 4–6 inches for driveways, and 3–4 inches for patios.',
  },
  {
    name: 'Select your material',
    text: 'Choose from common gravel types: general gravel, pea gravel, crushed stone, river rock, or crusher run. Each has a different bulk density.',
  },
  {
    name: 'Get your results',
    text: 'The calculator shows volume in cubic feet and cubic yards, weight in tons, and number of bags needed. A 5–10% waste allowance is included.',
  },
]

const faqs = [
  {
    question: 'How much gravel do I need for a driveway?',
    answer:
      'For a standard gravel driveway, you need a 4–6 inch base layer of crusher run plus a 2–3 inch surface layer of smaller gravel. Calculate each layer separately: measure length × width × depth (in feet), then divide by 27 to get cubic yards. Add 10% for compaction and waste.',
  },
  {
    question: 'How many tons of gravel are in a cubic yard?',
    answer:
      'One cubic yard of loose gravel weighs approximately 1.2–1.5 tons (2,400–3,000 lbs), depending on the material. Pea gravel is lighter at about 1.1 tons per cubic yard, while crusher run is denser at 1.6–1.9 tons per cubic yard due to the fines.',
  },
  {
    question: 'How deep should gravel be for a patio?',
    answer:
      'A gravel patio typically needs 3–4 inches of gravel over a compacted base. For heavy-use areas or clay soils, increase to 4–6 inches. Always excavate 2–3 inches deeper than your gravel depth to allow for a compacted sub-base.',
  },
  {
    question: 'What is the cheapest gravel for a driveway?',
    answer:
      'Crusher run (crush-and-run) is usually the cheapest option for a driveway base at $15–$25 per ton. For the surface layer, plain gravel or pea gravel costs $30–$50 per ton. Avoid using only surface gravel without a base — it will shift and rut.',
  },
  {
    question: 'How do I calculate gravel for an irregular shape?',
    answer:
      'Break the area into simple shapes (rectangles, circles, triangles), calculate each separately, and add the volumes together. Our calculator supports rectangle, circle, and triangle inputs. For very irregular shapes, approximate with a rectangle and add 10–15% extra.',
  },
]

export default function GravelCalculatorPage() {
  return (
    <>
      <BreadcrumbListSchema items={breadcrumbItems} />
      <FAQPageSchema faqs={faqs} />
      <HowToSchema
        name="How to Calculate Gravel"
        description="Step-by-step guide to calculating how much gravel you need for your project."
        steps={howToSteps}
      />
      <SoftwareApplicationSchema
        name="Gravel Calculator"
        description="Free online gravel calculator for driveways, patios, and garden paths."
        url={`${BASE_URL}/calculators/gravel`}
      />
      <WebPageSchema
        name="Gravel Calculator"
        description="Calculate how much gravel you need for your driveway, patio, or garden path."
        url={`${BASE_URL}/calculators/gravel`}
      />

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
            Once we know the volume in cubic feet, we multiply by the material's bulk density to get
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
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-1 text-gray-700">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">Material Densities & Sources</h2>
          <p className="text-gray-700">
            Bulk densities used in this calculator are based on loose (uncompacted) measurements from
            industry-standard references:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>
              <a
                href="https://www.astm.org/standards/c29.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:underline"
              >
                ASTM C29 — Standard Test Method for Bulk Density of Aggregates
              </a>
            </li>
            <li>
              <a
                href="https://www.usgs.gov/science-support/osqi/yes/resources/aggregate-mapping"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:underline"
              >
                USGS Aggregate Resources Mapping
              </a>
            </li>
            <li>
              <a
                href="https://ncma.org/resources/design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 hover:underline"
              >
                National Concrete Masonry Association — Design Resources
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">Related Calculators</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>
              <Link href="/calculators/gravel/pea-gravel-calculator" className="text-primary-700 hover:underline">
                Pea Gravel Calculator
              </Link>
            </li>
            <li>
              <Link href="/calculators/gravel/driveway-gravel-calculator" className="text-primary-700 hover:underline">
                Driveway Gravel Calculator
              </Link>
            </li>
            <li>
              <Link href="/calculators/gravel/crushed-stone-calculator" className="text-primary-700 hover:underline">
                Crushed Stone Calculator
              </Link>
            </li>
            <li>
              <Link href="/calculators/gravel/river-rock-calculator" className="text-primary-700 hover:underline">
                River Rock Calculator
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}