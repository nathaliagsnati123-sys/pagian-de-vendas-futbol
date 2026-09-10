export interface DrillSample {
  id: string;
  title: string;
  category: string;
  age: string;
  level: string;
  players: string;
  duration: string;
  intensity: "Baja" | "Media" | "Alta";
  space: string;
  objective: string;
  description: string;
  coachingPoints: string[];
  setup: string;
  fieldDiagramType: "rondo" | "finishing" | "tactical" | "switch";
}

export const SAMPLE_DRILLS: DrillSample[] = [
  {
    id: "drill-1",
    title: "Rondo 4v2 con transición rápida ofensiva y contragolpe",
    category: "Pase y Recepción",
    age: "Sub-14 a Senior",
    level: "Intermedio / Avanzado",
    players: "6 a 8 Jugadores",
    duration: "15 min",
    intensity: "Alta",
    space: "15 x 15 metros",
    objective: "Conservación rápida del balón a 1-2 toques, fijación de marcas interiores y presión inmediata tras pérdida.",
    description: "Cuatro jugadores exteriores mantienen la posesión frente a dos recuperadores interiores. Al alcanzar 6 pases consecutivos, se habilita el pase al comodín exterior alejado.",
    coachingPoints: [
      "Orientación corporal previa a la recepción.",
      "Velocidad de circulación y pase con empeine interior tenso.",
      "Reacción explosiva de los dos del medio al recuperar.",
    ],
    setup: "Espacio delimitado por 4 conos con 1 balón activo y balones de reserva en las esquinas.",
    fieldDiagramType: "rondo",
  },
  {
    id: "drill-2",
    title: "Finalización tras pared frontal y desmarque en ruptura al segundo palo",
    category: "Finalización",
    age: "Sub-12 a Senior",
    level: "Todos los niveles",
    players: "8 a 14 Jugadores",
    duration: "18 min",
    intensity: "Alta",
    space: "Medio campo",
    objective: "Sincronización del pase filtrado, golpeo de primera intención y ataque frontal al área rival.",
    description: "El mediocentro inicia con pase tenso al delantero que viene en apoyo; pared de devolución y pase filtrado al extremo que rompe la línea al espacio para definir.",
    coachingPoints: [
      "Timing exacto del desmarque para evitar fuera de juego.",
      "Golpeo raso cruzado o al palo largo.",
      "Atacar el rebote con el tercer hombre.",
    ],
    setup: "Arco reglamentario con portero, picas defensivas simulando línea de 4 zagueros.",
    fieldDiagramType: "finishing",
  },
  {
    id: "drill-3",
    title: "Juego de posición 6v6 + 3 comodines: Salida de balón y 3er hombre",
    category: "Táctica",
    age: "Sub-16 a Senior",
    level: "Avanzado",
    players: "15 Jugadores",
    duration: "20 min",
    intensity: "Media",
    space: "35 x 30 metros",
    objective: "Encontrar al hombre libre a espaldas de la primera línea de presión adversaria.",
    description: "Estructura dividida en dos sub-zonas. El equipo con balón busca atraer defensores hacia un costado para conectar con el mediocentro comodín y cambiar la orientación.",
    coachingPoints: [
      "Generar amplitud máxima con jugadores exteriores.",
      "Pases diagonales que rompen líneas verticales.",
      "Comunicación continua y apoyos en escalón.",
    ],
    setup: "Rectángulo central con dos zonas de progresión y mini-arcos de desahogo.",
    fieldDiagramType: "tactical",
  },
  {
    id: "drill-4",
    title: "Duelo 1v1 dinámico en banda con repliegue y transición a portería",
    category: "Regate y 1 contra 1",
    age: "Sub-10 a Senior",
    level: "Intermedio",
    players: "10 Jugadores",
    duration: "12 min",
    intensity: "Alta",
    space: "20 x 15 metros",
    objective: "Finta, cambio de dirección explosivo y capacidad de superación en el uno contra uno.",
    description: "El atacante recibe balón frontal de espaldas, gira hacia el cono exterior y encara al defensor que sale desde el poste contrario en carrera de aproximación.",
    coachingPoints: [
      "Engaño corporal con tren superior.",
      "Cambio drástico de aceleración tras el regate.",
      "Protección del balón con brazo de apoyo.",
    ],
    setup: "Canal lateral con cono de inicio y portería pequeña defendida.",
    fieldDiagramType: "switch",
  },
];
