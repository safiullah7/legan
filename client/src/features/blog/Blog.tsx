import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import RecentPost from "./RecentPost";
import { blog, categories } from '../../models/blog';

const Blog = () => {
  return (
    <>
      <DivBlog>
        <Container className="container" maxWidth="xl">
          <DivBlogContainer>
            <div className="blog-head">
              <h1>
                BLOG
              </h1>
            </div>
            <DivMainBlog>
              <Grid container>
                <Grid item md={6} sm={12} xs={12} className="main-blog-image"></Grid>
                <Grid item md={6} sm={12} xs={12} className="main-blog-content">
                  <p className="blog-privacy">
                    {blog.heighlight.type}
                  </p>
                  <br />
                  <p className="blog-name-date">
                    <span className="date">
                      {blog.heighlight.date}&nbsp;
                    </span>
                    <span className="name">
                      / {blog.heighlight.writer}
                    </span>
                  </p>
                  <h1 className="blog-heading">
                    {blog.heighlight.heading}
                  </h1>
                  <p className="blog-content">
                    {blog.heighlight.content}
                  </p>
                  <Button
                    className="blog-btn"
                  >
                    READ MORE
                  </Button>
                </Grid>
              </Grid>
            </DivMainBlog>
            <RecentPost
              recentBlog={blog.recentBlogs}
              categories={categories}
            />
          </DivBlogContainer>
        </Container>
      </DivBlog>
    </>
  );
};

const DivBlog = styled.div`
margin-top: 80px;
@media (max-width: 600px){
  margin-top: -15px;
}
.container{
  padding: 75px 15px;
  background-color: #F9FCFE;
}
`;

const DivBlogContainer = styled.div`
max-width: 90%;
margin: 0px 55px;
@media (max-width: 820px){
  margin: 0px;
  max-width: 100%;
}
.blog-head{
  padding-bottom: 15px;
  border-bottom: 0.5px solid rgba(111, 139, 164, 0.4);
  margin-bottom: 45px;
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
`;

const DivMainBlog = styled.div`
transition: all 0.25s ease-in-out;
width: 100%;
min-height: 375px;
margin-bottom: 60px;
background-color: #F9FCFE;
box-shadow: 0px 0px 5px 2px rgba(111, 139, 164, 0.2);
border-radius: 4px;
&:hover{
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 8px 2px rgba(111, 139, 164, 0.35);
}
.main-blog-image{
  background-image: url("blog-laptop.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 375px;
}
.main-blog-content{
  text-align: left;
  padding: 30px 45px;
  .blog-privacy{
    min-width: 50px;
    display: inline-block;
    background: #2293FB;
    border-radius: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #FFFFFF;
    text-align: center;
    padding: 5px 18px;
  }
  .blog-name-date{
    padding: 0px;
    margin: 6px 0px;
    color: #9d9d9d;
    font-size: 15px;
    .name{
      font-weight: 500;
    }
  }
  .blog-heading{
    width: 80%;
    font-size: 27px;
    color: #3B566E;
  }
  .blog-content{
    color: #6F8BA4;
    font-size: 15px;
  }
  .blog-btn{
    color: #006699;
    font-size: 18px;
    margin-top: 15px;
  }
}
`;

export default Blog;