// store.js
import { configureStore } from '@reduxjs/toolkit';
import { userSlice }from './features/userSlice'; // Assuming you have a userSlice set up
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

export default store;

