import { Container, Grid } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import BodyHeader from '../../../controls/BodyHeader'

interface IProps {
    loading: boolean
}

const TeamMemberLoading: React.FC<IProps> = ({ loading }) => {
    return (
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
    )
}

export default TeamMemberLoading
