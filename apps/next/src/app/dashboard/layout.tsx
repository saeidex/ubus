import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@ubus/auth";
import { MqttProvider } from "@ubus/mqtt";

interface DashboardLayoutProps {
  children: ReactNode | JSX.Element;
}

const DashboardLayout = async (props: DashboardLayoutProps) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
    return null;
  }

  return (
    <MqttProvider>
      <main className="h-full w-full">{props.children}</main>
    </MqttProvider>
  );
};

export default DashboardLayout;
