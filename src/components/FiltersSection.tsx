import React, { useState } from "react";
import { SlidersHorizontal, Check, RefreshCw, Sparkles, Filter } from "lucide-react";
import { CHECKOUT_URL } from "../config";
import { TacticalPitch } from "./TacticalPitch";

export const FiltersSection: React.FC = () => {
  const [selectedObjective, setSelectedObjective] = useState("Pase y Recepción");
  const [selectedAge, setSelectedAge] = useState("Sub-14");
  const [selectedLevel, setSelectedLevel] = useState("Intermedio");
  const [selectedPlayers, setSelectedPlayers] = useState("8 a 14");
  const [selectedDuration, setSelectedDuration] = useState("15-20 min");
  const [selectedIntensity, setSelectedIntensity] = useState("Alta");
  const [selectedSpace, setSelectedSpace] = useState("Medio Campo");

  const filterCategories = [
    {
      id: "objetivo",
      label: "Objetivo",
      current: selectedObjective,
      setter: setSelectedObjective,
      options: ["Pase y Recepción", "Finalización", "Táctica", "Regate 1v1", "Defensa"],
    },
    {
      id: "edad",
      label: "Edad",
      current: selectedAge,
      setter: setSelectedAge,
      options: ["Sub-8 / Sub-10", "Sub-12", "Sub-14", "Sub-16 / Sub-18", "Senior / Adulto"],
    },
    {
      id: "nivel",
      label: "Nivel",
      current: selectedLevel,
      setter: setSelectedLevel,
      options: ["Iniciación", "Intermedio", "Avanzado / Competitivo"],
    },
    {
      id: "jugadores",
      label: "Jugadores",
      current: selectedPlayers,
      setter: setSelectedPlayers,
      options: ["Individual / Parejas", "4 a 8", "8 a 14", "+16 Colectivo"],
    },
    {
      id: "duracion",
      label: "Duración",
      current: selectedDuration,
      setter: setSelectedDuration,
      options: ["10 min", "15-20 min", "25+ min"],
    },
    {
      id: "intensidad",
      label: "Intensidad",
      current: selectedIntensity,
      setter: setSelectedIntensity,
      options: ["Baja", "Media", "Alta"],
    },
    {
      id: "espacio",
      label: "Espacio",
      current: selectedSpace,
      setter: setSelectedSpace,
      options: ["Espacio Reducido", "Medio Campo", "Campo Completo"],
    },
  ];

  return (
    <section
      id="filtros"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Filtros Inteligentes
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            FILTRA EXACTAMENTE LO QUE NECESITAS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Encuentra ejercicios adaptados a las características de tu entrenamiento sin perder tiempo.
          </p>
        </div>

        {/* Interactive Filter Showcase Card */}
        <div className="mt-12 rounded-2xl bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-xl">
          {/* Top Bar inside Filter Mockup */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Panel de Filtros Multicriterio de Fútbol+
                </h3>
                <p className="text-xs text-slate-400">
                  Haz clic en las opciones para probar cómo responde la plataforma en tiempo real
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-300">
                38 Ejercicios encontrados
              </span>
            </div>
          </div>

          {/* 7 Filter Options Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filterCategories.map((filter) => (
              <div
                key={filter.id}
                className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {filter.label}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-300 font-mono">
                    {filter.current}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {filter.options.map((opt) => {
                    const isActive = filter.current === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => filter.setter(opt)}
                        className={`text-xs px-2.5 py-1 rounded-lg transition-all font-medium ${
                          isActive
                            ? "bg-emerald-600 text-white font-bold shadow-xs scale-105"
                            : "bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Live Preview Result Card */}
          <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-700/60">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-emerald-400 font-bold uppercase">
                  Resultado Filtrado Activo
                </p>
                <p className="text-sm font-bold text-white">
                  Rondo 4v2 con transición rápida ofensiva • {selectedAge} • {selectedIntensity} Intensidad
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Alineado exactamente con tus criterios seleccionados en 1 segundo.
                </p>
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs tracking-wide shrink-0 transition"
            >
              OBTENER ACCESO COMPLETO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
