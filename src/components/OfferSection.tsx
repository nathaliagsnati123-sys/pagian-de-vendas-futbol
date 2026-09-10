import React from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export const OfferSection: React.FC = () => {
  return (
    <section
      id="oferta"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Oferta Especial por Tiempo Limitado
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            TODO ESTO POR MUCHO MENOS DE LO QUE IMAGINAS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Acceso digital a Fútbol+ + 1.000 ejercicios + 10 bonos profesionales.
          </p>
        </div>

        {/* High Conversion Pricing Box */}
        <div className="mt-12 rounded-3xl bg-gradient-to-b from-slate-50 to-white border-2 border-emerald-600/30 p-6 sm:p-10 shadow-xl shadow-emerald-950/5 relative text-center">
          {/* Top Pill */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-sm">
            Acceso Completo a la App Fútbol+
          </div>

          {/* Pricing Stack */}
          <div className="mt-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Precio Habitual
            </span>
            <span className="text-xl sm:text-2xl text-slate-400 line-through font-bold">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>

            <div className="mt-2 flex items-baseline justify-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                {PRODUCT_CONFIG.currency}
              </span>
              <span className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight font-display">
                {PRODUCT_CONFIG.specialPrice}
              </span>
            </div>
            <span className="text-xs font-semibold text-emerald-700 block mt-1">
              Pago único de por vida · Sin mensualidades · App siempre disponible
            </span>
          </div>

          {/* Feature Highlights inside Offer */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left text-xs sm:text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>1.000 ejercicios interactivos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>10 bonos incluidos en la app</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Buscador y filtros en tiempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Celular, Tablet y Computadora</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <div className="mt-8 max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="offer-cta-button"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-black text-lg tracking-wide shadow-lg shadow-emerald-700/25 transition-all"
            >
              <span>QUIERO LA APP FÚTBOL+</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Checkout Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Entrega Digital Inmediata
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Satisfacción Garantizada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
