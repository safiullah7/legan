import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/home/home.slice';
import authSlice from './features/login/auth.slice';

const store = configureStore({
    reducer: {
        homeSlice,
        authSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;