import type { Config } from "tailwindcss";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--ubus-sys-color-surface-container-lowest))",
        primary: {
          foreground: "hsl(var(--ubus-sys-color-on-primary))",
        },
        secondary: {
          foreground: "hsl(var(--ubus-sys-color-on-secondary))",
        },
      },
    },
  },
} satisfies Config;
