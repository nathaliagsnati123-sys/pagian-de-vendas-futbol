import React, { useState } from "react";
import { CATEGORIES } from "../data/categories";
import {
  Flame,
  Sparkles,
  ArrowRightLeft,
  Zap,
  Target,
  TrendingUp,
  Shield,
  RefreshCw,
  Compass,
  Activity,
  Dumbbell,
  HandMetal,
  Users,
  UserCheck,
  UserPlus,
  Grid,
  CheckCircle2,
  ChevronRight,
  Search,
} from "lucide-react";
import { CHECKOUT_URL } from "../config";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Flame,
  Sparkles,
  ArrowRightLeft,
  Zap,
  Target,
  TrendingUp,
  Shield,
  RefreshCw,
  Compass,
  Activity,
  Dumbbell,
  HandMetal,
  Users,
  UserCheck,
  UserPlus,
  Grid,
};

export const ExercisesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="ejercicios"
      className="py-16 md:py-24 bg-white border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Contenido Completo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            1.000 EJERCICIOS DE FÚTBOL
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Una biblioteca completa para trabajar diferentes aspectos del juego.
          </p>
        </div>

        {/* Clean Category Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Grid;
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? "bg-emerald-900 text-white border-emerald-800 shadow-md scale-[1.02]"
                    : "bg-slate-50 hover:bg-white text-slate-900 border-slate-200/80 hover:border-emerald-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-emerald-800 text-emerald-300"
                        : "bg-white text-emerald-700 shadow-xs border border-slate-200/60"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-emerald-800/80 text-emerald-200"
                        : "bg-slate-200/70 text-slate-700"
                    }`}
                  >
                    +{cat.count}
                  </span>
                </div>

                <h3
                  className={`text-sm sm:text-base font-bold leading-snug ${
                    isSelected ? "text-white" : "text-slate-900"
                  }`}
                >
                  {cat.name}
                </h3>

                <p
                  className={`mt-1.5 text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? "text-emerald-100/90" : "text-slate-500"
                  }`}
                >
                  {cat.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-200/40 flex items-center justify-between text-[11px] font-semibold">
                  <span
                    className={
                      isSelected ? "text-emerald-300" : "text-emerald-600"
                    }
                  >
                    {cat.tag}
                  </span>
                  <span
                    className={
                      isSelected ? "text-emerald-300" : "text-slate-400"
                    }
                  >
                    Ver detalles →
                  </span>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};
