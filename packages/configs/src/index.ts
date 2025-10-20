export interface Bus {
  id: Readonly<string>;
  name?: string;
}

export const buses: readonly Bus[] = [
  { id: "1", name: "Bus 1 - Airport Route" },
  { id: "2", name: "Bus 2 - Rajbari Route" },
  { id: "3", name: "Bus 3 - Airport Route" },
  { id: "4", name: "Bus 4 - Rajbari Route" },
  { id: "5", name: "Bus 5 - Airport Route" },
];

const validateUniqueIds = (buses: readonly Bus[]) => {
  const ids = buses.map((bus) => bus.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    throw new Error("Duplicate bus IDs found!");
  }
};

validateUniqueIds(buses);
