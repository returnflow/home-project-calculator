/**
 * Gravel material dataset.
 * All densities are bulk densities (loose, as-purchased), not particle density.
 * Sources verified from search; see individual records for URLs and dates.
 */

import type { Material } from './material'

export const gravelMaterials: Material[] = [
  {
    id: 'gravel-loose-dry',
    name: 'Gravel, loose, dry',
    category: 'gravel',
    densityLbPerCuFt: 105,
    unit: 'lb/ft³',
    source: {
      name: 'The Engineering ToolBox',
      url: 'https://www.engineeringtoolbox.com/',
      verifiedDate: '2026-08-12',
    },
    notes: [
      'Typical bulk density for loose, dry gravel.',
      'Compacted gravel can be significantly denser.',
      'Moisture content increases weight.',
    ],
  },
  {
    id: 'pea-gravel',
    name: 'Pea Gravel',
    category: 'gravel',
    densityLbPerCuFt: { min: 95, max: 105 },
    unit: 'lb/ft³',
    source: {
      name: 'The Engineering ToolBox / Industry consensus',
      url: 'https://www.engineeringtoolbox.com/',
      verifiedDate: '2026-08-12',
    },
    notes: [
      'Rounded, smooth stones approximately 3/8 inch diameter.',
      'Lower density than crushed stone due to round shape creating more void space.',
      'Value is a typical range; exact density varies by source and moisture.',
    ],
  },
  {
    id: 'river-rock',
    name: 'River Rock',
    category: 'gravel',
    densityLbPerCuFt: { min: 89, max: 115 },
    unit: 'lb/ft³',
    source: {
      name: 'Industry references via Google Search consensus',
      url: 'https://www.google.com/search?q=river+rock+bulk+density',
      verifiedDate: '2026-08-12',
    },
    notes: [
      'Smooth, rounded stones from river beds.',
      'Density varies significantly by stone type and size uniformity.',
      'Larger, more uniform stones tend toward the lower end of the range.',
    ],
  },
  {
    id: 'crushed-stone',
    name: 'Crushed Stone',
    category: 'gravel',
    densityLbPerCuFt: { min: 95, max: 110 },
    unit: 'lb/ft³',
    source: {
      name: 'The Engineering ToolBox / Industry consensus',
      url: 'https://www.engineeringtoolbox.com/',
      verifiedDate: '2026-08-12',
    },
    notes: [
      'Angular fragments created by mechanical crushing.',
      'Higher density than pea gravel due to better interlocking (less void space).',
      'Dense grade aggregate (DGA) may be at the higher end.',
    ],
  },
  {
    id: 'crusher-run',
    name: 'Crusher Run',
    category: 'gravel',
    densityLbPerCuFt: { min: 120, max: 140 },
    unit: 'lb/ft³',
    source: {
      name: 'Industry references via Google Search consensus',
      url: 'https://www.google.com/search?q=crusher+run+bulk+density',
      verifiedDate: '2026-08-12',
    },
    notes: [
      'Mixture of crushed stone and stone dust (fines).',
      'Compacts tightly; often used as a base layer.',
      'High density due to fines filling voids between larger stones.',
      'May be sold as "crush and run" or "dense grade aggregate".',
    ],
  },
  {
    id: 'french-drain-gravel',
    name: 'French Drain Gravel',
    category: 'gravel',
    densityLbPerCuFt: { min: 95, max: 105 },
    unit: 'lb/ft³',
    source: {
      name: 'The Engineering ToolBox / Industry consensus',
      url: 'https://www.engineeringtoolbox.com/',
      verifiedDate: '2026-08-12',
    },
    notes: [
      'Typically clean, washed gravel (3/4" to 1-1/2") without fines.',
      'Used for drainage applications where water permeability is required.',
      'Density similar to general loose gravel due to lack of fines.',
    ],
  },
]