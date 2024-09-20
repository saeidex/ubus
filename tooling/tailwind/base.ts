import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "display-large": [
          "3.5625rem",
          { lineHeight: "4rem", fontWeight: "700" },
        ],
        "display-medium": [
          "2.8125rem",
          { lineHeight: "3.25rem", fontWeight: "700" },
        ],
        "display-small": [
          "2.5rem",
          { lineHeight: "2.75rem", fontWeight: "700" },
        ],
        "headline-large": ["2rem", { lineHeight: "2.5rem", fontWeight: "400" }],
        "headline-medium": [
          "1.75rem",
          { lineHeight: "2.25rem", fontWeight: "400" },
        ],
        "headline-small": ["1.5rem", { lineHeight: "2rem", fontWeight: "400" }],

        "title-large": [
          "1.375rem",
          { lineHeight: "1.75rem", fontWeight: "400" },
        ],
        "title-medium": [
          "1rem",
          { letterSpacing: "0.15px", fontWeight: "500" },
        ],
        "title-small": [
          "0.875rem",
          { letterSpacing: "0.1px", fontWeight: "500" },
        ],

        "label-large": [
          "0.875rem",
          { letterSpacing: "0.1px", fontWeight: "500" },
        ],
        "label-medium": [
          "0.75rem",
          { letterSpacing: "0.5px", fontWeight: "500" },
        ],
        "label-small": [
          "0.6875rem",
          { lineHeight: "1rem", letterSpacing: "0.5px", fontWeight: "500" },
        ],

        "body-large": ["1rem", { letterSpacing: "0.5px" }],
        "body-medium": ["0.875rem", { letterSpacing: "0.25px" }],
        "body-small": ["0.75rem", { letterSpacing: "0.4px" }],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--ubus-sys-color-primary))",
          container: "hsl(var(--ubus-sys-color-primary-container))",
          fixed: {
            DEFAULT: "hsl(var(--ubus-sys-color-primary-fixed))",
            dim: "hsl(var(--ubus-sys-color-primary-fixed-dim))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--ubus-sys-color-secondary))",
          container: "hsl(var(--ubus-sys-color-secondary-container))",
          fixed: {
            DEFAULT: "hsl(var(--ubus-sys-color-secondary-fixed))",
            dim: "hsl(var(--ubus-sys-color-secondary-fixed-dim))",
          },
        },
        tertiary: {
          DEFAULT: "hsl(var(--ubus-sys-color-tertiary))",
          container: "hsl(var(--ubus-sys-color-tertiary-container))",
          fixed: {
            DEFAULT: "hsl(var(--ubus-sys-color-tertiary-fixed))",
            dim: "hsl(var(--ubus-sys-color-tertiary-fixed-dim))",
          },
        },
        error: {
          DEFAULT: "hsl(var(--ubus-sys-color-error))",
          container: "hsl(var(--ubus-sys-color-error-container))",
        },
        background: "hsl(var(--ubus-sys-color-background))",
        surface: {
          DEFAULT: "hsl(var(--ubus-sys-color-surface))",
          tint: "hsl(var(--ubus-sys-color-surface-tint))",
          variant: "hsl(var(--ubus-sys-color-surface-variant))",
          dim: "hsl(var(--ubus-sys-color-surface-dim))",
          bright: "hsl(var(--ubus-sys-color-surface-bright))",
          container: {
            lowest: "hsl(var(--ubus-sys-color-surface-container-lowest))",
            low: "hsl(var(--ubus-sys-color-surface-container-low))",
            DEFAULT: "hsl(var(--ubus-sys-color-surface-container))",
            high: "hsl(var(--ubus-sys-color-surface-container-high))",
            highest: "hsl(var(--ubus-sys-color-surface-container-highest))",
          },
        },
        outline: {
          DEFAULT: "hsl(var(--ubus-sys-color-outline))",
          variant: "hsl(var(--ubus-sys-color-outline-variant))",
        },
        shadow: "hsl(var(--ubus-sys-color-shadow))",
        scrim: "hsl(var(--ubus-sys-color-scrim))",
        inverse: {
          surface: "hsl(var(--ubus-sys-color-inverse-surface))",
          on: {
            surface: "hsl(var(--ubus-sys-color-inverse-on-surface))",
          },
          primary: "hsl(var(--ubus-sys-color-inverse-primary))",
        },
        on: {
          primary: {
            DEFAULT: "hsl(var(--ubus-sys-color-on-primary))",
            container: "hsl(var(--ubus-sys-color-on-primary-container))",
            fixed: {
              DEFAULT: "hsl(var(--ubus-sys-color-on-primary-fixed))",
              variant: "hsl(var(--ubus-sys-color-on-primary-fixed-variant))",
            },
          },
          secondary: {
            DEFAULT: "hsl(var(--ubus-sys-color-on-secondary))",
            container: "hsl(var(--ubus-sys-color-on-secondary-container))",
            fixed: {
              DEFAULT: "hsl(var(--ubus-sys-color-on-secondary-fixed))",
              variant: "hsl(var(--ubus-sys-color-on-secondary-fixed-variant))",
            },
          },
          tertiary: {
            DEFAULT: "hsl(var(--ubus-sys-color-on-tertiary))",
            container: "hsl(var(--ubus-sys-color-on-tertiary-container))",
            fixed: {
              DEFAULT: "hsl(var(--ubus-sys-color-on-tertiary-fixed))",
              variant: "hsl(var(--ubus-sys-color-on-tertiary-fixed-variant))",
            },
          },
          error: {
            DEFAULT: "hsl(var(--ubus-sys-color-on-error))",
            container: "hsl(var(--ubus-sys-color-on-error-container))",
          },
          background: "hsl(var(--ubus-sys-color-on-background))",
          surface: {
            DEFAULT: "hsl(var(--ubus-sys-color-on-surface))",
            variant: "hsl(var(--ubus-sys-color-on-surface-variant))",
          },
        },
        // shadcn colors
        borderColor: {
          DEFAULT: "hsl(var(--ubus-sys-color-outline))",
        },
        border: "hsl(var(--ubus-sys-color-outline))",
        input: "hsl(var(--ubus-sys-color-surface-container-low))",
        ring: "hsl(var(--ubus-sys-color-outline-variant))",
        foreground: "hsl(var(--ubus-sys-color-on-surface-container))",
        destructive: {
          DEFAULT: "hsl(var(--ubus-sys-color-error))",
          foreground: "hsl(var(--ubus-sys-color-on-error))",
        },
        muted: {
          DEFAULT: "hsl(var(--ubus-sys-color-surface-dim))",
          foreground: "hsl(var(--ubus-sys-color-on-surface))",
        },
        card: {
          DEFAULT: "hsl(var(--ubus-sys-color-primary-container))",
          foreground: "hsl(var(--ubus-sys-color-on-primary-container))",
        },
      },
    },
  },
} satisfies Config;
