import { LinearProgress } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

// const documentHeight = document.body.scrollHeight;

// const PageScrollProgress = () => {
//     const [width, setWidth] = React.useState<number>(+Math.floor((window.scrollY / (documentHeight - window.innerHeight - 500)) * 100));
//     window.addEventListener('scroll', () => {
//         setWidth(+Math.floor((window.scrollY / ((documentHeight - window.innerHeight) - 500)) * 100));
//     })
//     console.log(Math.floor((window.scrollY / (documentHeight - window.innerHeight - 500)) * 100), width);
//     return (
//         <>
//             <DivPageScrollProgress>
//                 <LinearProgress className="scroll" value={width > 100 ? 100 : width} variant="determinate" />
//             </DivPageScrollProgress>
//         </>
//     );
// };

// const DivPageScrollProgress = styled.div`
// position: fixed;
// top: 86px;
// width: 100%;
// margin-left: -15px;
// height: 5px;
// // border-top: 5px solid #2293FB;
// z-index: 1000;
// .scroll{
//     background-color: transparent;
//     height: 5px;
//     .MuiLinearProgress-barColorPrimary {
//     background-color: #2293FB;
// }
// }
// `;

// export default PageScrollProgress;
