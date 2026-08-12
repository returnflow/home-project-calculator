import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'Driveway Gravel Calculator — Calculate Base and Surface Layers',
  description:
    'Free driveway gravel calculator. Calculate volume, weight, cubic yards and tons for driveway base and surface layers. Includes compaction guidance.',
  path: '/calculators/gravel/driveway-gravel-calculator',
})

export default function DrivewayGravelCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'Driveway Gravel Calculator — Calculate Base and Surface Layers',
        description:
          'Free driveway gravel calculator. Calculate volume, weight, cubic yards and tons for driveway base and surface layers. Includes compaction guidance.',
        path: '/calculators/gravel/driveway-gravel-calculator',
        intro: (
          <p>
            A gravel driveway typically has two layers: a compacted base layer (crusher run or dense
            grade aggregate) and a surface layer of smaller gravel. This calculator helps you
            estimate both. Driveways need thicker layers than garden paths to support vehicle weight.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>. For
              driveways, typical depths are <strong>4–6 inches for the base layer</strong> and{' '}
              <strong>2–3 inches for the surface</strong>. Base materials like crusher run compact
              to a higher density (120–140 lb/ft³), while surface gravel remains looser.
            </p>
            <p className="text-gray-700">
              <strong>Important:</strong> The calculator shows <em>loose</em> volume. After
              compaction, the base layer will be roughly 15–20% thinner — order extra to account for
              compaction. Always compact the base in lifts (layers) of no more than 4 inches at a
              time.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Too thin a base — less than 4 inches leads to rutting and potholes.</li>
            <li>No edge restraint — gravel spreads outward under tire pressure.</li>
            <li>Poor drainage — water pooling destroys driveways; maintain a 2% slope.</li>
            <li>Using only surface gravel with no base — the driveway will shift and rut.</li>
          </ul>
        ),
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Crusher Run Calculator', href: '/calculators/gravel/crusher-run-calculator' },
          { label: 'Pea Gravel Calculator', href: '/calculators/gravel/pea-gravel-calculator' },
        ],
      }}
    />
  )
}