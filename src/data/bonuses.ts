import bonus01Img from "../assets/images/bonus_guia_mockup_1789598928039.jpg";
import bonus02Img from "../assets/images/bonus_sesiones_mockup_1789598912214.jpg";
import bonus03Img from "../assets/images/bonus_finalizacion_mockup_1789598937258.jpg";
import bonus04Img from "../assets/images/bonus_tecnica_mockup_1789598945836.jpg";
import bonus05Img from "../assets/images/bonus_tactica_mockup_1789598952632.jpg";
import bonus06Img from "../assets/images/bonus_velocidad_mockup_1789598966269.jpg";
import bonus07Img from "../assets/images/bonus_futbol_base_mockup_1789598975595.jpg";
import bonus08Img from "../assets/images/bonus_plan30dias_mockup_1789598985075.jpg";
import bonus09Img from "../assets/images/bonus_fichas_mockup_1789598992748.jpg";
import bonus10Img from "../assets/images/bonus_preparacion_mockup_1789599001997.jpg";

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  estimatedValue: string;
  imageUrl: string;
  isSpecial?: boolean;
}

export const BONUSES: BonusItem[] = [
  {
    id: "bono-01",
    number: "BONO 01",
    title: "Guía Profesional del Entrenador de Fútbol",
    subtitle: "Metodología, liderazgo y planificación",
    description: "Principios fundamentales para gestionar grupos, estructurar microciclos semanales y comunicar con claridad en el vestuario.",
    tag: "Metodología",
    estimatedValue: "US$ 19,00",
    imageUrl: bonus01Img,
  },
  {
    id: "bono-02",
    number: "BONO 02",
    title: "100 Sesiones de Entrenamiento Listas",
    subtitle: "Estructuradas de inicio a fin",
    description: "Sesiones completas con calentamiento, parte principal y vuelta a la calma, listas para aplicar en el campo sin improvisar.",
    tag: "Práctico",
    estimatedValue: "US$ 27,00",
    imageUrl: bonus02Img,
  },
  {
    id: "bono-03",
    number: "BONO 03",
    title: "150 Ejercicios de Finalización",
    subtitle: "Eficacia y definición frente al arco",
    description: "Situaciones de remate con presión defensiva, tiros de media distancia, centros al área y definiciones en carrera.",
    tag: "Ofensivo",
    estimatedValue: "US$ 17,00",
    imageUrl: bonus03Img,
  },
  {
    id: "bono-04",
    number: "BONO 04",
    title: "120 Ejercicios de Técnica Individual",
    subtitle: "Dominio, control y precisión del jugador",
    description: "Batería de tareas para pulir el primer toque, cambios de dirección con balón y conducción orientada de alto nivel.",
    tag: "Habilidad",
    estimatedValue: "US$ 15,00",
    imageUrl: bonus04Img,
  },
  {
    id: "bono-05",
    number: "BONO 05",
    title: "100 Ejercicios Tácticos",
    subtitle: "Juego de posición, líneas y transiciones",
    description: "Tareas para asimilar conceptos de amplitud, profundidad, fijaciones de marcas y coberturas defensivas escalonadas.",
    tag: "Estrategia",
    estimatedValue: "US$ 22,00",
    imageUrl: bonus05Img,
  },
  {
    id: "bono-06",
    number: "BONO 06",
    title: "Programa de Velocidad y Agilidad",
    subtitle: "Reactividad y aceleración en espacios cortos",
    description: "Ejercicios con conos, picas y escaleras coordinativas para potenciar la rapidez de pies y los primeros metros de sprint.",
    tag: "Velocidad",
    estimatedValue: "US$ 18,00",
    imageUrl: bonus06Img,
  },
  {
    id: "bono-07",
    number: "BONO 07",
    title: "Fútbol Base: Guía por Edades",
    subtitle: "Etapas formativas desde Sub-6 hasta Sub-16",
    description: "Qué enseñar y qué priorizar según la etapa madurativa del niño, garantizando un aprendizaje motivante y progresivo.",
    tag: "Formación",
    estimatedValue: "US$ 20,00",
    imageUrl: bonus07Img,
  },
  {
    id: "bono-08",
    number: "BONO 08",
    title: "Plan de Entrenamiento de 30 Días",
    subtitle: "Calendario estructurado paso a paso",
    description: "Un cronograma de 4 semanas pensado para pretemporada o puesta a punto competitiva con progresión de cargas.",
    tag: "Planificación",
    estimatedValue: "US$ 16,00",
    imageUrl: bonus08Img,
  },
  {
    id: "bono-09",
    number: "BONO 09",
    title: "Pack de Fichas Técnicas de Entrenamiento",
    subtitle: "Plantillas profesionales imprimibles y editables",
    description: "Hojas de diseño de tareas con campos de fútbol vectoriales, registro de objetivos, minutos y evaluación de jugadores.",
    tag: "Herramienta",
    estimatedValue: "US$ 14,00",
    imageUrl: bonus09Img,
  },
  {
    id: "bono-10",
    number: "BONO 10",
    title: "Programa de Preparación Física para Futbolistas",
    subtitle: "Potencia, resistencia y prevención física",
    description: "Rutinas específicas para desarrollar fuerza explosiva, capacidad aeróbica intermitente y elasticidad muscular en campo.",
    tag: "Rendimiento Top",
    estimatedValue: "US$ 29,00",
    imageUrl: bonus10Img,
    isSpecial: true,
  },
];
