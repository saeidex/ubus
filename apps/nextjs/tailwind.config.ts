import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@ubus/tailwind-config/web";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content, "../../packages/ui/src/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--md-sys-color-primary))",
          container: "hsl(var(--md-sys-color-primary-container))",
          fixed: {
            DEFAULT: "hsl(var(--md-sys-color-primary-fixed))",
            dim: "hsl(var(--md-sys-color-primary-fixed-dim))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--md-sys-color-secondary))",
          container: "hsl(var(--md-sys-color-secondary-container))",
          fixed: {
            DEFAULT: "hsl(var(--md-sys-color-secondary-fixed))",
            dim: "hsl(var(--md-sys-color-secondary-fixed-dim))",
          },
        },
        tertiary: {
          DEFAULT: "hsl(var(--md-sys-color-tertiary))",
          container: "hsl(var(--md-sys-color-tertiary-container))",
          fixed: {
            DEFAULT: "hsl(var(--md-sys-color-tertiary-fixed))",
            dim: "hsl(var(--md-sys-color-tertiary-fixed-dim))",
          },
        },
        error: {
          DEFAULT: "hsl(var(--md-sys-color-error))",
          container: "hsl(var(--md-sys-color-error-container))",
        },
        background: "hsl(var(--md-sys-color-background))",
        surface: {
          DEFAULT: "hsl(var(--md-sys-color-surface))",
          tint: "hsl(var(--md-sys-color-surface-tint))",
          variant: "hsl(var(--md-sys-color-surface-variant))",
          dim: "hsl(var(--md-sys-color-surface-dim))",
          bright: "hsl(var(--md-sys-color-surface-bright))",
          container: {
            lowest: "hsl(var(--md-sys-color-surface-container-lowest))",
            low: "hsl(var(--md-sys-color-surface-container-low))",
            DEFAULT: "hsl(var(--md-sys-color-surface-container))",
            high: "hsl(var(--md-sys-color-surface-container-high))",
            highest: "hsl(var(--md-sys-color-surface-container-highest))",
          },
        },
        outline: {
          DEFAULT: "hsl(var(--md-sys-color-outline))",
          variant: "hsl(var(--md-sys-color-outline-variant))",
        },
        shadow: "hsl(var(--md-sys-color-shadow))",
        scrim: "hsl(var(--md-sys-color-scrim))",
        inverse: {
          surface: "hsl(var(--md-sys-color-inverse-surface))",
          on: {
            surface: "hsl(var(--md-sys-color-inverse-on-surface))",
          },
          primary: "hsl(var(--md-sys-color-inverse-primary))",
        },
        on: {
          primary: {
            DEFAULT: "hsl(var(--md-sys-color-on-primary))",
            container: "hsl(var(--md-sys-color-on-primary-container))",
            fixed: {
              DEFAULT: "hsl(var(--md-sys-color-on-primary-fixed))",
              variant: "hsl(var(--md-sys-color-on-primary-fixed-variant))",
            },
          },
          secondary: {
            DEFAULT: "hsl(var(--md-sys-color-on-secondary))",
            container: "hsl(var(--md-sys-color-on-secondary-container))",
            fixed: {
              DEFAULT: "hsl(var(--md-sys-color-on-secondary-fixed))",
              variant: "hsl(var(--md-sys-color-on-secondary-fixed-variant))",
            },
          },
          tertiary: {
            DEFAULT: "hsl(var(--md-sys-color-on-tertiary))",
            container: "hsl(var(--md-sys-color-on-tertiary-container))",
            fixed: {
              DEFAULT: "hsl(var(--md-sys-color-on-tertiary-fixed))",
              variant: "hsl(var(--md-sys-color-on-tertiary-fixed-variant))",
            },
          },
          error: {
            DEFAULT: "hsl(var(--md-sys-color-on-error))",
            container: "hsl(var(--md-sys-color-on-error-container))",
          },
          background: "hsl(var(--md-sys-color-on-background))",
          surface: {
            DEFAULT: "hsl(var(--md-sys-color-on-surface))",
            variant: "hsl(var(--md-sys-color-on-surface-variant))",
          },
        },
      },
    },
  },
} satisfies Config;
