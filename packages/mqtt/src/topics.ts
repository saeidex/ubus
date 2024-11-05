import { env } from "./env";

export const getBusLocationTopic = (busId: string) =>
  `${env.NEXT_PUBLIC_MQTT_TOPIC}/${busId}`;
