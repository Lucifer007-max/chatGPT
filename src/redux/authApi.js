import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';


export  const  authApi = createApi({
    reducerPath: "authApi",
    tagTypes:['authApi'],
    baseQuery: fetchBaseQuery({baseUrl: config.API }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: login => {
                // console.log(login)
                return{
                    // redirect:'/home',
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