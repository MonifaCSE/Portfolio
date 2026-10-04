import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 sm:px-8 py-20 space-y-6">
      <div className="text-xs font-mono tracking-widest text-ember-500 uppercase font-semibold">
        404 — Not Found
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-bone leading-tight">
        Page not found.
      </h1>

      <p className="text-textSoft text-base sm:text-lg max-w-md mx-auto font-sans leading-relaxed">
        The requested page could not be located or may have moved.
      </p>

      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
        <Button variant="primary" href="/">
          Back home
        </Button>
        <Button variant="secondary" href="/#work">
          See my work
        </Button>
      </div>
    </div>
  );
}
