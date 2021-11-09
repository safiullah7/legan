import { Button, Grid, Tab, Tabs } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import { Pagination } from '@material-ui/lab';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IBlog, ICategory, blog, } from '../../models/blog';
interface IPropsRecentBlog {
    allBlogs: IBlog[],
    categories: ICategory[],
    page: number,
    noOfPages: number
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setTotalBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>,
}
const RecentPost: React.FC<IPropsRecentBlog> = (
    { allBlogs, categories, page, setPage, noOfPages, setTotalBlogs }
) => {
    const [selectedTab, setSelectedTab] = React.useState<number>(0);
    const [blogs, setFilteredBlogs] = React.useState(allBlogs)
    const scrollRef = React.useRef(null);
    const handleTabClick = (_id: number, value: string) => {
        console.log("ID: ", _id);
        console.log("VALUE: ", value);
        if (selectedTab !== _id) {
            setSelectedTab(_id);
            setBlogs(value);
        }
    }
    const setBlogs = (value: string) => {
        console.log(value);
        if (value === '')
            setFilteredBlogs(allBlogs);
        else
            setFilteredBlogs(allBlogs.filter(item => item.type === value));
        setPage(1);
    }
    const handlePageChange = (pageNo: number) => {
        (scrollRef as any).current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (page !== pageNo)
            setPage(pageNo);
    }
    return (
        <>
            <DivRecentBlogs>
                <div ref={scrollRef} className="heading">
                    <h3>Recent Post</h3>
                    <div className="hr"></div>
                </div>
                <DivCategoriesScrollBar>
                    <Tabs
                        value={selectedTab}
                        className="tabs"
                        textColor="primary"
                        indicatorColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs categories"
                    >
                        {
                            categories.map((item) => {
                                return <Tab className={selectedTab === item._id ? 'tab selected-tab' : 'tab'} key={item._id} value={item._id} onClick={() => handleTabClick(item._id, item.value)} label={item.name} />
                            })
                        }
                    </Tabs>
                </DivCategoriesScrollBar>
                <Grid container>
                    <Grid className="blogs-container" container md={9} sm={7} xs={12}>
                        {
                            blogs.length > 0 ?
                                blogs.map(blog => {
                                    return (
                                        <Grid className="blog-container" key={blog._id} item md={4} sm={12} xs={12}>
                                            <Grid item md={12} sm={12} xs={12} className="blog-image" style={{ backgroundImage: `url(${blog.imageUrl})` }} >
                                            </Grid>
                                            <Grid className="blog-content-container" item md={12} sm={12} xs={12}>
                                                <p className="blog-type">
                                                    {blog.type}
                                                </p>
                                                <p className="blog-date-name">
                                                    <span className="date">
                                                        {blog.date}&nbsp;
                                                    </span>
                                                    <span className="name">
                                                        / {blog.writer}
                                                    </span>
                                                </p>
                                                <h4>
                                                    {blog.title}
                                                </h4>
                                                <p className="blog-content">
                                                    {blog.content}
                                                </p>
                                                <Link style={{ textDecoration: 'none' }} to={`/blog/${blog._id}`}>
                                                    <Button className="blog-btn">
                                                        READ MORE
                                                    </Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    );
                                })
                                :
                                <h1>No posts found</h1>
                        }
                    </Grid>
                    <Grid className="blog-categoriers" item md={3} sm={5} xs={12}>
                        <div className="categories">
                            <h2>CATEGORIES</h2>
                            {
                                categories.map(item => {
                                    return <p className={selectedTab === item._id ? 'active-tab' : ''} onClick={() => handleTabClick(item._id, item.value)} key={item._id}>
                                        {
                                            selectedTab === item._id && <FiberManualRecord className="active-icon" />
                                        }
                                        {item.name}
                                    </p>
                                })
                            }
                        </div>
                    </Grid>
                </Grid>
                <div>
                    <Pagination
                        className="pagination"
                        hideNextButton
                        hidePrevButton
                        page={page}
                        color="primary"
                        count={noOfPages}
                        size="medium"
                        onChange={(e: any, pageNo: number) => handlePageChange(pageNo)}
                    />
                </div>
            </DivRecentBlogs>
        </>
    )
}

const DivRecentBlogs = styled.div`
.heading{
    margin-bottom: 30px;
    text-align: left;
    h3{
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #6F8BA4;
        padding-right: 30px;
        background-color: #F9FCFE;
        z-index: 25;
        display: inline-block;
        position: relative;
    }
    .hr{
        border-bottom: 0.5px solid rgba(111, 139, 164, 0.6);
        position: relative;
        top: -35px;
        z-index: 20;
        width: 100%;
    }
}
.blogs-container{
    .blog-container{
        text-align: left;
        background: #F9FCFE;
        box-shadow: 0px 0px 5px 2px rgba(111, 139, 164, 0.2);
        border-radius: 4px;
        transition: all 0.25s ease-in-out;
        &:hover{
            transition: all 0.25s ease-in-out;
            box-shadow: 0px 0px 8px 2px rgba(111, 139, 164, 0.4);
        }
        .blog-image{
                width: 100%;
                min-height: 200px;
                background-repeat: no-repeat;
                background-size: cover;
                @media(max-width: 600px){
                   min-height :250px;
                }
        }
        .blog-content-container{
            padding: 15px;
            .blog-type {
                display: inline-block;
                font-size: 10px;
                margin: 0px;
                font-weight: 500;
                padding: 3px 18px;
                color: white;
                background-color: #2293FB;
                border-radius: 5px;
            }
            .blog-date-name{
                margin: 0px;
                float: right;
                color: #9D9D9D;
                position: relative;
                .date{
                    font-size: 10px;
                }
                .name{
                    font-size: 13px;
                }
            }
            h4{
                font-weight: 500;
                font-size: 18px;
                line-height: 21px;
                color: #3B566E;
                margin: 20px 0px;
            }
            .blog-content{
                font-weight: 300;
                font-size: 12px;
                line-height: 15px;
                color: #6F8BA4;
            }
            .blog-btn{
                color: #006699;
                font-size: 12px;
                font-weight: 500;
            }
            
        }
    margin: 0px 12% 30px 0px;
    @media(max-width: 960px){
        margin: 0px 30px 30px 30px;
    }
    @media (max-width: 600px){
        margin: 0px 0px 15px 0px;
    }
}
}
.categories{
    padding: 15px;
    text-align: left;
    margin-left: 45px;
    background-color: rgba(249, 252, 254, 1);
    box-shadow: 0px 1px 4px 1px #E2E9F2;
    transition: all 0.25s ease-in-out;
    border-radius: 5px;
    @media (max-width: 600px){
        display: none;
    }
    &:hover{
        transition: all 0.25s ease-in-out;
        box-shadow: 0px 1px 5px 2px #E2E9F2;
    }
    *{
        border-bottom: 0.7px solid #E2E9F2;
        padding: 10px 0px 10px 15px;
        margin: 0px;
    }
    h2{
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: #3B566E;
    }
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.05em;
        color: #6F8BA4;
        cursor: pointer;
        transition: all 0.25s ease-in-out;
        &:hover{
            transition: all 0.25s ease-in-out;
            color: #006699;
        }
        .active-icon{
            border: none;
            font-size: 12px;
            margin: 0px;
            padding: 0px;
            position: relative;
            left: -18px;
            top: 1px;
            margin-right: -12px;
            color: #006699;
        }
    }
    .active-tab{
        color: #006699 !important;
    }
}
`;

const DivCategoriesScrollBar = styled.div`
display: none;
@media (max-width: 600px){
    display : unset;
    .tabs{
        border-bottom: 1px solid lightgrey;
        margin-bottom: 30px;
    }
    .tab{
            font-weight: 500;
            font-size: 12px;
            line-height: 21px;
            letter-spacing: 0.05em;
            color: #6F8BA4;
            cursor: pointer;
            border-bottom: 1px solid transparent;
            transition: all 0.25s ease-in-out;
            &:hover{
                transition: all 0.25s ease-in-out;
                color: #006699;
        }
    }
    .selected-tab{
        color: #006699 !important;
        border-bottom: 1px solid #006699 !important;
    }
}
.PrivateTabIndicator-colorPrimary-2{
    background-color: #006699 !important;
}
`;

export default RecentPost;
