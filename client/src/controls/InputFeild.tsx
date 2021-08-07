import React from 'react'
import styled from 'styled-components';

interface IPropsInput {
    name: string,
    type?: string,
    placeholder: string,
    required: true | false,
}

const InputFeild: React.FC<IPropsInput> = (
    { name, type, placeholder, required }
) => {
    return (
        <>
            <DivInput>
                <input
                    placeholder={placeholder}
                    type={type === undefined ? 'text' : type}
                    name={name}
                    required={required}
                />
            </DivInput>
        </>
    );
};

const DivInput = styled.div`
 display: inline-block;
 input {
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
 }
`;
export default InputFeild;
