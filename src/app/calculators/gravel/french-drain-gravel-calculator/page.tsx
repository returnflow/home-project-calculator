import { MaterialCalculatorPage } from '../material-calculator-page'
import { createMaterialMetadata } from '../metadata'

export const metadata = createMaterialMetadata({
  title: 'French Drain Gravel Calculator — Calculate Drainage Stone',
  description:
    'Free French drain gravel calculator. Calculate volume, weight, cubic yards and tons for drainage stone. Clean gravel without fines for maximum water flow.',
  path: '/calculators/gravel/french-drain-gravel-calculator',
})

export default function FrenchDrainGravelCalculatorPage() {
  return (
    <MaterialCalculatorPage
      config={{
        title: 'French Drain Gravel Calculator — Calculate Drainage Stone',
        description:
          'Free French drain gravel calculator. Calculate volume, weight, cubic yards and tons for drainage stone. Clean gravel without fines for maximum water flow.',
        path: '/calculators/gravel/french-drain-gravel-calculator',
        intro: (
          <p>
            French drains use clean, washed gravel — typically 3/4 to 1-1/2 inch stone with all fines
            removed — to create a highly permeable channel that redirects water away from
            foundations, soggy yards, or retaining walls. Because there are no fines, water flows
            freely through the voids between stones.
          </p>
        ),
        howItWorks: (
          <>
            <p className="text-gray-700">
              This calculator uses the standard formula: <strong>Volume = Area × Depth</strong>.
              French drain gravel is clean, washed stone with a bulk density of{' '}
              <strong>95–105 lb/ft³</strong> (loose), similar to general gravel because the lack of
              fines is offset by the larger stone size creating more void space.
            </p>
            <p className="text-gray-700">
              <strong>Typical trench dimensions:</strong> 6–12 inches wide, 18–24 inches deep, with
              2–3 inches of gravel below the perforated pipe and 4–6 inches above. Always wrap the
              trench and pipe in landscape fabric to prevent soil infiltration.
            </p>
          </>
        ),
        mistakes: (
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Using crusher run or stone with fines — this clogs drains and stops water flow.</li>
            <li>Too shallow — French drains must be below the frost line and slope to daylight.</li>
            <li>No fabric barrier — soil washes into the stone and ruins permeability within years.</li>
            <li>Flat or reverse slope — water must flow downhill; a 1% minimum slope is essential.</li>
          </ul>
        ),
        faqs: [
          {
            question: 'How much gravel do I need for a French drain?',
            answer:
              'A standard French drain trench is 8–12 inches wide and 18–24 inches deep. For a 50-foot run, you need 5–8 cubic yards of clean drainage stone. Add 10% extra for settling. Use 3/4 to 1-1/2 inch clean stone with all fines removed.',
          },
          {
            question: 'What size gravel is best for French drains?',
            answer:
              'Use 3/4 inch to 1-1/2 inch clean, washed gravel with all fines removed. This size creates optimal void space for water flow while staying in place. Avoid pea gravel (too small, may clog) and crusher run (contains fines that block drainage).',
          },
          {
            question: 'How deep should a French drain be?',
            answer:
              'French drains should be 18–24 inches deep, below the frost line in your region. The bottom must slope toward the discharge point at a minimum 1% grade (1 inch drop per 8 feet). Deeper is better for foundation drainage.',
          },
          {
            question: 'Do French drains need a fabric liner?',
            answer:
              'Yes — always wrap the trench and perforated pipe in landscape fabric or a geotextile sock. Without fabric, soil particles wash into the stone voids and clog the drain within 2–5 years. Use a permeable non-woven fabric rated for drainage.',
          },
        ],
        sourceLinks: [
          {
            label: 'ASTM C29 — Standard Test Method for Bulk Density of Aggregates',
            href: 'https://www.astm.org/standards/c29.htm',
          },
          {
            label: 'USGS Water Resources — Drainage Design',
            href: 'https://www.usgs.gov/mission-areas/water-resources',
          },
        ],
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'River Rock Calculator', href: '/calculators/gravel/river-rock-calculator' },
          { label: 'Crushed Stone Calculator', href: '/calculators/gravel/crushed-stone-calculator' },
        ],
      }}
    />
  )
}