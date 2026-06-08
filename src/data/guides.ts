/**
 * Per-calculator differentiated content (the SEO survival layer).
 * Each guide is unique to one material — real method, real numbers, real
 * factors — so pages are NOT template-with-variable-substitution at scale.
 * English first (main battleground). Other locales fall back to the generic
 * copy until translated, so a page is never a half-translated mess.
 */
import type { Lang } from '../i18n/ui';

export interface CalcGuide {
  intro: string;
  steps: string[];
  factors: { label: string; detail: string }[];
  faq?: { q: string; a: string }[];
  /** "How much X for a [common size]?" worked answers — targets size-based long-tail queries. */
  scenarios?: { q: string; a: string }[];
}

const en: Record<string, CalcGuide> = {
  'mulch-calculator': {
    intro:
      'Mulch is sold by the cubic yard or in bags (usually 2 ft³). One cubic yard covers about 162 ft² at 2 inches deep, 108 ft² at 3 inches, or 81 ft² at 4 inches. Most beds use a 2–3 inch layer; weed suppression and tree rings do better at 3–4 inches.',
    steps: [
      'Measure the length and width of each bed in feet and multiply for square footage; add irregular sections separately.',
      'Pick a depth: 2 in for an annual refresh, 3 in for full coverage, 4 in for heavy weed control.',
      'The calculator turns area × depth into cubic feet, then cubic yards (÷27) and 2 ft³ bags.',
      'Order by the cubic yard once you pass a few yards — bulk is far cheaper than bagged.',
    ],
    factors: [
      { label: 'Depth drives everything', detail: 'Going from 2 to 4 inches doubles the volume. Never pile mulch against trunks — "mulch volcanoes" rot bark and invite pests.' },
      { label: 'Settling', detail: 'Loose bark settles 10–20% in the first few weeks, so ordering a little extra is normal.' },
      { label: 'Bag vs bulk', detail: 'A 2 ft³ bag covers ~12 ft² at 2 in, and 13.5 bags make a cubic yard — bulk delivery usually wins past 2–3 yards.' },
    ],
    faq: [
      { q: 'How many bags of mulch are in a cubic yard?', a: 'About 13.5 bags at 2 ft³ each (27 ÷ 2). Stores often round to 13–14.' },
      { q: 'How deep should mulch be?', a: '2–3 inches for most beds, 3–4 inches for weed suppression. Keep it off plant stems and tree trunks.' },
    ],
    scenarios: [
      { q: 'How much mulch for a 10×10 ft bed at 3 in?', a: '~25 ft³ = 0.93 yd³, about 13 bags (2 ft³).' },
      { q: 'How much mulch for a 20×20 ft area at 2 in?', a: '~67 ft³ = 2.5 yd³, about 34 bags or 2.5 yards bulk.' },
      { q: 'How much mulch for a 100 ft² bed at 3 in?', a: '~25 ft³ = 0.93 yd³, roughly 13 bags — about one cubic yard.' },
    ],
  },
  'gravel-calculator': {
    intro:
      'Gravel is sold by weight (tons) or volume (cubic yards). One cubic yard of typical gravel weighs about 1.4 tons (≈2,800 lb) and covers ~100 ft² at 3 inches deep. Driveways want 3–4 inches over a compacted base; decorative beds about 2 inches.',
    steps: [
      'Measure length × width in feet; for driveways include the full drivable width.',
      'Choose depth: 2 in decorative, 3 in walkways, 4 in+ for driveways (often placed in two compacted lifts).',
      'The calculator gives cubic yards and tons using the density you set (default 1.4 ton/yd³).',
      'Order by the ton for delivery and confirm the supplier’s density for your specific stone.',
    ],
    factors: [
      { label: 'Density varies by stone', detail: 'Pea gravel ≈1.4, crushed stone ≈1.35, river rock differs again. The supplier’s figure changes the tonnage — always ask.' },
      { label: 'Compaction', detail: 'Crushed gravel compacts ~20%. Order a bit extra and lay driveways in 2-inch lifts, compacting each one.' },
      { label: 'Base + top layers', detail: 'A proper driveway is a coarse base plus a finer top — calculate each depth separately.' },
    ],
    faq: [
      { q: 'How much does a yard of gravel weigh?', a: 'Roughly 1.4 tons (2,800 lb) for typical gravel; crushed stone and river rock vary, so confirm with your supplier.' },
      { q: 'How many square feet does a ton of gravel cover?', a: 'About 70–100 ft² at 3 inches deep, depending on the stone’s density.' },
    ],
    scenarios: [
      { q: 'How much gravel for a 20×20 ft driveway at 4 in?', a: '~133 ft³ = 4.9 yd³, about 6.9 tons.' },
      { q: 'How much gravel for a 12×20 ft driveway at 3 in?', a: '~60 ft³ = 2.2 yd³, about 3.1 tons.' },
      { q: 'How much gravel for a 10×10 ft patio base at 3 in?', a: '~25 ft³ = 0.93 yd³, about 1.3 tons.' },
    ],
  },
  'concrete-slab-calculator': {
    intro:
      'Concrete is ordered by the cubic yard (ready-mix) or mixed from bags for small jobs. A 10×10 ft slab at 4 inches thick is about 1.23 yd³. Bagged mix is only practical up to roughly 1 yard — beyond that, ready-mix delivery is cheaper and far less work.',
    steps: [
      'Measure length × width in feet and choose a thickness: 4 in for patios and walkways, 5–6 in for driveways.',
      'The calculator returns cubic feet, cubic yards (÷27), and the number of 40 / 60 / 80 lb bags.',
      'Add 5–10% for spillage, an uneven subgrade, and over-excavation.',
      'Order ready-mix for anything over ~1 yd³ — you rarely can hand-mix that fast before it sets.',
    ],
    factors: [
      { label: 'Thickness & strength', detail: '4 in suits foot traffic; driveways and anything bearing vehicles want 5–6 in plus rebar or wire mesh.' },
      { label: 'Bag yield', detail: 'An 80 lb bag yields ~0.6 ft³, 60 lb ~0.45 ft³, 40 lb ~0.30 ft³. A 4-in 10×10 slab needs ~56 × 80 lb bags — hence ready-mix.' },
      { label: 'Subgrade waste', detail: 'Uneven ground silently eats concrete: a ½-inch dip across 100 ft² is ~4 ft³ extra.' },
    ],
    faq: [
      { q: 'How many 80 lb bags of concrete are in a yard?', a: 'About 45 bags (27 ÷ 0.6 ft³ per bag).' },
      { q: 'How thick should a concrete slab be?', a: '4 inches for patios and walkways; 5–6 inches for driveways or loads, ideally with rebar or wire mesh.' },
    ],
    scenarios: [
      { q: 'How much concrete for a 10×10 ft slab at 4 in?', a: '~33 ft³ = 1.23 yd³, or ~56 × 80 lb bags (use ready-mix).' },
      { q: 'How much concrete for a 12×12 ft slab at 4 in?', a: '~48 ft³ = 1.78 yd³ — order ready-mix.' },
      { q: 'How much concrete for a 20×20 ft driveway at 5 in?', a: '~167 ft³ = 6.2 yd³, ready-mix delivery.' },
    ],
  },
  'interior-paint-calculator': {
    intro:
      'Interior paint covers about 350 ft² per gallon per coat on primed drywall. A 12×10 ft room with 8 ft ceilings has ~352 ft² of wall, so two coats need ~3 gallons. Rough or bare surfaces drink more — closer to 300 ft²/gallon.',
    steps: [
      'Measure the room perimeter × ceiling height for wall area; subtract large doors and windows (~20 ft² each).',
      'Decide coats: 2 is standard, 3 when going light over dark or covering patches.',
      'The calculator divides area × coats by coverage (350 ft²/gal default) and rounds up to whole gallons.',
      'Buy one extra quart for touch-ups and keep the batch code for color matching.',
    ],
    factors: [
      { label: 'Surface & color change', detail: 'New drywall, bold color changes, or rough texture cut coverage and often need primer or a third coat.' },
      { label: 'Coverage rating', detail: 'Premium paints cover 350–400 ft²/gal; cheaper or deep-base colors can be 250–300. Check the can.' },
      { label: 'Don’t forget primer', detail: 'Bare drywall or stains need a primer coat first — estimate it as its own coat.' },
    ],
    faq: [
      { q: 'How much paint do I need for a 12x12 room?', a: 'About 3 gallons for two coats on ~360 ft² of wall (subtract doors and windows). Add primer if the surface is bare.' },
      { q: 'How many square feet does a gallon of paint cover?', a: 'Around 350 ft² per coat on smooth primed walls; less on rough or porous surfaces.' },
    ],
    scenarios: [
      { q: 'How much paint for a 10×10 ft room, 2 coats?', a: '~320 ft² of wall × 2 ÷ 350 = ~2 gallons.' },
      { q: 'How much paint for a 12×12 ft room, 2 coats?', a: '~384 ft² of wall × 2 ÷ 350 = ~3 gallons.' },
      { q: 'How much paint for a 12×16 ft room, 2 coats?', a: '~448 ft² of wall × 2 ÷ 350 = ~3 gallons (round up).' },
    ],
  },
  'laminate-flooring-calculator': {
    intro:
      'Laminate is sold by the box, each covering a set area (often ~20 ft², but it varies with plank size). A 12×10 ft room (120 ft²) at 10% waste needs about 7 boxes. Always buy from the same batch so pattern and shade match.',
    steps: [
      'Measure each room’s length × width in feet and add them for total square footage.',
      'Read the box label for its actual coverage — don’t assume 20 ft².',
      'Add waste: 10% for straight lay, 15% for diagonal, more for many doorways or angled rooms.',
      'The calculator rounds up to whole boxes; buy one spare box for future repairs.',
    ],
    factors: [
      { label: 'Box coverage varies', detail: 'Plank size swings coverage per box from ~18 to 30 ft². Use the label number, not a guess.' },
      { label: 'Layout waste', detail: 'Diagonal and herringbone layouts waste 15–20%; long straight runs waste less.' },
      { label: 'Acclimation & underlayment', detail: 'Laminate needs ~48 h to acclimate, and most rooms need underlayment — calculate that separately.' },
    ],
    faq: [
      { q: 'How many boxes of laminate flooring do I need?', a: 'Divide area plus waste by the box’s coverage. A 120 ft² room at 10% waste and 20 ft²/box needs about 7 boxes.' },
      { q: 'How much extra laminate should I buy?', a: '10% for straight layouts, 15% for diagonal, plus one spare box kept for future repairs.' },
    ],
    scenarios: [
      { q: 'How much laminate for a 10×10 ft room?', a: '100 ft² + 10% = 110 ft², about 6 boxes at 20 ft²/box.' },
      { q: 'How much laminate for a 12×12 ft room?', a: '144 ft² + 10% = 158 ft², about 8 boxes.' },
      { q: 'How much laminate for a 200 ft² space?', a: '200 ft² + 10% = 220 ft², about 11 boxes plus one spare.' },
    ],
  },
  'vinyl-plank-flooring-calculator': {
    intro:
      'Luxury vinyl plank (LVP) is sold by the box, each covering ~20–24 ft². It’s waterproof and clicks together as a floating floor over most flat subfloors. A 200 ft² room at 10% waste and 22 ft²/box needs about 10 boxes.',
    steps: [
      'Measure each room’s length × width in feet and add them for total square footage.',
      'Read the box label for its real coverage — it ranges with plank size, don’t assume 20 ft².',
      'Add waste: 10% for straight lay, 15% for diagonal or rooms with many cuts and angles.',
      'The calculator rounds up to whole boxes; keep one spare box from the same batch for repairs.',
    ],
    factors: [
      { label: 'Core type', detail: 'Rigid SPC core handles uneven subfloors and temperature swings better than flexible WPC — it matters over concrete and in sunrooms.' },
      { label: 'Subfloor flatness', detail: 'Floating LVP needs the subfloor flat within ~3/16 inch over 10 ft, or planks flex and click joints fail.' },
      { label: 'Plank length & layout', detail: 'Long planks and diagonal layouts raise waste; stagger end joints at least 6 inches for strength and looks.' },
    ],
    faq: [
      { q: 'How many boxes of vinyl plank for 200 sq ft?', a: 'About 10 boxes at 22 ft²/box with 10% waste. Always check your box’s actual coverage first.' },
      { q: 'Do you need underlayment under vinyl plank?', a: 'Many LVP products have attached padding; if not, use a thin foam underlayment. Over concrete, add a moisture barrier.' },
    ],
  },
  'hardwood-flooring-calculator': {
    intro:
      'Solid hardwood is sold by the carton covering a stated area (often ~20 ft²). Add 5–10% waste and buy from one production lot so grain and color match. It’s nailed down over a wood subfloor and must acclimate first.',
    steps: [
      'Measure each room’s length × width in feet and total the square footage.',
      'Read the carton label for its real coverage — board width changes it.',
      'Add 10% waste (more for diagonal layouts or rooms with many cuts).',
      'The calculator rounds up to whole cartons; keep one spare carton for future board replacement.',
    ],
    factors: [
      { label: 'Acclimation', detail: 'Let hardwood sit in the room 3–7 days; its moisture content should be within 2–4% of the subfloor or boards cup and gap.' },
      { label: 'Grade & lot matching', detail: 'Order from one lot — color and grain vary batch to batch, and you can’t blend later.' },
      { label: 'Board width', detail: 'Wide planks look great but waste more on cuts and move more with humidity; narrow strips waste less.' },
    ],
    faq: [
      { q: 'How much extra hardwood flooring should I buy?', a: 'Add 5–10% for straight installs, up to 15% for diagonal or many doorways, plus a spare carton.' },
      { q: 'Does hardwood flooring need to acclimate?', a: 'Yes — 3–7 days in the installed room so its moisture matches the subfloor; skipping this causes cupping and gaps.' },
    ],
  },
  'engineered-wood-flooring-calculator': {
    intro:
      'Engineered wood is a real-wood veneer over a plywood core, so it’s more dimensionally stable than solid and can float, glue, or staple down. Cartons state coverage (~20–30 ft²). Add 8–10% waste; it still needs a short acclimation.',
    steps: [
      'Measure each room’s length × width and total the area in square feet.',
      'Use the carton’s stated coverage, not a guess.',
      'Add 10% waste for straight lay, 15% for diagonal; round up to whole cartons plus a spare.',
      'Pick an install method (floating click, glue-down, or staple) — it changes underlayment needs.',
    ],
    factors: [
      { label: 'Install method', detail: 'Click-floating is fastest over underlayment; glue-down feels more solid over concrete. The method decides what else you buy.' },
      { label: 'Wear-layer thickness', detail: 'A thicker top veneer (2–6 mm) can be sanded and refinished once or twice; thin veneers cannot.' },
      { label: 'Acclimation', detail: 'Engineered is stable but still rest it 48–72 hours in the room before installing.' },
    ],
    faq: [
      { q: 'Can engineered wood flooring float?', a: 'Yes — click-lock engineered planks float over underlayment, which is why it suits concrete and below-grade rooms better than solid hardwood.' },
      { q: 'How is engineered wood different from laminate for ordering?', a: 'Both sell by the carton/box; engineered uses a real-wood veneer (refinishable if thick), laminate is a printed photo layer.' },
    ],
  },
  'floor-tile-calculator': {
    intro:
      'Floor tile is sold by the box covering a set area; large-format tiles cover more per box but break more in cuts. Add 10% waste for a straight grid, 15–20% for diagonal layouts or rooms with many cutouts.',
    steps: [
      'Measure the floor length × width in feet for total area; add closets and alcoves separately.',
      'Read the box for its real coverage (a box of 12×24 tiles covers ~15 ft²).',
      'Add waste by layout: 10% straight, 15–20% diagonal or herringbone.',
      'Divide and round up to whole boxes, and keep spares from the same batch for cracks later.',
    ],
    factors: [
      { label: 'Tile size vs subfloor', detail: 'Large-format tile (12×24 and up) needs a flat subfloor — within 1/8 inch over 10 ft — or corners lip and crack.' },
      { label: 'Layout direction', detail: 'Diagonal and herringbone patterns cut far more tile than a straight grid; plan the waste up front.' },
      { label: 'Batch shade variation', detail: 'Dye lots differ; order all the tile at once and mix from several boxes as you lay to blend shade.' },
    ],
    faq: [
      { q: 'How many tiles are in a box?', a: 'It depends on tile size — boxes list total coverage in ft², so use that number rather than counting tiles.' },
      { q: 'How much extra floor tile should I buy?', a: '10% for a straight grid, 15–20% for diagonal or many cutouts, plus a few spares for future repairs.' },
    ],
  },
  'carpet-calculator': {
    intro:
      'Carpet is sold by the square yard and comes in 12-ft (sometimes 15-ft) wide rolls, so roll width and seam placement drive waste — often 10–20% over the raw room area. Convert square feet to square yards by dividing by 9.',
    steps: [
      'Measure each room length × width in feet; convert to square yards (ft² ÷ 9).',
      'Plan seams to the 12-ft roll width — a room wider than 12 ft forces a seam.',
      'Add 10% waste, more for stairs, hallways, and patterned carpet.',
      'Round up to whole square yards and keep a remnant for repairs.',
    ],
    factors: [
      { label: 'Roll width vs room width', detail: 'A 13-ft-wide room cut from a 12-ft roll needs a seam and wastes the offcut — measure the long wall against roll width.' },
      { label: 'Pile direction', detail: 'Carpet has a nap; all pieces must run the same direction or seams show as a color shift.' },
      { label: 'Pattern repeat', detail: 'Patterned carpet must align across seams, adding one full repeat of waste per seam.' },
    ],
    faq: [
      { q: 'How many square yards of carpet do I need?', a: 'Divide the room’s square footage by 9, then add 10–20% for roll width and seams.' },
      { q: 'Why does carpet waste so much?', a: 'Fixed 12-ft roll width plus nap direction and pattern matching mean offcuts can’t always be reused.' },
    ],
  },
  'exterior-paint-calculator': {
    intro:
      'Exterior paint covers ~250–350 ft² per gallon per coat — less on rough siding, stucco, or bare wood. Measure each wall, subtract large openings, and plan two coats. Rough cedar and stucco can drink 30–50% more.',
    steps: [
      'Measure each wall width × height; subtract garage doors and large windows.',
      'Choose coats: 2 standard, 3 over bare wood or a big color change.',
      'Divide area × coats by coverage (300 ft²/gal default) and round up to whole gallons.',
      'Add primer for bare or stained surfaces, and buy body and trim paint separately.',
    ],
    factors: [
      { label: 'Surface texture', detail: 'Smooth lap siding hits 350 ft²/gal; stucco, split-face block, and rough cedar can drop to 150–200, so measure texture honestly.' },
      { label: 'Weather window', detail: 'Paint at 50–85°F with no rain for 24 hours; humidity and direct sun ruin the cure.' },
      { label: 'Body vs trim', detail: 'Estimate the field color and trim/fascia separately — they use different sheens and quantities.' },
    ],
    faq: [
      { q: 'How much exterior paint do I need for a house?', a: 'A typical 1,500 ft² single-story has ~1,400 ft² of wall — about 5 gallons for two coats on smooth siding, more on stucco.' },
      { q: 'How many coats of exterior paint?', a: 'Two over an existing painted surface; three (with primer) over bare wood or when changing color dramatically.' },
    ],
  },
  'drywall-calculator': {
    intro:
      'Drywall comes in 4×8 (32 ft²) and 4×12 (48 ft²) sheets. Divide total wall and ceiling area by the sheet size for the count; bigger sheets mean fewer seams to tape. Add ~10% for cuts and waste.',
    steps: [
      'Measure each wall and ceiling area in square feet and add them.',
      'Pick a sheet size — 4×12 cuts seams on long walls, 4×8 is easier to handle solo.',
      'Divide total area by sheet coverage (32 or 48 ft²) and add 10% waste.',
      'Round up to whole sheets; don’t forget screws, joint tape, and compound.',
    ],
    factors: [
      { label: 'Sheet size trade-off', detail: 'Larger 4×12 sheets leave fewer seams to finish but are heavy and awkward; 4×8 is manageable for one person.' },
      { label: 'Thickness by location', detail: 'Use 1/2 inch on walls, 5/8 inch on ceilings and where fire rating is required.' },
      { label: 'Finishing materials', detail: 'Plan ~1 lb of screws and a tube of compound per few sheets, plus tape for every seam — they’re separate buys.' },
    ],
    faq: [
      { q: 'How many sheets of drywall for a 12x12 room?', a: 'Walls plus ceiling run ~540 ft²; at 32 ft²/sheet with waste that’s about 18–20 sheets of 4×8.' },
      { q: 'What size drywall sheet should I use?', a: '4×8 for tight spaces and solo work; 4×12 on long, tall walls to minimize seams.' },
    ],
    scenarios: [
      { q: 'How many drywall sheets for a 10×10 ft room (8 ft walls)?', a: 'Walls ~320 ft² + ceiling 100 ft² = 420 ft², about 14–15 sheets of 4×8.' },
      { q: 'How many drywall sheets for a 12×12 ft room?', a: '~540 ft² total, about 18–20 sheets of 4×8 with waste.' },
      { q: 'How many drywall sheets for a garage (20×20 ft)?', a: 'Walls ~640 ft² + ceiling 400 ft² = 1,040 ft², about 33–36 sheets.' },
    ],
  },
  'backsplash-tile-calculator': {
    intro:
      'A kitchen backsplash is usually 18 inches tall between the counter and upper cabinets. Measure each run’s length × height, add 10–15% waste, and order extra for mosaics and intricate cuts that waste more.',
    steps: [
      'Measure each wall run length × 18 in (1.5 ft) height; add the areas together.',
      'Add 10% waste for field tile, 15% for mosaics or herringbone.',
      'Convert to boxes or mosaic sheets using the product’s coverage and round up.',
      'Keep a few spare sheets from the same batch for future repairs.',
    ],
    factors: [
      { label: 'Mosaic vs field tile', detail: 'Mesh-backed mosaic sheets (~1 ft² each) cut easily around outlets; large field tiles need more careful cuts.' },
      { label: 'Outlet & window cutouts', detail: 'Only subtract large openings — small outlet cuts still consume a full tile, so leave them in the area.' },
      { label: 'Focal accents', detail: 'A patterned strip or niche uses a different tile; count it separately so you don’t run short.' },
    ],
    faq: [
      { q: 'How much tile do I need for a kitchen backsplash?', a: 'Multiply each run length by 1.5 ft (18 in) of height, sum them, and add 10–15%. A 15-ft run is ~22.5 ft² plus waste.' },
      { q: 'What is the standard backsplash height?', a: '18 inches from countertop to the upper cabinets; full-height behind a range or open wall runs taller.' },
    ],
  },
  'concrete-footing-calculator': {
    intro:
      'Footings are ordered by volume in cubic yards. Multiply width × depth × total length for continuous footings, or use column volume for pier and Sonotube footings. Local frost depth and load set the minimum dimensions.',
    steps: [
      'Measure footing width and depth in inches (convert to feet) and the total run length.',
      'Multiply width × depth × length for cubic feet, then ÷27 for cubic yards.',
      'Add 10% for over-dig and uneven trench bottoms.',
      'Order ready-mix past ~1 yard; place rebar before the pour for any structural footing.',
    ],
    factors: [
      { label: 'Frost depth', detail: 'Footings must sit below the local frost line — often 36–48 inches in cold climates — or they heave and crack the structure above.' },
      { label: 'Width by load', detail: 'A continuous wall footing is usually 2× the wall width; point loads (posts, columns) need a wider pad.' },
      { label: 'Rebar', detail: 'Most footings need 2–3 horizontal bars plus dowels tying into the wall above; concrete alone cracks in tension.' },
    ],
    faq: [
      { q: 'How deep should a footing be?', a: 'Below the local frost line — commonly 36–48 inches — and at least 12 inches into undisturbed soil. Check your code.' },
      { q: 'How much concrete for a footing?', a: 'Width × depth × length in feet, ÷27 for yards. A 16 in × 8 in × 40 ft footing is ~1.3 yd³ plus waste.' },
    ],
  },
  'board-feet-lumber-calculator': {
    intro:
      'A board foot is 144 cubic inches — a piece 1 inch thick, 12 inches wide, 12 inches long. Hardwood is priced by the board foot using nominal (rough) thickness, so a "4/4" board counts as 1 inch even after surfacing.',
    steps: [
      'Enter thickness × width in inches, plus length and quantity.',
      'The calculator returns total board feet (thickness × width × length ÷ 144 per foot).',
      'Use nominal thickness for pricing (4/4, 5/4, 8/4), not the surfaced dimension.',
      'Add 15–20% for defects, grain selection, and cutoffs on rough lumber.',
    ],
    factors: [
      { label: 'Nominal vs actual', detail: 'Lumber is sold by nominal size: 4/4 = 1 inch rough (≈13/16" surfaced), 8/4 = 2 inches. Price uses the rough number.' },
      { label: 'Waste for defects', detail: 'Rough hardwood has knots, splits, and color you’ll cut around — budget 15–20% over your finished board-foot need.' },
      { label: 'Width premium', detail: 'Wide, clear boards cost more per board foot than narrow ones; mixing widths lowers cost.' },
    ],
    faq: [
      { q: 'What is a board foot?', a: 'A volume of lumber equal to 144 cubic inches — 1 inch thick × 12 inches wide × 12 inches long.' },
      { q: 'How do you calculate board feet?', a: 'Thickness (in) × width (in) × length (in) ÷ 144, or × length (ft) ÷ 12. Multiply by quantity for the total.' },
    ],
  },
  'crushed-stone-calculator': {
    intro:
      'Crushed stone is sold by the ton or cubic yard and used as a compacting base under driveways, patios, and pavers. A cubic yard weighs about 1.35 tons and covers ~100 ft² at 3 inches before compaction.',
    steps: [
      'Measure the area length × width in feet.',
      'Choose depth: 3 inches for a paver base, 4–6 inches under a driveway.',
      'The calculator gives cubic yards and tons at 1.35 ton/yd³ — confirm the quarry’s density.',
      'Order a bit extra for compaction loss and lay it in compacted lifts.',
    ],
    factors: [
      { label: 'Angular locks and compacts', detail: 'Crushed stone has sharp faces that interlock and compact ~20% — unlike rounded gravel — making it the right base material.' },
      { label: 'Gradation', detail: '3/4-inch minus (with fines) packs into a hard base; clean 3/4-inch stone drains but won’t compact as tight.' },
      { label: 'Base depth by use', detail: 'Walkways need ~3 inches, patios 4 inches, driveways 6 inches or more over a geotextile in soft soil.' },
    ],
    faq: [
      { q: 'How much does a yard of crushed stone weigh?', a: 'About 1.35 tons (~2,700 lb), varying with stone type — confirm with your supplier.' },
      { q: 'How deep should a crushed stone base be?', a: '3 inches under pavers, 4 inches under patios, 6+ inches under driveways, all compacted in lifts.' },
    ],
  },
  'topsoil-calculator': {
    intro:
      'Topsoil is sold by the cubic yard (bulk) or bag (often 0.75–1 ft³). A cubic yard covers ~100 ft² at 3 inches and weighs roughly 1.1 tons dry — wet soil is heavier. Use it to build beds or level low spots before seeding.',
    steps: [
      'Measure the area length × width in feet.',
      'Choose depth: 2–3 inches to over-seed a lawn, 6–12 inches for new or raised beds.',
      'The calculator returns cubic yards and tons at 1.1 ton/yd³.',
      'Add ~10% — soil settles noticeably after the first watering.',
    ],
    factors: [
      { label: 'Screened vs unscreened', detail: 'Screened topsoil is finer with fewer rocks and roots (better for seeding) and costs more than raw fill.' },
      { label: 'Settling', detail: 'Fresh soil settles and compacts after rain and watering — order extra and rake it slightly proud.' },
      { label: 'Bagged vs bulk', detail: 'Bags suit small jobs; bulk delivery is far cheaper past about a cubic yard (≈27–36 bags).' },
    ],
    faq: [
      { q: 'How much does a yard of topsoil cover?', a: 'About 100 ft² at 3 inches deep, or ~160 ft² at 2 inches.' },
      { q: 'How many bags of topsoil in a cubic yard?', a: 'About 27 bags at 1 ft³ each, or ~36 bags at 0.75 ft³.' },
    ],
  },
  'sand-calculator': {
    intro:
      'Sand is sold by the ton or cubic yard and weighs about 1.35–1.4 tons per yard. A cubic yard covers ~300 ft² at 1 inch, so a 1-inch paver bedding layer takes roughly 0.0031 yd³ per ft².',
    steps: [
      'Measure the area length × width in feet.',
      'Pick a depth: 1 inch for paver bedding, 2–3 inches for fill or a base course.',
      'The calculator gives cubic yards and tons at ~1.4 ton/yd³.',
      'Add a little extra for screeding loss and uneven ground.',
    ],
    factors: [
      { label: 'Sand type', detail: 'Use sharp concrete sand for paver bedding (not soft play sand), and polymeric sand to lock paver joints.' },
      { label: 'Bedding depth', detail: 'Screed paver bedding to exactly 1 inch — thicker beds let pavers sink and rut over time.' },
      { label: 'Moisture weight', detail: 'Wet sand weighs noticeably more per yard; order by volume and let the supplier convert if buying by weight.' },
    ],
    faq: [
      { q: 'How much sand do I need under pavers?', a: 'A 1-inch bedding layer is ~0.0031 yd³ per ft² — about 1 yard per 320 ft² of patio.' },
      { q: 'How much does a yard of sand weigh?', a: 'Roughly 1.35–1.4 tons (2,700–2,800 lb) dry; more when wet.' },
    ],
  },
  'sod-calculator': {
    intro:
      'Sod is sold by the piece (slab or roll) and by the pallet. A pallet typically covers 400–500 ft², and a standard 16×24-inch piece covers ~2.67 ft². Order 5–10% extra for trimming around curves and beds.',
    steps: [
      'Measure each lawn area length × width in feet; add irregular sections separately.',
      'Add 5–10% waste for curves, edges, and cuts.',
      'Divide by the piece or pallet coverage and round up.',
      'Lay it within 24 hours of delivery — sod is perishable.',
    ],
    factors: [
      { label: 'Lay it fast', detail: 'Sod is living grass; it yellows on the pallet within a day or two in heat, so schedule delivery for install day.' },
      { label: 'Soil prep', detail: 'Level and lightly till the soil, then water the new sod immediately and daily for two weeks to root it.' },
      { label: 'Pallet coverage varies', detail: 'Farms cut different slab sizes — confirm the exact ft² per pallet before ordering.' },
    ],
    faq: [
      { q: 'How many pieces of sod are in a pallet?', a: 'Usually 150–180 pieces covering 400–500 ft², depending on the farm’s slab size.' },
      { q: 'How much extra sod should I order?', a: '5–10% over the measured area to cover curves, edges, and trimming waste.' },
    ],
    scenarios: [
      { q: 'How much sod for a 1,000 ft² lawn?', a: '1,000 ft² + 10% = 1,100 ft², about 2–3 pallets.' },
      { q: 'How much sod for a 500 ft² yard?', a: '500 ft² + 10% = 550 ft², about 1 pallet plus a few pieces.' },
      { q: 'How many pallets of sod for 1/4 acre?', a: '~10,890 ft² + 10% ≈ 12,000 ft², about 24–30 pallets.' },
    ],
  },
  'paver-calculator': {
    intro:
      'Pavers are counted by dividing the patio area by one paver’s face area. A 6×9-inch paver covers 0.375 ft² (about 2.67 per ft²); a 12×12 covers 1 ft². Add 5–10% for cuts on edges and curves.',
    steps: [
      'Measure the patio area length × width in feet.',
      'Enter your paver’s dimensions so the calculator finds pavers per ft².',
      'Add 5% waste for a straight running bond, 10% for diagonal or curved borders.',
      'Round up to whole pavers and order a few spares from the same batch.',
    ],
    factors: [
      { label: 'Pattern waste', detail: 'Herringbone, basketweave, and circle kits cut far more pavers than a simple running bond — plan the extra.' },
      { label: 'Base & bedding', detail: 'Pavers ride on 1 inch of bedding sand over 4–6 inches of compacted crushed stone; skimping causes settling.' },
      { label: 'Edge restraint', detail: 'Plastic or concrete edging locks the field so pavers don’t spread and gap over time.' },
    ],
    faq: [
      { q: 'How many pavers do I need per square foot?', a: 'Divide 144 by the paver’s face area in square inches. A 6×9 paver (54 in²) is ~2.67 per ft².' },
      { q: 'How much extra should I add for paver cuts?', a: '5% for straight patterns, 10% for diagonal layouts or curved and circular borders.' },
    ],
    scenarios: [
      { q: 'How many 6×9 in pavers for a 10×10 ft patio?', a: '100 ft² × 2.67 = ~267 pavers, +5% ≈ 280.' },
      { q: 'How many 12×12 in pavers for a 12×12 ft patio?', a: '144 ft² × 1 = 144 pavers, +5% ≈ 152.' },
      { q: 'How many pavers for a 200 ft² patio (6×9 in)?', a: '200 ft² × 2.67 = ~534 pavers, +10% for cuts ≈ 588.' },
    ],
  },
  'river-rock-calculator': {
    intro:
      'River rock is smooth decorative stone sold by the ton or cubic yard, weighing about 1.4 tons per yard. It covers ~80 ft² at 2 inches; because it doesn’t compact or lock, lay landscape fabric under it to stop sinking.',
    steps: [
      'Measure the bed area length × width in feet.',
      'Choose 2–3 inches of depth (deeper for larger stone to hide the soil).',
      'The calculator gives cubic yards and tons at 1.4 ton/yd³.',
      'Lay landscape fabric first and edge the bed before spreading.',
    ],
    factors: [
      { label: 'Stone size sets depth', detail: 'Larger 1–2 inch rock needs ~3 inches of depth to fully cover soil; small rock can go ~2 inches.' },
      { label: 'Won’t compact', detail: 'Rounded river rock stays loose and migrates — edging and fabric keep it in place and off the soil.' },
      { label: 'Landscape fabric', detail: 'Fabric underneath blocks weeds and stops rock from sinking and mixing into the dirt below.' },
    ],
    faq: [
      { q: 'How deep should river rock be?', a: '2 inches for small rock, up to 3 inches for 1–2 inch stone, over landscape fabric.' },
      { q: 'How much does river rock weigh per yard?', a: 'About 1.4 tons (~2,800 lb) per cubic yard, varying with stone size.' },
    ],
  },
  'roofing-shingle-calculator': {
    intro:
      'Roofing is measured in "squares" — one square is 100 ft² of roof. Asphalt shingles run ~3 bundles to the square. Use the actual roof area (not the ground footprint), which is larger because of pitch, and add 10–15% for waste, hips, and valleys.',
    steps: [
      'Get the true roof area: footprint × a pitch factor (e.g. ×1.12 for a 6/12 roof).',
      'Divide the roof area by 100 to get squares.',
      'Multiply squares by 3 for asphalt-shingle bundles.',
      'Add 10% waste (15% for complex roofs with many valleys), then round up.',
    ],
    factors: [
      { label: 'Pitch multiplier', detail: 'A 6/12 roof is ~12% larger than its footprint; a 12/12 is ~41% larger. Measuring only the footprint underbuys shingles.' },
      { label: 'Hips, valleys & caps', detail: 'Starter strip, ridge cap, and valley cuts all add material beyond the field — budget the extra 10–15%.' },
      { label: 'Separate components', detail: 'Underlayment, drip edge, ice-and-water shield, and nails are counted separately from the shingle bundles.' },
    ],
    faq: [
      { q: 'How many bundles of shingles are in a square?', a: 'Three bundles per square for standard architectural asphalt shingles (some heavyweight lines use four).' },
      { q: 'How do I figure roof area from the ground?', a: 'Measure the building footprint, then multiply by the pitch factor for your slope (≈1.12 for 6/12, ≈1.20 for 8/12).' },
    ],
    scenarios: [
      { q: 'How many shingles for a 1,500 ft² roof (6/12)?', a: '1,500 × 1.12 = 1,680 ft² = ~17 squares, about 51 bundles + 10% waste.' },
      { q: 'How many shingles for a 1,000 ft² footprint (4/12)?', a: '1,000 × 1.05 = 1,050 ft² = ~11 squares, about 33 bundles + waste.' },
      { q: 'How many bundles for a 24×40 ft gable roof (6/12)?', a: 'Footprint 960 ft² × 1.12 = ~1,075 ft² = ~11 squares, ~33 bundles + 10%.' },
    ],
  },
  'siding-calculator': {
    intro:
      'Siding is estimated by wall area, often expressed in squares (100 ft²). Measure each wall, subtract large openings, and add 10% waste — 15% for lap siding with many cuts or a complex layout with gables.',
    steps: [
      'Measure each wall width × height and add them for gross wall area.',
      'Subtract doors and large windows (leave small openings in).',
      'Add 10% waste (15% for lap siding, gables, and many openings).',
      'Convert to squares or pieces using the product’s coverage and round up.',
    ],
    factors: [
      { label: 'Lap exposure', detail: 'The visible reveal (e.g. 7 inches on a 12-inch board) sets how many courses each wall needs — it drives the piece count more than raw area.' },
      { label: 'Trim & accessories', detail: 'Corner posts, J-channel, starter strip, and soffit are separate from the field siding — count them per linear foot.' },
      { label: 'Gables and openings', detail: 'Triangular gables and lots of windows raise cut waste; bump the allowance toward 15%.' },
    ],
    faq: [
      { q: 'How much siding do I need for a 1500 sq ft house?', a: 'Wall area (not floor area) usually runs ~1,400–1,800 ft² on a two-story — about 14–18 squares plus 10% waste.' },
      { q: 'How many squares of siding do I need?', a: 'Total wall area minus large openings, divided by 100, plus 10–15% waste.' },
    ],
  },
  'decking-board-calculator': {
    intro:
      'Decking boards are counted from the deck area and the board’s coverage, including the gap between boards. A 5/4×6 board is 5.5 inches wide; with a 1/8-inch gap it covers ~5.625 inches, so a 12×12 deck needs roughly 26 boards per 12-ft length plus waste.',
    steps: [
      'Measure deck length × width in feet.',
      'Choose board width and length; the calculator includes the gap between boards.',
      'It returns the board count for the run direction you set.',
      'Add 10% for cuts, plus extra boards for a picture-frame border or diagonal layout.',
    ],
    factors: [
      { label: 'Board run direction', detail: 'Diagonal decking looks great but wastes 15%+ in angled cuts; straight runs parallel to the short side waste least.' },
      { label: 'Gap spacing', detail: 'Leave 1/8–1/4 inch between boards for drainage and expansion — composite needs the wider gap in heat.' },
      { label: 'Joist spacing', detail: 'Frame joists at 16 inches for most boards, 12 inches for diagonal layouts or thin composite, or boards sag.' },
    ],
    faq: [
      { q: 'How many deck boards do I need?', a: 'Divide deck width by the board coverage (width + gap) for boards per row, then multiply by rows and add 10%.' },
      { q: 'How much gap should I leave between deck boards?', a: '1/8 inch for dry wood that will shrink, up to 1/4 inch for composite and pressure-treated that’s still wet.' },
    ],
    scenarios: [
      { q: 'How many 5/4×6 boards for a 12×12 ft deck?', a: '~26 boards per 12-ft length + 10% ≈ 29 boards.' },
      { q: 'How many deck boards for a 10×16 ft deck?', a: '~21 boards at 16 ft (or 42 at 8 ft) + 10% waste.' },
      { q: 'How many boards for a 16×20 ft deck?', a: '~35 boards per 16-ft run + 10% ≈ 39 boards.' },
    ],
  },
};

const es: Record<string, CalcGuide> = {
  'mulch-calculator': {
    intro:
      'El mantillo se vende por yarda cúbica o en bolsas (normalmente 2 ft³). Una yarda cúbica cubre unos 162 ft² a 2 pulgadas de profundidad, 108 ft² a 3 pulgadas u 81 ft² a 4 pulgadas. La mayoría de los parterres usan una capa de 2–3 pulgadas; para controlar malezas y en alcorques conviene 3–4 pulgadas.',
    steps: [
      'Mide el largo y el ancho de cada parterre en pies y multiplícalos para obtener los pies cuadrados; suma las secciones irregulares por separado.',
      'Elige una profundidad: 2 in para una renovación anual, 3 in para cobertura completa, 4 in para control intenso de malezas.',
      'La calculadora convierte área × profundidad en pies cúbicos, luego en yardas cúbicas (÷27) y bolsas de 2 ft³.',
      'Pide a granel por yarda cúbica una vez superadas unas pocas yardas: a granel es mucho más barato que en bolsa.',
    ],
    factors: [
      { label: 'La profundidad lo determina todo', detail: 'Pasar de 2 a 4 pulgadas duplica el volumen. Nunca amontones mantillo contra los troncos: los “volcanes de mantillo” pudren la corteza y atraen plagas.' },
      { label: 'Asentamiento', detail: 'La corteza suelta se asienta un 10–20% en las primeras semanas, así que pedir un poco de más es normal.' },
      { label: 'Bolsa vs. granel', detail: 'Una bolsa de 2 ft³ cubre ~12 ft² a 2 in, y 13,5 bolsas hacen una yarda cúbica: a granel suele convenir a partir de 2–3 yardas.' },
    ],
    faq: [
      { q: '¿Cuántas bolsas de mantillo hay en una yarda cúbica?', a: 'Unas 13,5 bolsas de 2 ft³ cada una (27 ÷ 2). Las tiendas suelen redondear a 13–14.' },
      { q: '¿Qué profundidad debe tener el mantillo?', a: '2–3 pulgadas para la mayoría de los parterres, 3–4 pulgadas para suprimir malezas. Manténlo alejado de tallos y troncos.' },
    ],
    scenarios: [
      { q: '¿Cuánto mantillo para un parterre de 10×10 ft a 3 in?', a: '~25 ft³ = 0,93 yd³, unas 13 bolsas (2 ft³).' },
      { q: '¿Cuánto mantillo para un área de 20×20 ft a 2 in?', a: '~67 ft³ = 2,5 yd³, unas 34 bolsas o 2,5 yardas a granel.' },
      { q: '¿Cuánto mantillo para un parterre de 100 ft² a 3 in?', a: '~25 ft³ = 0,93 yd³, unas 13 bolsas — aproximadamente una yarda cúbica.' },
    ],
  },
  'gravel-calculator': {
    intro:
      'La grava se vende por peso (toneladas) o volumen (yardas cúbicas). Una yarda cúbica de grava típica pesa unas 1,4 toneladas (≈2.800 lb) y cubre ~100 ft² a 3 pulgadas de profundidad. Las entradas para coches necesitan 3–4 pulgadas sobre una base compactada; los parterres decorativos unas 2 pulgadas.',
    steps: [
      'Mide largo × ancho en pies; para entradas de coche incluye todo el ancho transitable.',
      'Elige profundidad: 2 in decorativa, 3 in senderos, 4 in o más para entradas de coche (a menudo en dos capas compactadas).',
      'La calculadora da yardas cúbicas y toneladas usando la densidad que indiques (por defecto 1,4 ton/yd³).',
      'Pide por tonelada para la entrega y confirma con el proveedor la densidad de tu piedra concreta.',
    ],
    factors: [
      { label: 'La densidad varía según la piedra', detail: 'La gravilla ≈1,4, la piedra triturada ≈1,35, el canto rodado difiere otra vez. La cifra del proveedor cambia el tonelaje: pregunta siempre.' },
      { label: 'Compactación', detail: 'La grava triturada se compacta ~20%. Pide un poco de más y coloca las entradas en capas de 2 pulgadas, compactando cada una.' },
      { label: 'Capas de base y superior', detail: 'Una entrada bien hecha es una base gruesa más una capa superior más fina: calcula cada profundidad por separado.' },
    ],
    faq: [
      { q: '¿Cuánto pesa una yarda de grava?', a: 'Aproximadamente 1,4 toneladas (2.800 lb) para grava típica; la piedra triturada y el canto rodado varían, así que confírmalo con tu proveedor.' },
      { q: '¿Cuántos pies cuadrados cubre una tonelada de grava?', a: 'Unos 70–100 ft² a 3 pulgadas de profundidad, según la densidad de la piedra.' },
    ],
    scenarios: [
      { q: '¿Cuánta grava para una entrada de 20×20 ft a 4 in?', a: '~133 ft³ = 4,9 yd³, unas 6,9 toneladas.' },
      { q: '¿Cuánta grava para una entrada de 12×20 ft a 3 in?', a: '~60 ft³ = 2,2 yd³, unas 3,1 toneladas.' },
      { q: '¿Cuánta grava para una base de patio de 10×10 ft a 3 in?', a: '~25 ft³ = 0,93 yd³, unas 1,3 toneladas.' },
    ],
  },
  'concrete-slab-calculator': {
    intro:
      'El hormigón se pide por yarda cúbica (premezclado) o se mezcla en sacos para trabajos pequeños. Una losa de 10×10 ft con 4 pulgadas de espesor son unas 1,23 yd³. El saco premezclado solo es práctico hasta aproximadamente 1 yarda; más allá, la entrega de premezclado sale más barata y da mucho menos trabajo.',
    steps: [
      'Mide largo × ancho en pies y elige un espesor: 4 in para patios y senderos, 5–6 in para entradas de coche.',
      'La calculadora devuelve pies cúbicos, yardas cúbicas (÷27) y el número de sacos de 40 / 60 / 80 lb.',
      'Añade un 5–10% por derrames, una subbase irregular y sobreexcavación.',
      'Pide premezclado para cualquier cosa que supere ~1 yd³: rara vez puedes mezclar a mano tan rápido antes de que fragüe.',
    ],
    factors: [
      { label: 'Espesor y resistencia', detail: '4 in sirve para tránsito peatonal; las entradas de coche y todo lo que soporte vehículos necesitan 5–6 in más varilla o malla.' },
      { label: 'Rendimiento del saco', detail: 'Un saco de 80 lb rinde ~0,6 ft³, el de 60 lb ~0,45 ft³, el de 40 lb ~0,30 ft³. Una losa de 10×10 a 4 in necesita ~56 sacos de 80 lb: de ahí el premezclado.' },
      { label: 'Desperdicio por subbase', detail: 'El terreno irregular consume hormigón en silencio: un hundimiento de ½ pulgada en 100 ft² son ~4 ft³ extra.' },
    ],
    faq: [
      { q: '¿Cuántos sacos de 80 lb de hormigón hay en una yarda?', a: 'Unos 45 sacos (27 ÷ 0,6 ft³ por saco).' },
      { q: '¿Qué grosor debe tener una losa de hormigón?', a: '4 pulgadas para patios y senderos; 5–6 pulgadas para entradas o cargas, idealmente con varilla o malla.' },
    ],
    scenarios: [
      { q: '¿Cuánto hormigón para una losa de 10×10 ft a 4 in?', a: '~33 ft³ = 1,23 yd³, o ~56 sacos de 80 lb (usa premezclado).' },
      { q: '¿Cuánto hormigón para una losa de 12×12 ft a 4 in?', a: '~48 ft³ = 1,78 yd³: pide premezclado.' },
      { q: '¿Cuánto hormigón para una entrada de 20×20 ft a 5 in?', a: '~167 ft³ = 6,2 yd³, entrega de premezclado.' },
    ],
  },
  'interior-paint-calculator': {
    intro:
      'La pintura de interior cubre unos 350 ft² por galón y por mano sobre pladur imprimado. Una habitación de 12×10 ft con techos de 8 ft tiene ~352 ft² de pared, así que dos manos necesitan ~3 galones. Las superficies rugosas o sin imprimar absorben más: más bien 300 ft²/galón.',
    steps: [
      'Mide el perímetro de la habitación × la altura del techo para el área de pared; resta las puertas y ventanas grandes (~20 ft² cada una).',
      'Decide las manos: 2 es lo normal, 3 al cubrir claro sobre oscuro o tapar parches.',
      'La calculadora divide área × manos entre el rendimiento (350 ft²/gal por defecto) y redondea hacia arriba a galones enteros.',
      'Compra un cuarto de galón extra para retoques y guarda el código de lote para igualar el color.',
    ],
    factors: [
      { label: 'Superficie y cambio de color', detail: 'El pladur nuevo, los cambios de color intensos o la textura rugosa reducen el rendimiento y suelen requerir imprimación o una tercera mano.' },
      { label: 'Rendimiento declarado', detail: 'Las pinturas premium cubren 350–400 ft²/gal; las más baratas o de base oscura pueden ser 250–300. Revisa el bote.' },
      { label: 'No olvides la imprimación', detail: 'El pladur desnudo o las manchas necesitan una mano de imprimación primero: estímala como una mano más.' },
    ],
    faq: [
      { q: '¿Cuánta pintura necesito para una habitación de 12x12?', a: 'Unos 3 galones para dos manos sobre ~360 ft² de pared (resta puertas y ventanas). Añade imprimación si la superficie está sin tratar.' },
      { q: '¿Cuántos pies cuadrados cubre un galón de pintura?', a: 'Alrededor de 350 ft² por mano en paredes lisas e imprimadas; menos en superficies rugosas o porosas.' },
    ],
    scenarios: [
      { q: '¿Cuánta pintura para una habitación de 10×10 ft, 2 manos?', a: '~320 ft² de pared × 2 ÷ 350 = ~2 galones.' },
      { q: '¿Cuánta pintura para una habitación de 12×12 ft, 2 manos?', a: '~384 ft² de pared × 2 ÷ 350 = ~3 galones.' },
      { q: '¿Cuánta pintura para una habitación de 12×16 ft, 2 manos?', a: '~448 ft² de pared × 2 ÷ 350 = ~3 galones (redondea).' },
    ],
  },
  'laminate-flooring-calculator': {
    intro:
      'El laminado se vende por caja, cada una cubre un área determinada (a menudo ~20 ft², pero varía con el tamaño de la lama). Una habitación de 12×10 ft (120 ft²) con un 10% de desperdicio necesita unas 7 cajas. Compra siempre del mismo lote para que el patrón y el tono coincidan.',
    steps: [
      'Mide el largo × ancho de cada habitación en pies y súmalos para el total de pies cuadrados.',
      'Lee la etiqueta de la caja para su cobertura real: no supongas 20 ft².',
      'Añade desperdicio: 10% para colocación recta, 15% en diagonal, más con muchas puertas o habitaciones en ángulo.',
      'La calculadora redondea hacia arriba a cajas enteras; compra una caja de repuesto para futuras reparaciones.',
    ],
    factors: [
      { label: 'La cobertura por caja varía', detail: 'El tamaño de la lama hace que la cobertura por caja oscile entre ~18 y 30 ft². Usa el número de la etiqueta, no una suposición.' },
      { label: 'Desperdicio por diseño', detail: 'Los diseños en diagonal y espiga desperdician 15–20%; las tiradas rectas largas desperdician menos.' },
      { label: 'Aclimatación y base', detail: 'El laminado necesita ~48 h para aclimatarse, y la mayoría de las habitaciones necesitan una base: calcúlala por separado.' },
    ],
    faq: [
      { q: '¿Cuántas cajas de laminado necesito?', a: 'Divide el área más el desperdicio entre la cobertura de la caja. Una habitación de 120 ft² con 10% de desperdicio y 20 ft²/caja necesita unas 7 cajas.' },
      { q: '¿Cuánto laminado de más debo comprar?', a: '10% para diseños rectos, 15% en diagonal, más una caja de repuesto guardada para futuras reparaciones.' },
    ],
    scenarios: [
      { q: '¿Cuánto laminado para una habitación de 10×10 ft?', a: '100 ft² + 10% = 110 ft², unas 6 cajas a 20 ft²/caja.' },
      { q: '¿Cuánto laminado para una habitación de 12×12 ft?', a: '144 ft² + 10% = 158 ft², unas 8 cajas.' },
      { q: '¿Cuánto laminado para un espacio de 200 ft²?', a: '200 ft² + 10% = 220 ft², unas 11 cajas más una de repuesto.' },
    ],
  },
};

const de: Record<string, CalcGuide> = {
  'mulch-calculator': {
    intro:
      'Mulch wird nach Kubikyard oder in Säcken (meist 2 ft³) verkauft. Ein Kubikyard deckt etwa 162 ft² bei 2 Zoll Tiefe ab, 108 ft² bei 3 Zoll oder 81 ft² bei 4 Zoll. Die meisten Beete brauchen eine 2–3 Zoll dicke Schicht; zur Unkrautunterdrückung und für Baumscheiben sind 3–4 Zoll besser.',
    steps: [
      'Miss Länge und Breite jedes Beets in Fuß und multipliziere sie für die Quadratfuß; unregelmäßige Bereiche separat rechnen.',
      'Wähle eine Tiefe: 2 Zoll für die jährliche Auffrischung, 3 Zoll für volle Abdeckung, 4 Zoll für starke Unkrautkontrolle.',
      'Der Rechner wandelt Fläche × Tiefe in Kubikfuß um, dann in Kubikyard (÷27) und 2-ft³-Säcke.',
      'Bestelle ab ein paar Yards lose Ware nach Kubikyard – das ist viel günstiger als Sackware.',
    ],
    factors: [
      { label: 'Die Tiefe entscheidet alles', detail: 'Von 2 auf 4 Zoll verdoppelt sich das Volumen. Häufe Mulch nie an Stämmen an – „Mulchvulkane“ lassen die Rinde faulen und ziehen Schädlinge an.' },
      { label: 'Setzung', detail: 'Loser Rindenmulch setzt sich in den ersten Wochen um 10–20%, also ist etwas Reserve normal.' },
      { label: 'Sack vs. lose', detail: 'Ein 2-ft³-Sack deckt ~12 ft² bei 2 Zoll ab, und 13,5 Säcke ergeben einen Kubikyard – lose lohnt sich meist ab 2–3 Yards.' },
    ],
    faq: [
      { q: 'Wie viele Säcke Mulch sind in einem Kubikyard?', a: 'Etwa 13,5 Säcke zu je 2 ft³ (27 ÷ 2). Händler runden oft auf 13–14.' },
      { q: 'Wie tief sollte Mulch sein?', a: '2–3 Zoll für die meisten Beete, 3–4 Zoll zur Unkrautunterdrückung. Halte ihn von Pflanzenstängeln und Baumstämmen fern.' },
    ],
    scenarios: [
      { q: 'Wie viel Mulch für ein 10×10-ft-Beet bei 3 Zoll?', a: '~25 ft³ = 0,93 yd³, etwa 13 Säcke (2 ft³).' },
      { q: 'Wie viel Mulch für eine 20×20-ft-Fläche bei 2 Zoll?', a: '~67 ft³ = 2,5 yd³, etwa 34 Säcke oder 2,5 Yards lose.' },
      { q: 'Wie viel Mulch für ein 100-ft²-Beet bei 3 Zoll?', a: '~25 ft³ = 0,93 yd³, etwa 13 Säcke – rund ein Kubikyard.' },
    ],
  },
  'gravel-calculator': {
    intro:
      'Kies wird nach Gewicht (Tonnen) oder Volumen (Kubikyard) verkauft. Ein Kubikyard typischer Kies wiegt etwa 1,4 Tonnen (≈2.800 lb) und deckt ~100 ft² bei 3 Zoll Tiefe ab. Einfahrten brauchen 3–4 Zoll über einer verdichteten Tragschicht; Zierbeete etwa 2 Zoll.',
    steps: [
      'Miss Länge × Breite in Fuß; bei Einfahrten die gesamte befahrbare Breite einbeziehen.',
      'Wähle die Tiefe: 2 Zoll dekorativ, 3 Zoll Gehwege, 4 Zoll oder mehr für Einfahrten (oft in zwei verdichteten Lagen).',
      'Der Rechner liefert Kubikyard und Tonnen anhand der eingestellten Dichte (Standard 1,4 t/yd³).',
      'Bestelle für die Lieferung nach Tonnen und lass dir vom Lieferanten die Dichte deines Steins bestätigen.',
    ],
    factors: [
      { label: 'Die Dichte hängt vom Stein ab', detail: 'Zierkies ≈1,4, Schotter ≈1,35, Flusskiesel wieder anders. Die Angabe des Lieferanten ändert die Tonnage – immer nachfragen.' },
      { label: 'Verdichtung', detail: 'Gebrochener Kies verdichtet sich um ~20%. Bestelle etwas mehr und baue Einfahrten in 2-Zoll-Lagen ein, jede verdichtet.' },
      { label: 'Trag- und Deckschicht', detail: 'Eine gute Einfahrt besteht aus grober Tragschicht plus feinerer Deckschicht – jede Tiefe separat berechnen.' },
    ],
    faq: [
      { q: 'Wie viel wiegt ein Yard Kies?', a: 'Rund 1,4 Tonnen (2.800 lb) bei typischem Kies; Schotter und Flusskiesel variieren, also beim Lieferanten bestätigen.' },
      { q: 'Wie viele Quadratfuß deckt eine Tonne Kies ab?', a: 'Etwa 70–100 ft² bei 3 Zoll Tiefe, je nach Dichte des Steins.' },
    ],
    scenarios: [
      { q: 'Wie viel Kies für eine 20×20-ft-Einfahrt bei 4 Zoll?', a: '~133 ft³ = 4,9 yd³, etwa 6,9 Tonnen.' },
      { q: 'Wie viel Kies für eine 12×20-ft-Einfahrt bei 3 Zoll?', a: '~60 ft³ = 2,2 yd³, etwa 3,1 Tonnen.' },
      { q: 'Wie viel Kies für eine 10×10-ft-Terrassentragschicht bei 3 Zoll?', a: '~25 ft³ = 0,93 yd³, etwa 1,3 Tonnen.' },
    ],
  },
  'concrete-slab-calculator': {
    intro:
      'Beton wird nach Kubikyard (Transportbeton) bestellt oder für kleine Arbeiten aus Säcken gemischt. Eine 10×10-ft-Platte mit 4 Zoll Dicke sind etwa 1,23 yd³. Sackbeton ist nur bis etwa 1 Yard praktikabel – darüber ist Transportbeton günstiger und viel weniger Arbeit.',
    steps: [
      'Miss Länge × Breite in Fuß und wähle eine Dicke: 4 Zoll für Terrassen und Gehwege, 5–6 Zoll für Einfahrten.',
      'Der Rechner liefert Kubikfuß, Kubikyard (÷27) und die Zahl der 40-/60-/80-lb-Säcke.',
      'Rechne 5–10% für Verschnitt, einen unebenen Untergrund und Überaushub dazu.',
      'Bestelle Transportbeton für alles über ~1 yd³ – von Hand bekommst du so viel kaum verarbeitet, bevor es abbindet.',
    ],
    factors: [
      { label: 'Dicke und Festigkeit', detail: '4 Zoll reichen für Fußverkehr; Einfahrten und alles, was Fahrzeuge trägt, brauchen 5–6 Zoll plus Bewehrung oder Mattengitter.' },
      { label: 'Sackergiebigkeit', detail: 'Ein 80-lb-Sack ergibt ~0,6 ft³, 60 lb ~0,45 ft³, 40 lb ~0,30 ft³. Eine 10×10-Platte mit 4 Zoll braucht ~56 80-lb-Säcke – daher Transportbeton.' },
      { label: 'Verschnitt durch Untergrund', detail: 'Unebener Boden frisst still Beton: eine ½-Zoll-Senke über 100 ft² sind ~4 ft³ extra.' },
    ],
    faq: [
      { q: 'Wie viele 80-lb-Säcke Beton sind in einem Yard?', a: 'Etwa 45 Säcke (27 ÷ 0,6 ft³ pro Sack).' },
      { q: 'Wie dick sollte eine Betonplatte sein?', a: '4 Zoll für Terrassen und Gehwege; 5–6 Zoll für Einfahrten oder Lasten, idealerweise mit Bewehrung oder Mattengitter.' },
    ],
    scenarios: [
      { q: 'Wie viel Beton für eine 10×10-ft-Platte bei 4 Zoll?', a: '~33 ft³ = 1,23 yd³, oder ~56 80-lb-Säcke (nimm Transportbeton).' },
      { q: 'Wie viel Beton für eine 12×12-ft-Platte bei 4 Zoll?', a: '~48 ft³ = 1,78 yd³ – Transportbeton bestellen.' },
      { q: 'Wie viel Beton für eine 20×20-ft-Einfahrt bei 5 Zoll?', a: '~167 ft³ = 6,2 yd³, Transportbeton-Lieferung.' },
    ],
  },
  'interior-paint-calculator': {
    intro:
      'Innenfarbe deckt etwa 350 ft² pro Gallone und Anstrich auf grundiertem Trockenbau. Ein 12×10-ft-Raum mit 8-ft-Decken hat ~352 ft² Wand, also brauchen zwei Anstriche ~3 Gallonen. Raue oder rohe Flächen schlucken mehr – eher 300 ft²/Gallone.',
    steps: [
      'Miss Raumumfang × Deckenhöhe für die Wandfläche; ziehe große Türen und Fenster ab (~20 ft² je).',
      'Lege die Anstriche fest: 2 sind Standard, 3 bei hell über dunkel oder zum Überdecken von Ausbesserungen.',
      'Der Rechner teilt Fläche × Anstriche durch die Ergiebigkeit (Standard 350 ft²/gal) und rundet auf ganze Gallonen auf.',
      'Kauf ein zusätzliches Quart für Ausbesserungen und notiere den Chargencode für die Farbabstimmung.',
    ],
    factors: [
      { label: 'Untergrund und Farbwechsel', detail: 'Neuer Trockenbau, kräftige Farbwechsel oder raue Textur senken die Ergiebigkeit und brauchen oft Grundierung oder einen dritten Anstrich.' },
      { label: 'Angegebene Ergiebigkeit', detail: 'Premiumfarben decken 350–400 ft²/gal; günstige oder dunkle Basistöne können 250–300 sein. Prüf den Eimer.' },
      { label: 'Grundierung nicht vergessen', detail: 'Roher Trockenbau oder Flecken brauchen zuerst eine Grundierung – rechne sie als eigenen Anstrich.' },
    ],
    faq: [
      { q: 'Wie viel Farbe brauche ich für einen 12x12-Raum?', a: 'Etwa 3 Gallonen für zwei Anstriche auf ~360 ft² Wand (Türen und Fenster abziehen). Grundierung dazu, wenn die Fläche roh ist.' },
      { q: 'Wie viele Quadratfuß deckt eine Gallone Farbe?', a: 'Rund 350 ft² pro Anstrich auf glatten, grundierten Wänden; weniger auf rauen oder saugenden Flächen.' },
    ],
    scenarios: [
      { q: 'Wie viel Farbe für einen 10×10-ft-Raum, 2 Anstriche?', a: '~320 ft² Wand × 2 ÷ 350 = ~2 Gallonen.' },
      { q: 'Wie viel Farbe für einen 12×12-ft-Raum, 2 Anstriche?', a: '~384 ft² Wand × 2 ÷ 350 = ~3 Gallonen.' },
      { q: 'Wie viel Farbe für einen 12×16-ft-Raum, 2 Anstriche?', a: '~448 ft² Wand × 2 ÷ 350 = ~3 Gallonen (aufrunden).' },
    ],
  },
  'laminate-flooring-calculator': {
    intro:
      'Laminat wird paketweise verkauft, jedes Paket deckt eine feste Fläche ab (oft ~20 ft², variiert aber mit der Diele). Ein 12×10-ft-Raum (120 ft²) braucht bei 10% Verschnitt etwa 7 Pakete. Kauf immer aus derselben Charge, damit Muster und Farbton passen.',
    steps: [
      'Miss Länge × Breite jedes Raums in Fuß und addiere sie zur Gesamtquadratfuß.',
      'Lies die tatsächliche Abdeckung vom Paketetikett ab – nimm nicht einfach 20 ft² an.',
      'Rechne Verschnitt dazu: 10% für gerade Verlegung, 15% diagonal, mehr bei vielen Türen oder schrägen Räumen.',
      'Der Rechner rundet auf ganze Pakete auf; kauf ein Reservepaket für spätere Reparaturen.',
    ],
    factors: [
      { label: 'Abdeckung pro Paket variiert', detail: 'Die Dielengröße lässt die Abdeckung pro Paket zwischen ~18 und 30 ft² schwanken. Nimm die Zahl vom Etikett, nicht eine Schätzung.' },
      { label: 'Verschnitt durch Verlegemuster', detail: 'Diagonale und Fischgrätmuster verschneiden 15–20%; lange gerade Bahnen weniger.' },
      { label: 'Akklimatisierung und Trittschalldämmung', detail: 'Laminat braucht ~48 h zum Akklimatisieren, und die meisten Räume brauchen eine Trittschalldämmung – die separat berechnen.' },
    ],
    faq: [
      { q: 'Wie viele Pakete Laminat brauche ich?', a: 'Teile Fläche plus Verschnitt durch die Abdeckung des Pakets. Ein 120-ft²-Raum bei 10% Verschnitt und 20 ft²/Paket braucht etwa 7 Pakete.' },
      { q: 'Wie viel Laminat sollte ich extra kaufen?', a: '10% bei gerader Verlegung, 15% diagonal, plus ein Reservepaket für spätere Reparaturen.' },
    ],
    scenarios: [
      { q: 'Wie viel Laminat für einen 10×10-ft-Raum?', a: '100 ft² + 10% = 110 ft², etwa 6 Pakete zu 20 ft²/Paket.' },
      { q: 'Wie viel Laminat für einen 12×12-ft-Raum?', a: '144 ft² + 10% = 158 ft², etwa 8 Pakete.' },
      { q: 'Wie viel Laminat für eine 200-ft²-Fläche?', a: '200 ft² + 10% = 220 ft², etwa 11 Pakete plus ein Reservepaket.' },
    ],
  },
};

const zh: Record<string, CalcGuide> = {
  'mulch-calculator': {
    intro:
      '覆盖物按立方码或按袋(通常 2 ft³)出售。1 立方码在 2 英寸厚时约覆盖 162 ft²,3 英寸时 108 ft²,4 英寸时 81 ft²。大多数花床用 2–3 英寸厚;抑制杂草和树盘则 3–4 英寸更好。',
    steps: [
      '用英尺量出每块花床的长和宽相乘得到平方英尺;不规则区域单独相加。',
      '选厚度:年度补铺 2 英寸,完整覆盖 3 英寸,强力控草 4 英寸。',
      '计算器把面积 × 厚度换成立方英尺,再换成立方码(÷27)和 2 ft³ 的袋数。',
      '超过几立方码后按立方码散装订货——散装比袋装便宜得多。',
    ],
    factors: [
      { label: '厚度决定一切', detail: '从 2 英寸加到 4 英寸体积翻倍。切勿把覆盖物堆在树干旁——“覆盖物火山”会让树皮腐烂并招虫。' },
      { label: '沉降', detail: '松散的树皮覆盖物头几周会沉降 10–20%,所以多订一点很正常。' },
      { label: '袋装 vs 散装', detail: '一袋 2 ft³ 在 2 英寸厚时约覆盖 12 ft²,13.5 袋等于 1 立方码——超过 2–3 立方码通常散装更划算。' },
    ],
    faq: [
      { q: '1 立方码覆盖物有多少袋?', a: '约 13.5 袋(每袋 2 ft³,27 ÷ 2)。商店常凑整为 13–14 袋。' },
      { q: '覆盖物该铺多厚?', a: '大多数花床 2–3 英寸,抑制杂草 3–4 英寸。注意远离植物茎和树干。' },
    ],
    scenarios: [
      { q: '10×10 ft 花床铺 3 英寸要多少覆盖物?', a: '~25 ft³ = 0.93 yd³,约 13 袋(2 ft³)。' },
      { q: '20×20 ft 区域铺 2 英寸要多少?', a: '~67 ft³ = 2.5 yd³,约 34 袋或散装 2.5 立方码。' },
      { q: '100 ft² 花床铺 3 英寸要多少?', a: '~25 ft³ = 0.93 yd³,约 13 袋——大约 1 立方码。' },
    ],
  },
  'gravel-calculator': {
    intro:
      '砾石按重量(吨)或体积(立方码)出售。1 立方码普通砾石约重 1.4 吨(≈2,800 lb),3 英寸厚时约覆盖 100 ft²。车道需在压实底层上铺 3–4 英寸;装饰花床约 2 英寸。',
    steps: [
      '用英尺量长 × 宽;车道要算上全部可行驶宽度。',
      '选厚度:装饰 2 英寸,步道 3 英寸,车道 4 英寸以上(常分两层压实)。',
      '计算器按你设置的密度(默认 1.4 ton/yd³)给出立方码和吨数。',
      '送货按吨订货,并向供应商确认你所用石料的具体密度。',
    ],
    factors: [
      { label: '密度因石料而异', detail: '豆砾 ≈1.4,碎石 ≈1.35,河石又不同。供应商的数字会改变吨数——务必询问。' },
      { label: '压实', detail: '碎砾石会压实约 20%。多订一点,车道分 2 英寸一层铺设,逐层压实。' },
      { label: '底层 + 面层', detail: '规范的车道是粗底层加细面层——每层厚度分别计算。' },
    ],
    faq: [
      { q: '1 码砾石有多重?', a: '普通砾石约 1.4 吨(2,800 lb);碎石和河石不同,请向供应商确认。' },
      { q: '1 吨砾石能覆盖多少平方英尺?', a: '3 英寸厚时约 70–100 ft²,取决于石料密度。' },
    ],
    scenarios: [
      { q: '20×20 ft 车道铺 4 英寸要多少砾石?', a: '~133 ft³ = 4.9 yd³,约 6.9 吨。' },
      { q: '12×20 ft 车道铺 3 英寸要多少?', a: '~60 ft³ = 2.2 yd³,约 3.1 吨。' },
      { q: '10×10 ft 露台底层铺 3 英寸要多少?', a: '~25 ft³ = 0.93 yd³,约 1.3 吨。' },
    ],
  },
  'concrete-slab-calculator': {
    intro:
      '混凝土按立方码订购(预拌)或小工程用袋装自拌。10×10 ft、4 英寸厚的板约 1.23 yd³。袋装仅在约 1 立方码以内才实用;超过后预拌送货更便宜也省力得多。',
    steps: [
      '用英尺量长 × 宽并选厚度:露台和步道 4 英寸,车道 5–6 英寸。',
      '计算器给出立方英尺、立方码(÷27)以及 40 / 60 / 80 lb 袋数。',
      '为洒漏、不平基层和超挖加 5–10%。',
      '超过约 1 yd³ 就订预拌——手工很难在凝固前拌完那么多。',
    ],
    factors: [
      { label: '厚度与强度', detail: '4 英寸适合人行;车道及承载车辆处需 5–6 英寸加钢筋或钢丝网。' },
      { label: '袋产率', detail: '80 lb 袋约出 0.6 ft³,60 lb 约 0.45 ft³,40 lb 约 0.30 ft³。10×10、4 英寸板需约 56 袋 80 lb——故用预拌。' },
      { label: '基层损耗', detail: '不平地面会悄悄吃掉混凝土:100 ft² 上 ½ 英寸的凹陷就是约 4 ft³ 额外用量。' },
    ],
    faq: [
      { q: '1 码混凝土需要多少袋 80 lb?', a: '约 45 袋(27 ÷ 每袋 0.6 ft³)。' },
      { q: '混凝土板该多厚?', a: '露台和步道 4 英寸;车道或承载处 5–6 英寸,最好配钢筋或钢丝网。' },
    ],
    scenarios: [
      { q: '10×10 ft、4 英寸板要多少混凝土?', a: '~33 ft³ = 1.23 yd³,或约 56 袋 80 lb(建议用预拌)。' },
      { q: '12×12 ft、4 英寸板要多少?', a: '~48 ft³ = 1.78 yd³——订预拌。' },
      { q: '20×20 ft 车道、5 英寸要多少?', a: '~167 ft³ = 6.2 yd³,预拌送货。' },
    ],
  },
  'interior-paint-calculator': {
    intro:
      '内墙漆在已底涂的石膏板上每加仑每道约覆盖 350 ft²。12×10 ft、8 英尺层高的房间约有 352 ft² 墙面,故两道约需 3 加仑。粗糙或未底涂的表面更吃漆——约 300 ft²/加仑。',
    steps: [
      '用房间周长 × 层高算墙面面积;减去大门和大窗(每个约 20 ft²)。',
      '定道数:2 道是标准,浅色盖深色或盖补丁时 3 道。',
      '计算器把面积 × 道数除以覆盖率(默认 350 ft²/加仑)并向上取整到整加仑。',
      '另买一夸脱备用于补漆,并保留批号以便配色。',
    ],
    factors: [
      { label: '表面与变色', detail: '新石膏板、大幅变色或粗糙纹理会降低覆盖率,常需底漆或第三道。' },
      { label: '标称覆盖率', detail: '优质漆覆盖 350–400 ft²/加仑;廉价漆或深色基底可能只 250–300。看罐子标注。' },
      { label: '别忘了底漆', detail: '裸石膏板或污渍要先刷一道底漆——把它当作单独一道来估。' },
    ],
    faq: [
      { q: '12x12 的房间需要多少漆?', a: '两道约 3 加仑,覆盖约 360 ft² 墙面(减去门窗)。表面未处理则加底漆。' },
      { q: '1 加仑漆能覆盖多少平方英尺?', a: '光滑已底涂墙面每道约 350 ft²;粗糙或吸收性表面更少。' },
    ],
    scenarios: [
      { q: '10×10 ft 房间刷 2 道要多少漆?', a: '~320 ft² 墙面 × 2 ÷ 350 = ~2 加仑。' },
      { q: '12×12 ft 房间刷 2 道要多少?', a: '~384 ft² 墙面 × 2 ÷ 350 = ~3 加仑。' },
      { q: '12×16 ft 房间刷 2 道要多少?', a: '~448 ft² 墙面 × 2 ÷ 350 = ~3 加仑(向上取整)。' },
    ],
  },
  'laminate-flooring-calculator': {
    intro:
      '强化地板按箱出售,每箱覆盖固定面积(常约 20 ft²,随板材尺寸而变)。12×10 ft(120 ft²)的房间按 10% 损耗约需 7 箱。务必买同一批次,使花纹和色调一致。',
    steps: [
      '用英尺量每个房间的长 × 宽并相加得到总平方英尺。',
      '看箱体标签的实际覆盖面积——别想当然按 20 ft²。',
      '加损耗:直铺 10%,斜铺 15%,门多或房间带角度时更多。',
      '计算器向上取整到整箱;再买一箱备用于日后维修。',
    ],
    factors: [
      { label: '每箱覆盖面积不同', detail: '板材尺寸让每箱覆盖在约 18 到 30 ft² 间浮动。用标签数字,别猜。' },
      { label: '铺设损耗', detail: '斜铺和人字铺损耗 15–20%;长直铺损耗较少。' },
      { label: '适应期与垫层', detail: '强化地板需约 48 小时适应环境,多数房间还需垫层——单独计算。' },
    ],
    faq: [
      { q: '我需要多少箱强化地板?', a: '用(面积 + 损耗)除以每箱覆盖面积。120 ft² 房间按 10% 损耗、每箱 20 ft²,约需 7 箱。' },
      { q: '强化地板该多买多少?', a: '直铺多 10%,斜铺多 15%,再留一箱备用于日后维修。' },
    ],
    scenarios: [
      { q: '10×10 ft 房间要多少强化地板?', a: '100 ft² + 10% = 110 ft²,约 6 箱(每箱 20 ft²)。' },
      { q: '12×12 ft 房间要多少?', a: '144 ft² + 10% = 158 ft²,约 8 箱。' },
      { q: '200 ft² 空间要多少?', a: '200 ft² + 10% = 220 ft²,约 11 箱加一箱备用。' },
    ],
  },
};

export const guides: Partial<Record<Lang, Record<string, CalcGuide>>> = { en, es, de, zh };

/** Returns the differentiated guide for this calculator, if one exists for the
 * language. No cross-language fallback: a missing guide → page uses generic copy. */
export function getGuide(lang: Lang, slug: string): CalcGuide | undefined {
  return guides[lang]?.[slug];
}
