import { Container, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import styled from 'styled-components';

const HomeLoader = () => {
    return (
        <>
            <DivHomeLoader>
                <Container className="container" maxWidth="xl">
                    <Grid container>
                        <Grid item md={5} sm={12} xs={12} style={{ padding: '15px' }}>
                            <br /> <br /> <br /> <br /> <br />
                            <Skeleton variant="text" animation="pulse" width="60%" height="45px" /> <br />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <br />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <br /> <br />
                            <Skeleton variant="text" animation="pulse" width="45%" height="50px" />
                        </Grid>
                        <Grid item md={7} sm={12} xs={12}>
                            <Skeleton variant="rect" animation="pulse" width="90%" height="450px" style={{ padding: '30px' }} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={5} sm={12} xs={12} style={{ padding: '15px' }}>
                            <br /> <br /> <br /> <br /> <br />
                            <Skeleton variant="text" animation="pulse" width="60%" height="45px" /> <br />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <br />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <Skeleton variant="text" animation="pulse" width="100%" height="21px" />
                            <br /> <br />
                            <Skeleton variant="text" animation="pulse" width="45%" height="50px" />
                        </Grid>
                        <Grid item md={7} sm={12} xs={12}>
                            <Skeleton variant="rect" animation="pulse" width="90%" height="450px" style={{ padding: '30px' }} />
                        </Grid>
                    </Grid>
                </Container>
            </DivHomeLoader>
        </>
    );
};

const DivHomeLoader = styled.div`
margin-top: 80px;
@media (max-width: 600px){
  margin-top: -15px;
}
`;

export default HomeLoader;
