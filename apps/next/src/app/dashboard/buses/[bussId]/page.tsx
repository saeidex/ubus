"use client";

import { MqttProvider, useMqttSubscription } from "@ubus/mqtt";

interface BusLocationPageProps {
  params: {
    bussId: string;
  };
}

const BusLocationPage = (props: BusLocationPageProps) => {
  return (
    <MqttProvider>
      <BusLocationContent {...props} />
    </MqttProvider>
  );
};

const BusLocationContent = (props: BusLocationPageProps) => {
  const { data: location, error } = useMqttSubscription(props.params.bussId);

  // if (isLoading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="grid h-dvh place-content-center place-items-center gap-4 text-destructive">
        An error has occurred: {error.message}
      </p>
    );

  return (
    <div className="grid h-dvh place-content-center place-items-center gap-4">
      <h1>Bus Location</h1>
      <p>
        {location ? `Current Location: ${location}` : "Waiting for location..."}
      </p>
    </div>
  );
};

export default BusLocationPage;
