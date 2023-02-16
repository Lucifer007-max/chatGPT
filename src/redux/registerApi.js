import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';

// debugger
export const registerApi = createApi({
    reducerPath: "registerApi",
    tagTypes: ['Register'],
    baseQuery: fetchBaseQuery({baseUrl: config.API}),
    endpoints: (builder)=> ({
        // user Register
        userRegister : builder.mutation({
            query: userReg => ({
                url: 'users/registerUser',
                method: 'POST',
                body: userReg
            })
        }),
        // console.log(userData),
        userRegisterComplete : builder.mutation({
            query: (patch) => ({
                url: `users/userUpadte/${patch.uID}`,
                method: 'PUT',
                body: patch.data
            })
        }),

        totalUserCount:  builder.query({
            query: ()=> `users/membercount/`,
            providesTags : ['Register']
        }),
        approveUserCount: builder.query({
            query: ()=> `users/approvemembercount/`,
            providesTags : ['Register']
        }),
        
        
        // Category API ----
        categoryCreate: builder.mutation({
            query: category => ({
                url: '/category/categoryCreate',
                method: 'POST',
                body: category
            }),
            invalidatesTags: ['Register']
        }),
        categoryGet: builder.query({
            query: ()=> '/category/categoryGet',
            providesTags : ['Register']
        }),
        categoryNameGet: builder.query({
            query: ()=> '/category/cName',
            providesTags : ['Register']
        }),
        categoryNameByProfession: builder.query({
            query: (id) => `category/categoryByPro/${id}`,
            providesTags: ['Register']
        }),
        // Profession API ----
        professionCreate: builder.mutation({
            query: profession => ({
                url: '/profession/professionCreate',
                method: 'POST',
                body: profession
            }),
            invalidatesTags: ['Register']
        }),
        professionGet: builder.query({
            query: ()=> '/profession/professionGet',
            providesTags : ['Register']
        }),
        
        // Combine List For category And Profession
        finalistGet: builder.query({
            query: ()=> '/category/cpList',
            providesTags : ['Register']
        }),
        finallistDelete: builder.mutation({
            query: (id) => ({
                url: `/category/cpDelete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Register']
        }),
    })

})



export const {
    useCategoryCreateMutation , useCategoryGetQuery  , 
    useProfessionCreateMutation , useProfessionGetQuery,
    useFinalistGetQuery , useFinallistDeleteMutation ,
    useUserRegisterMutation ,useCategoryNameGetQuery ,
    useUserRegisterCompleteMutation , useTotalUserCountQuery,
    useApproveUserCountQuery , useCategoryNameByProfessionQuery
} = registerApi;