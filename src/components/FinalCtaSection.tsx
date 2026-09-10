import React from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import { ArrowRight, Lock, Zap, ShieldCheck } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="cta-final"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-emerald-50/40 border-b border-slate-200/60 text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-5">
          <span>⚽ APP FÚTBOL+</span>
          <span className="w-1 h-1 rounded-full bg-emerald-600" />
          <span>ACCESO ILIMITADO A LA APLICACIÓN</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight font-display max-w-2xl mx-auto">
          LA APLICACIÓN QUE TRANSFORMARÁ TUS ENTRENAMIENTOS
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
          1.000 ejercicios interactivos + 10 bonos profesionales en tu móvil o computadora.
        </p>

        {/* Pricing & CTA Card */}
        <div className="mt-8 max-w-md mx-auto p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-emerald-900/5">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Precio Especial:
            </span>
            <span className="text-base text-slate-400 line-through font-semibold">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>
            <span className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
            </span>
          </div>

          <div className="mt-5">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-button"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-base tracking-wide shadow-md shadow-emerald-700/20 transition-all"
            >
              <span>ACCEDER A LA APP AHORA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-600" /> Pago Seguro
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-500" /> Acceso Inmediato
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> 7 Días de Garantía
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
