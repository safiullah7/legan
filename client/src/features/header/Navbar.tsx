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
  const letsTalkActive = path === 'contactus' ? 'active-border' : '';
  if (whitePaperActive === '' && teamActive === '' && blogActive === '' && letsTalkActive === '')
    homeActive = 'active-border';

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
      />
      <NavbarMobile
        homeActive={homeActive}
        whitePaperActive={whitePaperActive}
        teamActive={teamActive}
        blogActive={blogActive}
        letsTalkActive={letsTalkActive}
      />
    </>
  );
};

export default Navbar;
