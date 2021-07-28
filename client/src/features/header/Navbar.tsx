import React from "react";
import { useLocation } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";


const Navbar = () => {
  const [showNavbarBorder, setShowNavbarBorder] = React.useState(false);

  const location = useLocation();
  const homeActive = location.pathname === '/' ? 'active-border' : '';
  const whitePaperActive = location.pathname === '/whitepaper' ? 'active-border' : '';
  const teamActive = location.pathname === '/team' ? 'active-border' : '';
  const blogActive = location.pathname === '/blog' ? 'active-border' : '';

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
      />
      <NavbarMobile
        homeActive={homeActive}
        whitePaperActive={whitePaperActive}
        teamActive={teamActive}
        blogActive={blogActive}
      />
    </>
  );
};

export default Navbar;
