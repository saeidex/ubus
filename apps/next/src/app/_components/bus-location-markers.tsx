"use client";

import { useThingSpeak } from "@ubus/hooks/use-thing-speak";
import { useBusLocationsQuery } from "@ubus/mqtt";

import { BusLocationMarker } from "./bus-location-marker";

export interface BusData {
  bus_id: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  speed?: number;
  heading?: number;
}

export const BusLocationMarkers = () => {
  const mqttBusLocations = useBusLocationsQuery();
  const { data } = useThingSpeak();
  const thingSpeakLocations = data?.map((item) => ({
    bus_id: item.entry_id.toString(),
    latitude: Number(item.field1),
    longitude: Number(item.field2),
  }));

  return (
    <>
      {mqttBusLocations.map((busLocation) => {
        if (!busLocation.data) return null;

        const { bus_id, latitude, longitude } = busLocation.data;

        return (
          <BusLocationMarker
            key={bus_id}
            position={[latitude, longitude]}
            busId={bus_id}
          />
        );
      })}
      {thingSpeakLocations?.map((busLocation) => {
        const { bus_id, latitude, longitude } = busLocation;

        return (
          <BusLocationMarker
            key={bus_id}
            busId={bus_id}
            position={[latitude, longitude]}
          />
        );
      })}
    </>
  );
};
