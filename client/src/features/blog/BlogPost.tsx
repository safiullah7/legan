import { Container, Grid } from '@material-ui/core';
import { FavoriteBorderOutlined, FavoriteOutlined, VisibilityOutlined } from '@material-ui/icons';
import React from 'react'
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import styled from 'styled-components';
import { IStyled } from '../../models/blog';
import NotFound from '../not-found/NotFound';
import PageScrollProgress from '../../controls/PageScrollProgress';
import { Skeleton } from '@material-ui/lab';
import { getBlogByIdAsync, getBlogContentSelector } from "./blog.slice";
import { useAppDispatch } from "../../store.hooks";
import { useSelector } from "react-redux";

interface IBlogId {
    id: string,
}
const BlogPost = () => {
    const { selectedBlog, loading } = useSelector(getBlogContentSelector);
    const blogId: {id: string} = useParams();
    console.log(blogId);
    // const selectedBlog: IBlog = React.useState(selectedBlog)
    const [likedPost, setLikedPost] = React.useState<true | false>(false);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getBlogByIdAsync(blogId.id));
      }, [dispatch]);
    
      const handleLikes = () => {
        setLikedPost((likedPost) => !likedPost);
    }
    return (
        <>
            {!loading ?
                selectedBlog !== undefined && selectedBlog !== null ?
                    <DivBlogPost>
                        <Container className="container" maxWidth="xl">
                            <PageScrollProgress />
                            <DivBlogPostContainer imageUrl={selectedBlog.imageUrl}>
                                <div className="view">
                                    <VisibilityOutlined className="view-icon" />
                                    <p>
                                        {selectedBlog.views}
                                    </p>
                                </div>
                                <div className="like">
                                    {
                                        likedPost ? <FavoriteOutlined color="primary" onClick={() => handleLikes()} className="like-icon" /> :
                                            <FavoriteBorderOutlined onClick={() => handleLikes()} color="primary" className="like-icon" />
                                    }
                                    <p>
                                        {selectedBlog.likes}
                                    </p>
                                </div>
                                <Grid container>
                                    <Grid item md={9} sm={11} xs={12} className="blog-post-grid">
                                        <span className="blog-type">
                                            {selectedBlog.type}
                                        </span>
                                        <br />
                                        <div className="blog-name-date">
                                            <span className="date">
                                                <img src="/calendar-icon.png" alt="calendasr" />
                                                {selectedBlog.date}
                                            </span>
                                            <span className="name">
                                                <img src="/user-icon.png" alt="user" />
                                                {selectedBlog.writer}
                                            </span>
                                        </div>
                                        <h3 className="blog-heading">
                                            {selectedBlog.title}
                                        </h3>
                                        <img className="blog-image" src={`${selectedBlog.imageUrl}`} alt="post" />
                                        <div className="blog-content">
                                            {parse(selectedBlog.description)}
                                        </div>
                                    </Grid>
                                </Grid>
                            </DivBlogPostContainer>
                        </Container>
                    </DivBlogPost>
                    :
                    <NotFound /> :
                <DivBlogPost>
                    <Container className="container" maxWidth="xl">
                        <DivSkeleton>
                            <br />
                            <Skeleton variant="text" width="100px" height="18px" /> <br />
                            <Skeleton variant="text" width="120px" height="21px" style={{ display: 'inline-block' }} /> <Skeleton variant="text" width="120px" height="21px" style={{ display: 'inline-block', margin: '0px 30px' }} /><br /><br />
                            <Skeleton variant="text" height="60px" />
                            <Skeleton variant="rect" width="100%" height="450px" /><br />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" width="60%" />
                        </DivSkeleton>
                    </Container>
                </DivBlogPost>
            }
        </>
    );
};

const DivBlogPost = styled.div`
margin-top: 80px;
@media (max-width: 600px){
  margin-top: -15px;
}
.container{
  padding: 75px 15px;
  background-color: #F9FCFE;
}
`;

const DivBlogPostContainer = styled.div<IStyled>`
padding: 15px;
margin-left: 45px;
@media (max-width:600px){
    margin: 0px;
}
.view, .like{
    position: fixed;
    display: inline-flex;
    flex-flow: column;
    justify-content: space-between;
    z-index: 25;
    left: 30px;
    @media (max-width: 600px){
        left: 15px;
    }
    *{
        color: #6F8BA4;
    }
    p{
        padding: 10px 0px;
        font-size: 15px;
        margin: 0px;
        @media (max-width: 600px){
            font-size: 12px;
    }
    }
    .view-icon, .like-icon{
        width: 30px;
        height: 30px;
        font-weight: 100;
        @media (max-width: 600px){
            width: 20px;
            height: 20px;
        }
    }
    .like-icon{
        cursor: pointer;
    }
}
.view{
    top: 45%;
}
.like{
    top: 63%;
    @media (max-width: 600px){
        top: 60%;
    }
}
.blog-post-grid{
    text-align: left;
    padding: 15px 0px 30px 30px;
    .blog-type{
        color: white;
        background-color: #2293FB;
        border-radius: 6px;
        font-size: 12px;
        padding: 3px 12px;
        font-weight: 500;
    }
    .blog-name-date{
        margin-top: 22px;
        color: #9D9D9D;
        .name{
            margin-left: 45px;
            font-size: 18px;
            display: inline-flex;
            align-content: center;
            font-weight: 500;
            position: relative;
            top: -2px;
            img{
                width: 18px;
                height: 18px;
                padding-right: 10px;
            }
        }
        .date{
            font-size: 15px;
            display: inline-flex;
            align-content: center;
            img{
                width: 18px;
                height: 18px;
                padding-right: 10px;
            }
        }
    }
    .blog-heading{
        width: 80%;
        font-weight: 500;
        font-size: 32px;
        line-height: 37px;
        color: #3B566E;
        padding: 0px;
        margin: 15px 0px;
    }
    .blog-image{
        min-height: 300px;
        width: 100%;
        object-fit: cover;
        margin: 15px 0px;
    }
    .blog-content{
        color: #3B566E;
        text-align: justify;
        line-height: 21px;
    }
}
`;

const DivSkeleton = styled.div`
padding: 15px;
margin-left: 45px;
text-align: left;
@media (max-width:600px){
    margin: 0px;
}
`;

export default BlogPost;
