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
    autorization: buildQueries.mutation({
      query: (body) => ({
        url: "User/Authorization",
        method: "PUT",
        body,
      }),
    }),

    getUser: buildQueries.query({
      query: (id) => `User/${id}`,
    }),
    getTag: buildQueries.query({
      query: (id) => `Tag/${id}`,
    }),

    addUserOnArr: buildQueries.mutation({
      query: (body) => ({
        url: "Arrangement/AddUser",
        method: "POST",
        body,
      }),
    }),

    getArrangementId: buildQueries.query({
      query: (id)=>`Arrangement/${id}`,
    }),
  }),
});

export const {
  useGetArrangementQuery,
  usePostArrangementMutation,
  useGetTagsQuery,
  useAutorizationMutation,
  useGetUserQuery,
  useGetTagQuery,
  useAddUserOnArrMutation,
  useGetArrangementIdQuery,
} = CompaAPI;
