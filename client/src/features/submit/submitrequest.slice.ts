import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { ISubmitRequest, ISubmitRequestContent, ISubmitRequestDto } from "../../models/submit";
import { RootState } from "../../store";

export const getSubmitRequestAsync = createAsyncThunk('submitrequest/getSubmitRequestAsync', async () => {
    const submitrequestContent = agent.submitRequest.getSubumitRequest();
    return submitrequestContent;
})
export const updateSubmitRequestAsync = createAsyncThunk('submitrequest/updateSubmitRequestAsync',
    async (updatedSubmitRequest: ISubmitRequestContent, { rejectWithValue }) => {
        try {
            const submitRequest = agent.submitRequest.updateContent(updatedSubmitRequest);
            return submitRequest;
        } catch (err: any) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return rejectWithValue(err.response.data)
        }
    })

export const getQueriesAsync = createAsyncThunk('submitrequest/getQueriesAsync', async () => {
    const queries = agent.submitRequest.getQueries();
    return queries;
})

export const createRequestAsync = createAsyncThunk('submitrequest/createRequestAsync',
    async (newQuery: ISubmitRequestDto, { rejectWithValue }) => {
        try {
            const submitRequests = agent.submitRequest.newQuery(newQuery);
            return submitRequests;
        } catch (err: any) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return rejectWithValue(err.response.data)
        }
    })

interface IState {
    submitrequest: ISubmitRequestContent | null,
    queries: ISubmitRequest[] | null,
    queriesLoading: boolean,
    loading: boolean,
    loadingOnUpdate: boolean,
    errorMessage?: string
}

const initialState: IState = {
    submitrequest: null,
    queries: null,
    queriesLoading: false,
    loading: false,
    loadingOnUpdate: false,
    errorMessage: ''
};

const submitrequestSlice = createSlice({
    name: 'submitrequest',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getSubmitRequestAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getSubmitRequestAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                submitrequest: action.payload
            }
        })
        builder.addCase(getSubmitRequestAsync.rejected, (state, action) => ({
            ...state,
            submitrequest: null,
            errorMessage: action.error.message
        }))

        builder.addCase(updateSubmitRequestAsync.pending, (state, action) => ({
            ...state,
            loadingContent: true,
        }))
        builder.addCase(updateSubmitRequestAsync.fulfilled, (state, action) => ({
            ...state,
            errorMessage: '',
            loadingContent: false,
            submitrequest: action.payload
        }))
        builder.addCase(updateSubmitRequestAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message,
            loadingContent: false,
        }))

        // get queries
        builder.addCase(getQueriesAsync.pending, (state, action) => ({
            ...state,
            queriesLoading: true,
        }))
        builder.addCase(getQueriesAsync.fulfilled, (state, action) => ({
            ...state,
            errorMessage: '',
            queriesLoading: false,
            queries: action.payload
        }))
        builder.addCase(getQueriesAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message,
            queriesLoading: false,
        }))

        // create a new query
        builder.addCase(createRequestAsync.pending, (state, action) => ({
            ...state,
            queriesLoading: true,
        }))
        builder.addCase(createRequestAsync.fulfilled, (state, action) => ({
            ...state,
            errorMessage: '',
            queriesLoading: false,
            queries: action.payload
        }))
        builder.addCase(createRequestAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message,
            queriesLoading: false,
        }))
    }
})

export const getSubmitRequestSelector = (state: RootState) => state.submitrequestSlice;

export default submitrequestSlice.reducer;