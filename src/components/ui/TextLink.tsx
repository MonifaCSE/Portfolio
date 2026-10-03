import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export const TextLink: React.FC<TextLinkProps> = ({ href, external, children, className, ...props }) => {
  const isExternal = external || href.startsWith("http://") || href.startsWith("https://");

  const classes = cn(
    "inline-flex items-center text-bone font-medium underline underline-offset-4 decoration-ink-600 hover:decoration-ember-500 hover:text-ember-400 transition-colors duration-150 group",
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} (opens in a new tab)`}
        className={classes}
        {...props}
      >
        <span>{children}</span>
        <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-textMute group-hover:text-ember-400 transition-colors duration-150" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
};
