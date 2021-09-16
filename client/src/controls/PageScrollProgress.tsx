import React from 'react'
import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';

const PageScrollProgress = () => {
    const [width, setWidth] = React.useState<number>(0);
    const calculateScroll = () => {
        let value = window.scrollY / (document.body.scrollHeight - (1.7 * window.innerHeight));
        if (value > 0 && value < 1) {
            setWidth(Math.floor(value * 100));
        }
        else if (value > 1)
            setWidth(100);
        else
            setWidth(0);
    }
    document.addEventListener('scroll', calculateScroll);
    window.addEventListener('resize', calculateScroll)
    React.useEffect(() => {
        if (window.scrollY === 0)
            setWidth(0);
        return () => {
            document.removeEventListener('scroll', calculateScroll);
            window.removeEventListener('resize', calculateScroll);
        }
    }, [setWidth])
    return (
        <DivPageScrollProgress>
            <LinearProgress className="progress-bar" value={width} variant="determinate" />
        </DivPageScrollProgress>
    );
};

const DivPageScrollProgress = styled.div`
position: fixed;
top: 85px;
z-index: 1000;
width: 100%;
margin-left: -15px;
@media (max-width: 820px){
    top: 110px;
}
@media(max-width: 550px){
    top: unset;
    bottom: 60px;
}
.progress-bar{
    height: 5px;
    outline: none;
    background-color: transparent;
    .MuiLinearProgress-barColorPrimary {
    background-color:rgba(34, 147, 251, 1);
}
}
`;

export default PageScrollProgress;
