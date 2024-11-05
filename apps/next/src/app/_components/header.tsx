import Link from "next/link";

import { auth } from "@ubus/auth";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";

import { Logo } from "./logo";
import { DashboardNavbar, LandingNavbar } from "./navbar";

export const DashboardHeader = () => {
  return <DashboardNavbar />;
};

export const LandingHeader = async () => {
  const session = await auth();

  return (
    <nav className="container border-outline">
      <div className="mx-auto flex h-24 flex-wrap items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex gap-1.5 md:order-2">
          <Link href={{ pathname: "/login" }}>
            <Button
              className={cn(
                "bg-surface-bright text-on-surface hover:text-primary hover:no-underline lg:bg-inherit lg:hover:underline",
                session && "hidden",
              )}
              variant="link"
            >
              Login
            </Button>
          </Link>
          <Link href={{ pathname: session ? "dashboard" : "/get-started" }}>
            <Button>{session ? "Open dashboard" : "Get started"}</Button>
          </Link>
        </div>
        <LandingNavbar />
      </div>
    </nav>
  );
};
