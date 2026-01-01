import { defineConfig } from "eslint/config";

import { baseConfig } from "@ubus/eslint-config/base";
import { reactConfig } from "@ubus/eslint-config/react";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
  reactConfig,
);
