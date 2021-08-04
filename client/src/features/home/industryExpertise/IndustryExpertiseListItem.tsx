import React from 'react';
import styled from 'styled-components';

interface IindustryExpertiseContentList {
    activeTabsContent: string[],
}


const IndustryExpertiseListItem: React.FC<IindustryExpertiseContentList> = (
    { activeTabsContent }
) => {
    return (
        <>
            <DivIndustryTabsListContent>
                <ol>
                    {
                        activeTabsContent.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ol>
            </DivIndustryTabsListContent>
        </>
    );
};

const DivIndustryTabsListContent = styled.div`
ol{
    li{
        font-size: 15px;
        padding: 0px 0px 15px 15px;
        color: rgba(111, 139, 164, 1);
        font-weight: 400;
        @media (max-width: 750px){
            font-size: 11px;
        }
        @media (max-width: 550px){
            font-size: 10px;
            padding: 0px 0px 5px 5px;
        }
    }
}
`;

export default IndustryExpertiseListItem;
