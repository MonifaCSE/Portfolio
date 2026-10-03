import * as React from "react";
import { Experience } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export interface TimelineProps {
  entries: Experience[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ entries, className }) => {
  return (
    <div className={cn("space-y-8 relative pl-6 border-l border-ink-700", className)}>
      {entries.map((entry) => (
        <div key={entry.id} className="relative space-y-3 group">
          {/* Timeline Dot */}
          <span
            className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ${
              entry.isCurrent ? "bg-ember-500 ring-4 ring-ember-wash" : "bg-ink-600"
            }`}
            aria-hidden="true"
          />

          {/* Date & Title Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="text-xl font-serif text-bone group-hover:text-ember-400 transition-colors">
              {entry.title}
            </h3>
            <span className="text-xs font-mono text-textMute font-medium">
              {entry.startDate} — {entry.endDate}
            </span>
          </div>

          {/* Organization & Location */}
          <div className="text-sm font-sans text-textSoft font-medium">
            {entry.organization} · <span className="text-textMute">{entry.location}</span>
          </div>

          {/* Bullet Descriptions */}
          <ul className="space-y-1.5 text-xs sm:text-sm font-sans text-textMute pt-1">
            {entry.description.map((desc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-ember-500 font-mono mt-0.5">•</span>
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>

          {/* Course Tags */}
          {entry.courses && entry.courses.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {entry.courses.map((course) => (
                <span
                  key={course}
                  className="px-2 py-0.5 rounded bg-ink-900 border border-ink-700 text-[11px] font-mono text-textMute"
                >
                  {course}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
