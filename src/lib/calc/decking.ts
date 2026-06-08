/**
 * Decking board calculator — pure, framework-agnostic, unit-testable.
 * Deck length/width in feet; board width in inches, board length in feet.
 * One board covers ((boardWidth_in + gap_in)/12) × boardLength_ft ft².
 * Defaults: board width 5.5", board length 8 ft, gap 0.125", waste 10%.
 */

export interface DeckingInput {
  length: number;
  width: number;
  boardWidthInches?: number;
  boardLengthFeet?: number;
  gapInches?: number;
  wastePercent?: number;
  pricePerBoard?: number;
}

export interface DeckingResult {
  deckAreaSqFt: number;
  boardCoverageSqFt: number;
  boards: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

export function calcDecking(input: DeckingInput): DeckingResult {
  const length = Math.max(0, input.length || 0);
  const width = Math.max(0, input.width || 0);
  const boardWidthInches =
    input.boardWidthInches && input.boardWidthInches > 0 ? input.boardWidthInches : 5.5;
  const boardLengthFeet =
    input.boardLengthFeet && input.boardLengthFeet > 0 ? input.boardLengthFeet : 8;
  const gapInches = Math.max(0, typeof input.gapInches === 'number' ? input.gapInches : 0.125);
  const wastePercent =
    typeof input.wastePercent === 'number' && input.wastePercent >= 0 ? input.wastePercent : 10;

  const deckAreaSqFt = length * width;
  const boardCoverageSqFt = ((boardWidthInches + gapInches) / 12) * boardLengthFeet;
  const areaWithWaste = deckAreaSqFt * (1 + wastePercent / 100);
  const boards = boardCoverageSqFt > 0 ? Math.ceil(areaWithWaste / boardCoverageSqFt) : 0;
  const estCost =
    typeof input.pricePerBoard === 'number' && input.pricePerBoard >= 0
      ? round(boards * input.pricePerBoard)
      : null;

  return {
    deckAreaSqFt: round(deckAreaSqFt),
    boardCoverageSqFt: round(boardCoverageSqFt),
    boards,
    estCost,
  };
}
