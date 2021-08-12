import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/home/home.slice';

const store = configureStore({
    reducer: {
        homeSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export default store;