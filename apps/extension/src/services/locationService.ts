import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LocationModel } from "@models";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ipwho.is" }),
  tagTypes: ["LOCATION"],
  endpoints: (builder) => ({
    getLocation: builder.query<LocationModel, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetLocationQuery } = locationApi;
