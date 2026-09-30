import React from "react";
import plan30DiasImg from "../assets/images/bonus_plan30dias_mockup_1789598985075.jpg";
import { CheckCircle2, Clock, Check } from "lucide-react";

export const WhatIsRetoSection: React.FC = () => {
  // Representation of the 30 daily structured sessions
  const daysList = Array.from({ length: 30 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `DÍA ${num}`;
  });

  return (
    <section
      id="que-es-el-reto"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs inline-block">
            El Producto Principal
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            ¿QUÉ ES EL RETO 30 DÍAS?
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Es un <strong>plan de entrenamiento de fútbol de 30 días</strong>. Cada día tienes una sesión preparada para trabajar diferentes aspectos de tu juego.
          </p>

          <p className="mt-2 text-sm sm:text-base text-emerald-800 font-bold">
            No tienes que elegir los ejercicios. El plan ya está preparado para ti.
          </p>
        </div>

        {/* Visual Showcase: Mockup + Visual 30-Day Grid */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Mockup Image */}
            <div className="md:col-span-5 text-center">
              <div className="relative mx-auto max-w-[240px] sm:max-w-[270px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950">
                <img
                  src={plan30DiasImg}
                  alt="Plan del Reto 30 Días de Fútbol"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-3 bg-slate-900 text-white text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>1 SESIÓN POR DÍA · 20 MIN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual 30 Days Grid */}
            <div className="md:col-span-7">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="text-xs uppercase tracking-wider font-extrabold text-slate-800">
                  ESTRUCTURA COMPLETA DEL RETO
                </span>
                <span className="text-xs font-bold text-emerald-700">
                  DÍA 01 → DÍA 30
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Tú no tienes que pensar qué toca cada mañana. Cada recuadro representa una sesión completa con objetivos, tareas y repeticiones.
              </p>

              {/* 30 Days Tiles */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
                {daysList.map((dayText, idx) => (
                  <div
                    key={dayText}
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-colors flex items-center justify-center gap-1 text-[11px] font-bold text-slate-800"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{dayText}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>✓ Sin improvisar</span>
                <span>✓ Con tu balón</span>
                <span>✓ En cualquier espacio</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
