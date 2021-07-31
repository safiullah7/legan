import { Accordion, AccordionDetails, AccordionSummary, Grid, ListItem } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import React from 'react'
import styled from 'styled-components';

interface IExpertiseContent {
    heading: string,
    subHeading: string,
    list: string[],
    panel: string,
    expanded: string | false,
    handleChange: (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => void;
}

const ExpertiseListItem: React.FC<IExpertiseContent> = (
    { heading, subHeading, list, expanded, handleChange, panel }
) => {
    return (
        <>
            <Accordion square expanded={expanded === panel} onChange={handleChange(panel)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ backgroundColor: 'rgba(249, 252, 254, 1)' }}>
                    <ListHead>
                        <h3>
                            {heading}
                        </h3>
                        <p>
                            {subHeading}
                        </p>
                    </ListHead>
                </AccordionSummary>
                <AccordionDetails>
                    <ListItems>
                        <Grid container>
                            <Grid item md={2} sm={1} className="timeline">
                                <hr />
                            </Grid>
                            <Grid item md={10} sm={11} xs={11}>
                                {
                                    list.map(listItem => {
                                        return (
                                            <li className="list-item" key={listItem}>
                                                {listItem}
                                            </li>
                                        );
                                    })
                                }
                            </Grid>
                        </Grid>
                    </ListItems>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
const ListHead = styled.div`
border: none;
*{
    display: inline-block;
}
h3{
    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 102, 153, 0.96);
    padding-right: 15px;
    margin: 10px 0px;
}
p{
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
    color: rgba(0, 102, 153, 0.96);
}    
`;

const ListItems = styled.div`

.list-item{
    font-size: 15px;
    font-weight: 300;
    color: #006699;
    padding-left: 15px;
}
.timeline{
    display: flex;
    flex-flow: column;
    hr{
        height: 100%;
        color: rgba(0, 102, 153, 0.15);
    }
}
`;

export default ExpertiseListItem;
