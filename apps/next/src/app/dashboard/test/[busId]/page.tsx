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
  const { data, isError, error } = useBusLocationQuery(props.busId);

  if (isError)
    return (
      <p className="grid h-dvh place-content-center place-items-center gap-4 text-destructive">
        An error has occurred: {error.message}
      </p>
    );

  return (
    <div className="max-w-[90dvw] overflow-x-scroll rounded-sm bg-destructive p-4 text-destructive-foreground">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default BusLocationPage;
