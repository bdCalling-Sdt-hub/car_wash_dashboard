import { baseApi } from "../BaseUrl";

const notificationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // get notifications
        getNotifications: builder.query({
            query: ({ page = 1, limit }) => ({
                url: `/dashboard/get-admin-notification`,
                method: 'GET',
                params: { limit, page }
            }),
            providesTags: ['notification']
        }),
        // read notifications
        readSingleNotification: builder.mutation({
            query: ({ data }) => {
                return { url: `/dashboard/mark-as-read`, body: data, method: 'PATCH', }
            },
            invalidatesTags: ['notification']
        }),
        // read all notifications
        readAllNotifications: builder.mutation({
            query: () => {
                return { url: `notification/read-all`, body: {}, method: 'PATCH', }
            },
            invalidatesTags: ['notification']
        }),
    })
})
export const {
    // useGetNotificationsQuery
    useGetNotificationsQuery,
    // useReadSingleNotificationMutation
    useReadSingleNotificationMutation,
    // useReadAllNotificationsMutation
    useReadAllNotificationsMutation
} = notificationsApi