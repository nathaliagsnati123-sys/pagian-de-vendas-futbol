import React from "react";
import { Smartphone, Clock, CheckCheck } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "ABRE EL ENTRENAMIENTO DEL DÍA",
      desc: "Entras desde tu celular, tablet o computadora y abres la sesión que te toca hoy.",
    },
    {
      number: "02",
      icon: Clock,
      title: "SIGUE LA SESIÓN DURANTE 20 MINUTOS",
      desc: "Colocas tus conos o referencias y completas los ejercicios guiados paso a paso.",
    },
    {
      number: "03",
      icon: CheckCheck,
      title: "MARCA EL DÍA Y CONTINÚA MAÑANA",
      desc: "Registras tu día como completado y descansas con la tranquilidad de haber cumplido.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-16 md:py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <span className="text-xs uppercase font-extrabold tracking-wider text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs inline-block">
          Proceso Simple en 3 Pasos
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
          CÓMO FUNCIONA TU RUTINA DIARIA
        </h2>

        {/* 3 Step Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.number}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-emerald-700 font-display">
                      {st.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 border border-slate-200 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-black text-slate-900 leading-snug">
                    {st.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-emerald-800">
                  Paso {st.number} del día
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase de cierre requerida */}
        <div className="mt-8 inline-block p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-center">
          <p className="text-sm sm:text-base font-extrabold text-emerald-950">
            Sin improvisar. Sin perder tiempo buscando qué hacer.
          </p>
        </div>

      </div>
    </section>
  );
};
