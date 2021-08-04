import React from 'react'
import styled from 'styled-components';
import { faqsQAs } from '../../models/faqs';
import FAQsQAsItem from './FAQsQAsItem';
const FAQsQAsList = () => {
    return (
        <>
            <DivFAQsList>
                {
                    faqsQAs.map(QAs => {
                        return <FAQsQAsItem
                            key={QAs.id}
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

export default FAQsQAsList;
