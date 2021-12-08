import { Button, Container, Grid, IconButton, TextField } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import ExpertiseList from './ExpertiseList';
import EditIcon from '@material-ui/icons/Edit';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { useAppDispatch } from '../../../store.hooks';
import { updateLegalExpertiseHead } from '../home.slice';
import { getAuthSelector } from '../../login/auth.slice';
import { useSelector } from 'react-redux';
import { IExpertiseContentListItem } from '../../../models/home';

interface IProps {
    heading: string,
    mainText: string,
    contentList: IExpertiseContentListItem[],
};

const Expertise: React.FC<IProps> = (
    { heading, contentList, mainText }
) => {
    const { isLoggedIn } = useSelector(getAuthSelector);

    const dispatch = useAppDispatch();
    const fullHeading = heading.split(' ');
    const headingPart1 = fullHeading.shift();
    const headingPart2 = fullHeading.join(' ');
    const [editMode, setEditMode] = React.useState<true | false>(false);
    const newSchema = Yup.object().shape({
        heading: Yup.string().required('required'),
        description: Yup.string().required('required'),
    });
    const formik = useFormik({
        initialValues: {
            heading: headingPart1 || 'Empty',
            description: mainText || 'description is Empty',
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                dispatch(
                    updateLegalExpertiseHead(
                        {
                            heading: values.heading,
                            description: values.description,
                        }
                    )
                );
                setSubmitting(false);
                setEditMode(false);
            }
            catch (error) {
                console.log(error);
                setSubmitting(false);
                setErrors(error);
            }
        }
    });
    const { handleSubmit, errors, touched, getFieldProps } = formik;
    return (
        <>
            <DivHomeExpertise>
                <Container className="container" maxWidth="xl">
                    <DivHomeExpertiseContent>
                        <Grid>
                            <Grid item md={7} sm={9} xs={12}>
                                {
                                    editMode ?
                                        <DivEditForm>
                                            <FormikProvider value={formik}>
                                                <Form noValidate onSubmit={handleSubmit}>
                                                    <TextField
                                                        className="text-feild"
                                                        label="heading"
                                                        variant="outlined"
                                                        fullWidth
                                                        {...getFieldProps('heading')}
                                                        error={Boolean(errors.heading && touched.heading)}
                                                    />
                                                    <TextField
                                                        className="text-feild"
                                                        multiline
                                                        maxRows={3}
                                                        label="description"
                                                        variant="outlined"
                                                        fullWidth
                                                        {...getFieldProps('description')}
                                                        error={Boolean(errors.description && touched.description)}
                                                    />
                                                    <Button
                                                        fullWidth
                                                        color="primary"
                                                        variant="contained"
                                                        type="submit"
                                                        className="submit-btn"
                                                    >
                                                        save
                                                    </Button>
                                                </Form>
                                            </FormikProvider>
                                        </DivEditForm>
                                        :
                                        <>
                                            <h1 className="h1">
                                                <div>{headingPart1} <span>{headingPart2}</span></div>

                                                {isLoggedIn && (
                                                    <IconButton className="edit-Expertise-icon" color='primary'
                                                        aria-label="edit" onClick={() => setEditMode(true)}>
                                                        <EditIcon fontSize="inherit" />
                                                    </IconButton>
                                                )}
                                            </h1>
                                            <p>
                                                {mainText}
                                            </p>
                                        </>
                                }
                            </Grid>
                        </Grid>
                        <br />
                        <ExpertiseList isLoggedIn={isLoggedIn} contentList={contentList} />
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
    text-align: left;
`;

const DivHomeExpertiseContent = styled.div`
padding-left: 3px;
width: 100%;
margin: 0px auto;
text-align: left;
.h1{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
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

const DivEditForm = styled.div`
.submit-btn{
    margin: 15px;
}
.text-feild{
    margin: 15px;
    background-color: white;
}
`;

export default Expertise;
