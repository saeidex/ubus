"use client";

import type { Route } from "next";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconMenu } from "@tabler/icons-react";

import { landingNavLinks } from "@ubus/configs";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button-custom";
import { ScrollArea, ScrollBar } from "@ubus/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@ubus/ui/sheet";

import { Logo } from "./logo";

export const MobileNav = () => {
  const [open, setOpen] = useState(true);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="lg:hidden">
          <span className="sr-only">Open main menu</span>
          <IconMenu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex h-dvh w-[80dvw] flex-col border-none p-0"
      >
        <SheetHeader className="p-8">
          <Logo />
        </SheetHeader>
        <ScrollArea className="h-full px-8">
          <div className="flex flex-col gap-8">
            {landingNavLinks.map((navItem) => (
              <MobileLink href={navItem.href} key={navItem.label}>
                {navItem.label}
              </MobileLink>
            ))}
          </div>
          <ScrollBar />
        </ScrollArea>
        <SheetFooter className="mt-auto flex w-full flex-col gap-3 border-t border-outline-variant bg-surface-container-low px-4 py-6 lg:flex-col">
          <Link href={{ pathname: "/login" }}>
            <Button
              size="lg"
              className="w-full bg-surface-bright text-on-surface hover:text-primary hover:no-underline"
              variant="link"
            >
              Login
            </Button>
          </Link>
          <Link href={{ pathname: "/get-started" }}>
            <Button size="lg" className="w-full">
              Get started
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  href: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href as Route}
      onClick={() => {
        router.push(href as Route);
        onOpenChange?.(false);
      }}
      className={cn("w-fit text-4xl hover:text-primary", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
