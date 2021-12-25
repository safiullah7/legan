import React from "react";
import { useLocation } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


const Navbar = () => {
  const [showNavbarBorder, setShowNavbarBorder] = React.useState(false);

  const location = useLocation();
  const path = location.pathname.split('/')[1];
  let homeActive = path === '' ? 'active-border' : '';
  const whitePaperActive = path === 'whitepaper' ? 'active-border' : '';
  const teamActive = path === 'team' ? 'active-border' : '';
  const blogActive = path === 'blog' ? 'active-border' : '';
  const logoutActive = path === 'logout' ? 'active-border' : '';
  const letsTalkActive = path === 'contactus' ? 'active-border' : '';
  const submittedRequestsActive = path === 'submittedrequests' ? 'active-border' : '';
  const generalActive = path === 'general' ? 'active-border' : '';

  if (path === "")
    homeActive = 'active-border';

  // if (whitePaperActive === '' && teamActive === '' && blogActive === '' && letsTalkActive === '' && submittedRequestsActive === '')

  const scrollHandler = () => {
    if (window.scrollY >= 15)
      setShowNavbarBorder(true);
    else
      setShowNavbarBorder(false);
  }
  window.addEventListener('scroll', scrollHandler);
  return (
    <>
      <NavbarDesktop
        showNavbarBorder={showNavbarBorder}
        homeActive={homeActive}
        whitePaperActive={whitePaperActive}
        teamActive={teamActive}
        blogActive={blogActive}
        letsTalkActive={letsTalkActive}
        logoutActive={logoutActive}
        submittedRequestsActive={submittedRequestsActive}
        generalActive={generalActive}
      />
      <NavbarMobile
        homeActive={homeActive}
        whitePaperActive={whitePaperActive}
        teamActive={teamActive}
        blogActive={blogActive}
        letsTalkActive={letsTalkActive}
        logoutActive={logoutActive}
        submittedRequestsActive={submittedRequestsActive}
        generalActive={generalActive}
      />
    </>
  );
};

export default Navbar;
