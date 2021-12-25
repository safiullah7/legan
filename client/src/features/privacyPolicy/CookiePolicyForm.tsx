import React, { useState } from 'react'
import { getPolicyAsync, updatePolicyAsync } from './policy.slice';
import { convertToRaw, EditorState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';
import { useAppDispatch } from '../../store.hooks';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import draftToHtml from 'draftjs-to-html';
import { IPolicy } from "../../models/privacyPolicy";
import { Editor } from 'react-draft-wysiwyg';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { DatePicker } from "react-rainbow-components";


interface IProps {
    setEditMode: (editMode: boolean) => void,
    policy: IPolicy | null
}

const CookiePolicyForm: React.FC<IProps> = ({ setEditMode, policy }) => {

    const [editorState, setEditorState] = React.useState(EditorState.createWithContent(stateFromHTML(policy === null ? '' : policy.cookiePolicy.content)))
    const dispatch = useAppDispatch();
    const [startDate, setStartDate] = useState(policy === null ? new Date() : new Date(policy?.cookiePolicy.effectiveDate!));

    React.useEffect(() => {
        dispatch(getPolicyAsync());
    }, [dispatch])

    const newSchema = Yup.object().shape({
        content: Yup.string().required('required'),
    });

    const containerStyles = {
        marginBottom: 10,
        marginTop: 30,
        maxWidth: 400,
    };

    const formik = useFormik({
        initialValues: {
            effectiveDate: policy === null ? '' : policy.cookiePolicy.effectiveDate || '',
            content: policy === null ? '' : policy.cookiePolicy.effectiveDate || ''
        },
        validationSchema: newSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                let updatedPolicy: IPolicy = JSON.parse(JSON.stringify(policy));

                values.content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
                values.effectiveDate = startDate;

                console.log(values);

                updatedPolicy.cookiePolicy.content = values.content;
                updatedPolicy.cookiePolicy.effectiveDate = values.effectiveDate;

                dispatch(updatePolicyAsync(updatedPolicy)).then(() => {
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

    const { handleSubmit } = formik;

    return (
        <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
                <DivPrivacyContent>
                    <h3>{policy?.cookiePolicy.name}</h3>
                    <div
                        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                        style={containerStyles}
                    >
                        <DatePicker
                            id="datePicker-1"
                            value={startDate}
                            onChange={value => setStartDate(value)}
                            label="Effective Date"
                            labelAlignment='left'
                            formatStyle="large"
                        />
                    </div>
                </DivPrivacyContent>

                <DivPrivacyDescription>
                    {editorState &&
                        <Editor
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                        />
                    }
                </DivPrivacyDescription>
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

const DivPrivacyContent = styled.div`
margin: 0px 75px;
padding-left: 15px;
@media (max-width: 820px){
    margin: 15px;
    padding-left: 5px;
}
border-bottom: 0.5px solid rgba(111, 139, 164, 0.6);

    *{
        margin: 0px;
        padding: 0px;
        text-align: left;
    }
    h3{
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        color: #3B566E;
    }
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: justify;
        color: #3B566E;
        padding: 15px 0px;
    }
`;

const DivPrivacyDescription = styled.div`
text-align: left;
margin: 0px 75px;
padding-top: 45px;
padding-left: 15px;
@media (max-width: 820px){
    margin: 15px;
    padding-left: 5px;
}
    *{
    color: #6F8BA4;
    }
`;

export default CookiePolicyForm