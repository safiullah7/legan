import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { IPolicy } from "../../models/privacyPolicy";
import { RootState } from "../../store";

export const getPolicyAsync = createAsyncThunk('policy/getPolicyAsync', async () => {
    const policy = agent.policy.getPolicy();
    return policy;
})
export const updatePolicyAsync = createAsyncThunk('policy/updatePolicyAsync',
    async (updatedPolicy: IPolicy, { rejectWithValue }) => {
        try {
            const policy = agent.policy.updatePolicy(updatedPolicy);
            return policy;
        } catch (err: any) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return rejectWithValue(err.response.data)
        }
    })

interface IState {
    policy: IPolicy | null,
    loading: boolean,
    loadingOnUpdate: boolean,
    errorMessage?: string
}

const initialState: IState = {
    policy: null,
    loading: false,
    loadingOnUpdate: false,
    errorMessage: ''
};

const policySlice = createSlice({
    name: 'policy',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getPolicyAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getPolicyAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                policy: action.payload
            }
        })
        builder.addCase(getPolicyAsync.rejected, (state, action) => ({
            ...state,
            policy: null,
            errorMessage: action.error.message
        }))


        builder.addCase(updatePolicyAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(updatePolicyAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                policy: action.payload
            }
        })
        builder.addCase(updatePolicyAsync.rejected, (state, action) => ({
            ...state,
            loading: false,
            errorMessage: action.error.message
        }))
    }
})

export const getPolicySelector = (state: RootState) => state.policySlice;

export default policySlice.reducer;