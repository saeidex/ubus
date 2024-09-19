import type { Config } from "tailwindcss";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--md-sys-color-surface-container-lowest))",
        primary: {
          foreground: "hsl(var(--md-sys-color-on-primary))",
        },
        secondary: {
          foreground: "hsl(var(--md-sys-color-on-secondary))",
        },
      },
    },
  },
} satisfies Config;
