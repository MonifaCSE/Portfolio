import * as React from "react";
import Link from "next/link";
import { TextLink } from "@/components/ui/TextLink";

export interface FooterProps {
  siteData: {
    name: string;
    navLinks: { label: string; href: string }[];
    cvLink: { label: string; href: string };
    location: { city: string; country: string };
  };
}

export const Footer: React.FC<FooterProps> = ({ siteData }) => {
  return (
    <footer className="bg-ink-900 hairline-top pt-16 pb-12 text-textSoft">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 hairline-bottom">
          {/* Column 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="font-serif text-2xl text-bone hover:text-ember-400 transition-colors inline-block"
            >
              {siteData.name}
            </Link>
            <p className="text-sm text-textMute max-w-sm font-sans">
              Web Developer & IT Lecturer based in {siteData.location.city}, {siteData.location.country}. Building database-driven web applications and teaching software engineering.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-textMute uppercase font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-bone transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-bone transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={siteData.cvLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bone transition-colors"
                >
                  Curriculum Vitae (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-textMute uppercase font-semibold">
              Connect
            </h3>
            <p className="text-sm text-textMute">
              Open for professional inquiries, teaching engagements, and software engineering opportunities.
            </p>
            <div className="pt-2">
              <TextLink href="/#contact">Get in Touch →</TextLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-textMute">
          <div>
            © {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </div>
          <div>
            <a href="#main-content" className="hover:text-bone transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
