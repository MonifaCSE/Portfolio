import * as React from "react";

export const HeroFallback: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-full h-[280px] sm:h-[360px] md:h-[480px] flex items-center justify-center select-none"
    >
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[540px] drop-shadow-2xl"
      >
        {/* Connection Hairlines between layers */}
        <g stroke="var(--bone)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3">
          <line x1="160" y1="120" x2="160" y2="380" />
          <line x1="440" y1="120" x2="440" y2="380" />
          <line x1="300" y1="180" x2="300" y2="440" />
        </g>

        {/* Layer 01: Interface Layer (Top Slab) */}
        <g className="transition-transform duration-500 ease-out hover:-translate-y-2">
          {/* Slab Surface */}
          <polygon
            points="300,60 480,140 300,220 120,140"
            fill="var(--ink-850)"
            stroke="var(--ink-600)"
            strokeWidth="1.5"
          />
          {/* Top Inset Highlight */}
          <polygon
            points="300,75 450,140 300,205 150,140"
            fill="none"
            stroke="var(--bone)"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
          {/* UI Mockup Blocks */}
          <rect x="220" y="125" width="50" height="20" rx="3" fill="var(--ink-700)" transform="rotate(-22 245 135)" />
          <rect x="285" y="148" width="80" height="15" rx="3" fill="var(--ember-500)" fillOpacity="0.8" transform="rotate(-22 325 155)" />
          <rect x="200" y="145" width="40" height="15" rx="3" fill="var(--bone)" fillOpacity="0.2" transform="rotate(-22 220 152)" />
          {/* Label Tag */}
          <text x="500" y="135" fill="var(--text-mute)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="1">
            01 INTERFACE
          </text>
        </g>

        {/* Layer 02: Logic Layer (Middle Slab) */}
        <g className="transition-transform duration-500 ease-out hover:-translate-y-1">
          <polygon
            points="300,180 480,260 300,340 120,260"
            fill="var(--ink-850)"
            stroke="var(--ink-600)"
            strokeWidth="1.5"
          />
          <polygon
            points="300,195 450,260 300,325 150,260"
            fill="none"
            stroke="var(--bone)"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
          {/* Graph Nodes & Logic Connections */}
          <circle cx="240" cy="250" r="5" fill="var(--bone)" fillOpacity="0.5" />
          <circle cx="300" cy="230" r="5" fill="var(--bone)" fillOpacity="0.5" />
          <circle cx="360" cy="270" r="6" fill="var(--ember-500)" />
          <circle cx="280" cy="280" r="5" fill="var(--bone)" fillOpacity="0.5" />
          <line x1="240" y1="250" x2="300" y2="230" stroke="var(--ink-600)" strokeWidth="1.5" />
          <line x1="300" y1="230" x2="360" y2="270" stroke="var(--ember-500)" strokeWidth="1.5" />
          <line x1="240" y1="250" x2="280" y2="280" stroke="var(--ink-600)" strokeWidth="1.5" />
          <line x1="280" y1="280" x2="360" y2="270" stroke="var(--ink-600)" strokeWidth="1.5" />
          {/* Label Tag */}
          <text x="500" y="255" fill="var(--text-mute)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="1">
            02 LOGIC
          </text>
        </g>

        {/* Layer 03: Data Layer (Bottom Slab) */}
        <g className="transition-transform duration-500 ease-out hover:translate-y-1">
          <polygon
            points="300,300 480,380 300,460 120,380"
            fill="var(--ink-850)"
            stroke="var(--ink-600)"
            strokeWidth="1.5"
          />
          <polygon
            points="300,315 450,380 300,445 150,380"
            fill="none"
            stroke="var(--bone)"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
          {/* Database Cylinder Icons */}
          <ellipse cx="290" cy="370" rx="35" ry="12" fill="var(--ink-700)" stroke="var(--ink-600)" strokeWidth="1" />
          <path d="M 255,370 L 255,390 Q 290,405 325,390 L 325,370 Z" fill="var(--ink-800)" stroke="var(--ink-600)" strokeWidth="1" />
          <ellipse cx="290" cy="390" rx="35" ry="12" fill="none" stroke="var(--ember-500)" strokeWidth="1.5" />
          {/* Label Tag */}
          <text x="500" y="375" fill="var(--text-mute)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="1">
            03 DATA
          </text>
        </g>

        {/* Animated Request Pulse Dot */}
        <circle cx="300" cy="180" r="4" fill="var(--ember-400)">
          <animate
            attributeName="cy"
            values="120;260;380;120"
            dur="4s"
            repeatCount="indefinite"
            keyTimes="0;0.4;0.8;1"
          />
          <animate
            attributeName="opacity"
            values="1;0.9;1;1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
