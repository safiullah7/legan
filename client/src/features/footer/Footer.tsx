import { Container, Divider, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Foot>
        <Container maxWidth="xl" className="conatiner">
          <Grid container style={{ padding: '30px 0px' }}>
            <Grid item md={3} sm={6} xs={12}>
              <FooterDescription>
                <img src="/footerImg.png" alt="footer-logo" />
                <p>
                  Lorem ipsum dolor sit amet consedtur ipse ctetur, adipisicing elit. Repellendus solor se porro illum dolorem doloremque
                </p>
              </FooterDescription>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FooterAbout>
                <div>
                  <h3>
                    ABOUT
                  </h3>
                  <p><span>Whitepaper</span></p>
                  <p><span>FAQs</span></p>
                  <p><span>Career</span></p>
                  <p><span>Contact Us</span></p>
                </div>
              </FooterAbout>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FooterDocuments>
                <div>
                  <h3>
                    DOCUMENTS
                  </h3>
                  <p><span>Privacy Policy</span></p>
                  <p><span>Cookie Policy</span></p>
                  <p><span>Terms of Service</span></p>
                  <p><span>Website Terms of Use</span></p>
                </div>
              </FooterDocuments>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <FooterSocialMedia>
                <div>
                  <h3>
                    SOCIAL MEDIA
                  </h3>
                  <span>
                    <img src="/footer-facebook.png" alt="footer-facebook" />
                    <img src="/footer-linkedin.png" alt="footer-linkedin" />
                  </span>
                </div>
              </FooterSocialMedia>
            </Grid>
          </Grid>
          <CopyRight>
            <Divider />
            <p>Leganix | Copyright 2021</p>
          </CopyRight>
        </Container>
      </Foot>
    </>
  );
};


const Foot = styled.div`
  bottom: 0px;
  width: 100%;
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

const FooterDescription = styled.div`
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

const FooterAbout = styled.div`
padding: 30px 15px 30px 18px;
  div{
    text-align: justify;
    margin-left: 45px;
    padding-left: 60px;
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
const FooterDocuments = styled(FooterAbout)`
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

const FooterSocialMedia = styled(FooterAbout)`
padding-left: 0px;
margin-left: -45px;
div{
  margin-top: -3px;
}
span{
  img{
    margin: 0px 20px;
    cursor: pointer;
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
