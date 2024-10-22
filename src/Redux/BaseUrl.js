import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
    reducerPath: 'medicalStartup',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.10.32:8052",
        headers: {
            Authorization: `Bearer ${JSON.parse((localStorage.getItem('token'))) || ""}`,
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["auth", 'category', 'doctor', 'banner'],
})
export const imageUrl = (image) => {
    console.log(image);

    if (typeof image !== 'string') {
        return '';
    }

    if (image.includes('http')) {
        return image;
    }
    if (image.startsWith('/')) {
        return `http://192.168.10.32:8052${image}`;
    }
    return `http://192.168.10.32:8052/${image}`;
}
