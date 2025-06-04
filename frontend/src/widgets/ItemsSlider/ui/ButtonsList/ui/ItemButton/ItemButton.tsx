import React, {useEffect, useState} from 'react';
import * as classes from './ItemButton.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
interface ItemButtonProps {
    id: number;
    activeId: number;
    setActiveId: (id: number) => void;
    slideById: Function;
    title: string,
}
const ItemButton = (props: ItemButtonProps) => {
    const [isActive, setActive] = useState<boolean>(false)
    const mods: Record<string, boolean> = {
        [classes.active]: isActive,
    }
    const {id, title, activeId, setActiveId, slideById} = props;
    const onClickHandle = (id: number) => {
        console.log(id)
        setActiveId(id)
        slideById(id)
    }
    useEffect(() => setActive(activeId === id), [activeId])

    return (
        <div className={classNames(classes.ItemButton, mods)} onClick={() => onClickHandle(id)}>
            <p className={'small-text'}>{title}</p>
            <div className={classes.circle}></div>
        </div>
    );
};

export default ItemButton;