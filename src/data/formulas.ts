export interface FormulaGuide {
  label: string;
  expression: string;
  notes: string[];
}

const flooringFormula: FormulaGuide = {
  label: 'Box flooring formula',
  expression: 'boxes = ceil((length × width × (1 + waste%)) ÷ coverage per box)',
  notes: [
    'Use the exact coverage printed on the carton, because box coverage varies by product.',
    'Raise waste from 10% to 15-20% for diagonal layouts, closets, stairs, and many doorways.',
  ],
};

const flatCoverageFormula: FormulaGuide = {
  label: 'Flat coverage formula',
  expression: 'units = ceil((length × width × (1 + waste%)) ÷ coverage per unit)',
  notes: [
    'Use this for drywall sheets, shingle bundles, siding squares, and similar coverage-based products.',
    'Small openings are often left in the estimate because cut sheets and offcuts still create waste.',
  ],
};

const formulas: Record<string, FormulaGuide> = {
  'laminate-flooring-calculator': flooringFormula,
  'vinyl-plank-flooring-calculator': flooringFormula,
  'hardwood-flooring-calculator': flooringFormula,
  'engineered-wood-flooring-calculator': flooringFormula,
  'carpet-calculator': {
    label: 'Carpet ordering formula',
    expression: 'square yards = ceil((length × width ÷ 9) × (1 + waste%))',
    notes: [
      'Roll width and seam direction can add more waste than the raw area suggests.',
      'Patterned carpet needs extra material to match repeats across seams.',
    ],
  },
  'floor-tile-calculator': {
    label: 'Tile count formula',
    expression: 'tiles = ceil((area × (1 + waste%)) ÷ tile face area)',
    notes: [
      'Tile face area is tile length × tile width converted from square inches to square feet.',
      'Use 10% waste for a straight grid and 15-20% for diagonal, herringbone, or many cutouts.',
    ],
  },
  'backsplash-tile-calculator': {
    label: 'Backsplash tile formula',
    expression: 'tiles = ceil((width × height × (1 + waste%)) ÷ tile face area)',
    notes: [
      'Most standard backsplash runs are 18 inches high from counter to upper cabinets.',
      'Measure each wall run separately around windows, outlets, and range openings.',
    ],
  },
  'interior-paint-calculator': {
    label: 'Interior paint formula',
    expression: 'gallons = ceil(((room perimeter × wall height - openings) × coats) ÷ coverage)',
    notes: [
      'Smooth primed drywall often covers about 350 ft² per gallon per coat.',
      'Bare drywall, rough texture, and strong color changes lower coverage and may need primer.',
    ],
  },
  'exterior-paint-calculator': {
    label: 'Exterior paint formula',
    expression: 'gallons = ceil(((wall area - large openings) × coats) ÷ coverage)',
    notes: [
      'Stucco, rough siding, and weathered wood absorb more paint than smooth siding.',
      'Estimate trim, doors, primer, and repairs separately when they use different products.',
    ],
  },
  'drywall-calculator': flatCoverageFormula,
  'concrete-slab-calculator': {
    label: 'Concrete slab formula',
    expression: 'cubic yards = length × width × (thickness ÷ 12) ÷ 27',
    notes: [
      'Add 5-10% for uneven subgrade, over-excavation, and spillage.',
      'Ready-mix usually makes more sense than bags once the job is near one cubic yard.',
    ],
  },
  'concrete-footing-calculator': {
    label: 'Concrete footing formula',
    expression: 'cubic yards = footing width × footing depth × total length ÷ 27',
    notes: [
      'Convert width and depth from inches to feet before calculating volume.',
      'Structural footings should follow local code for frost depth, soil, and load requirements.',
    ],
  },
  'board-feet-lumber-calculator': {
    label: 'Board foot formula',
    expression: 'board feet = thickness(in) × width(in) × length(ft) × quantity ÷ 12',
    notes: [
      'Hardwood is usually priced from nominal rough thickness, not the final surfaced dimension.',
      'Add 15-20% for defects, grain selection, and trimming rough stock.',
    ],
  },
  'mulch-calculator': {
    label: 'Mulch volume formula',
    expression: 'cubic yards = length × width × (depth ÷ 12) ÷ 27',
    notes: [
      'A cubic yard covers about 108 ft² at 3 inches deep.',
      'Bag count is cubic feet divided by bag size, usually 2 ft³ per bag.',
    ],
  },
  'gravel-calculator': {
    label: 'Gravel tonnage formula',
    expression: 'tons = length × width × (depth ÷ 12) ÷ 27 × density',
    notes: [
      'Typical gravel density is about 1.4 tons per cubic yard, but suppliers vary.',
      'Driveways and compacted bases often need separate layers calculated at different depths.',
    ],
  },
  'crushed-stone-calculator': {
    label: 'Crushed stone formula',
    expression: 'tons = length × width × (depth ÷ 12) ÷ 27 × density',
    notes: [
      'Crushed stone compacts more than rounded gravel, so order for final compacted depth.',
      'Ask the quarry for the density of the exact stone blend being delivered.',
    ],
  },
  'topsoil-calculator': {
    label: 'Topsoil volume formula',
    expression: 'cubic yards = length × width × (depth ÷ 12) ÷ 27',
    notes: [
      'Topsoil settles after watering, so a small surplus is normal.',
      'Screened topsoil is better for seeding and leveling than unscreened fill.',
    ],
  },
  'sand-calculator': {
    label: 'Sand volume formula',
    expression: 'cubic yards = length × width × (depth ÷ 12) ÷ 27',
    notes: [
      'Paver bedding sand is usually screeded to 1 inch, not packed in deep layers.',
      'Wet sand weighs more, so confirm whether the supplier sells by volume or weight.',
    ],
  },
  'river-rock-calculator': {
    label: 'River rock formula',
    expression: 'tons = length × width × (depth ÷ 12) ÷ 27 × density',
    notes: [
      'Rounded rock does not compact like crushed stone, so edging and landscape fabric matter.',
      'Larger river rock needs a deeper layer to hide soil underneath.',
    ],
  },
  'sod-calculator': {
    label: 'Sod ordering formula',
    expression: 'rolls = ceil((length × width × (1 + waste%)) ÷ roll coverage)',
    notes: [
      'Add 5-10% for curves, beds, tree rings, and trimming along hard edges.',
      'Confirm pallet coverage with the farm because roll sizes differ by region.',
    ],
  },
  'paver-calculator': {
    label: 'Paver count formula',
    expression: 'pavers = ceil((patio area × (1 + waste%)) ÷ paver face area)',
    notes: [
      'Paver face area is length × width converted from square inches to square feet.',
      'Curved borders, herringbone, and diagonal layouts need more cut waste.',
    ],
  },
  'roofing-shingle-calculator': flatCoverageFormula,
  'siding-calculator': flatCoverageFormula,
  'decking-board-calculator': {
    label: 'Deck board formula',
    expression: 'boards = ceil((deck area × (1 + waste%)) ÷ board coverage)',
    notes: [
      'Board coverage should include the installed gap between boards.',
      'Picture-frame borders and diagonal decking require extra boards beyond the field area.',
    ],
  },
};

export function getFormula(slug: string): FormulaGuide | undefined {
  return formulas[slug];
}
