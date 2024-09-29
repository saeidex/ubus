"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { INavLink } from "@ubus/configs";
import { landingNavLinks } from "@ubus/configs";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";

export const NavBar = () => {
  return (
    <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
      <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:gap-8 md:p-0">
        {landingNavLinks.map((link) => (
          <li key={link.href}>
            <NavLink className="px-0" link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const NavLink = ({
  link,
  className,
}: {
  className?: string;
  link: INavLink;
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
