import { Button, Dialog, Slide, } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import React from 'react'
import styled from 'styled-components';
import { iconsArray } from '../models/common';

interface IIconPicker {
    index: number,
    image: string,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const IconPicker: React.FC<IIconPicker> = ({
    index, image, setFieldValue
}) => {
    const [openDialog, setOpenDialog] = React.useState<true | false>(false);
    const [selectedIcon, setSelectedIcon] = React.useState<string>(image);
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleOpenDialog = () => {
        setOpenDialog(true);
    }
    const handleSelectedIcon = (item: string) => {
        if (selectedIcon !== item) {
            setSelectedIcon(item);
            handleCloseDialog();
        }
    }
    React.useEffect(() => {
        setFieldValue(`services.${index}.imageUrl`, selectedIcon);
    }, [selectedIcon, index, setFieldValue]);
    return (
        <DivIconPicker>
            <Button variant="contained" size="small" fullWidth className="icon-btn" color="primary" onClick={handleOpenDialog}>
                Change Icon
            </Button>
            <Dialog
                open={openDialog}
                keepMounted
                transitionDuration={500}
                TransitionComponent={Transition}
                onClose={handleCloseDialog}
                fullWidth
                scroll='body'
            >
                <h3 style={{ margin: '15px 0px', textAlign: 'center', }}>Select Icon</h3>
                <DivDialogContent>
                    {
                        iconsArray.map((icon, index) => <div className={`logo-changer-div ${icon.imgUrl === selectedIcon && 'selected'}`} key={index} onClick={() => handleSelectedIcon(icon.imgUrl)}>
                            <object aria-label={icon.imgUrl} className={`logo-changer-image`} data={icon.imgUrl} type="image/svg+xml" ></object>
                        </div>)
                    }
                </DivDialogContent>
            </Dialog>
        </DivIconPicker>
    )
}

const DivIconPicker = styled.div`

.icon-btn{
    padding: 5px 0px;
}
`;

const DivDialogContent = styled.div`
margin: 5px 15px;
width: 95%;
padding-top: 15px;
border-top: 0.5px solid lightgrey;
display: inline-flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
align-content: center;
.logo-changer-image{
    transition: all 0.25s ease-in-out;
    margin: 5px;
    padding: 5px;
    width: 50px;
    height: 50px;
    pointer-events: none;
    
}
.logo-changer-div{
    margin: 5px;
    cursor: pointer;
    &:hover{
        transition: all 0.25s ease-in-out;
        box-shadow: 0px 0px 2px 1px #77ADCA;
        background-color: #F9FCFE;
    }
}
.selected{
    box-shadow: 0px 0px 2px 1px #77ADCA;
    background-color: #F9FCFE;
}
`;

export default IconPicker;
