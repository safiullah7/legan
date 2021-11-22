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

interface ITeamState {
    selectedTeamMember: ITeamMember | null,
    team: ITeamMember[],
    loading: boolean,
    errorMessage?: string
}

const initialState: ITeamState = {
    selectedTeamMember: null,
    loading: false,
    team: [
        {
            _id: '2',
            name: 'Mubariz Aliyev',
            imageUrl: '/team_2.jpg',
            title: 'Legal Consultant',
            description: `<p>
                                    Mubariz Aliyev is a consultant specializing in the field of information technology law. He has worked at law firms across different countries and has advised clients on a wide range of legal issues including data protection & GDPR, intellectual property, blockchain, international tech contracts, and software licensing. 
                                </p>
                                <p>
                                    He holds master’s degrees in IT Law and International Commercial Law. He is currently pursuing a Ph.D. degree and his current research focus is on the legal aspects of Artificial Intelligence.
                                </p>
                                <h4>
                                    Education
                                </h4>
                                <ul>
                                    <li>
                                        <h5>
                                            University of Montreal, Canada
                                        </h5>
                                        <p>
                                            Ph.D. in Innovation & Technology Law
                                        </p>
                                    </li>
                                    <li>
                                        <h5>
                                            University of Tartu, Estonia
                                        </h5>
                                        <p>
                                            Master of Arts (MA) in Information Technology Law
                                        </p>
                                    </li>
                                    <li>
                                        <h5>
                                            University of Lausanne, Switzerland
                                        </h5>
                                        <p>
                                            Advanced Masters in International Commercial Law (LL.M.)
                                        </p>
                                    </li>
                                    <li>
                                        <h5>
                                            Academy of Public Administration, Azerbaijan 
                                        </h5>
                                        <p>
                                            Bachelor of Laws (LL.B.)
                                        </p>
                                    </li>
                                </ul>`,
            createdAt: new Date(),
            updatedAt: new Date(),
            __v: 0
        },
        {
            _id: '3',
            name: 'Kadir Hazan',
            imageUrl: '/team_1.jpg',
            title: 'Legal Consultant',
            description: `<p>
                            Kadir Hazan is a legal consultant specializing in data protection law, corporate and tax law. He completed his Master of International and Comparative Law in French and English languages at the University of Lausanne, Switzerland, and worked as a legal consultant for a law firm in Turkey for a year. Subsequently, he worked in countries such as Mauritius, France, and Morocco as a human resources and legal affairs manager in an international tourism company for 3 years.
                        </p>
                        <p>
                            He voluntarily writes blog posts and works as a translator in a personal data-oriented organization in Turkey called KOIOIS. He is especially passionate about IT law and currently pursuing a Ph.D. degree in tax, robotics, and AI Law.  
                        </p>
                        <h4>
                            Education
                        </h4>
                        <ul>
                            <li>
                                <h5>
                                    University of Lausanne, Switzerland
                                </h5>
                                <p>
                                    Master of International and Comparative Law
                                </p>
                            </li>
                            <li>
                                <h5>
                                    University of Orleans, France
                                </h5>
                                <p>
                                    Bachelor of Laws (Exchange) 
                                </p>
                            </li>
                            <li>
                                <h5>
                                    University of Erzincan, Turkey
                                </h5>
                                <p>
                                    Bachelor of Laws (LL.B.)
                                </p>
                            </li>
                        </ul>`,
            createdAt: new Date(),
            updatedAt: new Date(),
            __v: 0
        },
    ]
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
            loading: true
        }))
        builder.addCase(addTeamMemberAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                team: action.payload
            }
        })
        builder.addCase(addTeamMemberAsync.rejected, (state, action) => ({
            ...state,
            errorMessage: action.error.message
        }))
        builder.addCase(updateTeamMemberAsync.pending, (state, action) => ({
            ...state,
            loading: true
        }))
        builder.addCase(updateTeamMemberAsync.fulfilled, (state, action) => {
            return {
                ...state,
                errorMessage: '',
                loading: false,
                team: action.payload
            }
        })
        builder.addCase(updateTeamMemberAsync.rejected, (state, action) => ({
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