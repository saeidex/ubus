/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconMouse, IconTestPipe } from "@tabler/icons-react";

// import { auth } from "@ubus/auth";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button-custom";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "container grid md:py-8 lg:min-h-[calc(100dvh-6rem)] lg:px-20",
        className,
      )}
    >
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:py-4">
        <div className="flex flex-col items-start justify-center gap-6 md:h-fit md:w-4/6 md:justify-between lg:h-full lg:max-w-[660px] lg:justify-center lg:gap-8">
          <h1 className="text-display-small sm:text-display-medium md:max-w-full md:text-display-large lg:max-w-fit">
            Track. Notify. Simplify.
          </h1>
          <h3 className="text-body-large lg:text-headline-small xl:text-headline-medium">
            Welcome to the IUBAT Bus Tracking System. Access live bus locations,
            schedules, and important updates all in one place.
          </h3>
          <CTA />
        </div>
        <div className="relative before:absolute before:inset-0 before:hidden before:h-full before:w-full before:bg-gradient-to-br before:from-background before:via-background/80 before:to-transparent sm:-z-50 sm:-mt-40 before:sm:block md:z-auto md:mt-0 before:md:hidden">
          <Image
            className="min-w-full"
            src={"hero-map.svg"}
            height={377}
            width={509}
            alt="map image"
          />
        </div>
      </div>
      <div className="hidden place-items-center lg:grid">
        <div className="flex animate-bounce items-center justify-center gap-2">
          <IconMouse size={32} />
          <span className="text-headline-small">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  // const session = await auth();
  const session = true;

  return (
    <div className="space-y-4">
      <Link href={{ pathname: session ? "/dashboard" : "/get-started" }}>
        <Button variant={"withIcon"}>
          <IconArrowRight stroke={2} size={20} />
          {session ? "Dashboard" : "Track now"}
        </Button>
      </Link>
      <div className="flex flex-nowrap gap-2">
        <Link href={{ pathname: "/dashboard/test/1" }}>
          <Button
            className={cn(
              "gap-2 bg-surface-bright text-primary hover:text-on-surface hover:no-underline",
              session ?? "hidden",
            )}
            variant="ghost"
            size="sm"
          >
            <IconTestPipe size={20} />
            Demo bus data
          </Button>
        </Link>
        <Link href={{ pathname: "/dashboard/map/1" }}>
          <Button
            className={cn(
              "gap-2 bg-surface-bright text-primary hover:text-on-surface hover:no-underline",
              session ?? "hidden",
            )}
            variant="ghost"
            size="sm"
          >
            <IconTestPipe size={20} />
            Demo map
          </Button>
        </Link>
      </div>
    </div>
  );
};
