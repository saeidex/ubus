import type { LatLngLiteral } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { formatDuration, intervalToDuration } from "date-fns";
import { ofetch } from "ofetch";

export interface RouteInfo {
  distance: number; // Distance in kilometers
  duration: string | number; // Duration in minutes
  geometry: GeoJSON.LineString;
}

interface OSRMRouteResponse {
  routes: RouteInfo[];
}

const fetchWalkingRoute = async (
  userLocation: LatLngLiteral,
  destination: LatLngLiteral,
): Promise<RouteInfo | null> => {
  const osrmBaseUrl = "https://router.project-osrm.org/route/v1/walking";

  const url = `${osrmBaseUrl}/${userLocation.lng},${userLocation.lat};${destination.lng},${destination.lat}?overview=false`;

  const data = await ofetch<OSRMRouteResponse>(url);

  const route = data.routes[0];

  if (!route) {
    throw new Error("No valid routes found in the OSRM response.");
  }

  return {
    distance: route.distance,
    duration: formatDuration(
      intervalToDuration({ start: 0, end: route.distance }),
    ),
    geometry: route.geometry,
  };
};

export const useWalkingRoute = (
  userLocation: LatLngLiteral | null,
  destination: LatLngLiteral | null,
) => {
  return useQuery({
    queryKey: ["walkingRoute", userLocation, destination],
    queryFn: () => {
      if (!userLocation || !destination) {
        throw new Error("Both userLocation and destination are required.");
      }
      return fetchWalkingRoute(userLocation, destination);
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};
