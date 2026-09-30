import React from "react";

interface Objective {
  icon: string;
  title: string;
  desc: string;
}

const OBJECTIVES: Objective[] = [
  { icon: "⚽", title: "Control", desc: "Primer toque orientado y amortiguación aérea" },
  { icon: "🔥", title: "Regate", desc: "Fintas, cambios de ritmo y desborde en 1 vs 1" },
  { icon: "🎯", title: "Pase", desc: "Precisión corta, media y circulación" },
  { icon: "🥅", title: "Finalización", desc: "Definición frente al arco y remate" },
  { icon: "🏃", title: "Velocidad", desc: "Aceleración en espacios cortos y agilidad" },
  { icon: "🧠", title: "Coordinación", desc: "Juego de pies, apoyos y equilibrio dinámico" },
  { icon: "🦶", title: "Pierna Débil", desc: "Pase y golpeo con la pierna no dominante" },
];

export const ObjectivesSection: React.FC = () => {
  return (
    <section
      id="objetivos"
      className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-700 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs inline-block">
            Enfoque Específico
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
            ¿QUIERES TRABAJAR ALGO ESPECÍFICO?
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Además del Reto 30 Días, también puedes elegir <strong>entrenamientos por objetivo</strong> cuando quieras potenciar un aspecto particular de tu juego.
          </p>
        </div>

        {/* 7 Objectives Cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {OBJECTIVES.map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-xs transition text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-bold text-emerald-700">
                Sesiones guiadas
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
