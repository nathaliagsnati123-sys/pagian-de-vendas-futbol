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

  const resetFilters = () => {
    setSelectedObjective("Pase y Recepción");
    setSelectedAge("Sub-14");
    setSelectedLevel("Intermedio");
    setSelectedPlayers("8 a 14");
    setSelectedDuration("15-20 min");
    setSelectedIntensity("Alta");
    setSelectedSpace("Medio Campo");
  };

  return (
    <section
      id="filtros"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
            <span>Filtros Inteligentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            ENCUENTRA EL EJERCICIO EXACTO EN SEGUNDOS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Nunca más pierdas tiempo buscando tareas. Combina filtros para encontrar al instante la actividad ideal para tu sesión.
          </p>
        </div>

        {/* Interactive Filter Playground */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Filter Controls */}
          <div className="lg:col-span-7 space-y-4 p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-emerald-600" /> Criterios de Selección
              </span>
              <button
                onClick={resetFilters}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Restablecer
              </button>
            </div>

            {filterCategories.map((cat) => (
              <div key={cat.id} className="space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {cat.label}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.options.map((opt) => {
                    const isSelected = cat.current === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => cat.setter(opt)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-500 scale-105"
                            : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/50"
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

          {/* Right Column: Tactical Result Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Ejercicio Encontrado
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  Filtro Activo
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Circuito de {selectedObjective} para categoría {selectedAge}
                </h4>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {selectedPlayers} jugadores
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {selectedDuration}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {selectedSpace}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <TacticalPitch type={selectedObjective.includes("Finalización") ? "finishing" : "rondo"} />
              </div>

              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                Este ejercicio se adapta inmediatamente a tus selecciones. En la app tendrás 1.000 ejercicios con esta misma ficha interactiva.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide transition shadow-md"
                >
                  <span>ACCEDER A LA BIBLIOTECA COMPLETA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
