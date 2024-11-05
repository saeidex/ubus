import { useQuery } from "@tanstack/react-query";

import { mqttClient as client } from "./client";
import { getBusLocationTopic } from "./topics";

export const useBusLocationQuery = (busId: string) => {
  const topic = getBusLocationTopic(busId);

  return useQuery({
    queryKey: [topic],
    queryFn: () => {
      return new Promise<string>((resolve, reject) => {
        client.on("message", (receivedTopic, payload) => {
          if (receivedTopic === topic) {
            resolve(payload.toString());
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
    refetchInterval: 1000 * 3,
    staleTime: Infinity,
  });
};
