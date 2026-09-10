import React from "react";
import { ShieldCheck, CheckCircle2, RotateCcw, Lock } from "lucide-react";

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="garantia"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          
          {/* Guarantee Seal / Icon */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex flex-col items-center justify-center shrink-0 shadow-lg shadow-emerald-600/20 ring-4 ring-emerald-100">
            <ShieldCheck className="w-10 h-10 stroke-[2]" />
            <span className="text-xl sm:text-2xl font-black font-display leading-none mt-1">
              7 DÍAS
            </span>
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-100">
              DE GARANTÍA
            </span>
          </div>

          {/* Guarantee Copy */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
              <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
              <span>Garantía Incondicional de 7 Días</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-display">
              PRUEBA FÚTBOL+ DURANTE 7 DÍAS SIN NINGÚN RIESGO
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Tienes <strong>7 días completos</strong> desde el momento de tu compra para acceder a la aplicación, probar los 1.000 ejercicios y revisar todos los 10 bonos en tus entrenamientos. Si por cualquier motivo no estás 100% satisfecho, te devolvemos la totalidad de tu dinero sin preguntas ni complicaciones.
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Riesgo 0% para ti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Reembolso fácil</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Plataforma 100% Segura</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
