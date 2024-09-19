"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";
import { MenuIcon } from "@ubus/ui/icons";

const links: ILink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = React.useState("ubus.svg");

  React.useEffect(() => {
    if (theme === "dark" || resolvedTheme === "dark") {
      setLogoSrc("ubus.svg");
    } else {
      setLogoSrc("ubus-dark.svg");
    }
  }, [theme, resolvedTheme]);

  return (
    <nav className="border-outline">
      <div className="mx-auto flex h-24 flex-wrap items-center justify-between">
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
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            UBus
          </span>
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-3 rtl:space-x-reverse">
          <NavLink link={{ href: "sign in", label: "Sign in" }} />
          <Button variant={"primary"}>Get started</Button>
          <Button className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
          </Button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const NavLink = ({ link }: { link: ILink }) => {
  const pathname = usePathname();
  return (
    <>
      <Link href={link.href}>
        <Button
          className={cn(
            "px-0 text-on-surface hover:text-primary",
            pathname === link.href && "text-primary",
          )}
          variant={"link"}
        >
          {link.label}
        </Button>
      </Link>
    </>
  );
};

interface ILink {
  href: string;
  label: string;
}
