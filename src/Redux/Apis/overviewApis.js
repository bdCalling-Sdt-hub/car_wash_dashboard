import { baseApi } from "../BaseUrl";

const overviewApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all subscriptions
        fetchOverViewData: builder.query({
            query: (year) => ({
                url: `/dashboard/revenue?year=${year}`,
                method: "GET",
            }),
            providesTags: ['overview'],
        }),
        // Fetch all subscriptions
        fetchOverviewCardData: builder.query({
            query: () => ({
                url: `/dashboard/user-subscription-overview`,
                method: "GET",
            }),
            providesTags: ['overview'],
        }),
    }),
});

export const {
    useFetchOverViewDataQuery,
    useFetchOverviewCardDataQuery
} = overviewApis;

