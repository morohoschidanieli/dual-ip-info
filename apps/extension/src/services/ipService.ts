import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { internalIpV4, internalIpV6 } from "internal-ip";
import { publicIpv4, publicIpv6 } from "public-ip";
import { ERROR_MESSAGES } from "@constants";

export const ipApi = createApi({
  reducerPath: "ipApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["PUBLIC_IP", "PRIVATE_IP"],
  endpoints: (builder) => ({
    getPublicIP: builder.query<{ v4?: string; v6?: string }, void>({
      queryFn: async () => {
        try {
          const [v4, v6] = await Promise.all([
            publicIpv4().catch(() => undefined),
            publicIpv6().catch(() => undefined),
          ]);

          if (!v4 && !v6) {
            throw new Error(ERROR_MESSAGES.GET_PUBLIC_IP);
          }

          return { data: { v4, v6 } };
        } catch {
          return {
            error: {
              status: 500,
              data: {
                name: ERROR_MESSAGES.GET_PUBLIC_IP,
                message: ERROR_MESSAGES.GET_PUBLIC_IP,
              },
            },
          };
        }
      },
      providesTags: ["PUBLIC_IP"],
    }),
    getPrivateIP: builder.query<{ v4?: string; v6?: string }, void>({
      queryFn: async () => {
        try {
          const [v4, v6] = await Promise.all([
            internalIpV4().catch(() => undefined),
            internalIpV6().catch(() => undefined),
          ]);

          if (!v4 && !v6) {
            throw new Error(ERROR_MESSAGES.GET_PRIVATE_IP);
          }

          return { data: { v4, v6 } };
        } catch {
          return {
            error: {
              status: 500,
              data: {
                name: ERROR_MESSAGES.GET_PRIVATE_IP,
                message: ERROR_MESSAGES.GET_PRIVATE_IP,
              },
            },
          };
        }
      },
      providesTags: ["PRIVATE_IP"],
    }),
  }),
});

export const { useGetPrivateIPQuery, useGetPublicIPQuery } = ipApi;
