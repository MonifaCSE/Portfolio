/**
 /**
  * Capability gating checker for 3D Hero Scene (PRD §16.4, DESIGN §16)
  * Returns true ONLY if all performance, accessibility, and WebGL checks pass.
  */
export function canLoad3DHero(): boolean {
  if (typeof window === "undefined") return false;

  // 1. Viewport width check (Desktop/Tablet >= 768px)
  if (window.innerWidth < 768) return false;

  // 2. Accessibility check (prefers-reduced-motion)
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery.matches) return false;

  // 3. Network Save-Data mode check
  const nav = navigator as unknown as { connection?: { saveData?: boolean } };
  if (nav.connection?.saveData === true) return false;

  // 4. Hardware concurrency check (CPU cores >= 4)
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return false;
  }

  // 5. WebGL2 capability check
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl");
    if (!gl) return false;
  } catch (e) {
    return false;
  }

  return true;
}
