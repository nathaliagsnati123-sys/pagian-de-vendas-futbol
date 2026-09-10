import React from "react";
import {
  Zap,
  Dumbbell,
  HeartPulse,
  Flame,
  Activity,
  Gauge,
  Workflow,
  Shuffle,
  Award,
  CheckCircle2,
} from "lucide-react";
import { CHECKOUT_URL } from "../config";

export const PhysicalPrepSection: React.FC = () => {
  const physicalPillars = [
    {
      name: "Velocidad",
      description: "Sprints cortos, reactividad y velocidad con y sin balón.",
      icon: Zap,
    },
    {
      name: "Fuerza",
      description: "Fuerza funcional, tren inferior y prevención de lesiones.",
      icon: Dumbbell,
    },
    {
      name: "Resistencia",
      description: "Capacidad aeróbica e intermitente de alta intensidad.",
      icon: HeartPulse,
    },
    {
      name: "Potencia",
      description: "Saltos, duelos físicos y aceleración explosiva en el campo.",
      icon: Flame,
    },
    {
      name: "Agilidad",
      description: "Fluidez corporal y maniobrabilidad en espacios reducidos.",
      icon: Activity,
    },
    {
      name: "Aceleración",
      description: "Primeros 5-10 metros cruciales para ganar duelos individuales.",
      icon: Gauge,
    },
    {
      name: "Coordinación",
      description: "Trabajo en escaleras de agilidad, aros y posturas técnicas.",
      icon: Workflow,
    },
    {
      name: "Cambios de Dirección",
      description: "Frenadas y giros rápidos sin pérdida de estabilidad.",
      icon: Shuffle,
    },
  ];

  return (
    <section
      id="preparacion-fisica"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-emerald-950 text-white border-b border-emerald-900/50 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Enfoque Especial: Bono 10</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            MEJORA TAMBIÉN LA PREPARACIÓN FÍSICA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100/80 font-medium max-w-2xl mx-auto">
            El fútbol moderno exige jugadores más rápidos, resistentes y explosivos. Con este programa adicional trabajarás los 8 pilares del acondicionamiento físico.
          </p>
        </div>

        {/* 8 Physical Pillars Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {physicalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-800/50 hover:border-emerald-500/60 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white capitalize">
                    {pillar.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Rutinas integradas</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950/80 border border-emerald-700/60 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
            Incluido sin coste adicional
          </p>
          <p className="text-sm sm:text-base font-semibold text-white mt-1">
            Planes adaptables con y sin material para entrenar en pretemporada y durante la competición.
          </p>
          <div className="mt-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-slate-950 font-extrabold text-xs sm:text-sm tracking-wide transition shadow-md"
            >
              OBTENER EL PROGRAMA FÍSICO + FÚTBOL+
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
