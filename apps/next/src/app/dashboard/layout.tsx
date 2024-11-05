import type { ReactNode } from "react";

import { MqttProvider } from "@ubus/mqtt";

interface DashboardLayoutProps {
  children: ReactNode | JSX.Element;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <MqttProvider>
      <main className="h-full w-full border">{props.children}</main>
    </MqttProvider>
  );
};

export default DashboardLayout;
