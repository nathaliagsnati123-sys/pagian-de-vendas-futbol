import React from "react";
import { Clock, Shuffle, Layers, Users2 } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Shuffle,
      title: "Falta de variedad en los entrenamientos",
      description:
        "Repetir siempre los mismos ejercicios aburre a tus jugadores y limita su desarrollo táctico y técnico.",
    },
    {
      icon: Clock,
      title: "Demasiado tiempo buscando ejercicios",
      description:
        "Horas perdidas navegando en redes sociales o páginas desorganizadas intentando encontrar una tarea adecuada.",
    },
    {
      icon: Layers,
      title: "Dificultad para organizar sesiones",
      description:
        "Complicaciones para enlazar el calentamiento con la fase principal y estructurar un entrenamiento coherente.",
    },
    {
      icon: Users2,
      title: "Falta de ejercicios adaptados a diferentes edades y niveles",
      description:
        "Tareas demasiado complejas o demasiado sencillas que no encajan con la realidad ni los objetivos de tu equipo.",
    },
  ];

  return (
    <section id="problema" className="py-16 md:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            El Desafío Diario del Entrenador
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            ¿PASAS DEMASIADO TIEMPO BUSCANDO EJERCICIOS PARA TUS ENTRENAMIENTOS?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Preparar sesiones de calidad cada semana no debería ser un dolor de cabeza ni quitarte horas de tu tiempo libre.
          </p>
        </div>

        {/* 4 Problems Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200/60">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
