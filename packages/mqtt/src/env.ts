import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]).optional(),
  },
  client: {
    NEXT_PUBLIC_MQTT_HOST: z.string().min(1),
    NEXT_PUBLIC_MQTT_USERNAME: z.string().min(1),
    NEXT_PUBLIC_MQTT_PASSWORD: z.string().min(1),
    NEXT_PUBLIC_MQTT_TOPIC: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_MQTT_HOST: process.env.NEXT_PUBLIC_MQTT_HOST,
    NEXT_PUBLIC_MQTT_USERNAME: process.env.NEXT_PUBLIC_MQTT_USERNAME,
    NEXT_PUBLIC_MQTT_PASSWORD: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
    NEXT_PUBLIC_MQTT_TOPIC: process.env.NEXT_PUBLIC_MQTT_TOPIC,
  },
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
