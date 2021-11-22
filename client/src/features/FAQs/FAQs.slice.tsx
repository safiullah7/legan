import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { IPropsFAQsListItem } from '../../models/faqs';
import { RootState } from '../../store';

export const getFAQAsync = createAsyncThunk('faq/getFAQAsync', async () => {
    const faq = agent.faq.getFAQs();
    return faq;
})

export const getFAQByIdAsync = createAsyncThunk('faq/getFAQByIdAsync', async (_id: string) => {
    const faq = agent.faq.getFAQ(_id);
    return faq;
})

export const addFAQAsync = createAsyncThunk('faq/addFAQAsync',  async (newFAQ: IPropsFAQsListItem) => {
    await agent.faq.saveFAQ(newFAQ);
    const FAQs = agent.faq.getFAQs();
    return FAQs;
})

export const updateFAQAsync = createAsyncThunk('faq/updateFAQAsync', async (updatedFAQ: IPropsFAQsListItem) => {
    const FAQs = agent.faq.updateFAQ(updatedFAQ);
    return FAQs;
})


interface IFAQState {
    selectedFAQ: IPropsFAQsListItem | null
    errorMessage?: string
    loading: boolean
    FAQs: IPropsFAQsListItem[]
}

const initialState: IFAQState = {
    selectedFAQ: null,
    loading: false,
    FAQs: []
};

const faqSlice = createSlice({
    name: 'FAQ',
    initialState,
    reducers: {
        setFAQ: (state, action: PayloadAction<IPropsFAQsListItem>) => {
            // debugger;
            const checkFAQ = state.FAQs.filter(FAQ => FAQ._id === action.payload._id)[0];
            if (checkFAQ !== undefined && checkFAQ !== null) state.selectedFAQ = checkFAQ;
        }
    },
    extraReducers: builder => {
        builder.addCase(getFAQAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getFAQAsync.fulfilled, (state, action) => {
            // debugger;
            return {
                ...state,
                errorMessage: '',
                loading: false,
                FAQs: action.payload
            }
        })
        builder.addCase(getFAQAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(getFAQByIdAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getFAQByIdAsync.fulfilled, (state, action) => {
            // debugger;
            return {
                ...state,
                errorMessage: '',
                loading: false,
                selectedFAQ: action.payload
            }
        })
        builder.addCase(getFAQByIdAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(addFAQAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(addFAQAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                FAQs: action.payload
            }
        })
        builder.addCase(addFAQAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        
        // update
        builder.addCase(updateFAQAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(updateFAQAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                FAQs: action.payload
            }
        })
        builder.addCase(updateFAQAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
    }
})

export const {
    setFAQ
} = faqSlice.actions;

export const getFAQContentSelector = (state: RootState)=> state.faqSlice;

export default faqSlice.reducer;