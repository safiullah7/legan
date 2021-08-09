import React from 'react'
import styled from 'styled-components';
import Select from 'react-select';

type country = {
    value: string,
    label: string,
}

const InputSelect = () => {
    const optionsArray: country[] = [
        { value: 'pakistan', label: 'pakistan' },
        { value: 'inda', label: 'inda' },
        { value: 'england', label: 'england' }
    ];

    const customTheme = (theme: any) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary: '#C1D9EE',
                borderRadius: 8,
                primary25: 'rgba(193, 217, 238, 1)',
                neutral0: 'rgba(248, 252, 254, 1)',
            }
        }
    }
    const customStyles = {
        option: (provided: any) => ({
            ...provided,
            color: 'rgba(111, 139, 164, 1)',
            fontWeight: 500,
        }),
        control: (base: any, state: any) => ({
            ...base,
            paddingRight: '15px',
        })
    };
    return (
        <>
            <DivInput>
                <Select
                    classNamePrefix="select"
                    isClearable={true}
                    isLoading={false}
                    isDisabled={false}
                    isRtl={false}
                    isSearchable={true}
                    isMulti={false}
                    name="country"
                    options={optionsArray}
                    styles={customStyles}
                    theme={customTheme}
                    components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                />
                <img src="selectIcon.png" alt="dropDown" />
            </DivInput>
        </>
    );
};

const DivInput = styled.div`
    display: inline-block;
    width: 100%;
    height: 40px;
    max-width: 250px;
    @media (max-width: 150px){
        max-width: 200px; 
    }
    img{
        position: relative;
        top: -25px;
        z-index: 1;
        left: 110px;
        width: 15px;
    }
`;

export default InputSelect;
