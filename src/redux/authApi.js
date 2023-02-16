import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';


export  const  authApi = createApi({
    reducerPath: "authApi",
    tagTypes:['authApi'],
    baseQuery: fetchBaseQuery({baseUrl: config.API }),
    prepareHeaders: (headers, { getState }) => {
    const token = (getState()).auth.token;
    if (token) 
    {headers.set('authorization', `Bearer ${token}`)}
    return headers;},
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: login => {
                return{
                    url: 'users/authenticateUser',
                    method:'POST',
                    body:login,
                }
            },
            invalidatesTags: ['authApi']
        }),
        adminLogin: builder.mutation({
            query: adminLogin => {
                return{
                    url:'users/authenticateAdmin',
                    method:'POST',
                    body:adminLogin,
                    responseHandler:''
                }
            }
        })
    })

})



export const { useUserLoginMutation , useAdminLoginMutation } = authApi;