/**
 * Pure geometry calculations.
 * All inputs/outputs in consistent linear units (feet for internal use).
 */

export function rectangleArea(length: number, width: number): number {
  return length * width
}

export function circleArea(radius: number): number {
  return Math.PI * radius * radius
}

export function triangleArea(base: number, height: number): number {
  return 0.5 * base * height
}

export type AreaShape = {
  type: 'rectangle'
  length: number
  width: number
} | {
  type: 'circle'
  radius: number
} | {
  type: 'triangle'
  base: number
  height: number
}

export function totalArea(shapes: AreaShape[]): number {
  return shapes.reduce((sum, shape) => {
    switch (shape.type) {
      case 'rectangle':
        return sum + rectangleArea(shape.length, shape.width)
      case 'circle':
        return sum + circleArea(shape.radius)
      case 'triangle':
        return sum + triangleArea(shape.base, shape.height)
      default:
        return sum
    }
  }, 0)
}