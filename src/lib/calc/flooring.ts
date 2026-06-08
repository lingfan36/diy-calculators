/**
 * Flooring calculator — pure, framework-agnostic, unit-testable.
 * Shared by laminate / vinyl-plank / similar box-sold flooring.
 * Room length/width in feet; coverage in ft² per box. Adds a waste margin
 * and returns whole boxes needed (you can't buy a partial box).
 */

export interface FlooringInput {
  /** room length, in feet */
  length: number;
  /** room width, in feet */
  width: number;
  /** coverage of one box, in ft² */
  boxCoverage: number;
  /** waste margin in percent (default 10) */
  wastePercent?: number;
  /** optional price per box, for a cost estimate */
  pricePerBox?: number;
}

export interface FlooringResult {
  areaSqFt: number;
  areaWithWaste: number;
  boxes: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/** Boxes of flooring for a rectangular room. Negative inputs clamp to 0. */
export function calcFlooring(input: FlooringInput): FlooringResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const boxCoverage = Math.max(0, input.boxCoverage || 0);
  const wastePercent =
    typeof input.wastePercent === 'number' && input.wastePercent >= 0 ? input.wastePercent : 10;

  const areaSqFt = length * width;
  const areaWithWaste = areaSqFt * (1 + wastePercent / 100);
  const boxes = boxCoverage > 0 ? Math.ceil(areaWithWaste / boxCoverage) : 0;
  const estCost =
    typeof input.pricePerBox === 'number' && input.pricePerBox >= 0
      ? round(boxes * input.pricePerBox)
      : null;

  return {
    areaSqFt: round(areaSqFt),
    areaWithWaste: round(areaWithWaste),
    boxes,
    estCost,
  };
}
