import React from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import { ArrowRight, ShieldCheck, Lock, Zap } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="cta-final"
      className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden text-center border-b border-slate-800"
    >
      {/* Decorative radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
          ¿LISTO PARA DEJAR DE IMPROVISAR?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-extrabold text-emerald-400 font-display">
          TU PLAN DE 30 DÍAS YA ESTÁ PREPARADO.
        </p>

        <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
          Tú solo tienes que abrir el entrenamiento de hoy y empezar.
        </p>

        {/* CTA Button */}
        <div className="mt-8 max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-button"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black text-base sm:text-lg tracking-wide shadow-xl shadow-emerald-500/20 transition-all"
          >
            <span>{PRODUCT_CONFIG.ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Guarantee and security note */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Pago único de {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Acceso de por vida
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            7 Días de garantía
          </span>
        </div>

      </div>
    </section>
  );
};
