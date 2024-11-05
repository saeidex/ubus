"use client";

import { useBusLocationQuery } from "@ubus/mqtt";

interface BusLocationPageProps {
  params: {
    busId: string;
  };
}

const BusLocationPage = (props: BusLocationPageProps) => {
  return (
    <div className="grid h-dvh place-content-center place-items-center gap-4">
      <h1>Bus Location</h1>
      <Location busId={props.params.busId} />
    </div>
  );
};

export const Location = (props: { busId: string }) => {
  const { data: location, isLoading, error } = useBusLocationQuery(props.busId);

  if (isLoading) return <p>Waiting for bus location...</p>;
  if (error)
    return (
      <p className="grid h-dvh place-content-center place-items-center gap-4 text-destructive">
        An error has occurred: {error.message}
      </p>
    );

  if (location) {
    return (
      <div className="rounded-sm bg-destructive p-4 text-destructive-foreground">
        <pre>{JSON.stringify(JSON.parse(location), null, 2)}</pre>
      </div>
    );
  }
};

export default BusLocationPage;
