import React from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import { ArrowRight, Lock, Zap, CheckCircle2 } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="cta-final"
      className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-emerald-50/40 border-b border-slate-200/60 text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full mb-4">
          Acceso Digital Inmediato
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight font-display max-w-2xl mx-auto">
          PREPARA TUS PRÓXIMOS ENTRENAMIENTOS CON FÚTBOL+
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 font-semibold max-w-xl mx-auto leading-relaxed">
          Accede ahora a más de 1.000 ejercicios organizados y a los 10 bonos profesionales.
        </p>

        {/* Card con Precio y Botón Principal */}
        <div className="mt-8 max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-emerald-900/10">
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-sm text-slate-400 line-through font-semibold">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>
            <span className="text-4xl sm:text-5xl font-black text-slate-950 font-display">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
            </span>
          </div>

          <p className="mt-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
            Acceso digital inmediato
          </p>

          <div className="mt-6">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-button"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-black text-base tracking-wide shadow-md shadow-emerald-700/20 transition-all text-center"
            >
              <span>⚽ ACCEDER A FÚTBOL+ AHORA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Pago seguro vía Hotmart
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Acceso digital inmediato
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
