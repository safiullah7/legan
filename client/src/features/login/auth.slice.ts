import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { ILogin, IUser } from '../../models/user';
import { RootState } from '../../store';

export const loginAsync = createAsyncThunk('auth/login', async (loginObject: ILogin, { rejectWithValue }) => {
    const user = await agent.user.login(loginObject);
    if (user) {
        return user;
    } else {
        return rejectWithValue('No user found');
    }
})

interface IAuthState {
    isLoggedIn: boolean,
    loading: boolean,
    errorMessage?: string,
    user: IUser | null
}

const initialState: IAuthState = {
    isLoggedIn: false,
    loading: false,
    errorMessage: '',
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            debugger;
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.user = null;
        },
        updateUserObject: (state, action: PayloadAction<IUser>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(loginAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                loading: false,
                errorMessage: '',
                user: action.payload,
                isLoggedIn: true
            }
        })
        builder.addCase(loginAsync.rejected, (state, action) => ({
            ...state,
            loading: false,
            errorMessage: action.error.message,
            user: null,
            isLoggedIn: false
        }))
    }
});

export const {
    logoutUser,
    updateUserObject
} = authSlice.actions;

export const getAuthSelector = (state: RootState) => state.authSlice;

export default authSlice.reducer;