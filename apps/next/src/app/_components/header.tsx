import Link from "next/link";

import { Button } from "@ubus/ui/button";

import { Logo } from "./logo";
import { DashboardNavbar, LandingNavbar } from "./navbar";

export const DashboardHeader = () => {
  return <DashboardNavbar />;
};

export const LandingHeader = () => {
  return (
    <nav className="container border-outline">
      <div className="mx-auto flex h-24 flex-wrap items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-1.5 md:order-2">
          <Link href={{ pathname: "/login" }}>
            <Button
              className="bg-surface-bright text-on-surface hover:text-primary hover:no-underline lg:bg-inherit lg:hover:underline"
              variant="link"
            >
              Login
            </Button>
          </Link>
          <Link href={{ pathname: "/get-started" }}>
            <Button>Get started</Button>
          </Link>
        </div>
        <LandingNavbar />
      </div>
    </nav>
  );
};
