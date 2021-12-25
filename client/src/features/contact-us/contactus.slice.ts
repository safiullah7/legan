import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { IContactUs } from "../../models/contactUs";
import { RootState } from "../../store";

export const getContactUsContentAsync = createAsyncThunk('contactus/getContactUsContentAsync', async () => {
    const team = agent.contactUs.getContactUsContent();
    return team;
})
export const updateContactUsContentAsync = createAsyncThunk('contactus/updateContactUsContentAsync',
    async (updatedContactUsContent: IContactUs, { rejectWithValue }) => {
        try {
            const contactUsContent = agent.contactUs.updateContent(updatedContactUsContent);
            return contactUsContent;
        } catch (err: any) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return rejectWithValue(err.response.data)
        }
    })

interface IState {
    contactus: IContactUs | null,
    loading: boolean,
    loadingOnUpdate: boolean,
    errorMessage?: string
}

const initialState: IState = {
    contactus: null,
    loading: false,
    loadingOnUpdate: false,
    errorMessage: ''
};

const contactUsSlice = createSlice({
    name: 'contactUs',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getContactUsContentAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getContactUsContentAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                contactus: action.payload
            }
        })
        builder.addCase(getContactUsContentAsync.rejected, (state, action) => ({
            ...state,
            contactus: null,
            errorMessage: action.error.message
        }))

        builder.addCase(updateContactUsContentAsync.pending, (state, action) => ({
            ...state,
            loadingContent: true,
        }))
        builder.addCase(updateContactUsContentAsync.fulfilled, (state, action) => ({
            ...state,
            errorMessage: '',
            loadingContent: false,
            contactus: action.payload
        }))
        builder.addCase(updateContactUsContentAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message,
            loadingContent: false,
        }))
    }
})

export const getContactUsSelector = (state: RootState) => state.contactUsSlice;

export default contactUsSlice.reducer;