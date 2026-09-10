import React from "react";
import { Search, Sliders, CheckSquare, Trophy } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Busca",
      subtitle: "Por palabra clave o concepto",
      description: "Escribe lo que quieres trabajar: contraataque, posesión, 1v1, centros o rondos.",
      icon: Search,
    },
    {
      number: "02",
      title: "Filtra",
      subtitle: "Parámetros exactos de tu equipo",
      description: "Ajusta por edad, nivel, número de jugadores, duración, intensidad y espacio disponible.",
      icon: Sliders,
    },
    {
      number: "03",
      title: "Elige",
      subtitle: "Visualiza el diagrama táctico",
      description: "Revisa la tarea con gráfico del campo, objetivos, reglas de provocación y variantes.",
      icon: CheckSquare,
    },
    {
      number: "04",
      title: "Entrena",
      subtitle: "Aplica en el césped con confianza",
      description: "Llévalo en tu teléfono móvil o imprímelo en ficha para dirigir una sesión profesional.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300/60">
            Paso a Paso
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            ENCUENTRA EL EJERCICIO QUE NECESITAS EN SEGUNDOS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Busca por objetivo, edad, nivel, número de jugadores, duración, intensidad y espacio.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600/30 font-display">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {step.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-400 font-medium">
                  <span>Paso {idx + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
