import React from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Tablet,
  Laptop,
  Lock,
  Sparkles,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 border-b border-slate-200/60"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Product Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>APLICACIÓN OFICIAL FÚTBOL+</span>
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-snug font-display max-w-3xl mx-auto">
          {PRODUCT_CONFIG.tagline}
        </h1>

        {/* Subtitle / Positioning */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          {PRODUCT_CONFIG.positioning}
        </p>

        {/* Product Image Below the Title */}
        <div className="mt-6 sm:mt-8 max-w-sm sm:max-w-md md:max-w-lg mx-auto relative">
          <img
            src="https://i.ibb.co/zWfRrntF/Chat-GPT-Image-10-de-set-de-2026-14-19-20.png"
            alt="Aplicación Fútbol+ 1.000 Ejercicios"
            className="w-full h-auto object-contain mx-auto drop-shadow-2xl rounded-2xl"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Device Compatibility */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <Smartphone className="w-4 h-4 text-emerald-600" /> Celular
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Tablet className="w-4 h-4 text-emerald-600" /> Tablet
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Laptop className="w-4 h-4 text-emerald-600" /> Computadora
          </span>
        </div>

        {/* Key Highlights */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-slate-700">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-xs">
            ⚽ 1.000+ Ejercicios
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-xs">
            📊 16 Categorías
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 shadow-xs">
            🎁 10 Bonos Exclusivos
          </span>
        </div>

        {/* Pricing Block & Primary CTA */}
        <div className="mt-8 max-w-md mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Oferta Especial Hoy:
            </span>
            <span className="text-base text-slate-400 line-through font-semibold">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>
            <span className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
            </span>
          </div>
          <span className="text-xs font-semibold text-emerald-700 block mt-1">
            Pago único de por vida · Sin mensualidades
          </span>

          <div className="mt-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-button"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-md shadow-emerald-700/25 transition-all"
            >
              <span>COMPRAR AHORA</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-3.5 flex items-center justify-center gap-4 text-[11px] font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Pago 100% Seguro
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Acceso Inmediato
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantía 7 Días
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
