import { GroupOutlined, HomeOutlined, LibraryBooksOutlined, ReceiptOutlined, SendOutlined } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../store.hooks';
import { getAuthSelector, logoutUser } from '../login/auth.slice';

interface INavbarMobile {
  homeActive: string,
  whitePaperActive: string,
  teamActive: string,
  blogActive: string,
  letsTalkActive: string,
  logoutActive: string,
  submittedRequestsActive: string,
  generalActive: string
}

const NavbarMobile: React.FC<INavbarMobile> = (
  { homeActive, whitePaperActive, teamActive, blogActive, logoutActive, letsTalkActive, submittedRequestsActive, generalActive }
) => {

  const { isLoggedIn } = useSelector(getAuthSelector);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutUser({}));
  }

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
          <Link to='/contactus' style={{ textDecoration: 'none' }}>
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
          {isLoggedIn &&
            <>
              <Link to='/submittedrequests' style={{ textDecoration: 'none' }}>
                <li>SUBMITTED REQUESTS
                  <hr className={submittedRequestsActive} />
                </li>
              </Link>
              <Link to='/general' style={{ textDecoration: 'none' }}>
                <li>GENERAL
                  <hr className={generalActive} />
                </li>
              </Link>
              <Link to='/login' onClick={logout} style={{ textDecoration: 'none' }}>
                <li>LOGOUT
                  <hr className={logoutActive} />
                </li>
              </Link>
            </>
          }
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
