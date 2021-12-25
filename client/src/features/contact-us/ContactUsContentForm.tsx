import { Button } from '@material-ui/core';
import { convertToRaw, EditorState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { Editor } from 'react-draft-wysiwyg';
import { Form, FormikProvider, useFormik } from 'formik';
import React, { useEffect } from 'react'
import * as Yup from 'yup';
import { IContactUs } from '../../models/contactUs';
import { getContactUsSelector, updateContactUsContentAsync } from './contactus.slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store.hooks';
import draftToHtml from 'draftjs-to-html';


interface IProps {
    setEditMode: (editMode: boolean) => void,
}

const ContactUsContentForm: React.FC<IProps> = ({ setEditMode }) => {

    const { contactus } = useSelector(getContactUsSelector);
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(contactus === null ? '' : contactus.content)))
    const dispatch = useAppDispatch();

    useEffect(() => {

    }, [contactus])

    const newSchema = Yup.object().shape({
        content: Yup.string().required('required'),
    });
    const formik = useFormik({
        initialValues: {
            content: contactus === null ? '' : contactus.content || ''
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                debugger;
                let updatedContactUs: IContactUs = JSON.parse(JSON.stringify(contactus));

                values.content = draftToHtml(convertToRaw(editorState.getCurrentContent()))

                updatedContactUs.content = values.content;

                dispatch(updateContactUsContentAsync(updatedContactUs)).then(() => {
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
        <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
                {editorState &&
                    <Editor
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                    />
                }
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
    )
}

export default ContactUsContentForm
