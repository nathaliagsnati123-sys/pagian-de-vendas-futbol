import React from "react";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../config";

interface AudienceItem {
  emoji: string;
  title: string;
  description: string;
}

export const TargetAudienceSection: React.FC = () => {
  const audiences: AudienceItem[] = [
    {
      emoji: "⚽",
      title: "Entrenadores",
      description: "Para planificar sesiones variadas, dinámicas y con progresión pedagógica sin quedarse sin ideas.",
    },
    {
      emoji: "👨‍🏫",
      title: "Profesores de fútbol",
      description: "Para disponer de ejercicios explicados con claridad, objetivos específicos y variantes adaptables.",
    },
    {
      emoji: "🏟️",
      title: "Academias y escuelas",
      description: "Para unificar criterios metodológicos y compartir ejercicios estructurados entre todos los formadores.",
    },
    {
      emoji: "👦",
      title: "Entrenadores de fútbol base",
      description: "Para trabajar la motricidad, técnica y juego en equipo con actividades adaptadas a cada franja de edad.",
    },
    {
      emoji: "🏃",
      title: "Jugadores",
      description: "Para realizar entrenamientos complementarios individuales o en parejas y perfeccionar su rendimiento.",
    },
    {
      emoji: "👥",
      title: "Equipos amateur",
      description: "Para aprovechar al máximo cada entrenamiento semanal con tareas realistas y ejercicios motivantes.",
    },
  ];

  return (
    <section
      id="para-quien"
      className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-300/80">
            Perfiles
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            ¿PARA QUIÉN ES FÚTBOL+?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-semibold max-w-2xl mx-auto leading-relaxed">
            Fútbol+ está pensado para quienes quieren tener más recursos para planificar y realizar sus entrenamientos de fútbol.
          </p>
        </div>

        {/* 6 Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all text-left flex items-start gap-4 group"
            >
              <span className="text-3xl sm:text-4xl shrink-0" role="img" aria-label={item.title}>
                {item.emoji}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intermedio */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-md shadow-emerald-700/20 transition"
          >
            <span>QUIERO ACCEDER A FÚTBOL+ AHORA</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
