import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@content/site";

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
            {/* Left Column: Direct Links & Info (Cols 1-5) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-serif text-bone">
                Start a conversation
              </h3>
              
              <p className="text-sm text-textSoft leading-relaxed font-sans">
                Whether you have a web application project, teaching engagement, or academic collaboration opportunity in mind, feel free to reach out directly or send a message using the form.
              </p>

              {/* Direct Contact Cards (WhatsApp & Mail) */}
              <div className="space-y-3.5 pt-1">
                {/* WhatsApp Card */}
                <a
                  href={siteConfig.socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-ink-900/90 border border-ink-700/80 hover:border-emerald-500/50 hover:bg-ink-850/90 transition-all duration-300 shadow-md hover:shadow-emerald-950/20"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all">
                      <MessageCircle className="w-5 h-5" />
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                          WhatsApp
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          Direct
                        </span>
                      </div>
                      <div className="text-sm font-sans font-medium text-bone group-hover:text-emerald-300 transition-colors">
                        01791662418
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0">
                    <span>Chat</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Mail Card */}
                <a
                  href={siteConfig.socials.email.address}
                  className="group flex items-center justify-between p-4 rounded-xl bg-ink-900/90 border border-ink-700/80 hover:border-ember-500/50 hover:bg-ink-850/90 transition-all duration-300 shadow-md hover:shadow-ember-950/20"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-ember-500/10 border border-ember-500/30 flex items-center justify-center text-ember-400 shrink-0 group-hover:scale-105 group-hover:bg-ember-500/20 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono uppercase tracking-wider text-ember-400 font-semibold">
                        Direct Email
                      </div>
                      <div className="text-sm font-sans font-medium text-bone group-hover:text-ember-300 transition-colors truncate">
                        monifasultana626@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-ember-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 pl-2">
                    <span>Mail</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>

              <div className="space-y-2 pt-2 border-t border-ink-700/80 text-xs font-mono text-textMute">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ember-500 shrink-0" />
                  <span>Quick response time for business & academic inquiries</span>
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
