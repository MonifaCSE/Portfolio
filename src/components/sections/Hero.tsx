import * as React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { ArrowDown, MapPin, Code2 } from "lucide-react";
import { Project, Experience } from "@/lib/schemas";

const TechEcosystemVisual = dynamic(
  () => import("@/components/sections/TechEcosystemVisual").then((mod) => mod.TechEcosystemVisual),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[480px] rounded-2xl border border-ink-700/80 bg-ink-900/90 animate-pulse flex items-center justify-center text-textMute font-mono text-xs">
        Loading ecosystem visual...
      </div>
    ),
  }
);

export interface HeroProps {
  siteData: {
    eyebrow: string;
    tagline: string;
    subline: string;
    cvLink: { label: string; href: string };
  };
  projects?: Project[];
  experience?: Experience[];
}

export const Hero: React.FC<HeroProps> = ({ siteData, projects = [], experience = [] }) => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-6 md:py-8 hairline-bottom overflow-hidden">
      {/* Container */}
      <div className="max-w-content mx-auto px-5 sm:px-8 w-full my-auto py-4 md:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Identity, Typography & CTAs Column */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-6 z-10 flex flex-col justify-start pt-2 lg:pt-3">
            {/* Identity Single Line Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse shrink-0" />
              <div className="text-xs font-mono tracking-widest text-textMute uppercase font-semibold">
                {siteData.eyebrow}
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif text-bone leading-[1.04] tracking-tight">
              Web applications,{" "}
              <span className="accent-word font-serif">built carefully</span> — and explained clearly.
            </h1>

            {/* Subline */}
            <p className="text-textSoft text-base sm:text-lg font-sans max-w-[48ch] leading-relaxed">
              {siteData.subline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" href="/#work" showArrow>
                View projects
              </Button>
              <Button variant="secondary" href={siteData.cvLink.href} external>
                Download CV
              </Button>
            </div>

            {/* Current Positions & Active Engagements Block */}
            <div className="pt-4 sm:pt-5 border-t border-ink-800/80 space-y-2.5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-textMute font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ember-500 inline-block animate-pulse" />
                <span>Current Positions & Engagements</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                {/* Position 1: Sevix Global */}
                <a
                  href="https://sevixglobal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl border border-ink-700/80 bg-ink-900/90 hover:border-ember-500/60 hover:bg-ink-850 hover:shadow-[0_10px_25px_rgba(232,116,59,0.15)] transition-all duration-300 block overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-mono text-ember-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember-500 inline-block animate-pulse" />
                      Active Role
                    </span>
                    <span className="text-[10px] font-mono text-textMute group-hover:text-bone transition-colors">↗</span>
                  </div>
                  <div className="text-bone font-sans font-semibold text-xs leading-snug group-hover:text-ember-400 transition-colors">
                    Web Developer
                  </div>
                  <div className="text-[11px] font-mono text-textMute pt-0.5 truncate">
                    Sevix Global
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-ember-500/0 via-ember-500 to-ember-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Position 2: AIMS Academy */}
                <div className="group relative p-3 rounded-xl border border-ink-700/80 bg-ink-900/90 hover:border-ember-500/60 hover:bg-ink-850 hover:shadow-[0_10px_25px_rgba(232,116,59,0.15)] transition-all duration-300 block overflow-hidden">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-mono text-ember-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember-500 inline-block animate-pulse" />
                      Active Role
                    </span>
                    <span className="text-[10px] font-mono text-textMute">OTHM L3–L6</span>
                  </div>
                  <div className="text-bone font-sans font-semibold text-xs leading-snug group-hover:text-ember-400 transition-colors">
                    IT Lecturer
                  </div>
                  <div className="text-[11px] font-mono text-textMute pt-0.5 truncate">
                    AIMS Academy
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-ember-500/0 via-ember-500 to-ember-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Position 3: IIUC Postgraduate */}
                <div className="group relative p-3 rounded-xl border border-ink-700/80 bg-ink-900/90 hover:border-amber-400/60 hover:bg-ink-850 hover:shadow-[0_10px_25px_rgba(245,158,11,0.15)] transition-all duration-300 block overflow-hidden">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-mono text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      Academic
                    </span>
                    <span className="text-[10px] font-mono text-textMute">Pursuing</span>
                  </div>
                  <div className="text-bone font-sans font-semibold text-xs leading-snug group-hover:text-amber-400 transition-colors">
                    MSc in CSE
                  </div>
                  <div className="text-[11px] font-mono text-textMute pt-0.5 truncate">
                    IIUC Dept. of CSE
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Technology Ecosystem Map Column (First on mobile order-1) */}
          <div className="order-1 lg:order-2 lg:col-span-6 w-full flex items-start justify-center z-10">
            <TechEcosystemVisual projects={projects} experience={experience} />
          </div>
        </div>
      </div>

      {/* Bottom Status Strip */}
      <div className="w-full hairline-top pt-3 pb-2.5">
        <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-textMute">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-bone">Available for Projects</span>
            </div>

            <span className="hidden sm:inline text-ink-700">•</span>

            <div className="flex items-center gap-1.5 text-textSoft">
              <MapPin className="w-3.5 h-3.5 text-ember-500 shrink-0" />
              <span>Chattogram, Bangladesh</span>
            </div>

            <span className="hidden md:inline text-ink-700">•</span>

            <div className="hidden md:flex items-center gap-1.5 text-textSoft">
              <Code2 className="w-3.5 h-3.5 text-ember-400 shrink-0" />
              <span>Full-Stack & Database-driven Web Apps</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 hover:text-bone transition-colors">
            <a href="#intro" className="flex items-center gap-1">
              <span>Scroll down</span>
              <ArrowDown className="w-3 h-3 animate-bounce text-ember-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


