import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { publicIpv4, publicIpv6 } from "public-ip";
import { ERROR_MESSAGES } from "@constants";

export const publicIPApi = createApi({
  reducerPath: "publicIPApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["PUBLIC_API"],
  endpoints: (builder) => ({
    getPublicIP: builder.query<{ v4?: string; v6?: string }, void>({
      queryFn: async () => {
        try {
          const v4 = await publicIpv4();
          const v6 = await publicIpv6();

          return { data: { v4, v6 } };
        } catch (error) {
          console.error(error);
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
    }),
  }),
});

export const { useGetPublicIPQuery } = publicIPApi;
