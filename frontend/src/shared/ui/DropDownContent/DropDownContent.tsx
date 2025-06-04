import React, {useEffect, useRef, useState} from 'react';
import * as classes from './DropDownContent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
interface DropDownContentProps {
    title: string
    content: string;
}
const DropDownContent = (props: DropDownContentProps) => {
    const {title, content} = props;
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isPlusActive, setIsPlus] = useState<boolean>(false)
    const onClickHandle = () => {
        setIsPlus((prevState) => !prevState)
        setIsOpen(!isOpen)
    }
    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
    }
    const plusMods: Record<string, boolean> = {
        [classes.active]: isPlusActive,
    }
    return (
        <div className={classes.DropDownContent}>
            <div className={classes.top_content}>
                {/*<button onClick={onClickHandle}>*/}
                {/*    {*/}
                {/*        isOpen*/}
                {/*            ? <p>-</p>*/}
                {/*            : <p>+</p>*/}
                {/*    }*/}
                {/*</button>*/}
                <div className={classNames(classes.plusminus, plusMods)} onClick={onClickHandle}></div>
                <p className={`medium-text ${classes.title}`}>{title}</p>
            </div>
            <div className={classNames(classes.hiddenContentWrapper, mods)}>
                <div className={classes.hiddenContentBody}>
                    <p className={'small-text'}>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default DropDownContent;