import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { internalIpV4, internalIpV6 } from "internal-ip";
import { ERROR_MESSAGES } from "@constants";

export const privateIPApi = createApi({
  reducerPath: "privateIPApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["PRIVATE_IP"],
  endpoints: (builder) => ({
    getPrivateIP: builder.query<{ v4?: string; v6?: string }, void>({
      queryFn: async () => {
        try {
          const v4 = await internalIpV4();
          const v6 = await internalIpV6();

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

export const { useGetPrivateIPQuery } = privateIPApi;
