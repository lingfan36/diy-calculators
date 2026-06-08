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
