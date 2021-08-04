import { Button, Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import IndustryExpertiseListItem from './IndustryExpertiseListItem';
import { IIndustryExpertiseContentList } from '../../../models/home';


interface IPropsIdustryExpertiseContentList {
    contentList: IIndustryExpertiseContentList[],
}

const IndustryExpertiseList: React.FC<IPropsIdustryExpertiseContentList> = (
    { contentList }
) => {
    const [active, setActive] = React.useState<number>(0);
    let defaultItem = contentList.filter((item) => (active === item.id))[0].list;
    const [activeTabsContent, setActiveTabsContent] = React.useState<string[]>(defaultItem);
    const handleActiveClick = (id: number) => {
        if (id !== active)
            setActive(id);
    }
    React.useEffect(() => {
        setActiveTabsContent(
            contentList.filter((item) => (active === item.id))[0].list
        );
    }, [active, contentList]);
    return (
        <>
            <DivIndustryTabs>
                <Grid container>
                    <Grid className="btns-grid" item xl={3} md={4} sm={4} xs={4}>
                        {
                            contentList.map(btn => {
                                return (
                                    <Button
                                        key={btn.id}
                                        className={active === btn.id ? 'active' : 'non-active'}
                                        onClick={() => handleActiveClick(btn.id)}
                                        fullWidth
                                    >
                                        {btn.heading}
                                    </Button>
                                )
                            })
                        }
                    </Grid>
                    <Grid className="list-grid" item xl={9} md={8} sm={8} xs={8}>
                        <IndustryExpertiseListItem
                            activeTabsContent={activeTabsContent}
                        />
                    </Grid>
                </Grid>
            </DivIndustryTabs>
        </>
    );
};

const DivIndustryTabs = styled.div`
button{
    display: inline-block !important;
    border-radius: 8px;
    text-align: left !important;
    padding: 10px 15px;
}
.btns-grid{
    padding-right: 75px;
    @media (max-width: 960px){
        padding-right: 0px;
        button{
            border-radius: 12px 0px 0px 12px;
        }
    }
}
.list-grid{
    padding-left: 30px;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    @media(max-width: 960px){
        padding-left: 0px;
    }
}
.non-active{
    font-size: 18px;
    font-weight: 500;
    color: rgba(59, 86, 110, 1);
    @media(max-width: 750px){
        font-size: 15px;
    }
    @media (max-width: 600px){
        font-size: 12px;
    }
}
 .active{
    font-size: 18px;
    font-weight: 500;
    background-color: rgba(34, 147, 251, 1);
    color: white;
    &:hover{
        background-color: rgba(34, 147, 251, 1);
        color: white;
    }
    @media(max-width: 750px){
        font-size: 15px;
    }
    @media (max-width: 600px){
        font-size: 12px;
    }
 }
`;
export default IndustryExpertiseList;
