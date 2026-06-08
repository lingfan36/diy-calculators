/**
 * Interior paint calculator — pure, framework-agnostic, unit-testable.
 * Room length/width/height in feet. Wall area = perimeter × height, minus any
 * door/window openings. Returns gallons for the given number of coats.
 * Default coverage 350 ft²/gallon (typical for one coat on primed drywall).
 */

export interface PaintInput {
  /** room length, in feet */
  length: number;
  /** room width, in feet */
  width: number;
  /** ceiling height, in feet */
  height: number;
  /** number of coats (default 2) */
  coats?: number;
  /** coverage per gallon, in ft² (default 350) */
  coveragePerGallon?: number;
  /** total ft² of doors/windows to subtract (default 0) */
  openingsSqFt?: number;
  /** optional price per gallon, for a cost estimate */
  pricePerGallon?: number;
}

export interface PaintResult {
  wallAreaSqFt: number;
  coats: number;
  gallonsExact: number;
  gallons: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/** Gallons of paint for the room's walls. Negative inputs clamp to 0. */
export function calcPaint(input: PaintInput): PaintResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const height = Math.max(0, input.height || 0);
  const coats = input.coats && input.coats > 0 ? input.coats : 2;
  const coverage =
    input.coveragePerGallon && input.coveragePerGallon > 0 ? input.coveragePerGallon : 350;
  const openings = Math.max(0, input.openingsSqFt || 0);

  const wallAreaSqFt = Math.max(0, 2 * (length + width) * height - openings);
  const gallonsExact = coverage > 0 ? (wallAreaSqFt * coats) / coverage : 0;
  const gallons = Math.ceil(gallonsExact);
  const estCost =
    typeof input.pricePerGallon === 'number' && input.pricePerGallon >= 0
      ? round(gallons * input.pricePerGallon)
      : null;

  return {
    wallAreaSqFt: round(wallAreaSqFt),
    coats,
    gallonsExact: round(gallonsExact),
    gallons,
    estCost,
  };
}
