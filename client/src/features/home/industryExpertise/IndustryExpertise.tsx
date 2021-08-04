import { Container, Grid } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import IndustryExpertiseList from './IndustryExpertiseList';
import { IIndustryExpertiseContentList } from '../../../models/home';

interface IPropsIndustryExpertise {
  mainHeading: string,
  text: string,
  contentList: IIndustryExpertiseContentList[],
};

const IndustryExpertise: React.FC<IPropsIndustryExpertise> = (
  { mainHeading, text, contentList }
) => {

  let heading = mainHeading.split(' ');
  return (
    <>
      <DivHomeIndustry>
        <Container className="container" maxWidth="xl">
          <DivHomeIndustryContent>
            <Grid className="about-first-grid" container spacing={3}>
              <Grid item md={7} sm={9} xs={12}>
                <h1>
                  <span className="bolder">{`${heading[0]} `}</span>
                  <span className="bold">{`${heading[1]}`}</span>
                </h1>
                <p>{text}</p>
              </Grid>
              <Grid item md={5} sm={3}>
                <img className="stars" src="/stars.png" alt="stars container" />
              </Grid>
            </Grid>
            <IndustryExpertiseList
              contentList={contentList}
            />
          </DivHomeIndustryContent>
        </Container>
      </DivHomeIndustry>
    </>
  );
};

const DivHomeIndustry = styled.div`
.container{
  background-color: #F9FCFE;
  padding: 75px 65px;
  @media (max-width: 550px){
    padding: 45px 10px;
  }
}
`;

const DivHomeIndustryContent = styled.div`
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

export default IndustryExpertise;
