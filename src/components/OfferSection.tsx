import React from "react";
import offerBundleImg from "../assets/images/oferta_bundle_completo_1790777854659.jpg";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import {
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  ShieldCheck,
} from "lucide-react";

export const OfferSection: React.FC = () => {
  const inclusions = [
    "⚽ Reto 30 Días — Fútbol estructurado día a día",
    "📅 30 entrenamientos guiados paso a paso",
    "⏱️ Sesiones de aproximadamente 20 minutos",
    "⚽ Más de 1.000 ejercicios listos para continuar",
    "🎯 Entrenamientos clasificados por objetivo",
    "🎁 6 Bonos de especialización incluidos (Gratis)",
    "🔒 Acceso ilimitado y de por vida incluido",
  ];

  return (
    <section
      id="oferta"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs inline-block">
          Oferta Completa
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
          EMPIEZA CON TU PLAN DE 30 DÍAS
        </h2>

        <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
          Recibe acceso inmediato al programa completo, los ejercicios y todos los bonos con un único pago.
        </p>

        {/* Central Pricing Card with Visual Artwork */}
        <div className="mt-10 max-w-xl mx-auto rounded-3xl bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl text-left">
          
          {/* Bundle Mockup Artwork */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900 select-none">
            <img
              src={offerBundleImg}
              alt="Reto 30 Días Fútbol — Paquete Completo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-xs">
                PAQUETE COMPLETO
              </span>
            </div>

            <div className="absolute top-4 right-4">
              <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 shadow-md">
                ACCESO DE POR VIDA
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3.5 py-1 rounded-full">
                TODO INCLUIDO EN TU ACCESO
              </span>
            </div>

            {/* Checklist */}
            <div className="space-y-3 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-200">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Callout */}
            <div className="mt-6 pt-6 border-t border-slate-800 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Precio regular:
                </span>
                <span className="text-base text-slate-400 line-through font-semibold">
                  {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
                </span>
              </div>

              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-display">
                  {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
                </span>
                <span className="text-xs font-bold text-emerald-200 uppercase">
                  / Pago único
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-1 font-semibold">
                Pago único · Sin mensualidades · Acceso de por vida
              </p>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="offer-cta-button"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black text-base sm:text-lg tracking-wide shadow-lg shadow-emerald-900/40 transition"
              >
                <span>{PRODUCT_CONFIG.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" /> Pago Seguro
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Acceso Inmediato
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Garantía 7 Días
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
