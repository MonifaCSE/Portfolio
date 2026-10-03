import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export interface MDXRendererProps {
  source: string;
}

export const MDXRenderer: React.FC<MDXRendererProps> = ({ source }) => {
  if (!source) return null;

  return (
    <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-bone prose-p:text-textSoft prose-p:leading-relaxed prose-a:text-ember-400 prose-strong:text-bone prose-code:font-mono prose-code:text-ember-400 prose-code:bg-ink-850 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
      <MDXRemote source={source} />
    </div>
  );
};
