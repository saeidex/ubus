import type { MqttClient } from "mqtt";
import mqtt from "mqtt";

import { MQTT_HOST, MqttOptions } from "./mqtt.config";

export const mqttClient: MqttClient = mqtt.connect(MQTT_HOST, MqttOptions);
