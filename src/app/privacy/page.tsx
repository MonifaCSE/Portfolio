import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Monifa Sultana's portfolio website detailing data handling, mailto form processing, and cookie policy.",
};

export default function PrivacyPage() {
  return (
    <article className="py-12 md:py-20 bg-ink-950 min-h-screen">
      <div className="max-w-content mx-auto px-5 sm:px-8 space-y-10">
        
        {/* Top Back Link */}
        <div className="hairline-bottom pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-textMute hover:text-bone transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="space-y-3">
          <div className="text-xs font-mono tracking-widest text-ember-500 uppercase font-semibold">
            Legal & Privacy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-bone leading-tight">
            Privacy Policy
          </h1>
          <div className="text-xs font-mono text-textMute">
            Last Updated: October 2026
          </div>
        </div>

        {/* Content Body - 68ch Max Width */}
        <div className="max-w-[68ch] space-y-8 text-textSoft font-sans text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-bone hairline-bottom pb-2">
              1. Overview
            </h2>
            <p>
              This website is the personal professional portfolio of <strong>Monifa Sultana</strong> (Web Developer and Computer Science Lecturer). I value your privacy and believe in full transparency regarding how information is handled when you visit this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-bone hairline-bottom pb-2">
              2. Information Collected & Contact Form
            </h2>
            <p>
              The contact form on this site operates using a client-side <code className="text-ember-400 font-mono text-xs bg-ink-850 px-1 py-0.5 rounded">mailto:</code> integration:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-textMute">
              <li>
                When you fill out the contact form (Name, Email, Inquiry Reason, and Message), the data is compiled entirely within your browser to launch your local email client.
              </li>
              <li>
                <strong>No database storage:</strong> Your message details are not sent to or stored in a web server database.
              </li>
              <li>
                Information you transmit via email is used strictly to reply to your inquiry and is never shared, sold, or rented to third parties.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-bone hairline-bottom pb-2">
              3. Cookies & Analytics
            </h2>
            <p>
              This portfolio is hosted as a static web application on GitHub Pages. It does not set tracking cookies, session replay tools, or advertising pixels on your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-bone hairline-bottom pb-2">
              4. External Links
            </h2>
            <p>
              This site contains links to external websites (such as GitHub, LinkedIn, and research institutions). I am not responsible for the privacy practices or content of third-party external sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-bone hairline-bottom pb-2">
              5. Contacting Me
            </h2>
            <p>
              If you have any questions about this Privacy Policy or data handling, you may reach out directly via the{" "}
              <Link href="/#contact" className="text-ember-400 underline hover:text-bone font-medium">
                contact form
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </article>
  );
}
