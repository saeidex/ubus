import type { MarkerProps } from "react-leaflet";
import { DivIcon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

interface BusLocationMarkerProps extends MarkerProps {
  busId: string;
  position: [number, number];
  speed?: string;
  direction?: string;
}

export const BusLocationMarker = (props: BusLocationMarkerProps) => {
  const { busId, position, speed, direction } = props;
  return (
    <Marker icon={createBusMarkerIcon(busId)} zIndexOffset={10000} {...props}>
      <Popup>
        <div>
          <h3>Bus {busId}</h3>
          <p>Latitude: {position[0]}</p>
          <p>Longitude: {position[1]}</p>
          {speed && <p>Speed: {speed} km/h</p>}
          {direction && <p>Direction: {direction}</p>}
        </div>
      </Popup>
    </Marker>
  );
};

const createBusMarkerIcon = (busNumber: string) => {
  return new DivIcon({
    className: "custom-bus-marker",
    html: `
      <div style="position: relative;">
        <div style="
          position: absolute;
          z-index: 10;
          top: -8px;
          right: -8px;
          background-color: #dc3545;
          color: #ffffff;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;">
          ${busNumber}
        </div>
        <div style="
          width: 32px;
          height: 32px;
          background-color: rgba(220, 53, 69, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 1.5s infinite;">
          <div style="
            width: 16px;
            height: 16px;
            background-color: #dc3545;
            border-radius: 50%;"></div>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};
