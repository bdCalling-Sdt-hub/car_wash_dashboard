import { baseApi } from "../BaseUrl";

const settingApi = baseApi.injectEndpoints({
    // add Privacy  terms privacy
    endpoints: (build) => ({
        addTerms: build.mutation({
            query: (data) => ({
                url: 'dashboard/add-terms-conditions',
                method: 'POST',
                body: data
            })
        }),
        getTerms: build.query({
            query: () => ({
                url: `dashboard/get-terms-conditions`,
                method: 'GET'
            })
        }),
        addPrivacy: build.mutation({
            query: (data) => ({
                url: 'dashboard/add-privacy-policy',
                method: 'POST',
                body: data
            })
        }),
        getPrivacy: build.query({
            query: () => ({
                url: `dashboard/get-privacy-policy`,
                method: 'GET'
            })
        }),
        getWorkHour: build.query({
            query: () => ({
                url: `dashboard/get-variable`,
                method: 'GET'
            })
        }),
        updateWorkHour: build.mutation({
            query: (data) => ({
                url: `dashboard/update-variable`,
                method: 'PATCH',
                body: data
            })
        })
    })
})
export const {
    // add about
    useAddTermsMutation,
    // get about
    useGetTermsQuery,
    useAddPrivacyMutation,
    useGetPrivacyQuery,
    useGetWorkHourQuery,
    useUpdateWorkHourMutation
} = settingApi