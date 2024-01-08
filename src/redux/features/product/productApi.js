import { tagTypes } from "../../tagTypes";
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
      invalidatesTags: [tagTypes.product],
    }),
    getAllProduct: build.query({
      query: () => ({
        url: URL,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getSingleProduct: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    updateSingleProduct: build.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `${URL}/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    deleteSingleProduct: build.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.product],
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
