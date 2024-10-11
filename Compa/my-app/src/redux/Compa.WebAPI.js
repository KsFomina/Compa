import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { buildQueries } from "@testing-library/react";

export const CompaAPI = createApi({
  reducerPath: "CompaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7208/api/" }),
  endpoints: (buildQueries) => ({
    getArrangement: buildQueries.query({
      query: () => "Arrangement",
    }),
    postArrangement: buildQueries.mutation({
      query: (body) => ({
        url: "Arrangement",
        method: "POST",
        body,
      }),
    }),
    getTags: buildQueries.query({
      query: () => "Tag",
    }),
  }),
});

export const { useGetArrangementQuery, usePostArrangementMutation, useGetTagsQuery } = CompaAPI;
