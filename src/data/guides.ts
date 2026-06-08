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
  },
};

export const guides: Partial<Record<Lang, Record<string, CalcGuide>>> = { en };

/** Returns the differentiated guide for this calculator, if one exists for the
 * language. No cross-language fallback: a missing guide → page uses generic copy. */
export function getGuide(lang: Lang, slug: string): CalcGuide | undefined {
  return guides[lang]?.[slug];
}
