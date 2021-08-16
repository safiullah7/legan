import React from 'react';
import ScrollToTop from '../controls/ScrollToTop';
import Footer from '../features/footer/Footer';
import Navbar from '../features/header/Navbar';

const MainLayout: React.FC = ({ children }) => (
    <>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
    </>
);
export default MainLayout;