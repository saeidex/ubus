"use client";

import Image from "next/image";

import { useThemeBasedValue } from "@ubus/hooks";

export const Logo = () => {
  const logoSrc = useThemeBasedValue("ubus.svg", "ubus-dark.svg");

  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
        src={logoSrc}
        width={32}
        height={24}
        className="h-8 w-6"
        alt="ubus logo"
      />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        UBus
      </span>
    </div>
  );
};
