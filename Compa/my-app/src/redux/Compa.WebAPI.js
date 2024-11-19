import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CompaAPI = createApi({
  reducerPath: "CompaApi",
  //baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.51.125:5043/api/" }),
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5043/api/" }),
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
