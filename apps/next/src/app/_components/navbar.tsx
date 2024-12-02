"use client";

import { useEffect, useState } from "react";

import { landingNavLinks } from "@ubus/configs";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";

import { NavLink } from "./navlink";
import { UserAvatar } from "./user-avatar";

export const DashboardNavbar = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toISOString());

  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toISOString());
    }, 1000);

    return clearInterval(intervalId);
  }, [currentTime]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "container flex h-20 w-full justify-between bg-red-300",
        className,
      )}
    >
      <Button variant="outline">{currentTime}</Button>
      <UserAvatar />
    </div>
  );
};

export const LandingNavbar = () => {
  return (
    <div className="hidden w-full items-center justify-between md:order-1 md:w-auto lg:flex">
      <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:gap-4 md:p-0 lg:gap-8">
        {landingNavLinks.map((link) => (
          <li key={link.href}>
            <NavLink className="px-0" link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
