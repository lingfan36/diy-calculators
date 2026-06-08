/**
 * Concrete slab calculator — pure, framework-agnostic, unit-testable.
 * Length/width in feet, thickness in inches. Outputs volume (ft³, yd³) and the
 * number of pre-mix bags for the chosen bag size.
 *
 * Bag yields (cubic feet of mixed concrete) are the standard Quikrete figures:
 *   40 lb ≈ 0.30 ft³ · 60 lb ≈ 0.45 ft³ · 80 lb ≈ 0.60 ft³
 */

export interface ConcreteSlabInput {
  /** slab length, in feet */
  length: number;
  /** slab width, in feet */
  width: number;
  /** slab thickness, in inches */
  thicknessInches: number;
  /** pre-mix bag size in lb (40 | 60 | 80); defaults to 80 */
  bagSizeLb?: number;
  /** optional price per cubic yard (ready-mix), for a cost estimate */
  pricePerYard?: number;
}

export interface ConcreteSlabResult {
  areaSqFt: number;
  cubicFeet: number;
  cubicYards: number;
  bags: number;
  bagSizeLb: number;
  estCost: number | null;
}

const BAG_YIELD_CUFT: Record<number, number> = { 40: 0.3, 60: 0.45, 80: 0.6 };

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/** Concrete needed for a rectangular slab. Negative inputs are clamped to 0. */
export function calcConcreteSlab(input: ConcreteSlabInput): ConcreteSlabResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const thicknessInches = Math.max(0, input.thicknessInches || 0);
  const bagSizeLb =
    input.bagSizeLb && BAG_YIELD_CUFT[input.bagSizeLb] ? input.bagSizeLb : 80;
  const yieldPerBag = BAG_YIELD_CUFT[bagSizeLb];

  const areaSqFt = length * width;
  const cubicFeet = areaSqFt * (thicknessInches / 12);
  const cubicYards = cubicFeet / 27;
  const bags = yieldPerBag > 0 ? Math.ceil(cubicFeet / yieldPerBag) : 0;
  const estCost =
    typeof input.pricePerYard === 'number' && input.pricePerYard >= 0
      ? round(cubicYards * input.pricePerYard)
      : null;

  return {
    areaSqFt: round(areaSqFt),
    cubicFeet: round(cubicFeet),
    cubicYards: round(cubicYards),
    bags,
    bagSizeLb,
    estCost,
  };
}
