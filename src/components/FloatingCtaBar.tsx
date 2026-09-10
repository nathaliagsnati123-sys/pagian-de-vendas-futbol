import React, { useState, useEffect } from "react";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import { ArrowRight, Sparkles } from "lucide-react";

export const FloatingCtaBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 600px
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl transition-transform duration-300 transform translate-y-0">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 flex items-center justify-between gap-3">
        {/* Left Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white shrink-0 text-sm font-bold shadow-xs">
            ⚽
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs sm:text-sm font-black text-slate-900 truncate font-display">
                APP FÚTBOL+
              </span>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded hidden xs:inline-block">
                7 Días de Garantía
              </span>
            </div>
            <p className="text-[10px] text-slate-500 truncate hidden sm:block">
              Aplicación interactiva con 1.000 ejercicios + 10 bonos
            </p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-slate-400 line-through">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.regularPrice}
            </span>
            <span className="text-sm sm:text-base font-black text-slate-950 font-display">
              {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
            </span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-cta-button"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-700/20 transition-all"
          >
            <span>OBTENER LA APP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
