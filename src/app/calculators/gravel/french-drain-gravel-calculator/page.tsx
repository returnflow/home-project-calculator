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
        relatedCalculators: [
          { label: 'Gravel Calculator', href: '/calculators/gravel' },
          { label: 'River Rock Calculator', href: '/calculators/gravel/river-rock-calculator' },
          { label: 'Crushed Stone Calculator', href: '/calculators/gravel/crushed-stone-calculator' },
        ],
      }}
    />
  )
}