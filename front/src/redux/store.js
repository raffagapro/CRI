import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userReducer';

const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        // appointments: appointmentReducer
    }
});

export default store;