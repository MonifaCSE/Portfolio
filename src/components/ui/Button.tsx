import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "small";
  href?: string;
  external?: boolean;
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, external, showArrow, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold rounded transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-40 disabled:pointer-events-none group";

    const variantStyles = {
      primary:
        "bg-ember-500 text-ink-950 hover:bg-ember-400 active:bg-ember-600 border border-transparent shadow-sm",
      secondary:
        "bg-transparent text-bone border border-ink-600 hover:border-bone hover:bg-bone/5 active:bg-bone/10",
      ghost:
        "bg-transparent text-bone hover:text-ember-400 hover:bg-ink-850",
    };

    const sizeStyles = {
      default: "h-12 px-6 text-[15px]",
      small: "h-10 px-4 text-[14px]",
    };

    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-150 ease-out group-hover:translate-x-1" />
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
