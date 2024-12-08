import type { ReactNode } from "react";

import { AppProviders } from "../_components/providers";

interface DashboardLayoutProps {
  children: ReactNode | JSX.Element;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <AppProviders>
      <main className="h-full w-full">{props.children}</main>
    </AppProviders>
  );
};

export default DashboardLayout;
