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
        faqs: [
          {
            question: 'How much pea gravel do I need per square foot?',
            answer:
              'At 2 inches deep, you need about 0.17 cubic feet (12 lbs) of pea gravel per square foot. At 3 inches deep, you need about 0.25 cubic feet (18 lbs) per square foot. Our calculator adds a 5–10% waste allowance automatically.',
          },
          {
            question: 'Is pea gravel cheaper than crushed stone?',
            answer:
              'Pea gravel typically costs $30–$50 per ton, while crushed stone costs $25–$40 per ton. However, pea gravel requires more volume for the same weight due to its lower bulk density, so total project costs are often similar.',
          },
          {
            question: 'How do I keep pea gravel in place?',
            answer:
              'Use metal, plastic, or brick edging around the perimeter. For driveways or high-traffic areas, install a geotextile fabric underneath to prevent sinking and migration. Avoid steep slopes where pea gravel will wash away.',
          },
          {
            question: 'How deep should pea gravel be for a walkway?',
            answer:
              'A minimum of 2 inches is required for walkways to prevent bare spots. For high-traffic paths or areas with heavy foot traffic, use 3 inches. Always install over a compacted base or geotextile fabric.',
          },
        ],
        sourceLinks: [
          {
            label: 'ASTM C29 — Standard Test Method for Bulk Density of Aggregates',
            href: 'https://www.astm.org/standards/c29.htm',
          },
          {
            label: 'USGS Aggregate Resources Mapping',
            href: 'https://www.usgs.gov/science-support/osqi/yes/resources/aggregate-mapping',
          },
        ],
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Driveway Gravel Calculator', href: '/calculators/gravel/driveway-gravel-calculator' },
          { label: 'River Rock Calculator', href: '/calculators/gravel/river-rock-calculator' },
        ],
      }}
    />
  )
}