import * as React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Identity, Typography & CTAs (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-5 z-10">
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
            <p className="text-textSoft text-base sm:text-lg font-sans max-w-[50ch] leading-relaxed">
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
          </div>

          {/* Right Column: Evidence-based Build ↔ Teach Ecosystem Map (Cols 6-12) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center z-10">
            <TechEcosystemVisual projects={projects} experience={experience} />
          </div>
        </div>
      </div>

      {/* Bottom Status Strip */}
      <div className="w-full hairline-top pt-3 pb-2">
        <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-textMute">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ember-500 inline-block" />
              <span>Currently — Web Developer at Sevix Global</span>
            </div>
            <span className="hidden sm:inline text-ink-700">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ember-500 inline-block" />
              <span>IT Lecturer at AIMS Academy</span>
            </div>
          </div>

          <div className="hidden xl:block">
            MSc CSE, IIUC (pursuing)
          </div>

          <div className="hidden sm:flex items-center gap-1 hover:text-bone transition-colors cursor-pointer">
            <a href="#intro" className="flex items-center gap-1">
              <span>Scroll</span>
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


