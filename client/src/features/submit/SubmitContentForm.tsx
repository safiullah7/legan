import { Button, TextField } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import styled from 'styled-components';
import { ISubmitRequestContent } from '../../models/submit';
import { updateSubmitRequestAsync } from './submitrequest.slice';
import { useAppDispatch } from '../../store.hooks';

interface IProps {
    setEditMode: (editMode: boolean) => void,
    submitrequest: ISubmitRequestContent
}

const SubmitContentForm: React.FC<IProps> = ({ setEditMode, submitrequest }) => {

    const dispatch = useAppDispatch();

    const newSchema = Yup.object().shape({
        content: Yup.string().required('required'),
    });

    const formik = useFormik({
        initialValues: {
            content: submitrequest.content || ''
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                let updatedSubmitRequest: ISubmitRequestContent = JSON.parse(JSON.stringify(submitrequest));

                updatedSubmitRequest.content = values.content;

                dispatch(updateSubmitRequestAsync(updatedSubmitRequest)).then(() => {
                    setEditMode(false);
                });
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
            <DivEditForm>
                <FormikProvider value={formik}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            multiline
                            minRows={3}
                            label="Text"
                            variant="outlined"
                            {...getFieldProps('content')}
                            error={Boolean(errors.content && touched.content)}
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
        </div>
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

export default SubmitContentForm