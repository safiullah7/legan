import React from 'react'
import styled from 'styled-components';

interface IPropsInput {
    name: string,
    type?: string,
    placeholder: string,
    required: true | false,
    value: string,
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

const InputFeild: React.FC<IPropsInput> = (
    { name, type, placeholder, required, handleChange, handleReset, value, error }
) => {
    return (
        <>
            <DivInput>
                <input
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    type={type === undefined ? 'text' : type}
                    required={required}
                    onChange={handleChange}
                    onReset={handleReset}
                    className={`${error && 'error'}`}
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
 .error{
            border: 0.5px solid red !important;
            &:hover{
                border: 0.5px solid red !important;
                box-shadow: 0 0 0 0.5px red inset;
            }
        }
`;
export default InputFeild;
