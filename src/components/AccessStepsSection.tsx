import React from "react";
import { CreditCard, MailCheck, Trophy, ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../config";

export const AccessStepsSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "COMPRA",
      description: "Haz clic en el botón y completa tu compra de forma segura mediante Hotmart.",
      icon: CreditCard,
    },
    {
      number: "02",
      title: "RECIBE EL ACCESO",
      description: "Después de la confirmación del pago, recibirás las instrucciones para acceder a FÚTBOL+.",
      icon: MailCheck,
    },
    {
      number: "03",
      title: "EMPIEZA A ENTRENAR",
      description: "Accede desde tu dispositivo y utiliza los ejercicios y recursos incluidos.",
      icon: Trophy,
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-14 sm:py-20 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-300/80">
            Proceso Simple
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            ACCEDE EN 3 PASOS
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Fácil, inmediato y sin complicaciones técnicas.
          </p>
        </div>

        {/* 3 Pasos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 text-left flex flex-col justify-between hover:border-emerald-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-display">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-wide uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <span>Paso {idx + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botón de compra */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-md shadow-emerald-700/20 transition"
          >
            <span>EMPEZAR AHORA POR US$ 7,90</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
