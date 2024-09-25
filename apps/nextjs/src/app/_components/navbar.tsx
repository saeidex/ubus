"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu } from "@tabler/icons-react";

import useThemeBasedValue from "@ubus/hooks/useThemeBasedValue";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";

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
  const logoSrc = useThemeBasedValue("ubus.svg", "ubus-dark.svg");

  return (
    <nav className="container border-outline">
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
        <div className="flex gap-1.5 md:order-2 rtl:space-x-reverse">
          <Link href={{ href: "/signin" }}>
            <Button
              className={cn(
                "hidden text-on-surface hover:text-primary md:block",
              )}
              variant={"link"}
            >
              Sign in
            </Button>
          </Link>
          <Link href={{ href: "/signin" }}>
            <Button className="hidden md:block" variant={"primary"}>
              Get started
            </Button>
          </Link>
          <Button className="md:hidden">
            <span className="sr-only">Open main menu</span>
            <IconMenu />
          </Button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink className="px-0" link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export const NavLink = ({
  link,
  className,
}: {
  className?: string;
  link: ILink;
}) => {
  const pathname = usePathname();
  return (
    <>
      <Link href={{ href: link.href }}>
        <Button
          className={cn(
            "text-on-surface hover:text-primary",
            pathname === link.href && "text-primary",
            className,
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
