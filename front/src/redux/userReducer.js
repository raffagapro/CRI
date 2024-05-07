/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    login:false,
    user:{}
}

export const loginAsync = createAsyncThunk('user/login', async(userData, { rejectWithValue })=>{
    try {
        const url = `http://localhost:3000/users/login`;
        const response = await axios.post(url, userData);
        return response.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        // login:(state, action)=>{
        //     state.loading = action.payload.loading;
        //     state.user = action.payload.user;
        // }
        register:(state, action)=>{},
        logout:(state, action)=>{}
    },
    extraReducers: (builder)=>{
        builder
            .addCase(loginAsync.pending, (state)=>{
                state.loading = true;
                state.login = false;
                state.user = null;
            })
            .addCase(loginAsync.fulfilled, (state, action)=>{
                state.loading = false;
                state.loading = action.payload.loading;
                state.user = action.payload.user;
            })
            .addCase(loginAsync.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const { login, register, logout } = userSlice.actions;