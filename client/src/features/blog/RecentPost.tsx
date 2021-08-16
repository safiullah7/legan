import { Button, Grid, Tab, Tabs } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { IBlog, ICategory } from '../../models/blog';
interface IPropsRecentBlog {
    recentBlog: IBlog[],
    categories: ICategory[],
}
const RecentPost: React.FC<IPropsRecentBlog> = (
    { recentBlog, categories }
) => {
    const [selectedTab, setSelectedTab] = React.useState<number>(0);
    const handleClick = (value: number) => {
        if (selectedTab !== value)
            setSelectedTab(value);
    }
    return (
        <>
            <DivRecentBlogs>
                <div className="heading">
                    <h3>Recent Post</h3>
                    <div className="hr"></div>
                </div>
                <DivCategoriesScrollBar>
                    <Tabs
                        className="tabs"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs categories"
                    >
                        {
                            categories.map(item => {
                                return <Tab className={selectedTab === item.id ? 'tab selected-tab' : 'tab'} key={item.id} onClick={() => handleClick(item.id)} label={item.name} />
                            })
                        }
                    </Tabs>
                </DivCategoriesScrollBar>
                <Grid container>
                    <Grid className="blogs-container" container md={9} sm={7} xs={12}>
                        {
                            recentBlog.map(blog => {
                                return (
                                    <Grid className="blog-container" key={blog.id} item md={4} sm={12} xs={12}>
                                        <Grid item md={12} sm={12} xs={12} className="blog-image" >
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
                                                {blog.heading}
                                            </h4>
                                            <p className="blog-content">
                                                {blog.content}
                                            </p>
                                            <Button className="blog-btn">
                                                READ MORE
                                            </Button>
                                        </Grid>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                    <Grid className="blog-categoriers" item md={3} sm={5} xs={12}>
                        <div className="categories">
                            <h2>CATEGORIES</h2>
                            {
                                categories.map(item => {
                                    return <p className={selectedTab === item.id ? 'active-tab' : ''} onClick={() => handleClick(item.id)} key={item.id}>
                                        {
                                            selectedTab === item.id && <FiberManualRecord className="active-icon" />
                                        }
                                        {item.name}
                                    </p>
                                })
                            }
                        </div>
                    </Grid>
                </Grid>
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
                background-image: url("blog-image.jpg");
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
        border-bottom: 1px solid #006699;
    }
}
`;

export default RecentPost;
