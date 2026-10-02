import React from "react";
import { Star, CheckCircle2, MessageSquare, ThumbsUp, ShieldCheck } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  initials: string;
  avatarUrl: string;
}

const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Carlos Mendoza",
    role: "Entrenador y Jugador",
    location: "Madrid, España",
    rating: 5,
    date: "Hace 2 días",
    comment:
      "El Reto 30 Días me quitó el dolor de cabeza de pensar qué entrenar cada sesión. Saber exactamente qué hacer en 20 minutos hace toda la diferencia.",
    tag: "Plan Estructurado",
    initials: "CM",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-2",
    name: "Diego R. Almada",
    role: "DT Formativo y Fútbol Base",
    location: "Córdoba, Argentina",
    rating: 5,
    date: "Hace 4 días",
    comment:
      "La combinación del Reto diario más la biblioteca de +1.000 ejercicios es perfecta. Tienes el camino guiado y luego variedad infinita para seguir entrenando.",
    tag: "Variedad y Plan",
    initials: "DA",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-3",
    name: "Prof. Javier Morales",
    role: "Preparador Físico",
    location: "Santiago, Chile",
    rating: 5,
    date: "Esta semana",
    comment:
      "Excelente aplicación. La abro directamente desde el celular en la cancha. El bono de preparación física y los ejercicios por objetivo son impecables.",
    tag: "Preparación Física",
    initials: "JM",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-4",
    name: "Matías E. Vargas",
    role: "Jugador y Monitor",
    location: "Montevideo, Uruguay",
    rating: 5,
    date: "Hace 5 días",
    comment:
      "Compré con dudas por el precio de US$ 6,90, pero el valor es tremendo. El reto de pierna débil en 7 días me ayudó a ganar confianza que antes no tenía.",
    tag: "Pierna Débil",
    initials: "MV",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-5",
    name: "Alejandro Ortiz",
    role: "Entrenador Juvenil",
    location: "Guadalajara, México",
    rating: 5,
    date: "Hace 1 semana",
    comment:
      "Lo mejor es que no necesitas descargar nada pesado. Funciona rapidísimo en mi teléfono y los entrenamientos de 20 minutos se completan sin excusas.",
    tag: "20 Minutos al Día",
    initials: "AO",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&auto=format&fit=crop&q=80",
  },
  {
    id: "rev-6",
    name: "Gonzalo F. Benítez",
    role: "Director Técnico",
    location: "Bogotá, Colombia",
    rating: 5,
    date: "Hace 1 semana",
    comment:
      "Tener los 50 entrenamientos listos y el reto diario organizado te ahorra horas. Es una inversión mínima para tener acceso de por vida.",
    tag: "Acceso de por Vida",
    initials: "GB",
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=160&auto=format&fit=crop&q=80",
  },
];

export const ReviewsSection: React.FC = () => {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="evaluaciones"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/70 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Experiencias Reales</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight font-display">
          LO QUE DICEN QUIENES YA ENTRENAN
        </h2>

        <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Jugadores y entrenadores que ya siguen el plan y aplican los ejercicios en sus sesiones.
        </p>

        {/* Trust Badges Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-slate-700">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-black text-slate-950">4.9 / 5.0</span>
            <span className="text-slate-400">Calificación</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-black text-slate-950">98.7%</span>
            <span className="text-slate-400">Recomendación</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-black text-slate-950">Acceso Inmediato</span>
            <span className="text-slate-400">Garantizado</span>
          </div>
        </div>
      </div>

      {/* Sliding Marquee Container */}
      <div className="relative mt-10 sm:mt-14 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

        {/* Marquee Track */}
        <div className="animate-marquee-left py-2 gap-5 sm:gap-6 flex">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[300px] sm:w-[350px] shrink-0 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between select-none text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                    {review.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 ring-2 ring-emerald-500/20 shadow-xs bg-slate-100">
                    <img
                      src={review.avatarUrl}
                      alt={review.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {review.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      {review.role} · {review.location}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 shrink-0 font-medium ml-2">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-4">
          ← Desliza suavemente · Pasa el cursor para pausar →
        </p>
      </div>
    </section>
  );
};
