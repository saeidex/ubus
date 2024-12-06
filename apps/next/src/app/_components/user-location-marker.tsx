import { divIcon } from "leaflet";
import { Marker, useMap } from "react-leaflet";

import { useMapStore } from "@ubus/stores/map-store";

export const UserLocationMarker = () => {
  const map = useMap();
  const userGeoLocation = useMapStore((state) => state.userGeoLocation);

  const coords = userGeoLocation?.coords;

  if (!coords) return null;
  const position = { lat: coords.latitude, lng: coords.longitude };

  map.flyTo(position, 15, {
    animate: true,
    duration: 0.75,
  });

  return (
    <>
      <Marker position={position} icon={userIcon} />
    </>
  );
};

const userIcon = divIcon({
  className: "user-location-icon",
  html: `
    <div style="position: relative; display: flex; align-items: center; justify-content: center;">
      <div style="
        position: absolute;
        width: 40px;
        height: 40px;
        background: rgba(66, 133, 244, 0.5);
        border-radius: 50%;
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
      "></div>
      <div style="
        width: 20px;
        height: 20px;
        background: #4285F4;
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 0 6px rgba(66, 133, 244, 0.8);
      "></div>
    </div>
  `,
  iconSize: [40, 40],
});
