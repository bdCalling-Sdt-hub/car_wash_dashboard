import { baseApi } from "../BaseUrl";

const clientApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all clients with optional search term
        fetchClients: builder.query({
            query: ({ searchTerm = '', page = 1 }) => ({
                url: `/dashboard/get-all-client`,
                method: "GET",
                params: { searchTerm, page },
            }),
            providesTags: ['Clients'],
        }),
        fetchClientsRequest: builder.query({
            query: ({ searchTerm = '', page = 1 }) => ({
                url: `/dashboard/all-client-request`,
                method: "GET",
                params: { searchTerm, page },
            }),
            providesTags: ['Clients'],
        }),

        // Block or unblock a client
        blockUnblockClient: builder.mutation({
            query: (data) => ({
                url: `/dashboard/block-unblock-client`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['Clients'],
        }),
        // Block or unblock a client
        deleteClient: builder.mutation({
            query: (id) => ({
                url: `/dashboard/delete-client?id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Clients'],
        }),
    }),
});

export const {
    useFetchClientsQuery,
    useBlockUnblockClientMutation,
    useFetchClientsRequestQuery,
    useDeleteClientMutation
} = clientApis;
