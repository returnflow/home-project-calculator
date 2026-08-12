import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'Crushed Stone Calculator — Calculate Angular Stone for Construction',
  description:
    'Free crushed stone calculator. Calculate volume, weight, cubic yards and tons for construction projects. Angular stone interlocks for stable bases.',
  path: '/calculators/gravel/crushed-stone-calculator',
})

export default function CrushedStoneCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'Crushed Stone Calculator — Calculate Angular Stone for Construction',
        description:
          'Free crushed stone calculator. Calculate volume, weight, cubic yards and tons for construction projects. Angular stone interlocks for stable bases.',
        path: '/calculators/gravel/crushed-stone-calculator',
        intro: (
          <p>
            Crushed stone is mechanically broken rock with angular, irregular edges. Unlike rounded
            gravel, the angular fragments interlock when compacted, creating a stable base for
            driveways, patios, and retaining walls. It is denser than pea gravel and requires less
            volume for the same weight.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>.
              Crushed stone bulk density ranges from <strong>95–110 lb/ft³</strong> (loose), higher
              than pea gravel because the angular shapes pack together with less void space.
            </p>
            <p className="text-gray-700">
              <strong>Common uses:</strong> Base layer under pavers (4–6 inches), French drains
              (with fines removed), retaining wall backfill, and road base. Dense Grade Aggregate
              (DGA) — a mix of crushed stone and fines — compacts to the highest density.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Using clean stone where compaction is needed — fines are required for stability.</li>
            <li>Ordering by weight when volume matters — compaction changes density significantly.</li>
            <li>Wrong size for drainage — 3/4 inch is standard; fines clog perforated pipes.</li>
            <li>Not compacting in lifts — compact no more than 4 inches at a time for best results.</li>
          </ul>
        ),
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Crusher Run Calculator', href: '/calculators/gravel/crusher-run-calculator' },
          { label: 'Driveway Gravel Calculator', href: '/calculators/gravel/driveway-gravel-calculator' },
        ],
      }}
    />
  )
}