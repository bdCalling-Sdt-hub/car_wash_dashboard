import { baseApi } from "../BaseUrl";

const subscriptionApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Fetch all subscriptions
        fetchSubscriptions: builder.query({
            query: () => ({
                url: "/dashboard/get-all-package",
                method: "GET",
            }),
            providesTags: ['subscription'],
        }),

        // Update a subscription
        updateSubscription: builder.mutation({
            query: (data) => ({
                url: `/dashboard/update-package`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['subscription'],
        }),
        // Update a subscription
        createCoupon: builder.mutation({
            query: (data) => ({
                url: `/coupon/create-coupon`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['subscription'],
        }),
    }),
});

export const {
    useFetchSubscriptionsQuery,
    useUpdateSubscriptionMutation,
    useCreateCouponMutation
} = subscriptionApis;

