import React from "react";
import { Infinity as InfinityIcon, CheckCircle2 } from "lucide-react";

export const ExercisesSection: React.FC = () => {
  const mainCategories = [
    { title: "Técnica Individual", desc: "Controles, fintas y definición" },
    { title: "Pase y Posesión", desc: "Paredes, rondos y apoyos" },
    { title: "Táctica y Posicionamiento", desc: "Líneas, presión y transiciones" },
    { title: "Fútbol Base y Formativo", desc: "Tareas adaptadas por nivel" },
    { title: "Preparación Física con Balón", desc: "Resistencia, agilidad y potencia" },
    { title: "Espacios Reducidos", desc: "Partidos modificados y 1 vs 1" },
  ];

  return (
    <section
      id="ejercicios"
      className="py-16 md:py-24 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs inline-block">
            Variedad Continua
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            Y CUANDO TERMINES LOS 30 DÍAS, PUEDES SEGUIR.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            El Reto te da el camino inicial. Además, tienes <strong className="text-slate-900 font-bold">más de 1.000 ejercicios listos para poder entrenar</strong> y seguir mejorando a tu propio ritmo.
          </p>
        </div>

        {/* Clean, compact main categories without individual quantities */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {mainCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-400 transition text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{cat.title}</span>
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-200/50 text-[11px] font-semibold text-emerald-700">
                Categoría disponible
              </div>
            </div>
          ))}
        </div>

        {/* Short reassurance banner */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-100 border border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <InfinityIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Ejercicios clasificados con diagramas claros y explicaciones directas.
            </span>
          </div>
          <span className="font-bold text-emerald-800">
            Acceso de por vida incluido
          </span>
        </div>

      </div>
    </section>
  );
};
