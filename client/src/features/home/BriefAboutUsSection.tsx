import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from 'styled-components';
const BriefAboutUsSection = () => {
  return (
    <>
      <DivHomeAbout>
        <Container className="container" maxWidth="xl">
          <DivHomeAboutContent>
            <Grid className="about-first-grid" container spacing={3}>
              <Grid item md={7} sm={9} xs={12}>
                <h1>
                  <span className="bolder">BRIEFLY </span>
                  <span className="bold">ABOUT US</span>
                </h1>
                <p>
                  We are an international consulting agency operating out of Europe. Our online presence allows our reach go beyond one region. We serve start-ups, scale-ups, web-businesses and individuals from a wide variety of industries. Our priority is based on the following services.
                </p>
              </Grid>
              <Grid item md={5} sm={3}>
                <img className="stars" src="/stars.png" alt="stars container" />
              </Grid>
            </Grid>
            <Grid className="about-2nd-grid" container>
              <Grid item md={4} sm={6} xs={12}>
                <DivAboutGridConsulting>
                  <img src="/about-bag.png" alt="about-bag" />
                  <h3>Consulting</h3>
                  <p>
                    Provision of online consutling services in matters ranging from internet law to intellectual property.
                  </p>
                </DivAboutGridConsulting>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <DivAboutGridDrafting>
                  <img src="about-draft.png" alt="about-draft" />
                  <h3>Document Drafting</h3>
                  <p>
                    We draft/review any tech and non-tech contracts including NDAs, SLAs, IP Lisening/Assignment, EULAs, etc.
                  </p>
                </DivAboutGridDrafting>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <DivAboutGridResearch>
                  <img src="/about-research.png" alt="about-research" />
                  <h3>Legal Research</h3>
                  <p>
                    We have extensive legal research skills, be it researching laws of various countries, or that of new technologies.
                  </p>
                </DivAboutGridResearch>
              </Grid>
            </Grid>
          </DivHomeAboutContent>
        </Container>
      </DivHomeAbout>
    </>
  );
};

const DivHomeAbout = styled.div`
.container{
  background-color: #F9FCFE;
  padding: 75px 65px;
  @media (max-width: 550px){
    padding: 45px 10px;
  }
}
`;

const DivHomeAboutContent = styled.div`
  width: 100%;
  margin: 0px auto;
  padding-left: 3px;
  text-align: left;
  h1{
    *{
      font-size: 28px;
      color: rgba(0, 102, 153, 1);
    }
    .bolder{
      font-weight: 700;
    }
    .bold{
      font-weight: 500;
    }
  }
  p{
    font-size: 20px;
    color: rgba(111, 139, 164, 1);
    font-weight: 400;
  }
  .stars{
    float: right;
  }
  .about-first-grid{
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .about-2nd-grid{
    border: 0.7px solid #DDE6EE;
  }
  @media (max-width: 800px){
   .stars{
     margin-right: -25px
   }
  }
  @media (max-width: 600px){
    width: 98%;
    margin: 0px auto;
    .stars{
      display: none;
    }
  }
`;

const DivAboutGridConsulting = styled.div`
  margin: 15px;
  padding: 30px;
  min-height: 250px;
  border-right: 0.7px solid #DDE6EE;
  h3{
    font-size: 20px;
    font-weight: 500;
    color: rgba(59, 86, 110, 1);
  }
  p{
    font-size: 16px;
    font-weight: 400;
    color: rgba(111, 139, 164, 1);
  }
  @media (max-width:850px){
    padding: 20px;
    margin: 0px;
  }
  @media (max-width: 600px){
   padding: 0px;
   margin: 15px;
   border-right: none;
   text-align: center;
   border-bottom: 0.7px solid #DDE6EE;
  }
`;

const DivAboutGridDrafting = styled(DivAboutGridConsulting)`
  @media (max-width: 850px){
    border-right: none;
  }
`;

const DivAboutGridResearch = styled(DivAboutGridConsulting)`
  border-right: none;
  @media (max-width: 600px){
    border-bottom: none;
  }
`;

export default BriefAboutUsSection;
