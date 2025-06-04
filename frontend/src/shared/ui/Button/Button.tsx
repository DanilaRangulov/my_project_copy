import React, {HTMLProps, ReactComponentElement, ReactDOM, ReactNode, useState} from 'react';
import * as classes from './button.module.scss'
import styled from "styled-components";
import {classNames} from "shared/lib/classNames/classNames";
interface IButton {
    color: string,
    children: ReactNode,
    onClickHandle?: any,
    align?: string,
    additionalClassname?: string
    mods?: Record<string, boolean | string>
}

const colors: Array<{
    colorName: string; hexBackground: string,
    fontColor: string, borderColor: string,
    hoverBackgroundColor: string, hoverFontColor: string,
    hoverBorderColor: string
}> = [
    {
        colorName: 'blue', hexBackground: '#6C7FE3',
        fontColor: '#FFFF', borderColor: '#6C7FE3',
        hoverBackgroundColor: '#4d64e1', hoverFontColor: '#FFFF',
        hoverBorderColor: '#4a63e3'
    },
    {
        colorName: 'white', hexBackground: 'transparent',
        fontColor: '#FFFF', borderColor: '#FFFF',
        hoverBackgroundColor: '#FFFF', hoverFontColor: '#000000',
        hoverBorderColor: '#FFFF'
    },
    {
        colorName: 'black', hexBackground: 'transparent',
        fontColor: '#000000', borderColor: '#393939',
        hoverBackgroundColor: '#393939', hoverFontColor: '#FFFF',
        hoverBorderColor: '#393939'
    },
    {
        colorName: 'gray', hexBackground: 'transparent',
        fontColor: '#787878', borderColor: '#787878',
        hoverBackgroundColor: 'transparent', hoverFontColor: '#000000',
        hoverBorderColor: '#000000'
    }
]

function colorPicker(color: string) {
    return colors.find(({colorName}) => colorName === color);
}
const StyledButton = styled.button<{color: string, align: string}>`
    align-self: ${p => p.align};
    background-color: ${p => colorPicker(p.color).hexBackground};
    border: 2px solid ${p => colorPicker(p.color).borderColor};
    color: ${p => colorPicker(p.color).fontColor};
    &:hover {
        background-color: ${p => colorPicker(p.color).hoverBackgroundColor};
        border: 2px solid ${p => colorPicker(p.color).hoverBorderColor};
        p {
            color: ${p => colorPicker(p.color).hoverFontColor} !important;
        }
    }
    p {
        color: ${p => colorPicker(p.color).fontColor};
    }
`

const Button = ({color, children, onClickHandle, align, additionalClassname, mods}: IButton) => {
    return (
        <StyledButton
            align={align}
            color={color}
            className={classNames(classes.button, mods, [additionalClassname])}
            // className={classes.button }
            onClick={onClickHandle}
        >
            {children}
        </StyledButton>
    );
};

export default Button;