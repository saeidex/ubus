import type { ReactNode } from "react";

import { HookProviders } from "@ubus/hooks/hook-providers";
import { MqttProvider } from "@ubus/mqtt-mock";

export const AppProviders = ({
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
