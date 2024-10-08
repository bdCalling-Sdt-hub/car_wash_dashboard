import { baseApi } from "../BaseUrl";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // user login
        loginUser: builder.mutation({
            query: (data) => {
                return {
                    url: 'admin/auth/login',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['auth']
        }),
        // send verify email
        forgetPassword: builder.mutation({
            query: (data) => {
                return {
                    url: 'admin/auth/forgot-password',
                    method: 'PATCH',
                    body: data
                }
            },
            invalidatesTags: ['auth']
        }),
        // verify code 
        verifyCode: builder.mutation({
            query: (data) => {
                return {
                    url: 'admin/auth/verify-otp-forgot-password',
                    method: 'PATCH',
                    body: data
                }
            },
            invalidatesTags: ['auth']
        }),
        // reset password 
        resetPassword: builder.mutation({
            query: (data) => {
                return {
                    url: 'admin/auth/reset-password',
                    method: 'PATCH',
                    body: data,
                    // headers: {
                    //     Authorization: `Bearer ${JSON.parse((localStorage.getItem('accessToken'))) || ""}`,
                    // }
                }
            },
            invalidatesTags: ['auth']
        }),
        // change password 
        changePassword: builder.mutation({
            query: (data) => {
                return {
                    url: 'admin/auth/change-password',
                    method: 'PATCH',
                    body: data
                }
            },
            invalidatesTags: ['auth']
        }),
        // update user 
        updateUser: builder.mutation({
            query: (data) => {
                return {
                    url: 'admin/update-profile',
                    method: 'PATCH',
                    body: data,
                }
            },
            invalidatesTags: ['auth']
        }),
        // get profile 
        getProfile: builder.query({
            query: () => {
                const token = localStorage.getItem('token');
                if (token) {
                    return {
                        url: 'admin/auth/profile',
                        method: 'GET',
                    };
                } else {
                    console.log('No token found, API not called.');
                    return null;
                }
            },
            providesTags: ['auth'],
        })
    })
})
export const {
    //user login
    useLoginUserMutation,
    // send verify email
    useForgetPasswordMutation,
    // verify code
    useVerifyCodeMutation,
    //reset password 
    useResetPasswordMutation,
    //change password
    useChangePasswordMutation,
    // update user 
    useUpdateUserMutation,
    // get profile 
    useGetProfileQuery,
} = authApi