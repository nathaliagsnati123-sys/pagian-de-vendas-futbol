import React from "react";
import {
  ShieldCheck,
  Lock,
  Zap,
  ArrowRight,
  Smartphone,
  Laptop,
  Tablet,
  CheckCircle2,
  Infinity as InfinityIcon,
  CreditCard,
  Ban,
} from "lucide-react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";

export const ValueComparisonSection: React.FC = () => {
  return (
    <section
      id="lo-que-incluye"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs inline-block">
            Oferta Completa
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            TODO INCLUIDO POR SOLO US$ 7,90
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Empieza con el Reto 30 Días y quédate con todo el contenido de por vida.
          </p>
        </div>

        {/* Main Content Box: Centered Card */}
        <div className="mt-12 max-w-xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 md:p-10 text-white text-center">
          <div>
            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full mb-4">
              RETO 30 DÍAS + BIBLIOTECA + 6 BONOS
            </span>

            {/* Product Cover Image */}
            <div className="relative mx-auto max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src="https://i.ibb.co/zWfRrntF/Chat-GPT-Image-10-de-set-de-2026-14-19-20.png"
                alt="Reto 30 Días Fútbol y Contenido Completo"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* What's included checklist */}
            <div className="mt-6 text-left space-y-2.5 text-xs sm:text-sm text-slate-200 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Reto 30 Días — Fútbol:</strong> plan estructurado de 20 min al día</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>+1.000 Ejercicios:</strong> biblioteca completa para continuar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Entrenamientos por Objetivo:</strong> Control, Pase, Regate y más</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>6 Bonos Oficiales:</strong> sesiones listas, retos específicos y físico</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Acceso de por vida:</strong> sin mensualidades ni renovaciones</span>
              </div>
            </div>

            {/* Device compatibility chips */}
            <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Celular
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Tablet className="w-3.5 h-3.5 text-emerald-400" /> Tablet
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Laptop className="w-3.5 h-3.5 text-emerald-400" /> Computadora
              </span>
            </div>
          </div>

          {/* Lifetime Access Clarification Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              <span className="flex items-center gap-1.5">
                <InfinityIcon className="w-4 h-4 text-emerald-400" />
                ACCESO DE POR VIDA
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                PAGO ÚNICO
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Ban className="w-4 h-4 text-emerald-400" />
                SIN MENSUALIDADES
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-emerald-100 font-semibold">
              Los 30 días son el programa. Tu acceso no vence.
            </p>
          </div>

          {/* Price Callout */}
          <div className="mt-6 pt-6 border-t border-slate-800">
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
              <span className="text-xs font-bold text-emerald-200/90 uppercase">
                / Pago único
              </span>
            </div>

            <p className="text-[11px] text-slate-400 mt-1">
              PAGO ÚNICO · ACCESO DE POR VIDA · SIN MENSUALIDADES
            </p>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-900/40 transition"
            >
              <span>{PRODUCT_CONFIG.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* 7 Days Guarantee Badge Reminder */}
            <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Garantía de 7 días:</strong> Si no es para ti, solicita tu reembolso sin complicaciones.
              </span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" /> Pago 100% Seguro
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Acceso Inmediato
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 7 Días de Prueba
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
