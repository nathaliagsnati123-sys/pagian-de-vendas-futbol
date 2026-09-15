import React from "react";
import { Heart, CheckCircle2, ClipboardList, Zap, FileSpreadsheet, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../config";

export const AppToolsSection: React.FC = () => {
  const tools = [
    {
      icon: Heart,
      color: "rose",
      badge: "Acceso Rápido",
      title: "Favoritos",
      description: "Guarda tus ejercicios favoritos para encontrarlos rápidamente antes de cada sesión.",
    },
    {
      icon: CheckCircle2,
      color: "emerald",
      badge: "Seguimiento",
      title: "Progreso",
      description: "Marca los ejercicios que ya has realizado y acompaña tu progreso y el de tu equipo a lo largo de la temporada.",
    },
    {
      icon: ClipboardList,
      color: "blue",
      badge: "Planificación",
      title: "Mis entrenamientos",
      description: "Crea y organiza tus propias sesiones combinando calentamiento, tareas principales y partidos reducidos.",
    },
    {
      icon: Zap,
      color: "amber",
      badge: "Automatización",
      title: "Generador de entrenamientos",
      description: "Crea sesiones adaptadas a tus objetivos, jugadores y duración de forma instantánea con el algoritmo inteligente.",
    },
    {
      icon: FileSpreadsheet,
      color: "purple",
      badge: "Organización",
      title: "Fichas técnicas",
      description: "Organiza sesiones, ejercicios y evaluaciones de forma profesional, listas para imprimir o exportar.",
    },
  ];

  return (
    <section
      id="herramientas"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300/60">
            Herramientas Nativas de la Aplicación
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            MUCHO MÁS QUE UNA LISTA: TODAS LAS HERRAMIENTAS DE UNA APP PROFESIONAL
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            A diferencia de un libro o documento PDF estático, la aplicación Fútbol+ incluye utilidades interactivas para gestionar y planificar sesiones completas con un toque.
          </p>
        </div>

        {/* 5 Tools Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            const isFullSpan = idx === 4;

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between text-left ${
                  isFullSpan ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <Icon
                        className={`w-5 h-5 ${
                          tool.color === "rose"
                            ? "text-rose-500 fill-rose-500/20"
                            : tool.color === "emerald"
                            ? "text-emerald-600"
                            : tool.color === "blue"
                            ? "text-blue-600"
                            : tool.color === "amber"
                            ? "text-amber-500 fill-amber-500/20"
                            : "text-purple-600"
                        }`}
                      />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span>Incluido en Fútbol+</span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA Box to balance 3x2 grid */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 text-white border border-emerald-800 flex flex-col justify-between text-left shadow-md">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-800/60 px-2.5 py-0.5 rounded-full border border-emerald-700">
                Todo Incluido
              </span>
              <h3 className="text-lg font-bold text-white mt-3">
                Todas las herramientas por US$ 7,90
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                Sin suscripciones mensuales recurrentes ni pagos ocultos. Un solo pago y acceso completo.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-800/80">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] text-slate-950 font-extrabold text-xs tracking-wide transition shadow-sm"
              >
                <span>OBTENER TODO AHORA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
