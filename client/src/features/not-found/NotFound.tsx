import React from 'react'
import styled from 'styled-components';

const NotFound = () => {
    return (
        <>
            <DivNotFound>
                <h1>Error 404, Page Not Found</h1>
                <h3>The link may be broken, or the page may have been removed.</h3>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            </DivNotFound>
        </>
    )
}
const DivNotFound = styled.div`
margin-top: 80px;
padding-top: 30px;
@media (max-width:  600px){
    padding: 0px;
}
h1, h3{
    max-width:90%;
    z-index: 12;
    position: relative;
    top: 45px;
    padding: 10px 0px;
    margin: 0px auto;
}
h1{
    color: #006699;
}
h3{
    color: #6F8BA4;
    font-weight: 300;
}
img{
    max-width: 90%;
    z-index: 10;
    margin: 0px;
    position: relative;
    top: -45px;
    padding: 0px;
}
`;

export default NotFound;
