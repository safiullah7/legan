import { Container, Grid } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import ExpertiseList from './ExpertiseList';

interface IExpertiseContent {
    heading: string,
    subHeading: string,
    panel: string,
    icon: string,
    list: string[],
}

interface IProps {
    heading: string,
    mainText: string,
    contentList: IExpertiseContent[],
};

const Expertise: React.FC<IProps> = (
    { heading, contentList, mainText }
) => {
    const [head1, head2] = heading.split(' ');
    return (
        <>
            <DivHomeExpertise>
                <Container className="container" maxWidth="xl">
                    <DivHomeExpertiseContent>
                        <Grid>
                            <Grid item md={7} sm={9} xs={12}>
                                <h1>
                                    {head1} <span>{head2}</span>
                                </h1>
                                <p>
                                    {mainText}
                                </p>
                            </Grid>
                        </Grid>
                        <br />
                        <ExpertiseList contentList={contentList} />
                    </DivHomeExpertiseContent>
                </Container>
            </DivHomeExpertise>
        </>
    )
};

const DivHomeExpertise = styled.div`
.container{
    background-color: #fff;
    padding: 75px 65px; 
    @media (max-width: 550px){
    padding: 45px 10px;
        }
    }
`;

const DivHomeExpertiseContent = styled.div`
padding-left: 3px;
width: 100%;
margin: 0px auto;
text-align: left;
h1{
    font-size: 28px;
    color: rgba(0, 102, 153, 1);
    font-weight: 700;
    span{
        font-weight: 500;
    }
    }
p{
    font-size: 20px;
    line-height: 23px;
    color: #6F8BA4;
    }
@media (max-width: 600px){
    width: 98%;
    margin: 0px auto;
}
`;

export default Expertise;
