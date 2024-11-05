import type { IClientOptions, MqttClient } from "mqtt";
import mqtt from "mqtt";

import { env } from "./env";

export const MqttOptions: IClientOptions = {
  clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
  username: env.NEXT_PUBLIC_MQTT_USERNAME,
  password: env.NEXT_PUBLIC_MQTT_PASSWORD,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
};

export const mqttClient: MqttClient = mqtt.connect(
  env.NEXT_PUBLIC_MQTT_HOST,
  MqttOptions,
);
