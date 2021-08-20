import { Accordion, AccordionDetails, AccordionSummary, Grid, IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser';
import EditIcon from '@material-ui/icons/Edit';
import ExpertiseListItemForm from './ExpertiseListItemForm';
import { IExpertiseContentListItem } from '../../../models/home';

interface IExpertiseContent {
    item: IExpertiseContentListItem,
    expanded: string | false,
    handleChange: (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => void;
}

const ExpertiseListItem: React.FC<IExpertiseContent> = (
    { item, expanded, handleChange }
) => {
    const [editMode, setEditMode] = useState(false);

    const updateEditMode = () => {
        setEditMode(!editMode);
    }
    return (
        <>
            <DivCollapse>
                {!editMode ? (
                    <Accordion square expanded={expanded === item.panel} variant="elevation"
                        style={{ border: 'none', outline: 'none', boxShadow: 'none' }} onChange={handleChange(item.panel)}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                            style={{ backgroundColor: 'rgba(249, 252, 254, 1)' }}>
                            <DivListHead>
                                <img src={`/${item.icon}.png`} alt={`${item.icon}`} />
                                <h3>
                                    {item.heading}
                                </h3>
                                <p>
                                    {item.subHeading}
                                </p>
                                <IconButton aria-label="edit" onClick={() => setEditMode(!editMode)}>
                                    <EditIcon fontSize="inherit" />
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
                        item={item}
                        updateEditMode={updateEditMode} />
                )}

            </DivCollapse>
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
    top: 7px;
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
