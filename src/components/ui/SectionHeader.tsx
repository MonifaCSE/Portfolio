import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  index: string; // e.g. "01"
  label: string; // e.g. "Selected Work"
  title: string;
  accentWord?: string; // Word in title to style as italic ember
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  label,
  title,
  accentWord,
  description,
  className,
}) => {
  // Render title with optional accent word replacement
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return title;
    }
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="accent-word font-serif">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("space-y-4 mb-12 md:mb-16", className)}>
      <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-textMute uppercase">
        <span className="text-ember-500 font-semibold">{index}</span>
        <span className="text-ink-600">—</span>
        <span>{label}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-bone leading-tight">
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-textSoft text-base md:text-lg max-w-2xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
};
