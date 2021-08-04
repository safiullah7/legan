import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import FAQsQAsList from './FAQsQAsList'

const FAQs = () => {
    return (
        <>
            <DivFAQsContainer>
                <Container maxWidth="xl" className="container" >
                    <DivFAQsContent>
                        <h2>Frequently Asked Questions</h2>
                    </DivFAQsContent>
                    <FAQsQAsList />
                </Container>
            </DivFAQsContainer>
        </>
    )
}

const DivFAQsContainer = styled.div`
margin-top: 80px;
@media (max-width: 600px){
    margin-top: -15px;
}
.container{
    padding: 75px 0px;
    background-color: rgba(249, 252, 254, 1);
}
`;

const DivFAQsContent = styled.div`
margin: 0px 75px;
padding-left: 15px;
@media (max-width: 820px){
    margin: 15px;
    padding-left: 5px;
}
border-bottom: 0.5px solid rgba(111, 139, 164, 0.6);
    h2{
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-align: justify;
        color: #3B566E;
    }
`;

export default FAQs;
