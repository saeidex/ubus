import { useQuery } from "@tanstack/react-query";
import SuperJSON from "superjson";

import type { BusData } from "./types";
import { mqttClient as client } from "./client";
import { useMqttStore } from "./store";
import { getBusLocationTopic } from "./topics";

export const useBusLocationQuery = (busId: string) => {
  const topic = getBusLocationTopic(busId);
  const data = useMqttStore.getState().data;
  const setData = useMqttStore.getState().setData;

  return useQuery({
    queryKey: [topic],
    queryFn: () => {
      return new Promise<BusData>((resolve, reject) => {
        client.on("message", (receivedTopic, payload) => {
          if (receivedTopic === topic) {
            setData(topic, SuperJSON.parse<BusData>(payload.toString()));
            resolve(SuperJSON.parse<BusData>(payload.toString()));
          }
        });

        client.subscribe(topic, { qos: 1 }, (error) => {
          if (error) {
            reject(
              new Error(
                `Subscribe error: ${error.message || "Mqtt Subscription Error"}`,
              ),
            );
          }
        });
      });
    },
    initialData: data,
    refetchInterval: 1000 * 3,
    staleTime: Infinity,
  });
};
