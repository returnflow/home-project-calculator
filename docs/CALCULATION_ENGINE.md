# Calculation Engine Specification

## Geometry

Rectangle: area = length × width

Circle: area = π × radius²

Triangle: area = 0.5 × base × height

Multiple rectangular areas should be supported as a reusable composition.

## Volume

Volume = area × depth.

Normalize depth into the same unit system as the area dimensions before calculation.

## Exact conversions

1 cubic yard = 27 cubic feet.
1 foot = 0.3048 metres.
1 cubic foot = 0.028316846592 cubic metres.
1 US short ton = 2,000 lb.
1 metric tonne = 2,204.62262185 lb.

## Weight

weight = volume × bulk density

Density is material-specific and must come from verified data.

## Bags

bag count = ceiling(required weight / bag weight)

Never round bag counts down.

## Waste

adjusted quantity = base quantity × (1 + wastePercent / 100)

Display base and adjusted quantities separately.

## Pricing

cost = quantity × unit price

Always display the pricing basis.

## Precision

Keep full precision internally. Round only at presentation/purchase boundaries.

## Testing

Every formula requires:

- normal case
- boundary case
- invalid case
- unit conversion case
- rounding case
- known-answer regression case

No formula change without corresponding regression tests.
