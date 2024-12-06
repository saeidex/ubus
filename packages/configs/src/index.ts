export interface Bus {
  id: Readonly<string>;
  name?: string;
}

export const buses: readonly Bus[] = [
  { id: "1" },
  // { id: "2" }, { id: "3" }
];

const validateUniqueIds = (buses: readonly Bus[]) => {
  const ids = buses.map((bus) => bus.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    throw new Error("Duplicate bus IDs found!");
  }
};

validateUniqueIds(buses);
