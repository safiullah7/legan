import { LinearProgress } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const documentHeight = document.body.scrollHeight;

const PageScrollProgress = () => {
    const [width, setWidth] = React.useState<number>(Math.floor((window.scrollY / (documentHeight - window.innerHeight - 500)) * 100));
    window.addEventListener('scroll', () => {
        setWidth(Math.floor((window.scrollY / (documentHeight - window.innerHeight - 500)) * 100));
    })
    return (
        <>
            <DivPageScrollProgress width={width}>
                <LinearProgress className="scroll" value={width > 100 ? 100 : width} variant="determinate" />
            </DivPageScrollProgress>
        </>
    );
};

interface IStyledProps {
    width: number,
};

const DivPageScrollProgress = styled.div<IStyledProps>`
transition: width 0.5s ease-in-out;
position: fixed;
top: 86px;
width: 100%;
margin-left: -15px;
height: 5px;
// border-top: 5px solid #2293FB;
z-index: 1000;
.scroll{
    background-color: transparent;
    height: 5px;
    .MuiLinearProgress-barColorPrimary {
    background-color: #2293FB;
}
}
`;

export default PageScrollProgress;
