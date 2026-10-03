import * as React from "react";
import { Button } from "@/components/ui/Button";
import { HeroFallback } from "@/components/three/HeroFallback";
import { ArrowDown } from "lucide-react";

export interface HeroProps {
  siteData: {
    eyebrow: string;
    tagline: string;
    subline: string;
    cvLink: { label: string; href: string };
  };
}

export const Hero: React.FC<HeroProps> = ({ siteData }) => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-8 md:py-12 hairline-bottom overflow-hidden">
      {/* Container */}
      <div className="max-w-content mx-auto px-5 sm:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Eyebrow */}
            <div className="inline-block text-xs font-mono tracking-widest text-textMute uppercase font-medium">
              {siteData.eyebrow}
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-bone leading-[1.02] tracking-tight">
              Web applications,{" "}
              <span className="accent-word font-serif">built carefully</span> — and explained clearly.
            </h1>

            {/* Subline */}
            <p className="text-textSoft text-base sm:text-lg lg:text-xl font-sans max-w-[52ch] leading-relaxed">
              {siteData.subline}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" href="/#work" showArrow>
                View projects
              </Button>
              <Button variant="secondary" href={siteData.cvLink.href} external>
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column: Exploded Stack 2D Diagram (Cols 7-12) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <HeroFallback />
          </div>
        </div>
      </div>

      {/* Bottom Status Strip */}
      <div className="w-full hairline-top pt-4 pb-2">
        <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-textMute">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ember-500 inline-block" />
            <span>Currently — IT Lecturer at AIMS Academy</span>
          </div>

          <div className="hidden md:block">
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
