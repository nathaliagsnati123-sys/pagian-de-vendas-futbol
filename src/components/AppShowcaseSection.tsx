import React, { useState } from "react";
import {
  LayoutDashboard,
  Layers,
  SlidersHorizontal,
  FileText,
  Heart,
  CalendarDays,
  Gift,
  FileSpreadsheet,
  CheckCircle2,
  Sparkles,
  Timer,
  Users,
  Search,
} from "lucide-react";
import { TacticalPitch } from "./TacticalPitch";
import { CHECKOUT_URL } from "../config";

export const AppShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ejercicio");

  const screens = [
    {
      id: "ejercicio",
      label: "Ejercicio Abierto",
      icon: FileText,
      tag: "Diagrama Táctico",
      description: "Vista detallada de cada tarea con dimensiones, jugadores, objetivos y consignas paso a paso.",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      tag: "Panel Principal",
      description: "Acceso rápido a tu última sesión creada, estadísticas de categorías y ejercicios recomendados.",
    },
    {
      id: "biblioteca",
      label: "Biblioteca",
      icon: Layers,
      tag: "1.000 Ejercicios",
      description: "Navega fluidamente por las 16 categorías con miniaturas, indicadores de intensidad y etiquetas.",
    },
    {
      id: "filtros",
      label: "Filtros",
      icon: SlidersHorizontal,
      tag: "Búsqueda Rápida",
      description: "Combina edad, nivel, espacio y tiempo para encontrar la tarea exacta en un segundo.",
    },
    {
      id: "favoritos",
      label: "Favoritos",
      icon: Heart,
      tag: "Colección Personal",
      description: "Tu selección personal guardada con un toque para acceder sin conexión a tus ejercicios clave.",
    },
    {
      id: "entrenamientos",
      label: "Entrenamientos",
      icon: CalendarDays,
      tag: "Constructor de Sesiones",
      description: "Ensambla sesiones completas de 60, 75 o 90 minutos arrastrando tareas con tiempos automáticos.",
    },
    {
      id: "bonos",
      label: "Bonos",
      icon: Gift,
      tag: "10 Extras Incluidos",
      description: "Sección exclusiva con los 10 bonos descargables y consultables directamente en el app.",
    },
    {
      id: "fichas",
      label: "Fichas Técnicas",
      icon: FileSpreadsheet,
      tag: "Plantillas e Informes",
      description: "Hojas técnicas con diagramas vectoriales para imprimir o compartir por WhatsApp con tu staff.",
    },
  ];

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <section
      id="experiencia-visual"
      className="py-16 md:py-24 bg-slate-900 text-slate-100 border-b border-slate-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
            Transparencia Total
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            EXPERIENCIA VISUAL DEL APP
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Explora cada rincón de la plataforma antes de comprar. Todo listo, limpio y diseñado para el día a día.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-900/30 px-3 py-1 rounded-lg border border-emerald-700/40">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>“Sé exactamente lo que estoy comprando”</span>
          </div>
        </div>

        {/* Screen Tabs Selector */}
        <div className="mt-10 flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeTab === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/40 scale-105"
                    : "bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{screen.label}</span>
              </button>
            );
          })}
        </div>

        {/* Screen Preview Container */}
        <div className="mt-6 max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-3 sm:p-5 shadow-2xl">
          {/* Inner Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 text-xs gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white text-sm">
                Fútbol+ · {currentScreen.label}
              </span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60 font-semibold">
                {currentScreen.tag}
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {currentScreen.description}
            </p>
          </div>

          {/* Dynamic Content based on activeTab */}
          <div className="mt-4">
            {activeTab === "ejercicio" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-7">
                  <TacticalPitch type="finishing" />
                </div>
                <div className="lg:col-span-5 bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase">
                      <span>Categoría: Finalización</span>
                      <span>•</span>
                      <span>Sub-14 a Senior</span>
                    </div>
                    <h4 className="text-base font-bold text-white mt-1">
                      Remate tras desmarque al segundo palo y segunda jugada
                    </h4>
                    <div className="mt-3 space-y-2 text-xs text-slate-300">
                      <div>
                        <strong className="text-emerald-300 block">Consigna Principal:</strong>
                        <p className="text-slate-400">Atacar el espacio libre por detrás del central alejado a 1 toque.</p>
                      </div>
                      <div>
                        <strong className="text-emerald-300 block">Variante Táctica:</strong>
                        <p className="text-slate-400">Añadir defensor adicional para generar situación 2v1 en el área pequeña.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Espacio: Medio campo</span>
                    <span className="text-emerald-400 font-bold">18 min · Alta Int.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "dashboard" && (
              <div className="p-4 sm:p-6 bg-slate-900/80 rounded-xl border border-slate-800 space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Hola, Entrenador 👋
                    </h4>
                    <p className="text-xs text-slate-400">
                      Tu panel de entrenamiento activo para esta semana.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800">
                    1.000 Ejercicios Disponibles
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Guardados</span>
                    <p className="text-xl font-black text-white mt-0.5">24</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Sesiones Creadas</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">8</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Completados</span>
                    <p className="text-xl font-black text-blue-400 mt-0.5">42</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Bonos Activos</span>
                    <p className="text-xl font-black text-amber-400 mt-0.5">10/10</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <p className="text-xs font-bold text-slate-300 mb-2">Próxima Sesión Programada:</p>
                  <p className="text-sm font-bold text-emerald-300">
                    Microciclo Competitivo: Amplitud Ofensiva y Finalización (75 min)
                  </p>
                </div>
              </div>
            )}

            {activeTab === "biblioteca" && (
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">16 Categorías Estructuradas</span>
                  <span className="text-xs text-emerald-400 font-bold">Todas Desbloqueadas</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  {["Calentamiento (+75)", "Técnica Individual (+120)", "Pase y Recepción (+110)", "Finalización (+130)", "Táctica (+100)", "Defensa (+80)", "Fútbol Base (+140)", "Porteros (+60)"].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-medium flex items-center justify-between">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "filtros" && (
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-3">
                <p className="text-xs font-bold text-emerald-400 uppercase">Sistema de Filtrado Rápido</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold">Objetivo: Pase</span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold">Edad: Sub-12</span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold">Espacio: Reducido</span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300">+ Agregar Filtro</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  La interfaz responde de forma instantánea mostrando tarjetas precisas con diagramas y tiempos.
                </p>
              </div>
            )}

            {activeTab === "favoritos" && (
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Tus Tareas Guardadas (Acceso Directo)</span>
                  <span className="text-rose-400 font-semibold">❤️ Colección Personal</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Rondo 4v2 con transición rápida</span>
                    <span className="text-slate-400">15 min · Pase</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Juego de posición 6v6 + 3 comodines</span>
                    <span className="text-slate-400">20 min · Táctica</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "entrenamientos" && (
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Constructor de Sesiones</span>
                  <span className="text-emerald-400 font-mono">Duración Total: 80 min</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-amber-400 font-bold block">1. Calentamiento (15 min)</span>
                    <span className="text-white font-medium">Rondo de activación dinámica</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-emerald-400 font-bold block">2. Fase Principal (45 min)</span>
                    <span className="text-white font-medium">Rueda táctica y finalización 2v1</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-blue-400 font-bold block">3. Vuelta a la Calma (20 min)</span>
                    <span className="text-white font-medium">Partido reducido condicionado</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "bonos" && (
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>10 Bonos Disponibles</span>
                  <span>Sin costo adicional</span>
                </div>
                <p className="text-xs text-slate-300">
                  Accede a las 100 sesiones listas, la guía profesional del entrenador, los programas específicos de velocidad y acondicionamiento físico directamente con un clic.
                </p>
              </div>
            )}

            {activeTab === "fichas" && (
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-purple-400">
                  <span>Fichas Técnicas Imprimibles</span>
                  <span className="text-slate-400 font-mono">Formato PDF & Digital</span>
                </div>
                <p className="text-xs text-slate-300">
                  Hojas técnicas limpias con diagramas de campos de fútbol, casillas de objetivos, variantes, material necesario y notas del cuerpo técnico.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Callout in Showcase */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">
              Compatible con iPhone, iPad, Android, Windows y Mac
            </span>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white transition"
            >
              COMPRAR AHORA · US$ 7,90
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
