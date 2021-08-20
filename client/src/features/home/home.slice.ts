import { IBannerContent, IBriefAboutUsContent, IExpertiseContentListItem } from './../../models/home';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome } from '../../models/home';
import { RootState } from '../../store';

const initialState: IHome = {
    bannerContent: {
        heading: 'Legal for Creative Minds',
        mainText: 'The legal expertise combined with tech savviness comes to offer a variety of tech law solutions. We pride ourselves on our international-mindedness. ',
        bottomText: 'You can submit your case for a free assessment.We will get back to you shortly',
    },
    briefAboutUsContent: {
        heading: 'BRIEFLY ABOUT US',
        mainText: 'We are an international consulting agency operating out of Europe. Our online presence allows our reach go beyond one region. We serve start-ups, scale-ups, web-businesses and individuals from a wide variety of industries. Our priority is based on the following services.',
        services: [
            {
                id: '1',
                imageUrl: '/about-bag.png',
                name: 'Consulting',
                description: 'Provision of online consutling services in matters ranging from internet law to intellectual property.'
            },
            {
                id: '2',
                imageUrl: '/about-draft.png',
                name: 'Document Drafting',
                description: 'We draft/review any tech and non-tech contracts including NDAs, SLAs, IP Lisening/Assignment, EULAs, etc.'
            },
            {
                id: '3',
                imageUrl: '/about-research.png',
                name: 'Legal Research',
                description: 'We have extensive legal research skills, be it researching laws of various countries, or that of new technologies.'
            },
        ]
    },
    expertiseContent: {
        heading: 'LEGAL EXPERTISE',
        mainText: 'Our niche is tech-law and fields of law focusing on information technology. We have tech-savvy legal consultants who understand your technology and its legal implications and offer hands-on solutions.',
        contentList: [
            {
                id: '1',
                heading: 'DATA PROTECTION',
                subHeading: 'GDPR | ePrivact | CCPA | PIPEDA',
                panel: 'panel1',
                icon: 'rocket',
                content:`<ul><li>GDPR end-to-end compliance (Data mapping)</li>
                    <li>International transfers of personal data (Standard contractual clauses, Data processing agreements)</li>
                    <li>Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)</li>
                    <li>Data Processing Impact Assessment</li>
                    <li>Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)</li>
                    <li>Canada Data Privacy Law(PIPEDA) compliance </li></ul>`
            },
            {
                id: '2',
                heading: 'TECH CONTRACTS',
                subHeading: 'EULA | T&Cs | Licensing | SaaS | NDA | SLA',
                panel: 'panel2',
                icon: 'world',
                content: `<ul><li>GDPR end-to-end compliance (Data mapping)</li>
                    <li>International transfers of personal data (Standard contractual clauses, Data processing agreements)</li>
                    <li>Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)</li>
                    <li>Data Processing Impact Assessment</li>
                    <li>Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)</li>
                    <li>Canada Data Privacy Law(PIPEDA) compliance </li></ul>`
            },
            {
                id: '3',
                heading: 'INTELLECTUAL PROPERTY',
                subHeading: 'Trademark | Copyright | Software Licensing | Patent',
                panel: 'panel3',
                icon: 'intellectual',
                content: `<ul><li>GDPR end-to-end compliance (Data mapping)</li>
                    <li>International transfers of personal data (Standard contractual clauses, Data processing agreements)</li>
                    <li>Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)</li>
                    <li>Data Processing Impact Assessment</li>
                    <li>Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)</li>
                    <li>Canada Data Privacy Law(PIPEDA) compliance </li></ul>`
            },
            {
                id: '4',
                heading: 'INTERNET LAW',
                subHeading: 'Website Take-Downs | DMCA | UDRP',
                panel: 'panel4',
                icon: 'rocket2',
                content: `<ul><li>GDPR end-to-end compliance (Data mapping)</li>
                    <li>International transfers of personal data (Standard contractual clauses, Data processing agreements)</li>
                    <li>Privacy Policy and Cookie Policy (GDPR, CCPA, PIPEDA - Compliant)</li>
                    <li>Data Processing Impact Assessment</li>
                    <li>Compliance with California data privacy laws(CCPA, CalOPPA, CPRA)</li>
                    <li>Canada Data Privacy Law(PIPEDA) compliance </li></ul>`
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
        updateHomeContent: (state, action: PayloadAction<IBannerContent>) => {
           state.bannerContent = action.payload;
        },
        updateBriefAboutUsContent: (state, action: PayloadAction<IBriefAboutUsContent>) => {
            state.briefAboutUsContent = action.payload;
        },
        updateLegalExpertiseContent:(state, action: PayloadAction<IExpertiseContentListItem>) => {
            const index = state.expertiseContent.contentList.findIndex(item => item.id === action.payload.id);
            state.expertiseContent.contentList[index] = action.payload;
        }
    }
});

export const { updateHomeContent, updateBriefAboutUsContent, updateLegalExpertiseContent } = homeSlice.actions;

export const getHomeContentSelector = (state: RootState) => state.homeSlice;

export default homeSlice.reducer;