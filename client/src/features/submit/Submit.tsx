import { withStyles } from '@material-ui/core';
import { Button, Checkbox, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputFeild from '../../controls/InputFeild';
import InputSelect from '../../controls/InputSelect';
import InputTextArea from '../../controls/InputTextArea';
import { countries } from '../../models/submit';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Cancel } from '@material-ui/icons';

interface ISubmitProps {
    handleCloseDialog: () => void
}

const Submit: React.FC<ISubmitProps> = (
    { handleCloseDialog }
) => {
    const [fileName, setFileName] = React.useState('');

    const newUserScema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        email: Yup.string().required('email is required').email(),
        website: Yup.string().required(),
        country: Yup.string().required(),
        query: Yup.string().required(),
        details: Yup.string().required('Details are required'),
        terms: Yup.boolean().oneOf([true], 'accpet the terms and policy'),
        file: Yup.mixed().required('a file is required'),
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            website: '',
            country: '',
            query: '',
            details: '',
            terms: false,
            file: null,
        },
        validationSchema: newUserScema,
        onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
            try {
                // API call
                console.log(values);
                handleCloseDialog();
                resetForm();
                setSubmitting(false);
            }
            catch (error) {
                console.log(error);
                setSubmitting(false);
                setErrors(error);
            }
        }
    })
    const { errors, touched, handleSubmit, handleChange, handleBlur, handleReset, setFieldValue, getFieldProps } = formik;

    const refFileInput = React.useRef(null);
    const handleClick = () => {
        // console.log('onclick triggered');
        (refFileInput as any).current.click();
    }
    const handleFile = (e: any) => {
        // console.log('onChange triggered');
        setFieldValue('file', e.target.files[0]);
        if (e.target.files[0] !== undefined)
            setFileName(e.target.files[0].name);
    }
    const handleFileClear = () => {
        setFieldValue('file', null);
        setFileName('');
        (refFileInput as any).current.value = "";
    }
    // console.log(formik.values.file);
    // console.log(fileName);

    const CustomColorCheckbox = withStyles({
        root: {
            color: (Boolean(errors.terms && touched.terms) ? 'red' : '#2293FB'),
            "&$checked": {
                color: "#2293FB",
            }
        },
        checked: {}
    })((props) => <Checkbox color="default" size="small" required {...props} />);

    return (
        <>
            <DivSubmit>
                <Container className="container" maxWidth="xl">
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
                        <FormikProvider value={formik}>
                            <Form onSubmit={handleSubmit} noValidate>
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
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            handleReset={handleReset}
                                            value={formik.values.name}
                                            error={Boolean(errors.name && touched.name)}
                                        />
                                    </div>
                                    <div className="contact-details">
                                        <label htmlFor="email">
                                            Email:
                                        </label>
                                        <InputFeild
                                            name="email"
                                            placeholder="abc123@email.com"
                                            required={true}
                                            type="email"
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            handleReset={handleReset}
                                            value={formik.values.email}
                                            error={Boolean(errors.email && touched.email)}
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
                                    <div className="about-project">
                                        <label htmlFor="Query Type">Query Type:</label>
                                        <InputSelect
                                            name="query"
                                            options={countries}
                                            setFieldValue={setFieldValue}
                                            value={formik.values.query}
                                            error={Boolean(errors.query && touched.query)}
                                        />
                                    </div>
                                    <div className="about-project">
                                        <label htmlFor="website">WebSite:</label>
                                        <InputFeild
                                            name="website"
                                            placeholder="Type Your Answer"
                                            type="text"
                                            required={true}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            handleReset={handleReset}
                                            value={formik.values.website}
                                            error={Boolean(errors.website && touched.website)}
                                        />
                                    </div>
                                    <div className="about-project">
                                        <label htmlFor="Countries">Countries:</label>
                                        <InputSelect
                                            name="country"
                                            options={countries}
                                            setFieldValue={setFieldValue}
                                            value={formik.values.country}
                                            error={Boolean(errors.country && touched.country)}
                                        />
                                    </div>
                                    <div className="about-project">
                                        <label htmlFor="attach">Attach</label>
                                        <input className="file-hidden" onChange={handleFile} type="file" ref={refFileInput} />
                                        {
                                            (formik.values.file !== null && formik.values.file !== undefined) ?
                                                <div className={`file-in-view-selected`}>
                                                    {`${fileName}`}
                                                    <Cancel className="icon" onClick={handleFileClear} />
                                                </div> :
                                                <div className={`file-in-view ${(Boolean(errors.file && touched.file) ? 'error' : '')}`} onClick={handleClick}>
                                                    Click here to insert a file
                                                </div>
                                        }
                                    </div>
                                    <div className="about-project details">
                                        <label htmlFor="details">Details:</label>
                                        <InputTextArea
                                            name="details"
                                            placeholder="Type Your Answer"
                                            required={true}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                            handleReset={handleReset}
                                            value={formik.values.details}
                                            error={Boolean(errors.details && touched.details)}
                                        />
                                    </div>
                                </DivFormAboutTheProject>
                                <div className="form-terms">
                                    <CustomColorCheckbox
                                        checked={formik.values.terms}
                                        {...getFieldProps('terms')}
                                    />
                                    <span className="span">
                                        By submitting you agree that you have read our&nbsp;
                                        <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2293FB' }} to="/privacypolicy">
                                            Privacy Policy
                                        </Link>
                                        &nbsp;and&nbsp;
                                        <Link style={{ textDecoration: 'none', fontWeight: 'bold', color: '#2293FB' }} to="/privacypolicy">
                                            Terms of Service
                                        </Link>
                                        .
                                    </span>
                                </div>
                                <div className="form-btn">
                                    <Button variant="contained" type="submit">
                                        SUBMIT
                                    </Button>
                                </div>
                            </Form>
                        </FormikProvider>
                    </DivAssesmentForm>
                </Container>
            </DivSubmit>
        </>
    );
};

const DivSubmit = styled.div`
.container{
    background-color: rgba(223, 240, 250, 1);
}
`;

const DivAssesmentForm = styled.div`
    max-width: 700px;
    background-color: rgba(223, 240, 250, 1);
    border-radius: 5px;
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
    .form-btn{
        margin-bottom: 30px;
        button{
            cursor: pointer;
            color: white;
            background-color:  #2293FB;
            border-radius: 20px;
            border: none;
            font-size: 12px;
            font-weight: 500;
            box-shadow: none;
            padding: 5px 30px;
            width: 100%;
        }
    }
    .form-terms{
        max-width: 100%;
        margin: 0px auto 30px auto;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
        @media (max-width: 600px){
            max-width: 95%;
        }
        .span{
            max-width: 100%;
            color: #6F8BA4;
            font-size: 12px;
            text-align: center;
            @media (max-width: 400px){
                text-align: left;
            }
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
    @media (max-width: 400px){
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
    .about-project{
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
        @media (max-width: 400px){
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
        .file-hidden{
            display: none;
        }
        .file-in-view{
            cursor: pointer;
            padding: 6px 15px;
            font-size: 12px;
            width: 200px;
            text-align: left;
            border-radius: 6px;
            color: grey;
            background-color: #C9E8FA;
            border: 0.5px solid #0087FF;
            &:hover{
                color: black;
            }
            @media (max-width: 550px){
                width: 150px;
            }
        }
        .file-in-view-selected{
            cursor: default;
            padding: 1px 15px;
            font-size: 12px;
            width: 200px;
            text-align: left;
            border-radius: 6px;
            color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #C9E8FA;
            border: 0.5px solid #0087FF;
            @media (max-width: 550px){
                width: 150px;
            }
            .icon{
                color: grey;
                cursor: pointer;
                width: 18px;
                &:hover{
                    color: black;
                }
            }
        }
        .error{
            border: 0.5px solid red !important;
            &:hover{
                border: 0.5px solid red !important;
                box-shadow: 0 0 0 0.5px red inset;
            }
        }
    }
    .details{
        label{
            padding-top: 5px;
        }
        align-items: flex-start;
        textarea::placeholder{
             font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
        }
        @media (max-width: 400px){
            align-items: center;
        }
    }
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
        max-width: 75%;
        border-top: 0.5px solid #C5D8DE;
        margin: 0px 0px;
        position: relative;
        top: -21px;
        left: 130px;
        @media (max-width: 600px){
            max-width: 60%;
        }
        @media (max-width: 400px){
            max-width: 50%;
        }
    }
`;
export default Submit;
