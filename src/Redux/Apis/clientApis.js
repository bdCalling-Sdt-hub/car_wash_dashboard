import { baseApi } from "../BaseUrl";

const clientApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all clients with optional search term
        fetchClients: builder.query({
            query: (searchTerm = '') => ({
                url: `/dashboard/get-all-client`,
                method: "GET",
                params: { searchTerm },
            }),
            providesTags: ['Clients'],
        }),
        fetchClientsRequest: builder.query({
            query: (searchTerm = '') => ({
                url: `/dashboard/all-client-request`,
                method: "GET",
                params: { searchTerm },
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
    }),
});

export const {
    useFetchClientsQuery,
    useBlockUnblockClientMutation,
    useFetchClientsRequestQuery
} = clientApis;
