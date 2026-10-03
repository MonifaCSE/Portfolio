"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SiteHeaderProps {
  siteData: {
    name: string;
    navLinks: { label: string; href: string }[];
    cvLink: { label: string; href: string; confirmed: boolean };
  };
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ siteData }) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Monitor scroll for header background condensation
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.2 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ember-500 focus:text-ink-950 focus:font-semibold focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 ease-out",
          scrolled
            ? "bg-ink-900/85 backdrop-blur-md hairline-bottom py-3 shadow-md"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-content mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="font-serif text-xl sm:text-2xl text-bone tracking-tight hover:text-ember-400 transition-colors"
          >
            {siteData.name}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "font-sans text-sm font-medium transition-colors relative py-1",
                    isActive
                      ? "text-bone font-semibold"
                      : "text-textSoft hover:text-bone"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ember-500 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Download CV Secondary Button */}
            <Button variant="secondary" size="small" href={siteData.cvLink.href} external>
              {siteData.cvLink.label}
            </Button>
          </nav>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="w-11 h-11 flex items-center justify-center text-bone hover:text-ember-400 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Dialog */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={siteData.navLinks}
        cvLink={siteData.cvLink}
      />
    </>
  );
};
