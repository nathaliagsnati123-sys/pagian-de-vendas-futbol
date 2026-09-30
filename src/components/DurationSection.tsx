import React from "react";
import { Clock, Check } from "lucide-react";

export const DurationSection: React.FC = () => {
  return (
    <section
      id="duracion"
      className="py-16 md:py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Clock Badge */}
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-300 shadow-2xs">
          <Clock className="w-6 h-6 stroke-[2.5]" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
          SOLO NECESITAS 20 MINUTOS AL DÍA.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
          No necesitas pasar horas entrenando. El objetivo es darte una sesión clara y práctica que puedas completar en aproximadamente 20 minutos.
        </p>

        {/* 3 Short Feature Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
              <Check className="w-3.5 h-3.5" />
              <span>Fácil de encajar</span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              20 minutos antes de tu jornada, por la tarde o antes de un partido.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
              <Check className="w-3.5 h-3.5" />
              <span>Alta concentración</span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Tareas directas con el balón sin pausas innecesarias ni desvíos.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1">
              <Check className="w-3.5 h-3.5" />
              <span>Constancia real</span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Un formato sostenible que se puede mantener día tras día.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
