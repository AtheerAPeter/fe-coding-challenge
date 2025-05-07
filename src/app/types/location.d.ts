// Basic location information
export type LocationBasicInfo = {
  name: string | null;
  label: string | null;
  isoPath: string | null;
  code: string;
  slug: string;
  timezone: string;
};

// Normalized location data
export type LocationNormalized = {
  normalized: {
    name: string;
    country: {
      name: string;
    };
  };
};

// Administrative divisions
export type LocationAdministrative = {
  zipcodes: string[];
  admin1: {
    location: {
      isoPath: string;
      code: string;
      name: string;
      slug: string;
    };
  };
  admin3: {
    code: string;
    location: {
      code: string;
      name: string;
    };
  };
  admin4: {
    code: string;
  };
};

// Geographic hierarchy
export type LocationGeography = {
  country: {
    code: string;
    name: string;
    location: {
      name: string;
      code: string;
      slug: string;
      isoPath: string;
    };
  };
  continent: {
    location: {
      name: string;
      code: string;
      slug: string;
      isoPath: string;
    };
  };
  feature: {
    code: string;
  };
};

// Metadata
export type LocationMetadata = {
  coordinates: Coordinates;
  scores: {
    seoPriority: number;
  };
};

// Complete location type combining all segments
export type Location = LocationBasicInfo &
  LocationNormalized &
  LocationAdministrative &
  LocationGeography &
  LocationMetadata;

export type Coordinates = {
  latitude: number;
  longitude: number;
};
