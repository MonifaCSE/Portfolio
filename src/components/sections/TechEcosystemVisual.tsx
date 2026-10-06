"use client";

import * as React from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { Project, Experience } from "@/lib/schemas";
import {
  Code2,
  Cpu,
  GraduationCap,
  Zap,
  Terminal,
  BookOpen,
  Layers,
  Bot,
  Workflow,
  Network,
  Binary,
} from "lucide-react";

export type EcosystemTab = "build" | "ai" | "teach";

export interface TechEcosystemVisualProps {
  projects?: Project[];
  experience?: Experience[];
}

interface TechCardItem {
  id: string;
  name: string;
  category: EcosystemTab;
  icon: React.ReactNode;
  top: string;
  left: string;
  zIndex: number;
  scale?: number;
  duration: string;
  delay: string;
  subtitle?: string;
}

export const TechEcosystemVisual: React.FC<TechEcosystemVisualProps> = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState<EcosystemTab>("build");
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || window.innerWidth < 1024 || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // 1. Web Dev (Primary) Items
  const buildItems: TechCardItem[] = [
    {
      id: "laravel",
      name: "Laravel",
      category: "build",
      subtitle: "PHP Framework",
      icon: (
        <svg className="w-5 h-5 shrink-0 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.5 3L12 6.8L18.5 3L22 5V19L18.5 21L12 17.2L5.5 21L2 19V5L5.5 3ZM12 8.9L7.5 6.3V11.5L12 14.1L16.5 11.5V6.3L12 8.9Z" />
        </svg>
      ),
      top: "8%",
      left: "4%",
      zIndex: 25,
      duration: "5.5s",
      delay: "0s",
    },
    {
      id: "php",
      name: "PHP 8.x",
      category: "build",
      subtitle: "Core Language",
      icon: (
        <svg className="w-6 h-4 shrink-0" viewBox="0 0 32 18" fill="none">
          <rect width="32" height="18" rx="4" fill="#777BB4" />
          <text x="16" y="13" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            php
          </text>
        </svg>
      ),
      top: "34%",
      left: "2%",
      zIndex: 20,
      duration: "6.2s",
      delay: "1.2s",
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "build",
      subtitle: "Database Engine",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#00758F">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      ),
      top: "62%",
      left: "4%",
      zIndex: 20,
      duration: "4.8s",
      delay: "0.5s",
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "build",
      subtitle: "Version Control",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L2.4 10.9C1.8 11.5 1.8 12.5 2.4 13.1L10.9 21.6C11.5 22.2 12.5 22.2 13.1 21.6L21.6 13.1C22.2 12.5 22.2 11.5 21.6 10.9ZM13.8 14.8C13.4 15.1 12.8 15.1 12.4 14.8L9.7 12.1V15.1C9.9 15.3 10 15.6 10 16C10 16.6 9.6 17 9 17C8.4 17 8 16.6 8 16C8 15.5 8.3 15.1 8.7 15V10.2C8.3 10.1 8 9.7 8 9.2C8 8.6 8.4 8.2 9 8.2C9.6 8.2 10 8.6 10 9.2C10 9.6 9.8 9.9 9.5 10.1L12.1 12.7C12.3 12.5 12.6 12.4 13 12.4C14 13.4 14 12.8 14 13.4C14 13.9 13.9 14.5 13.8 14.8Z" />
        </svg>
      ),
      top: "84%",
      left: "6%",
      zIndex: 20,
      duration: "6.5s",
      delay: "1.8s",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "build",
      subtitle: "ES6+ Logic",
      icon: (
        <svg className="w-5 h-5 shrink-0 rounded-[2px] overflow-hidden" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" fill="#F7DF1E" />
          <text x="17" y="18" fill="#000000" fontSize="11" fontWeight="900" fontFamily="sans-serif" textAnchor="end">
            JS
          </text>
        </svg>
      ),
      top: "8%",
      left: "64%",
      zIndex: 25,
      duration: "5.8s",
      delay: "0.8s",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "build",
      subtitle: "Utility Styling",
      icon: (
        <svg className="w-5 h-4 shrink-0" viewBox="0 0 24 14" fill="#06B6D4">
          <path d="M12.001 0C9.601 0 8.101 1.2 7.501 3.6C8.401 2.4 9.451 2.1 10.651 2.7C11.336 3.042 11.828 3.542 12.376 4.099C13.269 5.008 14.288 6.042 17.501 6.042C19.901 6.042 21.401 4.842 22.001 2.442C21.101 3.642 20.051 3.942 18.851 3.342C18.166 2.999 17.674 2.499 17.126 1.942C16.233 1.033 15.214 0 12.001 0ZM7.501 6.042C5.101 6.042 3.601 7.242 3.001 9.642C3.901 8.442 4.951 8.142 6.151 8.742C6.836 9.085 7.328 9.585 7.876 10.142C8.769 11.051 9.788 12.084 13.001 12.084C15.401 12.084 16.901 10.884 17.501 8.484C16.601 9.684 15.551 9.984 14.351 9.384C13.666 9.041 13.174 8.541 12.626 7.984C11.733 7.075 10.714 6.042 7.501 6.042Z" />
        </svg>
      ),
      top: "34%",
      left: "66%",
      zIndex: 20,
      duration: "5.2s",
      delay: "0.3s",
    },
    {
      id: "alpine",
      name: "Alpine.js",
      category: "build",
      subtitle: "Reactive UI",
      icon: (
        <svg className="w-5 h-4 shrink-0" viewBox="0 0 24 16" fill="none">
          <path d="M17.5 16L24 9.5L17.5 3L11 9.5L17.5 16Z" fill="#8BC0D0" />
          <path d="M6.5 16L0 9.5L6.5 3L13 9.5L6.5 16Z" fill="#2D3748" />
        </svg>
      ),
      top: "60%",
      left: "64%",
      zIndex: 20,
      duration: "6.8s",
      delay: "0.7s",
    },
    {
      id: "livewire",
      name: "Livewire",
      category: "build",
      subtitle: "Full-Stack Components",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#FB70A9">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      top: "84%",
      left: "62%",
      zIndex: 20,
      duration: "6.4s",
      delay: "1.4s",
    },
    {
      id: "filament",
      name: "Filament Admin",
      category: "build",
      subtitle: "Admin Panel Engine",
      icon: (
        <svg className="w-5 h-5 shrink-0 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      top: "2%",
      left: "35%",
      zIndex: 15,
      duration: "6.0s",
      delay: "1.5s",
    },
    {
      id: "vite",
      name: "Vite Bundler",
      category: "build",
      subtitle: "Frontend Build Tool",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M21.5 3.5L12 21 2.5 3.5 7.5 4l4.5 9 4.5-9 5-.5z" fill="#BD34FE" />
        </svg>
      ),
      top: "88%",
      left: "36%",
      zIndex: 15,
      duration: "5.0s",
      delay: "1.1s",
    },
  ];

  // 2. AI & Automation Items
  const aiItems: TechCardItem[] = [
    {
      id: "n8n",
      name: "n8n Automation",
      category: "ai",
      subtitle: "Workflow Orchestration",
      icon: (
        <svg className="w-5 h-5 shrink-0 text-[#FF6584]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-5h2v5zm0-7h-2V7h2v2z" />
        </svg>
      ),
      top: "10%",
      left: "5%",
      zIndex: 25,
      duration: "4.5s",
      delay: "0.2s",
    },
    {
      id: "make",
      name: "Make.com",
      category: "ai",
      subtitle: "Cloud Integrations",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="12" r="4" fill="#6D00F6" />
          <circle cx="18" cy="12" r="4" fill="#00C2FF" />
          <path d="M6 12h12" stroke="#6D00F6" strokeWidth="2" />
        </svg>
      ),
      top: "42%",
      left: "3%",
      zIndex: 20,
      duration: "5.7s",
      delay: "1.0s",
    },
    {
      id: "rest-apis",
      name: "REST & Webhooks",
      category: "ai",
      subtitle: "API Data Pipelines",
      icon: <Network className="w-5 h-5 text-ember-400 shrink-0" />,
      top: "75%",
      left: "6%",
      zIndex: 20,
      duration: "6.1s",
      delay: "0.6s",
    },
    {
      id: "ai-agents",
      name: "AI Agents & LLMs",
      category: "ai",
      subtitle: "Smart Workflows",
      icon: <Bot className="w-5 h-5 text-ember-500 shrink-0" />,
      top: "10%",
      left: "62%",
      zIndex: 25,
      duration: "5.1s",
      delay: "1.7s",
    },
    {
      id: "python-ai",
      name: "Python Data Science",
      category: "ai",
      subtitle: "ML & Deep Learning",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2C6.8 2 7.1 4.2 7.1 4.2V6.4H12V7.1H5.3C3 7.1 1.5 8.7 1.5 11.4C1.5 14.1 2.8 15.2 4.8 15.2H6.4V13.2C6.4 10.9 8.2 9.2 8.5 9.2H15.1C16.7 9.2 18 7.9 18 6.3V4.2C18.1 2 13.8 2 11.8 2Z" fill="#3776AB" />
          <path d="M12.2 22C17.2 22 16.9 19.8 16.9 19.8V17.6H12V16.9H18.7C21 16.9 22.5 15.3 22.5 12.6C22.5 9.9 21.2 8.8 19.2 8.8H17.6V10.8C17.6 13.1 15.8 14.8 13.5 14.8H8.9C7.3 14.8 6 16.1 6 17.7V19.8C5.9 22 10.2 22 12.2 22Z" fill="#FFD43B" />
        </svg>
      ),
      top: "44%",
      left: "64%",
      zIndex: 20,
      duration: "6.4s",
      delay: "1.4s",
    },
    {
      id: "automation-flows",
      name: "Process Automation",
      category: "ai",
      subtitle: "Business Workflows",
      icon: <Workflow className="w-5 h-5 text-amber-400 shrink-0" />,
      top: "76%",
      left: "60%",
      zIndex: 20,
      duration: "5.9s",
      delay: "0.9s",
    },
  ];

  // 3. Teaching & Academic Items
  const teachItems: TechCardItem[] = [
    {
      id: "aims-academy",
      name: "AIMS Academy",
      category: "teach",
      subtitle: "IT Lecturer (OTHM L3/L4/L5/L6)",
      icon: <GraduationCap className="w-5 h-5 text-ember-400 shrink-0" />,
      top: "10%",
      left: "5%",
      zIndex: 25,
      duration: "5.2s",
      delay: "0s",
    },
    {
      id: "gmit-academy",
      name: "GMIT Academy",
      category: "teach",
      subtitle: "AI & ML Lab Instructor",
      icon: <Cpu className="w-5 h-5 text-ember-500 shrink-0" />,
      top: "40%",
      left: "3%",
      zIndex: 20,
      duration: "6.0s",
      delay: "0.8s",
    },
    {
      id: "iiuc-lecturer",
      name: "IIUC CSE Dept.",
      category: "teach",
      subtitle: "Adjunct Lecturer (2024–25)",
      icon: <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />,
      top: "75%",
      left: "6%",
      zIndex: 20,
      duration: "5.6s",
      delay: "1.4s",
    },
    {
      id: "iiuc-ta",
      name: "IIUC Labs",
      category: "teach",
      subtitle: "Teaching Assistant (2022–23)",
      icon: <Terminal className="w-5 h-5 text-ember-400 shrink-0" />,
      top: "10%",
      left: "62%",
      zIndex: 25,
      duration: "5.8s",
      delay: "0.4s",
    },
    {
      id: "python-django",
      name: "Python & Flask/Django",
      category: "teach",
      subtitle: "Guided Web Labs",
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.8 2C6.8 2 7.1 4.2 7.1 4.2V6.4H12V7.1H5.3C3 7.1 1.5 8.7 1.5 11.4C1.5 14.1 2.8 15.2 4.8 15.2H6.4V13.2C6.4 10.9 8.2 9.2 8.5 9.2H15.1C16.7 9.2 18 7.9 18 6.3V4.2C18.1 2 13.8 2 11.8 2Z" fill="#3776AB" />
          <path d="M12.2 22C17.2 22 16.9 19.8 16.9 19.8V17.6H12V16.9H18.7C21 16.9 22.5 15.3 22.5 12.6C22.5 9.9 21.2 8.8 19.2 8.8H17.6V10.8C17.6 13.1 15.8 14.8 13.5 14.8H8.9C7.3 14.8 6 16.1 6 17.7V19.8C5.9 22 10.2 22 12.2 22Z" fill="#FFD43B" />
        </svg>
      ),
      top: "42%",
      left: "65%",
      zIndex: 20,
      duration: "6.4s",
      delay: "1.0s",
    },
    {
      id: "compiler-cpp",
      name: "C++ & Compiler Design",
      category: "teach",
      subtitle: "Theory & Practice",
      icon: <Code2 className="w-5 h-5 text-ember-400 shrink-0" />,
      top: "75%",
      left: "62%",
      zIndex: 20,
      duration: "5.4s",
      delay: "1.6s",
    },
    {
      id: "othm-curriculum",
      name: "OTHM Diplomas",
      category: "teach",
      subtitle: "Level 3, 4, 5 & 6 IT",
      icon: <Layers className="w-5 h-5 text-ember-500 shrink-0" />,
      top: "3%",
      left: "35%",
      zIndex: 15,
      duration: "5.0s",
      delay: "0.6s",
    },
  ];

  const currentItems =
    activeTab === "build" ? buildItems : activeTab === "ai" ? aiItems : teachItems;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-2xl border border-ink-700/90 bg-ink-900/95 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden select-none p-4 sm:p-6"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#2A2F36_1px,transparent_1px)] [background-size:22px_22px] opacity-35 pointer-events-none" />

      {/* Header & 3-Category Controls */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 mb-2 border-b border-ink-700/70">
        <div className="space-y-0.5">
          <div className="text-[11px] font-mono text-ember-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-ember-500" />
            <span>Interactive Technology Ecosystem</span>
          </div>
        </div>

        {/* Tab Controls (3 Tabs: Web Dev, AI & Automation, Teaching) */}
        <div
          role="tablist"
          aria-label="Technology Stack Categories"
          className="flex items-center gap-1.5 p-1 rounded-xl border border-ink-700 bg-ink-950/90 w-full sm:w-auto"
        >
          <button
            type="button"
            role="tab"
            id="tab-build"
            aria-selected={activeTab === "build"}
            aria-controls="panel-ecosystem"
            tabIndex={activeTab === "build" ? 0 : -1}
            onClick={() => setActiveTab("build")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ember-500 focus-visible:outline-none ${
              activeTab === "build"
                ? "border border-ink-600 bg-ink-800 text-bone shadow-sm"
                : "text-textMute hover:text-bone hover:bg-ink-900/50"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-bone inline-block" />
            <span>Web Dev (Primary)</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-ai"
            aria-selected={activeTab === "ai"}
            aria-controls="panel-ecosystem"
            tabIndex={activeTab === "ai" ? 0 : -1}
            onClick={() => setActiveTab("ai")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ember-500 focus-visible:outline-none ${
              activeTab === "ai"
                ? "border border-ember-500/50 bg-ember-wash/40 text-bone shadow-sm"
                : "text-textMute hover:text-bone hover:bg-ink-900/50"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-ember-500 inline-block animate-pulse" />
            <span>AI & Automation</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-teach"
            aria-selected={activeTab === "teach"}
            aria-controls="panel-ecosystem"
            tabIndex={activeTab === "teach" ? 0 : -1}
            onClick={() => setActiveTab("teach")}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ember-500 focus-visible:outline-none ${
              activeTab === "teach"
                ? "border border-amber-500/50 bg-amber-500/10 text-bone shadow-sm"
                : "text-textMute hover:text-bone hover:bg-ink-900/50"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            <span>Academic & Teach</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        id="panel-ecosystem"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="relative min-h-[500px] sm:min-h-[540px] md:min-h-[580px] flex items-center justify-center overflow-hidden"
      >
        {/* SVG Decorative Orbit & Glow Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          viewBox="0 0 600 580"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--ink-700)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--ember-500)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--ink-700)" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow-filter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <ellipse
            cx="300"
            cy="290"
            rx="270"
            ry="210"
            fill="none"
            stroke="url(#orbit-grad)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-50"
          />
          {!shouldReduceMotion && (
            <circle r="3.5" fill="var(--ember-400)" filter="url(#glow-filter)">
              <animateMotion
                path="M 30,290 a 270,210 0 1,0 540,0 a 270,210 0 1,0 -540,0"
                dur="14s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>

        {/* Standalone Borderless Enlarged Central Portrait Photo */}
        <div
          className="relative z-20 transition-transform duration-300 ease-out"
          style={{
            transform: shouldReduceMotion
              ? "none"
              : `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0px)`,
          }}
        >
          <div className="absolute -inset-4 sm:-inset-5 rounded-3xl bg-gradient-to-r from-ember-500/25 via-ember-400/15 to-ember-500/25 blur-xl pointer-events-none" />
          <div className="relative w-[220px] h-[285px] sm:w-[265px] sm:h-[340px] md:w-[310px] md:h-[395px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] group">
            <img
              src="/images/monifa-sultana.jpg"
              alt="Monifa Sultana — Web Developer & IT Lecturer"
              width={310}
              height={395}
              className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-transparent p-3.5 sm:p-4 text-center pt-10">
              <div className="text-base sm:text-lg font-serif text-bone font-medium tracking-tight">Monifa Sultana</div>
              <div className="text-xs font-mono text-ember-400 font-semibold tracking-wide">Web Dev & IT Lecturer</div>
            </div>
          </div>
        </div>

        {/* Floating Animated Cards */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            {currentItems.map((item) => {
              const parallaxFactor = (item.zIndex - 15) * 1.5;

              return (
                <div
                  key={item.id}
                  className="absolute pointer-events-auto transition-transform duration-300 ease-out block"
                  style={{
                    top: item.top,
                    left: item.left,
                    zIndex: item.zIndex,
                    transform: shouldReduceMotion
                      ? `scale(${item.scale || 1})`
                      : `translate3d(${mousePos.x * parallaxFactor}px, ${
                          mousePos.y * parallaxFactor
                        }px, 0px) scale(${item.scale || 1})`,
                  }}
                >
                  <div
                    className={`relative group flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border text-xs font-mono shadow-2xl transition-all duration-300 ${
                      shouldReduceMotion ? "" : "animate-float"
                    } border-ink-700/90 bg-ink-850/95 text-bone hover:border-ember-500/60 hover:bg-ink-800 hover:shadow-[0_0_20px_rgba(232,116,59,0.25)]`}
                    style={{
                      animationDuration: shouldReduceMotion ? "0s" : item.duration,
                      animationDelay: shouldReduceMotion ? "0s" : item.delay,
                    }}
                  >
                    <span className="shrink-0 flex items-center justify-center">{item.icon}</span>
                    <div className="flex flex-col">
                      <span className="font-semibold font-sans text-xs text-bone tracking-wide whitespace-nowrap">
                        {item.name}
                      </span>
                      {item.subtitle && (
                        <span className="text-[10px] font-mono text-textMute whitespace-nowrap">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-ember-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Status Line */}
      <div className="relative z-30 pt-3 border-t border-ink-700/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-textMute">
        <div className="flex items-center gap-2">
          {activeTab === "build" ? (
            <React.Fragment>
              <Code2 className="w-3.5 h-3.5 text-ember-400" />
              <span>Primary Stack: PHP 8.x, Laravel, MySQL, Livewire & Tailwind CSS</span>
            </React.Fragment>
          ) : activeTab === "ai" ? (
            <React.Fragment>
              <Bot className="w-3.5 h-3.5 text-ember-500" />
              <span>Pipeline: Trigger → n8n/Make → REST APIs → AI Agent → Action</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Teaching Roles: OTHM Level 3/5 IT, AI/ML Labs & University CSE Courses</span>
            </React.Fragment>
          )}
        </div>
        <div className="text-[10px] text-textMute shrink-0">Click tabs to toggle view</div>
      </div>

      {/* Screen Reader Fallback */}
      <div className="sr-only">
        <h4>Technology Ecosystem Summary</h4>
        <p>Build view includes: Laravel, PHP 8.x, MySQL, Git, JavaScript, Tailwind CSS, Alpine.js, Livewire, Filament, and Vite.</p>
        <p>AI & Automation view includes: n8n, Make.com, REST APIs & Webhooks, AI Agents & LLMs, Process Automation, and Python Data Science.</p>
        <p>Teach view includes: AIMS Academy (OTHM Level 3/5 IT), GMIT Academy (AI & ML Labs), and IIUC (Computer Fundamentals, Software Development, Compiler Design, C++, Python, Flask, Django).</p>
      </div>
    </div>
  );
};





