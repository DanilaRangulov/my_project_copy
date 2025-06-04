import React, {useRef, useState} from 'react';
import * as classes from './burgerMenu.module.scss'
import * as events from "events";
import styled from "styled-components";
import {FALSE} from "sass";

const StyledButton = styled.button<{open: boolean}> `
        div:nth-child(1) {
          transform: ${ p => (p.open ? 'rotate(45deg)' : 'rotate(0deg)')};
        }
        div:nth-child(3) {
          transform: ${ p => (p.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
        }
        div:nth-child(2) {
          transform: ${ p => (p.open ? 'translateX(100%)' : 'translateX(0)')};
          opacity: ${ p => (p.open ? '0' : '1')};
        }
    `;
const BurgerMenu = ({isOpen, buttonHandler} : {isOpen: boolean, buttonHandler: any}) => {
    return (
        <StyledButton open={isOpen} className={classes.btn} onClick={buttonHandler}>
            <div></div>
            <div></div>
            <div></div>
        </StyledButton>
    );
};

export default BurgerMenu;