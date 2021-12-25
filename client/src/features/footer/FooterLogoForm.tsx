import React from 'react'
import { useSelector } from 'react-redux';
import { getHomeContentSelector, updateHomeContentAsync } from '../home/home.slice';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { IHome } from '../../models/home';
import { useAppDispatch } from '../../store.hooks';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

interface IProps {
    setEditFooterLogoText: (editMode: boolean) => void
}

const FooterLogoForm: React.FC<IProps> = ({ setEditFooterLogoText }) => {

    const { homeContent } = useSelector(getHomeContentSelector);
    const { footerContent } = homeContent;
    const dispatch = useAppDispatch();

    const newSchema = Yup.object().shape({
        underLogoText: Yup.string().required('required'),
    });

    const formik = useFormik({
        initialValues: {
            underLogoText: footerContent.underLogoText || ''
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                let updatedHomeContent: IHome = JSON.parse(JSON.stringify(homeContent));

                updatedHomeContent.footerContent.underLogoText = values.underLogoText;

                setEditFooterLogoText(false);
                dispatch(updateHomeContentAsync(updatedHomeContent));
            }
            catch (error: any) {
                console.log(error);
                setSubmitting(false);
                setErrors(error);
            }
        }
    });

    const { handleSubmit, errors, touched, getFieldProps } = formik;

    return (
        <DivEditForm>
            <FormikProvider value={formik}>
                <Form noValidate onSubmit={handleSubmit}>
                    <TextField
                        style={{ marginLeft: -15 }}
                        multiline
                        minRows={3}
                        label="Text"
                        variant="outlined"
                        {...getFieldProps('underLogoText')}
                        error={Boolean(errors.underLogoText && touched.underLogoText)}
                    />
                    <br />
                    <Button
                        style={{ width: 224 }}
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
    )
}

const DivEditForm = styled.div`
.submit-btn{
    margin: 15px 15px 15px 0px;
}
.text-feild{
    margin: 15px 15px 15px 0px;
}
`;

export default FooterLogoForm
