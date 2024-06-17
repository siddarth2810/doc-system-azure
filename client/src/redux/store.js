// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice'; // Assuming you have a userSlice set up

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;

