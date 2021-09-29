import { Container } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux';
import { getAuthSelector, logout } from '../login/auth.slice';
import { useAppDispatch } from '../../store.hooks';

interface INavbarComponentProps {
  showNavbarBorder: boolean;
}

interface INavbarDesktop {
  showNavbarBorder: boolean,
  homeActive: string,
  whitePaperActive: string,
  teamActive: string,
  blogActive: string,
  letsTalkActive: string
}

const NavbarDesktop: React.FC<INavbarDesktop> = (
  { showNavbarBorder, homeActive, whitePaperActive, teamActive, blogActive, letsTalkActive }
) => {

  const history = useHistory();
  const { isLoggedIn } = useSelector(getAuthSelector);
  const dispatch = useAppDispatch();

  const logout = () => {
    //dispatch(logout);
    localStorage.removeItem("user");
    history.push('/login');
  }
  return (
    <>
      <DivNavBar showNavbarBorder={showNavbarBorder}>
        <Container maxWidth="xl">
          <DivHeader>
            <object aria-label="map-image" className="map-img"
              style={{ width: '160' }}
              data="/leganix-logo-quality.svg" type="image/svg+xml" ></object>
            <DivNavbarList>
              <ul>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <li>
                    HOME
                    <hr className={homeActive} />
                  </li>
                </Link>
                <Link to='/whitepaper' style={{ textDecoration: 'none' }}>
                  <li >WHITEPAPER
                    <hr className={whitePaperActive} />
                  </li>
                </Link>
                <Link to='/team' style={{ textDecoration: 'none' }}>
                  <li >TEAM
                    <hr className={teamActive} />
                  </li>
                </Link>
                <Link to='/blog' style={{ textDecoration: 'none' }}>
                  <li>BLOG
                    <hr className={blogActive} />
                  </li>
                </Link>
                {isLoggedIn &&
                  <Link to='/login' onClick={logout} style={{ textDecoration: 'none' }}>
                    <li>LOGOUT
                      <hr className={blogActive} />
                    </li>
                  </Link>
                }
                <NavbarListItem onClick={() => history.push("contactus")}>
                  <MoreHoriz fontSize="large" />
                  <span>LET'S TALK</span>
                </NavbarListItem>
              </ul>
            </DivNavbarList>
          </DivHeader>
        </Container>
      </DivNavBar>
      <Gap />
    </>
  )
};

const DivNavBar = styled.div<INavbarComponentProps>`
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 999;
  border-bottom: ${(props) => props.showNavbarBorder ? '1px solid #E2E9F2' : 'none'};
  background-color: white;
  @media (max-width: 550px){
    position: absolute;
    border-bottom: 1px solid #E2E9F2;
  }
`;

const DivHeader = styled.div`
  max-width: 100%;
  min-height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding-top: 5px;
  .legan-logo{
    margin-left: 45px;
  }
  object{
    margin-left: 45px;
    width: 160px;
  }
  @media(max-width: 820px){
    flex-direction: column;
    justify-content: center;
    .legan-logo{
      margin:10px 0px 0px 0px;
    }
    object{
      margin:10px 0px 0px 0px;
    }
  }
  @media (max-width: 550px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DivNavbarList = styled.div`
 //margin-top: 25px;
 position: relative;
 top: 5px;
ul{
  list-style-type: none;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  li{
    display: inline-flex;
    flex-flow: column;
    text-decoration: none;
    margin: 0px 20px;
    font-size: 14px;
    color: #006699;
    cursor: pointer;
    font-weight: 500;
    hr{
      visibility: hidden;
      position: relative;
      height: 1px;
      width: 0%;
      left:-50%;
      top: -5px;
      background-color: #006699;
      border-radius: 20%;
    }
  &:hover{
    hr{
      visibility: unset;
      width:50%;
      left: -25%;
      transition: all 0.3s ease-in-out;
    }
  }
  }
}
.active-border{
      visibility: unset !important;
      position: relative;
      height: 1px;
      width: 50% !important;
      left:-25%;
      top: -5px;
      background-color: #006699;
}
@media (max-width: 800px){
  position: unset;
  ul{
    width: 100%;
  }
}
@media (max-width: 550px){
  display: none;
}
`;

const NavbarListItem = styled.span`
  list-style-type: none;
  border-radius: 25px;
  background-color: #E2E9F2;
  display: inline-flex;
  flex-flow: row !important;
  padding: 0px 8px;
  align-content: center;
  align-items: center;
  margin: 0px 30px 0px 60px;
  position: relative;
  top: 12px;
  cursor: pointer;
  *{
    color: #6F8BA4;
  }
  &:hover{
    box-shadow: inset 10em 0 0 0  #6F8BA4;
    transition : all 0.75s ease-in-out;
    // background-color: #6F8BA4;
    *{
      transition-delay: 0.25s;
      color: white;
    }
  }
  span{
    font-size: 12px;
    font-weight: 700;
    line-height : 14px;
    padding: 0px 3px;
  }
  @media (max-width: 800px ){
    margin: 0px;
  }
  `;

const Gap = styled.div`
  margin-bottom: 50px;
  @media (max-width: 850px){
    margin: 100px;
  }
`;




export default NavbarDesktop;
