import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header
      id="top-announcement-header"
      className="sticky top-0 z-50 bg-red-600 text-white py-3 px-4 shadow-md text-center"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-sm sm:text-base font-black tracking-wider uppercase text-white">
          ¡OFERTA SOLO HOY!
        </p>
      </div>
    </header>
  );
};

