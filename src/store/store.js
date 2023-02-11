import { configureStore } from "@reduxjs/toolkit";
import {getDefaultMiddleware}  from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice";
import { registerApi } from "../redux/registerApi";
import { authApi } from "../redux/authApi";
import userSlice from "../redux/userSlice";
import { chatIB } from "../redux/chatIB";


const store =  configureStore({
    reducer: {
        admin: authSlice,
        user: userSlice,
        [registerApi.reducerPath] : registerApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [chatIB.reducerPath] : chatIB.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([registerApi.middleware, authApi.middleware , chatIB.middleware ])
})


export default store;