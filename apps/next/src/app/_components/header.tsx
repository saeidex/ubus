import Link from "next/link";
import { IconMenu } from "@tabler/icons-react";

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
              className="hidden text-on-surface hover:text-primary md:block"
              variant="link"
            >
              Login
            </Button>
          </Link>
          <Link href={{ pathname: "/get-started" }}>
            <Button className="hidden md:block">Get started</Button>
          </Link>
          <Button className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <IconMenu />
          </Button>
        </div>
        <LandingNavbar />
      </div>
    </nav>
  );
};
