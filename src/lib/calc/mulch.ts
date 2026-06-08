/**
 * Mulch calculator — pure, framework-agnostic, unit-testable.
 * All length inputs in feet, depth in inches. Output in ft³, yd³ and bags.
 *
 * Keeping calc logic as pure functions (separate from the UI) means:
 *  - the same function can power the page, a unit test, and an API later;
 *  - every calculator page follows the same pattern (one calc module each).
 */

export interface MulchInput {
  /** length of the bed, in feet */
  length: number;
  /** width of the bed, in feet */
  width: number;
  /** desired depth, in inches */
  depthInches: number;
  /** bag size in cubic feet (US bags are usually 2 ft³) */
  bagSizeCuFt?: number;
  /** optional price per cubic yard, for a cost estimate */
  pricePerYard?: number;
}

export interface MulchResult {
  areaSqFt: number;
  cubicFeet: number;
  cubicYards: number;
  bags: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/** Returns mulch needed for a rectangular area. Negative inputs are clamped to 0. */
export function calcMulch(input: MulchInput): MulchResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const depthInches = Math.max(0, input.depthInches || 0);
  const bagSizeCuFt = input.bagSizeCuFt && input.bagSizeCuFt > 0 ? input.bagSizeCuFt : 2;

  const areaSqFt = length * width;
  const cubicFeet = areaSqFt * (depthInches / 12);
  const cubicYards = cubicFeet / 27;
  const bags = bagSizeCuFt > 0 ? Math.ceil(cubicFeet / bagSizeCuFt) : 0;
  const estCost =
    typeof input.pricePerYard === 'number' && input.pricePerYard >= 0
      ? round(cubicYards * input.pricePerYard)
      : null;

  return {
    areaSqFt: round(areaSqFt),
    cubicFeet: round(cubicFeet),
    cubicYards: round(cubicYards),
    bags,
    estCost,
  };
}
