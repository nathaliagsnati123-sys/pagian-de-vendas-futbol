import React from "react";
import { CheckCircle2, Zap, ArrowRight, FolderKanban, Sliders, Smartphone } from "lucide-react";
import { CHECKOUT_URL } from "../config";
import { TacticalPitch } from "./TacticalPitch";

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="solucion"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300/60">
            La Solución en una Sola App
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            UNA APLICACIÓN COMPLETA PARA ENTRENAR MEJOR, EN TU BOLSILLO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Olvídate de perder horas buscando en PDFs desordenados o cargar con libretas de papel en la lluvia. La aplicación <strong>Fútbol+</strong> reúne 1.000 ejercicios y herramientas dinámicas directamente en tu teléfono móvil.
          </p>
        </div>

        {/* Feature Highlights with App Preview Card */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / Pillars */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <FolderKanban className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  App con 1.000 Ejercicios Interactivos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Buscador instantáneo por nombre o concepto táctico, con explicaciones paso a paso, objetivos y diagramas tácticos 2D.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Filtros Dinámicos en Tiempo Real
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Toca y filtra al segundo por categoría (Sub-8 a Senior), número de jugadores, intensidad y espacio disponible.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  App Instalable en el Celular
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Agrégala a tu pantalla de inicio con 1 toque. Funciona igual que una app nativa, rápida y lista para usar a pie de campo.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                <span>Acceder a la App Fútbol+ por solo US$ 7,90</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Real App Screenshot & Tactical Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 p-3 sm:p-4 shadow-xl border border-slate-800">
              {/* App bar inside preview */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-bold text-white">Fútbol+ en Acción</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                  Módulo de Sesiones
                </span>
              </div>

              {/* Tactical Board Simulation */}
              <TacticalPitch type="finishing" className="border-slate-800 shadow-md" />

              {/* Quick Drill Meta underneath */}
              <div className="mt-3 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    Finalización tras pared y desmarque al segundo palo
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Fase Principal
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Ideal para desarrollar la sincronización en los metros finales y la definición rápida con oposición real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
