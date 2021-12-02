import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import agent from '../../api/agent';
import { AddTeamMember, ITeam, ITeamId, ITeamMember } from '../../models/team';
import { RootState } from '../../store';

export const getTeamAsync = createAsyncThunk('team/getTeamAsync', async () => {
    const team = agent.team.getTeam();
    return team;
})

export const addTeamMemberAsync = createAsyncThunk('team/addTeamMemberAsync', 
    async (newTeamMember: AddTeamMember) => {
    const updatedTeam = agent.team.addTeamMember(newTeamMember);
    return updatedTeam;
})

export const updateTeamMemberAsync = createAsyncThunk('team/updateTeamMemberAsync', 
    async (teamMember: AddTeamMember) => {
    const updatedTeam = agent.team.updateTeamMember(teamMember);
    return updatedTeam;
})

export const setSelectedTeamMemberAsync = createAsyncThunk('team/setSelectedTeamMemberAsync', 
    async (id: string, {dispatch, getState}) => {
    const { teamSlice } = getState() as RootState;
    const checkMember: ITeamMember = teamSlice.team.filter(member => member._id === id)[0];
    if (checkMember !== undefined && checkMember !== null) {
        return checkMember;
    }
    else {
        await dispatch(getTeamAsync());
        await dispatch(setSelectedTeamMemberAsync(id));
    }
})

export const deleteTeamMemberAsync = createAsyncThunk('team/deleteTeamMemberAsync', 
    async (_id: string) => {
    const updatedTeam = agent.team.deleteTeamMember(_id);
    return updatedTeam;
})

interface ITeamState {
    selectedTeamMember: ITeamMember | null,
    team: ITeamMember[],
    loading: boolean,
    loadingOnUpdate: boolean,
    errorMessage?: string
}

const initialState: ITeamState = {
    selectedTeamMember: null,
    loading: false,
    loadingOnUpdate: false,
    team: []
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeamMember: (state, action: PayloadAction<ITeamId>) => {
            // debugger;
            const checkMember = state.team.filter(member => member._id === action.payload.memberId)[0];
            if (checkMember !== undefined && checkMember !== null)
                state.selectedTeamMember = checkMember;
            else {
                
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getTeamAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(getTeamAsync.fulfilled, (state, action) => {
            // debugger;
            return {
                ...state,
                errorMessage: '',
                loading: false,
                team: action.payload
            }
        })
        builder.addCase(getTeamAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(addTeamMemberAsync.pending, (state, action) => ({
            ...state,
            loadingOnUpdate: true
        }))
        builder.addCase(addTeamMemberAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loadingOnUpdate: false,
                team: action.payload
            }
        })
        builder.addCase(addTeamMemberAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(updateTeamMemberAsync.pending, (state, action) => ({
            ...state,
            loadingOnUpdate: true
        }))
        builder.addCase(updateTeamMemberAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loadingOnUpdate: false,
                team: action.payload
            }
        })
        builder.addCase(updateTeamMemberAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(deleteTeamMemberAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(deleteTeamMemberAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                team: action.payload
            }
        })
        builder.addCase(deleteTeamMemberAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(setSelectedTeamMemberAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(setSelectedTeamMemberAsync.fulfilled, (state, action: any) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                selectedTeamMember: action.payload
            }
        })
        builder.addCase(setSelectedTeamMemberAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
    }
})

export const {
    setTeamMember,
} = teamSlice.actions;

export const getTeamContentSelector = (state: RootState)=> state.teamSlice;

export default teamSlice.reducer;