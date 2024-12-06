import { useState } from "react";
import {
  IconBuilding,
  IconBus,
  IconClock,
  IconCurrentLocation,
  IconMapPin,
  IconMenu3,
  IconWalk,
} from "@tabler/icons-react";

import { useCurrentDateTime } from "@ubus/hooks/use-current-datetime";
import { useWalkingRoute } from "@ubus/hooks/use-walking-route";
import { useMapStore } from "@ubus/stores/map-store";
import { cn } from "@ubus/ui";
import { Button } from "@ubus/ui/button-custom";
import { Card } from "@ubus/ui/card";
import { Separator } from "@ubus/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ubus/ui/sheet-custom";
import { ToggleGroup, ToggleGroupItem } from "@ubus/ui/toggle-group";

import { IUBAT_LAT_LAN } from "./iubat-marker";
import { TrackNearMeButton } from "./track-near-me-button";

export const ControlsLayer = ({ className }: { className?: string }) => {
  const { currentDate, currentTime } = useCurrentDateTime();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-[9999] mt-6 w-full px-6",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Sheet modal={false} open={open} onOpenChange={setOpen}>
          <div className="pointer-events-none flex">
            <Button className="rounded-r-none font-bold" size="sm">
              {currentTime}
            </Button>
            <Separator orientation="vertical" />
            <Button className="rounded-l-none font-bold" size="sm">
              {currentDate}
            </Button>
          </div>
          <div className="flex rounded-full shadow-2xl">
            <div onClick={() => setOpen(true)}>
              <TrackNearMeButton />
            </div>
            <Separator orientation="vertical" />
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="rounded-l-none border-none"
                size="sm"
              >
                <IconMenu3 />
              </Button>
            </SheetTrigger>
            <SheetContent
              onPointerDownOutside={(event) => event.preventDefault()}
              onInteractOutside={(event) => event.preventDefault()}
              className="z-[9999] mr-6 mt-20 flex h-fit w-80 flex-col rounded-3xl border border-outline-variant bg-surface-container-highest text-on-surface backdrop-blur-md dark:border-outline"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Journey Details</SheetTitle>
                <SheetDescription className="sr-only" />
              </SheetHeader>
              <TravelCard />
            </SheetContent>
          </div>
        </Sheet>
      </div>
    </div>
  );
};

const TravelCard = () => {
  const reverseGeoData = useMapStore((state) => state.reverseGeoData);
  const updateUserGeoLocation = useMapStore(
    (state) => state.updateUserGeoLocation,
  );
  const userGeoLocation = useMapStore((state) => state.userGeoLocation);
  let userlocation = null;
  if (userGeoLocation) {
    userlocation = {
      lat: userGeoLocation.coords.latitude,
      lng: userGeoLocation.coords.longitude,
    };
  }
  const destination = {
    lat: IUBAT_LAT_LAN[0],
    lng: IUBAT_LAT_LAN[1],
  };

  const { distance, duration } = useWalkingRoute(userlocation, destination);

  return (
    <>
      <div className="space-y-4">
        <Card className="space-y-1 rounded-lg border border-outline p-3">
          <div className="flex items-center gap-2 font-medium">
            <IconBuilding className="size-4" />
            <span className="uppercase">Destination</span>
          </div>
          <div className="pb-2 text-headline-medium font-medium opacity-80">
            <span className="line-clamp-2">
              International University of business agriculture and technology
            </span>
          </div>
          {duration && (
            <>
              <div className="flex items-center gap-1 font-medium">
                <IconClock className="size-4" />
                <span>ETA {distance} Meters</span>
              </div>
              <span className="text-justify text-display-small">
                {duration}
              </span>
            </>
          )}
          <ToggleGroup type="single" className="justify-start pt-2">
            <ToggleGroupItem value="walk" className="border border-outline">
              <IconWalk />
            </ToggleGroupItem>
            <ToggleGroupItem
              disabled
              value="bus"
              className="border border-outline"
            >
              <IconBus />
            </ToggleGroupItem>
          </ToggleGroup>
        </Card>

        <Card className="space-y-1 rounded-lg border border-outline bg-secondary-fixed-dim p-3 text-on-secondary-fixed">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium">
              <IconMapPin className="size-4" />
              <span className="uppercase">Current Location</span>
            </div>
          </div>
          <div className="pb-2 text-headline-medium font-medium opacity-80">
            <span className="line-clamp-2">
              {reverseGeoData ? reverseGeoData.display_name : "Not found"}
            </span>
          </div>
        </Card>

        <Card
          className="cursor-pointer space-y-1 rounded-lg border border-outline bg-secondary-fixed-dim p-3 text-on-secondary-fixed"
          onClick={updateUserGeoLocation}
        >
          <div className="flex items-center gap-2 font-medium">
            <IconCurrentLocation className="size-4 text-center" />
            <span>Update Current Location</span>
          </div>
        </Card>

        {/* <Card className="space-y-1 rounded-lg border border-outline p-3 bg-secondary">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconNavigation className="size-4" />
              <span className="font-medium">Next Stoppage</span>
            </div>
            <span className="text-sm ">00:45 M</span>
          </div>
          <p className="ml-6 mt-1 opacity-80">Abdullahpur, Dhaka</p>
        </Card> */}
      </div>
    </>
  );
};
