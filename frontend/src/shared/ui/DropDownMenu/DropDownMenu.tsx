import React from 'react';
import * as classes from './dropdownmenu.module.scss'
const DropDownMenu = () => {
    const items = ['Новороссийская', 'Богатырская']
    const [open, setOpen] = React.useState(false);
    const [currentValue, setCurrentValue] = React.useState('Новороссийская');
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleClose = (element: string) => {
        setCurrentValue(element);
        setOpen(false);
    }
    return (
        <div className={classes.dropdown}>
            <p className={'large-text'}>Обзор клиники на &nbsp;</p> <div className={classes.testss}><a className={'large-text'} onClick={handleOpen}>{currentValue}</a>
            {open
                ? (
                    <ul className={classes.menu}>
                        {items.map((item) => (
                            <li className={'large-text'} onClick={() => handleClose(item)}>{item}</li>
                        ))}
                    </ul>
                )
                : null
            } </div>
        </div>
    );
};

export default DropDownMenu;