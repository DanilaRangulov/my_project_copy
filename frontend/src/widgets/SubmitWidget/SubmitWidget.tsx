import React from 'react';
import * as classes from './submitwidget.module.scss'
import Button from "shared/ui/Button/Button";
import iphone_icon from "shared/assets/images/welcome/welcome1920x1440.png"
const SubmitWidget = () => {
    return (
        <div className={'container'}>
            <div className={`${classes.submit_widget}`}>
                <div className={classes.form}>
                    <p className={`large-text`}>Онлайн запись</p>
                    <p className={'medium-text'}>Это быстро и просто!</p>
                    <Button color={'white'} align={'flex-start'}><p className={'small-text'}>Запись на прием</p></Button>
                </div>
                <div className={classes.scene}>
                    <img src={iphone_icon}/>
                </div>
            </div>
        </div>
    );
};

export default SubmitWidget;