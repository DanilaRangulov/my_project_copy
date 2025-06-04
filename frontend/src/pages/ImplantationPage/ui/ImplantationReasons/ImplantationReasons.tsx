import React from 'react';
import {DropDownContent} from "shared/ui/DropDownContent";
import * as classes from './ImplantationReasons.module.scss'
const ImplantationReasons = () => {
    return (
        <div className={`${classes.ImplantationReasons} container`}>
            <h1 className={'h1_heading'}>Почему вам нужна эта услуга?</h1>
            <DropDownContent
                title={'Восстановление функций'}
                content={'Идеальное совпадение с натуральными зубами – никто не заметит разницы!'}
            />
            <DropDownContent
                title={'Эстетика и естественный вид'}
                content={'Идеальное совпадение с натуральными зубами – никто не заметит разницы!'}
            />
            <DropDownContent
                title={'Долговечность и надежность'}
                content={'Идеальное совпадение с натуральными зубами – никто не заметит разницы! никто не заметит разницы! никто не заметит разницы!'}
            />
        </div>
    );
};

export default ImplantationReasons;