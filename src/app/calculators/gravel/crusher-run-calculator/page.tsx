import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'Crusher Run Calculator — Calculate Compacted Base Material',
  description:
    'Free crusher run calculator. Calculate volume, weight, cubic yards and tons for compacted base layers. Crusher run includes fines for maximum compaction.',
  path: '/calculators/gravel/crusher-run-calculator',
})

export default function CrusherRunCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'Crusher Run Calculator — Calculate Compacted Base Material',
        description:
          'Free crusher run calculator. Calculate volume, weight, cubic yards and tons for compacted base layers. Crusher run includes fines for maximum compaction.',
        path: '/calculators/gravel/crusher-run-calculator',
        intro: (
          <p>
            Crusher run (also called crush-and-run or dense grade aggregate) is a mixture of crushed
            stone and stone dust. The fines fill the voids between larger stones, allowing it to
            compact to a very dense, stable surface. It is the standard base material for driveways,
            patios, and walkways before the final surface layer is applied.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>.
              Crusher run has the highest bulk density of common gravel materials at{' '}
              <strong>120–140 lb/ft³</strong> (loose) because the fines eliminate most void space.
              When compacted, it reaches near-solid density.
            </p>
            <p className="text-gray-700">
              <strong>Ordering tip:</strong> Order by volume, not weight. One cubic yard of loose
              crusher run weighs roughly 1.6–1.9 tons. After compaction, the same weight fills only
              about 80% of the original volume — add 15–20% extra when ordering by compacted
              thickness.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Ordering by compacted volume — you need 15–20% more loose material.</li>
            <li>Compacting too thick a layer — maximum 4 inches per lift for full compaction.</li>
            <li>No moisture during compaction — slightly damp crusher run compacts much better.</li>
            <li>Using it as a finished surface — crusher run turns muddy when wet; always add a surface layer.</li>
          </ul>
        ),
        faqs: [
          {
            question: 'How much crusher run do I need for a driveway base?',
            answer:
              'A driveway base needs 4–6 inches of compacted crusher run. For a 20×24 ft (480 sq ft) driveway, you need 8–12 cubic yards of loose crusher run (order 15–20% extra to account for compaction). Weight: 13–20 tons.',
          },
          {
            question: 'What is the difference between crusher run and crushed stone?',
            answer:
              'Crusher run contains crushed stone mixed with stone dust (fines), which allows it to compact to a solid, stable base. Clean crushed stone has no fines and does not compact — it is used for drainage and decorative purposes where water flow is needed.',
          },
          {
            question: 'How thick should crusher run be for a shed base?',
            answer:
              'For a shed base, use 4–6 inches of compacted crusher run over compacted soil. For heavy equipment sheds or garages, increase to 6–8 inches. Always compact in 4-inch lifts (layers) for maximum density.',
          },
          {
            question: 'How much does crusher run cost per ton?',
            answer:
              'Crusher run costs $15–$25 per ton, or $25–$35 per cubic yard. Delivery fees vary by distance. A typical 480 sq ft driveway base needs 13–20 tons, costing $200–$500 in materials plus delivery.',
          },
        ],
        sourceLinks: [
          {
            label: 'ASTM C29 — Standard Test Method for Bulk Density of Aggregates',
            href: 'https://www.astm.org/standards/c29.htm',
          },
          {
            label: 'National Concrete Masonry Association — Design Resources',
            href: 'https://ncma.org/resources/design/',
          },
        ],
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Driveway Gravel Calculator', href: '/calculators/gravel/driveway-gravel-calculator' },
          { label: 'Crushed Stone Calculator', href: '/calculators/gravel/crushed-stone-calculator' },
        ],
      }}
    />
  )
}