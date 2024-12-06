import { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

interface OSRMRouteResponse {
  routes: {
    distance: number; // in meters
    duration: number; // in seconds
  }[];
}

export const useWalkingRoute = (
  userLocation: GeoCoordinates | null,
  destination: GeoCoordinates | null,
) => {
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWalkingRoute = async () => {
      if (!userLocation || !destination) {
        return;
      }

      setError(null);

      const osrmBaseUrl = "https://router.project-osrm.org/route/v1/walking";

      const url = `${osrmBaseUrl}/${userLocation.lng},${userLocation.lat};${destination.lng},${destination.lat}?overview=false`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError(`OSRM API Error: ${response.statusText}`);
          return;
        }

        const data = (await response.json()) as OSRMRouteResponse;

        const route = data.routes[0];

        if (route) {
          const duration = intervalToDuration({
            start: 0,
            end: route.duration * 1000,
          });

          setDistance((route.distance / 1000).toFixed(2).toString());
          setDuration(formatDuration(duration));
        } else {
          setError("No valid routes found in the OSRM response.");
        }
      } catch {
        setError("Error fetching walking route");
      }
    };

    void fetchWalkingRoute();
  }, [userLocation, destination]);

  return { distance, duration, error };
};
