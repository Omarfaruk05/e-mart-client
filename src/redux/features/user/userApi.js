import { AUTH_KEY } from "../../../services/auth.service";
import { getFromLocalStorage } from "../../../utils/localStorage";
import { tagTypes } from "../../tagTypes";
import { baseApi } from "../base/baseApi";

const USER_URL = "/users";

const userToken = getFromLocalStorage(AUTH_KEY);

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    login: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getUsers: build.query({
      query: () => ({
        url: USER_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getSingUser: build.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getMe: build.query({
      query: () => ({
        url: `${USER_URL}/getMe`,
        method: "GET",
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `${USER_URL}/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginMutation,
  useGetMeQuery,
  useGetSingUserQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateMyProfileMutation,
} = userApi;
