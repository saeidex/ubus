import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@ubus/eslint-config/base";

export default defineConfig(
  {
    ignores: ["script/**"],
  },
  baseConfig,
  restrictEnvAccess,
);
