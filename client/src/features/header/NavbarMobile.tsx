import { GroupOutlined, HomeOutlined, LibraryBooksOutlined, ReceiptOutlined, SendOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface INavbarMobile {
  homeActive: string,
  whitePaperActive: string,
  teamActive: string,
  blogActive: string,
  letsTalkActive: string
}

const NavbarMobile: React.FC<INavbarMobile> = (
  { homeActive, whitePaperActive, teamActive, blogActive, letsTalkActive }
) => {
  return (
    <>
      <DivNavbarBottom>
        <ul>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li className={homeActive}>
              <HomeOutlined fontSize="large" />
              <span>Home</span>
            </li>
          </Link>
          <Link to='/whitepaper' style={{ textDecoration: 'none' }}>
            <li className={whitePaperActive}>
              <ReceiptOutlined fontSize="large" />
              <span>Whitepaper</span>
            </li>
          </Link>
          <Link to='/contactus'>
            <li className={letsTalkActive}>
              <SendOutlined fontSize="large" />
              <span>Let's Talk</span>
            </li>
          </Link>
          <Link to='/team' style={{ textDecoration: 'none' }}>
            <li className={teamActive}>
              <GroupOutlined fontSize="large" />
              <span>Team</span>
            </li>
          </Link>
          <Link to='/blog' style={{ textDecoration: 'none' }}>
            <li className={blogActive}>
              <LibraryBooksOutlined fontSize="large" />
              <span>Blog</span>
            </li>
          </Link>
        </ul>
      </DivNavbarBottom>
    </>
  )
};

const DivNavbarBottom = styled.div`
  display: none;
  @media (max-width: 550px){
    display: unset;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left:0;
    min-width: 100%;
    max-width: 550px;
    min-height: 60px;
    background-color: #E2E9F2;
    border-top: 1px solid #E2E9F2;
    ul{
      margin: 0px;
      min-height: 60px;
      padding: 0px;
      list-style-type: none;
      li{
        color: #006699;
        display: inline-flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        height: 60px;
        font-size: 0.7rem;
        width:20%;
        cursor: pointer;
      }
      .active-border{
        @media (max-width: 550px){
          transition: all 0.25s ease-in-out;
          background-color: #006699;
          *{
            color: white;
          }
          span{
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export default NavbarMobile;
