import Cookies from "js-cookie";
import { create } from "zustand";

export interface ReverseGeoData {
  display_name: string;
  name: string;
  lat: string;
  lon: string;
  address: {
    road: string;
    village: string;
    state_district: string;
    state: string;
    postcode: string;
    country: string;
    country_code: string;
  };
}

interface MapStoreState {
  userGeoLocation: GeolocationPosition | null;
  reverseGeoData: ReverseGeoData | null;
  consent: boolean | null;
  isLoading: boolean;
  error: string | null;
}

interface MapStoreActions {
  updateUserGeoLocation: () => void;
  setConsent: (consent: boolean) => void;
}

export type MapStore = MapStoreState & MapStoreActions;

export const useMapStore = create<MapStore>()((set) => ({
  userGeoLocation: null,
  reverseGeoData: null,
  consent: Cookies.get("userConsent") === "true" || null,
  isLoading: false,
  error: null,

  setConsent: (consent) => {
    Cookies.set("userConsent", consent ? "true" : "false", { expires: 365 });
    set({ consent });
  },

  updateUserGeoLocation: () => {
    set({ isLoading: true, error: null });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        set(() => ({
          userGeoLocation: position,
        }));

        const fetchData = async () => {
          try {
            const data = await fetchReverseGeoData({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            set({
              reverseGeoData: { ...data },
              isLoading: false,
            });
          } catch {
            set({
              error: "Failed to fetch reverse geolocation data.",
              isLoading: false,
            });
          }
        };

        void fetchData();
      },
      (err) => {
        set({
          error: `Geolocation error: ${err.message}`,
          isLoading: false,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  },
}));

const fetchReverseGeoData = async ({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
    );
    const data = (await response.json()) as ReverseGeoData;
    return data;
  } catch {
    throw new Error("Location data not found");
  }
};
