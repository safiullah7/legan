import { Accordion, AccordionDetails, AccordionSummary, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Slide } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser';
import EditIcon from '@material-ui/icons/Edit';
import ExpertiseListItemForm from './ExpertiseListItemForm';
import { IExpertiseContentListItem } from '../../../models/home';
import { Delete } from '@material-ui/icons';
import { useAppDispatch } from '../../../store.hooks';
import { deleteLegalExpertiseContent } from '../home.slice';
import { TransitionProps } from '@material-ui/core/transitions';

interface IExpertiseContent {
    item: IExpertiseContentListItem,
    itemCanDelete: true | false,
    expanded: string | false,
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
    handleChange: (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => void,
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const ExpertiseListItem: React.FC<IExpertiseContent> = (
    { item, expanded, handleChange, itemCanDelete, setExpanded }
) => {
    const [editMode, setEditMode] = useState(false);
    const [openDialog, setOpenDialog] = React.useState<true | false>(false);
    const scrollRef = React.useRef(null);
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const updateEditMode = () => {
        setEditMode(!editMode);
        setTimeout(() => {
            setExpanded(item.panel);
        }, 10)
    }
    const dispatch = useAppDispatch();
    const handleDeleteTab = (id: string) => {
        dispatch(deleteLegalExpertiseContent({ id }));
    }
    const handleDialogOpen = () => {
        setTimeout(() => {
            setExpanded(item.panel);
        }, 10)
        setOpenDialog(true);
    }
    return (
        <>
            <DivCollapse ref={scrollRef}>
                {!editMode ? (
                    <Accordion square expanded={expanded === item.panel} variant="elevation"
                        style={{ border: 'none', outline: 'none', boxShadow: 'none' }} onChange={handleChange(item.panel)}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                            style={{ backgroundColor: 'rgba(249, 252, 254, 1)' }}>
                            <DivListHead>
                                <img src={item.icon} alt={`${item.icon}`} />
                                <h3>
                                    {item.heading}
                                </h3>
                                <p>
                                    {item.subHeading}
                                </p>
                                <IconButton disabled={itemCanDelete} className="del-icon" aria-label="delete" onClick={() => handleDialogOpen()}>
                                    <Delete color={itemCanDelete ? 'disabled' : 'secondary'} fontSize="inherit" />
                                </IconButton>
                                <IconButton className="edit-icon" aria-label="edit" onClick={() => setEditMode(true)}>
                                    <EditIcon color="primary" fontSize="inherit" />
                                </IconButton>
                            </DivListHead>
                        </AccordionSummary>
                        <AccordionDetails style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
                            <DivListItems>
                                <Grid container>
                                    <Grid item md={2} sm={1} className="timeline">
                                        <img src="/elipse.png" alt="elipse" />
                                        <img src="/line.png" alt="line" />
                                        <img src="/elipse.png" alt="elipse" />
                                    </Grid>
                                    <Grid item md={10} sm={11} xs={11}>
                                        {parse(item.content)}
                                    </Grid>
                                </Grid>
                            </DivListItems>
                        </AccordionDetails>
                    </Accordion>
                ) : (
                    <ExpertiseListItemForm
                        scrollRef={scrollRef}
                        item={item}
                        updateEditMode={updateEditMode} />
                )}

            </DivCollapse>
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
                    <Button style={{ width: '150px' }} size="small" onClick={() => handleDeleteTab(item.id)} color="primary" variant="contained">
                        YES
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
const DivCollapse = styled.div`
    border: none;
    outline: none;
    *{
        border: none;
        outline: none;
        box-shadow: none;
    }
        box-shadow: 0px 1px 6px 3px rgba(188, 205, 220, 0.25);
`;
const DivListHead = styled.div`
border: none;
border-color: transparent !important;
outline-color: transparent !important;
width: 100%;
*{
    display: inline-block; 
}
h3{
    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 102, 153, 0.96);
    padding-right: 15px;
    margin: 8px 0px;
}
p{
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
    color: rgba(0, 102, 153, 0.96);
}
img{
    padding-right: 20px;
    position: relative;
    width: 24px;
    height: 24px;
    top: 7px;
}
.edit-icon{
    float: right;
    position: relative;
    top: -3px;
}
.del-icon{
    float: right;
    position: relative;
    top: -3px;
    margin: 0px 3px;
}
`;

const DivListItems = styled.div`

li{
    font-size: 15px;
    font-weight: 700;
    color: #006699;
    padding-left: 15px;
    width: 100%;
}
.timeline{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    align-items: center; 
}
`;

export default ExpertiseListItem;
