import { Button, Container, Grid, TextField, Checkbox } from '@material-ui/core';
import parse from 'html-react-parser'
import React from 'react';
import styled from 'styled-components';
import BodyHeader from '../../controls/BodyHeader';
import { contactContent } from '../../models/contactUs';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';


const ContactUs = () => {
    const newUserSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        surName: Yup.string().required('Surname is required'),
        email: Yup.string().required('Email is required').email(),
        message: Yup.string().required('Message is required'),
        acceptTerms: Yup.bool().oneOf([true], 'accept the terms of services')
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            surName: '',
            email: '',
            message: '',
            acceptTerms: false,
        },
        validationSchema: newUserSchema,
        onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
            try {
                // APi call
                console.log(values);
                resetForm();
                setSubmitting(false);
            } catch (error) {
                console.log(error);
                setSubmitting(false);
                setErrors(error);
            }
        }

    });

    const { errors, touched, handleSubmit, getFieldProps } = formik;
    return (
        <>
            <DivContactUs>
                <Container maxWidth="xl" className="container">
                    <BodyHeader
                        heading="Contact us"
                        headingColor="rgba(59, 86, 110, 1)"
                    />
                    <Grid container className="contact-content">
                        <Grid className="form" item md={6} sm={6} xs={12}>
                            <DivContactForm>
                                <FormikProvider value={formik}>
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Grid container>
                                            <Grid
                                                className="contact-feild-name-grid" item md={6} sm={6} xs={6}>
                                                <TextField
                                                    className="contact-feild-name"
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Name"
                                                    {...getFieldProps('name')}
                                                    error={Boolean(touched.name && errors.name)}
                                                />
                                                <p className="error-p">
                                                    {(touched.name && errors.name)}
                                                </p>
                                            </Grid>
                                            <Grid className="contact-feild-surname-grid" item md={6} sm={6} xs={6}>
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    label="Surname"
                                                    className="contact-feild-surname"
                                                    {...getFieldProps('surName')}
                                                    error={Boolean(touched.surName && errors.surName)}
                                                />
                                                <p className="error-p">
                                                    {(touched.surName && errors.surName)}
                                                </p>
                                            </Grid>
                                        </Grid>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            label="Email"
                                            className="contact-feild-email"
                                            {...getFieldProps('email')}
                                            error={Boolean(touched.email && errors.email)}
                                        />
                                        <p className="error-p">
                                            {(touched.email && errors.email)}
                                        </p>
                                        <TextField
                                            minRows={3}
                                            fullWidth
                                            multiline
                                            className="contact-feild-textarea"
                                            label="Message"
                                            variant="outlined"
                                            placeholder="Tell us what you would like to know. We will try our best to respond as soon as we can."
                                            {...getFieldProps('message')}
                                            error={Boolean(touched.message && errors.message)}
                                        />
                                        <p className="error-p">
                                            {(touched.message && errors.message)}
                                        </p>
                                        <DivCheckBox>
                                            <Checkbox
                                                required
                                                color="primary"
                                                checked={formik.values.acceptTerms}
                                                {...getFieldProps('acceptTerms')}
                                            />
                                            <p>
                                                By submitting you agree that you have read our&nbsp;
                                                <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2293FB' }} to="/privacypolicy">Privacy Policy</Link> and <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2293FB' }} to="/privacypolicy">Terms of Service.</Link>
                                            </p>
                                        </DivCheckBox>
                                        <p className="error-p">
                                            {(touched.acceptTerms && errors.acceptTerms)}
                                        </p>
                                        <br />
                                        <Button
                                            variant="contained"
                                            className="submit-btn"
                                            type="submit"
                                            size="large"
                                            fullWidth
                                        >
                                            <img src="/plane-send.png" alt="send icon" />
                                            &nbsp; SEND
                                        </Button>
                                    </Form>
                                </FormikProvider>
                            </DivContactForm>
                        </Grid>
                        <Grid className="description" item md={6} sm={6} xs={12}>
                            {parse(contactContent)}
                        </Grid>
                    </Grid>
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
    .contact-content{
        text-align: left;
        padding-top: 60px;
        @media (max-width: 960px){
            padding-top: 30px;
        }
    }
    .form{
        padding: 15px 60px 30px 60px;
        @media(max-width: 960px){
            padding: 15px;
        }
        .contact-feild-name-grid{
            padding-right: 5px;
        }
        .contact-feild-surname-grid{
            padding-left: 5px;
        }
        .contact-feild-name, .contact-feild-surname{
            input{
                border-radius: 8px;
                background-color: rgba(238, 246, 246, 0.75);
                &:hover,&:active{
                    background-color: transparent;
                }
            }
           //outline-color: #C1D9EE;
        }
        .contact-feild-email{
            margin-top: 20px;
            input {
                background-color: rgba(238, 246, 246, 0.75);
                &:hover,&:active{
                    background-color: transparent;
                }
            }
            
            //outline-color: #C1D9EE;
        }
        .contact-feild-textarea{
            margin-top: 20px;
            background-color: rgba(238, 246, 246, 0.75);
            &:hover{
                background-color: transparent;
            }
            &:active{
                background-color: transparent;
            }
            &:focus{
                background-color: transparent;
            }
        }
        .error-p{
            color: red;
            padding-left: 8px;
            font-size: 12px;
            margin: 5px 0px;
            height: 10px;
        }
        .submit-btn{
            color: white;
            background-color: rgba(0, 102, 153, 1);
            border-radius: 10px;
            font-weight: 500;
            line-height: 12px;
            img{
                width: 15px;
            }
        }
    }
    .description{
        border-left: 0.5px solid rgba(59, 86, 110, 0.5);
        padding: 15px 150px 15px 75px;
        @media(max-width: 960px){
            padding: 15px;
        }
        @media (max-width: 600px){
            padding: 15px 0px;
            margin: 15px;
            border-left: none;
            border-top: 0.5px solid rgba(59, 86, 110, 0.5);
        }
        h3{
            color: #006699;
        }
        p{
            color: #6F8BA4;
            font-size: 16px;
            line-height: 19px;
        }
    }
}
`;

const DivCheckBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    p{
        font-size: 15px;
        line-height: 18px;
        color: #6F8BA4;
        width: 80%;
        position: relative;
        top: -5px;
    }
`;

const DivContactForm = styled.div`

`;

export default ContactUs;
