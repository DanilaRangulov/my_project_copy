import React from 'react';
import * as classes from './ChiefServicesItem.module.scss'
const ChiefServicesItem = ({text}: {text: string}) => {
    console.log(classes)
    return (
        <button className={classes.chief_services_item}>
            <p className={'medium-text'}>{text}</p>
        </button>
    );
};

export default ChiefServicesItem;