import axios from "axios";
import { wetterApi } from "./wetterApi";

export const client = axios.create({
  baseURL: "https://api.wttr.io/web-app/v1",
  headers: {
    token: process.env.NEXT_PUBLIC_WETTER_API_TOKEN,
    "X-Application-ID": process.env.NEXT_PUBLIC_WETTER_APPLICATION_ID,
  },
});

export const HttpClient = {
  WetterApi: wetterApi(client),
};
