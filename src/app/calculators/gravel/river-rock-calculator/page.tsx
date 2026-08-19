import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'River Rock Calculator — Calculate How Much You Need',
  description:
    'Free river rock calculator. Calculate volume, weight, cubic yards and tons for landscaping beds, dry creek beds, and decorative ground cover.',
  path: '/calculators/gravel/river-rock-calculator',
})

export default function RiverRockCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'River Rock Calculator — Calculate How Much You Need',
        description:
          'Free river rock calculator. Calculate volume, weight, cubic yards and tons for landscaping beds, dry creek beds, and decorative ground cover.',
        path: '/calculators/gravel/river-rock-calculator',
        intro: (
          <p>
            River rock consists of smooth, rounded stones shaped by natural water erosion. It is
            popular for landscaping beds, dry creek beds, water features, and decorative ground
            cover. River rock has a lower bulk density than crushed stone because the rounded shapes
            create more void space between stones.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>.
              River rock bulk density ranges from <strong>90–100 lb/ft³</strong> (loose) for smaller
              stones (1–2 inches) to <strong>95–105 lb/ft³</strong> for larger stones (3–5 inches).
            </p>
            <p className="text-gray-700">
              <strong>Typical depths:</strong> 2–3 inches for ground cover, 4–6 inches for dry creek
              beds, 3–4 inches for landscaping borders. Larger stones need less depth for coverage.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Using the same density as crushed stone — river rock is lighter per cubic foot.</li>
            <li>Too deep for ground cover — 2 inches is enough for decorative beds.</li>
            <li>No weed barrier — river rock alone does not prevent weeds; use landscape fabric.</li>
            <li>Placing over unprepared soil — stones sink and become uneven over time.</li>
          </ul>
        ),
        faqs: [
          {
            question: 'How much river rock do I need for landscaping?',
            answer:
              'For decorative ground cover, use 2–3 inches of river rock. A 100 sq ft bed needs about 1.7–2.5 cubic yards (1.5–2.3 tons). For dry creek beds, use 4–6 inches. Our calculator adds a 5–10% waste allowance.',
          },
          {
            question: 'What size river rock should I use?',
            answer:
              'For ground cover and pathways, use 1–2 inch river rock. For dry creek beds and water features, use 3–5 inch stones. For erosion control on slopes, use 4–8 inch rip rap. Mix sizes for a natural look.',
          },
          {
            question: 'How much does a cubic yard of river rock weigh?',
            answer:
              'A cubic yard of 1–2 inch river rock weighs 2,400–2,700 lbs (1.2–1.35 tons). Larger 3–5 inch stones weigh 2,500–2,800 lbs per cubic yard. River rock is lighter than crushed stone because the rounded shapes create more air space.',
          },
          {
            question: 'Do I need landscape fabric under river rock?',
            answer:
              'Yes — always install landscape fabric or a geotextile barrier under river rock. Without it, weeds grow through, soil mixes with the stones, and the rock layer sinks into the ground. Secure fabric with landscape staples every 2–3 feet.',
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
          { label: 'Pea Gravel Calculator', href: '/calculators/gravel/pea-gravel-calculator' },
          { label: 'French Drain Gravel Calculator', href: '/calculators/gravel/french-drain-gravel-calculator' },
        ],
      }}
    />
  )
}