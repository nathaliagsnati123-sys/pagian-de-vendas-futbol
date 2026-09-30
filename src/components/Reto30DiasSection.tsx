import React, { useState } from "react";
import plan30DiasImg from "../assets/images/bonus_plan30dias_mockup_1789598985075.jpg";
import { CHECKOUT_URL, PRODUCT_CONFIG } from "../config";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Check,
  Infinity as InfinityIcon,
  PlayCircle,
} from "lucide-react";

const WEEKS = [
  {
    week: "SEMANA 1",
    subtitle: "Días 01 al 07",
    focus: "Control, Primer Toque y Dominio",
    days: [
      { day: "Día 01", task: "Control orientado y cambio de frente" },
      { day: "Día 02", task: "Amortiguación aérea y primer toque" },
      { day: "Día 03", task: "Dominio en espacio reducido (5x5m)" },
      { day: "Día 04", task: "Control con ambas piernas y perfil" },
      { day: "Día 05", task: "Recepción bajo presión simulada" },
      { day: "Día 06", task: "Conducción pegada al pie y giros" },
      { day: "Día 07", task: "Evaluación técnica de la semana" },
    ],
  },
  {
    week: "SEMANA 2",
    subtitle: "Días 08 al 14",
    focus: "Pase, Precisión y Coordinación",
    days: [
      { day: "Día 08", task: "Pase raso corto con borde interno" },
      { day: "Día 09", task: "Paredes y juego rápido a 1-2 toques" },
      { day: "Día 10", task: "Precisión de pase con pierna débil" },
      { day: "Día 11", task: "Cambios de ritmo con pase filtrado" },
      { day: "Día 12", task: "Coordinación dinámica con balón" },
      { day: "Día 13", task: "Pase en carrera y precisión media" },
      { day: "Día 14", task: "Consolidación de pase y apoyos" },
    ],
  },
  {
    week: "SEMANA 3",
    subtitle: "Días 15 al 21",
    focus: "Regate, Cambios de Ritmo y 1 vs 1",
    days: [
      { day: "Día 15", task: "Fintas corporales y desequilibrio" },
      { day: "Día 16", task: "Regate en velocidad y salida rápida" },
      { day: "Día 17", task: "Protección de balón con el cuerpo" },
      { day: "Día 18", task: "Cambios de dirección imprevistos" },
      { day: "Día 19", task: "Duelos individuales 1 vs 1" },
      { day: "Día 20", task: "Regate con freno y arranque" },
      { day: "Día 21", task: "Reto de habilidad y fluidez" },
    ],
  },
  {
    week: "SEMANA 4",
    subtitle: "Días 22 al 30",
    focus: "Finalización, Potencia y Reacción",
    days: [
      { day: "Día 22", task: "Definición al arco tras control rápido" },
      { day: "Día 23", task: "Remate con empeine total y potencia" },
      { day: "Día 24", task: "Golpeo de primera intención" },
      { day: "Día 25", task: "Definición con la pierna no dominante" },
      { day: "Día 26", task: "Velocidad explosiva con balón" },
      { day: "Día 27", task: "Remate tras giro o regate corto" },
      { day: "Día 28", task: "Resistencia específica integrada" },
      { day: "Día 29", task: "Circuito técnico completo de 20 min" },
      { day: "Día 30", task: "Graduación: Reto 30 Días completado" },
    ],
  },
];

export const Reto30DiasSection: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  return (
    <section
      id="reto-30-dias"
      className="py-16 md:py-24 bg-white border-b border-slate-200/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs inline-block">
            El Núcleo del Programa
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
            CÓMO FUNCIONA EL RETO 30 DÍAS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Sin complicaciones. Solo necesitas tu teléfono, un balón y 20 minutos.
          </p>
        </div>

        {/* 3 Step Visual Flow */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow-sm">
                1
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Abres el día en tu celular
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ingresas a la plataforma web instantánea sin tener que descargar aplicaciones pesadas.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-emerald-700">Listo en 1 clic</span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow-sm">
                2
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Ves qué toca entrenar hoy
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Cada sesión te indica el objetivo, el diagrama claro, las series y las repeticiones exactas.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-emerald-700">Cero dudas ni improvisación</span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-base shadow-sm">
                3
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                Entrenas 20 minutos y avanzas
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Completas la sesión, marcas tu día en el calendario y mantienes la constancia día tras día.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-emerald-700">Progreso visible</span>
          </div>

        </div>

        {/* Central Calendar & Day-by-Day Experience */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-800">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">
                CALENDARIO DEL RETO 30 DÍAS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 font-display">
                Abres el día, ves qué toca y entrenas
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>20 min por sesión</span>
            </div>
          </div>

          {/* Week Selector Tabs */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {WEEKS.map((w, idx) => (
              <button
                key={w.week}
                onClick={() => setActiveWeek(idx)}
                className={`p-3 rounded-xl text-left transition-all ${
                  activeWeek === idx
                    ? "bg-emerald-500 text-slate-950 font-black shadow-md"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 font-semibold"
                }`}
              >
                <div className="text-xs uppercase tracking-wider">{w.week}</div>
                <div className={`text-[11px] ${activeWeek === idx ? "text-slate-900" : "text-slate-400"}`}>
                  {w.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Active Week Content Card */}
          <div className="mt-6 bg-slate-950/80 rounded-2xl p-5 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
              <div className="text-sm font-bold text-emerald-400">
                Enfoque: <span className="text-white">{WEEKS[activeWeek].focus}</span>
              </div>
              <span className="text-xs text-slate-400">
                {WEEKS[activeWeek].days.length} sesiones estructuradas
              </span>
            </div>

            {/* List of Days in this Week */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {WEEKS[activeWeek].days.map((item) => (
                <div
                  key={item.day}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-black text-emerald-400 shrink-0">
                      {item.day}
                    </span>
                    <span className="text-slate-200 truncate font-medium">
                      {item.task}
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Reassurance Banner */}
          <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200 font-medium">
              <InfinityIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Los 30 días son el programa inicial.</strong> Tu acceso a la plataforma es de por vida.
              </span>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider transition"
            >
              <span>EMPEZAR DÍA 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
