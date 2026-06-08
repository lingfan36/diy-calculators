/**
 * i18n layer. Add a language = add a key to `languages` + a block in `ui`.
 * Missing keys fall back to the default language, so a half-translated
 * language still renders (English fallback) instead of breaking the build.
 */

export const languages = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const locales = Object.keys(languages) as Lang[];

type UIKey =
  | 'site.title'
  | 'site.footer'
  | 'nav.flooring'
  | 'nav.paint'
  | 'nav.structural'
  | 'nav.landscaping'
  | 'nav.roofing'
  | 'common.home'
  | 'common.popular'
  | 'index.eyebrow'
  | 'index.lead'
  | 'index.popular'
  | 'index.browse'
  | 'index.start'
  | 'index.browseCta'
  | 'index.calculatorsCount'
  | 'index.liveToolsCount'
  | 'index.noSignup'
  | 'index.example'
  | 'index.flooringEstimate'
  | 'index.liveMath'
  | 'index.roomSize'
  | 'index.coveragePerBox'
  | 'index.wasteAllowance'
  | 'index.orderAbout'
  | 'index.includingWaste'
  | 'index.fastEstimates'
  | 'index.library'
  | 'index.cardDesc'
  | 'index.categoryStats'
  | 'index.liveShort'
  | 'calc.lead'
  | 'calc.howto'
  | 'calc.order'
  | 'calc.related'
  | 'calc.comingSoon'
  | 'calc.disclaimer'
  | 'cat.lead'
  | 'cat.eyebrow'
  | 'cat.summary'
  | 'cat.liveDesc'
  | 'cat.plannedDesc'
  | 'calc.metaBody'
  | 'calc.guideIntro'
  | 'calc.orderGuide'
  | 'faq.title'
  | 'faq.q1'
  | 'faq.a1'
  | 'faq.q2'
  | 'faq.a2';

type Dict = Record<UIKey, string>;

export const ui: Record<Lang, Dict> = {
  en: {
    'site.title': 'DIY Material Calculators',
    'site.footer': 'Planning estimates only. Always confirm quantities with your supplier.',
    'nav.flooring': 'Flooring',
    'nav.paint': 'Paint & Walls',
    'nav.structural': 'Concrete & Structural',
    'nav.landscaping': 'Landscaping',
    'nav.roofing': 'Roofing & Exterior',
    'common.home': 'Home',
    'common.popular': 'Popular',
    'index.eyebrow': 'Project quantity tools',
    'index.lead':
      'Free, fast calculators for flooring, paint, concrete, landscaping and roofing jobs. Turn measurements into order quantities and rough costs before you buy.',
    'index.popular': 'Popular calculators',
    'index.browse': 'Browse by category',
    'index.start': 'Start calculating',
    'index.browseCta': 'Browse calculators',
    'index.calculatorsCount': 'calculators',
    'index.liveToolsCount': 'interactive tools',
    'index.noSignup': 'No sign-up',
    'index.example': 'Example',
    'index.flooringEstimate': 'Flooring estimate',
    'index.liveMath': 'Live math',
    'index.roomSize': 'Room size',
    'index.coveragePerBox': 'Coverage per box',
    'index.wasteAllowance': 'Waste allowance',
    'index.orderAbout': 'Order about',
    'index.includingWaste': 'including waste',
    'index.fastEstimates': 'Fast estimates for common jobs',
    'index.library': 'Calculator library',
    'index.cardDesc': 'Open the calculator, enter your measurements, and get a quantity plus optional cost estimate.',
    'index.categoryStats': 'calculators',
    'index.liveShort': 'live',
    'calc.lead': 'Enter your measurements, choose a coverage or waste allowance, and get a practical order estimate in seconds.',
    'calc.howto': 'How to calculate',
    'calc.order': 'How much should you order?',
    'calc.related': 'Related calculators',
    'calc.comingSoon':
      'Interactive calculator coming soon. The guide below shows the planning method in the meantime.',
    'calc.disclaimer':
      'These estimates are for planning only and may vary by product, layout, waste, and site conditions. Confirm quantities before ordering.',
    'cat.lead': 'Pick a calculator below.',
    'cat.eyebrow': 'Category',
    'cat.summary': 'tools are listed here, including interactive calculators.',
    'cat.liveDesc': 'Ready to use with measurements and optional pricing.',
    'cat.plannedDesc': 'Guide page available now; interactive tool planned.',
    'calc.metaBody': 'Estimate material quantity and rough cost in seconds. Enter measurements, coverage, and waste settings.',
    'calc.guideIntro':
      'Start with the measured area, then apply the product coverage, depth, thickness, or waste allowance that matches the material. The calculator above keeps the core math visible so you can compare the result against the package size or supplier quote.',
    'calc.orderGuide':
      'For straight layouts, a small waste allowance is usually enough. Increase the allowance for diagonal patterns, irregular rooms, fragile materials, or jobs where matching a future batch would be difficult.',
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'How does this calculator work?',
    'faq.a1':
      'Enter your area dimensions and depth or coverage, and the tool converts them into the quantity of material you need plus an optional cost estimate.',
    'faq.q2': 'How much extra should I add for waste?',
    'faq.a2':
      'A 10% waste allowance is standard for straight layouts. Add about 15% for diagonal patterns and up to 20% for complex cuts.',
  },
  es: {
    'site.title': 'Calculadoras de Materiales DIY',
    'site.footer': 'Estimaciones solo para planificar. Confirma siempre las cantidades con tu proveedor.',
    'nav.flooring': 'Suelos',
    'nav.paint': 'Pintura y Paredes',
    'nav.structural': 'Hormigón y Estructura',
    'nav.landscaping': 'Jardinería',
    'nav.roofing': 'Tejados y Exterior',
    'common.home': 'Inicio',
    'common.popular': 'Popular',
    'index.eyebrow': 'Herramientas de cantidad',
    'index.lead':
      'Calculadoras gratuitas y rápidas para suelos, pintura, hormigón, jardinería y tejados. Convierte medidas en cantidades de compra y costes aproximados.',
    'index.popular': 'Calculadoras populares',
    'index.browse': 'Explorar por categoría',
    'index.start': 'Empezar a calcular',
    'index.browseCta': 'Ver calculadoras',
    'index.calculatorsCount': 'calculadoras',
    'index.liveToolsCount': 'herramientas interactivas',
    'index.noSignup': 'Sin registro',
    'index.example': 'Ejemplo',
    'index.flooringEstimate': 'Estimación de suelo',
    'index.liveMath': 'Cálculo activo',
    'index.roomSize': 'Tamaño de la habitación',
    'index.coveragePerBox': 'Cobertura por caja',
    'index.wasteAllowance': 'Margen de desperdicio',
    'index.orderAbout': 'Pide aprox.',
    'index.includingWaste': 'incluido desperdicio',
    'index.fastEstimates': 'Estimaciones rápidas para trabajos comunes',
    'index.library': 'Biblioteca de calculadoras',
    'index.cardDesc': 'Abre la calculadora, introduce tus medidas y obtén una cantidad con coste opcional.',
    'index.categoryStats': 'calculadoras',
    'index.liveShort': 'activas',
    'calc.lead':
      'Introduce tus medidas, elige cobertura o desperdicio, y obtén una estimación práctica en segundos.',
    'calc.howto': 'Cómo calcular',
    'calc.order': '¿Cuánto deberías pedir?',
    'calc.related': 'Calculadoras relacionadas',
    'calc.comingSoon':
      'Calculadora interactiva próximamente. Mientras tanto, la guía siguiente explica el método de planificación.',
    'calc.disclaimer':
      'Estas estimaciones son solo para planificar y pueden variar según producto, diseño, desperdicio y condiciones. Confirma las cantidades antes de comprar.',
    'cat.lead': 'Elige una calculadora a continuación.',
    'cat.eyebrow': 'Categoría',
    'cat.summary': 'herramientas en esta sección, incluidas calculadoras interactivas.',
    'cat.liveDesc': 'Lista para usar con medidas y precio opcional.',
    'cat.plannedDesc': 'Guía disponible ahora; herramienta interactiva prevista.',
    'calc.metaBody': 'Calcula la cantidad de material y un coste aproximado en segundos. Introduce medidas, cobertura y margen de desperdicio.',
    'calc.guideIntro':
      'Empieza con el área medida y aplica la cobertura, profundidad, grosor o margen de desperdicio que corresponda al material. La calculadora mantiene visible el cálculo principal para que puedas comparar el resultado con el tamaño del paquete o el presupuesto del proveedor.',
    'calc.orderGuide':
      'Para diseños rectos, un margen de desperdicio pequeño suele ser suficiente. Auméntalo en patrones diagonales, espacios irregulares, materiales frágiles o trabajos donde sea difícil igualar un lote futuro.',
    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Cómo funciona esta calculadora?',
    'faq.a1':
      'Introduce las dimensiones del área y la profundidad o cobertura, y la herramienta calcula la cantidad de material que necesitas más una estimación de coste opcional.',
    'faq.q2': '¿Cuánto extra debo añadir por desperdicio?',
    'faq.a2':
      'Un margen del 10% es estándar para diseños rectos. Añade un 15% para patrones diagonales y hasta un 20% para cortes complejos.',
  },
  de: {
    'site.title': 'DIY Materialrechner',
    'site.footer': 'Schätzungen dienen nur der Planung. Mengen immer mit dem Händler bestätigen.',
    'nav.flooring': 'Bodenbeläge',
    'nav.paint': 'Farbe & Wände',
    'nav.structural': 'Beton & Struktur',
    'nav.landscaping': 'Garten',
    'nav.roofing': 'Dach & Außen',
    'common.home': 'Start',
    'common.popular': 'Beliebt',
    'index.eyebrow': 'Mengenrechner',
    'index.lead':
      'Kostenlose, schnelle Rechner für Bodenbeläge, Farbe, Beton, Garten und Dach. Verwandle Maße in Bestellmengen und grobe Kosten, bevor du kaufst.',
    'index.popular': 'Beliebte Rechner',
    'index.browse': 'Nach Kategorie durchsuchen',
    'index.start': 'Jetzt berechnen',
    'index.browseCta': 'Rechner ansehen',
    'index.calculatorsCount': 'Rechner',
    'index.liveToolsCount': 'interaktive Tools',
    'index.noSignup': 'Ohne Anmeldung',
    'index.example': 'Beispiel',
    'index.flooringEstimate': 'Bodenbelag-Schätzung',
    'index.liveMath': 'Live-Berechnung',
    'index.roomSize': 'Raumgröße',
    'index.coveragePerBox': 'Deckung pro Karton',
    'index.wasteAllowance': 'Verschnitt',
    'index.orderAbout': 'Bestelle ca.',
    'index.includingWaste': 'inklusive Verschnitt',
    'index.fastEstimates': 'Schnelle Schätzungen für typische Projekte',
    'index.library': 'Rechnerbibliothek',
    'index.cardDesc': 'Rechner öffnen, Maße eingeben und Menge plus optionale Kostenschätzung erhalten.',
    'index.categoryStats': 'Rechner',
    'index.liveShort': 'live',
    'calc.lead':
      'Gib Maße ein, wähle Deckung oder Verschnitt, und erhalte in Sekunden eine praktische Bestellschätzung.',
    'calc.howto': 'So wird berechnet',
    'calc.order': 'Wie viel solltest du bestellen?',
    'calc.related': 'Verwandte Rechner',
    'calc.comingSoon':
      'Interaktiver Rechner kommt bald. Die Anleitung unten zeigt vorerst die Planungsmethode.',
    'calc.disclaimer':
      'Diese Schätzungen dienen nur der Planung und können je nach Produkt, Verlegung, Verschnitt und Bedingungen variieren. Mengen vor dem Kauf bestätigen.',
    'cat.lead': 'Wähle unten einen Rechner.',
    'cat.eyebrow': 'Kategorie',
    'cat.summary': 'Tools sind hier gelistet, darunter interaktive Rechner.',
    'cat.liveDesc': 'Bereit für Maße und optionale Preiseingabe.',
    'cat.plannedDesc': 'Ratgeberseite verfügbar; interaktives Tool geplant.',
    'calc.metaBody': 'Schätze Materialmenge und grobe Kosten in Sekunden. Gib Maße, Deckung und Verschnitt ein.',
    'calc.guideIntro':
      'Beginne mit der gemessenen Fläche und wende dann die passende Deckung, Tiefe, Stärke oder den Verschnitt des Materials an. Der Rechner macht die Grundrechnung sichtbar, damit du das Ergebnis mit Packungsgröße oder Händlerangebot vergleichen kannst.',
    'calc.orderGuide':
      'Bei geraden Verlegungen reicht meist ein kleiner Verschnittzuschlag. Erhöhe ihn bei diagonalen Mustern, unregelmäßigen Räumen, empfindlichen Materialien oder Projekten, bei denen ein späterer Nachkauf schwer exakt passt.',
    'faq.title': 'Häufige Fragen',
    'faq.q1': 'Wie funktioniert dieser Rechner?',
    'faq.a1':
      'Gib die Maße der Fläche und die Tiefe oder Deckung ein, und das Tool berechnet die benötigte Materialmenge plus eine optionale Kostenschätzung.',
    'faq.q2': 'Wie viel Verschnitt sollte ich einplanen?',
    'faq.a2':
      'Ein Zuschlag von 10% ist bei geraden Verlegungen üblich. Plane etwa 15% für diagonale Muster und bis zu 20% für komplexe Zuschnitte ein.',
  },
};

export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key];
}

export function navLabel(lang: Lang, category: string): string {
  return t(lang, `nav.${category}` as UIKey);
}

const calculatorLabelSets = {
  en: {
    roomLength: 'Room length (ft)',
    roomWidth: 'Room width (ft)',
    areaLength: 'Area length (ft)',
    areaWidth: 'Area width (ft)',
    length: 'Length (ft)',
    width: 'Width (ft)',
    height: 'Ceiling height (ft)',
    thickness: 'Thickness (in)',
    depth: 'Depth (in)',
    coveragePerBox: 'Coverage per box (ft²)',
    coveragePerUnit: 'Coverage per unit (ft²)',
    sheetCoverage: 'Sheet coverage (ft²)',
    bundleCoverage: 'Bundle coverage (ft²)',
    squareCoverage: 'Coverage per square (ft²)',
    rollCoverage: 'Roll coverage (ft²)',
    bagSize: 'Bag size (ft³)',
    bagSizeLb: 'Bag size (lb)',
    density: 'Density (ton/yd³)',
    waste: 'Waste',
    coats: 'Coats',
    openings: 'Doors/windows (ft², optional)',
    quantity: 'Quantity (pieces)',
    boardWidth: 'Board width (in)',
    boardLength: 'Board length (ft)',
    deckLength: 'Deck length (ft)',
    deckWidth: 'Deck width (ft)',
    patioLength: 'Patio length (ft)',
    patioWidth: 'Patio width (ft)',
    paverLength: 'Paver length (in)',
    paverWidth: 'Paver width (in)',
    tileLength: 'Tile length (in)',
    tileWidth: 'Tile width (in)',
    priceBox: 'Price / box ($, optional)',
    priceUnit: 'Price / unit ($, optional)',
    priceGallon: 'Price / gallon ($, optional)',
    priceYard: 'Price / yd³ ($, optional)',
    priceTon: 'Price / ton ($, optional)',
    priceSqft: 'Price / ft² ($, optional)',
    priceBoardFoot: 'Price / board foot ($, optional)',
    priceBoard: 'Price / board ($, optional)',
    pricePaver: 'Price / paver ($, optional)',
    priceTile: 'Price / tile ($, optional)',
    calculate: 'Calculate',
    youNeed: 'You need',
    total: 'Total',
    boxes: 'boxes',
    gallons: 'gallons',
    cubicYards: 'cubic yards',
    cubicYardsOfMulch: 'cubic yards of mulch',
    boardFeet: 'board feet',
    rolls: 'rolls',
    pavers: 'pavers',
    tiles: 'tiles',
    boards: 'boards',
    sheets: 'sheets',
    bundles: 'bundles',
    squares: 'squares',
    pieces: 'pieces',
    units: 'units',
    tons: 'tons',
    pallets: 'pallets',
    area: 'area',
    walls: 'walls',
    plusWaste: '+ waste =',
    withWaste: 'with waste',
    about: 'about',
    buy: 'buy',
    each: 'each',
    bags: 'bags',
    estCost: 'est. cost',
    example: 'e.g.',
  },
  es: {
    roomLength: 'Largo de habitación (ft)',
    roomWidth: 'Ancho de habitación (ft)',
    areaLength: 'Largo del área (ft)',
    areaWidth: 'Ancho del área (ft)',
    length: 'Largo (ft)',
    width: 'Ancho (ft)',
    height: 'Altura del techo (ft)',
    thickness: 'Grosor (in)',
    depth: 'Profundidad (in)',
    coveragePerBox: 'Cobertura por caja (ft²)',
    coveragePerUnit: 'Cobertura por unidad (ft²)',
    sheetCoverage: 'Cobertura por panel (ft²)',
    bundleCoverage: 'Cobertura por paquete (ft²)',
    squareCoverage: 'Cobertura por square (ft²)',
    rollCoverage: 'Cobertura por rollo (ft²)',
    bagSize: 'Tamaño de bolsa (ft³)',
    bagSizeLb: 'Tamaño de bolsa (lb)',
    density: 'Densidad (ton/yd³)',
    waste: 'Desperdicio',
    coats: 'Capas',
    openings: 'Puertas/ventanas (ft², opcional)',
    quantity: 'Cantidad (piezas)',
    boardWidth: 'Ancho de tabla (in)',
    boardLength: 'Largo de tabla (ft)',
    deckLength: 'Largo de terraza (ft)',
    deckWidth: 'Ancho de terraza (ft)',
    patioLength: 'Largo del patio (ft)',
    patioWidth: 'Ancho del patio (ft)',
    paverLength: 'Largo del adoquín (in)',
    paverWidth: 'Ancho del adoquín (in)',
    tileLength: 'Largo de baldosa (in)',
    tileWidth: 'Ancho de baldosa (in)',
    priceBox: 'Precio / caja ($, opcional)',
    priceUnit: 'Precio / unidad ($, opcional)',
    priceGallon: 'Precio / galón ($, opcional)',
    priceYard: 'Precio / yd³ ($, opcional)',
    priceTon: 'Precio / ton ($, opcional)',
    priceSqft: 'Precio / ft² ($, opcional)',
    priceBoardFoot: 'Precio / pie tablar ($, opcional)',
    priceBoard: 'Precio / tabla ($, opcional)',
    pricePaver: 'Precio / adoquín ($, opcional)',
    priceTile: 'Precio / baldosa ($, opcional)',
    calculate: 'Calcular',
    youNeed: 'Necesitas',
    total: 'Total',
    boxes: 'cajas',
    gallons: 'galones',
    cubicYards: 'yardas cúbicas',
    cubicYardsOfMulch: 'yardas cúbicas de mantillo',
    boardFeet: 'pies tablares',
    rolls: 'rollos',
    pavers: 'adoquines',
    tiles: 'baldosas',
    boards: 'tablas',
    sheets: 'paneles',
    bundles: 'paquetes',
    squares: 'squares',
    pieces: 'piezas',
    units: 'unidades',
    tons: 'toneladas',
    pallets: 'palés',
    area: 'área',
    walls: 'paredes',
    plusWaste: '+ desperdicio =',
    withWaste: 'con desperdicio',
    about: 'aprox.',
    buy: 'comprar',
    each: 'cada uno',
    bags: 'bolsas',
    estCost: 'coste estimado',
    example: 'p. ej.',
  },
  de: {
    roomLength: 'Raumlänge (ft)',
    roomWidth: 'Raumbreite (ft)',
    areaLength: 'Flächenlänge (ft)',
    areaWidth: 'Flächenbreite (ft)',
    length: 'Länge (ft)',
    width: 'Breite (ft)',
    height: 'Deckenhöhe (ft)',
    thickness: 'Stärke (in)',
    depth: 'Tiefe (in)',
    coveragePerBox: 'Deckung pro Karton (ft²)',
    coveragePerUnit: 'Deckung pro Einheit (ft²)',
    sheetCoverage: 'Deckung pro Platte (ft²)',
    bundleCoverage: 'Deckung pro Bund (ft²)',
    squareCoverage: 'Deckung pro Square (ft²)',
    rollCoverage: 'Deckung pro Rolle (ft²)',
    bagSize: 'Sackgröße (ft³)',
    bagSizeLb: 'Sackgröße (lb)',
    density: 'Dichte (ton/yd³)',
    waste: 'Verschnitt',
    coats: 'Anstriche',
    openings: 'Türen/Fenster (ft², optional)',
    quantity: 'Menge (Stück)',
    boardWidth: 'Brettbreite (in)',
    boardLength: 'Brettlänge (ft)',
    deckLength: 'Terrassenlänge (ft)',
    deckWidth: 'Terrassenbreite (ft)',
    patioLength: 'Patio-Länge (ft)',
    patioWidth: 'Patio-Breite (ft)',
    paverLength: 'Pflasterlänge (in)',
    paverWidth: 'Pflasterbreite (in)',
    tileLength: 'Fliesenlänge (in)',
    tileWidth: 'Fliesenbreite (in)',
    priceBox: 'Preis / Karton ($, optional)',
    priceUnit: 'Preis / Einheit ($, optional)',
    priceGallon: 'Preis / Gallone ($, optional)',
    priceYard: 'Preis / yd³ ($, optional)',
    priceTon: 'Preis / Tonne ($, optional)',
    priceSqft: 'Preis / ft² ($, optional)',
    priceBoardFoot: 'Preis / Board Foot ($, optional)',
    priceBoard: 'Preis / Brett ($, optional)',
    pricePaver: 'Preis / Pflasterstein ($, optional)',
    priceTile: 'Preis / Fliese ($, optional)',
    calculate: 'Berechnen',
    youNeed: 'Du brauchst',
    total: 'Gesamt',
    boxes: 'Kartons',
    gallons: 'Gallonen',
    cubicYards: 'Kubikyard',
    cubicYardsOfMulch: 'Kubikyard Mulch',
    boardFeet: 'Board Feet',
    rolls: 'Rollen',
    pavers: 'Pflastersteine',
    tiles: 'Fliesen',
    boards: 'Bretter',
    sheets: 'Platten',
    bundles: 'Bunde',
    squares: 'Squares',
    pieces: 'Stück',
    units: 'Einheiten',
    tons: 'Tonnen',
    pallets: 'Paletten',
    area: 'Fläche',
    walls: 'Wände',
    plusWaste: '+ Verschnitt =',
    withWaste: 'mit Verschnitt',
    about: 'ca.',
    buy: 'kaufen',
    each: 'je',
    bags: 'Säcke',
    estCost: 'geschätzte Kosten',
    example: 'z. B.',
  },
} as const;

export type CalculatorLabels = Record<keyof typeof calculatorLabelSets.en, string>;

export function calculatorLabels(lang: Lang): CalculatorLabels {
  return { ...calculatorLabelSets.en, ...(calculatorLabelSets[lang] ?? {}) };
}

const categoryBlurbs: Record<Lang, Record<string, string>> = {
  en: {
    flooring: 'Work out how much laminate, vinyl plank, hardwood, tile or carpet you need.',
    paint: 'Paint, drywall, wallpaper and grout quantities for any room.',
    structural: 'Concrete, lumber, rebar, insulation and masonry estimating.',
    landscaping: 'Mulch, gravel, topsoil, sod and pavers by area and depth.',
    roofing: 'Shingles, siding, gutters, decking and fencing materials.',
  },
  es: {
    flooring: 'Calcula cuánto laminado, vinilo, madera, baldosa o alfombra necesitas.',
    paint: 'Cantidades de pintura, paneles, papel pintado y lechada para cualquier habitación.',
    structural: 'Estimaciones de hormigón, madera, varilla, aislamiento y mampostería.',
    landscaping: 'Mantillo, grava, tierra vegetal, césped y adoquines por área y profundidad.',
    roofing: 'Materiales para tejas, revestimiento, canalones, tarimas y cercas.',
  },
  de: {
    flooring: 'Berechne Laminat, Vinyl, Holz, Fliesen oder Teppich für dein Projekt.',
    paint: 'Mengen für Farbe, Trockenbau, Tapete und Fugenmasse in jedem Raum.',
    structural: 'Schätzungen für Beton, Holz, Bewehrung, Dämmung und Mauerwerk.',
    landscaping: 'Mulch, Kies, Mutterboden, Rollrasen und Pflaster nach Fläche und Tiefe.',
    roofing: 'Materialien für Schindeln, Fassade, Rinnen, Terrassendielen und Zäune.',
  },
};

export function categoryBlurb(lang: Lang, category: string, fallback = ''): string {
  return categoryBlurbs[lang]?.[category] ?? categoryBlurbs[defaultLang]?.[category] ?? fallback;
}

const calculatorTitles: Record<Lang, Record<string, string>> = {
  en: {},
  es: {
    'laminate-flooring-calculator': 'Calculadora de suelo laminado',
    'vinyl-plank-flooring-calculator': 'Calculadora de suelo vinilico en lamas',
    'hardwood-flooring-calculator': 'Calculadora de suelo de madera maciza',
    'engineered-wood-flooring-calculator': 'Calculadora de suelo de madera multicapa',
    'floor-tile-calculator': 'Calculadora de baldosas de suelo',
    'carpet-calculator': 'Calculadora de alfombra',
    'underlayment-calculator': 'Calculadora de base para suelo',
    'floor-leveling-compound-calculator': 'Calculadora de autonivelante para suelo',
    'floor-screed-calculator': 'Calculadora de recrecido de suelo',
    'stair-tread-flooring-calculator': 'Calculadora de revestimiento para peldaños',
    'interior-paint-calculator': 'Calculadora de pintura interior',
    'exterior-paint-calculator': 'Calculadora de pintura exterior',
    'wallpaper-calculator': 'Calculadora de papel pintado',
    'drywall-calculator': 'Calculadora de paneles de yeso',
    'joint-compound-calculator': 'Calculadora de masilla para juntas',
    'grout-calculator': 'Calculadora de lechada',
    'backsplash-tile-calculator': 'Calculadora de baldosas para salpicadero',
    'primer-calculator': 'Calculadora de imprimacion',
    'thinset-tile-adhesive-calculator': 'Calculadora de adhesivo thinset',
    'ceiling-paint-calculator': 'Calculadora de pintura de techo',
    'concrete-slab-calculator': 'Calculadora de losa de hormigon',
    'concrete-footing-calculator': 'Calculadora de zapata de hormigon',
    'concrete-column-calculator': 'Calculadora de columna de hormigon',
    'concrete-stairs-calculator': 'Calculadora de escaleras de hormigon',
    'board-feet-lumber-calculator': 'Calculadora de pies tablares',
    'wall-framing-stud-calculator': 'Calculadora de montantes para pared',
    'rebar-calculator': 'Calculadora de varilla corrugada',
    'insulation-calculator': 'Calculadora de aislamiento',
    'brick-calculator': 'Calculadora de ladrillos',
    'concrete-block-mortar-calculator': 'Calculadora de bloques y mortero',
    'mulch-calculator': 'Calculadora de mantillo',
    'gravel-calculator': 'Calculadora de grava',
    'crushed-stone-calculator': 'Calculadora de piedra triturada',
    'topsoil-calculator': 'Calculadora de tierra vegetal',
    'sand-calculator': 'Calculadora de arena',
    'sod-calculator': 'Calculadora de cesped en rollo',
    'paver-calculator': 'Calculadora de adoquines',
    'retaining-wall-block-calculator': 'Calculadora de bloques para muro de contencion',
    'river-rock-calculator': 'Calculadora de piedra de rio',
    'raised-garden-bed-soil-calculator': 'Calculadora de tierra para bancal elevado',
    'roofing-shingle-calculator': 'Calculadora de tejas de techo',
    'roof-underlayment-calculator': 'Calculadora de base para techo',
    'siding-calculator': 'Calculadora de revestimiento exterior',
    'gutter-calculator': 'Calculadora de canalones',
    'decking-board-calculator': 'Calculadora de tablas de terraza',
    'deck-joist-calculator': 'Calculadora de viguetas de terraza',
    'fence-panel-calculator': 'Calculadora de paneles de cerca',
    'fence-post-calculator': 'Calculadora de postes de cerca',
    'stair-stringer-calculator': 'Calculadora de zancas de escalera',
    'baseboard-trim-calculator': 'Calculadora de zocalos y molduras',
  },
  de: {
    'laminate-flooring-calculator': 'Laminat-Rechner',
    'vinyl-plank-flooring-calculator': 'Vinylplanken-Rechner',
    'hardwood-flooring-calculator': 'Massivholzboden-Rechner',
    'engineered-wood-flooring-calculator': 'Mehrschichtparkett-Rechner',
    'floor-tile-calculator': 'Bodenfliesen-Rechner',
    'carpet-calculator': 'Teppich-Rechner',
    'underlayment-calculator': 'Unterlagsbahn-Rechner',
    'floor-leveling-compound-calculator': 'Ausgleichsmasse-Rechner',
    'floor-screed-calculator': 'Estrich-Rechner',
    'stair-tread-flooring-calculator': 'Treppenstufenbelag-Rechner',
    'interior-paint-calculator': 'Innenfarben-Rechner',
    'exterior-paint-calculator': 'Aussenfarben-Rechner',
    'wallpaper-calculator': 'Tapeten-Rechner',
    'drywall-calculator': 'Trockenbauplatten-Rechner',
    'joint-compound-calculator': 'Fugenmasse-Rechner',
    'grout-calculator': 'Fugenmoertel-Rechner',
    'backsplash-tile-calculator': 'Kuechenspiegel-Fliesenrechner',
    'primer-calculator': 'Grundierungs-Rechner',
    'thinset-tile-adhesive-calculator': 'Fliesenkleber-Rechner',
    'ceiling-paint-calculator': 'Deckenfarben-Rechner',
    'concrete-slab-calculator': 'Betonplatten-Rechner',
    'concrete-footing-calculator': 'Betonfundament-Rechner',
    'concrete-column-calculator': 'Betonstuetzen-Rechner',
    'concrete-stairs-calculator': 'Betontreppen-Rechner',
    'board-feet-lumber-calculator': 'Board-Foot-Holzrechner',
    'wall-framing-stud-calculator': 'Staenderwerk-Rechner',
    'rebar-calculator': 'Bewehrungsstahl-Rechner',
    'insulation-calculator': 'Daemmstoff-Rechner',
    'brick-calculator': 'Ziegel-Rechner',
    'concrete-block-mortar-calculator': 'Betonblock- und Moertel-Rechner',
    'mulch-calculator': 'Mulch-Rechner',
    'gravel-calculator': 'Kies-Rechner',
    'crushed-stone-calculator': 'Schotter-Rechner',
    'topsoil-calculator': 'Mutterboden-Rechner',
    'sand-calculator': 'Sand-Rechner',
    'sod-calculator': 'Rollrasen-Rechner',
    'paver-calculator': 'Pflasterstein-Rechner',
    'retaining-wall-block-calculator': 'Stuetzmauerblock-Rechner',
    'river-rock-calculator': 'Flusskiesel-Rechner',
    'raised-garden-bed-soil-calculator': 'Hochbeet-Erde-Rechner',
    'roofing-shingle-calculator': 'Dachschindel-Rechner',
    'roof-underlayment-calculator': 'Dachunterspannbahn-Rechner',
    'siding-calculator': 'Fassadenverkleidungs-Rechner',
    'gutter-calculator': 'Dachrinnen-Rechner',
    'decking-board-calculator': 'Terrassendielen-Rechner',
    'deck-joist-calculator': 'Terrassenbalken-Rechner',
    'fence-panel-calculator': 'Zaunfelder-Rechner',
    'fence-post-calculator': 'Zaunpfosten-Rechner',
    'stair-stringer-calculator': 'Treppenwangen-Rechner',
    'baseboard-trim-calculator': 'Sockelleisten- und Leisten-Rechner',
  },
};

export function calculatorTitle(lang: Lang, slug: string, fallback: string): string {
  return calculatorTitles[lang]?.[slug] ?? calculatorTitles[defaultLang]?.[slug] ?? fallback;
}
