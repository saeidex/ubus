import { useState } from "react";
import { DivIcon } from "leaflet";
import { Circle, Marker, Popup, useMapEvents } from "react-leaflet";

import { busStops } from "@ubus/configs/bus-stops";

const minZoomToShowDetailedMarkers = 14;

export const BusStopMarkers = () => {
  const [currentZoom, setCurrentZoom] = useState(13);
  const MapZoomListener = () => {
    const map = useMapEvents({
      zoomend: () => {
        setCurrentZoom(map.getZoom());
      },
    });
    return null;
  };

  return (
    <>
      <MapZoomListener />
      {busStops.map((stopage) =>
        stopage.route.features.map((stop) =>
          currentZoom >= minZoomToShowDetailedMarkers ? (
            <Marker
              key={stop.id}
              position={{
                lat: stop.geometry.coordinates[1],
                lng: stop.geometry.coordinates[0],
              }}
              icon={createBusStopMarkerIcon()}
            >
              <Popup>
                <strong>{stop.properties.name}</strong>
              </Popup>
            </Marker>
          ) : (
            <Circle
              key={stop.id}
              center={{
                lat: stop.geometry.coordinates[1],
                lng: stop.geometry.coordinates[0],
              }}
              radius={80}
              pathOptions={{
                color: "#76734a",
                fillColor: "#76734a",
                fillOpacity: 0.5,
              }}
            />
          ),
        ),
      )}
    </>
  );
};

const createBusStopMarkerIcon = () => {
  return new DivIcon({
    className: "bus-stop-marker",
    html: `
      <div
        style="
          position: relative;
          width: 22px;
          height: 24px;
          background-color: #76734a;
          border: 1px solid #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        "
      >
        <span style="font-size: 10px; font-weight: bold; color: #4285f4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 88 88"
            color="#ffffff"
          >
            <path
              d="M14.6666667,58.6666667 C14.6666667,61.8933333 16.0966667,64.79 18.3333333,66.8066667 L18.3333333,73.3333333 C18.3333333,75.35 19.9833333,77 22,77 L25.6666667,77 C27.6833333,77 29.3333333,75.35 29.3333333,73.3333333 L29.3333333,69.6666667 L58.6666667,69.6666667 L58.6666667,73.3333333 C58.6666667,75.35 60.3166667,77 62.3333333,77 L66,77 C68.0166667,77 69.6666667,75.35 69.6666667,73.3333333 L69.6666667,66.8066667 C71.9033333,64.79 73.3333333,61.8933333 73.3333333,58.6666667 L73.3333333,22 C73.3333333,9.16666667 60.2066667,7.33333333 44,7.33333333 C27.7933333,7.33333333 14.6666667,9.16666667 14.6666667,22 L14.6666667,58.6666667 L14.6666667,58.6666667 Z M27.5,62.3333333 C24.4566667,62.3333333 22,59.8766667 22,56.8333333 C22,53.79 24.4566667,51.3333333 27.5,51.3333333 C30.5433333,51.3333333 33,53.79 33,56.8333333 C33,59.8766667 30.5433333,62.3333333 27.5,62.3333333 L27.5,62.3333333 Z M60.5,62.3333333 C57.4566667,62.3333333 55,59.8766667 55,56.8333333 C55,53.79 57.4566667,51.3333333 60.5,51.3333333 C63.5433333,51.3333333 66,53.79 66,56.8333333 C66,59.8766667 63.5433333,62.3333333 60.5,62.3333333 L60.5,62.3333333 Z M66,40.3333333 L22,40.3333333 L22,22 L66,22 L66,40.3333333 L66,40.3333333 Z"
              fill="#ffffff"
            />
          </svg>
        </span>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
};
