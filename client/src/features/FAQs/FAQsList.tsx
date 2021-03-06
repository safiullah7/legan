import React from 'react'
import styled from 'styled-components';
import { IPropsFAQsListItem } from '../../models/faqs';
import FAQsListItem from './FAQsListItem';

interface IPropsFAQsList {
    FaqsList: IPropsFAQsListItem[];
}

const FAQsList: React.FC<IPropsFAQsList> = (
    { FaqsList }
) => {
    return (
        <>
            <DivFAQsList>
                {
                    FaqsList.map(QAs => {
                        return <FAQsListItem
                            key={QAs.id}
                            id={QAs.id}
                            question={QAs.question}
                            answer={QAs.answer}
                        />;
                    })
                }
            </DivFAQsList>
        </>
    )
};

const DivFAQsList = styled.div`
    margin: 0px 75px;
    padding-top: 75px;
    padding-left: 15px;
    text-align: left;
    @media (max-width: 820px){
        margin: 15px;
        padding-top: 45px;
        padding-left: 5px;
    }
`;

export default FAQsList;
