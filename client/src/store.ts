import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/home/home.slice';
import authSlice from './features/login/auth.slice';
import teamSlice from './features/team/team.slice';
import blogSlice from './features/blog/blog.slice';
import faqSlice from './features/FAQs/FAQs.slice';
import contactUsSlice from './features/contact-us/contactus.slice';
import submitrequestSlice from './features/submit/submitrequest.slice';
import policySlice from './features/privacyPolicy/policy.slice';

const store = configureStore({
    reducer: {
        homeSlice,
        authSlice,
        teamSlice,
        blogSlice,
        faqSlice,
        contactUsSlice,
        submitrequestSlice,
        policySlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;