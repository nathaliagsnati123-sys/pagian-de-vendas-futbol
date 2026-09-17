import React, { useState } from "react";
import {
  LayoutDashboard,
  Layers,
  SlidersHorizontal,
  FileText,
  CalendarDays,
  Gift,
  Zap,
  CheckCircle2,
  ArrowRight,
  Flame,
  Search,
} from "lucide-react";
import { TacticalPitch } from "./TacticalPitch";
import { CHECKOUT_URL } from "../config";

export const AppShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const screens = [
    {
      id: "dashboard",
      label: "Pantalla principal",
      icon: LayoutDashboard,
      tag: "Inicio",
      description: "Vista global con acceso inmediato a biblioteca, sesiones recientes y categorías.",
    },
    {
      id: "biblioteca",
      label: "Biblioteca de ejercicios",
      icon: Layers,
      tag: "1.000+ Tareas",
      description: "Exploración de ejercicios organizados por bloques temáticos con miniaturas y tiempos.",
    },
    {
      id: "filtros",
      label: "Filtros",
      icon: SlidersHorizontal,
      tag: "Búsqueda Precisa",
      description: "Ajuste rápido por edad, nivel, jugadores, duración, intensidad y espacio.",
    },
    {
      id: "ejercicio",
      label: "Detalle de ejercicio",
      icon: FileText,
      tag: "Ficha Técnica",
      description: "Diagrama táctico 2D, objetivos pedagógicos, consignas y variantes de provocación.",
    },
    {
      id: "entrenamientos",
      label: "Mis entrenamientos",
      icon: CalendarDays,
      tag: "Planificador",
      description: "Estructura sesiones completas uniendo calentamiento, fase principal y partido reducido.",
    },
    {
      id: "generador",
      label: "Generador de entrenamientos",
      icon: Zap,
      tag: "Automático",
      description: "Propuestas instantáneas de entrenamiento según tus necesidades y tiempo disponible.",
    },
    {
      id: "bonos",
      label: "Bonos",
      icon: Gift,
      tag: "10 Bonos",
      description: "Acceso a los 10 bonos profesionales incluidos sin costo adicional.",
    },
  ];

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <section
      id="interior-app"
      className="py-14 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/80">
            Interior de la Aplicación
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            MIRA LO QUE ENCONTRARÁS DENTRO DE FÚTBOL+
          </h2>
          <p className="mt-3 text-base text-slate-300 font-medium max-w-xl mx-auto">
            Explora las pantallas principales de la aplicación y comprueba lo fácil que es usarla.
          </p>
        </div>

        {/* Selector de Pantallas en Tabs Horizontales */}
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

        {/* Mockup del Interior de la App */}
        <div className="mt-6 max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-3 sm:p-5 shadow-2xl">
          {/* Barra Superior del Dispositivo */}
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

          {/* Vistas Dinámicas */}
          <div className="mt-4">
            {activeTab === "dashboard" && (
              <div className="p-4 sm:p-6 bg-slate-900/90 rounded-xl border border-slate-800 space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      Panel Principal de Fútbol+
                    </h4>
                    <p className="text-xs text-slate-400">
                      Bienvenido. Accede a tu biblioteca con más de 1.000 tareas clasificadas.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800">
                    1.000 Ejercicios Activos
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">16 Categorías</span>
                    <p className="text-lg font-black text-white mt-0.5">Completas</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Favoritos</span>
                    <p className="text-lg font-black text-rose-400 mt-0.5">Acceso 1 Click</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Sesiones</span>
                    <p className="text-lg font-black text-emerald-400 mt-0.5">Organizadas</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Bonos</span>
                    <p className="text-lg font-black text-amber-400 mt-0.5">10 Incluidos</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">
                    Sesión Rápida Recomendada: Amplitud Ofensiva y Remate
                  </span>
                  <span className="text-xs font-bold text-emerald-400">Abrir Ficha →</span>
                </div>
              </div>
            )}

            {activeTab === "biblioteca" && (
              <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300">16 Categorías Estructuradas</span>
                  <span className="text-xs text-emerald-400 font-bold">Acceso Total</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  {[
                    "⚽ Calentamiento (+75)",
                    "🎯 Técnica Individual (+120)",
                    "🔄 Pase y Recepción (+110)",
                    "🔥 Regate y 1v1 (+85)",
                    "🥅 Finalización y Tiro (+130)",
                    "⚔️ Ataque (+95)",
                    "🛡️ Defensa (+80)",
                    "👦 Fútbol Base (+140)",
                  ].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "filtros" && (
              <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl border border-slate-800 text-left space-y-3">
                <p className="text-xs font-bold text-emerald-400 uppercase">Pantalla de Filtros Avanzados</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold">Edad: 12–14</span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold">Nivel: Intermedio</span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold">Jugadores: 6–10</span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold">Duración: 15 min</span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold">Intensidad: Media</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  La biblioteca filtra instantáneamente las tareas coincidentes con un solo toque.
                </p>
              </div>
            )}

            {activeTab === "ejercicio" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-7">
                  <TacticalPitch type="finishing" />
                </div>
                <div className="lg:col-span-5 bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase">
                      <span>Finalización y Tiro</span>
                      <span>•</span>
                      <span>15 Minutos</span>
                    </div>
                    <h4 className="text-base font-bold text-white mt-1">
                      Remate tras centro lateral y segunda jugada al borde del área
                    </h4>
                    <div className="mt-3 space-y-2 text-xs text-slate-300">
                      <div>
                        <strong className="text-emerald-300 block">Objetivo:</strong>
                        <p className="text-slate-400">Atacar primer y segundo palo con sincronización.</p>
                      </div>
                      <div>
                        <strong className="text-emerald-300 block">Consigna:</strong>
                        <p className="text-slate-400">Máximo 2 toques antes de definir a puerta.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Espacio: Medio campo</span>
                    <span className="text-emerald-400 font-bold">Intensidad Alta</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "entrenamientos" && (
              <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Mis Entrenamientos Guardados</span>
                  <span className="text-emerald-400 font-mono">Sesión Completa (75 min)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-amber-400 font-bold block">1. Calentamiento (15 min)</span>
                    <span className="text-white">Activación con rondos</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-emerald-400 font-bold block">2. Fase Principal (45 min)</span>
                    <span className="text-white">Posesión 5v5 + 2 comodines</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-blue-400 font-bold block">3. Final (15 min)</span>
                    <span className="text-white">Partido en espacio reducido</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "generador" && (
              <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Generador Rápido de Sesiones</span>
                  <span className="text-slate-400">Selecciona y genera</span>
                </div>
                <p className="text-xs text-slate-300">
                  Indica la cantidad de jugadores y los minutos disponibles; el generador propone una estructura de 3 tareas balanceadas al instante.
                </p>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-emerald-300 font-bold">
                  ✓ Sesión generada: Calentamiento técnico + Rueda de pases + Partido condicionado
                </div>
              </div>
            )}

            {activeTab === "bonos" && (
              <div className="p-4 sm:p-5 bg-slate-900/90 rounded-xl border border-slate-800 text-left space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>10 Bonos Profesionales Incluidos</span>
                  <span>Sin pagos adicionales</span>
                </div>
                <p className="text-xs text-slate-300">
                  Todos los 10 bonos (100 sesiones listas, guía del DT, técnica individual, táctica, preparación física, etc.) se consultan directamente en la app.
                </p>
              </div>
            )}
          </div>

          {/* Barra Inferior */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-400">
              Compatible con Celular, Tablet y Computadora
            </span>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-white transition inline-flex items-center gap-1.5"
            >
              <span>COMPRAR AHORA · US$ 7,90</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
