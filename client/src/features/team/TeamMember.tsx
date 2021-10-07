import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import parse from 'html-react-parser';
import BodyHeader from '../../controls/BodyHeader';
import { useSelector } from 'react-redux';
import { getTeamContentSelector, setTeamMember } from './team.slice';
import { useAppDispatch } from '../../store.hooks';
import { Skeleton } from '@material-ui/lab';
import NotFound from '../not-found/NotFound';
type IId = {
    memberId: string,
}
let member: any;
const TeamMember = () => {
    const [loading, setLoading] = React.useState<false | true>(true);
    const { memberId } = useParams<IId>();
    const id = memberId;
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        dispatch(setTeamMember({ memberId: id }));
    }, [id, dispatch]);
    const { selectedTeamMember } = useSelector(getTeamContentSelector);
    console.log(selectedTeamMember);
    if (selectedTeamMember !== null && selectedTeamMember !== undefined)
        member = selectedTeamMember;
    return (
        <>
            {
                !loading ?
                    (member !== null && member !== undefined) ?
                        <DivOurTeamMember>
                            <Container className="container" maxWidth="xl">
                                <BodyHeader
                                    heading="Our Team"
                                    headingColor="rgba(0, 102, 153, 1)"
                                    subHeading={member.name}
                                    SubHeadingColor="rgba(59, 86, 110, 1)"
                                    path="/team"
                                />
                                <Grid container className="member">
                                    <Grid className="member-info" item md={4} sm={4} xs={12}>
                                        <img src={member.imgURL} alt={member.name} />
                                        <h3>{member.name}</h3>
                                        <p>{member.title}</p>
                                    </Grid>
                                    <Grid className="member-description" item md={8} sm={8} xs={12}>
                                        {parse(member.Description)}
                                    </Grid>
                                </Grid>
                            </Container>
                        </DivOurTeamMember> : <NotFound />
                    :
                    <DivOurTeamMember>
                        <Container className="container" maxWidth="xl">
                            <BodyHeader
                                heading="Our Team"
                                headingColor="rgba(0, 102, 153, 1)"
                                subHeading={'loading'}
                                SubHeadingColor="rgba(59, 86, 110, 1)"
                                path="/team"
                                loading={!loading}
                            />
                            <Grid container className="member">
                                <Grid className="member-info" item md={4} sm={4} xs={12}>
                                    {
                                        <Skeleton variant="circle" width="50%" height="222px" style={{ margin: '0px auto' }} />
                                    }
                                    <h3>{<Skeleton variant="text" width="60%" height="30px" style={{ margin: '0px auto' }} />}</h3>
                                    <p>{<Skeleton variant="text" width="60%" height="30px" style={{ margin: '0px auto' }} />}</p>
                                </Grid>
                                <Grid className="member-description" item md={8} sm={8} xs={12}>
                                    {
                                        <div className="">
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="60%" height="15px" />
                                            <br />
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="60%" height="15px" />
                                            <br />
                                            <Skeleton variant="text" width="30%" height="30px" />
                                            <br />
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="100%" height="18px" style={{ margin: '3px auto' }} />
                                            <Skeleton variant="text" width="60%" height="15px" />
                                        </div>
                                    }
                                </Grid>
                            </Grid>
                        </Container>
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
