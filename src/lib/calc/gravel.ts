/**
 * Gravel calculator — pure, framework-agnostic, unit-testable.
 * Length/width in feet, depth in inches. Outputs volume (ft³, yd³) and weight
 * (tons), since gravel is usually sold/delivered by weight.
 */

export interface GravelInput {
  /** length of the area, in feet */
  length: number;
  /** width of the area, in feet */
  width: number;
  /** depth, in inches */
  depthInches: number;
  /** bulk density in US tons per cubic yard (typical gravel ≈ 1.4) */
  densityTonsPerYard?: number;
  /** optional price per ton, for a cost estimate */
  pricePerTon?: number;
}

export interface GravelResult {
  areaSqFt: number;
  cubicFeet: number;
  cubicYards: number;
  tons: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/** Gravel needed for a rectangular area. Negative inputs are clamped to 0. */
export function calcGravel(input: GravelInput): GravelResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const depthInches = Math.max(0, input.depthInches || 0);
  const density =
    input.densityTonsPerYard && input.densityTonsPerYard > 0 ? input.densityTonsPerYard : 1.4;

  const areaSqFt = length * width;
  const cubicFeet = areaSqFt * (depthInches / 12);
  const cubicYards = cubicFeet / 27;
  const tons = cubicYards * density;
  const estCost =
    typeof input.pricePerTon === 'number' && input.pricePerTon >= 0
      ? round(tons * input.pricePerTon)
      : null;

  return {
    areaSqFt: round(areaSqFt),
    cubicFeet: round(cubicFeet),
    cubicYards: round(cubicYards),
    tons: round(tons),
    estCost,
  };
}
