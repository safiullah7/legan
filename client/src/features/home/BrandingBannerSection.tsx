import { Button, Container, Grid } from "@material-ui/core";
import { TrendingFlatOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

interface IProps {
  heading: string;
  mainText: string;
  bottomText: string;
}
const BrandingBannerSection: React.FC<IProps> = ({ heading, mainText, bottomText }) => {

  return (
    <>
      <Container maxWidth="xl" style={{ backgroundColor: 'white', paddingBottom: '50px' }}>
        <Grid container>
          <Grid item md={5} sm={12} xs={12} >
            <Content>
              <h1>
                {heading}
              </h1>
              <p>
                {mainText}
              </p>
              <span>
                {bottomText}
              </span>
              <br />
              <Button
                variant="outlined"
                color="primary"
                endIcon={<TrendingFlatOutlined className="large" />}
              >
                <span>SUBMIT A REQUEST</span>
                {/* <img src="/arrow.svg" alt="arrow" style={{ color: 'white', backgroundColor: 'white' }} /> */}
              </Button>
            </Content>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <Image>
              <img src="/landingPagemap.png" alt="Map" />
            </Image>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Content = styled.div`
  margin-top: 150px;
  text-align: left;
  padding-left: 45px;
  @media (max-width: 850px){
    margin-top: 50px;
  }
  @media (max-width: 550px){
    padding-left:5px;
    margin-top: 0px;
  }
  h1{
    font-size: 2rem;
    font-weight: 700;
    color: rgba(59, 86, 110, 1);
  }
  p{
    font-size: 22px;
    font-weight: 400;
    color: rgba(111, 139, 164, 1);
  }
  span{
    color: rgba(111, 139, 164, 1);
    font-weight: 300;
    font-size: 22px;
  }
  button{
    margin-top: 30px;
    font-weight: 700;
    padding: 5px 30px;
    border-color: rgba(34, 147, 251, 1);
    .large{
      font-size: 36px;
    }
    span{
      font-size: 15px;
      font-weight: 500;
      color: rgba(34, 147, 251, 1)
    }
    &:hover{
      box-shadow : inset 22em 0px 0px 0px #2293FB;
      transition-duration: 0.75s;
      background-color: #2293FB;
      border-color: rgba(34, 147, 251, 1);
      *{
        transition-delay: 0.25s;
        color: white;
      }
    }
  }
`;

const Image = styled.div`
  img{
    margin-top: 50px;
    width: 100%;
    float: left;
    height: auto;
    margin-left: 15px;
    @media (max-width: 800px){
      margin-top: 0px;
    }
  }
`;

export default BrandingBannerSection;
