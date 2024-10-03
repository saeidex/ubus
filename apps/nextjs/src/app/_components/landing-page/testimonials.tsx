"use client";

import React from "react";
import { IconQuote, IconStarFilled } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

import { Avatar, AvatarFallback, AvatarImage } from "@ubus/ui/avatar";
import { Card, CardContent } from "@ubus/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ubus/ui/carousel";

export function CarouselPlugin() {
  return (
    <Carousel
    // opts={{ loop: true }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <div className="container mb-16 *:select-none lg:my-32">
      <Carousel
        className="mx-auto w-full max-w-[240px] sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-6xl"
        // plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-0 py-8 md:gap-4 lg:max-w-2xl lg:gap-6">
                <div className="flex *:size-5 *:text-primary-fixed">
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                  <IconStarFilled />
                </div>
                <div className="text-center lg:max-w-xl xl:max-w-2xl">
                  <div className="-mb-2 inline-block">
                    <IconQuote className="mr-1 size-8" />
                  </div>
                  <span className="!text-body-large font-bold md:!text-headline-small md:!font-semibold">
                    The bus tracking system has transformed my daily commute. I
                    can now plan my schedule more effectively and never miss a
                    bus!
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 pt-4 md:p-0">
                  <Avatar>
                    <AvatarImage
                      src="hr.svg"
                      alt="Hasibur Rahman Profile Picture"
                    />
                    <AvatarFallback>HR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-label-large !font-bold">
                      Hasibul Rahman
                    </h4>
                    <p className="text-label-small">Student, CSE Depertment</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-outline-variant dark:bg-secondary-container dark:text-on-secondary-container" />
        <CarouselNext className="border border-outline-variant dark:bg-secondary-container dark:text-on-secondary-container" />
      </Carousel>
    </div>
  );
};
