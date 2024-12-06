import type { ReactNode } from "react";

import { DashboardProviders } from "../_components/providers";

interface DashboardLayoutProps {
  children: ReactNode | JSX.Element;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <DashboardProviders>
      <main className="h-full w-full">{props.children}</main>
    </DashboardProviders>
  );
};

export default DashboardLayout;
