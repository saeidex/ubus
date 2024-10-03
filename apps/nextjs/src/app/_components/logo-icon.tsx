"use client";

import Image from "next/image";

import { useThemeBasedValue } from "@ubus/hooks";
import { cn } from "@ubus/ui";

export const LogoIcon = ({ className }: { className?: string }) => {
  const logoSrc = useThemeBasedValue("ubus.svg", "ubus-dark.svg");

  return (
    <Image
      width={48}
      height={48}
      src={logoSrc}
      loading="lazy"
      className={cn("mx-auto max-h-12 w-auto", className)}
      alt="ubus logo"
    />
  );
};
