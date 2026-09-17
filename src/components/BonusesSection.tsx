import React from "react";
import { BONUSES } from "../data/bonuses";
import { Gift, CheckCircle2 } from "lucide-react";

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonos"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>Valor Añadido Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            Y ADEMÁS, RECIBE 10 BONOS PROFESIONALES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Herramientas complementarias valoradas en más de US$ 190,00 que recibes totalmente gratis con tu acceso a Fútbol+.
          </p>
        </div>

        {/* 10 Bonuses Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className={`rounded-3xl border overflow-hidden transition-all flex flex-col justify-between text-left shadow-xs ${
                bonus.isSpecial
                  ? "bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white border-emerald-500/60 shadow-xl ring-2 ring-emerald-500/30"
                  : "bg-slate-50 text-slate-900 border-slate-200/90"
              }`}
            >
              {/* Product Mockup Image Banner (1:1 Ratio - Static presentation) */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-950 select-none">
                <img
                  src={bonus.imageUrl}
                  alt={bonus.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span
                    className={`text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md backdrop-blur-md shadow-sm ${
                      bonus.isSpecial
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-slate-950/80 text-emerald-400 border border-emerald-500/30"
                    }`}
                  >
                    {bonus.number}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-md ${
                      bonus.isSpecial
                        ? "bg-amber-400 text-slate-950 font-black"
                        : "bg-slate-950/80 text-slate-300 line-through border border-slate-700/50"
                    }`}
                  >
                    {bonus.isSpecial ? "★ DESTACADO" : `Valor: ${bonus.estimatedValue}`}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        bonus.isSpecial
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {bonus.tag}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        bonus.isSpecial ? "text-emerald-300/80" : "text-slate-400"
                      }`}
                    >
                      Bono Digital
                    </span>
                  </div>

                  <h3
                    className={`text-base sm:text-lg font-black leading-snug ${
                      bonus.isSpecial ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {bonus.title}
                  </h3>

                  <p
                    className={`text-xs font-semibold mt-1 ${
                      bonus.isSpecial ? "text-emerald-300" : "text-emerald-700"
                    }`}
                  >
                    {bonus.subtitle}
                  </p>

                  <p
                    className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                      bonus.isSpecial ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {bonus.description}
                  </p>
                </div>

                {/* Bottom Bar */}
                <div
                  className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                    bonus.isSpecial
                      ? "border-emerald-800/80 text-emerald-300"
                      : "border-slate-200/70 text-emerald-700"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Acceso en la App
                  </span>
                  <span
                    className={`uppercase text-[11px] px-2.5 py-1 rounded-md font-black shadow-xs ${
                      bonus.isSpecial
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    100% Gratis Hoy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
