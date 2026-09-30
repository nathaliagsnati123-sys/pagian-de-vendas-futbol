import React from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";

export const BeforeAfterSection: React.FC = () => {
  const beforePoints = [
    "Pasar horas buscando videos y ejercicios en redes",
    "No saber qué ejercicio elegir ni en qué orden hacerlo",
    "Llegar al campo a improvisar sin un objetivo claro",
    "Perder tiempo y desmotivarte por falta de constancia",
  ];

  const afterPoints = [
    "Abrir el plan del día directamente desde tu celular",
    "Saber con exactitud qué entrenar, series y repeticiones",
    "Entrenar con intensidad y propósito durante 20 minutos",
    "Marcar tu progreso día a día y ver mejoras reales con el balón",
  ];

  return (
    <section
      id="antes-despues"
      className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Pill */}
        <span className="text-xs uppercase font-extrabold tracking-wider text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs inline-block">
          El Cambio en tu Rutina
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
          DEJAR DE IMPROVISAR HACE TODA LA DIFERENCIA
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          La diferencia entre estancarte y progresar con el balón no es entrenar horas, sino tener un plan diario claro.
        </p>

        {/* Visual Cards Grid: Before vs After */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card ANTES */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-rose-200 shadow-sm relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-black uppercase tracking-wider mb-5 border border-rose-200/60">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              ANTES (SIN PLAN)
            </div>

            <ul className="space-y-3.5">
              {beforePoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-rose-600 font-bold">
              Resultado: Frustración y abandono rápido.
            </div>
          </div>

          {/* Card DESPUÉS */}
          <div className="p-6 sm:p-7 rounded-3xl bg-emerald-950 text-white border border-emerald-500/40 shadow-xl shadow-emerald-950/15 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-black uppercase tracking-wider mb-5 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              DESPUÉS (CON EL RETO 30 DÍAS)
            </div>

            <ul className="space-y-3.5">
              {afterPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-100 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-emerald-900 text-xs text-emerald-300 font-bold">
              Resultado: Constancia, claridad y técnica superior.
            </div>
          </div>

        </div>

        {/* Action Prompt */}
        <div className="mt-8">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
          >
            <span>Quiero empezar con el plan de 30 días hoy</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
