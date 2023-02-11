import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';

export const registerApi = createApi({
    reducerPath: "registerApi",
    tagTypes: ['Register'],
    baseQuery: fetchBaseQuery({baseUrl: config.API}),
    endpoints: (builder)=> ({
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
        })
    })

})



export const {
    useCategoryCreateMutation , useCategoryGetQuery  , 
    useProfessionCreateMutation , useProfessionGetQuery,
    useFinalistGetQuery , useFinallistDeleteMutation
} = registerApi;