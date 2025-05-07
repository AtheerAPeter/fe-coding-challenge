import { ForecastWeatherNearby } from "@/app/types/forecast";
import { Coordinates, Location } from "@/app/types/location";
import { Axios } from "axios";

export const wetterApi = (request: Axios) => ({
  locations: async (locationCode: string) => {
    const response = await request.get<Location>(`/locations/${locationCode}/`);
    return response.data;
  },

  forecast: async (coordinates: Coordinates) => {
    const response = await request.get<ForecastWeatherNearby>(
      `/weather/forecast/${coordinates.latitude}/${coordinates.longitude}/`
    );
    return response.data;
  },
});
