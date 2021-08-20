import { Button, Grid, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react'
import { EditorState, convertToRaw, convertFromHTML } from 'draft-js';
import { ContentState, Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { stateFromHTML } from 'draft-js-import-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface IProps {
    heading: string,
    subHeading: string,
    content: string,
    updateEditMode: (editMode: boolean) => void
}

const ExpertiseListItemForm: React.FC<IProps> = ({
    heading,
    subHeading,
    content,
    updateEditMode
}) => {

    const htmlContent = convertFromHTML(content);

    // const [editorState, setEditorState] = React.useState(
    //     EditorState.createWithContent(
    //         ContentState.createFromBlockArray(htmlContent.contentBlocks, htmlContent.entityMap)
    //     )
    // );
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(content)))

    const initialValues = {
        heading: heading || 'heading was empty',
        subHeading: subHeading || 'mainText was empty',
        content: content
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                // to do
                // validationSchema={validationSchema} 
                onSubmit={async (values) => {
                    values.content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    console.log(values);
                    // dispatch(updateBriefAboutUsContent(values));
                    // setEditMode(!editmode);
                }}
            >
                {({ values, handleChange, touched, errors, setFieldValue }) => (
                    <Form>
                        <Grid className="about-first-grid" container spacing={3}>
                            <Grid item md={7} sm={9} xs={12}>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    id="heading"
                                    name="heading"
                                    label="Heading"
                                    value={values.heading}
                                    onChange={handleChange}
                                    error={touched.heading && Boolean(errors.heading)}
                                    helperText={touched.heading && errors.heading}
                                />
                                <br />
                                <br />
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    multiline
                                    id="subHeading"
                                    name="subHeading"
                                    label="Sub Heading"
                                    value={values.subHeading}
                                    onChange={handleChange}
                                    error={touched.subHeading && Boolean(errors.subHeading)}
                                    helperText={touched.subHeading && errors.subHeading}
                                />
                            </Grid>
                        </Grid>
                        <div>
                            {editorState &&
                                <Editor
                                    editorState={editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={setEditorState}
                                />
                            }
                        </div>
                        <div className="edit-btns">
                            <Button fullWidth variant="outlined" size="large" color="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ExpertiseListItemForm
