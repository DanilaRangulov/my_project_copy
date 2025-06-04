import React from 'react';
import * as classes from './benefit_slide.module.scss'
import lab from 'shared/assets/images/benefit/freepik__expand__68937.jpg'
import Button from "shared/ui/Button/Button";
const BenefitSlide = () => {
    return (
        <div className={classes.benefit_slide}>
            <div className={classes.benefit_content}>
                <p className={'large-text'}>Собственная Лаборатория</p>
                <p className={'small-text'}>
                    Sample text. Click to select the text box.
                    Click again or double click to start editing the text.
                     Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Button color={'blue'} align={'flex-start'}><p className={'medium-text'}>Подробнее</p></Button>
            </div>
            <div className={classes.benefit_img}>
                <img src={lab}/>
            </div>
        </div>
    );
};

export default BenefitSlide;