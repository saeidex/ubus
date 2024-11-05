import type { IconProps } from "@tabler/icons-react";
import Image from "next/image";
import {
  IconBusStop,
  IconCalendarTime,
  IconClipboardList,
  IconMap2,
  IconUserHeart,
} from "@tabler/icons-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ubus/ui/card";

const keyFeatures = [
  {
    title: "Real-Time Tracking",
    subtitle:
      "View live bus locations and stay updated on their arrival times.",
    icon: ({ ...props }: IconProps) => <IconMap2 {...props} />,
  },
  {
    title: "Schedule Notifications",
    subtitle:
      "Receive alerts about bus schedules and any impo-rtant service changes.",
    icon: ({ ...props }: IconProps) => <IconCalendarTime {...props} />,
  },
];

export const KeyFeatures = () => {
  return (
    <div id="features" className="container grid grid-cols-2 items-center py-8">
      <h2 className="text-headline-large font-bold leading-7 sm:text-display-medium lg:self-end">
        Discover the key benefits
      </h2>
      <Image
        alt="bus picture"
        className="h-36 w-fit lg:row-span-2 lg:h-auto xl:row-span-3 xl:pl-4"
        src={"/bus.png"}
        height={563}
        width={699}
      />
      <p className="col-span-2 sm:pb-4 sm:text-headline-medium md:pb-12 lg:col-span-1 lg:self-start lg:pb-0 lg:pt-4">
        Track buses in real-time and get instant notifications, all from an
        easy-to-use dashboard.
      </p>
      <div className="col-span-2 gap-4 py-2 sm:flex md:-mt-8 lg:py-0 xl:col-span-1 xl:mt-0 xl:gap-6 xl:self-start">
        {keyFeatures.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-2 py-4 md:gap-4 lg:py-0"
          >
            {item.icon({ size: 50 })}
            <h3 className="text-headline-small font-bold">{item.title}</h3>
            <p className="text-body-large md:text-headline-small">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const essentialFeatures = [
  {
    title: "User-Friendly Dashboard ",
    subtilte:
      "The dashboard provides instant access to bus tracking, schedules, and notifications.",
    icon: ({ ...props }: IconProps) => <IconUserHeart {...props} />,
  },
  {
    title: "Find Nearest Bus",
    subtilte: "Find the nearest bus from your current location",
    icon: ({ ...props }: IconProps) => <IconBusStop {...props} />,
  },
  {
    title: "Stay Informed with Our Notice Board",
    subtilte: "Receive timely updates on schedules and important notices.",
    icon: ({ ...props }: IconProps) => <IconClipboardList {...props} />,
  },
];

export const EssentialFeatures = () => {
  return (
    <div className="container grid gap-3 py-8 lg:my-32 lg:grid-cols-6 lg:gap-y-12">
      <h2 className="text-headline-large font-bold leading-7 sm:text-display-medium lg:col-span-3 lg:self-end">
        Explore Our Essential Bus Tracking Features
      </h2>
      <p className="text-balance pb-4 text-body-large md:pb-6 lg:col-span-3 lg:pb-0 lg:text-justify lg:text-base">
        Our bus tracking system offers three key features designed for student
        convenience. Access real-time bus locations, view schedules, and stay
        updated on important announcements all in one place. Experience seamless
        navigation and timely information at your fingertips.
      </p>
      {essentialFeatures.map((item) => (
        <Card key={item.title} className="lg:col-span-2">
          <CardHeader className="gap-4">
            <div className="self-start rounded-md bg-on-primary-container p-3 text-primary-container">
              {item.icon({ className: "size-6 lg:size-8" })}
            </div>
            <CardTitle className="text-headline-small !font-bold leading-7 md:text-headline-large lg:!text-headline-small lg:!font-bold">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="!text-body-large text-on-primary-container md:!text-headline-small">
              {item.subtilte}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
