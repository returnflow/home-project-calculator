import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'River Rock Calculator — Calculate Decorative Stone Needs',
  description:
    'Free river rock calculator. Calculate volume, weight, cubic yards and tons for landscaping with smooth, rounded river stones. Sizes from 1 to 6 inches.',
  path: '/calculators/gravel/river-rock-calculator',
})

export default function RiverRockCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'River Rock Calculator — Calculate Decorative Stone Needs',
        description:
          'Free river rock calculator. Calculate volume, weight, cubic yards and tons for landscaping with smooth, rounded river stones. Sizes from 1 to 6 inches.',
        path: '/calculators/gravel/river-rock-calculator',
        intro: (
          <p>
            River rock is smooth, rounded stone harvested from river beds. It is used for dry creek
            beds, garden borders, erosion control, and decorative ground cover. River rock varies
            widely in density (89–115 lb/ft³) depending on stone type and size uniformity.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>.
              River rock bulk density varies widely (89–115 lb/ft³) because larger, more uniform
              stones pack with more void space. The calculator uses the midpoint of 102 lb/ft³.
            </p>
            <p className="text-gray-700">
              <strong>Typical depths:</strong> 2–3 inches for ground cover, 4–6 inches for dry creek
              beds, 6–12 inches for erosion control on slopes. Always place landscape fabric
              underneath to prevent sinking into soil.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>No landscape fabric — river rock sinks into soil within one season.</li>
            <li>Wrong size for the job — small rock washes away; large rock is hard to walk on.</li>
            <li>Underestimating weight — river rock is heavy; verify your vehicle can handle loads.</li>
            <li>Ignoring drainage — river rock areas need perimeter drainage to prevent pooling.</li>
          </ul>
        ),
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Pea Gravel Calculator', href: '/calculators/gravel/pea-gravel-calculator' },
          { label: 'French Drain Gravel Calculator', href: '/calculators/gravel/french-drain-gravel-calculator' },
        ],
      }}
    />
  )
}