"use client";

import * as React from "react";
import Image from "next/image";
import { ScreenshotPlaceholder } from "@/components/project/ScreenshotPlaceholder";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBasePath } from "@/lib/site-url";

export interface BrowserFrameProps {
  src?: string;
  alt: string;
  urlLabel?: string;
  liveUrl?: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  src,
  alt,
  urlLabel,
  liveUrl,
  width = 1600,
  height = 1000,
  className,
  aspectRatio = "aspect-[16/10]",
}) => {
  const [hasError, setHasError] = React.useState(false);

  const basePath = getBasePath();
  const imageSrc = src
    ? (src.startsWith("/") && !src.startsWith(basePath) && basePath ? `${basePath}${src}` : src)
    : undefined;

  // Clean formatted display URL (e.g., buildhub-ecommerce.com)
  const displayUrl = urlLabel || (liveUrl ? liveUrl.replace(/^https?:\/\//, "") : "project preview");
  const targetUrl = liveUrl || (urlLabel && urlLabel.startsWith("http") ? urlLabel : undefined);

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
        {targetUrl ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-ink-950/80 hover:bg-ink-900 border border-ink-700/60 hover:border-ember-500/50 text-[11px] font-mono text-ember-400 hover:text-bone tracking-wide truncate max-w-[220px] sm:max-w-[320px] transition-all"
            title={`Visit live site: ${targetUrl}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse shrink-0" />
            <span className="truncate">{displayUrl}</span>
            <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-70" />
          </a>
        ) : (
          <div className="px-3 py-0.5 rounded bg-ink-950/60 text-[11px] font-mono text-textMute tracking-wide truncate max-w-[200px] sm:max-w-[280px]">
            {displayUrl}
          </div>
        )}

        {/* Space Balance */}
        <div className="w-8" />
      </div>

      {/* Body Area */}
      <div className={cn("relative w-full bg-ink-900 overflow-hidden", aspectRatio)}>
        {imageSrc && !hasError ? (
          <Image
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
          />
        ) : (
          <ScreenshotPlaceholder label={alt || displayUrl} />
        )}
      </div>
    </div>
  );
};

