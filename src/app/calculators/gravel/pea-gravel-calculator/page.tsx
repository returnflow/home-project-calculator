import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'Pea Gravel Calculator — Calculate How Much You Need',
  description:
    'Free pea gravel calculator. Calculate volume, weight, cubic yards, bags and cost for pea gravel projects. Pea gravel is smaller and lighter than crushed stone.',
  path: '/calculators/gravel/pea-gravel-calculator',
})

export default function PeaGravelCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'Pea Gravel Calculator — Calculate How Much You Need',
        description:
          'Free pea gravel calculator. Calculate volume, weight, cubic yards, bags and cost for pea gravel projects. Pea gravel is smaller and lighter than crushed stone.',
        path: '/calculators/gravel/pea-gravel-calculator',
        intro: (
          <p>
            Pea gravel consists of small, rounded stones about 3/8 inch in diameter. It is popular
            for garden paths, playgrounds, and decorative landscaping. Because of its rounded shape,
            pea gravel has a lower bulk density than crushed stone — you need more volume for the
            same weight.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>. Pea
              gravel bulk density ranges from <strong>95–105 lb/ft³</strong> (loose), which is lower
              than crushed stone due to the round shape creating more void space between stones.
            </p>
            <p className="text-gray-700">
              <strong>Typical depths:</strong> 2–3 inches for pathways, 3–4 inches for playgrounds,
              4–6 inches for driveways (with a compacted base underneath).
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Using the same density as crushed stone — pea gravel is lighter.</li>
            <li>Too shallow for walkways — 2 inches is the minimum to prevent bare spots.</li>
            <li>Not edging the area — pea gravel migrates easily without borders.</li>
            <li>Installing over unprepared soil — weeds grow through and the surface becomes uneven.</li>
          </ul>
        ),
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Driveway Gravel Calculator', href: '/calculators/gravel/driveway-gravel-calculator' },
          { label: 'River Rock Calculator', href: '/calculators/gravel/river-rock-calculator' },
        ],
      }}
    />
  )
}