"use client";

import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";
import { useQueries } from "@tanstack/react-query";

import type { Bus } from "@ubus/configs";
import type { BusData } from "@ubus/stores/mqtt-store";
import { buses } from "@ubus/configs";
import { useMqttStore } from "@ubus/stores/mqtt-store";

import { mqttClient as client } from "./client";
import { getBusLocationTopic } from "./topics";

function isBusData(data: unknown): data is BusData {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as BusData).bus_id === "string" &&
    typeof (data as BusData).latitude === "number" &&
    typeof (data as BusData).longitude === "number" &&
    typeof (data as BusData).timestamp === "string" &&
    typeof (data as BusData).speed === "number" &&
    typeof (data as BusData).heading === "number"
  );
}

export const useBusLocationsQuery = (): UseQueryResult<BusData>[] => {
  const setData = useMqttStore.getState().setData;

  useEffect(() => {
    const messageHandler = (receivedTopic: string, payload: Buffer) => {
      try {
        const parsedData: unknown = JSON.parse(payload.toString());

        if (isBusData(parsedData)) {
          setData(parsedData);
        } else {
          console.error(
            "Received data does not match BusData type",
            parsedData,
          );
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error parsing MQTT message:", error.message);
        } else {
          console.error("Unknown error parsing MQTT message", String(error));
        }
      }
    };

    buses.forEach((bus: Bus) => {
      const topic = getBusLocationTopic(bus.id);
      client.subscribe(topic, { qos: 1 }, (error) => {
        if (error) {
          console.error(`Subscribe error for bus ${bus.id}:`, error.message);
        }
      });
    });

    client.on("message", messageHandler);

    return () => {
      client.off("message", messageHandler);
      buses.forEach((bus: Bus) => {
        const topic = getBusLocationTopic(bus.id);
        client.unsubscribe(topic);
      });
    };
  }, []);

  return useQueries({
    queries: buses.map((bus: Bus) => ({
      queryKey: [`bus-location-${bus.id}`],
      queryFn: () => {
        const storeData = useMqttStore.getState().data;

        const currentData = storeData.find(
          (busData): busData is BusData => busData.bus_id === bus.id,
        );

        return currentData ?? null;
      },
      refetchInterval: 1000,
      staleTime: 5000,
      retry: 1,
      retryDelay: 1000,
    })),
  });
};
