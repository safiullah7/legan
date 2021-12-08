import { Button, TextField } from '@material-ui/core';
import { Editor } from 'react-draft-wysiwyg';
import { Formik } from 'formik';
import React from 'react'
import * as yup from 'yup';
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import BodyHeader from '../../controls/BodyHeader';
import { AddCircle } from '@material-ui/icons';
import { useAppDispatch } from '../../store.hooks';
import { addFAQAsync, updateFAQAsync } from './FAQs.slice';
import { IPropsFAQsListItem } from '../../models/faqs';
import { stateFromHTML } from 'draft-js-import-html';
import { useHistory } from "react-router-dom";

interface IProps {
    selectedFAQ?: IPropsFAQsListItem
    editMode?: boolean
    setEditMode?: any
}

const AddUpdateFAQ: React.FC<IProps> = ({ selectedFAQ, editMode, setEditMode }) => {
    const history = useHistory();

    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(selectedFAQ?.answer || '')));
    const dispatch = useAppDispatch();

    const initialValues = {
        _id: selectedFAQ?._id || '',
        question: selectedFAQ?.question || '',
        answer: selectedFAQ?.answer || '',
        
    };
    const validationSchema = yup.object().shape({
        question: yup.mixed().required('required'),
        answer: yup.string().required('required')
    })

    return (
        <div>
            <DivEditForm>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values);
                        if (!editMode) {
                            dispatch(addFAQAsync(values));
                            history.push("/faqs")
                        } else if (editMode) {
                            dispatch(updateFAQAsync(values));
                            setEditMode(false)
                            history.push("/faqs")
                            console.log(values);
                        }
                    }}
                    validationSchema={validationSchema}
                    render={({ values, touched, errors, handleChange, handleSubmit, setFieldValue }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <DivOurTeamMember>
                                    <Container className="container" maxWidth="xl">
                                        <BodyHeader
                                            heading={!editMode ? "Add new FAQ" : "Edit FAQ"}
                                            headingColor="rgba(0, 102, 153, 1)"
                                            SubHeadingColor="rgba(59, 86, 110, 1)"
                                            path="/team"
                                        />
                                        <Grid container className="member">
                                            <Grid className="member-description" item>
                                                <h4>Question</h4>
                                                <div className="member-info">
                                                    <TextField
                                                        className="text-feild"
                                                        variant='outlined'
                                                        fullWidth
                                                        id="question"
                                                        name="question"
                                                        label="question"
                                                        value={values.question}
                                                        onChange={handleChange}
                                                        error={touched.question && Boolean(errors.question)}
                                                    />
                                                </div>
                                                <h4>Answer</h4>
                                                <div className="editor">
                                                    {editorState &&
                                                        <Editor
                                                            editorState={editorState}
                                                            wrapperClassName="wrapper-class"
                                                            editorClassName="editor-class"
                                                            toolbarClassName="toolbar-class"
                                                            onEditorStateChange={setEditorState}
                                                            onChange={(contentState) =>
                                                                setFieldValue('answer', draftToHtml(contentState))}
                                                        />
                                                    }
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                    <Button style={{ width: '500px' }} color="primary" variant="contained" size="small" type='submit'>
                                        <AddCircle className="icon" />
                                        Save
                                    </Button>
                                </DivOurTeamMember>
                            </form>
                        );
                    }} />
            </DivEditForm>
        </div>
    )
}

const DivOurTeamMember = styled.div`
margin-top: 30px;
input::-webkit-file-upload-button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
}
.container{
    background-color: rgba(249, 252, 254, 1);
    padding: 75px 0px;
    @media (max-width: 600px){
        margin-top: -15px;
    }
}

.member{
    margin-top: 45px;
    .MuiFormControl-fullWidth {
        width: 99%;
    }
    .member-info{
    h3{
        font-size: 22px;
        font-weight: 500;
        color: rgba(59, 86, 110, 1);
    }
    p{
        font-size: 20px;
        color: rgba(111, 139, 164, 1);
    }
}
    .member-description{
        text-align: left;
        padding:15px 90px;
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.05em;
            color: #6F8BA4;
        }
        h4{
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.05em;
            color: #3B566E;
            margin-left: 14px;
        }
        ul{
            color: rgba(111, 139, 164, 1);
            li{
                margin: 12px -15px;
                h5{
                    margin: 0px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 20px;
                    letter-spacing: 0.05em;
                    color: #6F8BA4;
                    margin-left: 15px;
                }
                p{
                    margin: 0px 0px 0px 15px;
                    padding: 6px 0px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.05em;
                    color: #6F8BA4;
                }
            }
        }
        @media (max-width: 960px){
        padding: 15px 15px 15px 25px;
    }
    }
}
`;

const DivEditForm = styled.div`
background-color: #F9FCFE;
margin-bottom: 15px;
border-top: 0.5px solid lightgrey;
.text-feild{
    background-color: white;
    margin: 15px 0 15px 15px;
}
.edit-save-btn{
    margin: 15px 0px 15px 15px;
    max-width: 450px;
}
.editor{
    margin: 15px 0 15px 15px;
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
    height: 480px;
}
.sub-heading-error{
    height: 12px;
    font-size: 12px;
    position: relative;
    top: -5px;
    margin: 0px 15px;
    color: red;
}
.change-icon{
    padding: 15px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    min-height: 200px;
    .expertise-icons{
        display: block;
        width: 75px;
        height: 75px;
        margin: 30px auto;
    }
}
`;

export default AddUpdateFAQ