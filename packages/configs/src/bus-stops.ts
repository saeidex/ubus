import type { Route } from "./types";
import { route01Airport } from "./route-01-airport";
import { route02RajbariGazipur } from "./route-02-rajbari, gazipur";

export interface BusStop {
  routeId: string;
  routeName: string;
  route: Route;
}

export const busStops: BusStop[] = [
  {
    routeId: "01",
    routeName: "Airport Rd",
    route: route01Airport,
  },
  {
    routeId: "02",
    routeName: "Airport Rd",
    route: route02RajbariGazipur,
  },
];
