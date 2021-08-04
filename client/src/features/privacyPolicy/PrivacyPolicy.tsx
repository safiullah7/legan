import { Container } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { privacyPolicy } from '../../models/privacyPolicy';
import parse from 'html-react-parser'
const PrivacyPolicy = () => {
    return (
        <>
            <Privacy>
                <Container className="container" maxWidth="xl">
                    <PrivacyContent>
                        <h3>{privacyPolicy.name}</h3>
                        <p>Effective:  {privacyPolicy.date}</p>
                    </PrivacyContent>
                    <PrivacyDescription>
                        {parse(privacyPolicy.description)}
                    </PrivacyDescription>
                </Container>
            </Privacy>
        </>
    );
};

const Privacy = styled.div`
margin-top: 80px;
@media (max-width: 600px){
  margin-top: -15px;
}
.container{
    background-color: rgba(249, 252, 254, 1);
    padding: 75px 0px;
}
`;

const PrivacyContent = styled.div`
margin: 0px 75px;
padding-left: 15px;
@media (max-width: 820px){
    margin: 15px;
    padding-left: 5px;
}
border-bottom: 0.5px solid rgba(111, 139, 164, 0.6);

    *{
        margin: 0px;
        padding: 0px;
        text-align: left;
    }
    h3{
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #3B566E;
    }
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: justify;
        color: #3B566E;
        padding: 15px 0px;
    }
`;

const PrivacyDescription = styled.div`
text-align: left;
margin: 0px 75px;
padding-top: 45px;
padding-left: 15px;
@media (max-width: 820px){
    margin: 15px;
    padding-left: 5px;
}
    *{
    color: #6F8BA4;
    }
`;

export default PrivacyPolicy;
