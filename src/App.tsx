import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ExercisesSection } from "./components/ExercisesSection";
import { FiltersSection } from "./components/FiltersSection";
import { BonusesSection } from "./components/BonusesSection";
import { ValueComparisonSection } from "./components/ValueComparisonSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { FloatingCtaBar } from "./components/FloatingCtaBar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header / Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* SECCIÓN 1 — HERO */}
        <HeroSection />

        {/* SECCIÓN — 1.000 EJERCICIOS */}
        <ExercisesSection />

        {/* SECCIÓN — FILTROS */}
        <FiltersSection />

        {/* SECCIÓN — 10 BONOS */}
        <BonusesSection />

        {/* SECCIÓN — COMPARACIÓN DE VALOR */}
        <ValueComparisonSection />

        {/* SECCIÓN — GARANTÍA */}
        <GuaranteeSection />

        {/* SECCIÓN — FAQ */}
        <FaqSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating Sticky Conversion Bar */}
      <FloatingCtaBar />
    </div>
  );
}
