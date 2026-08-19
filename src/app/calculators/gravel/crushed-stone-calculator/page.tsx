import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'Crushed Stone Calculator — Calculate How Much You Need',
  description:
    'Free crushed stone calculator. Calculate volume, weight, cubic yards and tons for construction, drainage, and base layers. Higher density than pea gravel.',
  path: '/calculators/gravel/crushed-stone-calculator',
})

export default function CrushedStoneCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'Crushed Stone Calculator — Calculate How Much You Need',
        description:
          'Free crushed stone calculator. Calculate volume, weight, cubic yards and tons for construction, drainage, and base layers. Higher density than pea gravel.',
        path: '/calculators/gravel/crushed-stone-calculator',
        intro: (
          <p>
            Crushed stone is angular rock broken into uniform sizes by mechanical crushers. The sharp
            edges interlock when compacted, making it ideal for construction bases, drainage layers,
            and road surfacing. Crushed stone has a higher bulk density than rounded gravel because
            the angular shapes pack together more tightly.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>.
              Crushed stone bulk density ranges from <strong>100–120 lb/ft³</strong> (loose),
              depending on stone size and gradation. Fine crusher run (with dust) compacts to the
              highest density, while clean 3/4 inch stone is looser.
            </p>
            <p className="text-gray-700">
              <strong>Typical uses:</strong> 4–6 inch base for driveways and patios, 2–3 inch
              drainage layer behind retaining walls, 6–12 inch sub-base for sheds and structures.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Confusing clean stone with crusher run — clean stone has no fines and won't compact.</li>
            <li>Underestimating weight — crushed stone is heavy; verify truck capacity with your supplier.</li>
            <li>Wrong size for the job — use 3/4 inch for bases, 1-1/2 inch for drainage, fines for compaction.</li>
            <li>No separation layer — place geotextile fabric between soil and stone to prevent mixing.</li>
          </ul>
        ),
        faqs: [
          {
            question: 'How much crushed stone do I need for a patio base?',
            answer:
              'A patio base needs 4–6 inches of crushed stone or crusher run over compacted soil. For a 12×12 ft patio, that is 4–6 cubic yards. Add 10% for compaction if using crusher run. Clean crushed stone does not compact, so order the exact calculated volume.',
          },
          {
            question: 'What size crushed stone is best for drainage?',
            answer:
              'For drainage behind retaining walls or in French drains, use 3/4 to 1-1/2 inch clean crushed stone (no fines). The larger voids between stones allow water to flow freely. Avoid crusher run or stone with fines — these clog drainage systems.',
          },
          {
            question: 'How much does a cubic yard of crushed stone weigh?',
            answer:
              'A cubic yard of loose crushed stone weighs 2,700–3,200 lbs (1.35–1.6 tons). Crusher run with fines is denser at 3,200–3,800 lbs per cubic yard (1.6–1.9 tons). Clean 3/4 inch stone is lighter at 2,500–2,900 lbs per cubic yard.',
          },
          {
            question: 'Can I use crushed stone instead of gravel?',
            answer:
              'Yes — crushed stone is actually a type of gravel. It is better than rounded gravel for bases and compaction because the angular edges interlock. For decorative pathways, rounded pea gravel is preferred for comfort underfoot.',
          },
        ],
        sourceLinks: [
          {
            label: 'ASTM C29 — Standard Test Method for Bulk Density of Aggregates',
            href: 'https://www.astm.org/standards/c29.htm',
          },
          {
            label: 'USGS Mineral Commodity Summaries — Crushed Stone',
            href: 'https://www.usgs.gov/centers/national-minerals-information-center/crushed-stone-statistics-and-information',
          },
        ],
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'Crusher Run Calculator', href: '/calculators/gravel/crusher-run-calculator' },
          { label: 'Driveway Gravel Calculator', href: '/calculators/gravel/driveway-gravel-calculator' },
        ],
      }}
    />
  )
}