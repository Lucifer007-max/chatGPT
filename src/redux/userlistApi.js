import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';

// debugger
export const userListAPI = createApi({
    reducerPath: "userListApi",
    tagTypes: ['userlists'],
    baseQuery: fetchBaseQuery({baseUrl: config.API}),
    endpoints: (builder)=> ({
        userListGet:  builder.query({
            query: ()=> `users/getUsers/`,
            providesTags : ['userlists']
        }),
        userStatus : builder.mutation({
            query: (patch) => ({
                url: `users/approveUser/${patch.id}`,
                method: 'PUT',
                body: patch.approve
            }),
            invalidatesTags: ['userlists']
        }),
        userDelete: builder.mutation({
            query: (id) => ({
                url: `/users/deleteUser/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['userlists']
        }),
         
    })

})



export const {
     useUserListGetQuery, useUserStatusMutation, useUserDeleteMutation
} = userListAPI;