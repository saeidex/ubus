import type { LatLngTuple } from "leaflet";
import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

export const IUBAT_LAT_LAN: LatLngTuple = [
  23.888278526466046, 90.39066000458978,
] as const;

export const IubatMarker = () => {
  return (
    <Marker
      position={IUBAT_LAT_LAN}
      zIndexOffset={10000}
      icon={
        new Icon({
          iconUrl: "iubat-pin.png",
          iconSize: [50.11, 56],
        })
      }
    >
      <Popup>Welcome to IUBAT</Popup>
    </Marker>
  );
};
