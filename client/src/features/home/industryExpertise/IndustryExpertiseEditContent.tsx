import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../store.hooks';
import { EditorState, convertToRaw, } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html'
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { getHomeContentSelector, updateHomeContentAsync, updateIndustryExpertiseTab } from '../home.slice';
import { useSelector } from 'react-redux';
import { IHome } from '../../../models/home';

interface IIndustryExpertiseEditContentProps {
    id: string,
    heading: string,
    list: string,
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>,
}

const IndustryExpertiseEditContent: React.FC<IIndustryExpertiseEditContentProps> = (
    { heading, list, id, setEditMode }
) => {

    const { homeContent } = useSelector(getHomeContentSelector);
    const dispatch = useAppDispatch();
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(list)))

    const EditModeOff = () => {
        setEditMode(false);
    }
    const newSchema = Yup.object().shape({
        heading: Yup.string().required('required'),
        list: Yup.string().required('required'),
    })
    const initialValues = {
        heading: heading || 'Heading is empty',
        list: list || 'list is empty',
    }

    return (
        <>
            <DivIndustryExpertiseEditContent>
                <Formik
                    validationSchema={newSchema}
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        values.list = draftToHtml(convertToRaw(editorState.getCurrentContent()))

                        const updatedHomeContent: IHome = JSON.parse(JSON.stringify(homeContent));
                        let index = updatedHomeContent.industryExpertise.industryExpertiseContentList?.findIndex(x => x._id === id);
                        index = index === undefined ? -1 : index;
                        updatedHomeContent.industryExpertise.industryExpertiseContentList![index] = {
                            _id: id,
                            heading: values.heading,
                            content: values.list,
                        };

                        EditModeOff();
                        console.log(values);
                        dispatch(updateHomeContentAsync(updatedHomeContent));
                    }
                    }
                >
                    {({ touched, errors, getFieldProps }) => (
                        <Form noValidate>
                            <div className="form">
                                <div className="form-editors">
                                    <TextField
                                        className="text-feild"
                                        fullWidth
                                        variant="outlined"
                                        label="heading"
                                        {...getFieldProps('heading')}
                                        error={Boolean(touched.heading && errors.heading)}
                                    />
                                    <div className="editor">
                                        {editorState &&
                                            <Editor
                                                wrapperClassName="wrapper-class"
                                                editorClassName="editor-class"
                                                toolbarClassName="toolbar-class"
                                                editorState={editorState}
                                                onEditorStateChange={setEditorState}
                                            />
                                        }
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <Button type="submit" color="primary" size="small" fullWidth variant="contained">
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </DivIndustryExpertiseEditContent>
        </>
    )
}

const DivIndustryExpertiseEditContent = styled.div`
padding: 15px;
button{
    text-align: center !important;
    padding: 6px 0px;
    margin: 15px 0px;
}
.editor{
    margin-top: 15px;
}
.wrapper-class{
    border: 0.5px solid lightgrey;
    border-radius: 5px;
    background-color: #fff;
}
.toolbar-class{
    padding-top: 15px;
    border: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.editor-class{
    margin: 5px;
    padding: 10px;
    border-top: 0.5px solid lightgrey;
}
.text-feild{
    background-color: white;
}
.form{
    display:flex;
    flex-flow: column;
    justify-content: space-between;
    min-height: 73vh;
}
`;

export default IndustryExpertiseEditContent;