import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
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
import { addBlogAsync, updateBlogAsync } from './blog.slice';
import { IBlog } from '../../models/blog';
import { stateFromHTML } from 'draft-js-import-html';
import { getDate } from "../../models/common";
import { categories, IStyled } from "../../models/blog"
import { useHistory } from "react-router-dom";

interface IProps {
    selectedBlog?: IBlog
    editMode?: boolean
}

const AddUpdateBlog: React.FC<IProps> = ({ selectedBlog, editMode }) => {
    const history = useHistory();

    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(selectedBlog?.description || '')));
    const [uploadedImageSource, setUploadedImageSource] = useState(selectedBlog?.imageUrl || '');
    const [isImageSelected, setIsImageSelected] = useState(false)
    const dispatch = useAppDispatch();

    console.log(selectedBlog);

    const initialValues = {
        file: null,
        writer: selectedBlog?.writer || '',
        title: selectedBlog?.title || '',
        description: selectedBlog?.description || '',
        content: selectedBlog?.content || '',
        type: selectedBlog?.type || '',
        date: selectedBlog?.date || getDate(),
        views: selectedBlog?.views || 0,
        likes: selectedBlog?.likes || 0
    };

    const updateInitialValues = {
        _id: selectedBlog?._id || '',
        file: null,
        writer: selectedBlog?.writer || '',
        title: selectedBlog?.title || '',
        description: selectedBlog?.description || '',
        content: selectedBlog?.content || '',
        type: selectedBlog?.type || '',
        date: selectedBlog?.date || getDate(),
        views: selectedBlog?.views || 0,
        likes: selectedBlog?.likes || 0
    };

    const validationSchema = yup.object().shape({
        file: yup.mixed().required('required'),
        writer: yup.string().required('required'),
        title: yup.string().required('required').max(40, 'Max characters of subheading is  40'),
        description: yup.string().required('required'),
        content: yup.string().required('required'),
        type: yup.string().required('required')
    })

    const updateValidationSchema = yup.object().shape({
        writer: yup.string().required('required'),
        title: yup.string().required('required').max(60, 'Max characters of subheading is  40'),
        description: yup.string().required('required'),
        content: yup.string().required('required'),
        type: yup.string().required('required')
    })

    return (
        <div>
            <DivEditForm>
                <Formik
                    initialValues={editMode ? updateInitialValues : initialValues}
                    onSubmit={(values) => {
                        console.log(values);
                        if (!editMode) {
                            dispatch(addBlogAsync(values));
                            history.push("/blog")
                        } else {
                            console.log(values);
                            dispatch(updateBlogAsync(values));
                            history.push("/blog");
                        }
                    }}
                    validationSchema={editMode ? updateValidationSchema : validationSchema}
                    render={({ values, touched, errors, handleChange, handleSubmit, setFieldValue }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <DivOurTeamMember>
                                    <Container className="container" maxWidth="xl">
                                        <BodyHeader
                                            heading={!editMode ? "Add new Blog" : "Edit Blog"}
                                            headingColor="rgba(0, 102, 153, 1)"
                                            SubHeadingColor="rgba(59, 86, 110, 1)"
                                            path="/team"
                                        />
                                        <Grid container className="member">
                                            <Grid item xl={6} md={12} sm={12} xs={12}>
                                                {isImageSelected ?
                                                    <BlogImage imageUrl={uploadedImageSource}>
                                                        <div className="main-blog-image">
                                                        </div>
                                                    </BlogImage>
                                                    :
                                                    <img src={uploadedImageSource || '/image-placeholder.jpg'} className="blog-img" alt='new blog' />
                                                }
                                            </Grid>
                                            <Grid className="member-info" item xl={5} md={4} sm={4} xs={12}>
                                                <TextField
                                                    className="text-feild"
                                                    variant='outlined'
                                                    fullWidth
                                                    id="writer"
                                                    name="writer"
                                                    label="Writer"
                                                    value={values.writer}
                                                    onChange={handleChange}
                                                    error={touched.writer && Boolean(errors.writer)}
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
                                                <TextField
                                                    className="text-feild"
                                                    variant='outlined'
                                                    fullWidth
                                                    id="content"
                                                    name="content"
                                                    label="Content"
                                                    value={values.content}
                                                    onChange={handleChange}
                                                    error={touched.content && Boolean(errors.content)}
                                                />
                                                <br />
                                                <br />
                                                <Select
                                                    style={{
                                                        width: '100%',
                                                        margin: 15,
                                                        textAlign: 'left'
                                                    }}
                                                    variant="outlined"
                                                    id="type"
                                                    labelId="demo-simple-select-helper-label"
                                                    name="type"
                                                    value={values.type}
                                                    label="Category"
                                                    onChange={handleChange}
                                                    error={touched.type && Boolean(errors.type)}
                                                >
                                                    {categories.map((category) => {
                                                        return <MenuItem value={category.value}>{category.name}</MenuItem>
                                                    })}
                                                </Select>
                                                <br />
                                                <br />
                                                <div className="form-group" style={{ textAlign: 'left', marginLeft: 15 }}>
                                                    <input id="file" name="file" type="file"
                                                        accept=".png,.PNG,.jpg,.JPG,.jpeg,JPEG"
                                                        onChange={(event) => {
                                                            console.log(event);
                                                            setFieldValue("file", event.target.files![0]);
                                                            setUploadedImageSource(URL.createObjectURL(event.target.files![0]));
                                                            setIsImageSelected(true)
                                                        }} className="form-control"
                                                    />
                                                </div>
                                            </Grid>
                                            <Grid className="member-description" item xl={12} md={12} sm={12} xs={12}>
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

const BlogImage = styled.div<IStyled>`
.main-blog-image{
    background-image:url(${(props => props.imageUrl)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 15px 15px 0px 30px;
    min-height: 550px;
    width: 900px;
  }
`;

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

.blog-img {
    width: 900px;
    margin: 15px 15px 0px 30px;
    min-height: 550px;
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
        padding: 15px;
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

export default AddUpdateBlog