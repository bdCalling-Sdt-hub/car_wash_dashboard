import { baseApi } from "../BaseUrl";

const settingApi = baseApi.injectEndpoints({
    // add Privacy  terms privacy
    endpoints: (build) => ({
        addAboutTermsPrivacy: build.mutation({
            query: (data) => ({
                url: 'settings/update-settings',
                method: 'POST',
                body: data
            })
        }),
        getAboutTermsPrivacy: build.query({
            query: (type) => ({
                url: `settings/get-settings/${type}`,
                method: 'GET'
            })
        })
    })
})
export const {
    // add about
    useAddAboutTermsPrivacyMutation,
    // get about
    useGetAboutTermsPrivacyQuery
} = settingApi