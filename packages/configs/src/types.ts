export interface Route {
  type: "FeatureCollection";
  features: Feature[];
}

export interface Feature {
  type: "Feature";
  properties: {
    name: string;
  };
  geometry: {
    coordinates: [number, number];
    type: "Point";
  };
  id: number;
}
