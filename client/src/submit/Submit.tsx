import { Container } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import BodyHeader from '../controls/BodyHeader'
import InputFeild from '../controls/InputFeild';
import InputSelect from '../controls/InputSelect';
import InputTextArea from '../controls/InputTextArea';

const Submit = () => {

    return (
        <>
            <DivSubmit>
                <Container className="container" maxWidth="xl">
                    <BodyHeader
                        heading="Free Case Assesment"
                        headingColor="#3B566E"
                    />
                    <DivAssesmentForm>
                        <p className="form-head">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt  ut labore et dolore magna
                        </p>
                        <DivFormHeading>
                            <h3>
                                Contact Details
                            </h3>
                            <div className="hr"></div>
                        </DivFormHeading>
                        <DivFormContactDetails>
                            <div className="contact-details">
                                <label htmlFor="name">
                                    Name:
                                </label>
                                <InputFeild
                                    name="name"
                                    placeholder="Type your answer"
                                    required={true}
                                    type="text"
                                />
                            </div>
                            <div className="contact-details">
                                <label htmlFor="email">
                                    Email:
                                </label>
                                <InputFeild
                                    name="email"
                                    placeholder="Type your answer"
                                    required={true}
                                    type="email"
                                />
                            </div>
                        </DivFormContactDetails>
                        <DivFormHeading>
                            <h3>
                                About the Project
                            </h3>
                            <div className="hr"></div>
                        </DivFormHeading>
                        <DivFormAboutTheProject>
                            <InputSelect />
                        </DivFormAboutTheProject>
                    </DivAssesmentForm>
                </Container>
            </DivSubmit>
        </>
    );
};

const DivSubmit = styled.div`
margin-top: 80px;
@media (max-width: 600px){
    margin-top: -15px;
}
.container{
    padding: 75px 15px;
    background-color: white;
}
`;

const DivAssesmentForm = styled.div`
    max-width: 700px;
    background-color: rgba(223, 240, 250, 1);
    border-radius: 5px;
    margin: 45px auto;
    padding: 15px 30px;
    .form-head{
        width: 80%;
        margin: 15px auto;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #6F8BA4;
        @media (max-width: 960px){
            width: 90%;
        }
        @media (max-width: 550px){
            width: 100%;
        }
    }
`;

const DivFormContactDetails = styled.div`
padding: 15px 0px;
.contact-details{
    max-width: 350px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    @media (max-width: 550px){
        padding-left: 0px;
    }
    @media (max-width: 320px){
        flex-flow: column;
        justify-content: center;
        label{
            padding: 5px 0px;
        }
    }
    label{
        color: #3B566E;
        font-size: 15px;
        font-weight: 500;
    }
}
`;

const DivFormAboutTheProject = styled.div`
    padding: 15px 0px;
`;

const DivFormHeading = styled.div`  

    h3{
        text-align: left;
        margin: 15px 0px;
        font-size: 15px;
        line-height: 14px;
        color: #6F8BA4;
    }
    .hr{
        max-width: 350px;
        border-top: 0.5px solid #C5D8DE;
        margin: 0px 30px;
        position: relative;
        top: -25px;
        left: 200px;
        @media (max-width: 800px ){
          max-width: 300px;
          left: 150px;  
        }
        @media (max-width: 600px){
            left: 150px;
            max-width: 200px;
        }
        @media (max-width: 500px){
            max-width: 100px;
        }
        @media (max-width: 400px){
            display: none;
        }
    }
`;
export default Submit;
