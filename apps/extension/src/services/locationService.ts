import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { internalIpV4 } from "internal-ip";
import { publicIpv6 } from "public-ip";
import type { LocationAPIModel, LocationModel } from "@models";
import { ERROR_MESSAGES } from "@constants";
import { API_ENDPOINTS } from "@configurations";

export const locationApi = createApi({
  reducerPath: "ipInfoApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["LOCATION"],
  endpoints: (builder) => ({
    getLocation: builder.query<LocationModel, void>({
      async queryFn() {
        try {
          const location = (await fetch(API_ENDPOINTS.IPWHOIS).then((res) =>
            res.json()
          )) as LocationAPIModel;

          if (!location || !location.ip || location.success === false) {
            return {
              error: {
                status: 500,
                data: {
                  name: "GET_LOCATION_ERROR",
                  message: ERROR_MESSAGES.GET_PUBLIC_IP,
                },
              },
            };
          }

          const [privateIPV4, publicIPV6] = await Promise.all([
            internalIpV4().catch(() => undefined),
            publicIpv6().catch(() => undefined),
          ]);

          const result: LocationModel = {
            ...location,
            ip: {
              v4: {
                public: location.ip,
                private: privateIPV4,
              },
              v6: {
                public: publicIPV6,
              },
            },
          };

          return { data: result };
        } catch {
          return {
            error: {
              status: 500,
              data: {
                name: "GET_IP_INFO_ERROR",
                message: ERROR_MESSAGES.GET_PUBLIC_IP,
              },
            },
          };
        }
      },
    }),
  }),
});

export const { useGetLocationQuery } = locationApi;
