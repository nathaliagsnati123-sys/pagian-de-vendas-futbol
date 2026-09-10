import React from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import { AppMockup } from "./AppMockup";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Tablet,
  Laptop,
  CheckCircle2,
  Lock,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-emerald-50/25 to-slate-50 border-b border-slate-200/60"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Product Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-black tracking-tight mb-5 shadow-xs animate-fade-in">
          <Smartphone className="w-4 h-4 text-emerald-700" />
          <span>APLICACIÓN INTERACTIVA DE FÚTBOL</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] max-w-4xl mx-auto font-display">
          LA APLICACIÓN CON{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700">
            1.000 EJERCICIOS
          </span>{" "}
          PARA TUS ENTRENAMIENTOS DE FÚTBOL
        </h1>

        {/* Hero Product Image */}
        <div className="mt-6 mb-4 max-w-xl mx-auto px-4">
          <img
            src="https://i.ibb.co/zWfRrntF/Chat-GPT-Image-10-de-set-de-2026-14-19-20.png"
            alt="Aplicación Fútbol+ 1.000 Ejercicios"
            className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 mx-auto"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Encuentra, filtra por edad y crea sesiones completas en segundos desde tu teléfono móvil, tablet o computadora con la app más completa del mercado.
        </p>

        {/* Highlight Badges (Devices + Content) */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs font-bold text-slate-800 text-xs sm:text-sm">
            <div className="flex items-center gap-1 text-emerald-600">
              <Smartphone className="w-4 h-4" />
              <Tablet className="w-4 h-4" />
              <Laptop className="w-4 h-4" />
            </div>
            <span>CELULAR, TABLET Y COMPUTADORA</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs font-bold text-slate-800 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>1.000 EJERCICIOS INTERACTIVOS</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 shadow-xs font-bold text-emerald-900 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>+10 BONOS EN LA APP</span>
          </div>
        </div>

        {/* Pricing Block & Primary CTA */}
        <div className="mt-8 max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-200/50">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Oferta Especial Hoy:
            </span>
            <span className="text-sm sm:text-base text-slate-400 line-through font-semibold">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
            </span>
          </div>

          <div className="mt-3.5">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-button"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-base tracking-wide shadow-md shadow-emerald-700/25 transition-all"
            >
              <span>COMPRAR AHORA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] font-semibold text-slate-500">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-600" /> Pago 100% Seguro
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-500" /> Acceso Inmediato
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> Garantía Total
            </span>
          </div>
        </div>


        {/* Product Visual Mockup Container (Product is the Protagonist!) */}
        <div className="mt-10 sm:mt-14">
          <div className="text-center mb-4">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              Vista de la aplicación
            </span>
          </div>

          <AppMockup />

          <p className="mt-4 text-xs text-slate-600 font-semibold">
            📱 <strong>Celular</strong> (iPhone y Android) · 📱 <strong>Tablet</strong> (iPad y Android) · 💻 <strong>Computadora</strong> (Windows, Mac y Linux)
          </p>
        </div>
      </div>
    </section>
  );
};
