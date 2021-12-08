import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container, Dialog, Grid, IconButton, Slide } from '@material-ui/core';
import parse from 'html-react-parser';
import BodyHeader from '../../controls/BodyHeader';
import { useSelector } from 'react-redux';
import { deleteTeamMemberAsync, getTeamContentSelector, setSelectedTeamMemberAsync } from './team.slice';
import { useAppDispatch } from '../../store.hooks';
import NotFound from '../not-found/NotFound';
import { getAuthSelector } from '../login/auth.slice';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom"
import TeamMemberLoading from './Skeletons/TeamMemberLoading';
import AddUpdateTeamMember from './AddUpdateTeamMember';
import { TransitionProps } from '@material-ui/core/transitions';

type IId = {
    id: string,
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const TeamMember = () => {

    const { id } = useParams<IId>();
    const dispatch = useAppDispatch();
    const { selectedTeamMember, loading } = useSelector(getTeamContentSelector);
    const { isLoggedIn } = useSelector(getAuthSelector);
    const history = useHistory();
    const [editMode, setEditMode] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    React.useEffect(() => {
        dispatch(setSelectedTeamMemberAsync(id));
    }, [id, dispatch]);

    const deleteMember = async () => {
        dispatch(deleteTeamMemberAsync(id));
        history.push('/team')
    }

    return (
        <>
            {
                !loading ?
                    (selectedTeamMember !== null && selectedTeamMember !== undefined) ?
                        (!editMode) ?
                            <DivOurTeamMember>
                                <Container className="container" maxWidth="xl">
                                    <BodyHeader
                                        heading="Our Team"
                                        headingColor="rgba(0, 102, 153, 1)"
                                        subHeading={selectedTeamMember.name}
                                        SubHeadingColor="rgba(59, 86, 110, 1)"
                                        path="/team"
                                    />
                                    {isLoggedIn && (
                                        <>
                                            <IconButton aria-label="edit" color="primary" onClick={() => setEditMode(true)}>
                                                <EditIcon fontSize="inherit" />
                                            </IconButton>
                                            <IconButton aria-label="edit" color="primary" onClick={() => setOpenDialog(true)}>
                                                <DeleteIcon color="error" fontSize="inherit" />
                                            </IconButton>
                                        </>
                                    )}
                                    <Grid container className="member">
                                        <Grid className="member-info" item md={4} sm={4} xs={12}>
                                            <img src={selectedTeamMember.imageUrl} alt={selectedTeamMember.name} />
                                            <h3>{selectedTeamMember.name}</h3>
                                            <p>{selectedTeamMember.title}</p>
                                        </Grid>
                                        <Grid className="member-description" item md={8} sm={8} xs={12}>
                                            {parse(selectedTeamMember.description)}
                                        </Grid>
                                    </Grid>
                                    <Dialog
                                        className="dialog-box"
                                        open={openDialog}
                                        keepMounted
                                        TransitionComponent={Transition}
                                        transitionDuration={500}
                                        onClose={() => setOpenDialog(false)}
                                        fullWidth
                                        scroll="body"
                                    >
                                        <div style={{ textAlign: "center", padding: 30 }}>
                                            <h3>Do you want to delete this Team Member?</h3>
                                            <Button style={{ margin: 5 }} color="secondary" size="large" variant="contained" onClick={() => { deleteMember(); setOpenDialog(false) }}>Yes</Button>
                                            <Button style={{ margin: 5 }} color="primary" size="large" variant="contained" onClick={() => setOpenDialog(false)}>No</Button>
                                        </div>
                                    </Dialog>
                                </Container>
                            </DivOurTeamMember> : <AddUpdateTeamMember selectedTeamMember={selectedTeamMember} editMode={true} />
                        : <NotFound />
                    :
                    <DivOurTeamMember>
                        <TeamMemberLoading loading={loading} />
                    </DivOurTeamMember>
            }
        </>
    );
};

const DivOurTeamMember = styled.div`
margin-top: 80px;
.container{
    background-color: rgba(249, 252, 254, 1);
    padding: 75px 0px;

    @media (max-width: 600px){
        margin-top: -15px;
    }
}

.dialog-box {
    .prompt-body {
        text-align: center;
        padding: 30px;
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

export default TeamMember;
