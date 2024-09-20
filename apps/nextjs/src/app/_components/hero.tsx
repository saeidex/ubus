"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button";
import { MouseIcon, RightArrowIcon } from "@ubus/ui/icons";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "grid py-8 lg:container lg:min-h-[calc(100dvh-6rem)] lg:px-12",
        className,
      )}
    >
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:py-4">
        <div className="flex flex-col justify-center gap-6 md:h-fit md:w-4/6 md:justify-between lg:h-full lg:max-w-[660px] lg:justify-center lg:gap-8">
          <h1 className="text-display-small sm:text-display-medium md:max-w-full md:text-display-large lg:max-w-fit">
            Track. Notify. Simplify.
          </h1>
          <h3 className="text-body-large lg:text-headline-small xl:text-headline-medium">
            Welcome to the IUBAT Bus Tracking System. Access live bus locations,
            schedules, and important updates all in one place.
          </h3>
          <Link href={"/dashboard"}>
            <Button variant={"withIcon"}>
              Track now
              <RightArrowIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="relative flex items-end before:absolute before:inset-0 before:hidden before:h-full before:w-full before:bg-gradient-to-br before:from-background before:via-background/80 before:to-transparent sm:-z-50 sm:-mt-40 before:sm:block md:z-auto md:mt-0 before:md:hidden">
          <Image
            className="min-w-[90dvw] md:min-w-[100%] xl:min-w-[509px]"
            src={"hero-map.svg"}
            height={377}
            width={509}
            alt="map image"
          />
        </div>
      </div>
      <div className="hidden place-items-center lg:grid">
        <div className="flex animate-bounce items-center justify-center gap-5">
          <MouseIcon className={"fill-on-surface"} />
          <span className="text-headline-small">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};
