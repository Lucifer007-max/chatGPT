import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";

// Admin Login ==== 
export const  loginAdmin = createAsyncThunk('adminauth' , async (body)=> {
    const res = await fetch(config.API + 'users/authenticateAdmin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    const amdinData = await res.json();
    return amdinData;
})


const initialState = {
    msg: '',
    role: '',
    token: '',
    loading: false,
    error: ''

}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state , action) => {
            state.token = localStorage.getItem('token')
        },
        addUser: (state , action) => {
            state.role = localStorage.getItem('role')
        }
    },
    extraReducers: {
        [loginAdmin.pending]: (state , action) => {
            state.loading = true;
        },
        [loginAdmin.fulfilled]: (state , action) => {
            state.loading = false;
            const {payload} = action;
            state.token = payload.token;
            state.role = payload.role;
            localStorage.setItem('token' , payload.token);
            localStorage.setItem('role' , payload.role);
        },
        [loginAdmin.rejected]: (state , action) => {
            state.loading = false;
            const {payload} = action;
            state.error = payload.message;
            // console.log('Error Msg Admin Login >>>>>>>>>' , payload.message);
        }
    }
})


export const {authToken , addUser} = authSlice.actions;
export default authSlice.reducer; 