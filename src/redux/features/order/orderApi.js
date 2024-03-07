import { tagTypes } from "../../tagTypes";
import { baseApi } from "../base/baseApi";

const URL = "/orders";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: `${URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.order],
    }),
    getAllOrder: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),
    getSingleOrder: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.order],
    }),

    deleteSingleOrder: build.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useDeleteSingleOrderMutation,
} = orderApi;
