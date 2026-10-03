import * as React from "react";
import { Skill } from "@/lib/schemas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export interface StackProps {
  skills: Skill[];
}

export const Stack: React.FC<StackProps> = ({ skills }) => {
  const practicalSkills = skills.filter((s) => s.level === "practical-project");
  const broaderSkills = skills.filter((s) => s.level === "broader-proficiency");

  // Group broader skills by category
  const groups: Record<string, Skill[]> = {
    "Languages": broaderSkills.filter((s) => s.group === "languages"),
    "Frameworks & Tools": broaderSkills.filter((s) => s.group === "frameworks" || s.group === "tools"),
    "Data & BI": broaderSkills.filter((s) => s.group === "data-and-bi"),
  };

  return (
    <section id="stack" className="py-20 md:py-28 hairline-bottom bg-ink-900">
      <div className="max-w-content mx-auto px-5 sm:px-8 space-y-16">
        <Reveal>
          <SectionHeader
            index="03"
            label="Technical Stack"
            title="Practical project tools and academic technical proficiency."
            accentWord="Practical"
          />

          {/* Tier 1: Practical Project Experience */}
          <div className="space-y-6 p-8 rounded-lg border border-ink-700 bg-ink-850">
            <div>
              <div className="text-xs font-mono text-ember-500 uppercase tracking-wider font-semibold mb-1">
                Tier 1 — Practical Project Experience
              </div>
              <p className="text-sm text-textMute font-sans">
                Technologies utilized in the documented software engineering projects above.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {practicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded border border-ink-600 bg-ink-900 text-bone text-xs font-mono"
                >
                  <span className="font-semibold">{skill.name}</span>
                  {skill.projects && skill.projects.length > 0 && (
                    <span className="text-[10px] text-textMute border-l border-ink-700 pl-2 uppercase">
                      Used in {skill.projects.length} project{skill.projects.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2: Broader Proficiency */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-mono text-textMute uppercase tracking-wider font-semibold mb-1">
                Tier 2 — Broader Academic & Technical Proficiency
              </div>
              <p className="text-sm text-textMute font-sans">
                Languages, libraries, and analytical software from computer science studies and lab instruction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
              {Object.entries(groups).map(([groupTitle, items]) => (
                <div key={groupTitle} className="space-y-3 p-6 rounded border border-ink-700 bg-ink-950/40">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-bone font-semibold">
                    {groupTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {items.map((item) => (
                      <Tag key={item.name} variant="muted">
                        {item.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
