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
    scenarios: [
      { q: 'How much vinyl plank for a 10×10 ft room?', a: '100 ft² + 10% = 110 ft², about 5 boxes at 22 ft²/box.' },
      { q: 'How much vinyl plank for a 12×12 ft room?', a: '144 ft² + 10% = 158 ft², about 8 boxes.' },
      { q: 'How much vinyl plank for a 200 ft² space?', a: '200 ft² + 10% = 220 ft², about 10 boxes plus a spare.' },
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
    scenarios: [
      { q: 'How much hardwood for a 10×10 ft room?', a: '100 ft² + 10% = 110 ft², about 6 cartons at 20 ft²/carton.' },
      { q: 'How much hardwood for a 12×16 ft room?', a: '192 ft² + 10% = 211 ft², about 11 cartons.' },
      { q: 'How much hardwood for a 300 ft² area?', a: '300 ft² + 10% = 330 ft², about 17 cartons plus a spare.' },
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
    scenarios: [
      { q: 'How much engineered wood for a 10×12 ft room?', a: '120 ft² + 10% = 132 ft², about 6 cartons at 22 ft²/carton.' },
      { q: 'How much engineered wood for a 14×16 ft room?', a: '224 ft² + 10% = 246 ft², about 12 cartons.' },
      { q: 'How much engineered wood for a 300 ft² area?', a: '300 ft² + 10% = 330 ft², about 15 cartons plus a spare.' },
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
    scenarios: [
      { q: 'How much floor tile for a 5×8 ft bathroom?', a: '40 ft² + 10% = 44 ft², about 3 boxes at 15 ft²/box.' },
      { q: 'How much floor tile for a 10×12 ft kitchen?', a: '120 ft² + 10% = 132 ft², about 9 boxes.' },
      { q: 'How much floor tile for a 200 ft² room?', a: '200 ft² + 10% = 220 ft², about 15 boxes plus spares.' },
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
    scenarios: [
      { q: 'How much carpet for a 12×12 ft room?', a: '144 ft² ÷ 9 = 16 yd² + 10% ≈ 18 square yards.' },
      { q: 'How much carpet for a 12×15 ft bedroom?', a: '180 ft² ÷ 9 = 20 yd² + 10% ≈ 22 square yards.' },
      { q: 'How much carpet for a 500 ft² area?', a: '500 ft² ÷ 9 = 55.5 yd² + 10% ≈ 62 square yards.' },
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
      { q: 'How much exterior paint do I need for a house?', a: 'A typical 1,500 ft² single-story has ~1,200 ft² of wall — about 7 gallons for two coats on smooth siding, more on stucco.' },
      { q: 'How many coats of exterior paint?', a: 'Two over an existing painted surface; three (with primer) over bare wood or when changing color dramatically.' },
    ],
    scenarios: [
      { q: 'How much exterior paint for a 1,500 ft² single-story house, 2 coats?', a: '~1,200 ft² wall × 2 ÷ 350 = ~7 gallons on smooth siding.' },
      { q: 'How much exterior paint for a 2,500 ft² two-story house, 2 coats?', a: '~2,200 ft² wall × 2 ÷ 350 = ~13 gallons.' },
      { q: 'How much exterior paint for a 400 ft² wall, 2 coats?', a: '400 ft² × 2 ÷ 350 = ~3 gallons (more on rough surfaces).' },
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
    scenarios: [
      { q: 'How much backsplash tile for a 10 ft run?', a: '10 ft × 1.5 ft = 15 ft² + 15% ≈ 17 ft².' },
      { q: 'How much backsplash tile for a 15 ft run?', a: '15 ft × 1.5 ft = 22.5 ft² + 15% ≈ 26 ft².' },
      { q: 'How much backsplash tile for a 20 ft L-shaped kitchen?', a: '20 ft × 1.5 ft = 30 ft² + 15% ≈ 35 ft².' },
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
    scenarios: [
      { q: 'How much concrete for a 16 in × 8 in × 40 ft footing?', a: '1.33 × 0.67 × 40 = ~36 ft³ = ~1.3 yd³.' },
      { q: 'How much concrete for a 24 in × 12 in × 50 ft footing?', a: '2 × 1 × 50 = 100 ft³ = ~3.7 yd³.' },
      { q: 'How much concrete for a 12 in × 6 in × 60 ft footing?', a: '1 × 0.5 × 60 = 30 ft³ = ~1.1 yd³.' },
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
    scenarios: [
      { q: 'How many board feet in ten 1×6×8 ft boards?', a: '1 × 6 × 8 ÷ 12 = 4 bf each × 10 = 40 board feet.' },
      { q: 'How many board feet in eight 5/4 × 8 in × 10 ft boards?', a: '1.25 × 8 × 10 ÷ 12 = 8.3 bf each × 8 = ~67 board feet.' },
      { q: 'How many board feet in six 8/4 × 6 in × 12 ft boards?', a: '2 × 6 × 12 ÷ 12 = 12 bf each × 6 = 72 board feet.' },
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
    scenarios: [
      { q: 'How much crushed stone for a 10×10 ft paver base at 4 in?', a: '~33 ft³ = 1.23 yd³, about 1.7 tons.' },
      { q: 'How much crushed stone for a 12×20 ft driveway base at 6 in?', a: '120 ft³ = 4.4 yd³, about 6 tons.' },
      { q: 'How much crushed stone for a 100 ft² walkway at 3 in?', a: '~25 ft³ = 0.93 yd³, about 1.25 tons.' },
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
    scenarios: [
      { q: 'How much topsoil for a 10×10 ft bed at 6 in?', a: '50 ft³ = 1.85 yd³, about 2 tons.' },
      { q: 'How much topsoil to topdress a 20×20 ft lawn at 2 in?', a: '~67 ft³ = 2.5 yd³, about 2.7 tons.' },
      { q: 'How much topsoil for a 4×8 ft raised bed at 12 in?', a: '32 ft³ = 1.2 yd³, about 32 bags (1 ft³).' },
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
    scenarios: [
      { q: 'How much sand for a 10×10 ft paver bedding at 1 in?', a: '~8.3 ft³ = 0.31 yd³, about 0.43 tons.' },
      { q: 'How much sand for a 12×20 ft patio bedding at 1 in?', a: '20 ft³ = 0.74 yd³, about 1 ton.' },
      { q: 'How much sand for a 200 ft² bedding layer at 1 in?', a: '~16.7 ft³ = 0.62 yd³, about 0.87 tons.' },
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
    scenarios: [
      { q: 'How much river rock for a 10×10 ft bed at 2 in?', a: '~16.7 ft³ = 0.62 yd³, about 0.87 tons.' },
      { q: 'How much river rock for a 20×20 ft area at 2 in?', a: '~67 ft³ = 2.5 yd³, about 3.5 tons.' },
      { q: 'How much river rock for a 100 ft² border at 3 in?', a: '~25 ft³ = 0.93 yd³, about 1.3 tons.' },
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
    scenarios: [
      { q: 'How much siding for a 1,500 ft² single-story house?', a: '~1,200 ft² wall + 10% = 1,320 ft² ≈ 13 squares.' },
      { q: 'How much siding for a 2,000 ft² two-story house?', a: '~1,800 ft² wall + 10% = 1,980 ft² ≈ 20 squares.' },
      { q: 'How much siding for a 20×12 ft gable wall?', a: '240 ft² + 10% ≈ 2.6 squares.' },
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
  'vinyl-plank-flooring-calculator': {
    intro: 'El suelo vinílico de lujo (LVP) se vende por caja, cada una cubre ~20–24 ft². Es impermeable y encaja como suelo flotante sobre la mayoría de los subsuelos planos. Una habitación de 200 ft² con 10% de desperdicio y 22 ft²/caja necesita unas 10 cajas.',
    steps: [
      'Mide el largo × ancho de cada habitación en pies y súmalos para el total de pies cuadrados.',
      'Lee la etiqueta de la caja para su cobertura real: varía con el tamaño de la lama, no supongas 20 ft².',
      'Añade desperdicio: 10% para colocación recta, 15% en diagonal o con muchos cortes y ángulos.',
      'La calculadora redondea hacia arriba a cajas enteras; guarda una caja del mismo lote para reparaciones.',
    ],
    factors: [
      { label: 'Tipo de núcleo', detail: 'El núcleo rígido SPC tolera mejor los subsuelos irregulares y los cambios de temperatura que el flexible WPC: importa sobre hormigón y en galerías.' },
      { label: 'Planitud del subsuelo', detail: 'El LVP flotante necesita el subsuelo plano dentro de ~3/16 de pulgada en 10 ft, o las lamas flexan y fallan los encajes.' },
      { label: 'Largo de lama y diseño', detail: 'Las lamas largas y los diseños en diagonal aumentan el desperdicio; escalona las juntas de los extremos al menos 6 pulgadas por resistencia y estética.' },
    ],
    faq: [
      { q: '¿Cuántas cajas de suelo vinílico para 200 ft²?', a: 'Unas 10 cajas a 22 ft²/caja con 10% de desperdicio. Comprueba siempre la cobertura real de tu caja.' },
      { q: '¿Necesitas base bajo el suelo vinílico?', a: 'Muchos LVP llevan almohadilla incorporada; si no, usa una base fina de espuma. Sobre hormigón, añade una barrera de humedad.' },
    ],
    scenarios: [
      { q: '¿Cuánto suelo vinílico para una habitación de 10×10 ft?', a: '100 ft² + 10% = 110 ft², unas 5 cajas a 22 ft²/caja.' },
      { q: '¿Cuánto para una habitación de 12×12 ft?', a: '144 ft² + 10% = 158 ft², unas 8 cajas.' },
      { q: '¿Cuánto para un espacio de 200 ft²?', a: '200 ft² + 10% = 220 ft², unas 10 cajas más una de repuesto.' },
    ],
  },
  'hardwood-flooring-calculator': {
    intro: 'La madera maciza se vende por cartón cubriendo un área indicada (a menudo ~20 ft²). Añade 5–10% de desperdicio y compra del mismo lote para que la veta y el color coincidan. Se clava sobre un subsuelo de madera y debe aclimatarse antes.',
    steps: [
      'Mide el largo × ancho de cada habitación en pies y suma el total de pies cuadrados.',
      'Lee la cobertura real en la etiqueta del cartón: el ancho de la tabla la cambia.',
      'Añade 10% de desperdicio (más en diagonal o en habitaciones con muchos cortes).',
      'La calculadora redondea a cartones enteros; guarda un cartón de repuesto para sustituir tablas en el futuro.',
    ],
    factors: [
      { label: 'Aclimatación', detail: 'Deja la madera en la habitación 3–7 días; su humedad debe quedar dentro del 2–4% de la del subsuelo o las tablas se abomban y abren.' },
      { label: 'Grado y lote', detail: 'Pide de un solo lote: el color y la veta varían entre lotes y no se pueden mezclar después.' },
      { label: 'Ancho de la tabla', detail: 'Las tablas anchas lucen muy bien pero desperdician más en cortes y se mueven más con la humedad; las estrechas desperdician menos.' },
    ],
    faq: [
      { q: '¿Cuánta madera maciza de más debo comprar?', a: 'Añade 5–10% en instalaciones rectas, hasta 15% en diagonal o con muchas puertas, más un cartón de repuesto.' },
      { q: '¿La madera maciza necesita aclimatarse?', a: 'Sí: 3–7 días en la habitación de instalación para que su humedad iguale a la del subsuelo; saltarse esto causa abombamientos y huecos.' },
    ],
    scenarios: [
      { q: '¿Cuánta madera maciza para una habitación de 10×10 ft?', a: '100 ft² + 10% = 110 ft², unos 6 cartones a 20 ft²/cartón.' },
      { q: '¿Cuánta para una habitación de 12×16 ft?', a: '192 ft² + 10% = 211 ft², unos 11 cartones.' },
      { q: '¿Cuánta para un área de 300 ft²?', a: '300 ft² + 10% = 330 ft², unos 17 cartones más uno de repuesto.' },
    ],
  },
  'engineered-wood-flooring-calculator': {
    intro: 'La madera de ingeniería es una chapa de madera real sobre un núcleo de contrachapado, más estable que la maciza, así que flota, se encola o se grapa. Los cartones indican la cobertura (~20–30 ft²). Añade 8–10% de desperdicio; aún necesita una breve aclimatación.',
    steps: [
      'Mide el largo × ancho de cada habitación y suma el área en pies cuadrados.',
      'Usa la cobertura indicada en el cartón, no una suposición.',
      'Añade 10% de desperdicio en recto, 15% en diagonal; redondea a cartones enteros más uno de repuesto.',
      'Elige el método de instalación (flotante por clic, encolado o grapado): cambia las necesidades de base.',
    ],
    factors: [
      { label: 'Método de instalación', detail: 'El flotante por clic es el más rápido sobre base; el encolado se siente más firme sobre hormigón. El método decide qué más compras.' },
      { label: 'Grosor de la capa de uso', detail: 'Una chapa superior gruesa (2–6 mm) se puede lijar y renovar una o dos veces; las chapas finas no.' },
      { label: 'Aclimatación', detail: 'La de ingeniería es estable, pero déjala reposar 48–72 horas en la habitación antes de instalar.' },
    ],
    faq: [
      { q: '¿La madera de ingeniería puede flotar?', a: 'Sí: las lamas de ingeniería con clic flotan sobre base, por eso van mejor que la maciza sobre hormigón y en sótanos.' },
      { q: '¿En qué se diferencia de la laminada al pedir?', a: 'Ambas se venden por cartón/caja; la de ingeniería usa chapa de madera real (renovable si es gruesa), la laminada es una capa fotográfica impresa.' },
    ],
    scenarios: [
      { q: '¿Cuánta madera de ingeniería para una habitación de 10×12 ft?', a: '120 ft² + 10% = 132 ft², unos 6 cartones a 22 ft²/cartón.' },
      { q: '¿Cuánta para una habitación de 14×16 ft?', a: '224 ft² + 10% = 246 ft², unos 12 cartones.' },
      { q: '¿Cuánta para un área de 300 ft²?', a: '300 ft² + 10% = 330 ft², unos 15 cartones más uno de repuesto.' },
    ],
  },
  'floor-tile-calculator': {
    intro: 'La baldosa de suelo se vende por caja cubriendo un área fija; las de gran formato cubren más por caja pero se rompen más en los cortes. Añade 10% de desperdicio para una retícula recta, 15–20% en diagonal o con muchos recortes.',
    steps: [
      'Mide el largo × ancho del suelo en pies para el área total; suma armarios y huecos por separado.',
      'Lee la cobertura real de la caja (una caja de baldosas de 12×24 cubre ~15 ft²).',
      'Añade desperdicio según el diseño: 10% recto, 15–20% en diagonal o espiga.',
      'Divide y redondea a cajas enteras, y guarda algunas del mismo lote para reparar grietas más adelante.',
    ],
    factors: [
      { label: 'Tamaño y subsuelo', detail: 'La baldosa de gran formato (12×24 y más) necesita el subsuelo plano dentro de 1/8 de pulgada en 10 ft, o las esquinas se levantan y agrietan.' },
      { label: 'Dirección del diseño', detail: 'Los diseños en diagonal y espiga cortan mucha más baldosa que una retícula recta; planifica el desperdicio de antemano.' },
      { label: 'Variación de tono por lote', detail: 'Los lotes de tinte difieren; pide toda la baldosa de una vez y mezcla varias cajas al colocar para fundir el tono.' },
    ],
    faq: [
      { q: '¿Cuántas baldosas hay en una caja?', a: 'Depende del tamaño: las cajas indican la cobertura total en ft², así que usa ese número en lugar de contar baldosas.' },
      { q: '¿Cuánta baldosa de suelo de más debo comprar?', a: '10% para una retícula recta, 15–20% en diagonal o con muchos recortes, más algunas de repuesto.' },
    ],
    scenarios: [
      { q: '¿Cuánta baldosa para un baño de 5×8 ft?', a: '40 ft² + 10% = 44 ft², unas 3 cajas a 15 ft²/caja.' },
      { q: '¿Cuánta para una cocina de 10×12 ft?', a: '120 ft² + 10% = 132 ft², unas 9 cajas.' },
      { q: '¿Cuánta para una habitación de 200 ft²?', a: '200 ft² + 10% = 220 ft², unas 15 cajas más repuestos.' },
    ],
  },
  'carpet-calculator': {
    intro: 'La moqueta se vende por yarda cuadrada y viene en rollos de 12 ft de ancho (a veces 15 ft), así que el ancho del rollo y la colocación de las costuras marcan el desperdicio, a menudo 10–20% sobre el área del cuarto. Convierte pies cuadrados a yardas cuadradas dividiendo entre 9.',
    steps: [
      'Mide cada habitación largo × ancho en pies; conviértelo a yardas cuadradas (ft² ÷ 9).',
      'Planifica las costuras según el ancho de rollo de 12 ft: una habitación más ancha de 12 ft obliga a una costura.',
      'Añade 10% de desperdicio, más en escaleras, pasillos y moqueta con estampado.',
      'Redondea a yardas cuadradas enteras y guarda un retal para reparaciones.',
    ],
    factors: [
      { label: 'Ancho de rollo vs habitación', detail: 'Una habitación de 13 ft cortada de un rollo de 12 ft necesita costura y desperdicia el recorte: mide la pared larga contra el ancho de rollo.' },
      { label: 'Dirección del pelo', detail: 'La moqueta tiene pelo; todas las piezas deben ir en la misma dirección o las costuras se ven como un cambio de color.' },
      { label: 'Repetición del estampado', detail: 'La moqueta estampada debe casar en las costuras, añadiendo una repetición completa de desperdicio por costura.' },
    ],
    faq: [
      { q: '¿Cuántas yardas cuadradas de moqueta necesito?', a: 'Divide los pies cuadrados de la habitación entre 9 y añade 10–20% por ancho de rollo y costuras.' },
      { q: '¿Por qué se desperdicia tanta moqueta?', a: 'El ancho fijo de 12 ft más la dirección del pelo y el casado del estampado hacen que los recortes no siempre se reutilicen.' },
    ],
    scenarios: [
      { q: '¿Cuánta moqueta para una habitación de 12×12 ft?', a: '144 ft² ÷ 9 = 16 yd² + 10% ≈ 18 yardas cuadradas.' },
      { q: '¿Cuánta para un dormitorio de 12×15 ft?', a: '180 ft² ÷ 9 = 20 yd² + 10% ≈ 22 yardas cuadradas.' },
      { q: '¿Cuánta para un área de 500 ft²?', a: '500 ft² ÷ 9 = 55,5 yd² + 10% ≈ 62 yardas cuadradas.' },
    ],
  },
  'exterior-paint-calculator': {
    intro: 'La pintura exterior cubre ~250–350 ft² por galón y por mano, menos sobre revestimiento rugoso, estuco o madera desnuda. Mide cada pared, resta los huecos grandes y planifica dos manos. El cedro rugoso y el estuco pueden beber un 30–50% más.',
    steps: [
      'Mide cada pared ancho × alto; resta las puertas de garaje y las ventanas grandes.',
      'Elige las manos: 2 estándar, 3 sobre madera desnuda o un gran cambio de color.',
      'Divide área × manos entre el rendimiento (300 ft²/gal por defecto) y redondea a galones enteros.',
      'Añade imprimación en superficies desnudas o manchadas, y compra por separado la pintura del cuerpo y de las molduras.',
    ],
    factors: [
      { label: 'Textura de la superficie', detail: 'El revestimiento liso llega a 350 ft²/gal; el estuco, el bloque de cara partida y el cedro rugoso pueden bajar a 150–200, así que mide la textura con honestidad.' },
      { label: 'Ventana climática', detail: 'Pinta a 50–85°F sin lluvia durante 24 horas; la humedad y el sol directo arruinan el curado.' },
      { label: 'Cuerpo vs molduras', detail: 'Estima el color principal y las molduras/fascias por separado: usan distinto brillo y cantidad.' },
    ],
    faq: [
      { q: '¿Cuánta pintura exterior necesito para una casa?', a: 'Una casa típica de una planta de 1.500 ft² tiene ~1.200 ft² de pared: unos 7 galones para dos manos sobre revestimiento liso, más en estuco.' },
      { q: '¿Cuántas manos de pintura exterior?', a: 'Dos sobre una superficie ya pintada; tres (con imprimación) sobre madera desnuda o al cambiar de color drásticamente.' },
    ],
    scenarios: [
      { q: '¿Cuánta pintura exterior para una casa de una planta de 1.500 ft², 2 manos?', a: '~1.200 ft² de pared × 2 ÷ 350 = ~7 galones sobre revestimiento liso.' },
      { q: '¿Cuánta para una casa de dos plantas de 2.500 ft², 2 manos?', a: '~2.200 ft² de pared × 2 ÷ 350 = ~13 galones.' },
      { q: '¿Cuánta para 400 ft² de pared, 2 manos?', a: '400 ft² × 2 ÷ 350 = ~3 galones (más en superficies rugosas).' },
    ],
  },
  'drywall-calculator': {
    intro: 'El pladur viene en placas de 4×8 (32 ft²) y 4×12 (48 ft²). Divide el área total de paredes y techo entre el tamaño de la placa para el número; las placas grandes dejan menos juntas que encintar. Añade ~10% por cortes y desperdicio.',
    steps: [
      'Mide el área de cada pared y techo en pies cuadrados y súmalas.',
      'Elige el tamaño: 4×12 reduce juntas en paredes largas, 4×8 es más manejable en solitario.',
      'Divide el área total entre la cobertura de la placa (32 o 48 ft²) y añade 10% de desperdicio.',
      'Redondea a placas enteras; no olvides los tornillos, la cinta de juntas y la pasta.',
    ],
    factors: [
      { label: 'Compromiso del tamaño', detail: 'Las placas grandes de 4×12 dejan menos juntas que terminar, pero pesan y son incómodas; las de 4×8 las maneja una persona.' },
      { label: 'Grosor según ubicación', detail: 'Usa 1/2 pulgada en paredes y 5/8 de pulgada en techos y donde se exija resistencia al fuego.' },
      { label: 'Materiales de acabado', detail: 'Calcula ~1 lb de tornillos y un tubo de pasta por cada pocas placas, más cinta para cada junta: son compras aparte.' },
    ],
    faq: [
      { q: '¿Cuántas placas de pladur para una habitación de 12×12?', a: 'Paredes más techo suman ~540 ft²; a 32 ft²/placa con desperdicio son unas 18–20 placas de 4×8.' },
      { q: '¿Qué tamaño de placa de pladur debo usar?', a: '4×8 para espacios estrechos y trabajo en solitario; 4×12 en paredes largas y altas para minimizar juntas.' },
    ],
    scenarios: [
      { q: '¿Cuántas placas de pladur para una habitación de 10×10 ft (paredes de 8 ft)?', a: 'Paredes ~320 ft² + techo 100 ft² = 420 ft², unas 14–15 placas de 4×8.' },
      { q: '¿Cuántas para una habitación de 12×12 ft?', a: '~540 ft² en total, unas 18–20 placas de 4×8 con desperdicio.' },
      { q: '¿Cuántas para un garaje (20×20 ft)?', a: 'Paredes ~640 ft² + techo 400 ft² = 1.040 ft², unas 33–36 placas.' },
    ],
  },
  'backsplash-tile-calculator': {
    intro: 'Un salpicadero de cocina suele tener 18 pulgadas de alto entre la encimera y los muebles altos. Mide cada tramo largo × alto, añade 10–15% de desperdicio y pide de más para mosaicos y cortes intrincados que desperdician más.',
    steps: [
      'Mide cada tramo de pared largo × 18 in (1,5 ft) de alto; suma las áreas.',
      'Añade 10% de desperdicio para baldosa de campo, 15% para mosaicos o espiga.',
      'Convierte a cajas o mallas de mosaico según la cobertura del producto y redondea.',
      'Guarda algunas mallas de repuesto del mismo lote para reparaciones futuras.',
    ],
    factors: [
      { label: 'Mosaico vs baldosa de campo', detail: 'Las mallas de mosaico (~1 ft² cada una) se cortan fácil alrededor de los enchufes; las baldosas grandes de campo requieren cortes más cuidadosos.' },
      { label: 'Recortes de enchufes y ventanas', detail: 'Resta solo los huecos grandes: un corte pequeño de enchufe igual consume una baldosa entera, así que déjalo en el área.' },
      { label: 'Acentos focales', detail: 'Una cenefa con motivo o una hornacina usa otra baldosa; cuéntala por separado para no quedarte corto.' },
    ],
    faq: [
      { q: '¿Cuánta baldosa para un salpicadero de cocina?', a: 'Multiplica cada tramo por 1,5 ft (18 in) de alto, súmalos y añade 10–15%. Un tramo de 15 ft es ~22,5 ft² más desperdicio.' },
      { q: '¿Cuál es la altura estándar del salpicadero?', a: '18 pulgadas de la encimera a los muebles altos; a altura completa tras una cocina o en pared abierta es mayor.' },
    ],
    scenarios: [
      { q: '¿Cuánta baldosa de salpicadero para un tramo de 10 ft?', a: '10 ft × 1,5 ft = 15 ft² + 15% ≈ 17 ft².' },
      { q: '¿Cuánta para un tramo de 15 ft?', a: '15 ft × 1,5 ft = 22,5 ft² + 15% ≈ 26 ft².' },
      { q: '¿Cuánta para una cocina en L de 20 ft?', a: '20 ft × 1,5 ft = 30 ft² + 15% ≈ 35 ft².' },
    ],
  },
  'concrete-footing-calculator': {
    intro: 'Las zapatas se piden por volumen en yardas cúbicas. Multiplica ancho × profundidad × longitud total para zapatas continuas, o usa el volumen de columna para zapatas de pilar y de tubo Sonotube. La profundidad de helada local y la carga fijan las dimensiones mínimas.',
    steps: [
      'Mide el ancho y la profundidad de la zapata en pulgadas (conviértelo a pies) y la longitud total.',
      'Multiplica ancho × profundidad × longitud para los pies cúbicos, luego ÷27 para las yardas cúbicas.',
      'Añade 10% por sobreexcavación y fondos de zanja irregulares.',
      'Pide premezclado por encima de ~1 yarda; coloca la varilla antes del vertido en cualquier zapata estructural.',
    ],
    factors: [
      { label: 'Profundidad de helada', detail: 'Las zapatas deben quedar bajo la línea de helada local —a menudo 36–48 pulgadas en climas fríos— o se levantan y agrietan la estructura encima.' },
      { label: 'Ancho según carga', detail: 'La zapata corrida de muro suele ser el doble del ancho del muro; las cargas puntuales (postes, columnas) necesitan una zapata más ancha.' },
      { label: 'Varilla', detail: 'La mayoría de las zapatas necesitan 2–3 barras horizontales más esperas que aten con el muro superior; el hormigón solo se agrieta a tracción.' },
    ],
    faq: [
      { q: '¿Qué profundidad debe tener una zapata?', a: 'Bajo la línea de helada local —comúnmente 36–48 pulgadas— y al menos 12 pulgadas en suelo no alterado. Consulta tu código.' },
      { q: '¿Cuánto hormigón para una zapata?', a: 'Ancho × profundidad × longitud en pies, ÷27 para yardas. Una zapata de 16 in × 8 in × 40 ft es ~1,3 yd³ más desperdicio.' },
    ],
    scenarios: [
      { q: '¿Cuánto hormigón para una zapata de 16 in × 8 in × 40 ft?', a: '1,33 × 0,67 × 40 = ~36 ft³ = ~1,3 yd³.' },
      { q: '¿Cuánto para una zapata de 24 in × 12 in × 50 ft?', a: '2 × 1 × 50 = 100 ft³ = ~3,7 yd³.' },
      { q: '¿Cuánto para una zapata de 12 in × 6 in × 60 ft?', a: '1 × 0,5 × 60 = 30 ft³ = ~1,1 yd³.' },
    ],
  },
  'board-feet-lumber-calculator': {
    intro: 'Un pie tabla equivale a 144 pulgadas cúbicas: una pieza de 1 pulgada de grosor, 12 de ancho y 12 de largo. La madera dura se cotiza por pie tabla usando el grosor nominal (en bruto), así que una tabla "4/4" cuenta como 1 pulgada aun cepillada.',
    steps: [
      'Introduce grosor × ancho en pulgadas, más la longitud y la cantidad.',
      'La calculadora devuelve el total de pies tabla (grosor × ancho × longitud ÷ 144 por pie).',
      'Usa el grosor nominal para cotizar (4/4, 5/4, 8/4), no la dimensión cepillada.',
      'Añade 15–20% por defectos, selección de veta y recortes en madera en bruto.',
    ],
    factors: [
      { label: 'Nominal vs real', detail: 'La madera se vende por tamaño nominal: 4/4 = 1 pulgada en bruto (≈13/16" cepillada), 8/4 = 2 pulgadas. El precio usa el número en bruto.' },
      { label: 'Desperdicio por defectos', detail: 'La madera dura en bruto tiene nudos, grietas y color que recortarás: presupuesta 15–20% sobre tu necesidad final de pies tabla.' },
      { label: 'Sobreprecio por ancho', detail: 'Las tablas anchas y limpias cuestan más por pie tabla que las estrechas; mezclar anchos abarata el coste.' },
    ],
    faq: [
      { q: '¿Qué es un pie tabla?', a: 'Un volumen de madera igual a 144 pulgadas cúbicas: 1 pulgada de grosor × 12 de ancho × 12 de largo.' },
      { q: '¿Cómo se calculan los pies tabla?', a: 'Grosor (in) × ancho (in) × longitud (in) ÷ 144, o × longitud (ft) ÷ 12. Multiplica por la cantidad para el total.' },
    ],
    scenarios: [
      { q: '¿Cuántos pies tabla en diez tablas de 1×6×8 ft?', a: '1 × 6 × 8 ÷ 12 = 4 pt cada una × 10 = 40 pies tabla.' },
      { q: '¿Cuántos en ocho tablas de 5/4 × 8 in × 10 ft?', a: '1,25 × 8 × 10 ÷ 12 = 8,3 pt cada una × 8 = ~67 pies tabla.' },
      { q: '¿Cuántos en seis tablas de 8/4 × 6 in × 12 ft?', a: '2 × 6 × 12 ÷ 12 = 12 pt cada una × 6 = 72 pies tabla.' },
    ],
  },
  'crushed-stone-calculator': {
    intro: 'La piedra triturada se vende por tonelada o yarda cúbica y se usa como base compactante bajo entradas, patios y adoquines. Una yarda cúbica pesa unas 1,35 toneladas y cubre ~100 ft² a 3 pulgadas antes de compactar.',
    steps: [
      'Mide el área largo × ancho en pies.',
      'Elige la profundidad: 3 pulgadas para base de adoquín, 4–6 pulgadas bajo una entrada.',
      'La calculadora da yardas y toneladas a 1,35 ton/yd³: confirma la densidad con la cantera.',
      'Pide de más para la pérdida por compactación y colócala en capas compactadas.',
    ],
    factors: [
      { label: 'Angular: traba y compacta', detail: 'La piedra triturada tiene caras agudas que se traban y compactan ~20% —a diferencia de la grava redondeada—, lo que la hace el material de base correcto.' },
      { label: 'Granulometría', detail: 'El 3/4 de pulgada con finos compacta en una base dura; la piedra limpia de 3/4 drena pero no compacta tan firme.' },
      { label: 'Profundidad según uso', detail: 'Los senderos necesitan ~3 pulgadas, los patios 4 y las entradas 6 o más sobre un geotextil en suelo blando.' },
    ],
    faq: [
      { q: '¿Cuánto pesa una yarda de piedra triturada?', a: 'Unas 1,35 toneladas (~2.700 lb), según el tipo de piedra: confírmalo con tu proveedor.' },
      { q: '¿Qué profundidad debe tener una base de piedra triturada?', a: '3 pulgadas bajo adoquines, 4 bajo patios, 6 o más bajo entradas, todo compactado en capas.' },
    ],
    scenarios: [
      { q: '¿Cuánta piedra triturada para una base de adoquín de 10×10 ft a 4 in?', a: '~33 ft³ = 1,23 yd³, unas 1,7 toneladas.' },
      { q: '¿Cuánta para una base de entrada de 12×20 ft a 6 in?', a: '120 ft³ = 4,4 yd³, unas 6 toneladas.' },
      { q: '¿Cuánta para un sendero de 100 ft² a 3 in?', a: '~25 ft³ = 0,93 yd³, unas 1,25 toneladas.' },
    ],
  },
  'topsoil-calculator': {
    intro: 'La tierra vegetal se vende por yarda cúbica (a granel) o en bolsas (a menudo 0,75–1 ft³). Una yarda cúbica cubre ~100 ft² a 3 pulgadas y pesa unas 1,1 toneladas en seco; mojada pesa más. Úsala para crear parterres o nivelar zonas bajas antes de sembrar.',
    steps: [
      'Mide el área largo × ancho en pies.',
      'Elige la profundidad: 2–3 pulgadas para resembrar césped, 6–12 para parterres nuevos o elevados.',
      'La calculadora devuelve yardas y toneladas a 1,1 ton/yd³.',
      'Añade ~10%: la tierra se asienta notablemente tras el primer riego.',
    ],
    factors: [
      { label: 'Cribada vs sin cribar', detail: 'La tierra cribada es más fina, con menos piedras y raíces (mejor para sembrar) y cuesta más que el relleno en bruto.' },
      { label: 'Asentamiento', detail: 'La tierra fresca se asienta y compacta tras la lluvia y el riego: pide de más y rasanta algo elevada.' },
      { label: 'Bolsa vs granel', detail: 'Las bolsas sirven para trabajos pequeños; el granel sale mucho más barato a partir de una yarda cúbica (≈27–36 bolsas).' },
    ],
    faq: [
      { q: '¿Cuánto cubre una yarda de tierra vegetal?', a: 'Unos 100 ft² a 3 pulgadas, o ~160 ft² a 2 pulgadas.' },
      { q: '¿Cuántas bolsas de tierra vegetal en una yarda cúbica?', a: 'Unas 27 bolsas de 1 ft³, o ~36 bolsas de 0,75 ft³.' },
    ],
    scenarios: [
      { q: '¿Cuánta tierra vegetal para un parterre de 10×10 ft a 6 in?', a: '50 ft³ = 1,85 yd³, unas 2 toneladas.' },
      { q: '¿Cuánta para recubrir un césped de 20×20 ft a 2 in?', a: '~67 ft³ = 2,5 yd³, unas 2,7 toneladas.' },
      { q: '¿Cuánta para un parterre elevado de 4×8 ft a 12 in?', a: '32 ft³ = 1,2 yd³, unas 32 bolsas (1 ft³).' },
    ],
  },
  'sand-calculator': {
    intro: 'La arena se vende por tonelada o yarda cúbica y pesa unas 1,35–1,4 toneladas por yarda. Una yarda cúbica cubre ~300 ft² a 1 pulgada, así que una capa de asiento de 1 pulgada bajo adoquines lleva unos 0,0031 yd³ por ft².',
    steps: [
      'Mide el área largo × ancho en pies.',
      'Elige la profundidad: 1 pulgada para asiento de adoquines, 2–3 para relleno o capa base.',
      'La calculadora da yardas y toneladas a ~1,4 ton/yd³.',
      'Añade un poco de más por la pérdida al rasantear y el terreno irregular.',
    ],
    factors: [
      { label: 'Tipo de arena', detail: 'Usa arena de río gruesa (de hormigón) para el asiento de adoquines (no arena blanda de juego), y arena polimérica para sellar juntas.' },
      { label: 'Profundidad de asiento', detail: 'Rasantea el asiento de adoquines a exactamente 1 pulgada: camas más gruesas hacen que los adoquines se hundan y formen roderas.' },
      { label: 'Peso por humedad', detail: 'La arena mojada pesa bastante más por yarda; pide por volumen y deja que el proveedor convierta si compras por peso.' },
    ],
    faq: [
      { q: '¿Cuánta arena necesito bajo los adoquines?', a: 'Una capa de asiento de 1 pulgada es ~0,0031 yd³ por ft²: alrededor de 1 yarda por cada 320 ft² de patio.' },
      { q: '¿Cuánto pesa una yarda de arena?', a: 'Aproximadamente 1,35–1,4 toneladas (2.700–2.800 lb) en seco; más mojada.' },
    ],
    scenarios: [
      { q: '¿Cuánta arena para el asiento de adoquines de 10×10 ft a 1 in?', a: '~8,3 ft³ = 0,31 yd³, unas 0,43 toneladas.' },
      { q: '¿Cuánta para el asiento de un patio de 12×20 ft a 1 in?', a: '20 ft³ = 0,74 yd³, una 1 tonelada.' },
      { q: '¿Cuánta para una capa de asiento de 200 ft² a 1 in?', a: '~16,7 ft³ = 0,62 yd³, unas 0,87 toneladas.' },
    ],
  },
  'sod-calculator': {
    intro: 'El césped en tepe se vende por pieza (placa o rollo) y por palé. Un palé cubre normalmente 400–500 ft², y una pieza estándar de 16×24 pulgadas cubre ~2,67 ft². Pide un 5–10% de más para recortar en curvas y parterres.',
    steps: [
      'Mide cada área de césped largo × ancho en pies; suma las secciones irregulares por separado.',
      'Añade 5–10% de desperdicio para curvas, bordes y cortes.',
      'Divide entre la cobertura por pieza o palé y redondea.',
      'Colócalo dentro de las 24 horas de la entrega: el tepe es perecedero.',
    ],
    factors: [
      { label: 'Colócalo rápido', detail: 'El tepe es césped vivo; amarillea en el palé en uno o dos días con calor, así que programa la entrega para el día de instalación.' },
      { label: 'Preparación del suelo', detail: 'Nivela y labra ligeramente el suelo, luego riega el tepe nuevo de inmediato y a diario durante dos semanas para que arraigue.' },
      { label: 'La cobertura del palé varía', detail: 'Las granjas cortan placas de distinto tamaño: confirma los ft² exactos por palé antes de pedir.' },
    ],
    faq: [
      { q: '¿Cuántas piezas de tepe hay en un palé?', a: 'Normalmente 150–180 piezas cubriendo 400–500 ft², según el tamaño de placa de la granja.' },
      { q: '¿Cuánto tepe de más debo pedir?', a: 'Un 5–10% sobre el área medida para cubrir curvas, bordes y el desperdicio del recorte.' },
    ],
    scenarios: [
      { q: '¿Cuánto tepe para un césped de 1.000 ft²?', a: '1.000 ft² + 10% = 1.100 ft², unos 2–3 palés.' },
      { q: '¿Cuánto para un patio de 500 ft²?', a: '500 ft² + 10% = 550 ft², 1 palé más unas piezas.' },
      { q: '¿Cuántos palés de tepe para 1/4 de acre?', a: '~10.890 ft² + 10% ≈ 12.000 ft², unos 24–30 palés.' },
    ],
  },
  'paver-calculator': {
    intro: 'Los adoquines se cuentan dividiendo el área del patio entre el área de cara de un adoquín. Un adoquín de 6×9 pulgadas cubre 0,375 ft² (unos 2,67 por ft²); uno de 12×12 cubre 1 ft². Añade 5–10% por cortes en bordes y curvas.',
    steps: [
      'Mide el área del patio largo × ancho en pies.',
      'Introduce las dimensiones de tu adoquín para que la calculadora halle los adoquines por ft².',
      'Añade 5% de desperdicio en aparejo recto, 10% en diagonal o bordes curvos.',
      'Redondea a adoquines enteros y pide algunos de repuesto del mismo lote.',
    ],
    factors: [
      { label: 'Desperdicio por patrón', detail: 'La espiga, el trenzado y los kits circulares cortan muchos más adoquines que un aparejo a soga simple: planifica el extra.' },
      { label: 'Base y asiento', detail: 'Los adoquines van sobre 1 pulgada de arena de asiento sobre 4–6 pulgadas de piedra triturada compactada; escatimar causa asentamientos.' },
      { label: 'Confinamiento de borde', detail: 'El borde de plástico o de hormigón fija el conjunto para que los adoquines no se separen ni abran con el tiempo.' },
    ],
    faq: [
      { q: '¿Cuántos adoquines necesito por pie cuadrado?', a: 'Divide 144 entre el área de cara del adoquín en pulgadas cuadradas. Un adoquín de 6×9 (54 in²) es ~2,67 por ft².' },
      { q: '¿Cuánto extra debo añadir por los cortes?', a: '5% para patrones rectos, 10% en diagonal o bordes curvos y circulares.' },
    ],
    scenarios: [
      { q: '¿Cuántos adoquines de 6×9 in para un patio de 10×10 ft?', a: '100 ft² × 2,67 = ~267 adoquines, +5% ≈ 280.' },
      { q: '¿Cuántos adoquines de 12×12 in para un patio de 12×12 ft?', a: '144 ft² × 1 = 144 adoquines, +5% ≈ 152.' },
      { q: '¿Cuántos adoquines para un patio de 200 ft² (6×9 in)?', a: '200 ft² × 2,67 = ~534 adoquines, +10% por cortes ≈ 588.' },
    ],
  },
  'river-rock-calculator': {
    intro: 'El canto rodado es piedra decorativa lisa que se vende por tonelada o yarda cúbica, con un peso de unas 1,4 toneladas por yarda. Cubre ~80 ft² a 2 pulgadas; como no compacta ni se traba, coloca tela antihierba debajo para que no se hunda.',
    steps: [
      'Mide el área del parterre largo × ancho en pies.',
      'Elige 2–3 pulgadas de profundidad (más para piedra grande, que oculte el suelo).',
      'La calculadora da yardas y toneladas a 1,4 ton/yd³.',
      'Coloca primero la tela antihierba y delimita el parterre antes de esparcir.',
    ],
    factors: [
      { label: 'El tamaño fija la profundidad', detail: 'La piedra grande de 1–2 pulgadas necesita ~3 pulgadas de profundidad para cubrir el suelo; la pequeña puede ir a ~2.' },
      { label: 'No compacta', detail: 'El canto rodado queda suelto y migra: el borde y la tela lo mantienen en su sitio y lejos del suelo.' },
      { label: 'Tela antihierba', detail: 'La tela debajo bloquea las malezas e impide que la piedra se hunda y se mezcle con la tierra.' },
    ],
    faq: [
      { q: '¿Qué profundidad debe tener el canto rodado?', a: '2 pulgadas para piedra pequeña, hasta 3 para piedra de 1–2 pulgadas, sobre tela antihierba.' },
      { q: '¿Cuánto pesa el canto rodado por yarda?', a: 'Unas 1,4 toneladas (~2.800 lb) por yarda cúbica, según el tamaño de la piedra.' },
    ],
    scenarios: [
      { q: '¿Cuánto canto rodado para un parterre de 10×10 ft a 2 in?', a: '~16,7 ft³ = 0,62 yd³, unas 0,87 toneladas.' },
      { q: '¿Cuánto para un área de 20×20 ft a 2 in?', a: '~67 ft³ = 2,5 yd³, unas 3,5 toneladas.' },
      { q: '¿Cuánto para un borde de 100 ft² a 3 in?', a: '~25 ft³ = 0,93 yd³, unas 1,3 toneladas.' },
    ],
  },
  'roofing-shingle-calculator': {
    intro: 'La cubierta se mide en "cuadros": un cuadro son 100 ft² de tejado. Las tejas asfálticas vienen ~3 fardos por cuadro. Usa el área real del tejado (no la huella), que es mayor por la pendiente, y añade 10–15% por desperdicio, limahoyas y limatesas.',
    steps: [
      'Obtén el área real del tejado: huella × un factor de pendiente (p. ej. ×1,12 para un tejado 6/12).',
      'Divide el área del tejado entre 100 para los cuadros.',
      'Multiplica los cuadros por 3 para los fardos de teja asfáltica.',
      'Añade 10% de desperdicio (15% en tejados complejos con muchas limahoyas) y redondea.',
    ],
    factors: [
      { label: 'Multiplicador de pendiente', detail: 'Un tejado 6/12 es ~12% mayor que su huella; uno 12/12, ~41%. Medir solo la huella deja corto el pedido de tejas.' },
      { label: 'Limatesas, limahoyas y cumbreras', detail: 'La hilada de arranque, la cumbrera y los cortes de limahoya añaden material más allá del faldón: presupuesta ese 10–15% extra.' },
      { label: 'Componentes aparte', detail: 'La membrana, el goterón, la lámina de hielo y agua y los clavos se cuentan por separado de los fardos de teja.' },
    ],
    faq: [
      { q: '¿Cuántos fardos de tejas hay en un cuadro?', a: 'Tres fardos por cuadro en teja asfáltica arquitectónica estándar (algunas gamas pesadas usan cuatro).' },
      { q: '¿Cómo calculo el área del tejado desde el suelo?', a: 'Mide la huella del edificio y multiplícala por el factor de pendiente de tu inclinación (≈1,12 para 6/12, ≈1,20 para 8/12).' },
    ],
    scenarios: [
      { q: '¿Cuántas tejas para un tejado de 1.500 ft² (6/12)?', a: '1.500 × 1,12 = 1.680 ft² = ~17 cuadros, unos 51 fardos + 10% de desperdicio.' },
      { q: '¿Cuántas para una huella de 1.000 ft² (4/12)?', a: '1.000 × 1,05 = 1.050 ft² = ~11 cuadros, unos 33 fardos + desperdicio.' },
      { q: '¿Cuántos fardos para un tejado a dos aguas de 24×40 ft (6/12)?', a: 'Huella 960 ft² × 1,12 = ~1.075 ft² = ~11 cuadros, ~33 fardos + 10%.' },
    ],
  },
  'siding-calculator': {
    intro: 'El revestimiento se estima por área de pared, a menudo expresada en cuadros (100 ft²). Mide cada pared, resta los huecos grandes y añade 10% de desperdicio —15% en revestimiento de tabla solapada con muchos cortes o un diseño complejo con hastiales.',
    steps: [
      'Mide cada pared ancho × alto y súmalas para el área bruta.',
      'Resta puertas y ventanas grandes (deja los huecos pequeños).',
      'Añade 10% de desperdicio (15% en tabla solapada, hastiales y muchos huecos).',
      'Convierte a cuadros o piezas según la cobertura del producto y redondea.',
    ],
    factors: [
      { label: 'Exposición de la tabla', detail: 'El reveal visible (p. ej. 7 pulgadas en una tabla de 12) fija cuántas hiladas/piezas lleva cada pared: manda más que el área bruta.' },
      { label: 'Molduras y accesorios', detail: 'Las esquineras, el canal J, la pieza de arranque y el sofito van aparte del revestimiento: cuéntalos por pie lineal.' },
      { label: 'Hastiales y huecos', detail: 'Los hastiales triangulares y muchas ventanas suben el desperdicio por cortes; aumenta el margen hacia el 15%.' },
    ],
    faq: [
      { q: '¿Cuánto revestimiento para una casa de 1.500 ft²?', a: 'El área de pared (no la de suelo) suele ser ~1.400–1.800 ft² en dos plantas: unos 14–18 cuadros más 10% de desperdicio.' },
      { q: '¿Cuántos cuadros de revestimiento necesito?', a: 'Área total de pared menos los huecos grandes, dividida entre 100, más 10–15% de desperdicio.' },
    ],
    scenarios: [
      { q: '¿Cuánto revestimiento para una casa de una planta de 1.500 ft²?', a: '~1.200 ft² de pared + 10% = 1.320 ft² ≈ 13 cuadros.' },
      { q: '¿Cuánto para una casa de dos plantas de 2.000 ft²?', a: '~1.800 ft² de pared + 10% = 1.980 ft² ≈ 20 cuadros.' },
      { q: '¿Cuánto para una pared de hastial de 20×12 ft?', a: '240 ft² + 10% ≈ 2,6 cuadros.' },
    ],
  },
  'decking-board-calculator': {
    intro: 'Las tablas de tarima se cuentan a partir del área de la tarima y la cobertura de la tabla, incluida la junta entre tablas. Una tabla de 5/4×6 mide 5,5 pulgadas de ancho; con una junta de 1/8 cubre ~5,625 pulgadas, así que una tarima de 12×12 necesita unas 26 tablas por cada largo de 12 ft más desperdicio.',
    steps: [
      'Mide el largo × ancho de la tarima en pies.',
      'Elige el ancho y el largo de tabla; la calculadora tiene en cuenta la junta entre tablas.',
      'Devuelve el número de tablas para la dirección de colocación que elijas.',
      'Añade 10% por cortes, más las tablas de un borde tipo marco o de un diseño en diagonal.',
    ],
    factors: [
      { label: 'Dirección de colocación', detail: 'La tarima en diagonal queda muy bien pero desperdicia 15%+ en cortes angulares; las hiladas rectas paralelas al lado corto desperdician menos.' },
      { label: 'Separación de junta', detail: 'Deja 1/8–1/4 de pulgada entre tablas para drenaje y dilatación; el composite necesita la junta más ancha con calor.' },
      { label: 'Separación de viguetas', detail: 'Estructura las viguetas a 16 pulgadas para la mayoría de tablas, a 12 para diagonal o composite fino, o las tablas ceden.' },
    ],
    faq: [
      { q: '¿Cuántas tablas de tarima necesito?', a: 'Divide el ancho de la tarima entre la cobertura de la tabla (ancho + junta) para las tablas por hilada, multiplica por hiladas y añade 10%.' },
      { q: '¿Cuánta junta debo dejar entre tablas de tarima?', a: '1/8 de pulgada para madera seca que encogerá, hasta 1/4 para composite y madera tratada que aún está húmeda.' },
    ],
    scenarios: [
      { q: '¿Cuántas tablas de 5/4×6 para una tarima de 12×12 ft?', a: 'Unas 26 tablas por cada largo de 12 ft + 10% ≈ 29 tablas.' },
      { q: '¿Cuántas para una tarima de 10×16 ft?', a: 'Unas 21 tablas de 16 ft (o 42 de 8 ft) + 10% de desperdicio.' },
      { q: '¿Cuántas para una tarima de 16×20 ft?', a: 'Unas 35 tablas por hilada de 16 ft + 10% ≈ 39 tablas.' },
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
  'vinyl-plank-flooring-calculator': {
    intro: 'Luxus-Vinylboden (LVP) wird paketweise verkauft, jedes Paket deckt ~20–24 ft² ab. Er ist wasserfest und klickt als schwimmender Boden über den meisten ebenen Untergründen. Ein 200-ft²-Raum braucht bei 10% Verschnitt und 22 ft²/Paket etwa 10 Pakete.',
    steps: [
      'Miss Länge × Breite jedes Raums in Fuß und addiere sie zur Gesamtquadratfuß.',
      'Lies die tatsächliche Abdeckung vom Paketetikett ab: sie variiert mit der Dielengröße, nimm nicht einfach 20 ft² an.',
      'Rechne Verschnitt dazu: 10% bei gerader Verlegung, 15% diagonal oder bei vielen Schnitten und Winkeln.',
      'Der Rechner rundet auf ganze Pakete auf; bewahre ein Paket derselben Charge für Reparaturen auf.',
    ],
    factors: [
      { label: 'Kernart', detail: 'Der starre SPC-Kern verträgt unebene Untergründe und Temperaturschwankungen besser als der flexible WPC-Kern – wichtig über Beton und in Wintergärten.' },
      { label: 'Ebenheit des Untergrunds', detail: 'Schwimmendes LVP braucht den Untergrund auf ~3/16 Zoll über 10 ft eben, sonst biegen sich die Dielen und die Klickverbindungen versagen.' },
      { label: 'Dielenlänge und Verlegung', detail: 'Lange Dielen und diagonale Muster erhöhen den Verschnitt; versetze die Stoßfugen mindestens 6 Zoll für Festigkeit und Optik.' },
    ],
    faq: [
      { q: 'Wie viele Pakete Vinylboden für 200 ft²?', a: 'Etwa 10 Pakete zu 22 ft²/Paket bei 10% Verschnitt. Prüfe immer zuerst die tatsächliche Abdeckung deines Pakets.' },
      { q: 'Braucht man unter Vinylboden eine Trittschalldämmung?', a: 'Viele LVP-Produkte haben eine angeklebte Dämmung; falls nicht, nimm eine dünne Schaumunterlage. Über Beton zusätzlich eine Dampfsperre.' },
    ],
    scenarios: [
      { q: 'Wie viel Vinylboden für einen 10×10-ft-Raum?', a: '100 ft² + 10% = 110 ft², etwa 5 Pakete zu 22 ft²/Paket.' },
      { q: 'Wie viel für einen 12×12-ft-Raum?', a: '144 ft² + 10% = 158 ft², etwa 8 Pakete.' },
      { q: 'Wie viel für eine 200-ft²-Fläche?', a: '200 ft² + 10% = 220 ft², etwa 10 Pakete plus ein Reservepaket.' },
    ],
  },
  'hardwood-flooring-calculator': {
    intro: 'Massivholzboden wird kartonweise verkauft und deckt eine angegebene Fläche ab (oft ~20 ft²). Rechne 5–10% Verschnitt dazu und kaufe aus einer Charge, damit Maserung und Farbton passen. Er wird auf einem Holzuntergrund genagelt und muss vorher akklimatisieren.',
    steps: [
      'Miss Länge × Breite jedes Raums in Fuß und addiere die Gesamtquadratfuß.',
      'Lies die tatsächliche Abdeckung vom Kartonetikett ab – die Dielenbreite ändert sie.',
      'Rechne 10% Verschnitt dazu (mehr bei diagonaler Verlegung oder Räumen mit vielen Schnitten).',
      'Der Rechner rundet auf ganze Kartons auf; bewahre einen Reservekarton für späteren Dielentausch auf.',
    ],
    factors: [
      { label: 'Akklimatisierung', detail: 'Lass das Massivholz 3–7 Tage im Raum liegen; seine Holzfeuchte sollte innerhalb von 2–4% der des Untergrunds liegen, sonst schüsseln die Dielen und es entstehen Fugen.' },
      { label: 'Sortierung & Charge', detail: 'Bestelle aus einer Charge – Farbe und Maserung variieren zwischen Chargen und lassen sich später nicht mischen.' },
      { label: 'Dielenbreite', detail: 'Breite Dielen sehen toll aus, verschneiden aber mehr und arbeiten stärker mit der Luftfeuchte; schmale Dielen verschneiden weniger.' },
    ],
    faq: [
      { q: 'Wie viel Massivholz sollte ich extra kaufen?', a: 'Rechne 5–10% bei gerader Verlegung, bis zu 15% diagonal oder bei vielen Türen, plus einen Reservekarton.' },
      { q: 'Muss Massivholzboden akklimatisieren?', a: 'Ja – 3–7 Tage im Verlegeraum, damit seine Feuchte zum Untergrund passt; ohne das schüsselt der Boden und bildet Fugen.' },
    ],
    scenarios: [
      { q: 'Wie viel Massivholz für einen 10×10-ft-Raum?', a: '100 ft² + 10% = 110 ft², etwa 6 Kartons zu 20 ft²/Karton.' },
      { q: 'Wie viel für einen 12×16-ft-Raum?', a: '192 ft² + 10% = 211 ft², etwa 11 Kartons.' },
      { q: 'Wie viel für eine 300-ft²-Fläche?', a: '300 ft² + 10% = 330 ft², etwa 17 Kartons plus einen Reservekarton.' },
    ],
  },
  'engineered-wood-flooring-calculator': {
    intro: 'Mehrschichtparkett ist ein Echtholz-Furnier auf einem Sperrholzkern, formstabiler als Massivholz, daher schwimmend, verklebt oder geklammert verlegbar. Kartons geben die Abdeckung an (~20–30 ft²). Rechne 8–10% Verschnitt; eine kurze Akklimatisierung ist trotzdem nötig.',
    steps: [
      'Miss Länge × Breite jedes Raums und addiere die Fläche in Quadratfuß.',
      'Verwende die auf dem Karton angegebene Abdeckung, nicht eine Schätzung.',
      'Rechne 10% Verschnitt gerade, 15% diagonal; auf ganze Kartons aufrunden plus ein Reservekarton.',
      'Wähle die Verlegeart (schwimmend per Klick, verklebt oder geklammert) – sie ändert den Bedarf an Unterlage.',
    ],
    factors: [
      { label: 'Verlegeart', detail: 'Schwimmendes Klicken über Unterlage ist am schnellsten; Verkleben fühlt sich über Beton fester an. Die Methode entscheidet, was du sonst kaufst.' },
      { label: 'Nutzschichtdicke', detail: 'Ein dickeres Deckfurnier (2–6 mm) lässt sich ein- bis zweimal abschleifen und renovieren; dünne Furniere nicht.' },
      { label: 'Akklimatisierung', detail: 'Mehrschichtparkett ist stabil, lass es aber 48–72 Stunden im Raum ruhen, bevor du verlegst.' },
    ],
    faq: [
      { q: 'Kann Mehrschichtparkett schwimmend verlegt werden?', a: 'Ja – Klick-Mehrschichtparkett schwimmt über einer Unterlage, weshalb es sich besser für Beton und Räume unter Erdniveau eignet als Massivholz.' },
      { q: 'Worin unterscheidet es sich beim Bestellen von Laminat?', a: 'Beide werden kartonweise verkauft; Mehrschichtparkett hat ein Echtholz-Furnier (renovierbar bei dicker Schicht), Laminat ist eine gedruckte Fotoschicht.' },
    ],
    scenarios: [
      { q: 'Wie viel Mehrschichtparkett für einen 10×12-ft-Raum?', a: '120 ft² + 10% = 132 ft², etwa 6 Kartons zu 22 ft²/Karton.' },
      { q: 'Wie viel für einen 14×16-ft-Raum?', a: '224 ft² + 10% = 246 ft², etwa 12 Kartons.' },
      { q: 'Wie viel für eine 300-ft²-Fläche?', a: '300 ft² + 10% = 330 ft², etwa 15 Kartons plus einen Reservekarton.' },
    ],
  },
  'floor-tile-calculator': {
    intro: 'Bodenfliesen werden kartonweise mit fester Abdeckung verkauft; großformatige Fliesen decken mehr pro Karton ab, brechen aber stärker bei Schnitten. Rechne 10% Verschnitt im geraden Raster, 15–20% diagonal oder bei vielen Ausschnitten.',
    steps: [
      'Miss die Bodenlänge × Breite in Fuß für die Gesamtfläche; rechne Nischen und Einbauschränke separat.',
      'Lies die tatsächliche Abdeckung des Kartons (ein Karton mit 12×24-Fliesen deckt ~15 ft² ab).',
      'Rechne Verschnitt nach Verlegung: 10% gerade, 15–20% diagonal oder Fischgrät.',
      'Teile und runde auf ganze Kartons auf, und behalte ein paar derselben Charge für spätere Rissreparaturen.',
    ],
    factors: [
      { label: 'Fliesengröße vs Untergrund', detail: 'Großformat (12×24 und größer) braucht den Untergrund auf 1/8 Zoll über 10 ft eben, sonst stehen Ecken über und reißen.' },
      { label: 'Verlegerichtung', detail: 'Diagonale und Fischgrätmuster schneiden weit mehr Fliesen als ein gerades Raster; plane den Verschnitt vorab.' },
      { label: 'Farbabweichung der Charge', detail: 'Farbchargen unterscheiden sich; bestelle alle Fliesen auf einmal und mische beim Verlegen aus mehreren Kartons, um den Ton anzugleichen.' },
    ],
    faq: [
      { q: 'Wie viele Fliesen sind in einem Karton?', a: 'Hängt von der Fliesengröße ab – Kartons geben die Gesamtabdeckung in ft² an, nutze diese Zahl statt Fliesen zu zählen.' },
      { q: 'Wie viel Bodenfliese sollte ich extra kaufen?', a: '10% im geraden Raster, 15–20% diagonal oder bei vielen Ausschnitten, plus ein paar Reservefliesen.' },
    ],
    scenarios: [
      { q: 'Wie viel Bodenfliese für ein 5×8-ft-Bad?', a: '40 ft² + 10% = 44 ft², etwa 3 Kartons zu 15 ft²/Karton.' },
      { q: 'Wie viel für eine 10×12-ft-Küche?', a: '120 ft² + 10% = 132 ft², etwa 9 Kartons.' },
      { q: 'Wie viel für einen 200-ft²-Raum?', a: '200 ft² + 10% = 220 ft², etwa 15 Kartons plus Reserve.' },
    ],
  },
  'carpet-calculator': {
    intro: 'Teppichboden wird nach Quadratyard verkauft und kommt in 12 ft (manchmal 15 ft) breiten Rollen, daher bestimmen Rollenbreite und Nahtlage den Verschnitt – oft 10–20% über der reinen Raumfläche. Rechne Quadratfuß in Quadratyard um, indem du durch 9 teilst.',
    steps: [
      'Miss jeden Raum Länge × Breite in Fuß; rechne in Quadratyard um (ft² ÷ 9).',
      'Plane die Nähte zur 12-ft-Rollenbreite – ein Raum breiter als 12 ft erzwingt eine Naht.',
      'Rechne 10% Verschnitt dazu, mehr bei Treppen, Fluren und gemustertem Teppich.',
      'Runde auf ganze Quadratyard auf und bewahre einen Rest für Reparaturen auf.',
    ],
    factors: [
      { label: 'Rollenbreite vs Raumbreite', detail: 'Ein 13 ft breiter Raum aus einer 12-ft-Rolle braucht eine Naht und verschwendet den Abschnitt – miss die lange Wand gegen die Rollenbreite.' },
      { label: 'Florrichtung', detail: 'Teppich hat einen Flor; alle Stücke müssen in dieselbe Richtung laufen, sonst zeigen sich Nähte als Farbunterschied.' },
      { label: 'Musterrapport', detail: 'Gemusterter Teppich muss an Nähten zusammenpassen, was pro Naht einen vollen Rapport Verschnitt hinzufügt.' },
    ],
    faq: [
      { q: 'Wie viele Quadratyard Teppich brauche ich?', a: 'Teile die Quadratfuß des Raums durch 9 und rechne 10–20% für Rollenbreite und Nähte dazu.' },
      { q: 'Warum verschwendet Teppich so viel?', a: 'Feste 12-ft-Rollenbreite plus Florrichtung und Musterpassung führen dazu, dass Abschnitte sich nicht immer wiederverwenden lassen.' },
    ],
    scenarios: [
      { q: 'Wie viel Teppich für einen 12×12-ft-Raum?', a: '144 ft² ÷ 9 = 16 yd² + 10% ≈ 18 Quadratyard.' },
      { q: 'Wie viel für ein 12×15-ft-Schlafzimmer?', a: '180 ft² ÷ 9 = 20 yd² + 10% ≈ 22 Quadratyard.' },
      { q: 'Wie viel für eine 500-ft²-Fläche?', a: '500 ft² ÷ 9 = 55,5 yd² + 10% ≈ 62 Quadratyard.' },
    ],
  },
  'exterior-paint-calculator': {
    intro: 'Außenfarbe deckt ~250–350 ft² pro Gallone und Anstrich, weniger auf rauer Verkleidung, Putz oder rohem Holz. Miss jede Wand, ziehe große Öffnungen ab und plane zwei Anstriche. Raues Zedernholz und Putz können 30–50% mehr schlucken.',
    steps: [
      'Miss jede Wand Breite × Höhe; ziehe Garagentore und große Fenster ab.',
      'Wähle die Anstriche: 2 Standard, 3 über rohem Holz oder bei großem Farbwechsel.',
      'Teile Fläche × Anstriche durch die Ergiebigkeit (Standard 300 ft²/gal) und runde auf ganze Gallonen auf.',
      'Grundiere rohe oder fleckige Flächen, und kaufe Körper- und Trimmfarbe getrennt.',
    ],
    factors: [
      { label: 'Oberflächentextur', detail: 'Glatte Verkleidung erreicht 350 ft²/gal; Putz, Spaltstein und raues Zedernholz können auf 150–200 fallen – schätze die Textur ehrlich ein.' },
      { label: 'Wetterfenster', detail: 'Streiche bei 50–85°F ohne Regen für 24 Stunden; Feuchte und pralle Sonne ruinieren die Aushärtung.' },
      { label: 'Körper vs Trimm', detail: 'Schätze Hauptfarbe und Trimm/Faszie getrennt – sie nutzen unterschiedlichen Glanz und unterschiedliche Mengen.' },
    ],
    faq: [
      { q: 'Wie viel Außenfarbe brauche ich für ein Haus?', a: 'Ein typisches einstöckiges Haus mit 1.500 ft² hat ~1.200 ft² Wand – etwa 7 Gallonen für zwei Anstriche auf glatter Verkleidung, mehr bei Putz.' },
      { q: 'Wie viele Anstriche Außenfarbe?', a: 'Zwei über einer bereits gestrichenen Fläche; drei (mit Grundierung) über rohem Holz oder bei drastischem Farbwechsel.' },
    ],
    scenarios: [
      { q: 'Wie viel Außenfarbe für ein einstöckiges 1.500-ft²-Haus, 2 Anstriche?', a: '~1.200 ft² Wand × 2 ÷ 350 = ~7 Gallonen auf glatter Verkleidung.' },
      { q: 'Wie viel für ein zweistöckiges 2.500-ft²-Haus, 2 Anstriche?', a: '~2.200 ft² Wand × 2 ÷ 350 = ~13 Gallonen.' },
      { q: 'Wie viel für 400 ft² Wand, 2 Anstriche?', a: '400 ft² × 2 ÷ 350 = ~3 Gallonen (mehr auf rauen Flächen).' },
    ],
  },
  'drywall-calculator': {
    intro: 'Trockenbauplatten gibt es in 4×8 (32 ft²) und 4×12 (48 ft²). Teile die Gesamtfläche von Wänden und Decke durch die Plattengröße für die Anzahl; größere Platten bedeuten weniger zu verspachtelnde Fugen. Rechne ~10% für Schnitte dazu.',
    steps: [
      'Miss die Fläche jeder Wand und Decke in Quadratfuß und addiere sie.',
      'Wähle die Plattengröße – 4×12 spart Fugen an langen Wänden, 4×8 ist allein leichter zu handhaben.',
      'Teile die Gesamtfläche durch die Plattenabdeckung (32 oder 48 ft²) und rechne 10% Verschnitt dazu.',
      'Runde auf ganze Platten auf; vergiss Schrauben, Fugenband und Spachtelmasse nicht.',
    ],
    factors: [
      { label: 'Abwägung der Plattengröße', detail: 'Größere 4×12-Platten lassen weniger Fugen zu verspachteln, sind aber schwer und sperrig; 4×8 schafft eine Person.' },
      { label: 'Dicke nach Ort', detail: 'Verwende 1/2 Zoll an Wänden und 5/8 Zoll an Decken und wo Brandschutz gefordert ist.' },
      { label: 'Finish-Material', detail: 'Plane ~1 lb Schrauben und eine Tube Spachtel pro paar Platten, plus Band für jede Fuge – das sind separate Käufe.' },
    ],
    faq: [
      { q: 'Wie viele Trockenbauplatten für einen 12×12-Raum?', a: 'Wände plus Decke ergeben ~540 ft²; bei 32 ft²/Platte mit Verschnitt sind das etwa 18–20 Platten 4×8.' },
      { q: 'Welche Plattengröße sollte ich nehmen?', a: '4×8 für enge Räume und Soloarbeit; 4×12 an langen, hohen Wänden, um Fugen zu minimieren.' },
    ],
    scenarios: [
      { q: 'Wie viele Trockenbauplatten für einen 10×10-ft-Raum (8 ft Wände)?', a: 'Wände ~320 ft² + Decke 100 ft² = 420 ft², etwa 14–15 Platten 4×8.' },
      { q: 'Wie viele für einen 12×12-ft-Raum?', a: '~540 ft² gesamt, etwa 18–20 Platten 4×8 mit Verschnitt.' },
      { q: 'Wie viele für eine Garage (20×20 ft)?', a: 'Wände ~640 ft² + Decke 400 ft² = 1.040 ft², etwa 33–36 Platten.' },
    ],
  },
  'backsplash-tile-calculator': {
    intro: 'Ein Küchen-Fliesenspiegel ist meist 18 Zoll hoch zwischen Arbeitsplatte und Oberschränken. Miss jede Strecke Länge × Höhe, rechne 10–15% Verschnitt dazu und bestelle mehr für Mosaike und komplizierte Schnitte, die mehr verschneiden.',
    steps: [
      'Miss jede Wandstrecke Länge × 18 Zoll (1,5 ft) Höhe; addiere die Flächen.',
      'Rechne 10% Verschnitt für Feldfliesen, 15% für Mosaike oder Fischgrät.',
      'Rechne nach Produktabdeckung in Kartons oder Mosaikmatten um und runde auf.',
      'Bewahre ein paar Reservematten derselben Charge für spätere Reparaturen auf.',
    ],
    factors: [
      { label: 'Mosaik vs Feldfliese', detail: 'Netzverklebte Mosaikmatten (~1 ft² je) lassen sich leicht um Steckdosen schneiden; große Feldfliesen brauchen sorgfältigere Schnitte.' },
      { label: 'Steckdosen- und Fensterausschnitte', detail: 'Ziehe nur große Öffnungen ab – ein kleiner Steckdosenschnitt verbraucht trotzdem eine ganze Fliese, also lass ihn in der Fläche.' },
      { label: 'Akzente', detail: 'Ein gemustertes Band oder eine Nische nutzt andere Fliesen; zähle sie separat, damit dir nichts ausgeht.' },
    ],
    faq: [
      { q: 'Wie viel Fliese für einen Küchen-Fliesenspiegel?', a: 'Multipliziere jede Strecke mit 1,5 ft (18 Zoll) Höhe, addiere und rechne 10–15% dazu. Eine 15-ft-Strecke sind ~22,5 ft² plus Verschnitt.' },
      { q: 'Wie hoch ist ein Standard-Fliesenspiegel?', a: '18 Zoll von der Arbeitsplatte zu den Oberschränken; in voller Höhe hinter einem Herd oder an offener Wand höher.' },
    ],
    scenarios: [
      { q: 'Wie viel Fliese für eine 10-ft-Strecke?', a: '10 ft × 1,5 ft = 15 ft² + 15% ≈ 17 ft².' },
      { q: 'Wie viel für eine 15-ft-Strecke?', a: '15 ft × 1,5 ft = 22,5 ft² + 15% ≈ 26 ft².' },
      { q: 'Wie viel für eine 20-ft-L-Küche?', a: '20 ft × 1,5 ft = 30 ft² + 15% ≈ 35 ft².' },
    ],
  },
  'concrete-footing-calculator': {
    intro: 'Fundamente werden nach Volumen in Kubikyard bestellt. Multipliziere Breite × Tiefe × Gesamtlänge für Streifenfundamente, oder nutze das Säulenvolumen für Pfeiler- und Sonotube-Fundamente. Örtliche Frosttiefe und Last legen die Mindestmaße fest.',
    steps: [
      'Miss Breite und Tiefe des Fundaments in Zoll (in Fuß umrechnen) und die Gesamtlänge.',
      'Breite × Tiefe × Länge ergibt Kubikfuß, dann ÷27 für Kubikyard.',
      'Rechne 10% für Überaushub und unebene Grabensohlen dazu.',
      'Bestelle Transportbeton über ~1 Yard; setze bei jedem statischen Fundament vor dem Guss Bewehrung.',
    ],
    factors: [
      { label: 'Frosttiefe', detail: 'Fundamente müssen unter der örtlichen Frostlinie sitzen – in kalten Klimazonen oft 36–48 Zoll – sonst hebt der Frost und reißt die Struktur darüber.' },
      { label: 'Breite nach Last', detail: 'Ein durchlaufendes Wandfundament ist meist doppelt so breit wie die Wand; Punktlasten (Stützen, Säulen) brauchen ein breiteres Polster.' },
      { label: 'Bewehrung', detail: 'Die meisten Fundamente brauchen 2–3 Längsstäbe plus Anschlusseisen zur Wand darüber; Beton allein reißt unter Zug.' },
    ],
    faq: [
      { q: 'Wie tief sollte ein Fundament sein?', a: 'Unter der örtlichen Frostlinie – meist 36–48 Zoll – und mindestens 12 Zoll in ungestörten Boden. Prüfe deine Bauordnung.' },
      { q: 'Wie viel Beton für ein Fundament?', a: 'Breite × Tiefe × Länge in Fuß, ÷27 für Yards. Ein 16 Zoll × 8 Zoll × 40 ft Fundament sind ~1,3 yd³ plus Verschnitt.' },
    ],
    scenarios: [
      { q: 'Wie viel Beton für ein 16 Zoll × 8 Zoll × 40 ft Fundament?', a: '1,33 × 0,67 × 40 = ~36 ft³ = ~1,3 yd³.' },
      { q: 'Wie viel für ein 24 Zoll × 12 Zoll × 50 ft Fundament?', a: '2 × 1 × 50 = 100 ft³ = ~3,7 yd³.' },
      { q: 'Wie viel für ein 12 Zoll × 6 Zoll × 60 ft Fundament?', a: '1 × 0,5 × 60 = 30 ft³ = ~1,1 yd³.' },
    ],
  },
  'board-feet-lumber-calculator': {
    intro: 'Ein Brettfuß entspricht 144 Kubikzoll – ein Stück 1 Zoll dick, 12 Zoll breit, 12 Zoll lang. Hartholz wird nach Brettfuß zur Nenndicke (rau) berechnet, daher zählt ein „4/4“-Brett auch nach dem Hobeln als 1 Zoll.',
    steps: [
      'Gib Dicke × Breite in Zoll ein, plus Länge und Stückzahl.',
      'Der Rechner liefert die gesamten Brettfuß (Dicke × Breite × Länge ÷ 144 je Fuß).',
      'Nutze für die Preisberechnung die Nenndicke (4/4, 5/4, 8/4), nicht das gehobelte Maß.',
      'Rechne 15–20% für Fehler, Maserungsauswahl und Verschnitt bei Rauholz dazu.',
    ],
    factors: [
      { label: 'Nenn- vs Istmaß', detail: 'Holz wird nach Nennmaß verkauft: 4/4 = 1 Zoll rau (≈13/16" gehobelt), 8/4 = 2 Zoll. Der Preis nutzt die Rauzahl.' },
      { label: 'Verschnitt für Fehler', detail: 'Rauhes Hartholz hat Äste, Risse und Farbe, um die du herumschneidest – kalkuliere 15–20% über deinen fertigen Brettfuß-Bedarf.' },
      { label: 'Breitenaufschlag', detail: 'Breite, astreine Bretter kosten pro Brettfuß mehr als schmale; das Mischen von Breiten senkt die Kosten.' },
    ],
    faq: [
      { q: 'Was ist ein Brettfuß?', a: 'Ein Holzvolumen von 144 Kubikzoll – 1 Zoll dick × 12 Zoll breit × 12 Zoll lang.' },
      { q: 'Wie berechnet man Brettfuß?', a: 'Dicke (Zoll) × Breite (Zoll) × Länge (Zoll) ÷ 144, oder × Länge (Fuß) ÷ 12. Mit der Stückzahl multiplizieren für die Summe.' },
    ],
    scenarios: [
      { q: 'Wie viele Brettfuß in zehn 1×6×8 ft Brettern?', a: '1 × 6 × 8 ÷ 12 = 4 bf je × 10 = 40 Brettfuß.' },
      { q: 'Wie viele in acht 5/4 × 8 Zoll × 10 ft Brettern?', a: '1,25 × 8 × 10 ÷ 12 = 8,3 bf je × 8 = ~67 Brettfuß.' },
      { q: 'Wie viele in sechs 8/4 × 6 Zoll × 12 ft Brettern?', a: '2 × 6 × 12 ÷ 12 = 12 bf je × 6 = 72 Brettfuß.' },
    ],
  },
  'crushed-stone-calculator': {
    intro: 'Schotter wird nach Tonnen oder Kubikyard verkauft und dient als verdichtende Tragschicht unter Einfahrten, Terrassen und Pflaster. Ein Kubikyard wiegt etwa 1,35 Tonnen und deckt ~100 ft² bei 3 Zoll vor dem Verdichten ab.',
    steps: [
      'Miss die Fläche Länge × Breite in Fuß.',
      'Wähle die Tiefe: 3 Zoll für eine Pflastertragschicht, 4–6 Zoll unter einer Einfahrt.',
      'Der Rechner liefert Yards und Tonnen zu 1,35 ton/yd³ – bestätige die Dichte beim Steinbruch.',
      'Bestelle etwas mehr für den Verdichtungsverlust und baue in verdichteten Lagen ein.',
    ],
    factors: [
      { label: 'Kantig: verzahnt und verdichtet', detail: 'Schotter hat scharfe Flächen, die sich verzahnen und ~20% verdichten – anders als runder Kies – das macht ihn zum richtigen Tragschichtmaterial.' },
      { label: 'Körnung', detail: '3/4 Zoll mit Feinanteil verdichtet zu einer harten Tragschicht; sauberer 3/4-Zoll-Stein entwässert, verdichtet aber nicht so fest.' },
      { label: 'Tiefe nach Nutzung', detail: 'Gehwege brauchen ~3 Zoll, Terrassen 4 Zoll, Einfahrten 6 Zoll oder mehr über einem Geotextil bei weichem Boden.' },
    ],
    faq: [
      { q: 'Wie viel wiegt ein Yard Schotter?', a: 'Etwa 1,35 Tonnen (~2.700 lb), je nach Steinart – beim Lieferanten bestätigen.' },
      { q: 'Wie tief sollte eine Schottertragschicht sein?', a: '3 Zoll unter Pflaster, 4 Zoll unter Terrassen, 6+ Zoll unter Einfahrten, alles in Lagen verdichtet.' },
    ],
    scenarios: [
      { q: 'Wie viel Schotter für eine 10×10-ft-Pflastertragschicht bei 4 Zoll?', a: '~33 ft³ = 1,23 yd³, etwa 1,7 Tonnen.' },
      { q: 'Wie viel für eine 12×20-ft-Einfahrttragschicht bei 6 Zoll?', a: '120 ft³ = 4,4 yd³, etwa 6 Tonnen.' },
      { q: 'Wie viel für einen 100-ft²-Gehweg bei 3 Zoll?', a: '~25 ft³ = 0,93 yd³, etwa 1,25 Tonnen.' },
    ],
  },
  'topsoil-calculator': {
    intro: 'Mutterboden wird nach Kubikyard (lose) oder im Sack (oft 0,75–1 ft³) verkauft. Ein Kubikyard deckt ~100 ft² bei 3 Zoll ab und wiegt trocken rund 1,1 Tonnen – nasser Boden ist schwerer. Nutze ihn, um Beete aufzubauen oder Senken vor dem Säen aufzufüllen.',
    steps: [
      'Miss die Fläche Länge × Breite in Fuß.',
      'Wähle die Tiefe: 2–3 Zoll zum Nachsäen, 6–12 Zoll für neue oder Hochbeete.',
      'Der Rechner liefert Yards und Tonnen zu 1,1 ton/yd³.',
      'Rechne ~10% dazu – Boden setzt sich nach dem ersten Wässern deutlich.',
    ],
    factors: [
      { label: 'Gesiebt vs ungesiebt', detail: 'Gesiebter Mutterboden ist feiner, mit weniger Steinen und Wurzeln (besser zum Säen) und kostet mehr als Rohfüllung.' },
      { label: 'Setzung', detail: 'Frischer Boden setzt und verdichtet sich nach Regen und Wässern – bestelle mehr und ziehe ihn leicht überhöht ab.' },
      { label: 'Sack vs lose', detail: 'Säcke eignen sich für kleine Arbeiten; lose Lieferung ist ab etwa einem Kubikyard (≈27–36 Säcke) deutlich günstiger.' },
    ],
    faq: [
      { q: 'Wie viel deckt ein Yard Mutterboden ab?', a: 'Etwa 100 ft² bei 3 Zoll, oder ~160 ft² bei 2 Zoll.' },
      { q: 'Wie viele Säcke Mutterboden in einem Kubikyard?', a: 'Etwa 27 Säcke zu 1 ft³, oder ~36 Säcke zu 0,75 ft³.' },
    ],
    scenarios: [
      { q: 'Wie viel Mutterboden für ein 10×10-ft-Beet bei 6 Zoll?', a: '50 ft³ = 1,85 yd³, etwa 2 Tonnen.' },
      { q: 'Wie viel zum Übertoppen eines 20×20-ft-Rasens bei 2 Zoll?', a: '~67 ft³ = 2,5 yd³, etwa 2,7 Tonnen.' },
      { q: 'Wie viel für ein 4×8-ft-Hochbeet bei 12 Zoll?', a: '32 ft³ = 1,2 yd³, etwa 32 Säcke (1 ft³).' },
    ],
  },
  'sand-calculator': {
    intro: 'Sand wird nach Tonnen oder Kubikyard verkauft und wiegt etwa 1,35–1,4 Tonnen pro Yard. Ein Kubikyard deckt ~300 ft² bei 1 Zoll ab, also braucht eine 1 Zoll dicke Pflasterbettung etwa 0,0031 yd³ pro ft².',
    steps: [
      'Miss die Fläche Länge × Breite in Fuß.',
      'Wähle die Tiefe: 1 Zoll für Pflasterbettung, 2–3 Zoll für Füllung oder eine Basislage.',
      'Der Rechner liefert Yards und Tonnen zu ~1,4 ton/yd³.',
      'Plane etwas mehr für Abziehverlust und unebenen Boden ein.',
    ],
    factors: [
      { label: 'Sandart', detail: 'Nimm scharfen Betonsand für die Pflasterbettung (nicht weichen Spielsand), und Fugensand (Polymersand) zum Verfugen.' },
      { label: 'Bettungsdicke', detail: 'Ziehe die Pflasterbettung auf genau 1 Zoll ab – dickere Betten lassen Pflaster einsinken und Spurrillen bilden.' },
      { label: 'Feuchtegewicht', detail: 'Nasser Sand wiegt pro Yard deutlich mehr; bestelle nach Volumen und lass den Lieferanten umrechnen, wenn du nach Gewicht kaufst.' },
    ],
    faq: [
      { q: 'Wie viel Sand brauche ich unter Pflaster?', a: 'Eine 1 Zoll dicke Bettung sind ~0,0031 yd³ pro ft² – etwa 1 Yard je 320 ft² Terrasse.' },
      { q: 'Wie viel wiegt ein Yard Sand?', a: 'Etwa 1,35–1,4 Tonnen (2.700–2.800 lb) trocken; nass mehr.' },
    ],
    scenarios: [
      { q: 'Wie viel Sand für eine 10×10-ft-Pflasterbettung bei 1 Zoll?', a: '~8,3 ft³ = 0,31 yd³, etwa 0,43 Tonnen.' },
      { q: 'Wie viel für eine 12×20-ft-Terrassenbettung bei 1 Zoll?', a: '20 ft³ = 0,74 yd³, etwa 1 Tonne.' },
      { q: 'Wie viel für eine 200-ft²-Bettung bei 1 Zoll?', a: '~16,7 ft³ = 0,62 yd³, etwa 0,87 Tonnen.' },
    ],
  },
  'sod-calculator': {
    intro: 'Rollrasen wird nach Stück (Platte oder Rolle) und nach Palette verkauft. Eine Palette deckt typisch 400–500 ft² ab, und ein Standardstück von 16×24 Zoll deckt ~2,67 ft² ab. Bestelle 5–10% mehr zum Zuschneiden an Kurven und Beeten.',
    steps: [
      'Miss jede Rasenfläche Länge × Breite in Fuß; rechne unregelmäßige Bereiche separat.',
      'Rechne 5–10% Verschnitt für Kurven, Ränder und Schnitte dazu.',
      'Teile durch die Stück- oder Palettenabdeckung und runde auf.',
      'Verlege ihn innerhalb von 24 Stunden nach Lieferung – Rollrasen ist verderblich.',
    ],
    factors: [
      { label: 'Schnell verlegen', detail: 'Rollrasen ist lebendiges Gras; bei Hitze vergilbt er auf der Palette in ein bis zwei Tagen, plane die Lieferung also auf den Verlegetag.' },
      { label: 'Bodenvorbereitung', detail: 'Boden einebnen und leicht fräsen, dann den neuen Rasen sofort und zwei Wochen täglich wässern, damit er anwurzelt.' },
      { label: 'Palettenabdeckung variiert', detail: 'Betriebe schneiden unterschiedliche Plattengrößen – bestätige die genauen ft² je Palette vor der Bestellung.' },
    ],
    faq: [
      { q: 'Wie viele Stücke Rollrasen sind auf einer Palette?', a: 'Meist 150–180 Stücke, die 400–500 ft² abdecken, je nach Plattengröße des Betriebs.' },
      { q: 'Wie viel Rollrasen sollte ich extra bestellen?', a: '5–10% über der gemessenen Fläche für Kurven, Ränder und Zuschnittverschnitt.' },
    ],
    scenarios: [
      { q: 'Wie viel Rollrasen für einen 1.000-ft²-Rasen?', a: '1.000 ft² + 10% = 1.100 ft², etwa 2–3 Paletten.' },
      { q: 'Wie viel für einen 500-ft²-Garten?', a: '500 ft² + 10% = 550 ft², 1 Palette plus ein paar Stücke.' },
      { q: 'Wie viele Paletten Rollrasen für 1/4 Acre?', a: '~10.890 ft² + 10% ≈ 12.000 ft², etwa 24–30 Paletten.' },
    ],
  },
  'paver-calculator': {
    intro: 'Pflastersteine werden gezählt, indem man die Terrassenfläche durch die Fläche eines Steins teilt. Ein 6×9-Zoll-Stein deckt 0,375 ft² ab (etwa 2,67 pro ft²); ein 12×12 deckt 1 ft² ab. Rechne 5–10% für Schnitte an Rändern und Kurven dazu.',
    steps: [
      'Miss die Terrassenfläche Länge × Breite in Fuß.',
      'Gib die Maße deines Steins ein, damit der Rechner die Steine pro ft² findet.',
      'Rechne 5% Verschnitt im geraden Läuferverband, 10% diagonal oder bei geschwungenen Rändern.',
      'Runde auf ganze Steine auf und bestelle ein paar Reserve aus derselben Charge.',
    ],
    factors: [
      { label: 'Verschnitt nach Muster', detail: 'Fischgrät, Flechtverband und Kreissets schneiden weit mehr als ein einfacher Läuferverband – plane das Extra.' },
      { label: 'Tragschicht & Bettung', detail: 'Pflaster liegt auf 1 Zoll Bettungssand über 4–6 Zoll verdichtetem Schotter; Sparen führt zu Setzungen.' },
      { label: 'Randeinfassung', detail: 'Kunststoff- oder Betonkante fixiert das Feld, damit sich Steine nicht ausbreiten und mit der Zeit Fugen bilden.' },
    ],
    faq: [
      { q: 'Wie viele Pflastersteine brauche ich pro Quadratfuß?', a: 'Teile 144 durch die Steinfläche in Quadratzoll. Ein 6×9-Zoll-Stein (54 in²) sind ~2,67 pro ft².' },
      { q: 'Wie viel extra für Schnitte einplanen?', a: '5% für gerade Muster, 10% diagonal oder bei geschwungenen und kreisförmigen Rändern.' },
    ],
    scenarios: [
      { q: 'Wie viele 6×9-Zoll-Steine für eine 10×10-ft-Terrasse?', a: '100 ft² × 2,67 = ~267 Steine, +5% ≈ 280.' },
      { q: 'Wie viele 12×12-Zoll-Steine für eine 12×12-ft-Terrasse?', a: '144 ft² × 1 = 144 Steine, +5% ≈ 152.' },
      { q: 'Wie viele Steine für eine 200-ft²-Terrasse (6×9 Zoll)?', a: '200 ft² × 2,67 = ~534 Steine, +10% für Schnitte ≈ 588.' },
    ],
  },
  'river-rock-calculator': {
    intro: 'Flusskiesel ist glatter Zierstein, nach Tonnen oder Kubikyard verkauft, mit etwa 1,4 Tonnen pro Yard. Er deckt ~80 ft² bei 2 Zoll ab; da er nicht verdichtet oder verzahnt, lege Unkrautvlies darunter, damit er nicht einsinkt.',
    steps: [
      'Miss die Beetfläche Länge × Breite in Fuß.',
      'Wähle 2–3 Zoll Tiefe (mehr bei größerem Stein, um den Boden zu verdecken).',
      'Der Rechner liefert Yards und Tonnen zu 1,4 ton/yd³.',
      'Lege zuerst das Unkrautvlies und fasse das Beet ein, bevor du verteilst.',
    ],
    factors: [
      { label: 'Steingröße bestimmt die Tiefe', detail: 'Großer 1–2-Zoll-Stein braucht ~3 Zoll Tiefe, um den Boden ganz zu verdecken; kleiner Stein kommt mit ~2 Zoll aus.' },
      { label: 'Verdichtet nicht', detail: 'Runder Flusskiesel bleibt lose und wandert – Einfassung und Vlies halten ihn an Ort und Stelle und vom Boden fern.' },
      { label: 'Unkrautvlies', detail: 'Vlies darunter hält Unkraut ab und verhindert, dass der Stein einsinkt und sich mit der Erde mischt.' },
    ],
    faq: [
      { q: 'Wie tief sollte Flusskiesel sein?', a: '2 Zoll für kleinen Stein, bis zu 3 Zoll für 1–2-Zoll-Stein, über Unkrautvlies.' },
      { q: 'Wie viel wiegt Flusskiesel pro Yard?', a: 'Etwa 1,4 Tonnen (~2.800 lb) pro Kubikyard, je nach Steingröße.' },
    ],
    scenarios: [
      { q: 'Wie viel Flusskiesel für ein 10×10-ft-Beet bei 2 Zoll?', a: '~16,7 ft³ = 0,62 yd³, etwa 0,87 Tonnen.' },
      { q: 'Wie viel für eine 20×20-ft-Fläche bei 2 Zoll?', a: '~67 ft³ = 2,5 yd³, etwa 3,5 Tonnen.' },
      { q: 'Wie viel für eine 100-ft²-Einfassung bei 3 Zoll?', a: '~25 ft³ = 0,93 yd³, etwa 1,3 Tonnen.' },
    ],
  },
  'roofing-shingle-calculator': {
    intro: 'Dacheindeckung wird in „Squares“ gemessen – ein Square sind 100 ft² Dachfläche. Asphaltschindeln kommen ~3 Bündel je Square. Nutze die tatsächliche Dachfläche (nicht den Grundriss), die wegen der Neigung größer ist, und rechne 10–15% für Verschnitt, Grate und Kehlen dazu.',
    steps: [
      'Ermittle die echte Dachfläche: Grundriss × ein Neigungsfaktor (z. B. ×1,12 für ein 6/12-Dach).',
      'Teile die Dachfläche durch 100 für die Squares.',
      'Multipliziere die Squares mit 3 für die Asphaltschindel-Bündel.',
      'Rechne 10% Verschnitt dazu (15% bei komplexen Dächern mit vielen Kehlen) und runde auf.',
    ],
    factors: [
      { label: 'Neigungsfaktor', detail: 'Ein 6/12-Dach ist ~12% größer als sein Grundriss; ein 12/12-Dach ~41%. Nur den Grundriss zu messen kauft zu wenig Schindeln.' },
      { label: 'Grate, Kehlen & Kappen', detail: 'Startstreifen, Firstkappe und Kehlschnitte brauchen Material über die Fläche hinaus – kalkuliere die zusätzlichen 10–15%.' },
      { label: 'Separate Komponenten', detail: 'Unterspannbahn, Traufblech, Eis-und-Wasser-Schutz und Nägel werden getrennt von den Schindelbündeln gezählt.' },
    ],
    faq: [
      { q: 'Wie viele Bündel Schindeln sind in einem Square?', a: 'Drei Bündel je Square bei Standard-Architektur-Asphaltschindeln (manche schweren Serien nutzen vier).' },
      { q: 'Wie ermittle ich die Dachfläche vom Boden aus?', a: 'Miss den Gebäudegrundriss und multipliziere ihn mit dem Neigungsfaktor deiner Dachneigung (≈1,12 für 6/12, ≈1,20 für 8/12).' },
    ],
    scenarios: [
      { q: 'Wie viele Schindeln für ein 1.500-ft²-Dach (6/12)?', a: '1.500 × 1,12 = 1.680 ft² = ~17 Squares, etwa 51 Bündel + 10% Verschnitt.' },
      { q: 'Wie viele für einen 1.000-ft²-Grundriss (4/12)?', a: '1.000 × 1,05 = 1.050 ft² = ~11 Squares, etwa 33 Bündel + Verschnitt.' },
      { q: 'Wie viele Bündel für ein 24×40 ft Satteldach (6/12)?', a: 'Grundriss 960 ft² × 1,12 = ~1.075 ft² = ~11 Squares, ~33 Bündel + 10%.' },
    ],
  },
  'siding-calculator': {
    intro: 'Fassadenverkleidung wird nach Wandfläche geschätzt, oft in Squares (100 ft²) ausgedrückt. Miss jede Wand, ziehe große Öffnungen ab und rechne 10% Verschnitt dazu – 15% bei Stülpschalung mit vielen Schnitten oder komplexem Layout mit Giebeln.',
    steps: [
      'Miss jede Wand Breite × Höhe und addiere sie zur Bruttowandfläche.',
      'Ziehe Türen und große Fenster ab (kleine Öffnungen drinlassen).',
      'Rechne 10% Verschnitt dazu (15% bei Stülpschalung, Giebeln und vielen Öffnungen).',
      'Rechne nach Produktabdeckung in Squares oder Stücke um und runde auf.',
    ],
    factors: [
      { label: 'Sichtbare Deckbreite', detail: 'Die sichtbare Deckbreite (z. B. 7 Zoll bei einem 12-Zoll-Brett) bestimmt, wie viele Reihen/Stücke jede Wand braucht – das zählt mehr als die Bruttofläche.' },
      { label: 'Profile & Zubehör', detail: 'Eckprofile, J-Profil, Startleiste und Soffit kommen getrennt von der Flächenverkleidung – zähle sie pro laufendem Fuß.' },
      { label: 'Giebel und Öffnungen', detail: 'Dreieckige Giebel und viele Fenster erhöhen den Schnittverschnitt; setze den Zuschlag Richtung 15%.' },
    ],
    faq: [
      { q: 'Wie viel Verkleidung für ein 1.500-ft²-Haus?', a: 'Die Wandfläche (nicht die Wohnfläche) liegt bei zwei Stockwerken meist bei ~1.400–1.800 ft² – etwa 14–18 Squares plus 10% Verschnitt.' },
      { q: 'Wie viele Squares Verkleidung brauche ich?', a: 'Gesamtwandfläche minus große Öffnungen, geteilt durch 100, plus 10–15% Verschnitt.' },
    ],
    scenarios: [
      { q: 'Wie viel Verkleidung für ein einstöckiges 1.500-ft²-Haus?', a: '~1.200 ft² Wand + 10% = 1.320 ft² ≈ 13 Squares.' },
      { q: 'Wie viel für ein zweistöckiges 2.000-ft²-Haus?', a: '~1.800 ft² Wand + 10% = 1.980 ft² ≈ 20 Squares.' },
      { q: 'Wie viel für eine 20×12 ft Giebelwand?', a: '240 ft² + 10% ≈ 2,6 Squares.' },
    ],
  },
  'decking-board-calculator': {
    intro: 'Terrassendielen werden aus der Terrassenfläche und der Deckbreite der Diele berechnet, inklusive der Fuge zwischen den Dielen. Eine 5/4×6-Diele ist 5,5 Zoll breit; mit 1/8-Zoll-Fuge deckt sie ~5,625 Zoll ab, also braucht eine 12×12-ft-Terrasse rund 26 Dielen je 12-ft-Länge plus Verschnitt.',
    steps: [
      'Miss die Terrasse Länge × Breite in Fuß.',
      'Wähle Dielenbreite und -länge; der Rechner berücksichtigt die Fuge zwischen den Dielen.',
      'Er liefert die Dielenzahl für die von dir gewählte Verlegerichtung.',
      'Rechne 10% für Schnitte dazu, plus Dielen für einen Rahmen-Rand oder ein diagonales Layout.',
    ],
    factors: [
      { label: 'Verlegerichtung', detail: 'Diagonale Dielen sehen toll aus, verschneiden aber 15%+ in Schrägschnitten; gerade Reihen parallel zur kurzen Seite verschneiden am wenigsten.' },
      { label: 'Fugenabstand', detail: 'Lass 1/8–1/4 Zoll zwischen Dielen für Entwässerung und Ausdehnung – Komposit braucht in Hitze die breitere Fuge.' },
      { label: 'Balkenabstand', detail: 'Setze Balken bei 16 Zoll für die meisten Dielen, bei 12 Zoll für diagonale Verlegung oder dünnes Komposit, sonst durchhängen die Dielen.' },
    ],
    faq: [
      { q: 'Wie viele Terrassendielen brauche ich?', a: 'Teile die Terrassenbreite durch die Deckbreite der Diele (Breite + Fuge) für Dielen pro Reihe, multipliziere mit den Reihen und rechne 10% dazu.' },
      { q: 'Wie viel Fuge sollte ich zwischen Terrassendielen lassen?', a: '1/8 Zoll für trockenes Holz, das schwindet, bis zu 1/4 Zoll für Komposit und Druckimprägniertes, das noch feucht ist.' },
    ],
    scenarios: [
      { q: 'Wie viele 5/4×6-Dielen für eine 12×12-ft-Terrasse?', a: 'Etwa 26 Dielen je 12-ft-Länge + 10% ≈ 29 Dielen.' },
      { q: 'Wie viele für eine 10×16-ft-Terrasse?', a: 'Etwa 21 Dielen zu 16 ft (oder 42 zu 8 ft) + 10% Verschnitt.' },
      { q: 'Wie viele für eine 16×20-ft-Terrasse?', a: 'Etwa 35 Dielen je 16-ft-Reihe + 10% ≈ 39 Dielen.' },
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
  'vinyl-plank-flooring-calculator': {
    intro: '豪华乙烯基地板(LVP)按箱出售,每箱覆盖约 20–24 ft²。它防水,以浮铺方式咬合拼接在几乎任何平整基层上。200 ft² 的房间按 10% 损耗、每箱 22 ft²,约需 10 箱。',
    steps: [
      '用英尺量每个房间的长 × 宽并相加得到总平方英尺。',
      '查箱体标签的实际覆盖面积——随板材尺寸而变,别想当然按 20 ft²。',
      '加损耗:直铺 10%,斜铺或多切割角落 15%。',
      '计算器向上取整到整箱;从同一批次多留一箱备用于日后维修。',
    ],
    factors: [
      { label: '芯层类型', detail: '硬质 SPC 芯层比柔性 WPC 更耐不平基层和温差变化——在混凝土地面和阳光房中尤为重要。' },
      { label: '基层平整度', detail: '浮铺 LVP 要求基层在 10 ft 范围内平整偏差不超过约 3/16 英寸,否则板材弯曲、咬合接缝失效。' },
      { label: '板材长度与铺设方式', detail: '长板材和斜铺损耗更多;拼接端头至少错缝 6 英寸,兼顾强度和美观。' },
    ],
    faq: [
      { q: '200 平方英尺需要多少箱乙烯基地板?', a: '按每箱 22 ft²、10% 损耗约需 10 箱。务必先查你所购箱子的实际覆盖面积。' },
      { q: 'LVP 下面需要垫层吗?', a: '很多 LVP 产品自带背垫;如无,铺一层薄泡沫垫层即可。铺在混凝土上时,还应加防潮膜。' },
    ],
    scenarios: [
      { q: '10×10 ft 房间需要多少乙烯基地板?', a: '100 ft² + 10% = 110 ft²,约 5 箱(每箱 22 ft²)。' },
      { q: '12×12 ft 房间需要多少?', a: '144 ft² + 10% = 158 ft²,约 8 箱。' },
      { q: '200 ft² 空间需要多少?', a: '200 ft² + 10% = 220 ft²,约 10 箱加一箱备用。' },
    ],
  },
  'hardwood-flooring-calculator': {
    intro: '实木地板按箱出售,每箱覆盖一定面积(常约 20 ft²)。加 5–10% 损耗,并从同一生产批次购买以确保纹理和色泽一致。实木地板需钉在木质基层上,安装前须先适应环境。',
    steps: [
      '用英尺量每个房间的长 × 宽并相加得到总平方英尺。',
      '查箱体标签的实际覆盖面积——板材宽度会影响它。',
      '加 10% 损耗(斜铺或多切割的房间更多)。',
      '计算器向上取整到整箱;额外保留一箱备用于日后换板。',
    ],
    factors: [
      { label: '适应期', detail: '让实木地板在安装房间静置 3–7 天;其含水率应与基层相差 2–4% 以内,否则板材翘曲、出现缝隙。' },
      { label: '等级与批次匹配', detail: '从同一批次订货——不同批次颜色和纹理有差异,事后无法混拼。' },
      { label: '板材宽度', detail: '宽板视觉效果好,但切割损耗更多,且随湿度形变也更大;窄板损耗较少。' },
    ],
    faq: [
      { q: '实木地板该多买多少?', a: '直铺多买 5–10%,斜铺或多门口最多 15%,另加一箱备用。' },
      { q: '实木地板需要适应环境吗?', a: '需要——在安装房间静置 3–7 天,使其含水率与基层匹配;跳过这步会导致翘曲和缝隙。' },
    ],
    scenarios: [
      { q: '10×10 ft 房间需要多少实木地板?', a: '100 ft² + 10% = 110 ft²,约 6 箱(每箱 20 ft²)。' },
      { q: '12×16 ft 房间需要多少?', a: '192 ft² + 10% = 211 ft²,约 11 箱。' },
      { q: '300 ft² 区域需要多少?', a: '300 ft² + 10% = 330 ft²,约 17 箱加一箱备用。' },
    ],
  },
  'engineered-wood-flooring-calculator': {
    intro: '实木多层地板是在胶合板芯层上贴真木皮,尺寸稳定性优于实木,可浮铺、胶粘或钉固。每箱标注覆盖面积(约 20–30 ft²)。加 8–10% 损耗;仍需短暂适应环境。',
    steps: [
      '用英尺量每个房间的长 × 宽并相加得到总平方英尺。',
      '使用箱体标注的覆盖面积,不要猜测。',
      '直铺加 10% 损耗,斜铺加 15%;向上取整到整箱并多留一箱备用。',
      '选定安装方式(浮铺咬合、胶粘或钉固)——它决定垫层需求。',
    ],
    factors: [
      { label: '安装方式', detail: '咬合浮铺在垫层上最快;胶粘铺在混凝土上脚感更扎实。安装方式决定其他辅材的购买。' },
      { label: '表层厚度', detail: '较厚的木皮(2–6 mm)可打磨翻新一两次;薄木皮则不能。' },
      { label: '适应期', detail: '实木多层地板稳定性好,但安装前仍需在房间内静置 48–72 小时。' },
    ],
    faq: [
      { q: '实木多层地板可以浮铺吗?', a: '可以——咬合锁扣式实木多层地板可在垫层上浮铺,因此比实木地板更适合混凝土地面和地下室。' },
      { q: '订料时实木多层与强化地板有何区别?', a: '两者均按箱/盒出售;实木多层有真木皮(厚者可翻新),强化地板是印刷图案层。' },
    ],
    scenarios: [
      { q: '10×12 ft 房间需要多少实木多层地板?', a: '120 ft² + 10% = 132 ft²,约 6 箱(每箱 22 ft²)。' },
      { q: '14×16 ft 房间需要多少?', a: '224 ft² + 10% = 246 ft²,约 12 箱。' },
      { q: '300 ft² 区域需要多少?', a: '300 ft² + 10% = 330 ft²,约 15 箱加一箱备用。' },
    ],
  },
  'floor-tile-calculator': {
    intro: '地板砖按箱出售,每箱覆盖固定面积;大规格砖每箱覆盖更多,但切割损耗也更大。直铺加 10% 损耗,斜铺或多切口房间加 15–20%。',
    steps: [
      '用英尺量地板长 × 宽得到总面积;壁橱和凹室单独相加。',
      '查箱体的实际覆盖面积(一箱 12×24 砖约覆盖 15 ft²)。',
      '按铺贴方式加损耗:直铺 10%,斜铺或人字铺 15–20%。',
      '除法后向上取整到整箱,并从同一批次留几块备用,以便日后修补裂缝。',
    ],
    factors: [
      { label: '砖规格与基层', detail: '大规格砖(12×24 及以上)要求基层在 10 ft 范围内平整偏差不超过 1/8 英寸,否则砖角翘起并开裂。' },
      { label: '铺贴方向', detail: '斜铺和人字铺比直铺切割多得多;提前规划损耗。' },
      { label: '批次色差', detail: '染料批次各有差异;一次性订齐所有砖,铺贴时混合几箱同时用以融合色差。' },
    ],
    faq: [
      { q: '一箱有多少块砖?', a: '取决于砖的尺寸——箱体标注总覆盖面积(ft²),用这个数字而不是数砖块数量。' },
      { q: '地板砖该多买多少?', a: '直铺多 10%,斜铺或多切口多 15–20%,另加几块备用于日后修补。' },
    ],
    scenarios: [
      { q: '5×8 ft 浴室需要多少地板砖?', a: '40 ft² + 10% = 44 ft²,约 3 箱(每箱 15 ft²)。' },
      { q: '10×12 ft 厨房需要多少?', a: '120 ft² + 10% = 132 ft²,约 9 箱。' },
      { q: '200 ft² 房间需要多少?', a: '200 ft² + 10% = 220 ft²,约 15 箱加备用。' },
    ],
  },
  'carpet-calculator': {
    intro: '地毯按平方码出售,卷材宽度为 12 英尺(有时 15 英尺),因此卷宽和拼缝位置决定损耗——常比实际房间面积多出 10–20%。将平方英尺除以 9 换算为平方码。',
    steps: [
      '用英尺量每个房间长 × 宽;除以 9 换算为平方码(ft² ÷ 9)。',
      '按 12 英尺卷宽规划拼缝——房间宽度超过 12 英尺必须有拼缝。',
      '加 10% 损耗,楼梯、走廊和花纹地毯更多。',
      '向上取整到整平方码,保留一块余料用于日后修补。',
    ],
    factors: [
      { label: '卷宽 vs 房间宽度', detail: '12 英尺卷材铺 13 英尺宽的房间需要拼缝,切下的边料也会浪费——以长墙为基准对照卷宽规划。' },
      { label: '绒毛方向', detail: '地毯有绒向;所有裁片必须朝同一方向,否则拼缝处颜色偏差明显。' },
      { label: '花纹循环', detail: '花纹地毯必须在拼缝处对花,每条缝额外增加一个完整花纹循环的损耗。' },
    ],
    faq: [
      { q: '我需要多少平方码地毯?', a: '将房间平方英尺除以 9,再加 10–20% 卷宽和拼缝损耗。' },
      { q: '地毯为何损耗这么大?', a: '固定 12 英尺卷宽加上绒向要求和花纹对齐,使切下的边料往往无法复用。' },
    ],
    scenarios: [
      { q: '12×12 ft 房间需要多少地毯?', a: '144 ft² ÷ 9 = 16 yd² + 10% ≈ 18 平方码。' },
      { q: '12×15 ft 卧室需要多少?', a: '180 ft² ÷ 9 = 20 yd² + 10% ≈ 22 平方码。' },
      { q: '500 ft² 区域需要多少?', a: '500 ft² ÷ 9 = 55.5 yd² + 10% ≈ 62 平方码。' },
    ],
  },
  'exterior-paint-calculator': {
    intro: '外墙漆每加仑每道覆盖约 250–350 ft²——粗糙木板、仿泥灰或裸木消耗更多。量出每面墙,减去大开口,规划两道涂刷。粗糙雪松木和仿泥灰可多消耗 30–50%。',
    steps: [
      '量出每面墙的宽 × 高;减去车库门和大窗户。',
      '选道数:标准 2 道,裸木或大幅变色时 3 道。',
      '将面积 × 道数除以覆盖率(默认 300 ft²/加仑)并向上取整到整加仑。',
      '裸面或有污渍的表面加底漆,墙身和线条漆分开购买。',
    ],
    factors: [
      { label: '表面纹理', detail: '光滑搭接板每加仑可达 350 ft²;仿泥灰、劈面砌块和粗糙雪松木可降至 150–200,要如实评估纹理。' },
      { label: '施工窗口', detail: '在 50–85°F、24 小时内无雨的条件下涂刷;湿度过高和阳光直射会破坏固化。' },
      { label: '墙身与线条', detail: '主色和线条/封檐板分别估算——它们使用不同光泽度和用量。' },
    ],
    faq: [
      { q: '一栋房子需要多少外墙漆?', a: '典型 1,500 ft² 单层住宅约有 1,200 ft² 墙面——光滑木板刷两道约需 7 加仑,仿泥灰则更多。' },
      { q: '外墙漆需要刷几道?', a: '已有涂装面刷两道;裸木或大幅变色需三道(含底漆)。' },
    ],
    scenarios: [
      { q: '1,500 ft² 单层住宅刷 2 道外墙漆需要多少?', a: '~1,200 ft² 墙面 × 2 ÷ 350 = ~7 加仑(光滑木板)。' },
      { q: '2,500 ft² 两层住宅刷 2 道需要多少?', a: '~2,200 ft² 墙面 × 2 ÷ 350 = ~13 加仑。' },
      { q: '400 ft² 墙面刷 2 道需要多少?', a: '400 ft² × 2 ÷ 350 = ~3 加仑(粗糙表面用量更多)。' },
    ],
  },
  'drywall-calculator': {
    intro: '石膏板有 4×8(32 ft²)和 4×12(48 ft²)两种规格。用墙面和顶面总面积除以板材面积得出块数;大板减少需要批腻子的接缝数量。加约 10% 的切割损耗。',
    steps: [
      '用平方英尺量出每面墙和顶面面积并相加。',
      '选板材规格——4×12 减少长墙接缝,4×8 单人操作更轻松。',
      '将总面积除以每块覆盖面积(32 或 48 ft²)并加 10% 损耗。',
      '向上取整到整块;别忘了螺丝、接缝纸带和腻子。',
    ],
    factors: [
      { label: '板材规格的权衡', detail: '较大的 4×12 板留下更少接缝需要处理,但较重且不易操作;4×8 一个人搬运没问题。' },
      { label: '按位置选厚度', detail: '墙面用 1/2 英寸,顶面和有防火要求处用 5/8 英寸。' },
      { label: '配套辅材', detail: '每几块板约需 1 lb 螺丝和一管腻子,加上每条接缝的纸带——这些要分开购买。' },
    ],
    faq: [
      { q: '12×12 房间需要多少块石膏板?', a: '墙面加顶面约 540 ft²;按每块 32 ft² 加损耗,约需 18–20 块 4×8 板。' },
      { q: '应该用哪种规格的石膏板?', a: '狭小空间和单人施工用 4×8;长高墙面用 4×12 以减少接缝。' },
    ],
    scenarios: [
      { q: '10×10 ft 房间(8 ft 墙高)需要多少块石膏板?', a: '墙面约 320 ft² + 顶面 100 ft² = 420 ft²,约 14–15 块 4×8。' },
      { q: '12×12 ft 房间需要多少?', a: '约 540 ft² 合计,约 18–20 块 4×8 加损耗。' },
      { q: '车库(20×20 ft)需要多少?', a: '墙面约 640 ft² + 顶面 400 ft² = 1,040 ft²,约 33–36 块。' },
    ],
  },
  'backsplash-tile-calculator': {
    intro: '厨房挡溅板通常在台面与上柜之间高度为 18 英寸。量出每段长度 × 高度,加 10–15% 损耗;马赛克和复杂切割损耗更多,需额外备料。',
    steps: [
      '量出每段墙面长度 × 18 英寸(1.5 ft)高度;将各段面积相加。',
      '加损耗:普通砖 10%,马赛克或人字铺 15%。',
      '按产品覆盖面积换算成箱数或马赛克片数并向上取整。',
      '从同一批次保留几张备用片,以备日后修补。',
    ],
    factors: [
      { label: '马赛克 vs 普通砖', detail: '网格背衬马赛克片(每片约 1 ft²)在插座周围易于切割;大规格普通砖切割需更仔细。' },
      { label: '插座和窗口切割', detail: '只减去大开口——小插座切割仍会消耗整块砖,保留在面积计算中。' },
      { label: '点缀重点', detail: '花纹腰线或壁龛使用不同砖材;单独计数以免短缺。' },
    ],
    faq: [
      { q: '厨房挡溅板需要多少砖?', a: '将每段长度乘以 1.5 ft(18 英寸)高度,相加后加 10–15%。15 ft 一段约 22.5 ft² 加损耗。' },
      { q: '挡溅板标准高度是多少?', a: '从台面到上柜 18 英寸;灶台后方或开放墙面高度更高。' },
    ],
    scenarios: [
      { q: '10 ft 一段挡溅板需要多少砖?', a: '10 ft × 1.5 ft = 15 ft² + 15% ≈ 17 ft²。' },
      { q: '15 ft 一段需要多少?', a: '15 ft × 1.5 ft = 22.5 ft² + 15% ≈ 26 ft²。' },
      { q: '20 ft L 形厨房需要多少?', a: '20 ft × 1.5 ft = 30 ft² + 15% ≈ 35 ft²。' },
    ],
  },
  'concrete-footing-calculator': {
    intro: '基础按立方码体积订购。连续基础用宽 × 深 × 总长计算,独立桩基和圆形模板桩用柱体体积计算。当地冻土深度和荷载决定最小尺寸。',
    steps: [
      '用英寸量基础宽度和深度(换算为英尺),以及总延伸长度。',
      '宽 × 深 × 长得立方英尺,再 ÷27 得立方码。',
      '加 10% 用于超挖和不平的沟槽底部。',
      '超过约 1 立方码时订预拌;任何结构基础均需在浇筑前放置钢筋。',
    ],
    factors: [
      { label: '冻土深度', detail: '基础必须埋于当地冻土线以下——寒冷气候通常 36–48 英寸——否则冻胀会开裂上方结构。' },
      { label: '宽度与荷载', detail: '连续墙基础通常为墙宽的 2 倍;点荷载(柱、立柱)需要更宽的承台。' },
      { label: '钢筋', detail: '多数基础需要 2–3 根横向钢筋加与上方墙体锚接的插筋;纯混凝土受拉时会开裂。' },
    ],
    faq: [
      { q: '基础应该挖多深?', a: '在当地冻土线以下——通常 36–48 英寸——且至少深入未扰动土 12 英寸。请查阅当地规范。' },
      { q: '一个基础需要多少混凝土?', a: '宽 × 深 × 长(英尺),÷27 得立方码。一个 16 英寸 × 8 英寸 × 40 ft 基础约 1.3 yd³ 加损耗。' },
    ],
    scenarios: [
      { q: '16 英寸 × 8 英寸 × 40 ft 基础需要多少混凝土?', a: '1.33 × 0.67 × 40 = ~36 ft³ = ~1.3 yd³。' },
      { q: '24 英寸 × 12 英寸 × 50 ft 基础需要多少?', a: '2 × 1 × 50 = 100 ft³ = ~3.7 yd³。' },
      { q: '12 英寸 × 6 英寸 × 60 ft 基础需要多少?', a: '1 × 0.5 × 60 = 30 ft³ = ~1.1 yd³。' },
    ],
  },
  'board-feet-lumber-calculator': {
    intro: '一板英尺等于 144 立方英寸——即 1 英寸厚、12 英寸宽、12 英寸长的木料。硬木按公称(毛料)厚度计价,因此“4/4”板即使刨光后仍按 1 英寸计算。',
    steps: [
      '输入厚度 × 宽度(英寸),以及长度和数量。',
      '计算器返回总板英尺(厚度 × 宽度 × 长度 ÷ 144,按英尺算)。',
      '定价用公称厚度(4/4、5/4、8/4),不用刨光后的尺寸。',
      '毛料加 15–20% 用于缺陷、纹路选择和截头损耗。',
    ],
    factors: [
      { label: '公称尺寸 vs 实际尺寸', detail: '木料按公称尺寸出售:4/4 = 1 英寸毛料(≈13/16 英寸刨光后),8/4 = 2 英寸。价格按毛料数字计算。' },
      { label: '缺陷损耗', detail: '毛料硬木有节疤、开裂和你要截去的色斑——在所需板英尺基础上预算 15–20%。' },
      { label: '宽板溢价', detail: '宽幅、无缺陷板材每板英尺比窄板更贵;混搭宽度可降低成本。' },
    ],
    faq: [
      { q: '什么是板英尺?', a: '木料的体积单位,等于 144 立方英寸——1 英寸厚 × 12 英寸宽 × 12 英寸长。' },
      { q: '如何计算板英尺?', a: '厚度(英寸) × 宽度(英寸) × 长度(英寸) ÷ 144,或 × 长度(英尺) ÷ 12。乘以数量得总计。' },
    ],
    scenarios: [
      { q: '十块 1×6×8 ft 木板有多少板英尺?', a: '1 × 6 × 8 ÷ 12 = 4 bf 每块 × 10 = 40 板英尺。' },
      { q: '八块 5/4 × 8 英寸 × 10 ft 木板有多少?', a: '1.25 × 8 × 10 ÷ 12 = 8.3 bf 每块 × 8 = ~67 板英尺。' },
      { q: '六块 8/4 × 6 英寸 × 12 ft 木板有多少?', a: '2 × 6 × 12 ÷ 12 = 12 bf 每块 × 6 = 72 板英尺。' },
    ],
  },
  'crushed-stone-calculator': {
    intro: '碎石按吨或立方码出售,用作车道、露台和铺装砖下方的压实底层。1 立方码约重 1.35 吨,压实前约覆盖 100 ft²(3 英寸厚)。',
    steps: [
      '用英尺量区域长 × 宽。',
      '选厚度:铺装砖底层 3 英寸,车道底层 4–6 英寸。',
      '计算器以 1.35 ton/yd³ 给出立方码和吨数——请向采石场确认实际密度。',
      '多订一点用于压实损耗,分层压实铺设。',
    ],
    factors: [
      { label: '棱角咬合与压实', detail: '碎石有锋利截面,能相互咬合并压实约 20%——不像圆砾石——是正确的底层材料。' },
      { label: '粒径级配', detail: '3/4 英寸以下混合细粉料的碎石压实成硬底层;纯净 3/4 英寸碎石排水好但压实度不及。' },
      { label: '用途决定底层厚度', detail: '步道约 3 英寸,露台 4 英寸,车道 6 英寸以上,软土地基下铺土工布。' },
    ],
    faq: [
      { q: '1 码碎石有多重?', a: '约 1.35 吨(~2,700 lb),因石料类型而异——请向供应商确认。' },
      { q: '碎石底层该铺多厚?', a: '铺装砖下 3 英寸,露台下 4 英寸,车道下 6 英寸以上,均需分层压实。' },
    ],
    scenarios: [
      { q: '10×10 ft 铺装砖底层铺 4 英寸需要多少碎石?', a: '~33 ft³ = 1.23 yd³,约 1.7 吨。' },
      { q: '12×20 ft 车道底层铺 6 英寸需要多少?', a: '120 ft³ = 4.4 yd³,约 6 吨。' },
      { q: '100 ft² 步道铺 3 英寸需要多少?', a: '~25 ft³ = 0.93 yd³,约 1.25 吨。' },
    ],
  },
  'topsoil-calculator': {
    intro: '表土按立方码(散装)或袋(通常 0.75–1 ft³)出售。1 立方码在 3 英寸厚时约覆盖 100 ft²,干燥时约重 1.1 吨——湿土更重。可用于垫高花床或在播种前填平低洼处。',
    steps: [
      '用英尺量区域长 × 宽。',
      '选厚度:补播草坪 2–3 英寸,新建或高架花床 6–12 英寸。',
      '计算器以 1.1 ton/yd³ 给出立方码和吨数。',
      '加约 10%——土壤在第一次浇水后会明显沉降。',
    ],
    factors: [
      { label: '过筛 vs 未过筛', detail: '过筛表土更细,石块和根系更少(更适合播种),价格高于原料填土。' },
      { label: '沉降', detail: '新土在雨水和浇灌后会沉降压实——多订一些并略高于地面整平。' },
      { label: '袋装 vs 散装', detail: '袋装适合小工程;超过约 1 立方码(≈27–36 袋)后散装送货便宜得多。' },
    ],
    faq: [
      { q: '1 码表土能覆盖多少面积?', a: '3 英寸厚时约 100 ft²,2 英寸时约 160 ft²。' },
      { q: '1 立方码表土有多少袋?', a: '每袋 1 ft³ 约 27 袋,每袋 0.75 ft³ 约 36 袋。' },
    ],
    scenarios: [
      { q: '10×10 ft 花床铺 6 英寸需要多少表土?', a: '50 ft³ = 1.85 yd³,约 2 吨。' },
      { q: '20×20 ft 草坪表面铺 2 英寸需要多少?', a: '~67 ft³ = 2.5 yd³,约 2.7 吨。' },
      { q: '4×8 ft 高架花床铺 12 英寸需要多少?', a: '32 ft³ = 1.2 yd³,约 32 袋(每袋 1 ft³)。' },
    ],
  },
  'sand-calculator': {
    intro: '沙子按吨或立方码出售,每码约重 1.35–1.4 吨。1 立方码在 1 英寸厚时约覆盖 300 ft²,因此每平方英尺 1 英寸铺装砖垫层约需 0.0031 yd³。',
    steps: [
      '用英尺量区域长 × 宽。',
      '选厚度:铺装砖垫层 1 英寸,填充或底层课程 2–3 英寸。',
      '计算器以约 1.4 ton/yd³ 给出立方码和吨数。',
      '多备一点用于刮平损耗和不平地面。',
    ],
    factors: [
      { label: '沙子类型', detail: '铺装砖垫层用锋利混凝土沙(非柔软游乐沙),拼缝锁固用聚合物沙。' },
      { label: '垫层厚度', detail: '铺装砖垫层刮平至恰好 1 英寸——垫层过厚会使砖块日后下沉和产生车辙。' },
      { label: '含水量重量', detail: '湿沙每码明显更重;按体积订货,如按重量购买则让供应商换算。' },
    ],
    faq: [
      { q: '铺装砖下需要多少沙子?', a: '1 英寸垫层约每 ft² 需 0.0031 yd³——每 320 ft² 露台约 1 立方码。' },
      { q: '1 码沙子有多重?', a: '干燥时约 1.35–1.4 吨(2,700–2,800 lb);湿润时更重。' },
    ],
    scenarios: [
      { q: '10×10 ft 铺装砖垫层铺 1 英寸需要多少沙子?', a: '~8.3 ft³ = 0.31 yd³,约 0.43 吨。' },
      { q: '12×20 ft 露台垫层铺 1 英寸需要多少?', a: '20 ft³ = 0.74 yd³,约 1 吨。' },
      { q: '200 ft² 垫层铺 1 英寸需要多少?', a: '~16.7 ft³ = 0.62 yd³,约 0.87 吨。' },
    ],
  },
  'sod-calculator': {
    intro: '草皮按块(片或卷)和按托盘出售。一托盘通常覆盖 400–500 ft²,标准 16×24 英寸的一块约覆盖 2.67 ft²。修边曲线和花床时额外订 5–10%。',
    steps: [
      '用英尺量每块草坪区域的长 × 宽;不规则区域单独相加。',
      '加 5–10% 损耗用于曲线、边缘和切割。',
      '除以每块或每托盘的覆盖面积并向上取整。',
      '收货后 24 小时内铺设——草皮是活体植物,易腐坏。',
    ],
    factors: [
      { label: '尽快铺设', detail: '草皮是活草;高温下在托盘上一两天就会发黄,因此要安排当天收货当天铺设。' },
      { label: '土壤准备', detail: '整平并轻翻土壤,新铺草皮立即浇水并每天浇水两周以便生根。' },
      { label: '托盘覆盖面积各异', detail: '不同农场切割尺寸不同——订货前确认每托盘的确切平方英尺数。' },
    ],
    faq: [
      { q: '一托盘草皮有多少块?', a: '通常 150–180 块,覆盖 400–500 ft²,取决于农场的切割尺寸。' },
      { q: '草皮该多订多少?', a: '在实测面积基础上加 5–10%,用于曲线、边缘和修剪损耗。' },
    ],
    scenarios: [
      { q: '1,000 ft² 草坪需要多少草皮?', a: '1,000 ft² + 10% = 1,100 ft²,约 2–3 托盘。' },
      { q: '500 ft² 院子需要多少?', a: '500 ft² + 10% = 550 ft²,约 1 托盘加几块。' },
      { q: '1/4 英亩需要多少托盘草皮?', a: '~10,890 ft² + 10% ≈ 12,000 ft²,约 24–30 托盘。' },
    ],
  },
  'paver-calculator': {
    intro: '铺装砖数量通过露台面积除以单块砖的面积计算。6×9 英寸砖覆盖 0.375 ft²(约每 ft² 2.67 块);12×12 英寸砖覆盖 1 ft²。边缘和曲线切割加 5–10%。',
    steps: [
      '用英尺量露台区域长 × 宽。',
      '输入砖的尺寸,计算器会算出每 ft² 所需砖块数。',
      '直排跑缝加 5% 损耗,斜铺或弧形边框加 10%。',
      '向上取整到整块,并从同一批次订几块备用。',
    ],
    factors: [
      { label: '铺设花样损耗', detail: '人字、篮编和圆形套件比简单跑缝切割多得多——提前规划额外用量。' },
      { label: '底层与垫层', detail: '铺装砖铺在 4–6 英寸压实碎石上方 1 英寸垫沙之上;偷工减料会导致下沉。' },
      { label: '边缘约束', detail: '塑料或混凝土边框锁住砖场,防止砖块随时间扩张、出现缝隙。' },
    ],
    faq: [
      { q: '每平方英尺需要多少块铺装砖?', a: '用 144 除以砖面面积(平方英寸)。6×9 英寸砖(54 in²)约每 ft² 2.67 块。' },
      { q: '铺装砖切割应加多少余量?', a: '直铺花样加 5%,斜铺或弧形、圆形边框加 10%。' },
    ],
    scenarios: [
      { q: '10×10 ft 露台需要多少块 6×9 英寸铺装砖?', a: '100 ft² × 2.67 = ~267 块,+5% ≈ 280 块。' },
      { q: '12×12 ft 露台需要多少块 12×12 英寸铺装砖?', a: '144 ft² × 1 = 144 块,+5% ≈ 152 块。' },
      { q: '200 ft² 露台(6×9 英寸砖)需要多少块?', a: '200 ft² × 2.67 = ~534 块,+10% 切割余量 ≈ 588 块。' },
    ],
  },
  'river-rock-calculator': {
    intro: '河卵石是光滑的装饰性石材,按吨或立方码出售,每码约重 1.4 吨。2 英寸厚时约覆盖 80 ft²;由于它不压实也不咬合,铺设前务必垫一层景观布防止下沉。',
    steps: [
      '用英尺量花床区域长 × 宽。',
      '选 2–3 英寸厚度(较大石块需更深以遮盖土壤)。',
      '计算器以 1.4 ton/yd³ 给出立方码和吨数。',
      '先铺景观布,围好边框再铺石。',
    ],
    factors: [
      { label: '石块大小决定铺设深度', detail: '1–2 英寸大块卵石需约 3 英寸深才能完全遮盖土壤;小卵石约 2 英寸即可。' },
      { label: '不会压实', detail: '圆形河卵石保持松散且会移动——边框和景观布防止其扩散和混入下方土壤。' },
      { label: '景观布', detail: '底部铺景观布可阻止杂草生长,并防止石块下沉与下层泥土混合。' },
    ],
    faq: [
      { q: '河卵石该铺多厚?', a: '小卵石 2 英寸,1–2 英寸规格的石块最多 3 英寸,铺于景观布之上。' },
      { q: '河卵石每码有多重?', a: '每立方码约 1.4 吨(~2,800 lb),随石块大小而异。' },
    ],
    scenarios: [
      { q: '10×10 ft 花床铺 2 英寸需要多少河卵石?', a: '~16.7 ft³ = 0.62 yd³,约 0.87 吨。' },
      { q: '20×20 ft 区域铺 2 英寸需要多少?', a: '~67 ft³ = 2.5 yd³,约 3.5 吨。' },
      { q: '100 ft² 边框铺 3 英寸需要多少?', a: '~25 ft³ = 0.93 yd³,约 1.3 吨。' },
    ],
  },
  'roofing-shingle-calculator': {
    intro: '屋面以“方”为计量单位——1 方等于 100 ft² 屋面面积。沥青瓦约每方 3 捆。要使用实际屋面面积(非地面投影面积),因坡度会使其更大;加 10–15% 用于损耗、斜脊和天沟。',
    steps: [
      '计算真实屋面面积:地面投影 × 坡度系数(如 6/12 坡度 ×1.12)。',
      '屋面面积除以 100 得到方数。',
      '方数 × 3 得沥青瓦捆数。',
      '加 10% 损耗(复杂屋面多天沟则 15%),然后向上取整。',
    ],
    factors: [
      { label: '坡度系数', detail: '6/12 坡度屋面比地面投影大约 12%;12/12 坡度大约 41%。只量地面投影会导致瓦片购买不足。' },
      { label: '斜脊、天沟与收边', detail: '起始条、屋脊盖瓦和天沟切割都需要额外材料,超出铺面用量——预算额外 10–15%。' },
      { label: '配套材料单独计算', detail: '防水衬垫、滴水边、冰雪防水板和钉子与瓦捆分开计算。' },
    ],
    faq: [
      { q: '1 方瓦片需要多少捆?', a: '标准建筑型沥青瓦每方 3 捆(部分厚重系列需 4 捆)。' },
      { q: '如何在地面测量屋面面积?', a: '量出建筑地面投影,再乘以对应坡度的系数(6/12 坡度约 ×1.12,8/12 约 ×1.20)。' },
    ],
    scenarios: [
      { q: '1,500 ft² 屋面(6/12 坡度)需要多少瓦片?', a: '1,500 × 1.12 = 1,680 ft² = ~17 方,约 51 捆 + 10% 损耗。' },
      { q: '1,000 ft² 地面投影(4/12 坡度)需要多少?', a: '1,000 × 1.05 = 1,050 ft² = ~11 方,约 33 捆 + 损耗。' },
      { q: '24×40 ft 双坡屋面(6/12 坡度)需要多少捆?', a: '地面投影 960 ft² × 1.12 = ~1,075 ft² = ~11 方,~33 捆 + 10%。' },
    ],
  },
  'siding-calculator': {
    intro: '外墙挂板按墙面面积估算,常以“方”(100 ft²)表示。量出每面墙,减去大开口,加 10% 损耗——搭接板多切割或复杂山墙布局时加 15%。',
    steps: [
      '量出每面墙的宽 × 高并相加得到毛墙面面积。',
      '减去门和大窗(小开口保留)。',
      '加 10% 损耗(搭接板、山墙和多开口时 15%)。',
      '按产品覆盖面积换算为方数或块数并向上取整。',
    ],
    factors: [
      { label: '搭接露面宽度', detail: '可见的露面宽度(如 12 英寸板上 7 英寸)决定每面墙需要多少道——它对块数的影响大于原始面积。' },
      { label: '线条与配件', detail: '转角柱、J 形槽、起始条和檐底板与主体挂板分开计算——按延伸英尺计数。' },
      { label: '山墙和开口', detail: '三角形山墙和大量窗户增加切割损耗;将余量提高到约 15%。' },
    ],
    faq: [
      { q: '1,500 平方英尺房子需要多少挂板?', a: '墙面面积(非楼层面积)两层住宅通常约 1,400–1,800 ft²——约 14–18 方加 10% 损耗。' },
      { q: '我需要多少方挂板?', a: '墙面总面积减去大开口,除以 100,加 10–15% 损耗。' },
    ],
    scenarios: [
      { q: '1,500 ft² 单层住宅需要多少挂板?', a: '~1,200 ft² 墙面 + 10% = 1,320 ft² ≈ 13 方。' },
      { q: '2,000 ft² 两层住宅需要多少?', a: '~1,800 ft² 墙面 + 10% = 1,980 ft² ≈ 20 方。' },
      { q: '20×12 ft 山墙面需要多少?', a: '240 ft² + 10% ≈ 2.6 方。' },
    ],
  },
  'decking-board-calculator': {
    intro: '木塑板根据甲板面积和单块板的覆盖宽度(含板缝间距)来计算块数。5/4×6 的板实际宽 5.5 英寸;含 1/8 英寸缝隙覆盖约 5.625 英寸,因此 12×12 英尺甲板每 12 英尺长度约需 26 块板,加损耗。',
    steps: [
      '用英尺量甲板长 × 宽。',
      '选择板材宽度和长度;计算器已含板间缝隙。',
      '计算器按你设置的铺设方向返回所需块数。',
      '加 10% 切割余量,外加画框边框或斜铺所需额外板材。',
    ],
    factors: [
      { label: '铺设方向', detail: '斜铺视觉效果好,但斜角切割损耗 15% 以上;平行短边直铺损耗最少。' },
      { label: '缝隙间距', detail: '板间留 1/8–1/4 英寸用于排水和膨胀——复合材料在高温下需要更宽缝隙。' },
      { label: '搁栅间距', detail: '大多数板材搁栅按 16 英寸间距布置,斜铺或薄复合板按 12 英寸布置,否则板材会下挠。' },
    ],
    faq: [
      { q: '我需要多少块甲板板材?', a: '用甲板宽度除以单块板覆盖宽度(板宽 + 缝隙)得每行块数,乘以行数再加 10%。' },
      { q: '甲板板材之间应留多宽缝隙?', a: '干燥后会收缩的实木留 1/8 英寸,仍含水的复合板和防腐处理材最多留 1/4 英寸。' },
    ],
    scenarios: [
      { q: '12×12 ft 甲板需要多少块 5/4×6 板材?', a: '每 12 英尺长度约 26 块 + 10% ≈ 29 块。' },
      { q: '10×16 ft 甲板需要多少块?', a: '16 英尺长约 21 块(或 8 英尺长约 42 块)+ 10% 损耗。' },
      { q: '16×20 ft 甲板需要多少块?', a: '每 16 英尺铺设方向约 35 块 + 10% ≈ 39 块。' },
    ],
  },
};

export const guides: Partial<Record<Lang, Record<string, CalcGuide>>> = { en, es, de, zh };

/** Returns the differentiated guide for this calculator, if one exists for the
 * language. No cross-language fallback: a missing guide → page uses generic copy. */
export function getGuide(lang: Lang, slug: string): CalcGuide | undefined {
  return guides[lang]?.[slug];
}
