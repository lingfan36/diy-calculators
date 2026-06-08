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
  | 'index.lead'
  | 'index.popular'
  | 'index.browse'
  | 'calc.lead'
  | 'calc.howto'
  | 'calc.order'
  | 'calc.related'
  | 'calc.comingSoon'
  | 'calc.disclaimer'
  | 'cat.lead'
  | 'faq.title'
  | 'faq.q1'
  | 'faq.a1'
  | 'faq.q2'
  | 'faq.a2';

type Dict = Record<UIKey, string>;

export const ui: Record<Lang, Dict> = {
  en: {
    'site.title': 'DIY Material Calculators',
    'site.footer': 'Estimates are for planning only — always confirm with your supplier.',
    'nav.flooring': 'Flooring',
    'nav.paint': 'Paint & Walls',
    'nav.structural': 'Concrete & Structural',
    'nav.landscaping': 'Landscaping',
    'nav.roofing': 'Roofing & Exterior',
    'common.home': 'Home',
    'common.popular': 'Popular',
    'index.lead':
      'Free, fast material calculators for flooring, paint, concrete, landscaping and roofing. Estimate how much you need and what it will cost.',
    'index.popular': 'Popular calculators',
    'index.browse': 'Browse by category',
    'calc.lead': 'Estimate how much material your project needs in seconds — then check the cost.',
    'calc.howto': 'How to calculate',
    'calc.order': 'How much should you order?',
    'calc.related': 'Related calculators',
    'calc.comingSoon':
      'Interactive calculator coming soon. The guide below shows how to work it out by hand in the meantime.',
    'calc.disclaimer':
      'Estimates are for planning only and may vary by product, layout and site conditions. Confirm quantities with your supplier before ordering.',
    'cat.lead': 'Pick a calculator below.',
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
    'site.footer': 'Las estimaciones son solo orientativas — confirma siempre con tu proveedor.',
    'nav.flooring': 'Suelos',
    'nav.paint': 'Pintura y Paredes',
    'nav.structural': 'Hormigón y Estructura',
    'nav.landscaping': 'Jardinería',
    'nav.roofing': 'Tejados y Exterior',
    'common.home': 'Inicio',
    'common.popular': 'Popular',
    'index.lead':
      'Calculadoras de materiales gratuitas y rápidas para suelos, pintura, hormigón, jardinería y tejados. Calcula cuánto necesitas y cuánto costará.',
    'index.popular': 'Calculadoras populares',
    'index.browse': 'Explorar por categoría',
    'calc.lead':
      'Calcula en segundos cuánto material necesita tu proyecto — y luego consulta el coste.',
    'calc.howto': 'Cómo calcular',
    'calc.order': '¿Cuánto deberías pedir?',
    'calc.related': 'Calculadoras relacionadas',
    'calc.comingSoon':
      'Calculadora interactiva próximamente. Mientras tanto, la guía siguiente explica cómo calcularlo a mano.',
    'calc.disclaimer':
      'Las estimaciones son solo orientativas y pueden variar según el producto, el diseño y las condiciones. Confirma las cantidades con tu proveedor antes de comprar.',
    'cat.lead': 'Elige una calculadora a continuación.',
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
    'site.footer': 'Schätzungen dienen nur der Planung — bitte immer mit dem Händler bestätigen.',
    'nav.flooring': 'Bodenbeläge',
    'nav.paint': 'Farbe & Wände',
    'nav.structural': 'Beton & Struktur',
    'nav.landscaping': 'Garten',
    'nav.roofing': 'Dach & Außen',
    'common.home': 'Start',
    'common.popular': 'Beliebt',
    'index.lead':
      'Kostenlose, schnelle Materialrechner für Bodenbeläge, Farbe, Beton, Garten und Dach. Berechne, wie viel du brauchst und was es kostet.',
    'index.popular': 'Beliebte Rechner',
    'index.browse': 'Nach Kategorie durchsuchen',
    'calc.lead':
      'Berechne in Sekunden, wie viel Material dein Projekt braucht — und prüfe die Kosten.',
    'calc.howto': 'So wird berechnet',
    'calc.order': 'Wie viel solltest du bestellen?',
    'calc.related': 'Verwandte Rechner',
    'calc.comingSoon':
      'Interaktiver Rechner kommt bald. Die Anleitung unten zeigt vorerst die manuelle Berechnung.',
    'calc.disclaimer':
      'Schätzungen dienen nur der Planung und können je nach Produkt, Verlegung und Bedingungen variieren. Mengen vor dem Kauf mit dem Händler bestätigen.',
    'cat.lead': 'Wähle unten einen Rechner.',
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
