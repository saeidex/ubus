"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { INavLink } from "@ubus/configs";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button-custom";

export const NavLink = ({
  link,
  className,
}: {
  className?: string;
  link: INavLink;
}) => {
  const pathname = usePathname();
  const handleClick = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    const yOffset = -20;

    if (element) {
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Link href={{ href: link.href }}>
        <Button
          onClick={() => handleClick(link.href)}
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
