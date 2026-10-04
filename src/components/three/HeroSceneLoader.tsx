"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { canLoad3DHero } from "@/lib/gating";
import { HeroFallback } from "@/components/three/HeroFallback";

// Lazy-load 3D canvas with ssr: false so R3F bundle is absent from initial waterfall
const ExplodedStackScene = dynamic(
  () => import("@/components/three/ExplodedStackScene"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const HeroSceneLoader: React.FC = () => {
  const [shouldRender3D, setShouldRender3D] = React.useState(false);
  const [sceneReady, setSceneReady] = React.useState(false);

  React.useEffect(() => {
    // 1. Run capability gating checks
    if (!canLoad3DHero()) {
      return;
    }

    // 2. Schedule 3D canvas load after page idle
    const loadTask = () => {
      setShouldRender3D(true);
      // Trigger crossfade after short mount buffer
      setTimeout(() => setSceneReady(true), 300);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadTask, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timerId = setTimeout(loadTask, 500);
      return () => clearTimeout(timerId);
    }
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[480px] flex items-center justify-center">
      {/* Permanent SVG Fallback - Crossfades out when 3D is ready */}
      <div
        className={`absolute inset-0 transition-opacity duration-600 ease-out ${
          sceneReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <HeroFallback />
      </div>

      {/* 3D R3F Scene Canvas - Crossfades in when ready */}
      {shouldRender3D && (
        <div
          className={`absolute inset-0 transition-opacity duration-600 ease-out ${
            sceneReady ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ExplodedStackScene />
        </div>
      )}
    </div>
  );
};
