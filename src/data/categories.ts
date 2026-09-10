export interface Category {
  id: string;
  name: string;
  count: number;
  description: string;
  iconName: string;
  tag: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "calentamiento",
    name: "Calentamiento",
    count: 75,
    description: "Activación dinámica, movilidad articular y rondos de calentamiento con balón.",
    iconName: "Flame",
    tag: "Activación",
  },
  {
    id: "tecnica-individual",
    name: "Técnica Individual",
    count: 120,
    description: "Control orientado, perfiles, golpeo de balón, conducción y precisión.",
    iconName: "Sparkles",
    tag: "Fundamentos",
  },
  {
    id: "pase-recepcion",
    name: "Pase y Recepción",
    count: 110,
    description: "Circuitos de pases cortos, medios y largos, tercer hombre y líneas de pase.",
    iconName: "ArrowRightLeft",
    tag: "Circulación",
  },
  {
    id: "regate-1v1",
    name: "Regate y 1 contra 1",
    count: 85,
    description: "Duelos ofensivos y defensivos, fintas, cambios de ritmo y desborde en banda.",
    iconName: "Zap",
    tag: "Duelos",
  },
  {
    id: "finalizacion",
    name: "Finalización",
    count: 130,
    description: "Remates a portería, tiros tras centro, situaciones de área y definición bajo presión.",
    iconName: "Target",
    tag: "Gol",
  },
  {
    id: "ataque",
    name: "Ataque",
    count: 95,
    description: "Creación de espacios, desmarques en ruptura y apoyo, juego combinativo.",
    iconName: "TrendingUp",
    tag: "Ofensiva",
  },
  {
    id: "defensa",
    name: "Defensa",
    count: 80,
    description: "Presión tras pérdida, basculaciones, coberturas, temporización y repliegue.",
    iconName: "Shield",
    tag: "Seguridad",
  },
  {
    id: "transiciones",
    name: "Transiciones",
    count: 70,
    description: "Contraataques rápidos, repliegues defensivos y reorganización táctica inmediata.",
    iconName: "RefreshCw",
    tag: "Ritmo",
  },
  {
    id: "tactica",
    name: "Táctica",
    count: 100,
    description: "Juegos de posición, ruedas de pase tácticas, salidas de balón y bloques zonales.",
    iconName: "Compass",
    tag: "Estructura",
  },
  {
    id: "velocidad-agilidad",
    name: "Velocidad y Agilidad",
    count: 65,
    description: "Trabajos de aceleración, frenadas, coordinación con escaleras y cambios de dirección.",
    iconName: "Activity",
    tag: "Dinamismo",
  },
  {
    id: "preparacion-fisica",
    name: "Preparación Física",
    count: 85,
    description: "Fuerza específica, resistencia intermitente, potencia y prevención de lesiones.",
    iconName: "Dumbbell",
    tag: "Rendimiento",
  },
  {
    id: "porteros",
    name: "Porteros",
    count: 60,
    description: "Blocajes, desvíos, juego con los pies, posicionamiento y salidas aéreas.",
    iconName: "HandMetal",
    tag: "Específico",
  },
  {
    id: "futbol-base",
    name: "Fútbol Base",
    count: 140,
    description: "Ejercicios lúdicos y formativos adaptados para iniciación, benjamín, alevín e infantil.",
    iconName: "Users",
    tag: "Formativo",
  },
  {
    id: "individuales",
    name: "Ejercicios Individuales",
    count: 70,
    description: "Trabajo en solitario para jugadores que quieren perfeccionar su técnica extra.",
    iconName: "UserCheck",
    tag: "Individual",
  },
  {
    id: "parejas",
    name: "Ejercicios en Parejas",
    count: 65,
    description: "Circuitos técnicos de sincronización, pases, paredes y coordinación dual.",
    iconName: "UserPlus",
    tag: "Doble",
  },
  {
    id: "colectivos",
    name: "Ejercicios Colectivos",
    count: 110,
    description: "Partidos reducidos, rondos complejos, posesiones y situaciones reales de partido.",
    iconName: "Grid",
    tag: "Equipo",
  },
];
