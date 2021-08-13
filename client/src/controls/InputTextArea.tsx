import React from 'react'
import styled from 'styled-components';

interface IPropsTextArea {
    name: string,
    value: string,
    placeholder: string,
    required: true | false,
    error: Boolean,
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    },
    handleBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    },
    handleReset: (e: any) => void,
}

const InputTextArea: React.FC<IPropsTextArea> = (
    { name, placeholder, required, handleChange, handleReset, value, error }
) => {
    return (
        <>
            <DivInput>
                <textarea
                    className={`${error && 'error'}`}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    onReset={handleReset}
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
    font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: grey;
    background-color: #F8FCFE;
    border: 0.5px solid #C1D9EE;
    &:hover{
        border-color: darkgrey;
    }
    &::placeholder{
        color: rgba(186, 186, 186, 1);
        font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }
    &:focus{
        outline: none;
        border-color: #575656;
    }
    @media (max-width: 550px){
        width: 150px;
    }
 }
 .error{
            border: 0.5px solid red !important;
            &:hover{
                border: 0.5px solid red !important;
                box-shadow: 0 0 0 0.5px red inset;
            }
        }
`;

export default InputTextArea;
