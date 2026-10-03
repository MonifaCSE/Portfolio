import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export interface DirectionProps {
  directionData: {
    title: string;
    heading: string;
    subheading: string;
    description: string;
    evidenceItems: { title: string; detail: string }[];
    caseStudyNotice: string;
  };
}

export const Direction: React.FC<DirectionProps> = ({ directionData }) => {
  return (
    <section id="direction" className="py-20 md:py-28 hairline-bottom bg-ink-900">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            index="05"
            label="Direction"
            title="Where I'm heading: AI & automation"
            accentWord="heading"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-serif text-bone">
                {directionData.subheading}
              </h3>
              <p className="text-sm text-textSoft leading-relaxed font-sans">
                {directionData.description}
              </p>
            </div>

            {/* Right Column: Evidence & Case Study Roadmap (Cols 6-12) */}
            <div className="lg:col-span-7 p-8 rounded-lg border border-ink-700 bg-ink-850 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-ember-500 font-semibold">
                Documented Evidence & Research
              </h4>

              <div className="space-y-4">
                {directionData.evidenceItems.map((item) => (
                  <div key={item.title} className="p-4 rounded bg-ink-900/60 border border-ink-700 space-y-1">
                    <div className="text-sm font-serif text-bone font-medium">
                      • {item.title}
                    </div>
                    <div className="text-xs text-textMute font-sans pl-3">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 hairline-top text-xs font-mono text-textMute">
                {directionData.caseStudyNotice}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
