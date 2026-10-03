import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "var(--ink-950)",
          900: "var(--ink-900)",
          850: "var(--ink-850)",
          800: "var(--ink-800)",
          700: "var(--ink-700)",
          600: "var(--ink-600)",
        },
        ember: {
          400: "var(--ember-400)",
          500: "var(--ember-500)",
          600: "var(--ember-600)",
          wash: "var(--ember-wash)",
        },
        bone: "var(--bone)",
        paper: "var(--paper)",
        textMute: "var(--text-mute)",
        textSoft: "var(--text-soft)",
        danger: "var(--danger)",
        success: "var(--success)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "1280px",
        wide: "1440px",
      },
      transitionTimingFunction: {
        "out-custom": "var(--ease-out)",
        "in-out-custom": "var(--ease-in-out)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
