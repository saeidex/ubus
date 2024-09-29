"use client";

import Image from "next/image";

import { useThemeBasedValue } from "@ubus/hooks";

export const Logo = () => {
  const logoSrc = useThemeBasedValue("ubus.svg", "ubus-dark.svg");

  return (
    <Image
      width={48}
      height={48}
      src={logoSrc}
      loading="lazy"
      className="mx-auto w-12"
      alt="ubus logo"
    />
  );
};
