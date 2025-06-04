import React, {ReactNode} from 'react';
import styled from "styled-components";
import * as classes from "./choise_clinic_button.module.scss"
interface IChoiseClinicButton {
    children: ReactNode,
    onClickHandle?: any,
    activeID?: string,
    buttonID?: string
}

const StyledClinicChoiseButton = styled.button<{activeID: string, buttonID: string}>`
    background-color: ${props => (props.activeID === props.buttonID) ? 'transparent' : '#f6f6f6'};
    border: ${props => (props.activeID === props.buttonID) ? '2px solid black' : '2px solid #787878'};
    &:hover {
        border: 2px solid black;
        p {
            color: black !important;
        }
    }
    p {
        color: ${props => (props.activeID === props.buttonID) ? 'black' : '#787878'};
    }
`

const ChoiseClinicButton = ({children, onClickHandle, activeID, buttonID}: IChoiseClinicButton) => {
    return (
        <StyledClinicChoiseButton
            className={classes.button}
            onClick={onClickHandle}
            activeID={activeID}
            buttonID={buttonID}
        >
            {children}
        </StyledClinicChoiseButton>
    );
};

export default ChoiseClinicButton;