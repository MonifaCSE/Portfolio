"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  cvLink: { label: string; href: string; confirmed: boolean };
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  cvLink,
}) => {
  // Lock body scroll when open & handle Esc key
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-ink-950 flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between h-14 hairline-bottom pb-4">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif text-2xl text-bone hover:text-ember-400 transition-colors"
        >
          Monifa Sultana
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-11 h-11 flex items-center justify-center text-bone hover:text-ember-400 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 my-auto py-8">
        {navLinks.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline gap-4 font-serif text-3xl text-bone hover:text-ember-400 transition-colors"
          >
            <span className="font-mono text-xs text-textMute group-hover:text-ember-500">
              0{idx + 1}
            </span>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Action Area */}
      <div className="pt-6 hairline-top space-y-4">
        <Button
          variant="primary"
          href={cvLink.href}
          external
          onClick={onClose}
          className="w-full"
        >
          {cvLink.label} (PDF)
        </Button>
        <p className="text-xs font-mono text-textMute text-center">
          Web Developer · IT Lecturer
        </p>
      </div>
    </div>
  );
};
