import React from 'react';
import { getMember } from '../../models/team';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';
import parse from 'html-react-parser';
type teamMemberId = {
    memberId: string
};
const TeamMember = () => {
    const { memberId } = useParams<teamMemberId>();
    const member = getMember(+memberId);
    return (
        <>
            <OurTeamMember>
                <Container className="container" maxWidth="xl">
                    <h1>
                        <Link style={{ textDecoration: 'none', color: 'rgba(0, 102, 153, 1)' }} to='/team'> Our Team </Link> /
                        <span>
                            {' ' + member.name}
                        </span>
                    </h1>
                    <div className="blur-hr"></div>
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
            </OurTeamMember>
        </>
    );
};

const OurTeamMember = styled.div`
margin-top: 80px;
.container{
    background-color: rgba(249, 252, 254, 1);
    padding: 75px 0px;
    @media (max-width: 600px){
        margin-top: -15px;
    }
h1{
  color: rgba(0, 102, 153, 1);
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0px;
  span{
      color: rgba(59, 86, 110, 1);
      font-size: 20px;
      font-weight: 400;
  }
}
.blur-hr{
  height: 3px;
  width: 85px;
  background-color: rgba(34, 147, 251, 1);
  border-radius: 25px;
  margin: 12px auto;
}
}

.member{
    margin-top: 45px;
    .member-info{
    img{
        padding: 10px;
        border-radius: 50%;
        width: 200px;
        height: 215px;
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
                margin: 12px 0px;
                h5{
                    margin: 0px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 17px;
                    line-height: 20px;
                    letter-spacing: 0.05em;
                    color: #6F8BA4;
                }
                p{
                    margin: 0px;
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
