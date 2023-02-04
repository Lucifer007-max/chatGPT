import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice";



const store =  configureStore({
    reducer: {
        admin: authSlice
    }
})


export default store;