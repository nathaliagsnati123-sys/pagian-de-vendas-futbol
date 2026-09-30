import React from "react";
import { PRODUCT_CONFIG } from "../config";

export const Navbar: React.FC = () => {
  return (
    <header
      id="top-announcement-header"
      className="sticky top-0 z-50 bg-red-600 text-white py-2.5 px-4 border-b border-red-700 shadow-md text-center"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-wide">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30 text-[11px] font-black uppercase">
          LANZAMIENTO
        </span>
        <span className="text-white font-extrabold">
          Condición especial de lanzamiento:
        </span>
        <span className="text-amber-200 font-black">
          {PRODUCT_CONFIG.currency} {PRODUCT_CONFIG.specialPrice}
        </span>
        <span className="text-red-100 font-medium hidden sm:inline">
          · Pago único con acceso de por vida
        </span>
      </div>
    </header>
  );
};
