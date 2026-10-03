import * as React from "react";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  title: string;
  body?: string;
  status?: "implemented" | "planned";
}

export interface FeatureListProps {
  features: FeatureItem[];
  className?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({ features, className }) => {
  if (!features || features.length === 0) return null;

  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-xl font-serif text-bone hairline-bottom pb-3">
        Key System Capabilities
      </h3>

      <div className="space-y-4">
        {features.map((feat, idx) => {
          const num = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
          const isPlanned = feat.status === "planned";

          return (
            <div
              key={feat.title}
              className={cn(
                "p-4 rounded border transition-colors flex items-start gap-4",
                isPlanned
                  ? "border-dashed border-ink-700 bg-ink-900/40 text-textMute"
                  : "border-ink-700 bg-ink-850 text-textSoft hover:border-ink-600"
              )}
            >
              <div className="font-mono text-xs text-ember-500 font-bold mt-0.5 shrink-0">
                {num}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-serif text-bone font-medium">
                    {feat.title}
                  </h4>
                  {isPlanned && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-dashed border-ink-600 text-textMute">
                      Planned
                    </span>
                  )}
                </div>

                {feat.body && (
                  <p className="text-sm leading-relaxed font-sans">
                    {feat.body}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
