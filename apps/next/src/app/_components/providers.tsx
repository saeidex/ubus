import type { ReactNode } from "react";

import { HookProviders } from "@ubus/hooks/hook-providers";
import { MqttProvider } from "@ubus/mqtt";

export const DashboardProviders = ({
  children,
}: {
  children: ReactNode | JSX.Element;
}) => {
  return (
    <HookProviders>
      <MqttProvider>{children}</MqttProvider>
    </HookProviders>
  );
};
