import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";


export const  categoryAdd = createAsyncThunk('categoryAdd' , async (body)=> {
    const res = await fetch(config.API + 'users/authenticateAdmin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    })
    const data = await res.json;
    return data;
})
