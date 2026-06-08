/**
 * Sod calculator — pure, framework-agnostic, unit-testable.
 * Area length/width in feet. Returns square footage (with a small waste margin),
 * plus rolls and pallets for the given roll/pallet coverage.
 * Defaults: roll = 10 ft², pallet = 450 ft², waste = 5%.
 */

export interface SodInput {
  length: number;
  width: number;
  wastePercent?: number;
  rollCoverage?: number;
  palletCoverage?: number;
  pricePerSqFt?: number;
}

export interface SodResult {
  areaSqFt: number;
  areaWithWaste: number;
  rolls: number;
  pallets: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

export function calcSod(input: SodInput): SodResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const wastePercent =
    typeof input.wastePercent === 'number' && input.wastePercent >= 0 ? input.wastePercent : 5;
  const rollCoverage = input.rollCoverage && input.rollCoverage > 0 ? input.rollCoverage : 10;
  const palletCoverage =
    input.palletCoverage && input.palletCoverage > 0 ? input.palletCoverage : 450;

  const areaSqFt = length * width;
  const areaWithWaste = areaSqFt * (1 + wastePercent / 100);
  const rolls = Math.ceil(areaWithWaste / rollCoverage);
  const pallets = Math.ceil(areaWithWaste / palletCoverage);
  const estCost =
    typeof input.pricePerSqFt === 'number' && input.pricePerSqFt >= 0
      ? round(areaWithWaste * input.pricePerSqFt)
      : null;

  return {
    areaSqFt: round(areaSqFt),
    areaWithWaste: round(areaWithWaste),
    rolls,
    pallets,
    estCost,
  };
}
