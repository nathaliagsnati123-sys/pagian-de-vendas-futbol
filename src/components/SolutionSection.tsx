import React from "react";
import { CheckCircle2, ArrowRight, Smartphone, Tablet, Laptop, Sliders, Layers, Sparkles } from "lucide-react";
import { CHECKOUT_URL } from "../config";
import { AppMockup } from "./AppMockup";

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="producto"
      className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-100/90 px-3.5 py-1.5 rounded-full border border-emerald-300/80">
            Presentación del Producto
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            TODO LO QUE NECESITAS PARA TUS ENTRENAMIENTOS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            FÚTBOL+ reúne una biblioteca de más de 1.000 ejercicios de fútbol, organizada para ayudarte a encontrar rápidamente actividades según tus objetivos, jugadores, edad, nivel y duración.
          </p>
        </div>

        {/* Mockup Real de la Aplicación */}
        <div className="mt-10 sm:mt-12">
          {/* Mockup Interactivo / Real de Fútbol+ */}
          <AppMockup />

          {/* Compatibilidad Multidispositivo */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-700">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>Celular (iOS y Android)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Tablet className="w-4 h-4 text-emerald-600" />
              <span>Tablet (iPad y Tablets)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Laptop className="w-4 h-4 text-emerald-600" />
              <span>Computadora (Cualquier navegador)</span>
            </span>
          </div>

          {/* Botón de acceso intermedio */}
          <div className="mt-8 text-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-md shadow-emerald-700/20 transition"
            >
              <span>QUIERO ACCEDER A FÚTBOL+ · US$ 7,90</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
