import { tagTypesList } from "../../tagTypes";
import { baseApi } from "../base/baseApi";

const URL = "/products";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (data) => ({
        url: `${URL}/`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypesList.tagTypes.product],
    }),
    login: build.mutation({
      query: (data) => ({
        url: `/auth/signin`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypesList.tagTypes.product],
    }),
    getAllProduct: build.query({
      query: () => ({
        url: URL,
        method: "GET",
      }),
      providesTags: [tagTypesList.tagTypes.product],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypesList.tagTypes.product],
    }),
    updateSingleProduct: build.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
      invalidatesTags: [tagTypesList.tagTypes.product],
    }),

    deleteSingleProduct: build.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypesList.tagTypes.product],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateSingleProductMutation,
  useDeleteSingleProductMutation,
} = productApi;
