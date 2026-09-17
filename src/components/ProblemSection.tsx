import React from "react";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { CHECKOUT_URL } from "../config";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: "Repetir siempre los mismos ejercicios",
      description: "Tus jugadores se desmotivan y los entrenamientos se vuelven predecibles y rutinarios.",
    },
    {
      title: "Perder tiempo buscando ejercicios",
      description: "Pasar horas navegando en internet, redes o libretas desordenadas sin encontrar la tarea justa.",
    },
    {
      title: "Tener dificultades para organizar las sesiones",
      description: "Costar enlazar calentamiento, parte principal y vuelta a la calma de forma coherente.",
    },
    {
      title: "No encontrar ejercicios adecuados para cada edad y nivel",
      description: "Ejercicios demasiado difíciles para niños o demasiado básicos para juveniles y adultos.",
    },
  ];

  return (
    <section id="problema" className="py-14 sm:py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Problema */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
            Dificultades Habituales
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
            ¿TE QUEDAS SIN IDEAS PARA TUS ENTRENAMIENTOS?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Planificar cada sesión semana tras semana exige tiempo y recursos que muchas veces no tienes a mano.
          </p>
        </div>

        {/* 4 Problemas en Tarjetas */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-xs flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200/70 font-black text-base">
                ✕
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950 leading-snug">
                  {prob.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prob.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conexión con la Solución */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white border border-emerald-500/30 text-center shadow-xl shadow-emerald-950/10">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/90 border border-emerald-700/60 px-3 py-1 rounded-full mb-3">
            La Respuesta Práctica
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-display">
            FÚTBOL+ LO HACE MÁS FÁCIL
          </h3>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-emerald-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Ten miles de ideas y recursos de entrenamiento organizados en un solo lugar, listos para consultar cuando los necesites.
          </p>
        </div>
      </div>
    </section>
  );
};
