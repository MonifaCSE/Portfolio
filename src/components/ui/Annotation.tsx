import * as React from "react";
import { cn } from "@/lib/utils";

export interface AnnotationProps {
  number: number;
  label?: string;
  xPercent?: number; // X position in percentage (0-100)
  yPercent?: number; // Y position in percentage (0-100)
  className?: string;
}

export const Annotation: React.FC<AnnotationProps> = ({
  number,
  label,
  xPercent = 50,
  yPercent = 50,
  className,
}) => {
  return (
    <div
      className={cn("absolute group z-10 -translate-x-1/2 -translate-y-1/2", className)}
      style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
    >
      <div className="w-5 h-5 rounded-full border border-ember-500 bg-ink-950 text-ember-500 text-[11px] font-mono font-bold flex items-center justify-center cursor-pointer transition-transform duration-150 group-hover:scale-110 shadow-lg">
        {number}
      </div>

      {label && (
        <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150 z-20">
          <div className="bg-ink-900 border border-ink-700 text-bone text-[12px] font-mono px-2.5 py-1 rounded whitespace-nowrap shadow-xl">
            {label}
          </div>
        </div>
      )}
    </div>
  );
};
