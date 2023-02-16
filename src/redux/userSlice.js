import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";

// User Login =====
export const  loginUser = createAsyncThunk('userauth' , async (body)=> {
    const res = await fetch(config.API + 'users/authenticateUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const userData = await res.json();
    return userData;
})



const  _user = {
    msg: '',
    role: '',
    token: '',
    Isapproved: '',
    uName: '',
    loading: false,
    error: ''
}
const userauthSlice = createSlice({
    name: 'userauth',
    initialState : _user,
    reducers: {
        addToken: (state , action) => {
            state.token = localStorage.getItem('token')
        },
        addRole: (state , action) => {
            state.role = localStorage.getItem('role')
        },
        addApprove: (state , action) => {
            state.Isapproved = localStorage.getItem('approve')
        },
        addName: (state , action) => {
            state.Isapproved = localStorage.getItem('uName')
        }
    },
    extraReducers: {
        [loginUser.pending]: (state , action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state , action) => {
            state.loading = false;
            const {payload} = action;
            state.token = payload.token;
            state.role = payload.role;
            state.Isapproved = payload.Isapproved;
            localStorage.setItem('token' , payload.token);
            localStorage.setItem('role' , payload.role);
            localStorage.setItem('approve' , payload.Isapproved);
            localStorage.setItem('IB-uName' , payload.firstName);
            localStorage.setItem('IB-uid' , payload.id);
            localStorage.setItem('currentTIME' , payload.syncedAt);
            localStorage.setItem('proID' , payload.profession);

            // state.msg = payload.message;
        },
        [loginUser.rejected]: (state , action) => {
            state.loading = false;
            // const {payload} = action;
            // state.error = payload.message;
            // console.log('Error Msg user Login >>>>>>>>>' , payload.message);
        }
    }
})


export const {authToken , addRole , addApprove , addName} = userauthSlice.actions;
export default userauthSlice.reducer; 





