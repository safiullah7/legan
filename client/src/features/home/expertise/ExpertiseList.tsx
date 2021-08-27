import React from 'react'
// import styled from 'styled-components';
import ExpertiseListItem from './ExpertiseListItem';
import { IExpertiseContentListItem } from '../../../models/home';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { useAppDispatch } from '../../../store.hooks';
import { addLegalExpertiseContent } from '../home.slice';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
    contentList: IExpertiseContentListItem[],
};

const ExpertiseList: React.FC<IProps> = (
    { contentList }
) => {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    const dispath = useAppDispatch();

    const handleAdd = () => {
        const id = uuidv4();
        dispath(addLegalExpertiseContent({
            id: id,
            heading: 'Heading',
            subHeading: 'SubHeading',
            panel: `panel${id}`,
            icon: '/world.png',
            content: `<ul>
            <li>you can edit the content by editing the content</li>
            </ul>`
        }))
    }

    return (
        <DivContentList>
            {
                contentList.map(expertiseListItem => {
                    return <ExpertiseListItem
                        key={expertiseListItem.id}
                        item={expertiseListItem}
                        expanded={expanded}
                        itemCanDelete={contentList.length === 1}
                        handleChange={handleChange}
                        setExpanded={setExpanded}
                    />
                })
            }
            <Button className="add-btn" fullWidth variant="contained" color="primary" onClick={handleAdd} >
                Add More Collapse
            </Button>
        </DivContentList>
    )
}

const DivContentList = styled.div`
.add-btn{
    margin: 15px 0px;
}
`
export default ExpertiseList;
