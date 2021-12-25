import { Button, TextField } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store.hooks';
import { getHomeContentSelector, updateHomeContentAsync } from '../home/home.slice';
import * as Yup from 'yup';
import { IHome } from '../../models/home';

const GeneralForm = () => {
    const { homeContent } = useSelector(getHomeContentSelector);
    const dispatch = useAppDispatch();
    const newSchema = Yup.object().shape({
        whitepaperLink: Yup.string().required('required'),
    });
    const formik = useFormik({
        initialValues: {
            whitepaperLink: homeContent.generalContent.whitepaperLink || '',
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                debugger;
                let updatedHomeContent: IHome = JSON.parse(JSON.stringify(homeContent));
                if (updatedHomeContent.generalContent === undefined) {
                    updatedHomeContent.generalContent = values;
                } else {
                    updatedHomeContent.generalContent.whitepaperLink = values.whitepaperLink;
                }
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
        <div>
            <FormikProvider value={formik}>
                <Form noValidate onSubmit={handleSubmit}>
                    <TextField
                        label="Whitepaper Link"
                        variant="outlined"
                        fullWidth
                        {...getFieldProps('whitepaperLink')}
                        error={Boolean(errors.whitepaperLink && touched.whitepaperLink)}
                    />
                    <br />
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
        </div>
    )
}

export default GeneralForm
