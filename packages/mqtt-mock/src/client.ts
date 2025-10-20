// Mock MQTT client for development - no actual MQTT connection needed
export const mqttClient = {
    // Mock client doesn't need any actual implementation
    // All data is generated in the service layer
};

export const MqttOptions = {
    clientId: `mock_mqtt_${Math.random().toString(16).slice(3)}`,
    clean: true,
};
