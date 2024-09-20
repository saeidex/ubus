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
        "container grid min-h-[calc(100dvh-6rem)] px-12 lg:h-full",
        className,
      )}
    >
      <div className="relative flex flex-col items-center justify-between lg:flex-row">
        <div className="flex h-full max-w-[660px] flex-col justify-center gap-8 md:h-fit md:justify-start md:gap-6 lg:h-full lg:justify-center lg:gap-8">
          <h1 className="max-w-[180px] text-display-small font-bold sm:text-display-medium md:max-w-full md:text-display-large lg:max-w-fit">
            Track. Notify. Simplify.
          </h1>
          <h3 className="text-body-large lg:text-headline-small xl:text-headline-medium">
            Welcome to the IUBAT Bus Tracking System. Access live bus locations,
            schedules, and important updates all in one place.
          </h3>
          <Link href={"/Dashboard"}>
            <Button variant={"withIcon"}>
              Track now
              <RightArrowIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="absolute right-0 top-[20%] sm:top-[22%] md:static">
          <Image
            className="w-48 sm:w-52 md:h-full md:w-full lg:min-w-[509px]"
            src={"hero-map.svg"}
            height={377}
            width={509}
            alt="map image"
          />
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="flex animate-bounce items-center justify-center gap-5">
          <MouseIcon className={"fill-on-surface"} />
          <span className="text-headline-small">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};
