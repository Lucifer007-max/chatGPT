import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';

export const chatIB = createApi({
    reducerPath: "chatIB",
    tagTypes:['chatIB'],
    baseQuery: fetchBaseQuery({baseUrl:config.API , 
    //     prepareHeaders: (headers, { getState }) => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //       headers.set({'Authorization': `Bearer ${token}`});
    //     }
    //     return headers;
    //   },
    }),
    endpoints: (builder)=> ({
        codeType: builder.mutation({
            query: codebody => {
                return{
                    // redirect:'/home',
                    url: 'openibAI/code',
                    method:'POST',
                    body:codebody,
                }
            },
            invalidatesTags: ['chatIB']
        }),
        chatCreate: builder.mutation({
            query: codebody => {
                return{
                    // redirect:'/home',
                    url: 'openibAI/code',
                    method:'POST',
                    body:codebody,
                }
            },
            invalidatesTags: ['chatIB']
        }),
        codegGet:  builder.query({
            query: (id)=> `openibAI/codeByid/${id}`,
            providesTags : ['chatIB']
        }),
        codecountGet:  builder.query({
            query: (id)=> `openibAI/countQuery/${id}`,
            providesTags : ['chatIB']
        }),
        codedelcountGet:  builder.query({
            query: (id)=> `openibAI/countDelQuery/${id}`,
            providesTags : ['chatIB']
        }),
        codeDel : builder.mutation({
            query: (patch) => ({
                url: `openibAI/codeDel/${patch.uID}`,
                method: 'PUT',
                body: patch.data
            }),
            invalidatesTags: ['chatIB']
        }),
    })
})
export const { useCodeTypeMutation , useCodegGetQuery , useCodeDelMutation , useCodecountGetQuery, useCodedelcountGetQuery } = chatIB;
// export const { useCodeTypeMutation } =chat;
// export const  { useCodeTypeMutation } = chatIB