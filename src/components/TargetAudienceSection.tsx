import React from "react";
import { ClipboardCheck, Baby, User, Building2 } from "lucide-react";

export const TargetAudienceSection: React.FC = () => {
  const audiences = [
    {
      title: "ENTRENADORES",
      subtitle: "De cualquier categoría o nivel",
      description: "Para preparar sesiones de forma rápida y profesional, sin quedarse sin ideas ni perder horas buscando en internet.",
      icon: ClipboardCheck,
      tag: "Cuerpo Técnico",
    },
    {
      title: "FÚTBOL BASE",
      subtitle: "Formadores y monitores de niños",
      description: "Ejercicios adaptados a diferentes edades (desde iniciación hasta cadetes) que combinan diversión, aprendizaje y técnica formativa.",
      icon: Baby,
      tag: "Cantera y Formación",
    },
    {
      title: "JUGADORES",
      subtitle: "Comprometidos con mejorar",
      description: "Para complementar y variar sus entrenamientos individuales o en pequeños grupos, potenciando debilidades por su cuenta.",
      icon: User,
      tag: "Desarrollo Personal",
    },
    {
      title: "ESCUELAS Y CLUBES",
      subtitle: "Coordinadores y directores deportivos",
      description: "Para disponer de una biblioteca organizada de ejercicios y unificar criterios metodológicos en todas sus categorías.",
      icon: Building2,
      tag: "Metodología de Club",
    },
  ];

  return (
    <section
      id="para-quien"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Público Objetivo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            ¿PARA QUIÉN ES FÚTBOL+?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Una herramienta versátil que se adapta a las necesidades de cada perfil dentro del mundo del fútbol.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 border border-emerald-200/60">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {aud.tag}
                  </span>

                  <h3 className="text-lg font-black text-slate-900 mt-2 font-display">
                    {aud.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {aud.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {aud.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/50 text-[11px] font-bold text-slate-500">
                  Ideal para ti
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
