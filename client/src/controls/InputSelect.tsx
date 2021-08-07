import React from 'react'
import styled from 'styled-components';

const InputSelect = () => {
    return (
        <>
            <DivInput>
                <select placeholder="select">
                    <option disabled value="">Select</option>
                    <option className="option" value="1">1</option>
                    <option value="1">1</option>
                </select>
                <img src="/selectIcon.png" alt="select" />
            </DivInput>
        </>
    );
};

const DivInput = styled.div`
 display: inline-block;
 select {
    cursor: pointer; 
    padding: 6px 15px;
    font-size: 12px;
    width: 200px;
    border-radius: 6px;
    color: grey;
    background-color: #F8FCFE;
    border: 0.5px solid #C1D9EE;
    &:hover{
        border-color: darkgrey;
    }
    &::placeholder{
        color: rgba(186, 186, 186, 1);
    }
    &:focus{
        outline: none;
        border-color: #575656;
    }
    @media (max-width: 550px){
        width: 150px;
    }
    -webkit-appearance: none;
    
 }
 img{
     position: relative;
     width: 15px;
     left: -25px;
     top: 5px;
 }
`;

export default InputSelect;
