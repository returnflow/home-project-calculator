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
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Driveway Gravel Calculator', href: '/calculators/gravel/driveway-gravel-calculator' },
          { label: 'Crushed Stone Calculator', href: '/calculators/gravel/crushed-stone-calculator' },
        ],
      }}
    />
  )
}