/**
 * Single source of truth for every calculator page.
 * `pages/calculators/[slug].astro` reads this list and statically generates
 * one SEO page per entry (programmatic SEO — add a row, get a page).
 *
 * `metaDescription` is generated from a template by default; override per-row
 * when you want hand-tuned copy for a high-value page.
 */

export type Category = 'flooring' | 'paint' | 'structural' | 'landscaping' | 'roofing';

export interface CategoryInfo {
  slug: Category;
  title: string;
  blurb: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: 'flooring', title: 'Flooring Calculators', blurb: 'Work out how much laminate, vinyl plank, hardwood, tile or carpet you need.' },
  { slug: 'paint', title: 'Paint & Wall Calculators', blurb: 'Paint, drywall, wallpaper and grout quantities for any room.' },
  { slug: 'structural', title: 'Concrete & Structural Calculators', blurb: 'Concrete, lumber, rebar, insulation and masonry estimating.' },
  { slug: 'landscaping', title: 'Landscaping Calculators', blurb: 'Mulch, gravel, topsoil, sod and pavers by area and depth.' },
  { slug: 'roofing', title: 'Roofing & Exterior Calculators', blurb: 'Shingles, siding, gutters, decking and fencing materials.' },
];

export interface Calculator {
  slug: string;
  title: string;
  category: Category;
  volume: 'high' | 'medium' | 'low';
  priority: 'mvp' | 'extended';
  /** true when a real interactive calc module + content exists (not just the SEO shell) */
  live?: boolean;
  metaDescription?: string;
}

export const CALCULATORS: Calculator[] = [
  // --- Flooring ---
  { slug: 'laminate-flooring-calculator', title: 'Laminate Flooring Calculator', category: 'flooring', volume: 'high', priority: 'mvp', live: true },
  { slug: 'vinyl-plank-flooring-calculator', title: 'Vinyl Plank Flooring Calculator', category: 'flooring', volume: 'high', priority: 'mvp', live: true },
  { slug: 'hardwood-flooring-calculator', title: 'Hardwood Flooring Calculator', category: 'flooring', volume: 'medium', priority: 'extended' },
  { slug: 'engineered-wood-flooring-calculator', title: 'Engineered Wood Flooring Calculator', category: 'flooring', volume: 'medium', priority: 'extended' },
  { slug: 'floor-tile-calculator', title: 'Floor Tile Calculator', category: 'flooring', volume: 'high', priority: 'extended' },
  { slug: 'carpet-calculator', title: 'Carpet Calculator', category: 'flooring', volume: 'medium', priority: 'extended' },
  { slug: 'underlayment-calculator', title: 'Underlayment Calculator', category: 'flooring', volume: 'medium', priority: 'extended' },
  { slug: 'floor-leveling-compound-calculator', title: 'Floor Leveling Compound Calculator', category: 'flooring', volume: 'low', priority: 'extended' },
  { slug: 'floor-screed-calculator', title: 'Floor Screed Calculator', category: 'flooring', volume: 'medium', priority: 'extended' },
  { slug: 'stair-tread-flooring-calculator', title: 'Stair Tread Flooring Calculator', category: 'flooring', volume: 'low', priority: 'extended' },

  // --- Paint & Walls ---
  { slug: 'interior-paint-calculator', title: 'Interior Paint Calculator', category: 'paint', volume: 'high', priority: 'mvp', live: true },
  { slug: 'exterior-paint-calculator', title: 'Exterior Paint Calculator', category: 'paint', volume: 'medium', priority: 'extended' },
  { slug: 'wallpaper-calculator', title: 'Wallpaper Calculator', category: 'paint', volume: 'medium', priority: 'extended' },
  { slug: 'drywall-calculator', title: 'Drywall Calculator', category: 'paint', volume: 'high', priority: 'extended' },
  { slug: 'joint-compound-calculator', title: 'Joint Compound Calculator', category: 'paint', volume: 'medium', priority: 'extended' },
  { slug: 'grout-calculator', title: 'Grout Calculator', category: 'paint', volume: 'medium', priority: 'mvp' },
  { slug: 'backsplash-tile-calculator', title: 'Backsplash Tile Calculator', category: 'paint', volume: 'medium', priority: 'extended' },
  { slug: 'primer-calculator', title: 'Primer Calculator', category: 'paint', volume: 'low', priority: 'extended' },
  { slug: 'thinset-tile-adhesive-calculator', title: 'Thinset Tile Adhesive Calculator', category: 'paint', volume: 'medium', priority: 'extended' },
  { slug: 'ceiling-paint-calculator', title: 'Ceiling Paint Calculator', category: 'paint', volume: 'low', priority: 'extended' },

  // --- Concrete & Structural ---
  { slug: 'concrete-slab-calculator', title: 'Concrete Slab Calculator', category: 'structural', volume: 'high', priority: 'mvp', live: true },
  { slug: 'concrete-footing-calculator', title: 'Concrete Footing Calculator', category: 'structural', volume: 'medium', priority: 'extended' },
  { slug: 'concrete-column-calculator', title: 'Concrete Column Calculator', category: 'structural', volume: 'medium', priority: 'extended' },
  { slug: 'concrete-stairs-calculator', title: 'Concrete Stairs Calculator', category: 'structural', volume: 'low', priority: 'extended' },
  { slug: 'board-feet-lumber-calculator', title: 'Board Feet Lumber Calculator', category: 'structural', volume: 'high', priority: 'mvp', live: true },
  { slug: 'wall-framing-stud-calculator', title: 'Wall Framing Stud Calculator', category: 'structural', volume: 'medium', priority: 'extended' },
  { slug: 'rebar-calculator', title: 'Rebar Calculator', category: 'structural', volume: 'medium', priority: 'extended' },
  { slug: 'insulation-calculator', title: 'Insulation Calculator', category: 'structural', volume: 'medium', priority: 'extended' },
  { slug: 'brick-calculator', title: 'Brick Calculator', category: 'structural', volume: 'medium', priority: 'extended' },
  { slug: 'concrete-block-mortar-calculator', title: 'Concrete Block & Mortar Calculator', category: 'structural', volume: 'medium', priority: 'extended' },

  // --- Landscaping ---
  { slug: 'mulch-calculator', title: 'Mulch Calculator', category: 'landscaping', volume: 'high', priority: 'mvp', live: true },
  { slug: 'gravel-calculator', title: 'Gravel Calculator', category: 'landscaping', volume: 'high', priority: 'mvp', live: true },
  { slug: 'crushed-stone-calculator', title: 'Crushed Stone Calculator', category: 'landscaping', volume: 'medium', priority: 'extended' },
  { slug: 'topsoil-calculator', title: 'Topsoil Calculator', category: 'landscaping', volume: 'high', priority: 'extended' },
  { slug: 'sand-calculator', title: 'Sand Calculator', category: 'landscaping', volume: 'medium', priority: 'extended' },
  { slug: 'sod-calculator', title: 'Sod Calculator', category: 'landscaping', volume: 'medium', priority: 'mvp', live: true },
  { slug: 'paver-calculator', title: 'Paver Calculator', category: 'landscaping', volume: 'high', priority: 'mvp', live: true },
  { slug: 'retaining-wall-block-calculator', title: 'Retaining Wall Block Calculator', category: 'landscaping', volume: 'medium', priority: 'extended' },
  { slug: 'river-rock-calculator', title: 'River Rock Calculator', category: 'landscaping', volume: 'medium', priority: 'extended' },
  { slug: 'raised-garden-bed-soil-calculator', title: 'Raised Garden Bed Soil Calculator', category: 'landscaping', volume: 'medium', priority: 'extended' },

  // --- Roofing & Exterior ---
  { slug: 'roofing-shingle-calculator', title: 'Roofing Shingle Calculator', category: 'roofing', volume: 'high', priority: 'extended' },
  { slug: 'roof-underlayment-calculator', title: 'Roof Underlayment Calculator', category: 'roofing', volume: 'low', priority: 'extended' },
  { slug: 'siding-calculator', title: 'Siding Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
  { slug: 'gutter-calculator', title: 'Gutter Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
  { slug: 'decking-board-calculator', title: 'Decking Board Calculator', category: 'roofing', volume: 'high', priority: 'mvp', live: true },
  { slug: 'deck-joist-calculator', title: 'Deck Joist Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
  { slug: 'fence-panel-calculator', title: 'Fence Panel Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
  { slug: 'fence-post-calculator', title: 'Fence Post Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
  { slug: 'stair-stringer-calculator', title: 'Stair Stringer Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
  { slug: 'baseboard-trim-calculator', title: 'Baseboard & Trim Calculator', category: 'roofing', volume: 'medium', priority: 'extended' },
];

export function getCalculator(slug: string): Calculator | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

export function byCategory(cat: Category): Calculator[] {
  return CALCULATORS.filter((c) => c.category === cat);
}

export function categoryInfo(cat: Category): CategoryInfo {
  return CATEGORIES.find((c) => c.slug === cat)!;
}

export function defaultMetaDescription(c: Calculator): string {
  return `Free ${c.title.toLowerCase()}: estimate how much material you need and the cost in seconds. Enter your area and depth — no sign-up.`;
}
