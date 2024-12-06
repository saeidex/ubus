"use client";

import { useEffect, useState } from "react";

import { useBusLocationsQuery } from "@ubus/mqtt";

interface BusLocationPageProps {
  params: {
    busId: string;
  };
}

const BusLocationPage = (props: BusLocationPageProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid h-dvh place-content-center place-items-center gap-4">
      <h1>Bus Location</h1>
      <Location busId={props.params.busId} />
    </div>
  );
};

export const Location = (props: { busId: string }) => {
  const locations = useBusLocationsQuery();
  const location = locations.find((item) => item.data?.bus_id === props.busId);

  const data = location?.data;
  const isError = location?.isError;
  const error = location?.error;

  if (isError)
    return (
      <p className="grid h-dvh place-content-center place-items-center gap-4 text-destructive">
        An error has occurred: {error!.message}
      </p>
    );

  return (
    <div className="w-[90dvw] overflow-auto rounded-sm bg-destructive p-4 text-destructive-foreground sm:w-full">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BusLocationPage;
