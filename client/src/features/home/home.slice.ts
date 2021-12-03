import { IBannerContent, IBriefAboutUsContent, IExpertiseContentListItem, Iid, IExpertiseHead, IIndustryExpertiseContentList, ISplash } from './../../models/home';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome, IIndutryHead } from '../../models/home';
import { RootState } from '../../store';
import agent from '../../api/agent';

export const getHomeContentAsync = createAsyncThunk('home/getHomeContent', async () => {
    const homeContent = agent.home.getContent();
    return homeContent;
})

export const updateHomeContentAsync = createAsyncThunk('home/updateHomeContentAsync',
    async (updatedHomeContent: IHome, { rejectWithValue }) => {
        try {
            debugger;
            const homeContent = agent.home.updateContent(updatedHomeContent);
            console.log(homeContent);
            return homeContent;
        } catch (err: any) {
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            // by explicitly returning it using the `rejectWithValue()` utility
            return rejectWithValue(err.response.data)
        }
    })

interface IHomeState {
    splash: ISplash,
    loadingContent: boolean,
    errorMessage?: string,
    homeContent: IHome
}

const initialState: IHomeState = {
    splash: {
        loadSplash: false
    },
    homeContent: {
        bannerContent: {
            heading: '',
            mainText: '',
            bottomText: '',
        },
        briefAboutUsContent: {
            heading: '',
            mainText: '',
            services: null
        },
        expertiseContent: {
            heading: '',
            mainText: '',
            expertiseContentList: null
        },
        industryExpertise: {
            heading: '',
            mainText: '',
            industryExpertiseContentList: null
        },
        _id: '',
        createdAt: null,
        updatedAt: null,
        __v: null
    },
    loadingContent: false,
    errorMessage: ''
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateSplash: (state) => {
            state.splash.loadSplash = false;
        },
        updateHomeBannerContent: (state, action: PayloadAction<IBannerContent>) => {
            state.homeContent.bannerContent = action.payload;
        },
        updateBriefAboutUsContent: (state, action: PayloadAction<IBriefAboutUsContent>) => {
            state.homeContent.briefAboutUsContent = action.payload;
        },
        updateLegalExpertiseHead: (state, action: PayloadAction<IExpertiseHead>) => {
            state.homeContent.expertiseContent.heading = `${action.payload.heading}`;
            state.homeContent.expertiseContent.mainText = action.payload.description;
        },
        updateLegalExpertiseContent: (state, action: PayloadAction<IExpertiseContentListItem>) => {
            const index = state.homeContent.expertiseContent.expertiseContentList!.findIndex(item => item._id === action.payload._id);
            state.homeContent.expertiseContent.expertiseContentList![index] = action.payload;
        },
        deleteLegalExpertiseContent: (state, action: PayloadAction<Iid>) => {
            state.homeContent.expertiseContent.expertiseContentList = state.homeContent.expertiseContent.expertiseContentList!
                .filter(item => item._id !== action.payload.id);
        },
        addLegalExpertiseContent: (state, action: PayloadAction<IExpertiseContentListItem>) => {
            state.homeContent.expertiseContent.expertiseContentList!.push(
                action.payload
            );
        },
        updateIndustryExpertiseHead: (state, action: PayloadAction<IIndutryHead>) => {
            state.homeContent.industryExpertise.heading = `${action.payload.heading}`;
            state.homeContent.industryExpertise.mainText = action.payload.description;
        },
        addIndustryExpertiseTab: (state, action: PayloadAction<IIndustryExpertiseContentList>) => {
            state.homeContent.industryExpertise.industryExpertiseContentList!.push(action.payload);
        },
        deleteIndustryExpertiseTab: (state, action: PayloadAction<Iid>) => {
            state.homeContent.industryExpertise.industryExpertiseContentList = state.homeContent.industryExpertise.industryExpertiseContentList!
                .filter(item => item._id !== action.payload.id)
        },
        updateIndustryExpertiseTab: (state, action: PayloadAction<IIndustryExpertiseContentList>) => {
            const index = state.homeContent.industryExpertise.industryExpertiseContentList!
                .findIndex(item => item._id === action.payload._id);
            state.homeContent.industryExpertise.industryExpertiseContentList![index] = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(getHomeContentAsync.pending, (state, action) => ({
            ...state,
            loadingContent: true,
        }))
        builder.addCase(getHomeContentAsync.fulfilled, (state, action) => ({
            ...state,
            errorMessage: '',
            loadingContent: false,
            homeContent: action.payload
        }))
        builder.addCase(getHomeContentAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))

        builder.addCase(updateHomeContentAsync.pending, (state, action) => ({
            ...state,
            loadingContent: true,
        }))
        builder.addCase(updateHomeContentAsync.fulfilled, (state, action) => ({
            ...state,
            errorMessage: '',
            loadingContent: false,
            homeContent: action.payload
        }))
        builder.addCase(updateHomeContentAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message,
            loadingContent: false,
        }))
    }
});

export const {
    updateSplash,
    updateHomeBannerContent,
    updateBriefAboutUsContent,
    updateLegalExpertiseHead,
    updateLegalExpertiseContent,
    deleteLegalExpertiseContent,
    addLegalExpertiseContent,
    updateIndustryExpertiseHead,
    addIndustryExpertiseTab,
    deleteIndustryExpertiseTab,
    updateIndustryExpertiseTab,
} = homeSlice.actions;

export const getHomeContentSelector = (state: RootState) => state.homeSlice;

export default homeSlice.reducer;