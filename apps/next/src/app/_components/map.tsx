import { MapContainer, Polygon, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import type { LatLngBoundsExpression } from "leaflet";

import { useDarkMode } from "@ubus/hooks/use-dark-mode";

import { BusLocationMarkers } from "./bus-location-markers";
import { BusStopMarkers } from "./bus-stop-markers";
import { ControlsLayer } from "./controls-layer";
import { IUBAT_LAT_LAN, IubatMarker } from "./iubat-marker";
import { UserLocationMarker } from "./user-location-marker";

const MAX_BOUNDS: LatLngBoundsExpression = [
  [20.67, 88.0844],
  [26.6375, 92.6728],
] as const;

const BANGLADESH_BOUNDARY_RECTANGLE: LatLngBoundsExpression = [
  [26.63401, 88.028336],
  [26.63401, 92.673668],
  [20.743355, 92.673668],
  [20.743355, 88.028336],
  [26.63401, 88.028336],
] as const;

const Map = () => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <MapContainer
        center={IUBAT_LAT_LAN}
        zoom={11}
        className="h-full w-full rounded-xl"
        // maxZoom={16}
        minZoom={7}
        zoomControl={false}
        zoomAnimation={true}
        fadeAnimation={true}
        markerZoomAnimation={true}
        maxBounds={MAX_BOUNDS}
        maxBoundsViscosity={1.0}
        attributionControl={false}
      >
        <TileLayer
          // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.jpg"
          // url="http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          // url="https://mt1.google.com/vt/lyrs=m,traffic&x={x}&y={y}&z={z}"
          // url="https://mt3.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
          url={
            isDarkMode
              ? // ? "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_CityLights_2012/default/2012-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg"
                "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
              : "https://{s}.google.com/vt/lyrs=m,traffic&x={x}&y={y}&z={z}"
          }
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <IubatMarker />
        <BusLocationMarkers />
        <BusStopMarkers />
        <UserLocationMarker />
        <Polygon
          positions={BANGLADESH_BOUNDARY_RECTANGLE.map(([lat, lng]) => [
            lat,
            lng,
          ])}
          pathOptions={{
            color: "transparent",
            fillColor: "transparent",
            interactive: false,
          }}
        />
      </MapContainer>
      <ControlsLayer />
    </>
  );
};

export default Map;
