export type ForecastWeatherNearby = {
  items: Array<{
    summary: ForecastSummary;
    spaces: Array<ForecastSpace>;
  }>;
};

type ForecastSummary = {
  date: string | null;
  temperature: {
    min: number | null;
    max: number | null;
  };
  weather: {
    state: number | null;
    icon: string | null;
    text: string | null;
    iconUrl: string | null;
  };
  prec: {
    sum: number;
    rain: number;
    snow: number;
    probability: number;
    class: number;
  };
  freshSnow: number;
  sunHours: number;
  wind: {
    unit: string;
    direction: string;
    text: string;
    degree: number;
    mean: number;
    gusts: {
      value: number;
    };
  };
  windchill: {
    min: number;
    max: number;
  };
  astronomy: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moonphase: {
      value: number;
      text: string;
    };
    moonzodiac: {
      value: number;
      text: string;
    };
  };
  uvIndexMax: number;
};

type ForecastSpace = {
  type?: string; //"morning" | "afternoon" | "evening" | "night";
  typeLabel: string;
  date: string | null;
  from: string | null;
  to: string | null;
  weather: {
    state: number | null;
    text: string | null;
    icon: string | null;
    iconUrl: string | null;
  };
  temperature: {
    min: number | null;
    max: number | null;
  };
  prec: {
    sum: number;
    rain: number;
    snow: number;
    probability: number;
    class: number;
  };
  wind: {
    unit: string;
    text: string;
    degree: number;
    direction: string;
    mean: number;
    gusts: {
      value: number;
    };
  };
  windchill: {
    min: number;
    max: number;
  };
  pressure: {
    mean: number;
  };
  relativeHumidity: {
    mean: number;
  };
  uvIndexMax: number;
};
