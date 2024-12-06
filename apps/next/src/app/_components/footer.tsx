"use client";

import Image from "next/image";
import Link from "next/link";

import type { IMenuItem } from "@ubus/configs/footer-config";
import { footerMenuItems } from "@ubus/configs/footer-config";
import { useThemeBasedValue } from "@ubus/hooks/use-theme-based-value";
import { Separator } from "@ubus/ui/separator";

export const Footer = () => {
  const logoSrc = useThemeBasedValue("ubus.svg", "ubus-dark.svg");
  return (
    <div className="border-t border-outline-variant bg-surface-dim py-8 pt-12 lg:pt-20">
      <div className="container flex flex-col gap-2">
        <div className="flex flex-col gap-9 lg:gap-14">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={logoSrc}
                width={32}
                height={24}
                className="h-8 w-6"
                alt="ubus logo"
              />
              <span className="self-center whitespace-nowrap text-headline-large font-semibold dark:text-white">
                UBus
              </span>
            </Link>
            <p className="text-body-large sm:text-headline-small">
              Access live bus locations, schedules, and important updates all in
              one place.
            </p>
          </div>
          <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {footerMenuItems.map((item) => (
              <FooterMenu menu={item} key={item.title} />
            ))}
          </div>
          <Separator />
        </div>
        <p className="text-label-small text-on-surface/40 md:text-label-large">
          Copyright 2024. All right reserved.
        </p>
      </div>
    </div>
  );
};

const FooterMenu = ({ menu }: { menu: IMenuItem }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-headline-small text-outline">{menu.title}</h3>
      <div className="flex flex-col items-start">
        {menu.links.map((link) => (
          <Link
            className="text-headline-large hover:underline"
            href={{ href: link.href }}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
