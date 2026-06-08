/**
 * Board feet calculator — pure, framework-agnostic, unit-testable.
 * Board foot = (thickness_in × width_in × length_ft) / 12, per piece.
 * Thickness and width in inches, length in feet.
 */

export interface BoardFeetInput {
  /** thickness, in inches */
  thicknessInches: number;
  /** width, in inches */
  widthInches: number;
  /** length, in feet */
  lengthFeet: number;
  /** number of pieces (default 1) */
  quantity?: number;
  /** optional price per board foot, for a cost estimate */
  pricePerBoardFoot?: number;
}

export interface BoardFeetResult {
  boardFeetEach: number;
  boardFeetTotal: number;
  quantity: number;
  estCost: number | null;
}

const round = (n: number, dp = 2): number => {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
};

/** Board feet for one or more pieces of lumber. Negative inputs clamp to 0. */
export function calcBoardFeet(input: BoardFeetInput): BoardFeetResult {
  const thicknessInches = Math.max(0, input.thicknessInches || 0);
  const widthInches = Math.max(0, input.widthInches || 0);
  const lengthFeet = Math.max(0, input.lengthFeet || 0);
  const quantity = input.quantity && input.quantity > 0 ? Math.floor(input.quantity) : 1;

  const boardFeetEach = (thicknessInches * widthInches * lengthFeet) / 12;
  const boardFeetTotal = boardFeetEach * quantity;
  const estCost =
    typeof input.pricePerBoardFoot === 'number' && input.pricePerBoardFoot >= 0
      ? round(boardFeetTotal * input.pricePerBoardFoot)
      : null;

  return {
    boardFeetEach: round(boardFeetEach),
    boardFeetTotal: round(boardFeetTotal),
    quantity,
    estCost,
  };
}
