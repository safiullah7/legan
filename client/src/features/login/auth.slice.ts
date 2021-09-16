import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface IUser {
    _id: string,
    email: string,
    name: string,
    accessToken: string,
    refreshToken: string,
    // createdAt: Date,
    // updatedAt: Date,
    
}
interface IAuth {
    isLoggedIn: boolean,
    user: IUser
}
const initialState: IAuth = {
    isLoggedIn: true,
    user: {
        _id: "",
        email: "",
        name: "",
        accessToken: "",
        refreshToken: "",
        // createdAt: "2021-08-25T11:39:55.099Z",
        // updatedAt: Date,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            //state.bannerContent = action.payload;
        },
    }
});

export const {
    login
} = authSlice.actions;

export const getAuthSelector = (state: RootState) => state.authSlice;

export default authSlice.reducer;