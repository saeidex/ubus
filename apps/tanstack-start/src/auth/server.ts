import { organization } from "better-auth/plugins";
import { reactStartCookies } from "better-auth/react-start";

import { initAuth } from "@ubus/auth";

import { env } from "~/env";
import { getBaseUrl } from "~/lib/url";

export const auth = initAuth({
  baseUrl: getBaseUrl(),
  productionUrl:
    env.NODE_ENV === "production"
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL ?? "ubus.vercel.app"}`
      : `http://localhost:3000`,
  secret: env.AUTH_SECRET,
  discordClientId: env.AUTH_DISCORD_ID,
  discordClientSecret: env.AUTH_DISCORD_SECRET,

  extraPlugins: [reactStartCookies(), organization()],
});
