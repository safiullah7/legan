import { Container } from "@material-ui/core";
import { MoreHoriz } from '@material-ui/icons';
import React from "react";
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ borderBottom: '1px solid #E2E9F2' }}>
        <Header>
          <img src="/navbar-head.svg" alt="navbar-head" />
          <NavbarList>
            <ul>
              <li>HOME
                <hr />
              </li>
              <li>WHITEPAPER
                <hr />
              </li>
              <li>TEAM
                <hr />
              </li>
              <li>BLOG
                <hr />
              </li>
              <NavbarListItem>
                <MoreHoriz fontSize="large" />
                <span>LET'S TALK</span>
              </NavbarListItem>
            </ul>
          </NavbarList>
        </Header>
      </Container>
    </>
  );
};

const Header = styled.div`
  max-width: 100%;
  min-height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 10px 0px;
  img{
    margin-left: 45px;
  }
`;
const NavbarList = styled.div`
 //margin-top: 25px;
 position: relative;
 top: 5px;
ul{
  list-style-type: none;
  li{
    display: inline-flex;
    flex-flow: column;
    margin: 0px 20px;
    font-size: 14px;
    color: #006699;
    cursor: pointer;
    font-weight: 500;
    hr{
      transform: scaleX(0);
      visibility: hidden;
      position: relative;
      height: 2px;
      width: 0%;
      left:-25%;
      top: -5px;
      background-color: #006699;
    }
  &:hover{
    hr{
      transform: scaleX(1);
      transform-origin: left;
      visibility: unset;
      width:50%;
      transition: width 0.3s ease-in-out;
    }
  }
  }
}
`;

const NavbarListItem = styled.li`
  list-style-type: none;
  border-radius: 25px;
  background-color: #E2E9F2;
  display: flex;
  flex-flow: row !important;
  padding: 0px 8px;
  align-content: center;
  align-items: center;
  margin: 0px 30px 0px 60px !important;
  position: relative;
  top: 12px;
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
  `;

export default Navbar;
