import { useQuery } from "@tanstack/react-query";

import { mqttClient as client } from "./client";
import { getBusLocationTopic } from "./topics";

export const useMqttSubscription = (busId: string) => {
  const topic = getBusLocationTopic(busId);

  return useQuery<string, Error>({
    queryKey: [topic],
    queryFn: async () => {
      return new Promise<string>((resolve) => {
        client.on("message", (receivedTopic, message) => {
          if (receivedTopic === topic) {
            resolve(message.toString());
          }
        });

        client.subscribe(topic, { qos: 1 }, (error) => {
          if (error) {
            console.error("Subscribe error: ", error);
          } else {
            console.log(`Subscribed to topic: ${topic}`);
          }
        });
      });
    },
    staleTime: 1000 * 60,
  });
};
