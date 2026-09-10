import React from "react";
import { CreditCard, MailCheck, Smartphone } from "lucide-react";

export const AccessStepsSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Adquiere la App Fútbol+",
      subtitle: "Pago protegido de US$ 9,90",
      description: "Haz clic en el botón de compra, completa el checkout cifrado y confirma tu pago seguro por tarjeta o método preferido.",
      icon: CreditCard,
    },
    {
      step: "02",
      title: "Recibe tu acceso a la App",
      subtitle: "Enlace directo por correo",
      description: "En segundos recibirás un correo electrónico con tu acceso privado para abrir la aplicación interactiva de inmediato.",
      icon: MailCheck,
    },
    {
      step: "03",
      title: "Úsala en Celular, Tablet o PC",
      subtitle: "Acceso instantáneo multidispositivo",
      description: "Ábrela directamente en tu teléfono celular, tablet o computadora. ¡Instálala con 1 solo toque en tu pantalla de inicio y llévala al campo de juego sin ocupar memoria!",
      icon: Smartphone,
    },
  ];

  return (
    <section
      id="acceso"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Facilidad Absoluta
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
            EMPIEZA A ENTRENAR EN MINUTOS
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Sin instalaciones complejas, sin esperas y sin configuraciones difíciles.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-600/30 font-display">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {item.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/50 text-[11px] text-slate-400 font-medium">
                  Paso {idx + 1} de 3
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
