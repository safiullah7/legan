import { TextField } from '@material-ui/core';
import { Editor } from 'react-draft-wysiwyg';
import { Formik } from 'formik';
import React from 'react'
import * as yup from 'yup';
import { EditorState, convertToRaw } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html'
import draftToHtml from 'draftjs-to-html';

const AddTeamMember = () => {

    const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

    const initialValues = {
        file: null,
        name: '',
        title: '',
        description: ''
    };
    const validationSchema = yup.object().shape({
        file: yup.mixed().required('required'),
        name: yup.string().required('required'),
        title: yup.string().required('required').max(40, 'Max characters of subheading is  40'),
        description: yup.string().required('required')
    })

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                //validationSchema={validationSchema}
                render={({ values, touched, errors, handleChange, handleSubmit, setFieldValue }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="file">File upload</label>
                                <input id="file" name="file" type="file" onChange={(event) => {
                                    setFieldValue("file", event.currentTarget.files![0]);
                                }} className="form-control" />

                            </div>
                            <TextField
                                className="text-feild"
                                variant='outlined'
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                            />
                            <br />
                            <br />
                            <TextField
                                className="text-feild"
                                variant='outlined'
                                fullWidth
                                id="title"
                                name="title"
                                label="Title"
                                value={values.title}
                                onChange={handleChange}
                                error={touched.title && Boolean(errors.title)}
                            />
                            <br />
                            <br />

                            <div className="editor">
                                {editorState &&
                                    <Editor
                                        editorState={editorState}
                                        wrapperClassName="wrapper-class"
                                        editorClassName="editor-class"
                                        toolbarClassName="toolbar-class"
                                        onChange={(contentState) => setFieldValue('description', draftToHtml(contentState))}
                                        onEditorStateChange={setEditorState}
                                    />
                                }
                            </div>
                            <button type="submit" className="btn btn-primary">submit</button>
                        </form>
                    );
                }} />
        </div>
    )
}

export default AddTeamMember
