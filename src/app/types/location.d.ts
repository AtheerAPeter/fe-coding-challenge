export type Location = {
  name: string | null;
  code: string | null;
  slug: string | null;
  timezone: string | null;
  coordinates: Coordinates;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};
