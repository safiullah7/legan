import React, {useEffect} from "react";
import styled from "styled-components";
import { IPropsFAQsListItem } from "../../models/faqs";
import FAQsListItem from "./FAQsListItem";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getAuthSelector } from "../login/auth.slice";
import { Remove, Add } from '@material-ui/icons';
import parse from 'html-react-parser';
import useElementSize from '../../hooks/useElemetSize';

interface IPropsFAQsList {
    FaqsList: IPropsFAQsListItem[];
    setEditMode: Function;
    setSelectedFAQ: Function;
}

const FAQsList: React.FC<IPropsFAQsList> = ({ FaqsList, setEditMode, setSelectedFAQ }) => {
    const [showAnswer, setShowAnswer] = React.useState<true | false>(false);
    const [toggledAnswers, setToggledAnswers] = React.useState<boolean[]>([]);
    const refShow = React.useRef(null);
    const { height } = useElementSize(refShow);
    const { isLoggedIn } = useSelector(getAuthSelector);
    

    const handleClick = () => {
        setShowAnswer((showAnswer) => !showAnswer);
    }

    useEffect(() => {
        setToggledAnswers(new Array(FaqsList.length).fill(false))
    }, [])

    const toggledAnswer = (index: any) => {
        let answers = toggledAnswers
        answers[index] = !answers[index]
        setToggledAnswers(answers)
    }

    return (
        <>
            <DivFAQsList>
                {FaqsList.map((QAs, index) => {
                    return (
                        <div key={index}>
                            <DivFAQsListItem height={height}>
                                <h3 className={showAnswer ? "show-question" : ""}>
                                    <span className="question">{QAs.question}</span>
                                    {isLoggedIn && (
                                        <IconButton aria-label="edit" color="primary" onClick={() => { setEditMode(true); setSelectedFAQ(QAs); }}>
                                            <EditIcon fontSize="inherit" />
                                        </IconButton>
                                    )}
                                    <IconButton onClick={() => { handleClick(); toggledAnswer(index); }} className="icon">
                                        {toggledAnswers[index] ? <Remove /> : <Add />}
                                    </IconButton>
                                </h3>
                                <div className={toggledAnswers[index] ? "show-answer" : "hide-answer"}>
                                    <p ref={refShow}>{parse(QAs.answer)}</p>
                                </div>
                            </DivFAQsListItem>
                        </div>
                    );
                })}
            </DivFAQsList>
        </>
    );
};

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

const DivFAQsList = styled.div`
    margin: 0px 75px;
    padding-top: 75px;
    padding-left: 15px;
    text-align: left;

    @media (max-width: 820px) {
        margin: 15px;
        padding-top: 45px;
        padding-left: 5px;
    }
`;

export default FAQsList;
