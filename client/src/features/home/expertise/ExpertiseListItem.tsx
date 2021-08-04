import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';



interface IExpertiseContent {
    heading: string,
    subHeading: string,
    list: string[],
    panel: string,
    icon: string,
    expanded: string | false,
    handleChange: (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => void;
}

const ExpertiseListItem: React.FC<IExpertiseContent> = (
    { heading, subHeading, list, expanded, handleChange, panel, icon }
) => {
    return (
        <>
            <Accordion square expanded={expanded === panel} onChange={handleChange(panel)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ backgroundColor: 'rgba(249, 252, 254, 1)' }}>
                    <DivListHead>
                        <img src={`/${icon}.png`} alt={`${icon}`} />
                        <h3>
                            {heading}
                        </h3>
                        <p>
                            {subHeading}
                        </p>
                    </DivListHead>
                </AccordionSummary>
                <AccordionDetails>
                    <DivListItems>
                        <Grid container>
                            <Grid item md={2} sm={1} className="timeline">
                                <img src="/elipse.png" alt="elipse" />
                                <img src="/line.png" alt="line" />
                                <img src="/elipse.png" alt="elipse" />
                            </Grid>
                            <Grid item md={10} sm={11} xs={11}>
                                <ul>
                                    {
                                        list.map(listItem => {
                                            return (
                                                <li className="list-item" key={listItem}>
                                                    {listItem}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </Grid>
                        </Grid>
                    </DivListItems>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
const DivListHead = styled.div`
border: none;
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

.list-item{
    font-size: 15px;
    font-weight: 300;
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
