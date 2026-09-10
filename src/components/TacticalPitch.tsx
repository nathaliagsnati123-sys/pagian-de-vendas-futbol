import React from "react";

interface TacticalPitchProps {
  type?: "rondo" | "finishing" | "tactical" | "switch";
  className?: string;
}

export const TacticalPitch: React.FC<TacticalPitchProps> = ({
  type = "rondo",
  className = "",
}) => {
  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-inner border border-emerald-800/40 bg-gradient-to-b from-[#0F3822] to-[#0A2617] select-none ${className}`}
    >
      {/* Field Grass Stripes */}
      <div className="absolute inset-0 flex opacity-20 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`h-full flex-1 ${i % 2 === 0 ? "bg-white" : "bg-transparent"}`}
          />
        ))}
      </div>

      {/* SVG Pitch Markings */}
      <svg
        viewBox="0 0 400 250"
        className="absolute inset-0 w-full h-full stroke-emerald-200/50 fill-none"
        strokeWidth="1.5"
      >
        {/* Outer Boundary */}
        <rect x="20" y="15" width="360" height="220" rx="4" />

        {/* Halfway Line */}
        <line x1="200" y1="15" x2="200" y2="235" />

        {/* Center Circle & Spot */}
        <circle cx="200" cy="125" r="38" />
        <circle cx="200" cy="125" r="2.5" fill="#A7F3D0" className="stroke-none" />

        {/* Left Penalty Area */}
        <rect x="20" y="55" width="65" height="140" />
        <rect x="20" y="85" width="22" height="80" />
        <circle cx="68" cy="125" r="2" fill="#A7F3D0" className="stroke-none" />
        <path d="M 85 95 A 35 35 0 0 1 85 155" />

        {/* Right Penalty Area */}
        <rect x="315" y="55" width="65" height="140" />
        <rect x="358" y="85" width="22" height="80" />
        <circle cx="332" cy="125" r="2" fill="#A7F3D0" className="stroke-none" />
        <path d="M 315 95 A 35 35 0 0 0 315 155" />

        {/* Corner Arcs */}
        <path d="M 20 25 A 10 10 0 0 0 30 15" />
        <path d="M 20 225 A 10 10 0 0 1 30 235" />
        <path d="M 370 15 A 10 10 0 0 0 380 25" />
        <path d="M 370 235 A 10 10 0 0 1 380 225" />

        {/* Goals */}
        <rect x="12" y="105" width="8" height="40" stroke="#E2E8F0" strokeWidth="1.2" />
        <rect x="380" y="105" width="8" height="40" stroke="#E2E8F0" strokeWidth="1.2" />

        {/* Dynamic Drill Elements based on Type */}
        {type === "rondo" && (
          <g>
            {/* Grid Cones */}
            <circle cx="140" cy="75" r="3.5" fill="#F59E0B" className="stroke-none" />
            <circle cx="260" cy="75" r="3.5" fill="#F59E0B" className="stroke-none" />
            <circle cx="260" cy="175" r="3.5" fill="#F59E0B" className="stroke-none" />
            <circle cx="140" cy="175" r="3.5" fill="#F59E0B" className="stroke-none" />

            {/* Grid Line */}
            <rect
              x="140"
              y="75"
              width="120"
              height="100"
              strokeDasharray="4,4"
              stroke="#FBBF24"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Blue Attacking Players (4 outside) */}
            <circle cx="200" cy="65" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="200" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">4</text>

            <circle cx="270" cy="125" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="270" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">7</text>

            <circle cx="200" cy="185" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="200" y="188" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">8</text>

            <circle cx="130" cy="125" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="130" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">10</text>

            {/* Red Defending Players (2 inside) */}
            <circle cx="180" cy="120" r="7" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="180" y="123" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">5</text>

            <circle cx="220" cy="130" r="7" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="220" y="133" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">6</text>

            {/* Pass Arrows */}
            <path
              d="M 137 125 L 193 68"
              stroke="#34D399"
              strokeWidth="2"
              strokeDasharray="4,3"
              markerEnd="url(#arrowhead-green)"
            />
            <path
              d="M 207 68 L 263 122"
              stroke="#34D399"
              strokeWidth="2"
              strokeDasharray="4,3"
              markerEnd="url(#arrowhead-green)"
            />

            {/* Ball */}
            <circle cx="190" cy="72" r="4.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
            <circle cx="190" cy="72" r="1.5" fill="#0F172A" className="stroke-none" />
          </g>
        )}

        {type === "finishing" && (
          <g>
            {/* Goalkeeper */}
            <circle cx="366" cy="125" r="7" fill="#EAB308" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="366" y="128" textAnchor="middle" fill="#1E293B" fontSize="8" fontWeight="bold" className="stroke-none font-sans">1</text>

            {/* Red Defenders */}
            <circle cx="320" cy="100" r="7" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="320" cy="150" r="7" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Blue Attackers */}
            <circle cx="240" cy="125" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="240" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">8</text>

            <circle cx="280" cy="115" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="280" y="118" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">9</text>

            <circle cx="270" cy="65" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="270" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" className="stroke-none font-sans">11</text>

            {/* Pass Vector & Run */}
            <path
              d="M 247 125 L 273 117"
              stroke="#34D399"
              strokeWidth="2"
              strokeDasharray="4,3"
            />
            <path
              d="M 285 112 Q 310 95 345 105"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
            {/* Shot Vector */}
            <path
              d="M 345 108 L 378 120"
              stroke="#EF4444"
              strokeWidth="2.5"
            />

            {/* Ball */}
            <circle cx="282" cy="113" r="4.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
          </g>
        )}

        {type === "tactical" && (
          <g>
            {/* Tactical Grid Zones */}
            <line x1="20" y1="90" x2="380" y2="90" stroke="#34D399" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
            <line x1="20" y1="160" x2="380" y2="160" stroke="#34D399" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
            <line x1="130" y1="15" x2="130" y2="235" stroke="#34D399" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />
            <line x1="270" y1="15" x2="270" y2="235" stroke="#34D399" strokeWidth="0.8" strokeDasharray="3,3" opacity="0.4" />

            {/* Blue Formation (4-3-3 shape) */}
            <circle cx="70" cy="125" r="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="110" cy="50" r="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="110" cy="95" r="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="110" cy="155" r="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="110" cy="200" r="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />

            <circle cx="180" cy="125" r="6.5" fill="#059669" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="210" cy="80" r="6.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx="210" cy="170" r="6.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.2" />

            {/* Ball */}
            <circle cx="185" cy="128" r="4.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
          </g>
        )}

        {type === "switch" && (
          <g>
            {/* Dual channel with cones */}
            <circle cx="150" cy="50" r="3" fill="#F59E0B" className="stroke-none" />
            <circle cx="250" cy="50" r="3" fill="#F59E0B" className="stroke-none" />
            <circle cx="250" cy="200" r="3" fill="#F59E0B" className="stroke-none" />
            <circle cx="150" cy="200" r="3" fill="#F59E0B" className="stroke-none" />

            {/* 1v1 duel */}
            <circle cx="170" cy="125" r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="230" cy="125" r="7" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Zig-Zag Dribble Vector */}
            <path
              d="M 175 125 Q 190 105 205 125 T 240 115"
              stroke="#FBBF24"
              strokeWidth="2"
              strokeDasharray="3,3"
            />
            {/* Ball */}
            <circle cx="178" cy="120" r="4.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
          </g>
        )}

        <defs>
          <marker
            id="arrowhead-green"
            markerWidth="6"
            markerHeight="6"
            refX="4"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#34D399" />
          </marker>
        </defs>
      </svg>

      {/* Subtle overlay badge */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/10 text-[10px] font-semibold text-emerald-200 tracking-wider uppercase">
        FÚTBOL+ DIAGRAMA 2D
      </div>
    </div>
  );
};
