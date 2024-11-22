import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { BusData } from "./types";

interface MqttStore {
  data: BusData;
  setData: (data: BusData) => void;
}

export const useMqttStore = create<MqttStore>()(
  persist(
    (set) => ({
      data: {
        bus_id: "",
        latitude: 0,
        longitude: 0,
        timestamp: "",
        speed: 0,
        heading: 0,
      },
      setData: (data) =>
        set(() => ({
          data: { ...data },
        })),
    }),
    {
      name: "bus-data",
    },
  ),
);
