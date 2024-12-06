import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]).optional(),
  },
  client: {
    NEXT_PUBLIC_THINGSPEAK_CHENNEL_ID: z.string().min(1),
    NEXT_PUBLIC_THINGSPEAK_READ_API_KEY: z.string().min(1),
    NEXT_PUBLIC_THINGSPEAK_WRITE_API_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_THINGSPEAK_CHENNEL_ID:
      process.env.NEXT_PUBLIC_THINGSPEAK_CHENNEL_ID,
    NEXT_PUBLIC_THINGSPEAK_READ_API_KEY:
      process.env.NEXT_PUBLIC_THINGSPEAK_READ_API_KEY,
    NEXT_PUBLIC_THINGSPEAK_WRITE_API_KEY:
      process.env.NEXT_PUBLIC_THINGSPEAK_WRITE_API_KEY,
  },
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
