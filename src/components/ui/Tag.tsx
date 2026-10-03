import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "muted" | "accent";
}

export const Tag: React.FC<TagProps> = ({ children, variant = "default", className, ...props }) => {
  const variantStyles = {
    default: "border-ink-600 text-bone bg-transparent",
    muted: "border-ink-700 text-textMute bg-ink-900/50",
    accent: "border-ember-500/50 text-ember-400 bg-ember-wash",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full border text-[12px] font-mono tracking-wider uppercase font-medium leading-none whitespace-nowrap",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
