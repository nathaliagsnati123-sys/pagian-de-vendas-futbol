import React from "react";
import heroBundleImg from "../assets/images/hero_bundle_offer_1790777759059.jpg";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Tablet,
  Laptop,
  Lock,
  Calendar,
  Clock,
  Infinity as InfinityIcon,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50 border-b border-slate-200/60"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Product Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-black uppercase tracking-wider mb-4 shadow-xs">
          <span>{PRODUCT_CONFIG.heroPill}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-snug font-display max-w-3xl mx-auto">
          {PRODUCT_CONFIG.tagline}
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          {PRODUCT_CONFIG.subheadline}
        </p>

        {/* Badge: Reto de 30 días + Acceso de por vida */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-emerald-300 text-xs sm:text-sm font-semibold shadow-xs">
          <InfinityIcon className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{PRODUCT_CONFIG.badgeLifetime}</span>
        </div>

        {/* Mockup del Reto 30 Días y Oferta Completa */}
        <div className="mt-8 max-w-2xl sm:max-w-3xl mx-auto relative group">
          <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-emerald-950/15 bg-slate-950">
            <img
              src={heroBundleImg}
              alt="Reto 30 Días Fútbol — Oferta Completa con App y Bonos"
              className="w-full h-auto object-cover mx-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Dispositivos compatibles */}
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

        {/* Features directos */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-slate-800">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
            <Calendar className="w-4 h-4 text-emerald-600" /> 30 Entrenamientos
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
            <Clock className="w-4 h-4 text-emerald-600" /> 20 Minutos al Día
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-xs">
            <InfinityIcon className="w-4 h-4 text-emerald-700" /> Acceso de Por Vida
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
            💳 Pago Único
          </span>
        </div>

        {/* Pricing Block & Primary CTA */}
        <div className="mt-8 max-w-md mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              Oferta Actual:
            </span>
            <span className="text-base text-slate-400 line-through font-semibold">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>
            <span className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
            </span>
          </div>
          <span className="text-xs font-semibold text-emerald-700 block mt-1">
            Pago único · Sin mensualidades · Acceso de por vida
          </span>

          <div className="mt-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-button"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-md shadow-emerald-700/25 transition-all"
            >
              <span>{PRODUCT_CONFIG.ctaText}</span>
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
