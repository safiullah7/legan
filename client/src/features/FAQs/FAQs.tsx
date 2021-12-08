import { Box, Container, IconButton } from '@material-ui/core'
import { AddCircle } from "@material-ui/icons";
import React from 'react'
import styled from 'styled-components'
import FAQsList from './FAQsList'
import { useSelector } from "react-redux";
import { getAuthSelector } from "../login/auth.slice";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../store.hooks";
import { getFAQAsync, getFAQContentSelector } from "./FAQs.slice";
import AddUpdateFAQ from './AddFAQ'
import { IPropsFAQsListItem } from '../../models/faqs';
import { Skeleton } from '@material-ui/lab';

const FAQs = () => {
    const { FAQs, loading } = useSelector(getFAQContentSelector);

    const [editMode, setEditMode] = React.useState<true | false>(false);
    const [selectedFAQ, setSelectedFAQ] = React.useState<IPropsFAQsListItem>();


    const { isLoggedIn } = useSelector(getAuthSelector);
    const history = useHistory();
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getFAQAsync());
    }, [dispatch]);

    return (
        <>
            <div>
                {editMode && selectedFAQ ?
                    <AddUpdateFAQ editMode={editMode} selectedFAQ={selectedFAQ} setEditMode={setEditMode} />
                    :
                    <DivFAQsContainer>
                        <Container maxWidth="xl" className="container" >
                            <DivFAQsContent>
                                <h2>Frequently Asked Questions</h2>
                            </DivFAQsContent>
                            {isLoggedIn &&
                                <IconButton size="medium" color="primary" aria-label="Add New" onClick={() => history.push('/faqs/new')}>
                                    <AddCircle />
                                </IconButton>
                            }
                            {loading ?
                                <Box>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation={false} />
                                </Box>
                                :
                                <FAQsList
                                    setEditMode={setEditMode}
                                    setSelectedFAQ={setSelectedFAQ}
                                    FaqsList={FAQs}
                                />
                            }

                        </Container>
                    </DivFAQsContainer>
                }
            </div>
        </>
    )
}

const DivFAQsContainer = styled.div`
margin-top: 80px;
@media (max-width: 600px){
    margin-top: -15px;
}
.container{
    padding: 75px 0px;
    background-color: rgba(249, 252, 254, 1);
}
`;

const DivFAQsContent = styled.div`
margin: 0px 75px;
padding-left: 15px;
@media (max-width: 820px){
    margin: 15px;
    padding-left: 5px;
}
border-bottom: 0.5px solid rgba(111, 139, 164, 0.6);
    h2{
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-align: justify;
        color: #3B566E;
    }
`;

export default FAQs;
