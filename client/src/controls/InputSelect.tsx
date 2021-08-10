import React from 'react'
import styled from 'styled-components';
import useElementSize from '../hooks/useElemetSize';

type country = {
    key: number,
    value: string,
    label: string,
}

const InputSelect = () => {
    const optionsArray: country[] = [
        { key: 1, value: 'pakistan', label: 'pakistan' },
        { key: 2, value: 'inda', label: 'inda' },
        { key: 3, value: 'england', label: 'england' }
    ]
    const refShow = React.useRef(null);
    const { height } = useElementSize(refShow);
    const [showDropDown, setShowDropDown] = React.useState<true | false>(false);
    const [selectValue, setSelectValue] = React.useState<string>('');
    const handleShow = () => {
        setShowDropDown((showDropDown) => !showDropDown);
    }
    const handleValue = (value: string) => {
        setSelectValue(value);
    }
    return (
        <>
            <DivInput showDropDown={showDropDown} height={`${height * (optionsArray.length + 1)}px`} onClick={handleShow}>
                <input value={selectValue} placeholder="Select" disabled required />
                <img src="selectIcon.png" alt="select" />
                <ul>

                    <li onClick={() => handleValue('')}>Select</li>
                    {
                        optionsArray.map(item => {
                            return <li ref={refShow} onClick={() => handleValue(item.value)} key={item.key}>{item.label}</li>
                        })
                    }
                </ul>
            </DivInput>
        </>
    );
};

interface IPropsStyled {
    height: string,
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
        padding: 6px 15px;
        cursor: pointer;
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
        @media (max-width: 550px){
            width: 150px;
        }
 }
    img{
        width: 15px;
        position: relative;
        top: -20px;
        left: 100px;
        @media ( max-width: 550px){
            left: 75px;
        }
        cursor: pointer;
    }
    ul{
        background-color: #F8FCFE;
        list-style-type: none;
        border-radius: 6px;
        padding: 0px;
        margin: 0px;
        width: 230px;
        position: absolute;
        margin-top: -15px;
        transition: all 0.5s ease-in-out;
        height: ${(props) => props.showDropDown ? `${props.height}` : '0px'};
        overflow: hidden;
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
            padding: 5px 0px;
            &:hover{
                transition: all 0.25s ease-in-out;
                background-color: #C1D9EE;
            }
        }
    }
`;

export default InputSelect;
