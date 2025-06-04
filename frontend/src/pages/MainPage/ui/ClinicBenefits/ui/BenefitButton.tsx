import React, {ReactEventHandler} from 'react';
import * as classes from './benefit_button.module.scss'
interface IBenefitButton {
    children: any
    setCurrentButton: any
    activeButton: any
    buttonId: string
    svgIcon: React.ReactNode
    onClickFunction: any
}
const BenefitButton = ({children, svgIcon, setCurrentButton, activeButton, buttonId, onClickFunction} : IBenefitButton) => {
    const onClickHandle = (event: any) => {
        setCurrentButton(buttonId)
        onClickFunction()
    }
    return (
        <button className={`${classes.benefit_button} ${activeButton == buttonId ? classes.active_button : null}`} onClick={onClickHandle}>
            {svgIcon}
            {children}
        </button>
    );
};

export default BenefitButton;