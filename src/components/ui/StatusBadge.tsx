import * as React from "react";
import { cn } from "@/lib/utils";

export type ProjectStatus = "live" | "built" | "in-progress" | "academic" | "concept";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: ProjectStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className, ...props }) => {
  const statusConfig: Record<ProjectStatus, { label: string; icon: React.ReactNode }> = {
    live: {
      label: "Live System",
      icon: <span className="w-2 h-2 rounded-full bg-ember-500 animate-pulse" aria-hidden="true" />,
    },
    built: {
      label: "Built / Production-Ready",
      icon: <span className="w-2 h-2 rounded-full border border-bone" aria-hidden="true" />,
    },
    "in-progress": {
      label: "In Progress",
      icon: <span className="w-2 h-2 rounded-full border border-bone border-t-transparent animate-spin" aria-hidden="true" />,
    },
    academic: {
      label: "Academic Project",
      icon: <span className="w-2 h-2 rounded-sm border border-bone" aria-hidden="true" />,
    },
    concept: {
      label: "Concept Build",
      icon: <span className="w-2 h-2 rounded-sm border border-dashed border-textMute" aria-hidden="true" />,
    },
  };

  const { label, icon } = statusConfig[status] || statusConfig["built"];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded border border-ink-600 bg-ink-850 text-bone text-[12px] font-mono font-medium tracking-wide uppercase leading-none",
        className
      )}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};
