import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ScrollToTop from '../controls/ScrollToTop';
import Footer from '../features/footer/Footer';
import Navbar from '../features/header/Navbar';
import { getAuthSelector, updateUserObject } from '../features/login/auth.slice';
import { IUser } from '../models/user';
import { useAppDispatch } from '../store.hooks';
import jwt_decode from 'jwt-decode';

const MainLayout: React.FC = ({ children }) => {

    const dispatch = useAppDispatch();
    const history = useHistory();

    useEffect(() => {
        // check if user object in local storage
        if (localStorage.getItem("user") !== null) {
            let user: IUser = JSON.parse(localStorage.getItem("user")!);
            let decodedToken: any = jwt_decode(user.accessToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                history.push("/login");
                localStorage.removeItem("user");
            } else {
                dispatch(updateUserObject(user));
            }
        }
    }, [history, dispatch])

    return (
        <>
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
        </>
    )
};
export default MainLayout;