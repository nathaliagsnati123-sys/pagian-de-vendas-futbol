import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { CalendarSection } from "./components/CalendarSection";
import { DurationSection } from "./components/DurationSection";
import { ObjectivesSection } from "./components/ObjectivesSection";
import { ExercisesSection } from "./components/ExercisesSection";
import { BonusesSection } from "./components/BonusesSection";
import { LifetimeAccessSection } from "./components/LifetimeAccessSection";
import { OfferSection } from "./components/OfferSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header / Anuncio de lanzamiento */}
      <Navbar />

      <main className="flex-1">
        {/* 01 — HERO */}
        <HeroSection />

        {/* 02 — EL PROBLEMA (Sin Plan vs Con el Reto) */}
        <ProblemSection />

        {/* 03 — CÓMO FUNCIONA (Proceso en 3 pasos) */}
        <HowItWorksSection />

        {/* 05 — EL CALENDARIO (30 Días. 30 Entrenamientos. Un Plan Claro) */}
        <CalendarSection />

        {/* 06 — LOS 20 MINUTOS */}
        <DurationSection />

        {/* 07 — ENTRENAMIENTOS POR OBJETIVO */}
        <ObjectivesSection />

        {/* 08 — +1.000 EJERCICIOS PARA CONTINUAR */}
        <ExercisesSection />

        {/* 09 — 6 BONOS INCLUIDOS */}
        <BonusesSection />

        {/* 10 — TU RETO DURA 30 DÍAS. TU ACCESO NO */}
        <LifetimeAccessSection />

        {/* 11 — OFERTA Y PRECIO (US$ 7,90) */}
        <OfferSection />

        {/* 12 — GARANTÍA DE 7 DÍAS */}
        <GuaranteeSection />

        {/* 13 — FAQ (8 preguntas clave) */}
        <FaqSection />

        {/* 14 — CTA FINAL */}
        <FinalCtaSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
