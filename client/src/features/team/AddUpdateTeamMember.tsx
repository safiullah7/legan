import { Button, TextField } from '@material-ui/core';
import { Editor } from 'react-draft-wysiwyg';
import { Formik } from 'formik';
import React, { useState } from 'react'
import * as yup from 'yup';
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import BodyHeader from '../../controls/BodyHeader';
import { AddCircle } from '@material-ui/icons';
import { useAppDispatch } from '../../store.hooks';
import { addTeamMemberAsync } from './team.slice';
import { ITeamMember } from '../../models/team';
import { stateFromHTML } from 'draft-js-import-html';

import { useHistory } from "react-router-dom";

interface IProps {
    selectedTeamMember?: ITeamMember
    editMode?: boolean
}

const AddUpdateTeamMember: React.FC<IProps> = ({ selectedTeamMember, editMode }) => {
    const history = useHistory();

    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(selectedTeamMember?.description || '')));
    const [uploadedImageSource, setUploadedImageSource] = useState(selectedTeamMember?.imageUrl || '');
    const dispatch = useAppDispatch();

    const initialValues = {
        file: null,
        name: selectedTeamMember?.name || '',
        title: selectedTeamMember?.title || '',
        description: selectedTeamMember?.description || ''
    };
    const validationSchema = yup.object().shape({
        file: yup.mixed().required('required'),
        name: yup.string().required('required'),
        title: yup.string().required('required').max(40, 'Max characters of subheading is  40'),
        description: yup.string().required('required')
    })

    return (
        <div>
            <DivEditForm>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log(values);
                        if (!editMode) {
                            dispatch(addTeamMemberAsync(values));
                            history.push("/team")
                        } else {
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
                                            heading={!editMode ? "Add new Team Member" : "Edit Team Member"}
                                            headingColor="rgba(0, 102, 153, 1)"
                                            SubHeadingColor="rgba(59, 86, 110, 1)"
                                            path="/team"
                                        />
                                        <Grid container className="member">
                                            <Grid className="member-info" item md={4} sm={4} xs={12}>
                                                <img src={uploadedImageSource || '/dummy-user-image.png'} alt='new member' />
                                                <div className="form-group">
                                                    <input id="file" name="file" type="file"
                                                        accept=".png,.PNG,.jpg,.JPG,.jpeg,JPEG"
                                                        onChange={(event) => {
                                                            setFieldValue("file", event.currentTarget.files![0]);
                                                            setUploadedImageSource(URL.createObjectURL(event.currentTarget.files![0]));
                                                        }} className="form-control"
                                                    />
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
                                            </Grid>
                                            <Grid className="member-description" item md={8} sm={8} xs={12}>
                                                <h4>Description</h4>
                                                <div className="editor">
                                                    {editorState &&
                                                        <Editor
                                                            editorState={editorState}
                                                            wrapperClassName="wrapper-class"
                                                            editorClassName="editor-class"
                                                            toolbarClassName="toolbar-class"
                                                            onEditorStateChange={setEditorState}
                                                            onChange={(contentState) =>
                                                                setFieldValue('description', draftToHtml(contentState))}
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
    .member-info{
    img{
        padding: 10px;
        -webkit-border-radius: 215px;
        -webkit-background-clip: padding-box;
        -moz-border-radius: 215px;
        -moz-background-clip: padding;
        border-radius: 50%;
        background-clip: padding-box;
        width: 205px;
        height: 210px;
        object-fit: cover;
    }
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
    margin: 15px;
}
.edit-save-btn{
    margin: 15px 0px 15px 15px;
    max-width: 450px;
}
.editor{
    margin: 15px;
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
    height: 275px;
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

export default AddUpdateTeamMember
