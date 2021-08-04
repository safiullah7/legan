import React from 'react';
import styled from 'styled-components';
import { Remove, Add } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import useElementSize from '../../hooks/useElemetSize';
import { IPropsFAQsListItem } from '../../models/faqs';


const FAQsListItem: React.FC<IPropsFAQsListItem> = (
    { question, answer }
) => {
    const [showAnswer, setShowAnswer] = React.useState<true | false>(false);
    const handleClick = () => {
        setShowAnswer((showAnswer) => !showAnswer);
    }
    const refShow = React.useRef(null);
    const { height } = useElementSize(refShow);
    console.log(height);
    return (
        <>
            <DivFAQsListItem height={height}>
                <h3 className={showAnswer ? 'show-question' : ''}>
                    <span className='question'>
                        {question}
                    </span>
                    <IconButton onClick={handleClick} className="icon">
                        {
                            showAnswer ? <Remove /> : <Add />
                        }
                    </IconButton></h3>
                <div className={showAnswer ? 'show-answer' : 'hide-answer'}>
                    <p ref={refShow}>{answer}</p>
                </div>
            </DivFAQsListItem>
        </>
    )
}

interface IPropsStyled {
    height: number,
}

const DivFAQsListItem = styled.div<IPropsStyled>`
max-width: 750px;
h3{
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    line-height: 19px;
    color: #6F8BA4;
    transition: all 0.25s ease-in-out;
    margin: 5px;
    .question{
        width: 85%;
    }
    .icon{
        cursor: pointer;
        color: #6F8BA4;
        @media(max-width: 600px){
            position: relative;
            top: -10px;
        }
    }
}
.show-question{
        transition: all 0.25s ease-in-out;
    }
.show-answer{
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    height: ${(props) => (props.height + 15)}px;
 }
p{
    transition: all 0.5s ease-in-out;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    padding-right: 30px;
    color: #6F8BA4;
    width: 85%;
}
.hide-answer{
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    height: 0px;
}
`;

export default FAQsListItem;
