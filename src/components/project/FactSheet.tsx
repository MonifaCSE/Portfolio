import * as React from "react";
import { Project } from "@/lib/schemas";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/utils";

export interface FactSheetProps {
  project: Project;
  className?: string;
}

export const FactSheet: React.FC<FactSheetProps> = ({ project, className }) => {
  return (
    <div
      className={cn(
        "p-6 sm:p-8 rounded-lg border border-ink-700 bg-ink-850 space-y-6 shadow-xl",
        className
      )}
    >
      <h3 className="text-xs font-mono tracking-widest text-textMute uppercase font-semibold hairline-bottom pb-3">
        Project Fact Sheet
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-sans">
        {/* Item 1: Year */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-textMute uppercase">Year</div>
          <div className="text-bone font-medium">{project.year}</div>
        </div>

        {/* Item 2: Project Type & Context */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-textMute uppercase">Type & Context</div>
          <div className="text-bone font-medium capitalize">{project.type} project</div>
        </div>

        {/* Item 3: Status */}
        <div className="space-y-1">
          <div className="text-xs font-mono text-textMute uppercase">Status</div>
          <div>
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Item 4: Role */}
        <div className="sm:col-span-2 lg:col-span-3 space-y-1 hairline-top pt-4">
          <div className="text-xs font-mono text-textMute uppercase">My Role & Ownership</div>
          <div className="text-textSoft leading-relaxed font-sans text-sm">
            {project.role} {project.teamScope && <span className="text-textMute font-mono text-xs">({project.teamScope} project)</span>}
          </div>
        </div>

        {/* Item 5: Stack */}
        <div className="sm:col-span-2 lg:col-span-3 space-y-2 hairline-top pt-4">
          <div className="text-xs font-mono text-textMute uppercase">Technology Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech.name} variant="default">
                {tech.name}
              </Tag>
            ))}
          </div>
        </div>

        {/* Item 6: Links (Rendered only if present) */}
        {project.links && (project.links.live || project.links.repo) && (
          <div className="sm:col-span-2 lg:col-span-3 space-y-2 hairline-top pt-4">
            <div className="text-xs font-mono text-textMute uppercase">Project Links</div>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              {project.links.live && (
                <TextLink href={project.links.live} external>
                  Live Application ↗
                </TextLink>
              )}
              {project.links.repo && (
                <TextLink href={project.links.repo} external>
                  Source Repository ↗
                </TextLink>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
