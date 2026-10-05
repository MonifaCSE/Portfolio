"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Sparkles,
  Zap,
  Bot,
  Workflow,
  Share2,
  Terminal,
  Key,
  Box,
  Network,
  FileCode,
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "web" | "ai";
  icon: React.ReactNode;
  top: string;
  left: string;
  zIndex: number;
  scale?: number;
  opacity?: number;
  duration: string;
  delay: string;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
}

const techItems: TechItem[] = [
  // Web Development (Primary Stack)
  {
    id: "laravel",
    name: "Laravel",
    category: "web",
    icon: <Code2 className="w-3.5 h-3.5 text-ember-400" />,
    top: "8%",
    left: "6%",
    zIndex: 20,
    scale: 1,
    duration: "5.5s",
    delay: "0s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "php",
    name: "PHP 8.x",
    category: "web",
    icon: <FileCode className="w-3.5 h-3.5 text-bone" />,
    top: "22%",
    left: "2%",
    zIndex: 10,
    scale: 0.95,
    opacity: 0.9,
    duration: "6.2s",
    delay: "1.2s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "web",
    icon: <Database className="w-3.5 h-3.5 text-bone" />,
    top: "40%",
    left: "4%",
    zIndex: 20,
    scale: 1,
    duration: "4.8s",
    delay: "0.5s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "web",
    icon: <Terminal className="w-3.5 h-3.5 text-bone" />,
    top: "12%",
    left: "72%",
    zIndex: 20,
    scale: 1,
    duration: "5.8s",
    delay: "0.8s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "web",
    icon: <GitBranch className="w-3.5 h-3.5 text-bone" />,
    top: "58%",
    left: "5%",
    zIndex: 15,
    scale: 0.95,
    duration: "6.5s",
    delay: "1.8s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "web",
    icon: <Layers className="w-3.5 h-3.5 text-bone" />,
    top: "28%",
    left: "78%",
    zIndex: 20,
    scale: 0.95,
    duration: "5.2s",
    delay: "0.3s",
    showOnMobile: false,
    showOnTablet: true,
  },
  {
    id: "livewire",
    name: "Livewire",
    category: "web",
    icon: <Zap className="w-3.5 h-3.5 text-ember-400" />,
    top: "76%",
    left: "10%",
    zIndex: 10,
    scale: 0.9,
    duration: "6.0s",
    delay: "1.5s",
    showOnMobile: false,
    showOnTablet: true,
  },
  {
    id: "filament",
    name: "Filament",
    category: "web",
    icon: <Box className="w-3.5 h-3.5 text-bone" />,
    top: "84%",
    left: "28%",
    zIndex: 20,
    scale: 0.95,
    duration: "5.4s",
    delay: "2.1s",
    showOnMobile: false,
    showOnTablet: true,
  },
  {
    id: "alpine",
    name: "Alpine.js",
    category: "web",
    icon: <Globe className="w-3.5 h-3.5 text-bone" />,
    top: "44%",
    left: "82%",
    zIndex: 10,
    scale: 0.9,
    duration: "6.8s",
    delay: "0.7s",
    showOnMobile: false,
    showOnTablet: true,
  },
  {
    id: "vite",
    name: "Vite",
    category: "web",
    icon: <Zap className="w-3.5 h-3.5 text-bone" />,
    top: "62%",
    left: "80%",
    zIndex: 15,
    scale: 0.9,
    duration: "5.0s",
    delay: "1.1s",
    showOnMobile: false,
    showOnTablet: false,
  },
  {
    id: "python",
    name: "Python",
    category: "web",
    icon: <Code2 className="w-3.5 h-3.5 text-bone" />,
    top: "78%",
    left: "70%",
    zIndex: 15,
    scale: 0.9,
    duration: "6.4s",
    delay: "1.4s",
    showOnMobile: false,
    showOnTablet: true,
  },

  // AI & Workflow Automation (Secondary / Growing Focus)
  {
    id: "n8n",
    name: "n8n",
    category: "ai",
    icon: <Workflow className="w-3.5 h-3.5 text-ember-500" />,
    top: "4%",
    left: "44%",
    zIndex: 25,
    scale: 1.05,
    duration: "4.5s",
    delay: "0.2s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "make",
    name: "Make.com",
    category: "ai",
    icon: <Share2 className="w-3.5 h-3.5 text-ember-400" />,
    top: "16%",
    left: "30%",
    zIndex: 20,
    scale: 0.95,
    duration: "5.7s",
    delay: "1.0s",
    showOnMobile: true,
    showOnTablet: true,
  },
  {
    id: "apis",
    name: "REST APIs & Webhooks",
    category: "ai",
    icon: <Network className="w-3.5 h-3.5 text-ember-400" />,
    top: "18%",
    left: "54%",
    zIndex: 20,
    scale: 0.95,
    duration: "6.1s",
    delay: "0.6s",
    showOnMobile: false,
    showOnTablet: true,
  },
  {
    id: "ai-agents",
    name: "AI Agents & LLMs",
    category: "ai",
    icon: <Bot className="w-3.5 h-3.5 text-ember-500" />,
    top: "88%",
    left: "52%",
    zIndex: 25,
    scale: 1,
    duration: "5.1s",
    delay: "1.7s",
    showOnMobile: false,
    showOnTablet: true,
  },
  {
    id: "automation",
    name: "Workflow Automation",
    category: "ai",
    icon: <Sparkles className="w-3.5 h-3.5 text-ember-400" />,
    top: "74%",
    left: "44%",
    zIndex: 20,
    scale: 0.95,
    duration: "5.9s",
    delay: "0.9s",
    showOnMobile: false,
    showOnTablet: true,
  },
];

export const TechEcosystemVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  // Parallax tracking on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || window.innerWidth < 1024 || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-12 px-2 sm:px-6 my-8 rounded-xl border border-ink-700/80 bg-ink-900/90 shadow-2xl overflow-hidden select-none"
    >
      {/* Background Subtle Ink Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A2F36_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Header Badge */}
      <div className="relative z-30 flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-ink-700/60 pb-4">
        <div className="space-y-1">
          <div className="text-xs font-mono text-ember-500 uppercase tracking-widest font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Technology Map</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-bone font-medium">
            Development Stack & Automation Ecosystem
          </h3>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-textMute">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-ink-700 bg-ink-950/60">
            <span className="w-2 h-2 rounded-full bg-bone inline-block" />
            <span>Web Dev (Primary)</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-ember-500/30 bg-ember-wash/40 text-ember-400">
            <span className="w-2 h-2 rounded-full bg-ember-500 inline-block animate-pulse" />
            <span>AI & Automation</span>
          </div>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative min-h-[460px] sm:min-h-[540px] md:min-h-[600px] flex items-center justify-center">

        {/* 1. AI Automation Subtle Workflow Connection Lines (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="workflow-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--ink-700)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--ember-500)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--ink-700)" stopOpacity="0.4" />
            </linearGradient>

            <filter id="ember-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Workflow Orbital Loop around Portrait */}
          <path
            d="M 220,120 Q 500,-20 780,140 T 780,480 Q 500,620 220,460 Z"
            fill="none"
            stroke="url(#workflow-line-grad)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-60"
          />

          {/* Connecting Workflow Lines: Trigger -> n8n -> API -> AI -> Action */}
          <path
            d="M 440,50 L 500,100 L 540,160 L 500,520 L 440,460"
            fill="none"
            stroke="var(--ember-500)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Traveling Particle along Workflow Path */}
          {!shouldReduceMotion && (
            <circle r="3.5" fill="var(--ember-400)" filter="url(#ember-glow)">
              <animateMotion
                path="M 220,120 Q 500,-20 780,140 T 780,480 Q 500,620 220,460 Z"
                dur="12s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>

        {/* 2. Central Editorial Portrait Visual */}
        <div
          className="relative z-20 transition-transform duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? "none"
              : `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0px)`,
          }}
        >
          {/* Subtle Outer Ember Halo Ring */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border border-ember-500/20 bg-ember-wash/20 blur-sm pointer-events-none" />

          {/* Main Portrait Frame */}
          <div className="relative w-[210px] h-[260px] sm:w-[250px] sm:h-[310px] md:w-[290px] md:h-[360px] rounded-xl border border-ink-700 bg-ink-850 p-1.5 shadow-2xl overflow-hidden group">
            <img
              src="/images/monifa-sultana.jpg"
              alt="Monifa Sultana — Web Developer and CSE Lecturer"
              width={290}
              height={360}
              className="w-full h-full object-cover object-top rounded-lg transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />

            {/* Inner Hairline Ring */}
            <div className="absolute inset-0 rounded-lg pointer-events-none ring-1 ring-inset ring-ember-500/30" />

            {/* Bottom Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent p-3 text-center pt-8">
              <div className="text-sm font-serif text-bone font-medium">
                Monifa Sultana
              </div>
              <div className="text-[11px] font-mono text-ember-400">
                Web Developer & Educator
              </div>
            </div>
          </div>
        </div>

        {/* 3. Floating Technology Cards */}
        {techItems.map((tech) => {
          // Dynamic parallax factor per depth/z-index
          const parallaxFactor = (tech.zIndex - 15) * 1.5;

          const isWeb = tech.category === "web";

          return (
            <div
              key={tech.id}
              className={`absolute transition-transform duration-300 ease-out ${
                tech.showOnMobile
                  ? "block"
                  : tech.showOnTablet
                  ? "hidden sm:block"
                  : "hidden lg:block"
              }`}
              style={{
                top: tech.top,
                left: tech.left,
                zIndex: tech.zIndex,
                transform: shouldReduceMotion
                  ? `scale(${tech.scale || 1})`
                  : `translate3d(${mousePos.x * parallaxFactor}px, ${
                      mousePos.y * parallaxFactor
                    }px, 0px) scale(${tech.scale || 1})`,
              }}
            >
              <div
                className={`relative group flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border text-xs font-mono shadow-xl transition-all duration-300 ${
                  shouldReduceMotion ? "" : "animate-float"
                } ${
                  isWeb
                    ? "border-ink-700/80 bg-ink-850/90 text-bone hover:border-ink-600 hover:bg-ink-800"
                    : "border-ember-500/40 bg-ink-850/95 text-bone hover:border-ember-500 hover:bg-ink-800 shadow-ember-500/5"
                }`}
                style={{
                  animationDuration: shouldReduceMotion ? "0s" : tech.duration,
                  animationDelay: shouldReduceMotion ? "0s" : tech.delay,
                  opacity: tech.opacity || 1,
                }}
              >
                {/* Tech Icon */}
                <span className="shrink-0">{tech.icon}</span>

                {/* Tech Name */}
                <span className="font-medium whitespace-nowrap">{tech.name}</span>

                {/* Category Indicator Dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isWeb ? "bg-ink-600" : "bg-ember-500"
                  }`}
                />

                {/* Subtle Hover Glow Line */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-ember-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}

      </div>

      {/* Footer Info Strip */}
      <div className="relative z-30 pt-6 mt-6 border-t border-ink-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-textMute">
        <div className="flex items-center gap-2">
          <Workflow className="w-3.5 h-3.5 text-ember-500" />
          <span>Workflow Automation pipeline: Trigger → n8n/Make → REST APIs → AI Agent → Output</span>
        </div>
        <div className="text-[11px] text-textMute">
          * Hover elements for interactive depth · Respects prefers-reduced-motion
        </div>
      </div>
    </div>
  );
};
