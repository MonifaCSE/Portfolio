import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-20 md:py-28 hairline-bottom bg-ink-950">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            index="01"
            label="Intro"
            title="I build dynamic web applications — and I teach how they work."
            accentWord="dynamic"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-4">
            {/* Pillar 1: Build */}
            <div className="space-y-3 p-6 rounded-lg border border-ink-700 bg-ink-900/50 hover:border-ink-600 transition-colors">
              <div className="text-xs font-mono text-ember-500 uppercase tracking-wider font-semibold">
                01 — Build
              </div>
              <h3 className="text-xl font-serif text-bone">Web Applications</h3>
              <p className="text-sm text-textSoft leading-relaxed">
                Database-driven web platforms, single-vendor e-commerce engines, training institute systems, and role-based administration back-offices.
              </p>
            </div>

            {/* Pillar 2: Teach */}
            <div className="space-y-3 p-6 rounded-lg border border-ink-700 bg-ink-900/50 hover:border-ink-600 transition-colors">
              <div className="text-xs font-mono text-ember-500 uppercase tracking-wider font-semibold">
                02 — Teach
              </div>
              <h3 className="text-xl font-serif text-bone">Computer Science</h3>
              <p className="text-sm text-textSoft leading-relaxed">
                Lecturing OTHM Level 3/5 IT diplomas, guiding machine learning labs, and teaching university courses in software development, compiler design, and C++/Python labs since 2022.
              </p>
            </div>

            {/* Pillar 3: Explore */}
            <div className="space-y-3 p-6 rounded-lg border border-ink-700 bg-ink-900/50 hover:border-ink-600 transition-colors">
              <div className="text-xs font-mono text-ember-500 uppercase tracking-wider font-semibold">
                03 — Explore
              </div>
              <h3 className="text-xl font-serif text-bone">AI & Automation</h3>
              <p className="text-sm text-textSoft leading-relaxed">
                Investigating practical AI workflows, data science applications, and deep learning model integration as a long-term technical direction.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
