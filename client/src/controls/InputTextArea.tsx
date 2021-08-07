import React from 'react'
import styled from 'styled-components';

interface IPropsTextArea {
    name: string,
    placeholder: string,
    required: true | false,
}

const InputTextArea: React.FC<IPropsTextArea> = (
    { name, placeholder, required }
) => {
    return (
        <>
            <DivInput>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    required={required}
                />
            </DivInput>
        </>
    );
};

const DivInput = styled.div`
display: inline-block;
 textarea {
     resize: none;
    padding: 6px 15px;
    font-size: 12px;
    width: 200px;
    height: 90px;
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
 }

`;

export default InputTextArea;
