"use client";

import * as React from "react";
import Image from "next/image";
import { ScreenshotPlaceholder } from "@/components/project/ScreenshotPlaceholder";
import { cn } from "@/lib/utils";

export interface BrowserFrameProps {
  src?: string;
  alt: string;
  urlLabel?: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  src,
  alt,
  urlLabel = "project preview",
  width = 1600,
  height = 1000,
  className,
  aspectRatio = "aspect-[16/10]",
}) => {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      className={cn(
        "w-full rounded-lg border border-ink-700 bg-ink-850 overflow-hidden shadow-2xl transition-border duration-200 hover:border-ink-600",
        className
      )}
    >
      {/* Top Browser Bar */}
      <div className="h-8 px-4 bg-ink-800 border-b border-ink-700 flex items-center justify-between">
        {/* Three Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-600 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-600 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-600 inline-block" />
        </div>

        {/* URL Pill */}
        <div className="px-3 py-0.5 rounded bg-ink-950/60 text-[11px] font-mono text-textMute tracking-wide truncate max-w-[200px] sm:max-w-[280px]">
          {urlLabel}
        </div>

        {/* Space Balance */}
        <div className="w-8" />
      </div>

      {/* Body Area */}
      <div className={cn("relative w-full bg-ink-900 overflow-hidden", aspectRatio)}>
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
          />
        ) : (
          <ScreenshotPlaceholder label={alt || urlLabel} />
        )}
      </div>
    </div>
  );
};
