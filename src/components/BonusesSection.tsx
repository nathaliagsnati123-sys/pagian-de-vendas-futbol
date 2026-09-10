import React from "react";
import { BONUSES } from "../data/bonuses";
import { Gift } from "lucide-react";

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
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between text-left ${
                bonus.isSpecial
                  ? "bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/20"
                  : "bg-slate-50 hover:bg-white text-slate-900 border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
              }`}
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded-md ${
                      bonus.isSpecial
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {bonus.number}
                  </span>
                  <span
                    className={`text-[11px] font-bold ${
                      bonus.isSpecial ? "text-emerald-300" : "text-slate-400 line-through"
                    }`}
                  >
                    {bonus.isSpecial ? "DESTACADO" : `Valor: ${bonus.estimatedValue}`}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-base sm:text-lg font-bold leading-snug ${
                    bonus.isSpecial ? "text-white" : "text-slate-950"
                  }`}
                >
                  {bonus.title}
                </h3>

                <p
                  className={`text-xs font-semibold mt-0.5 ${
                    bonus.isSpecial ? "text-emerald-300" : "text-emerald-700"
                  }`}
                >
                  {bonus.subtitle}
                </p>

                {/* Description */}
                <p
                  className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                    bonus.isSpecial ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {bonus.description}
                </p>
              </div>

              {/* Tag & Gratuitous Label */}
              <div
                className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                  bonus.isSpecial
                    ? "border-emerald-800/80 text-emerald-300"
                    : "border-slate-200/60 text-emerald-700"
                }`}
              >
                <span>{bonus.tag}</span>
                <span className="uppercase text-[11px] bg-emerald-500/15 px-2 py-0.5 rounded text-emerald-400">
                  100% Gratis Hoy
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
