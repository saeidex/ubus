import { IClientOptions } from "mqtt";

export const MQTT_HOST = process.env.MQTT_HOST!;
const MQTT_USERNAME = process.env.MQTT_USERNAME!;
const MQTT_PASSWORD = process.env.MQTT_PASSWORD!;

export const MqttOptions: IClientOptions = {
  clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
  username: MQTT_USERNAME,
  password: MQTT_PASSWORD,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
};
