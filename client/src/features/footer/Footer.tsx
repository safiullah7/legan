import { Container, Divider, Grid, IconButton, LinearProgress } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAuthSelector } from "../login/auth.slice";
import { useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import { useEffect, useState } from "react";
import SocialLinksForm from "./SocialLinksForm";
import { Box } from "@mui/system";
import { getHomeContentAsync, getHomeContentSelector } from "../home/home.slice";
import FooterLogoForm from "./FooterLogoForm";
import { useAppDispatch } from "../../store.hooks";

const Footer = () => {

  const { isLoggedIn } = useSelector(getAuthSelector);
  const { loadingContent, homeContent } = useSelector(getHomeContentSelector);
  const [editmode, setEditMode] = useState(false);
  const [editFooterLogoText, setEditFooterLogoText] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHomeContentAsync());
  }, [dispatch])

  const navigateToExternalUrl = (url: string, shouldOpenNewTab: boolean = true) => {
    const updatedUrl = `https://${url}`;
    shouldOpenNewTab ? window.open(updatedUrl, "_blank") : window.location.href = updatedUrl;
  }

  return (
    <>
      <DivFoot>
        <Container maxWidth="xl" className="conatiner">
          {loadingContent && (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
          <Grid container style={{ padding: '30px 0px' }}>
            <Grid item md={3} sm={6} xs={12}>
              <DivFooterDescription>
                <img src="/footerImg.png" alt="footer-logo" />
                <span>
                  {isLoggedIn && (
                    <IconButton className="edit-icon" color='primary' aria-label="edit" onClick={() => setEditFooterLogoText(!editFooterLogoText)}>
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  )}
                </span>
                {!editFooterLogoText ? (
                  <p>
                    {homeContent.footerContent.underLogoText}
                  </p>
                ) : (
                  <FooterLogoForm setEditFooterLogoText={setEditFooterLogoText} />
                )}
              </DivFooterDescription>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <DivFooterAbout>
                <div>
                  <h3>
                    ABOUT
                  </h3>
                  <p><span>Whitepaper</span></p>
                  <Link style={{ textDecoration: 'none' }} to="/faqs"><p><span>FAQs</span></p></Link>
                  <p><span>Career</span></p>
                  <Link style={{ textDecoration: 'none' }} to="/contactus"><p><span>Contact Us</span></p></Link>
                </div>
              </DivFooterAbout>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <DivFooterDocuments>
                <div>
                  <h3>
                    DOCUMENTS
                  </h3>
                  <Link style={{ textDecoration: 'none' }} to="/privacypolicy"><p><span>Privacy Policy</span></p></Link>
                  <Link style={{ textDecoration: 'none' }} to="/cookie-policy"><p><span>Cookie Policy</span></p></Link>
                  <Link style={{ textDecoration: 'none' }} to="/terms-and-conditions"><p><span>Terms of Service</span></p></Link>
                  <Link style={{ textDecoration: 'none' }} to="/website-terms-of-use"><p><span>Website Terms of Use</span></p></Link>
                </div>
              </DivFooterDocuments>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <DivFooterSocialMedia>
                <div>
                  <h3 style={{ marginTop: 3 }}>
                    SOCIAL MEDIA
                    <span>
                      {isLoggedIn && (
                        <IconButton className="edit-icon" color='primary' aria-label="edit" onClick={() => setEditMode(!editmode)}>
                          <EditIcon fontSize="inherit" />
                        </IconButton>
                      )}
                    </span>
                  </h3>
                  {!editmode ? (
                    <span>
                      <FontAwesomeIcon onClick={() => navigateToExternalUrl(homeContent.footerContent.socialLinks.facebook)} target={"_blank"} className="font-aw-icon" icon={faFacebookSquare} />
                      <FontAwesomeIcon onClick={() => window.open(homeContent.footerContent.socialLinks.linkedIn, "_blank", 'noopener,noreferrer')} className="font-aw-icon" icon={faLinkedin} />
                    </span>
                  ) : (
                    <span>
                      <SocialLinksForm setEditMode={setEditMode} />
                    </span>
                  )}
                </div>
              </DivFooterSocialMedia>
            </Grid>
          </Grid>
          <CopyRight>
            <Divider />
            <p>Leganix | Copyright 2021</p>
          </CopyRight>
        </Container>
      </DivFoot>
    </>
  );
};


const DivFoot = styled.div`
  bottom: 0px;
  width: 100%;
  z-index: 26;
  position: relative;
  @media (max-width: 550px){
    margin-bottom: 60px;
  }
  .conatiner{
    background-color: #E5F0F5;
    padding-left: 50px;
    @media (max-width: 600px){
      padding-left: 15px;
    }
  }
`;

const DivFooterDescription = styled.div`
padding: 30px 15px 30px 18px;
  p{
    margin-left: 25px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #6F8BA4;
  }
  img{
    padding: 45px 0px;
    width: 120px;
    height: 117px;
  }
  @media (max-width: 850px){
    img{
      padding: 15px 0px;
    }
  }
  @media (max-width: 600px){
    padding: 15px;
    p{
      margin-left: 0px;
      padding: 15px;
    }
    img{
      padding: 15px 0px;
    }
    display: flex;
    align-content: center;
    align-items: center;
  }
  @media (max-width: 400px ){
    flex-flow: column;
  }
`;

const DivFooterAbout = styled.div`
padding: 30px 15px 30px 18px;
  div{
    text-align: justify;
    h3{
    color:#006699;
    font-size: 16px;
    font-weight: 500;
    padding-top: 25px;
    margin-bottom: 30px;
  }
  p{
    color: #6F8BA4;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    padding: 3px 0px;
    span{
      cursor: pointer;
    }
    span:hover{
      transition: all 0.15s ease-in-out;
      color: #3B566E;
    }
  }
  }
  @media (max-width: 600px){
  margin: 0px auto;
  padding: 0px 0px;
  display: flex;
  justify-content: center;
  div{
    padding-left: 0px;
    margin-left: -40px;
  }
}
`;
const DivFooterDocuments = styled(DivFooterAbout)`
padding-left: 0px;
margin-left: -30px;
div{
  margin-top: -3px;
}
@media (max-width: 600px){
  div{
    margin-left: 30px;
  }
}
`;

const DivFooterSocialMedia = styled(DivFooterAbout)`
padding-left: 0px;
margin-left: -45px;
div{
  margin-top: -3px;
}
span{
  .font-aw-icon{
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: #6F8BA4;
    margin: 0px 15px;
    cursor: pointer;
    &:hover{
      transition: all 0.15s ease-in-out;
      color: #3B566E;
    }
  }
}
@media (max-width: 600px){
  div{
    margin-left: 0px;
  }
  }
`;


const CopyRight = styled.div`
text-align: left;
padding-bottom: 35px;
  p{
    color: #6F8BA4;
    font-size: 15px;
    @media (max-width: 600px){
      text-align: center;
    }
    }
   hr{
    height: 1px;
    background-color: rgba(111, 139, 164, 0.3);
    margin-bottom: 25px;
  }
  margin: 0px 50px;
  @media (max-width: 800px){
    margin: 0px 30px;
  }
  @media (max-width: 600px){
    margin: 0px;
    padding-bottom: 10px;
  }
`;
export default Footer;
