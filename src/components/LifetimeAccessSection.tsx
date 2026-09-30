import React from "react";
import { Smartphone, Laptop, Tablet, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";

export const LifetimeAccessSection: React.FC = () => {
  return (
    <section
      id="acceso-vitalicio"
      className="py-16 md:py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Infinite Icon Badge */}
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 border border-emerald-300 shadow-2xs">
          <InfinityIcon className="w-6 h-6 stroke-[2.5]" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight font-display">
          TU RETO DURA 30 DÍAS. TU ACCESO NO.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
          Los 30 días son el programa inicial. Después puedes continuar utilizando Fútbol+ con <strong>acceso de por vida</strong> sin cuotas mensuales ni renovaciones.
        </p>

        {/* 3 Devices Visual Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">📱 Celular</h3>
              <p className="text-xs text-slate-500">Llévalo directo a la cancha</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
              <Tablet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">📱 Tablet</h3>
              <p className="text-xs text-slate-500">Ideal para ver diagramas</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">💻 Computadora</h3>
              <p className="text-xs text-slate-500">Consulta desde casa</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
