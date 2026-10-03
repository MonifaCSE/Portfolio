import * as React from "react";
import { Project } from "@/lib/schemas";
import { BrowserFrame } from "@/components/project/BrowserFrame";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";

export interface ProjectFeatureProps {
  project: Project;
  index: number; // 1-indexed (e.g. 1 -> "01")
  className?: string;
}

export const ProjectFeature: React.FC<ProjectFeatureProps> = ({ project, index, className }) => {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;
  const primaryScreenshot = project.screenshots[0];

  return (
    <div className={cn("space-y-6 py-8 hairline-bottom last:border-none", className)}>
      {/* Meta Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-textMute pb-2">
        <div className="flex items-center gap-3">
          <span className="text-ember-500 font-bold">{formattedIndex}</span>
          <span className="text-ink-600">—</span>
          <span className="uppercase tracking-wider">{project.category}</span>
        </div>

        <div className="flex items-center gap-3">
          <StatusBadge status={project.status} />
          <span>{project.year}</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Browser Frame Visual (Cols 1-7) */}
        <div className="lg:col-span-7">
          <BrowserFrame
            src={primaryScreenshot?.src}
            alt={primaryScreenshot?.alt || project.title}
            urlLabel={project.links?.live || `${project.slug}.demo`}
          />
        </div>

        {/* Right: Project Details (Cols 8-12) */}
        <div className="lg:col-span-5 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-serif text-bone leading-tight">
            {project.title}
          </h3>

          <p className="text-textSoft text-base font-sans leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Feature Bullets */}
          {project.features && project.features.length > 0 && (
            <ul className="space-y-2 pt-1 text-xs sm:text-sm font-sans text-textMute">
              {project.features.slice(0, 4).map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-ember-500 font-mono mt-0.5">•</span>
                  <span>
                    <strong className="text-bone font-medium">{feat.title}:</strong>{" "}
                    {feat.body}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.slice(0, 6).map((tech) => (
              <Tag key={tech.name} variant="default">
                {tech.name}
              </Tag>
            ))}
          </div>

          {/* Link */}
          <div className="pt-3">
            <TextLink href={`/projects/${project.slug}`}>
              Read case study →
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  );
};
