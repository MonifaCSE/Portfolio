import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-ink-950">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeader
            index="06"
            label="Contact"
            title="Let's talk."
            accentWord="talk"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading & Information (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-serif text-bone">
                Start a conversation
              </h3>
              
              <p className="text-sm text-textSoft leading-relaxed font-sans">
                If you have a web application project, teaching engagement, or academic collaboration opportunity in mind, send me a message using the form.
              </p>

              <div className="space-y-4 pt-2 border-t border-ink-700 text-xs font-mono text-textMute">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-ember-500 shrink-0" />
                  <span>Direct mailto: draft pre-filled on submission</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ember-500 shrink-0" />
                  <span>Replies sent to the email address you provide</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Component (Cols 6-12) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
