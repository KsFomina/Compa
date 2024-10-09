import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueries } from "@testing-library/react";

export const CompaAPI = createApi({
  reducerPath: "CompaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7208/" }),
  endpoints: (buildQueries) => ({
    getArrangement: buildQueries.query({
      query: () => "Arrangement",
    }),
  }),
});

export const { useGetArrangementQuery } = CompaAPI;
