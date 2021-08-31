import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import styled from 'styled-components';

const BlogLoader = () => {
    return (
        <>
            <DivBlogLoader>
                <div className="blog-head">
                    <h1>
                        BLOG
                    </h1>
                </div>
                <br />
                <Grid container className="grid-container">
                    <Grid item md={6} sm={12} xs={12} style={{ minHeight: '250px' }}>
                        <Skeleton variant="rect" height="100%" width="100%" animation="pulse" />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} style={{ padding: '30px' }}>
                        <Skeleton variant="text" width="15%" height="15px" animation="pulse" />
                        <Skeleton variant="text" width="25%" height="18px" animation="pulse" /> <br />
                        <Skeleton variant="text" width="100%" height="25px" animation="pulse" /> < br />
                        <Skeleton variant="text" width="100%" height="15px" animation="pulse" />
                        <Skeleton variant="text" width="100%" height="15px" animation="pulse" />
                        <Skeleton variant="text" width="100%" height="15px" animation="pulse" />
                        <Skeleton variant="text" width="100%" height="15px" animation="pulse" />
                        <Skeleton variant="text" width="75%" height="15px" animation="pulse" /> <br /> <br />
                        <Skeleton variant="text" width="30%" height="30px" animation="pulse" />
                    </Grid>
                </Grid>
            </DivBlogLoader>
        </>
    );
};

const DivBlogLoader = styled.div`
margin-top: 80px;
padding: 75px 15px;
@media (max-width: 820px){
    margin-top: 100px;
}
@media (max-width: 600px){
    margin-top: -15px;
}
.blog-head{
  padding-bottom: 15px;
  border-bottom: 0.5px solid rgba(111, 139, 164, 0.4);
  margin: 0px 75px 30px 55px;
  @media (max-width: 820px){
    margin: 0px 0px 30px 0px;
}
  h1{
    font-weight: 500;
    font-size: 34px;
    line-height: 40px;
    color: #6F8BA4;
    text-align: left;
    margin: 0px;
    padding: 0px;
  }
}
.grid-container{
    padding: 0px 30px;
    @media (max-width: 820px){
        padding: 0px;
    }
}
`;

export default BlogLoader;
