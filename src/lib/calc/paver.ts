/**
 * Paver calculator — pure, framework-agnostic, unit-testable.
 * Patio length/width in feet; paver dimensions in inches. Returns the number
 * of pavers (with a waste margin). One paver covers (L_in × W_in)/144 ft².
 */

export interface PaverInput {
  length: number;
  width: number;
  paverLengthInches: number;
  paverWidthInches: number;
  wastePercent?: number;
  pricePerPaver?: number;
}

export interface PaverResult {
  areaSqFt: number;
  paverAreaSqFt: number;
  pavers: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

export function calcPaver(input: PaverInput): PaverResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const paverLengthInches = Math.max(0, input.paverLengthInches || 0);
  const paverWidthInches = Math.max(0, input.paverWidthInches || 0);
  const wastePercent =
    typeof input.wastePercent === 'number' && input.wastePercent >= 0 ? input.wastePercent : 10;

  const areaSqFt = length * width;
  const paverAreaSqFt = (paverLengthInches * paverWidthInches) / 144;
  const areaWithWaste = areaSqFt * (1 + wastePercent / 100);
  const pavers = paverAreaSqFt > 0 ? Math.ceil(areaWithWaste / paverAreaSqFt) : 0;
  const estCost =
    typeof input.pricePerPaver === 'number' && input.pricePerPaver >= 0
      ? round(pavers * input.pricePerPaver)
      : null;

  return {
    areaSqFt: round(areaSqFt),
    paverAreaSqFt: round(paverAreaSqFt, 4),
    pavers,
    estCost,
  };
}
