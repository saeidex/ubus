import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface BusData {
  bus_id: string;
  latitude: number;
  longitude: number;
  timestamp: string;
  speed: number;
  heading: number;
}

interface MqttStore {
  data: BusData[];
  setData: (data: BusData) => void;
}

export const useMqttStore = create<MqttStore>()(
  persist(
    (set) => ({
      data: [],
      setData: (data) =>
        set((state) => ({
          data: [
            ...state.data.filter((item) => item.bus_id !== data.bus_id),
            data,
          ],
        })),
    }),
    {
      name: "bus-data",
    },
  ),
);
