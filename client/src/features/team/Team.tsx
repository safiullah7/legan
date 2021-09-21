import { Container, Grid } from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BodyHeader from '../../controls/BodyHeader';
import { getTeamContentSelector } from "./team.slice";
const Team = () => {
  const { team } = useSelector(getTeamContentSelector);
  const ourTeam = team;
  const [loading, setLoading] = React.useState<true | false>(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <>
      <DivOurTeam>
        <Container className="container" maxWidth="xl">
          <BodyHeader
            heading="Our Team"
            headingColor="rgba(59, 86, 110, 1)"
          />
          <Grid className="team-body" container>
            {
              ourTeam.map(member => {
                return (
                  !loading ? <Grid className="team-member-grid" key={member.id} item md={4} sm={6} xs={12}>
                    <Link to={`/team/${member.id}`}>
                      <img src={member.imgURL} alt={member.name} />
                    </Link>
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                    <Link style={{ textDecoration: 'none' }} to={`/team/${member.id}`}>
                      <MemberBtn>
                        <MoreHoriz fontSize="small" />
                        <span>Read more</span>
                      </MemberBtn>
                    </Link>
                  </Grid> :
                    <Grid md={4} sm={6} xs={12}>
                      <Skeleton variant="rect" width="40%" height="200px" style={{ margin: '0px auto 15px auto' }} />
                      <Skeleton variant="text" width="40%" height="18px" style={{ margin: '5px auto' }} />
                      <Skeleton variant="text" width="40%" height="15px" style={{ margin: '5px auto' }} />
                      <Skeleton variant="text" width="30%" height="30px" style={{ margin: '5px auto' }} />
                    </Grid>
                );
              })
            }
          </Grid>
        </Container>
      </DivOurTeam>
    </>
  );
};

const DivOurTeam = styled.div`
margin-top: 80px;
@media (max-width: 600px){
  margin-top: -15px;
}
.container{
  padding: 75px 0px;
  background-color: rgba(249, 252, 254, 1);
}
.team-body{
  margin-top: 45px;
  .team-member-grid{
    margin-bottom: 15px;
    img{
    width: 175px;
    height: 205px;
    cursor: pointer;
    object-fit: cover;
    &:hover{
      transition: all 0.25s ease-in-out;
      opacity: 0.75;
    }
  }
  h3{
    font-weight: 500;
    font-size: 16px;
    color:rgba(59, 86, 110, 1);
  }
  p{
    color: rgba(111, 139, 164, 1);
    font-size: 16px;
    font-weight: 400;
    position: relative;
    bottom: 5px;
  }
  }
}
`;

const MemberBtn = styled.button`
display: inline-flex;
align-content: center;
justify-content: center;
align-items: center;
background-color: rgba(215, 235, 246, 1);
border: none;
cursor: pointer;
border-radius: 15px;
color: rgba(111, 139, 164, 1);
font-size: 10px;
text-decoration: none;
margin-top: -6px;
span{
  font-weight: 700;
  padding:5px;
  text-decoration: none;
}
&:hover{
  box-shadow: inset 10em 0 0 0  rgba(34, 147, 251, 1);
  transition : all 0.5s ease-in-out;
  *{
    transition-delay: 0.25s;
    color: white;
  }
}
`;

export default Team;
