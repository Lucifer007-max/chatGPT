import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../config';

export const chatIB = createApi({
    reducerPath: "chatIB",
    tagTypes:['chatIB'],
    baseQuery: fetchBaseQuery({baseUrl:config.API}),
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
        codegGet:  builder.query({
            query: (id)=> `openibAI/codeByid/${id}`,
            providesTags : ['chatIB']
        }),
    })
})
export const { useCodeTypeMutation , useCodegGetQuery } = chatIB;
// export const { useCodeTypeMutation } =chat;
// export const  { useCodeTypeMutation } = chatIB