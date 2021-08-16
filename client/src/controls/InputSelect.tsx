import { FormikErrors } from 'formik';
import React from 'react'
import styled from 'styled-components';
import useOutSideClick from '../hooks/useOutsideClick';

interface IPropsCountry {
    id: number,
    name: string,
    flag?: string,
}

interface IPropsOptions {
    name: string,
    value: string,
    error: Boolean,
    options: IPropsCountry[],
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<{
        name: string;
        email: string;
        website: string;
        country: string;
        query: string;
        details: string;
    }>>
}

const defaultcountry = {
    name: '', id: -1, flag: '',
}

const InputSelect: React.FC<IPropsOptions> = (
    { options, name, value, setFieldValue, error }
) => {
    const refClose = React.useRef(null);
    const [showDropDown, setShowDropDown] = React.useState<true | false>(false);
    const handleShow = () => {
        setShowDropDown((showDropDown) => !showDropDown);
    }
    const handleValue = (value: IPropsCountry) => {
        setFieldValue(name, value.name);
    }
    const handleCLose = () => {
        if (showDropDown)
            setShowDropDown(false);
    }
    useOutSideClick(refClose, () => handleCLose());
    return (
        <>
            <DivInput ref={refClose} showDropDown={showDropDown} onClick={handleShow}>
                <input
                    name={name}
                    className={`${error && 'error'}`}
                    value={value}
                    placeholder="Select"
                    disabled
                    required
                />
                <img className="select-icon" src="selectIcon.png" alt="select" />
                <ul>

                    <li className={value === '' ? 'selected-value' : ''} onClick={() => handleValue(defaultcountry)} style={{ justifyContent: 'center' }}>Select</li>
                    {
                        options.map(item => {
                            return <li className={value === item.name ? 'selected-value' : ''} onClick={() => handleValue(item)} key={item.id}>
                                {
                                    item.flag !== undefined ? <img src={item.flag} alt="flag" /> : ''
                                }
                                <span>{item.name.length > 25 ? `${item.name.substring(0, 25)} ...` : item.name}</span>
                            </li>
                        })
                    }
                </ul>
            </DivInput>
        </>
    );
};

interface IPropsStyled {
    showDropDown: true | false,
}

const DivInput = styled.div<IPropsStyled>`
    display: inline-block;
    height: 29px;
    border-radius: 6px;
    cursor: pointer;
    max-width: 230px;
    @media (max-width: 550px){
            width: 180px;
        }
    input {
        padding: 6px 25px 6px 15px;
        cursor: pointer;
        font-size: 12px;
        width: 191px;
        position: relative;
        right: 2px;
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
        @media (max-width: 550px){
            width: 135px;
            padding-right: 30px;
        }
 }
 .error{
            border: 0.5px solid red !important;
            &:hover{
                border: 0.5px solid red !important;
                box-shadow: 0 0 0 0.5px red inset;
            }
        }
    .select-icon{
        width: 15px;
        position: relative;
        top: -20px;
        left: 100px;
        padding: 0px;
        @media ( max-width: 550px){
            left: 70px;
        }
        cursor: pointer;
    }
    .select-flag{
        width: 18px;
        position: relative;
        top: -24px;
        right: 105px;
        @media (max-width: 550px){
            right: 80px;
        }
    }
    ul{
        background-color: #F8FCFE;
        list-style-type: none;
        border-radius: 6px;
        padding: 0px;
        margin: 0px;
        width: 225px;
        position: absolute;
        z-index: 998;
        margin-top: -18px;
        transition: all 0.5s ease-in-out;
        visibility: ${(props) => props.showDropDown ? 'unset' : 'hidden'};
        height: ${(props) => props.showDropDown ? `150px` : '0px'};
        overflow-y: scroll;
        overflow-x: hidden;
        border: 0.5px solid #C1D9EE;
        ::-webkit-scrollbar {
        width: 7px;
        }
        ::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0.06);
        }
        ::-webkit-scrollbar-thumb {
        background-color: #C1D9EE;
        border-radius: 25px;
        }
        @media (max-width: 550px){
            width: 180px;
        }
        li{
            text-decoration: none;
            font-weight: 500;
            font-size: 12px;
            cursor: pointer;
            line-height: 14px;
            color: #6F8BA4;
            padding: 8px 0px;
            text-align: left;
            display: flex;

            img{
                width: 20px;
                padding: 0px 10px 0px 10px;
                border-right: 0.5px solid rgba(0,0,0,0.25);
            }
            span{
                padding-left: 10px;
            }
            &:hover{
                transition: all 0.25s ease-in-out;
                background-color: #C1D9EE;
            }
        }
        .selected-value{
            background-color: #C1D9EE !important;
        }
    }
`;

export default InputSelect;
