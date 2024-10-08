import { baseApi } from "../BaseUrl";

const workerApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all subscriptions
        fetchWorkers: builder.query({
            query: (status) => ({
                url: `/dashboard/works${status ? `?status=${status}` : ''}`,
                method: "GET",
            }),
            providesTags: ['overview'],
        }),
        // get nerdy follower 
        fetchNerByWorker: builder.query({
            query: ({ jobId, page, limit, search }) => {
                if (!jobId) {
                    return console.log('request id not found api not call')
                }
                return {
                    url: `/dashboard/get-sorted-nearby-available-worker?jobId=${jobId}&page=${page}&limit=${limit}${search ? `&searchTerm=${search}` : ''}`,
                    method: "GET",
                }
            },
            providesTags: ['newBy'],
        }),
        // assign work 
        assignWork: builder.mutation({
            query: (data) => ({
                url: `/job/assign-worker`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Clients', 'newBy']
        }),
        fetchAllWorkers: builder.query({
            query: ({ search, page }) => ({
                url: `/dashboard/get-all-worker?page=${page || 1}${search ? `&searchTerm=${search}` : ''}`,
                method: "GET",
            }),
            providesTags: ['Workers'],
        }),
        // Block or unblock a worker
        blockUnblockWorker: builder.mutation({
            query: (data) => ({
                url: `/dashboard/block-unblock-worker`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Workers'],
        }),
        fetchSortedNearbyWorkers: builder.query({
            query: ({ jobId, page, limit, search }) => ({
                url: `/dashboard/get-sorted-nearby-available-worker?jobId=${jobId}&page=${page}&limit=${limit}${search ? `&searchTerm=${search}` : ''}`,
                method: "GET",
            }),
            providesTags: ['NearbyWorkers'],
        }),
        // Fetch all works
        fetchWorks: builder.query({
            query: () => ({
                url: `/dashboard/works`,
                method: "GET",
            }),
            providesTags: ['Works'],
        }),
        // Fetch a single worker by ID
        fetchSingleWorker: builder.query({
            query: (id) => ({
                url: `/dashboard/get-single-worker?id=${id}`,
                method: "GET",
            }),
            providesTags: ['Worker'],
        }),
        // delete worker
        deleteWorker: builder.mutation({
            query: (id) => ({
                url: `/dashboard/delete-worker?id=${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Workers']
        })
    }),
});

export const {
    useFetchWorkersQuery,
    useFetchNerByWorkerQuery,
    useAssignWorkMutation,
    useFetchAllWorkersQuery,
    useBlockUnblockWorkerMutation,
    useFetchSortedNearbyWorkersQuery,
    useFetchWorksQuery,
    useFetchSingleWorkerQuery,
    useDeleteWorkerMutation
} = workerApis;

