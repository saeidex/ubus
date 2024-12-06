import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import { env } from "./env";

export interface ThingSpeakResponse {
  channel: {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    field1: string;
    field2: string;
    created_at: string;
    updated_at: string;
    last_entry_id: number;
  };
  feeds: {
    created_at: string;
    entry_id: number;
    field1: string;
    field2: string | null;
  }[];
}

export const fetchThingSpeakData = async (
  channelId: string,
  readApiKey: string,
): Promise<ThingSpeakResponse["feeds"]> => {
  const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${readApiKey}&results=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data from ThingSpeak");
  }

  const data = (await response.json()) as ThingSpeakResponse;

  return data.feeds;
};

export const useThingSpeak = (): UseQueryResult<
  ThingSpeakResponse["feeds"]
> => {
  return useQuery<ThingSpeakResponse["feeds"]>({
    queryKey: ["thingSpeakData", env.NEXT_PUBLIC_THINGSPEAK_CHENNEL_ID],
    queryFn: () =>
      fetchThingSpeakData(
        env.NEXT_PUBLIC_THINGSPEAK_CHENNEL_ID,
        env.NEXT_PUBLIC_THINGSPEAK_READ_API_KEY,
      ),
    enabled:
      !!env.NEXT_PUBLIC_THINGSPEAK_CHENNEL_ID &&
      !!env.NEXT_PUBLIC_THINGSPEAK_READ_API_KEY,
    refetchInterval: 1000 * 3,
  });
};
