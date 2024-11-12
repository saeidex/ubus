import { persist } from "zustand/middleware";
import { createStore } from "zustand/vanilla";

import type { BusData } from "./types";

interface MqttStore {
  data: BusData;
  setData: (topic: string, data: BusData) => void;
}

export const useMqttStore = createStore<MqttStore>()(
  persist(
    (set) => ({
      data: {
        bus_id: "",
        latitude: "",
        longitude: "",
        timestamp: "",
        heading: "",
        speed: "",
      },
      setData: (topic, data) =>
        set((state) => ({
          data: { ...state.data, [topic]: data },
        })),
    }),
    {
      name: "bus-data",
    },
  ),
);
