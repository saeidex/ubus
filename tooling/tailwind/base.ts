import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // shadcn colors tweaked
      colors: {
        border: "hsl(var(--md-sys-color-outline))",
        input: "hsl(var(--md-sys-color-surface-container-low))",
        ring: "hsl(var(--md-sys-color-outline-variant))",
        background: "hsl(var(--md-sys-color-background))",
        foreground: "hsl(var(--md-sys-color-on-background))",
        primary: {
          DEFAULT: "hsl(var(--md-sys-color-primary))",
          foreground: "hsl(var(--md-sys-color-on-primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--md-sys-color-secondary))",
          foreground: "hsl(var(--md-sys-color-on-secondary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--md-sys-color-error))",
          foreground: "hsl(var(--md-sys-color-on-error))",
        },
        muted: {
          DEFAULT: "hsl(var(--md-sys-color-surface-dim))",
          foreground: "hsl(var(--md-sys-color-on-surface))",
        },
        accent: {
          DEFAULT: "hsl(var(--md-sys-color-tertiary))",
          foreground: "hsl(var(--md-sys-color-on-tertiary))",
        },
        popover: {
          DEFAULT: "hsl(var(--md-sys-color-secondary-container))",
          foreground: "hsl(var(--md-sys-color-secondary-container))",
        },
        card: {
          DEFAULT: "hsl(var(--md-sys-color-primary-container))",
          foreground: "hsl(var(--md-sys-color-on-primary-container))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--md-sys-color-outline))",
      },
    },
  },
} satisfies Config;
