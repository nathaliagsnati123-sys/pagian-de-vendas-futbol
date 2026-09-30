import React from "react";
import { X, Check } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const withoutPlan = [
    "Buscar ejercicios en internet y redes sociales",
    "No saber cuáles elegir ni por dónde empezar",
    "Llegar a la cancha a improvisar sin un plan claro",
    "Perder tiempo valioso en cada entrenamiento",
    "No mantener constancia y abandonar a los pocos días",
  ];

  const withReto = [
    "Abrir el entrenamiento del día en tu celular",
    "Ver qué toca exactamente en pocos segundos",
    "Entrenar concentrado durante unos 20 minutos",
    "Marcar tu progreso del día con satisfacción",
    "Volver mañana con el siguiente paso ya preparado",
  ];

  return (
    <section
      id="problema"
      className="py-16 md:py-24 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Central Manifest Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-extrabold tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200 shadow-2xs inline-block">
            El Problema Que Resuelve
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
            TÚ QUIERES ENTRENAR. NOSOTROS TE DECIMOS QUÉ ENTRENAR.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            La mayoría de personas no fallan por falta de ganas, sino por no saber qué hacer cada vez que tienen un balón enfrente.
          </p>
        </div>

        {/* Visual Comparison Grid: SIN PLAN vs CON EL RETO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* SIN PLAN */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                SIN PLAN (LO QUE TE FRENA)
              </div>

              <ul className="space-y-3.5">
                {withoutPlan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-rose-200/60 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs text-rose-700 font-bold">
              Consecuencia: Dudas, pérdida de tiempo e improvisación.
            </div>
          </div>

          {/* CON EL RETO */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-emerald-500/50 shadow-xl shadow-slate-950/20 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-black uppercase tracking-wider mb-5 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                CON EL RETO 30 DÍAS
              </div>

              <ul className="space-y-3.5">
                {withReto.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-emerald-100 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-bold">
              Resultado: Claridad total, constancia y 20 minutos de acción.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
