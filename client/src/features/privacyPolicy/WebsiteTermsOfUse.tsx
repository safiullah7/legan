import { Container, IconButton } from '@material-ui/core';
import styled from 'styled-components';
import parse from 'html-react-parser'
import EditIcon from "@material-ui/icons/Edit";
import { useAppDispatch } from '../../store.hooks';
import { getAuthSelector } from '../login/auth.slice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PrivacyPolicyForm from './PrivacyPolicyForm';
import { getPolicyAsync, getPolicySelector } from './policy.slice';
import Moment from 'react-moment';
import WebsiteTermsOfUseForm from './WebsiteTermsOfUseForm';

const WebsiteTermsOfUse = () => {

    const { isLoggedIn } = useSelector(getAuthSelector);
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState<true | false>(false);
    const { policy } = useSelector(getPolicySelector);

    useEffect(() => {
        dispatch(getPolicyAsync());
    }, [dispatch])

    return (
        <>
            <DivPrivacy>
                <Container className="container" maxWidth="xl">
                    {isLoggedIn && (
                        <>
                            <IconButton aria-label="edit" color="primary" onClick={() => setEditMode(!editMode)}>
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                        </>
                    )}
                    {!editMode ? (
                        <>
                            <DivPrivacyContent>
                                <h3>{policy?.websiteTermsOfUse.name}</h3>
                                <p>Effective:  {policy && (
                                    <Moment format="YYYY/MM/DD" date={policy?.websiteTermsOfUse.effectiveDate!} />
                                )} </p>
                            </DivPrivacyContent>
                            <DivPrivacyDescription>
                                {parse(policy === null ? '' : policy?.websiteTermsOfUse.content)}
                            </DivPrivacyDescription>
                        </>
                    ) : (
                        <>
                            <WebsiteTermsOfUseForm policy={policy} setEditMode={setEditMode} />
                        </>
                    )}
                </Container>
            </DivPrivacy>
        </>
    )
}

const DivPrivacy = styled.div`
margin-top: 80px;
@media (max-width: 600px){
  margin-top: -15px;
}
.container{
    background-color: rgba(249, 252, 254, 1);
    padding: 75px 0px;
}
`;

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

export default WebsiteTermsOfUse