import React from "react";
import { BONUSES } from "../data/bonuses";
import { Gift, CheckCircle2 } from "lucide-react";

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonos"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-emerald-700" />
            <span>Valorados en más de US$ 120 — Hoy 100% Gratis</span>
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            Y ADEMÁS, 6 BONOS TOTALMENTE GRATIS
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Programas y guías complementarias que normalmente se venden por separado, incluidos hoy sin costo adicional al unirte al Reto.
          </p>
        </div>

        {/* 6 Bonuses Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between text-left group"
            >
              {/* Image banner with mockup */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-950 select-none">
                <img
                  src={bonus.imageUrl}
                  alt={bonus.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Bonus Number Badge */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-950/85 text-emerald-400 border border-emerald-500/30 shadow-xs">
                    {bonus.number}
                  </span>
                </div>

                {/* Free Badge */}
                <div className="absolute top-3 right-3 pointer-events-none">
                  <span className="text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-600 text-white shadow-md">
                    ¡GRATIS!
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-950 leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-700 mt-1">
                    {bonus.subtitle}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                {/* Price & Free Status */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400 font-semibold">
                      Precio individual:
                    </span>
                    <span className="text-xs text-slate-400 line-through font-bold">
                      {bonus.estimatedValue}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-black tracking-wider uppercase">
                      HOY: GRATIS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under bonuses */}
        <div className="mt-10 p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-lg shrink-0">
              🎁
            </div>
            <div>
              <p className="text-sm font-black text-slate-950">
                Los 6 bonos se desbloquean inmediatamente con tu acceso.
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Sin pagos mensuales, sin suscripciones ni costos ocultos.
              </p>
            </div>
          </div>

          <div className="shrink-0 font-display">
            <span className="text-xs font-bold text-slate-400 line-through mr-2">US$ 127,00</span>
            <span className="text-base font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-xl">
              100% INCLUIDO
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
