/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    login:false,
    user:{}
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state, action)=>{
            state.login = action.payload.login;
            state.user = action.payload.user;
        },
        logout:(state)=>{
            state.login = false;
            state.user = {};
        }
    },

});

export const { login, logout } = userSlice.actions;