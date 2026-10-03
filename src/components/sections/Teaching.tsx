import * as React from "react";
import { Experience, Education, Credential } from "@/lib/schemas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

export interface TeachingProps {
  experience: Experience[];
  education: Education[];
  credentials: Credential[];
}

export const Teaching: React.FC<TeachingProps> = ({ experience, education, credentials }) => {
  return (
    <section id="teaching" className="py-20 md:py-28 hairline-bottom bg-ink-950">
      <div className="max-w-content mx-auto px-5 sm:px-8 space-y-16">
        <Reveal>
          <SectionHeader
            index="04"
            label="Teaching & Academic"
            title="Teaching is how I stay precise."
            accentWord="precise"
            description="Computer science lecturer and instructor roles, guiding lab coursework, structured programming, and machine learning."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Teaching Experience Timeline (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-textMute font-semibold">
                Teaching & Academic Roles
              </h3>

              <div className="space-y-8 relative pl-6 border-l border-ink-700">
                {experience.map((role) => (
                  <div key={role.id} className="relative space-y-2 group">
                    {/* Timeline Dot */}
                    <span
                      className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ${
                        role.isCurrent ? "bg-ember-500 ring-4 ring-ember-wash" : "bg-ink-600"
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-serif text-bone group-hover:text-ember-400 transition-colors">
                        {role.title}
                      </h4>
                      <span className="text-xs font-mono text-textMute">
                        {role.startDate} — {role.endDate}
                      </span>
                    </div>

                    <div className="text-xs font-sans text-textSoft font-medium">
                      {role.organization} · <span className="text-textMute">{role.location}</span>
                    </div>

                    <ul className="space-y-1 pt-1 text-xs text-textMute">
                      {role.description.map((desc, i) => (
                        <li key={i}>• {desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <TextLink href="/about">View full academic timeline & credentials →</TextLink>
              </div>
            </div>

            {/* Right: Academic Qualifications & Credentials (Cols 8-12) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Education Summary */}
              <div className="p-6 rounded-lg border border-ink-700 bg-ink-900/60 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-textMute font-semibold">
                  Degrees & Education
                </h3>

                <div className="space-y-4 text-sm">
                  {education.slice(0, 2).map((edu) => (
                    <div key={edu.degree} className="space-y-1 pb-3 hairline-bottom last:border-none last:pb-0">
                      <div className="text-bone font-medium font-sans">{edu.degree}</div>
                      <div className="text-xs text-textMute">{edu.institution}</div>
                      <div className="flex items-center justify-between text-xs font-mono text-ember-400 pt-0.5">
                        <span>{edu.dates}</span>
                        <span>{edu.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials Summary */}
              <div className="p-6 rounded-lg border border-ink-700 bg-ink-900/60 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-textMute font-semibold">
                  Certifications
                </h3>

                <ul className="space-y-3 text-xs font-sans">
                  {credentials.map((cred) => (
                    <li key={cred.title} className="flex items-start justify-between gap-2">
                      <span className="text-bone font-medium">• {cred.title}</span>
                      <span className="font-mono text-textMute shrink-0">{cred.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
