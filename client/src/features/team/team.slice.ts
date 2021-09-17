import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITeam, ITeamId } from '../../models/team';
import { RootState } from '../../store';

const initialState: ITeam = {
    selectedTeamMember: null,
    team: [
    {
        name: 'Mubariz Aliyev',
        id: '2',
        imgURL: '/team_1.jpg',
        title: 'Legal Consultant',
        Description: `<p>
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
    },
    {
        name: 'Kadir Hazan',
        id: '3',
        imgURL: '/team_2.jpg',
        title: 'Legal Consultant',
        Description: `<p>
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
    },
]
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeamMember: (state, action: PayloadAction<ITeamId>) => {
            const checkMember = state.team.filter(member => member.id === action.payload.memberId)[0];
            if (checkMember !== undefined && checkMember !== null)
                state.selectedTeamMember = checkMember;
        }
    },
})

export const {
    setTeamMember,
} = teamSlice.actions;

export const getTeamContentSelector = (state: RootState)=> state.teamSlice;

export default teamSlice.reducer;