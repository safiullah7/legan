import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome } from '../../models/home';
import { RootState } from '../../store';

const initialState: IHome = {
    bannerContent: {
        heading: 'Legal for Creative Minds',
        mainText: 'The legal expertise combined with tech savviness comes to offer a variety of tech law solutions. We pride ourselves on our international-mindedness. ',
        bottomText: 'You can submit your case for a free assessment.We will get back to you shortly',
    },
    expertiseContent: {
        heading: 'LEGAL EXPERTISE',
        mainText: 'Our niche is tech-law and fields of law focusing on information technology. We have tech-savvy legal consultants who understand your technology and its legal implications and offer hands-on solutions.',
        contentList: [
            {
            heading: 'DATA PROTECTION',
            subHeading: 'GDPR | ePrivact | CCPA | PIPEDA',
            panel: 'panel1',
            icon: 'rocket',
            list: [
                'GDPR end-to-end compliance (Data mapping)',
                'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
                'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
                'Data Processing Impact Assessment',
                'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
                'Canada Data Privacy Law(PIPEDA) compliance',
            ],
            },
            {
            heading: 'TECH CONTRACTS',
            subHeading: 'EULA | T&Cs | Licensing | SaaS | NDA | SLA',
            panel: 'panel2',
            icon: 'world',
            list: [
                'GDPR end-to-end compliance (Data mapping)',
                'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
                'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
                'Data Processing Impact Assessment',
                'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
                'Canada Data Privacy Law(PIPEDA) compliance',
            ],
            },
            {
            heading: 'INTELLECTUAL PROPERTY',
            subHeading: 'Trademark | Copyright | Software Licensing | Patent',
            panel: 'panel3',
            icon: 'intellectual',
            list: [
                'GDPR end-to-end compliance (Data mapping)',
                'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
                'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
                'Data Processing Impact Assessment',
                'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
                'Canada Data Privacy Law(PIPEDA) compliance',
            ],
            },
            {
            heading: 'INTERNET LAW',
            subHeading: 'Website Take-Downs | DMCA | UDRP',
            panel: 'panel4',
            icon: 'rocket2',
            list: [
                'GDPR end-to-end compliance (Data mapping)',
                'International transfers of personal data (Standard contractual clauses, Data processing agreements)',
                'Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)',
                'Data Processing Impact Assessment',
                'Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)',
                'Canada Data Privacy Law(PIPEDA) compliance',
            ],
            },
        ]
    },
    industryExpertise: {
        heading: 'INDUSTRY EXPERTISE',
        mainText: 'Our services are designed to address several sectors. We have extensive experience and offer hands-on solutions to, including but not limited, the following industries.',
        contentList: [
            {
            heading: 'SOFTWARE',
            id: 0,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
            {
            heading: 'MOBILE APPs',
            id: 1,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
            {
            heading: 'START-UPs',
            id: 2,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
            {
            heading: 'E-COMMERCE',
            id: 3,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
            {
            heading: 'VIDEO GAMING',
            id: 4,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
            {
            heading: 'ARTIFICIAL INTELLIGENCE',
            id: 5,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
            {
            heading: 'BLOCKCHAIN',
            id: 6,
            list: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum porro illum dolorem doloremque voluptas illum doloremLorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas illum ',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus psum dolor sit amet consectetur, adipisicing amet consectetu illutas illum  dolor sit amet consectetur, adipisicing amet consectetu illum rro illum dolorem doloremque voluptas ',
            ],
            },
        ]
    }
};

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateHomeContent: (state, action: PayloadAction<IHome>) => {
            return action.payload;
        }
    }
});

export const { updateHomeContent } = homeSlice.actions;

export const getHomeContentSelector = (state: RootState) => state.homeSlice;

export default homeSlice.reducer;