import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  tagTypes: ["Contacts"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://636c115e7f47ef51e14192ec.mockapi.io/api/v1' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
        query: (body) => ({
            url: `/contacts`,
            method: 'POST',
            body,
        }),
        invalidatesTags: ["Contacts"],
    }),
    removeContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ["Contacts"],
    }),
  }),
})

export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi