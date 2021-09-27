import { Button, Dialog, Grid, Slide, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { stateFromHTML } from 'draft-js-import-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useAppDispatch } from '../../../store.hooks';
import { updateLegalExpertiseContent } from '../home.slice';
import { IExpertiseContentListItem } from '../../../models/home';
import * as Yup from 'yup';
import styled from 'styled-components';
import { TransitionProps } from '@material-ui/core/transitions';
import { iconsArray } from '../../../models/common';

interface IProps {
    scrollRef: React.MutableRefObject<null>,
    item: IExpertiseContentListItem
    updateEditMode: () => void
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const ExpertiseListItemForm: React.FC<IProps> = ({
    item,
    updateEditMode,
    scrollRef
}) => {
    // const [editorState, setEditorState] = React.useState(
    //     EditorState.createWithContent(
    //         ContentState.createFromBlockArray(htmlContent.contentBlocks, htmlContent.entityMap)
    //     )
    // );
    const dispatch = useAppDispatch();
    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(item.content)));
    const [openDialog, setOpenDialog] = React.useState<true | false>(false);
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const initialValues = {
        heading: item.heading || 'heading was empty',
        subHeading: item.subHeading || 'mainText was empty',
        icon: item.icon || 'no Icon',
        content: item.content
    };
    const validationSchema = Yup.object().shape({
        heading: Yup.string().required('required'),
        subHeading: Yup.string().required('Sub Heading is required').max(50, 'Max characters of subheading is  50'),
    })

    return (
        <DivEditForm>
            <Formik
                initialValues={initialValues}
                // to do
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    values.content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    console.log(values);
                    updateEditMode();
                    (scrollRef as any).current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    dispatch(updateLegalExpertiseContent({
                        _id: item._id,
                        icon: values.icon,
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
                            <Grid item md={7} sm={7} xs={11}>
                                <TextField
                                    className="text-feild"
                                    variant='outlined'
                                    fullWidth
                                    id="heading"
                                    name="heading"
                                    label="Heading"
                                    value={values.heading}
                                    onChange={handleChange}
                                    error={touched.heading && Boolean(errors.heading)}
                                />
                                <br />
                                <br />
                                <TextField
                                    className="text-feild"
                                    variant='outlined'
                                    fullWidth
                                    multiline
                                    rows={3}
                                    id="subHeading"
                                    name="subHeading"
                                    label="Sub Heading"
                                    inputProps={{ maxLength: 60 }}
                                    value={values.subHeading}
                                    onChange={handleChange}
                                    error={touched.subHeading && Boolean(errors.subHeading)}
                                />
                                <p className="sub-heading-error">{touched.subHeading && errors.subHeading}</p>
                            </Grid>
                            <Grid item md={5} sm={5} xs={12}>
                                <div className="change-icon">
                                    <object aria-label={values.heading} className="expertise-icons" data={values.icon} type="image/svg+xml" ></object>
                                    <Button variant="contained" size="small" fullWidth className="icon-btn" color="primary" onClick={handleOpenDialog}>
                                        Change Icon
                                    </Button>
                                </div>
                                <Dialog
                                    open={openDialog}
                                    keepMounted
                                    transitionDuration={500}
                                    TransitionComponent={Transition}
                                    onClose={handleCloseDialog}
                                    fullWidth
                                >
                                    <h3 style={{ margin: '15px 0px', textAlign: 'center', }}>Select Icon</h3>
                                    <DivDialogContent>
                                        {
                                            iconsArray.map((icon, index) => <div key={index} className={`logo-changer-div ${icon.imgUrl === values.icon && 'selected'}`}
                                                onClick={() => {
                                                    console.log("click");
                                                    if (icon.imgUrl !== values.icon) {
                                                        setFieldValue('icon', icon.imgUrl);
                                                        handleCloseDialog();
                                                    }

                                                }}
                                            ><object aria-label={icon.imgUrl} className={`logo-changer-image`} data={icon.imgUrl} type="image/svg+xml" ></object></div>)
                                        }
                                    </DivDialogContent>
                                </Dialog>
                            </Grid>
                        </Grid>
                        <div className="editor">
                            {editorState &&
                                <Editor
                                    editorState={editorState}
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                    onEditorStateChange={setEditorState}
                                />
                            }
                        </div>
                        <div className="edit-btns">
                            <Button className="edit-save-btn" fullWidth variant="contained" size="large" color="primary" type="submit">
                                Save
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </DivEditForm>
    )
}

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

const DivDialogContent = styled.div`
margin: 5px 15px;
padding-top: 15px;
border-top: 0.5px solid lightgrey;
display: inline-flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
align-content: center;
.logo-changer-image{
    transition: all 0.25s ease-in-out;
    margin: 5px;
    padding: 3px;
    width: 50px;
    height: 50px;
    pointer-events: none;
}
.logo-changer-div{
    cursor: pointer;
    margin: 5px;
    &:hover{
        transition: all 0.25s ease-in-out;
        box-shadow: 0px 0px 2px 1px #77ADCA;
        background-color: #F9FCFE;
    }
}
.selected{
    box-shadow: 0px 0px 2px 1px #77ADCA;
    background-color: #F9FCFE;
}
`;

export default ExpertiseListItemForm
