'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/field'
import { Select } from '@/components/ui/field'
import { ResultCard, type ResultItem } from '@/components/ui/result-card'
import { CalculatorSection, CalculatorFieldset } from '@/components/calculator/calculator-section'
import { calculateGravel } from '@/calculators/gravel/calculator'
import { shapeOptions, type GravelInputs, type ShapeType } from '@/calculators/gravel/config'
import { gravelMaterials } from '@/data/materials/gravel'
import { formatNumber, formatCurrency } from '@/calculators/core/formatting'
import { track } from '@/lib/analytics/events'

export function GravelCalculator() {
  const [inputs, setInputs] = useState<GravelInputs>({
    shape: 'rectangle',
    materialId: 'gravel-loose-dry',
    wastePercent: 10,
  })
  const [result, setResult] = useState<ReturnType<typeof calculateGravel>['result']>(undefined)
  const [errors, setErrors] = useState<ReturnType<typeof calculateGravel>['errors']>({})

  useEffect(() => {
    track({ name: 'calculator_started', payload: { calculator: 'gravel' } })
  }, [])

  const updateInput = useCallback(<K extends keyof GravelInputs>(key: K, value: GravelInputs[K]) => {
    setInputs((prev: GravelInputs) => ({ ...prev, [key]: value }))
    // Clear error for this field when user changes it
    setErrors((prev: Record<string, string>) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }, [])

  const handleCalculate = useCallback(() => {
    const { result: calcResult, errors: calcErrors } = calculateGravel(inputs)
    setResult(calcResult)
    setErrors(calcErrors)

    if (calcResult) {
      track({
        name: 'calculation_completed',
        payload: {
          calculator: 'gravel',
          shape: inputs.shape,
          material: inputs.materialId,
        },
      })
    } else {
      Object.keys(calcErrors).forEach((field) => {
        track({
          name: 'calculator_error',
          payload: { calculator: 'gravel', field },
        })
      })
    }
  }, [inputs])

  const resultItems: ResultItem[] = result
    ? [
        { label: 'Area', value: formatNumber(result.areaSqFt) ?? '-', unit: 'sq ft' },
        { label: 'Volume', value: formatNumber(result.volumeCuFt) ?? '-', unit: 'cu ft' },
        { label: 'Cubic Yards', value: formatNumber(result.volumeCuYd) ?? '-', unit: 'cu yd' },
        { label: 'Cubic Metres', value: formatNumber(result.volumeM3) ?? '-', unit: 'm³' },
        { label: 'Weight', value: formatNumber(result.weightLb) ?? '-', unit: 'lb' },
        { label: 'US Tons', value: formatNumber(result.weightUsTons) ?? '-', unit: 'tons' },
        { label: 'Metric Tonnes', value: formatNumber(result.weightMetricTonnes) ?? '-', unit: 'tonnes' },
        { label: 'Bags Needed', value: formatNumber(result.bagCount) ?? '-', unit: 'bags (50 lb)' },
        ...(result.estimatedCost !== undefined
          ? [{ label: 'Estimated Cost', value: formatCurrency(result.estimatedCost) ?? '-', unit: '' }]
          : []),
      ]
    : []

  return (
    <div className="space-y-6">
      <CalculatorSection title="Gravel Calculator" description="Calculate how much gravel you need for your project.">
        <div className="space-y-6 p-4 sm:p-6">
          <CalculatorFieldset legend="Project Details">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Select
                id="shape"
                label="Shape"
                value={inputs.shape}
                onChange={(e) => {
                  const shape = e.target.value as ShapeType
                  setInputs((prev) => ({
                    ...prev,
                    shape,
                    // Clear shape-specific dimensions when shape changes
                    lengthFt: undefined,
                    widthFt: undefined,
                    radiusFt: undefined,
                    baseFt: undefined,
                    heightFt: undefined,
                  }))
                }}
              >
                {shapeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Select>

              <Select
                id="material"
                label="Material"
                value={inputs.materialId}
                onChange={(e) => {
                  updateInput('materialId', e.target.value)
                  track({
                    name: 'material_selected',
                    payload: { calculator: 'gravel', material: e.target.value },
                  })
                }}
                error={errors.materialId}
              >
                {gravelMaterials.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </Select>
            </div>

            {inputs.shape === 'rectangle' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  id="length"
                  label="Length"
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder="e.g. 20"
                  value={inputs.lengthFt ?? ''}
                  onChange={(e) => updateInput('lengthFt', parseFloat(e.target.value) || undefined)}
                  error={errors.lengthFt}
                  hint="Feet"
                />
                <Input
                  id="width"
                  label="Width"
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder="e.g. 10"
                  value={inputs.widthFt ?? ''}
                  onChange={(e) => updateInput('widthFt', parseFloat(e.target.value) || undefined)}
                  error={errors.widthFt}
                  hint="Feet"
                />
              </div>
            )}

            {inputs.shape === 'circle' && (
              <Input
                id="radius"
                label="Radius"
                type="number"
                min={0}
                step={0.01}
                placeholder="e.g. 8"
                value={inputs.radiusFt ?? ''}
                onChange={(e) => updateInput('radiusFt', parseFloat(e.target.value) || undefined)}
                error={errors.radiusFt}
                hint="Feet"
              />
            )}

            {inputs.shape === 'triangle' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  id="base"
                  label="Base"
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder="e.g. 10"
                  value={inputs.baseFt ?? ''}
                  onChange={(e) => updateInput('baseFt', parseFloat(e.target.value) || undefined)}
                  error={errors.baseFt}
                  hint="Feet"
                />
                <Input
                  id="height"
                  label="Height"
                  type="number"
                  min={0}
                  step={0.01}
                  placeholder="e.g. 5"
                  value={inputs.heightFt ?? ''}
                  onChange={(e) => updateInput('heightFt', parseFloat(e.target.value) || undefined)}
                  error={errors.heightFt}
                  hint="Feet"
                />
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                id="depth"
                label="Depth"
                type="number"
                min={0}
                step={0.25}
                placeholder="e.g. 6"
                value={inputs.depthInches ?? ''}
                onChange={(e) => updateInput('depthInches', parseFloat(e.target.value) || undefined)}
                error={errors.depthInches}
                hint="Inches"
              />
              <Input
                id="waste"
                label="Waste Allowance"
                type="number"
                min={0}
                max={100}
                step={1}
                placeholder="e.g. 10"
                value={inputs.wastePercent ?? ''}
                onChange={(e) => updateInput('wastePercent', parseFloat(e.target.value) || 0)}
                error={errors.wastePercent}
                hint="Percent"
              />
              <Input
                id="price"
                label="Price per Ton (optional)"
                type="number"
                min={0}
                step={0.01}
                placeholder="e.g. 50"
                value={inputs.pricePerTon ?? ''}
                onChange={(e) => updateInput('pricePerTon', parseFloat(e.target.value) || undefined)}
                error={errors.pricePerTon}
                hint="USD"
              />
            </div>
          </CalculatorFieldset>

          <Button onClick={handleCalculate} className="w-full sm:w-auto">
            Calculate
          </Button>
        </div>
      </CalculatorSection>

      {result && (
        <>
          <ResultCard title="Results" items={resultItems} />

          <section aria-label="Assumptions" className="rounded-xl border border-border bg-surface-muted p-5">
            <h2 className="text-lg font-semibold">Assumptions</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {result.assumptions.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  )
}