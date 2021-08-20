import { Button, Grid, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react'
import { EditorState, convertToRaw, convertFromHTML } from 'draft-js';
import { ContentState, Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { stateFromHTML } from 'draft-js-import-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useAppDispatch } from '../../../store.hooks';
import { updateLegalExpertiseContent } from '../home.slice';
import { IExpertiseContentListItem } from '../../../models/home';

interface IProps {
    item: IExpertiseContentListItem
    updateEditMode: () => void
}

const ExpertiseListItemForm: React.FC<IProps> = ({
    item,
    updateEditMode
}) => {
    // const [editorState, setEditorState] = React.useState(
    //     EditorState.createWithContent(
    //         ContentState.createFromBlockArray(htmlContent.contentBlocks, htmlContent.entityMap)
    //     )
    // );
    const dispatch = useAppDispatch();
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(item.content)))

    const initialValues = {
        heading: item.heading || 'heading was empty',
        subHeading: item.subHeading || 'mainText was empty',
        content: item.content
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
                    updateEditMode();
                    dispatch(updateLegalExpertiseContent({
                        id: item.id,
                        icon: item.icon,
                        panel: item.panel,
                        subHeading: values.subHeading,
                        content: values.content,
                        heading: values.heading
                    }));
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
