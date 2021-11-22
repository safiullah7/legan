import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { IBlog, ICategory, IAddBlog } from '../../models/blog';
import { RootState } from '../../store';

export const getBlogAsync = createAsyncThunk('blog/getBlogAsync', async () => {
    const blog = agent.blog.getBlogs();
    return blog;
})

export const getBlogByIdAsync = createAsyncThunk('blog/getBlogByIdAsync', async (_id: string) => {
    console.log(_id);
    const blog = agent.blog.getBlog(_id);
    return blog;
})

export const addBlogAsync = createAsyncThunk('blog/addBlogAsync', 
    async (newBlog: IAddBlog) => {
    const updatedTeam = agent.blog.saveBlog(newBlog);
    return updatedTeam;
})

export const updateBlogAsync = createAsyncThunk('team/updateBlogAsync', 
    async (blog: IAddBlog) => {
    console.log(blog);
    const updatedTeam = agent.blog.updateBlog(blog);
    return updatedTeam;
})

export const setSelectedBlogAsync = createAsyncThunk('blog/setSelectedBlogAsync', 
    async (_id: string, {dispatch, getState}) => {
    const { blogSlice } = getState() as RootState;
    const checkBlog: IBlog = blogSlice.blog.filter(blog => blog._id === _id)[0];
    if (checkBlog !== undefined && checkBlog !== null) {
        return checkBlog;
    }
    else {
        await dispatch(getBlogAsync());
        await dispatch(setSelectedBlogAsync(_id));
    }
})

interface IBlogState {
    selectedBlog: IBlog | null,
    errorMessage?: string
    loading: boolean,
    blog: IBlog[]
}

const initialState: IBlogState = {
    selectedBlog: null,
    loading: false,
    blog: []
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setBlog: (state, action: PayloadAction<IBlog>) => {
            // debugger;
            const checkBlog = state.blog.filter(blog => blog._id === action.payload._id)[0];
            if (checkBlog !== undefined && checkBlog !== null) {
                state.selectedBlog = checkBlog;
                state.loading = false
            }
            else {
                
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getBlogAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getBlogAsync.fulfilled, (state, action) => {
            // debugger;
            return {
                ...state,
                errorMessage: '',
                loading: false,
                blog: action.payload
            }
        })
        builder.addCase(getBlogAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(getBlogByIdAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getBlogByIdAsync.fulfilled, (state, action) => {
            // debugger;
            return {
                ...state,
                errorMessage: '',
                loading: false,
                selectedBlog: action.payload
            }
        })
        builder.addCase(getBlogByIdAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(addBlogAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(addBlogAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                blog: action.payload
            }
        })
        builder.addCase(updateBlogAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(updateBlogAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(updateBlogAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                errorMessage: '',
                loading: false,
                blog: action.payload
            }
        })
        builder.addCase(addBlogAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(setSelectedBlogAsync.pending, (state, action) => ({
            ...state,
            loading: false
        }))
        builder.addCase(setSelectedBlogAsync.fulfilled, (state, action: any) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                selectedTeamMember: action.payload
            }
        })
        builder.addCase(setSelectedBlogAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
    }
})

export const {
    setBlog
} = blogSlice.actions;

export const getBlogContentSelector = (state: RootState)=> state.blogSlice;

export default blogSlice.reducer;