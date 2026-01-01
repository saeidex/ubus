import { defineConfig } from "eslint/config";

import { baseConfig } from "@ubus/eslint-config/base";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
);
