"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { INavLink } from "@ubus/configs";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";

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
