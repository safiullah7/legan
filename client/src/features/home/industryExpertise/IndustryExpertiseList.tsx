import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { IIndustryExpertiseContentList } from '../../../models/home';
import { AddCircle, Delete, Edit } from '@material-ui/icons';
import parser from 'html-react-parser';
import { useAppDispatch } from '../../../store.hooks';
import { addIndustryExpertiseTab, deleteIndustryExpertiseTab } from '../home.slice';
import { TransitionProps } from '@material-ui/core/transitions';
import IndustryExpertiseEditContent from './IndustryExpertiseEditContent';
import { v4 as uuidv4 } from 'uuid';

interface IPropsIdustryExpertiseContentList {
    isLoggedIn: boolean,
    contentList: IIndustryExpertiseContentList[],
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const IndustryExpertiseList: React.FC<IPropsIdustryExpertiseContentList> = (
    { isLoggedIn, contentList }
) => {
    const [editMode, setEditMode] = React.useState<true | false>(false);
    const [active, setActive] = React.useState<string>('0');
    const [openDialog, setOpenDialog] = React.useState<true | false>(false);
    const defaultValue = contentList.filter((item) => (active === item._id))[0];
    const [activeTabsContent, setActiveTabsContent] = React.useState<string>(defaultValue !== undefined ? defaultValue.list : '');
    const handleActiveClick = (id: string) => {
        if (id !== active) {
            setActive(id);
            setEditMode(false);
        }
    }
    React.useEffect(() => {
        console.log(contentList);
        const newValue = contentList.filter((item) => (active === item._id))[0];
        setActiveTabsContent(
            newValue !== undefined ? newValue.list : ''
        );
    }, [active, contentList, openDialog]);
    const handleAddTab = () => {
        dispatch(
            addIndustryExpertiseTab({
                _id: uuidv4(),
                heading: 'Tab Heading',
                list: `<ol>
                <li>You can edit content by clicking the editing icon</li>
                </ol>`
            })
        );
    }
    const handleDeleteTab = () => {
        if (contentList.length > 1) {
            handleCloseDialog();
            let index = contentList.findIndex(item => item._id === active);
            index === 0 ? index++ : index--;
            setActive(contentList[index]._id);
            dispatch(
                deleteIndustryExpertiseTab({ id: active })
            );
        }
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const dispatch = useAppDispatch();
    return (
        <>
            <DivIndustryTabs>
                <Grid container>
                    <Grid className="btns-grid" item xl={3} md={4} sm={4} xs={4}>
                        {contentList &&
                            contentList.map(btn => {
                                return (
                                    <Button
                                        key={btn._id}
                                        className={active === btn._id ? 'active' : 'non-active'}
                                        onClick={() => handleActiveClick(btn._id)}
                                        fullWidth
                                    >
                                        {btn.heading}
                                    </Button>
                                )
                            })
                        }
                        {isLoggedIn && (
                            <Button className="add-more-tabs-btn" color="primary" variant="contained" fullWidth onClick={handleAddTab}>
                                <AddCircle className="icon" />
                                Add more Tabs
                            </Button>
                        )}
                    </Grid>
                    <Grid className="list-grid" item xl={9} md={8} sm={8} xs={8}>
                        {
                            editMode ?
                                <IndustryExpertiseEditContent
                                    heading={defaultValue.heading}
                                    list={defaultValue.list}
                                    id={defaultValue._id}
                                    setEditMode={setEditMode}
                                />
                                :
                                <div className="active-tab">
                                    <div className="active-tab-content">
                                        {parser(activeTabsContent)}
                                    </div>
                                    {isLoggedIn && (
                                        <div className="control-btns">
                                            <Grid container spacing={2}>
                                                <Grid item md={6} sm={6} xs={12}>
                                                    <Button color="primary" variant="contained" size="small" fullWidth onClick={() => setEditMode(true)}>
                                                        <Edit className="icon" />
                                                        Edit
                                                    </Button>
                                                </Grid>
                                                <Grid item md={6} sm={6} xs={12}>
                                                    <Button color="secondary" variant="contained" size="small" disabled={contentList.length <= 1} fullWidth onClick={() => setOpenDialog(true)}>
                                                        <Delete className="icon" />
                                                        Delete
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    )}
                                </div>
                        }
                    </Grid>
                </Grid>
                <Dialog
                    className="dialog-box"
                    open={openDialog}
                    keepMounted
                    TransitionComponent={Transition}
                    transitionDuration={500}
                    onClose={handleCloseDialog}
                    fullWidth
                >
                    <DialogTitle style={{ textAlign: 'center' }} >
                        Confirmation Message
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure, you want to delete the tab ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ width: '150px' }} size="small" onClick={handleCloseDialog} color="secondary" variant="contained">
                            NO
                        </Button>
                        <Button style={{ width: '150px' }} size="small" onClick={handleDeleteTab} color="primary" variant="contained">
                            YES
                        </Button>
                    </DialogActions>
                </Dialog>
            </DivIndustryTabs>
        </>
    );
};

const DivIndustryTabs = styled.div`
button{
    display: inline-block !important;
    border-radius: 8px;
    text-align: left;
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
 .active-tab{
     display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: stretch;
    align-content: center;
    height: 100%;
     .control-btns{
        margin-left: 15px;
        button{
            text-align: center;
            padding: 6px 0px;
            *{
                display: flex;
                align-items: center;
                align-content: center;
            }
            .icon{
                padding: 0px 5px;
                width: 18px;
            }
        }
    }
     .active-tab-content{
         *{
            color: rgba(111, 139, 164, 1);
         }
        p,li{
            font-size: 15px;
            font-weight: 400;
            padding:10px;
            @media (max-width: 750px){
                font-size: 11px;
            }
            @media (max-width: 550px){
                font-size: 10px;
                padding: 0px 0px 5px 5px;
            }
        }
    }
 }
.add-more-tabs-btn{
    margin-top: 15px;
    padding: 6px 0px 6px 10px;
        *{
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: flex-start;
        }
        .icon{
            padding: 0px 5px;
            width: 18px;
        }
    
}
.dialog-box{
}
`;
export default IndustryExpertiseList;
