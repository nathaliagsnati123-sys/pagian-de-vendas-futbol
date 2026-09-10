import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  Plus,
  Play,
  Share2,
  CheckCircle2,
  Timer,
  Users,
  Flame,
  Layers,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { TacticalPitch } from "./TacticalPitch";
import { SAMPLE_DRILLS } from "../data/sampleDrills";

interface AppMockupProps {
  interactive?: boolean;
  variant?: "desktop" | "mobile" | "compact";
  className?: string;
}

export const AppMockup: React.FC<AppMockupProps> = ({
  interactive = true,
  variant = "desktop",
  className = "",
}) => {
  const [selectedDrillIndex, setSelectedDrillIndex] = useState(0);
  const [savedFavorites, setSavedFavorites] = useState<Record<string, boolean>>({
    "drill-1": true,
    "drill-2": false,
    "drill-3": true,
  });

  const activeDrill = SAMPLE_DRILLS[selectedDrillIndex] || SAMPLE_DRILLS[0];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-4xl rounded-2xl bg-slate-900/95 p-2 sm:p-3 shadow-2xl ring-1 ring-slate-800/80 backdrop-blur-xl select-none pointer-events-none ${className}`}
    >
      {/* Device Top Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-semibold text-slate-300 hidden sm:inline-block">
            Fútbol+
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
            1.000 Ejercicios
          </span>
        </div>
      </div>

      {/* Internal App Interface Container */}
      <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden text-slate-100 flex flex-col md:flex-row min-h-[460px]">
        {/* Left / Mini Navigation Drawer */}
        <div className="w-full md:w-56 bg-slate-900/60 border-b md:border-b-0 md:border-r border-slate-800 p-3 flex flex-row md:flex-col justify-between shrink-0">
          <div>
            {/* App Brand */}
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-900/40">
                <span className="text-base font-black leading-none">⚽</span>
              </div>
              <div>
                <span className="text-sm font-black tracking-tight text-white block">
                  FÚTBOL<span className="text-emerald-400">+</span>
                </span>
                <span className="text-[10px] text-slate-400 block -mt-0.5">
                  Pro Coach Suite
                </span>
              </div>
            </div>

            {/* Quick App Modules Menu */}
            <nav className="hidden md:flex flex-col space-y-1 text-xs">
              <button className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/20 text-left">
                <span className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" /> Biblioteca
                </span>
                <span className="text-[10px] bg-emerald-500/30 px-1.5 py-0.5 rounded text-emerald-200">
                  1.000
                </span>
              </button>
              <button className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-slate-300 hover:bg-slate-800/60 transition text-left">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Filtros Avanzados
              </button>
              <button className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-slate-300 hover:bg-slate-800/60 transition text-left">
                <Bookmark className="w-3.5 h-3.5 text-rose-400" /> Mis Favoritos
              </button>
              <button className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-slate-300 hover:bg-slate-800/60 transition text-left">
                <Play className="w-3.5 h-3.5 text-amber-400" /> Mis Entrenamientos
              </button>
              <button className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-slate-300 hover:bg-slate-800/60 transition text-left">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Progreso
              </button>
            </nav>
          </div>

          {/* Quick Session Tracker in Sidebar */}
          <div className="hidden md:block pt-3 border-t border-slate-800/80">
            <div className="bg-slate-800/50 rounded-lg p-2.5 border border-slate-700/50">
              <div className="flex items-center justify-between mb-1 text-[11px]">
                <span className="text-slate-400 font-medium">Sesión Actual</span>
                <span className="text-emerald-400 font-bold">4/5 Tareas</span>
              </div>
              <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-emerald-500 rounded-full" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span>Duración: 65 min</span>
                <span className="text-white font-semibold">Listo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Search & Filter Bar */}
          <div className="p-3 border-b border-slate-800/80 bg-slate-900/40 flex flex-wrap items-center justify-between gap-2">
            <div className="relative flex-1 min-w-[180px]">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                value="Buscar entre 1.000 ejercicios..."
                className="w-full bg-slate-950/80 border border-slate-700/70 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-300 placeholder-slate-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium text-[11px]">
                Sub-14
              </span>
              <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium text-[11px] hidden sm:inline">
                Táctica
              </span>
              <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium text-[11px]">
                Alta Int.
              </span>
            </div>
          </div>

          {/* Drill Workspace View */}
          <div className="flex-1 p-3 sm:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 overflow-y-auto">
            {/* Tactical Canvas & Drill Focus */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              <div className="rounded-xl overflow-hidden border border-slate-700/70 relative group">
                <TacticalPitch type={activeDrill.fieldDiagramType} />
              </div>

              {/* Title & Metadata Badges */}
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {activeDrill.title}
                  </h3>
                  <button
                    onClick={(e) => toggleFavorite(activeDrill.id, e)}
                    className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 transition"
                  >
                    <Bookmark
                      className={`w-3.5 h-3.5 ${
                        savedFavorites[activeDrill.id]
                          ? "fill-rose-500 text-rose-500"
                          : "text-slate-400"
                      }`}
                    />
                  </button>
                </div>

                {/* Tags Bar */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-800/60 font-medium">
                    <Flame className="w-3 h-3 text-emerald-400" /> {activeDrill.intensity}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                    <Timer className="w-3 h-3 text-amber-400" /> {activeDrill.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                    <Users className="w-3 h-3 text-blue-400" /> {activeDrill.players}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                    {activeDrill.space}
                  </span>
                </div>

                {/* Objective */}
                <div className="mt-2.5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                  <p className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-0.5">
                    Objetivo Principal:
                  </p>
                  <p className="text-slate-300 line-clamp-2">{activeDrill.objective}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Drill List Selector */}
            <div className="lg:col-span-5 flex flex-col space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-0.5">
                <span>Ejercicios Relacionados</span>
                <span className="text-emerald-400 font-mono">1.000 Disp.</span>
              </div>

              <div className="space-y-2">
                {SAMPLE_DRILLS.map((drill, index) => {
                  const isSelected = index === selectedDrillIndex;
                  return (
                    <div
                      key={drill.id}
                      onClick={() => setSelectedDrillIndex(index)}
                      className={`p-2.5 rounded-xl border transition cursor-pointer text-left ${
                        isSelected
                          ? "bg-slate-800/90 border-emerald-500/60 shadow-md ring-1 ring-emerald-500/30"
                          : "bg-slate-900/50 border-slate-800 hover:bg-slate-800/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                          {drill.category}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                          <Timer className="w-2.5 h-2.5" /> {drill.duration}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white mt-1 line-clamp-1">
                        {drill.title}
                      </h4>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{drill.age}</span>
                        <span
                          className={`font-semibold ${
                            drill.intensity === "Alta"
                              ? "text-rose-400"
                              : "text-amber-400"
                          }`}
                        >
                          {drill.intensity}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pro Feature Prompt inside UI */}
              <div className="mt-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-800/50 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-300 text-xs">
                    Generador de Sesiones
                  </span>
                  <span className="text-[10px] bg-emerald-400 text-slate-950 font-extrabold px-1.5 py-0.5 rounded">
                    PRO
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">
                  Crea una sesión de 90 min en 1 clic ajustada a tu plantilla y objetivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
