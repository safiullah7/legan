import { Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
const Login = () => {
    const newUserSchema = Yup.object().shape({
        email: Yup.string().required("email is required").email(),
        password: Yup.string().required("password is required"),
    })
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: newUserSchema,
        onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
            try {
                // API call
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
            <DivLogin>
                <Container className="container" maxWidth="xl">
                    <Grid container>
                        <Grid className="colored-grid" item md={6}>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <DivLoginForm>
                                <FormikProvider value={formik}>
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <img src="/leganix_logo1.jpg" alt="login" />
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            {...getFieldProps('email')}
                                            error={Boolean(touched.email && errors.email)}
                                        />
                                        <p>
                                            {(touched.email && errors.email)}
                                        </p>
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            type="password"
                                            {...getFieldProps('password')}
                                            error={Boolean(errors.password && touched.password)}
                                        />
                                        <p>
                                            {(touched.password && errors.password)}
                                        </p>
                                        <br />
                                        <Button
                                            fullWidth
                                            color="primary"
                                            variant="contained"
                                            size="small"
                                            type="submit"
                                        >
                                            Log In
                                        </Button>
                                    </Form>
                                </FormikProvider>


                            </DivLoginForm>
                        </Grid>
                    </Grid>
                </Container>
            </DivLogin>
        </>
    )
}

const DivLogin = styled.div`
@media (max-width: 600px){
    margin-top: -15px;
}
.container{
    min-height: 100vh;
    padding: 75px 15px;
    background-color: #F9FCFE;
    .colored-grid{
}
}
`;

const DivLoginForm = styled.div`
transition: all 0.25s ease-in-out;
max-width: 400px;
background-color: white;
box-shadow: 0px 0px 10px 1px lightgrey;
border-radius: 5px;
margin: 45px auto;
padding: 30px;
&:hover{
    transition: all 0.25s ease-in-out;
    box-shadow: 0px 0px 10px 2px lightgrey;
}
img{
    margin: 15px 0px;
}
p{
    padding-left: 15px;
    height: 10px;
    text-align: left;
    color: red;
    margin:7px 0px;
    font-size: 12px;
}
`;

export default Login;
