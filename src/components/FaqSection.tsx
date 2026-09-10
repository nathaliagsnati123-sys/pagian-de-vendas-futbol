import React, { useState } from "react";
import { FAQS } from "../data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
            RESOLVEMOS TODAS TUS DUDAS
          </h2>
          <p className="mt-3 text-base text-slate-600 font-medium">
            Todo lo que necesitas saber antes de empezar a usar Fútbol+.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/70 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-emerald-600 text-white rotate-180"
                        : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
