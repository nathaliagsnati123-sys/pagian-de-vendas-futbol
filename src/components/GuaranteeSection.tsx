import React from "react";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="garantia"
      className="py-16 md:py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          
          {/* Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-600 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-8 h-8 stroke-[2.5]" />
            <span className="text-base sm:text-lg font-black font-display leading-tight mt-0.5">
              7 DÍAS
            </span>
          </div>

          {/* Copy */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display">
              PRUÉBALO DURANTE 7 DÍAS
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prueba el Reto 30 Días y explora todo el contenido durante 7 días. Si consideras que no es lo que esperabas, solicita tu reembolso de forma simple dentro del período de garantía.
            </p>

            <div className="mt-3.5 pt-3 border-t border-slate-200/60 flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Riesgo 0%
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Reembolso garantizado
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
