import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/home/home.slice';
import authSlice from './features/login/auth.slice';
import teamSlice from './features/team/team.slice';
import blogSlice from './features/blog/blog.slice';

const store = configureStore({
    reducer: {
        homeSlice,
        authSlice,
        teamSlice,
        blogSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;