import { Container } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import UnderlinedBodyHeader from '../../controls/UnderlinedBodyHeader';

const ContactUs = () => {
    return (
        <>
            <DivContactUs>
                <Container maxWidth="xl" className="container">
                    <UnderlinedBodyHeader
                        heading="Contact us"
                        headingColor="rgba(59, 86, 110, 1)"
                    />
                </Container>
            </DivContactUs>
        </>
    );
};

const DivContactUs = styled.div`
margin-top: 80px;
@media (max-width: 600px){
    margin-top: -15px;
}
.container{
    padding: 75px 0px;
    background-color: rgba(249, 252, 254, 1);
}
`;

export default ContactUs;
