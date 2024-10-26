import baseConfig, { restrictEnvAccess } from "@ubus/eslint-config/base";
import nextjsConfig from "@ubus/eslint-config/nextjs";
import reactConfig from "@ubus/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
