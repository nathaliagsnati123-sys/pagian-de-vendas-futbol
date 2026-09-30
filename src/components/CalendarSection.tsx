import React, { useState } from "react";
import { Clock, CheckCircle2, Calendar as CalendarIcon } from "lucide-react";

interface WeekInfo {
  weekTitle: string;
  daysRange: string;
  theme: string;
  days: { dayNumber: string; label: string }[];
}

const WEEKS_DATA: WeekInfo[] = [
  {
    weekTitle: "Semana 1",
    daysRange: "Días 01 al 07",
    theme: "Fundamentos y Control de Balón",
    days: [
      { dayNumber: "Día 01", label: "Entrenamiento 01" },
      { dayNumber: "Día 02", label: "Entrenamiento 02" },
      { dayNumber: "Día 03", label: "Entrenamiento 03" },
      { dayNumber: "Día 04", label: "Entrenamiento 04" },
      { dayNumber: "Día 05", label: "Entrenamiento 05" },
      { dayNumber: "Día 06", label: "Entrenamiento 06" },
      { dayNumber: "Día 07", label: "Entrenamiento 07" },
    ],
  },
  {
    weekTitle: "Semana 2",
    daysRange: "Días 08 al 14",
    theme: "Pase y Precisión",
    days: [
      { dayNumber: "Día 08", label: "Entrenamiento 08" },
      { dayNumber: "Día 09", label: "Entrenamiento 09" },
      { dayNumber: "Día 10", label: "Entrenamiento 10" },
      { dayNumber: "Día 11", label: "Entrenamiento 11" },
      { dayNumber: "Día 12", label: "Entrenamiento 12" },
      { dayNumber: "Día 13", label: "Entrenamiento 13" },
      { dayNumber: "Día 14", label: "Entrenamiento 14" },
    ],
  },
  {
    weekTitle: "Semana 3",
    daysRange: "Días 15 al 21",
    theme: "Regate y Conducción",
    days: [
      { dayNumber: "Día 15", label: "Entrenamiento 15" },
      { dayNumber: "Día 16", label: "Entrenamiento 16" },
      { dayNumber: "Día 17", label: "Entrenamiento 17" },
      { dayNumber: "Día 18", label: "Entrenamiento 18" },
      { dayNumber: "Día 19", label: "Entrenamiento 19" },
      { dayNumber: "Día 20", label: "Entrenamiento 20" },
      { dayNumber: "Día 21", label: "Entrenamiento 21" },
    ],
  },
  {
    weekTitle: "Semana 4",
    daysRange: "Días 22 al 30",
    theme: "Finalización y Potencia",
    days: [
      { dayNumber: "Día 22", label: "Entrenamiento 22" },
      { dayNumber: "Día 23", label: "Entrenamiento 23" },
      { dayNumber: "Día 24", label: "Entrenamiento 24" },
      { dayNumber: "Día 25", label: "Entrenamiento 25" },
      { dayNumber: "Día 26", label: "Entrenamiento 26" },
      { dayNumber: "Día 27", label: "Entrenamiento 27" },
      { dayNumber: "Día 28", label: "Entrenamiento 28" },
      { dayNumber: "Día 29", label: "Entrenamiento 29" },
      { dayNumber: "Día 30", label: "Entrenamiento 30" },
    ],
  },
];

export const CalendarSection: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);

  return (
    <section
      id="calendario"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs inline-block">
            El Plan Visual
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            30 DÍAS. 30 ENTRENAMIENTOS. UN PLAN CLARO.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Visualiza cómo se organiza tu programa. Cada día tienes una sesión lista para abrir y entrenar.
          </p>
        </div>

        {/* Calendar Interactive Container */}
        <div className="mt-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-8">
          
          {/* Week Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-slate-200 pb-5">
            {WEEKS_DATA.map((w, idx) => (
              <button
                key={w.weekTitle}
                onClick={() => setSelectedWeek(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all ${
                  selectedWeek === idx
                    ? "bg-emerald-600 text-white shadow-md font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/70 font-semibold"
                }`}
              >
                <div className="text-xs uppercase tracking-wider">{w.weekTitle}</div>
                <div className={`text-[11px] ${selectedWeek === idx ? "text-emerald-100" : "text-slate-500"}`}>
                  {w.daysRange}
                </div>
              </button>
            ))}
          </div>

          {/* Active Week Display without individual drill names */}
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
              <div>
                <span className="text-xs uppercase font-bold text-emerald-700">Enfoque de la semana:</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-950">
                  {WEEKS_DATA[selectedWeek].theme}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>~20 minutos por sesión</span>
              </div>
            </div>

            {/* Daily Sessions Grid (Structured days, no fake exercise names) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {WEEKS_DATA[selectedWeek].days.map((item) => (
                <div
                  key={item.dayNumber}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-black text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
                      {item.dayNumber}
                    </span>
                    <span className="font-bold text-slate-800">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>20 min</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer reassurance note */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Cada sesión indica series, repeticiones y diagramas listos.</span>
              <span className="font-bold text-emerald-700">Listo para entrenar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
