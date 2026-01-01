import { defineConfig } from "eslint/config";

import { baseConfig } from "@ubus/eslint-config/base";
import { reactConfig } from "@ubus/eslint-config/react";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);
