import React from 'react'
// import styled from 'styled-components';
import ExpertiseListItem from './ExpertiseListItem';
import { IExpertiseContentList } from '../../../models/home';


interface IProps {
    contentList: IExpertiseContentList[],
};

const ExpertiseList: React.FC<IProps> = (
    { contentList }
) => {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            {
                contentList.map(expertiseListItem => {
                    return <ExpertiseListItem
                        key={expertiseListItem.heading}
                        heading={expertiseListItem.heading}
                        subHeading={expertiseListItem.subHeading}
                        list={expertiseListItem.list}
                        panel={expertiseListItem.panel}
                        icon={expertiseListItem.icon}
                        expanded={expanded}
                        handleChange={handleChange}
                    />
                })
            }
        </>
    )
}

export default ExpertiseList;
