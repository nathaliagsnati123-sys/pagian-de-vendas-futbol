import React from "react";
import { Search, Sliders, Heart, ClipboardList, Zap, Smartphone, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../config";

export const AppToolsSection: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Búsqueda rápida",
      description: "Encuentra ejercicios por nombre, objetivo o palabra clave.",
      color: "emerald",
      badge: "Agilidad",
    },
    {
      icon: Sliders,
      title: "Filtros avanzados",
      description: "Filtra según edad, nivel, jugadores, duración, intensidad y espacio.",
      color: "blue",
      badge: "Precisión",
    },
    {
      icon: Heart,
      title: "Favoritos",
      description: "Guarda tus ejercicios favoritos para encontrarlos rápidamente.",
      color: "rose",
      badge: "Tu Colección",
    },
    {
      icon: ClipboardList,
      title: "Mis entrenamientos",
      description: "Crea y organiza tus propias sesiones.",
      color: "purple",
      badge: "Organización",
    },
    {
      icon: Zap,
      title: "Generador de entrenamientos",
      description: "Genera propuestas de entrenamiento según tus necesidades.",
      color: "amber",
      badge: "Inteligente",
    },
    {
      icon: Smartphone,
      title: "Aplicación instalable",
      description: "Accede desde celular, tablet o computadora.",
      color: "teal",
      badge: "Multidispositivo",
    },
  ];

  return (
    <section
      id="funciones"
      className="py-14 sm:py-20 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Herramientas Prácticas
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            MÁS QUE UNA BIBLIOTECA DE EJERCICIOS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Herramientas interactivas creadas para simplificar la planificación de tus sesiones antes y durante cada práctica.
          </p>
        </div>

        {/* Grid de 6 Funcionalidades */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200/70">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2.5 py-1 rounded-md border border-slate-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Llamado a la acción suave */}
        <div className="mt-10 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
          >
            <span>Acceder a todas las herramientas por solo US$ 7,90</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
