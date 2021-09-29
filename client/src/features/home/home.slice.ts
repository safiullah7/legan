import { IBannerContent, IBriefAboutUsContent, IExpertiseContentListItem, Iid, IExpertiseHead, IIndustryExpertiseContentList, ISplash } from './../../models/home';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHome, IIndutryHead } from '../../models/home';
import { RootState } from '../../store';
import agent from '../../api/agent';

export const getHomeContentAsync = createAsyncThunk('home/getHomeContent', async () => {
    const homeContent = agent.home.getContent();
    return homeContent;
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
            heading: 'BRIEFLY ABOUT US',
            mainText: 'We are an international consulting company operating out of Europe. Our online presence allows our reach to go beyond one region. We serve start-ups, scale-ups, web-businesses, and individual software developers, consultants, and business owners from different countries. ',
            services: [
                {
                    _id: '1',
                    imageUrl: '/Consulting.svg',
                    name: 'Consulting',
                    description: 'Provision of online consulting services in matters concerning intellectual property, internet law, data protection&GDPR, etc.'
                },
                {
                    _id: '2',
                    imageUrl: '/Document_Drafting.svg',
                    name: 'Document Drafting',
                    description: 'Provision of online consulting services in matters concerning intellectual property, internet law, data protection&GDPR, etc.'
                },
                {
                    _id: '3',
                    imageUrl: '/Legal_Research.svg',
                    name: 'Legal Research',
                    description: 'We draft/review any tech and non-tech contracts including NDAs, Master Service Agreements, IP Licensing/Assignment, EULAs, etc.'
                },
            ]
        },
        expertiseContent: {
            heading: 'LEGAL EXPERTISE',
            mainText: 'Our niche is tech-law and fields of law focusing on information technology. We have tech-savvy legal consultants who understand your product and its legal implications and offer hands-on solutions.',
            expertiseContentList: [
                {
                    _id: '1',
                    heading: 'DATA PROTECTION',
                    subHeading: 'GDPR I ePrivacy I CCPA',
                    panel: 'panel1',
                    icon: '/Legal_expertise_data_protection.svg',
                    content:`<ul><li>Data Protection Officer as a Service (DPOaaS)</li>
                        <li>End-to-end GDPR compliance check</li>
                        <li>EU Cookie Law compliance check</li>
                        <li>Privacy Policy and Cookie Policy (GDPR, CCPA - compliant)</li>
                        <li>Data processing agreements, data transfer agreements</li>
                        <li>Data mapping and records of processing activities (ROPA)</li>
                        <li>Data protection impact assessments (DPIAs)</li></ul>`
                },
                {
                    _id: '2',
                    heading: 'TECH CONTRACTS',
                    subHeading: 'T&Cs I EULA I MSA I NDA',
                    panel: 'panel2',
                    icon: '/Legal_expertise_tech_contracts.svg',
                    content: `<ul><li>End User License Agreements (EULA)</li>
                            <li>Non-Disclosure Agreements (NDA) / Memorandum of Understanding (MoU)</li>
                            <li>Website/Mobile App Terms of Use</li>
                            <li>Software-as-a-Service (SaaS) Agreements</li>
                            <li>Copyright Licensing & Assignment Agreements</li>
                            <li>Freelancer Agreements / Software Development Agreements / Service Level Agreements (SLA)</li></ul>`
                },
                {
                    _id: '3',
                    heading: 'INTELLECTUAL PROPERTY',
                    subHeading: 'Trademark I Copyright I Software Licensing',
                    panel: 'panel3',
                    icon: '/Legal_expertise_intellectual_property.svg',
                    content: `<ul><li>Trademark availability search (EUIPO, USPTO, CIPO, UKIPO, etc.) and application</li>
                        <li>Patent prior art search</li>
                        <li>Copyright Infringement / Cease and Desist Letters</li>
                        <li>Software Licensing and Open-Source Licenses</li>
                        <li>Consulting on available IPRs for your video games, mobile apps, software, etc. </li>
                        <li>IP transfer agreements, IP clauses in employment contract and regulations </li></ul>`
                },
                {
                    _id: '4',
                    heading: 'INTERNET LAW',
                    subHeading: 'Website Take-Downs I UDRP I DMCA',
                    panel: 'panel4',
                    icon: '/Legal_expertise_Internet_law.svg',
                    content: `<ul><li>Uniform Domain-Name Dispute-Resolution Policy (UDRP) consultancy</li>
                                <li>Copyright infringement and Website take-downs</li>
                                <li>Cease and Desist Letters</li>
                                <li>Intermediation Service Agreements (for E-Commerce Marketplaces)</li>
                                <li>Search Engine Optimization (SEO) Service Contracts</li></ul>`
                },
            ]
        },
        industryExpertise: {
            heading: 'INDUSTRY EXPERTISE',
            mainText: 'Our services are designed to address several sectors. We have extensive experience and offer hands-on solutions to the members of the following industries.',
            industryExpertiseContentList: [
                {
                    heading: 'SOFTWARE',
                    _id: '0',
                    content: `<ol>
                        <li>Software is in every part of our lives. There are hundreds of thousands of software pieces being developed and introduced each day all over the world. Especially, Software-as-a-Service (SaaS) solution is on the rise. </li>
                        <li>Development of software has got several legal implications. The prior issue is about the ownership of intellectual property rights. Who owns the copyrights to software source code -  company (or client) or employee (or developer). This issue is the one that needs prior attention when getting into a software development project. </li>
                        <li>Further, when developing software, developers usually use third-party code. This may expose you to severe risks as the code used may be protected under proprietary licenses. Even in the case of open-source software licenses, the terms of each license differ and you have to be cautious in order to stay within legal limits. </li>
                        <li>You should also consider protecting your software. This could be done with various intellectual property rights. For example, your logo or software name can be protected under trademarks, while your source code can be protected under copyrights. There are other available options which need a particular assessment for each specific case. </li>
                        </ol>`
                },
                {
                    heading: 'MOBILE APP',
                    _id: '1',
                    content:`<ol>
                        <li>A mobile application or App is essentially a piece of software designed and developed for use in mobile devices. With the widespread use of internet-connected mobile devices, such as smartphones and tablet computers, Mobile Apps are becoming a more popular way to access content and communicate with others online. </li>
                        <li>When designing and developing a Mobile App, particular attention must be paid to the following issues:
                            <ul>
                                <li>End-user privacy and data protection</li>
                                <li>Intellectual property rights</li>
                                <li>Contractual arrangements</li>
                            </ul>
                        </li>
                        <li>Mobile Apps may collect and process a vast amount of personal data. That is why the data privacy issue must be considered before getting into the development phase. Developers should adopt the “privacy by design” principle and make sure to have relevant privacy documentation within the Apps.</li>
                        <li>IP protection of Mobile Apps must be assessed. There are a wide variety of IP rights to protect various parts of Mobile Apps. All these available rights should be consumed in order to ensure full protection. Further, you need to have relevant contractual arrangements in place in order to safeguard yourself. These include terms and conditions, cancellation and refund policy, etc. </li>
                    </ol>`
                },
                {
                    heading: 'START-UPs',
                    _id: '2',
                    content: `<ol>
                        <li>Startup journey is a road full of excitement, hassles and ambition to become a successful company. While as a startup owner you are putting your game-changing idea into motion, you may however forget less exciting but very important legal issues.</li>
                        <li>Negligence of the law can make your whole idea collapse right from the start. That is why every startup needs to consider legal issues at the very early stage of startup development, ideally at the concept and research phase. A mistake you make can compromise your business’ success heavily.</li>
                        <li>Startups legal issues start from the legal structure of the business and jurisdiction of formation and continue with ensuring intellectual property protection (i.e. copyrighting software source code, trademarking brand name or logo, taking steps to patent your invention), getting your contracts with co-founders, consultants, developers and investors made appropriately.</li>
                        <li>Startup legal issues are not limited to action you have to take at the early stage of your business development. You have to be cautious of the legal matters throughout the startup lifecycle, including but not limited to compliance with relevant laws (i.e. GDPR) and having relevant contractual arrangements with newcomers.</li>
                    </ol>`
                },
                {
                    heading: 'E-COMMERCE',
                    _id: '3',
                    content:`<ol>
                        <li>E-commerce has profoundly disrupted traditional commerce and now even offline stores have an online presence while offering hybrid models. E-commerce companies have huge potential as they mostly offer goods or services to the whole world. This has got several legal implications. </li>
                        <li>E-commerce companies need to have perfectly prepared terms of service in order to ensure their legal protection. Terms of service or terms of sale is a document which sets out the rights and obligations of the e-commerce platform and its customers. It also includes relevant provisions relating to shipping and return policies, disclaimers of any liabilities.</li>
                        <li>E-commerce concerns a huge amount of processing of personal data. Further, considering the international nature of e-commerce, businesses should be mindful of the data protection and privacy implication of their businesses. Having an appropriately prepared Privacy Policy is a must for e-commerce businesses. </li>
                        <li> Another important legal issue that needs consideration is intellectual property infringement. E-commerce businesses should be aware of the legal implications of IP infringement on their platforms and must be able to take relevant actions. </li>
                        </ol>`
                },
                {
                    heading: 'VIDEO GAMING',
                    _id: '4',
                    content: `<ol>
                            <li>. Video games industry is a huge industry with a growing number of players all around the world. Especially, with the advent of smartphones, tablets, and handheld gaming consoles, video games are played by more and more people. </li>
                            <li>Companies invest huge amounts of money into the design and development of video games. In order to the returns of their investment, they have to ensure the assets of the company are protected appropriately. This involves the intellectual property protection of video games </li>
                            <li>Video games can be protected by several intellectual property rights. For example, the logo or name of the game can be protected by a trademark, whereas source code, visual graphics, game music can be protected by copyrights. There are other IP rights to which could be applicable to video games too</li>
                            <li>Besides, game developers must consider that they have a relevant contractual arrangement in place to ensure that they own the IP rights in all elements of the game. Another issue is the protection of personal data of players. This also deserves special attention. </li>
                        </ol>`
                },
                {
                    heading: 'ARTIFICIAL INTELLIGENCE',
                    _id: '5',
                    content: `<ol>
                            <li>Artificial Intelligence is taking the world by storm. It has entered almost all aspects of our everyday life. While AI is not a new phenomenon, it keeps evolving and offers various legal challenges. </li>
                            <li>Often, AI developers rely on open-source third-party code in order to build their own AI products. By not paying due attention to the license agreements of the third-party solutions, you may find yourself in trouble. That is why developers should pay particular attention to licensing agreements in the code they use and make sure what they do is aligned with the license requirements. </li>
                            <li> While AI has long been an unregulated phenomenon, it has recently got the attention it naturally deserves in terms of legislative initiatives. There are laws proposed or adopted regulating AI with which AI developers must abide by. Besides, since the AI community values the ethics of AI very much, the ethical frameworks are also of importance for AI developers. </li>
                            <li>AI also involves mass processing of data, inclduing personal data. That is why AI developers must make sure that they act according to the requirements of the data proteciton laws such as the GDPR. Besides, there are special rules concerning algorithimic decision making set forht within particular laws which needs to be dealt with properly. </li>
                        </ol>`
                },
                {
                    heading: 'BLOCKCHAIN',
                    _id: '6',
                    content: `<ol>
                            <li>Blockchain is the latest magic which involves recording information in a way that creates trust in the information recorded without needing an intemediary. This is the underlying technology behind Bitcoin and other cryptocurrencies. It has got a huge potential and can be used to develop more efficient services in many industries. </li>
                            <li>Blochchain or Distributed Ledger Technologies (DLT) has created new opportunities for many new business models (i.e. Crypto Exchanges, Crypto Wallet Providers). There are laws being adopted in different parts of the world in order to regulate the blockchain industry. However, blockchain laws are not the same everywhere. </li>
                            <li>These laws can be completely different from each other as there is no consensus on the legal ramifications of the technology. Companies building blockchain solutions need to have in mind that not every jurisdiction treats blockchain solutions the same way and thus, they have to look for the ideal legal jurisdiction in order to be able to operate legally. </li>
                            <li>Blockchain legal implications must be considered from the early stages of the development of blockchain solutions. The contracts with developers must ensure that the company owns all the IP rights in the blockchain software. The blockchain industry also offers new models of fundraising such as ICO, IDO, IEO which have several legal implications. </li>
                        </ol>`
                },
            ]
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
        updateHomeContent: (state, action: PayloadAction<IBannerContent>) => {
           state.homeContent.bannerContent = action.payload;
        },
        updateBriefAboutUsContent: (state, action: PayloadAction<IBriefAboutUsContent>) => {
            state.homeContent.briefAboutUsContent = action.payload;
        },
        updateLegalExpertiseHead: (state, action: PayloadAction<IExpertiseHead>) => {
            state.homeContent.expertiseContent.heading = `${action.payload.heading}`;
            state.homeContent.expertiseContent.mainText = action.payload.description;
         },
        updateLegalExpertiseContent:(state, action: PayloadAction<IExpertiseContentListItem>) => {
            const index = state.homeContent.expertiseContent.expertiseContentList.findIndex(item => item._id === action.payload._id);
            state.homeContent.expertiseContent.expertiseContentList[index] = action.payload;
        },
        deleteLegalExpertiseContent: (state, action: PayloadAction<Iid>) => {
            state.homeContent.expertiseContent.expertiseContentList = state.homeContent.expertiseContent.expertiseContentList
                .filter(item => item._id !== action.payload.id);
        },
        addLegalExpertiseContent: (state, action: PayloadAction<IExpertiseContentListItem>) => {
            state.homeContent.expertiseContent.expertiseContentList.push(
                action.payload
            );
        },
        updateIndustryExpertiseHead: (state, action: PayloadAction<IIndutryHead>) => {
            state.homeContent.industryExpertise.heading = `${action.payload.heading}`;
            state.homeContent.industryExpertise.mainText = action.payload.description;
        },
        addIndustryExpertiseTab: (state, action: PayloadAction<IIndustryExpertiseContentList>) => {
            state.homeContent.industryExpertise.industryExpertiseContentList.push(action.payload);
        },
        deleteIndustryExpertiseTab: (state, action: PayloadAction<Iid>) => {
            state.homeContent.industryExpertise.industryExpertiseContentList = state.homeContent.industryExpertise.industryExpertiseContentList
                .filter(item=> item._id !== action.payload.id)
        },
        updateIndustryExpertiseTab: (state, action: PayloadAction<IIndustryExpertiseContentList>) => {
            const index = state.homeContent.industryExpertise.industryExpertiseContentList
                .findIndex(item => item._id === action.payload._id);
            state.homeContent.industryExpertise.industryExpertiseContentList[index] = action.payload;
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
    }
});

export const {
    updateSplash,
    updateHomeContent,
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