import { Button, TextField } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { IHome } from '../../models/home';
import { useAppDispatch } from '../../store.hooks';
import { getHomeContentSelector, updateHomeContentAsync } from '../home/home.slice';
import styled from 'styled-components';

interface IProps {
    setEditMode: (editMode: boolean) => void
}

const SocialLinksForm: React.FC<IProps> = ({ setEditMode }) => {

    const { homeContent } = useSelector(getHomeContentSelector);
    const { footerContent } = homeContent;
    const dispatch = useAppDispatch();

    const newSchema = Yup.object().shape({
        facebook: Yup.string().required('required'),
        linkedIn: Yup.string().required('required'),
    });

    const formik = useFormik({
        initialValues: {
            facebook: footerContent.socialLinks.facebook || '',
            linkedIn: footerContent.socialLinks.linkedIn || '',
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                let updatedHomeContent: IHome = JSON.parse(JSON.stringify(homeContent));
                if (updatedHomeContent.footerContent === undefined) {
                    updatedHomeContent.footerContent = {
                        socialLinks: values,
                        underLogoText: ''
                    };
                } else {
                    updatedHomeContent.footerContent.socialLinks = values;
                }

                setEditMode(false);
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
                        label="Facebook"
                        variant="outlined"
                        {...getFieldProps('facebook')}
                        error={Boolean(errors.facebook && touched.facebook)}
                    />
                    <br />
                    <br />
                    <TextField
                        label="LinkedIn"
                        variant="outlined"
                        {...getFieldProps('linkedIn')}
                        error={Boolean(errors.linkedIn && touched.linkedIn)}
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

export default SocialLinksForm
