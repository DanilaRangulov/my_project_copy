import React from 'react';
import * as classes from './GreetingsBlock.module.scss'
import implantion from "shared/assets/images/services/testing_greetingblock.png";
import Button from "shared/ui/Button/Button";
import isMobile from "shared/functions/isMobile";
import {GreetingBlockModel} from "widgets/GreetingBlock/model/GreetingBlockModel";

const GreetingBlock = (props : GreetingBlockModel) => {
    const {title, textContent, imageUrl} = props;
    return (
        <div className={`container ${classes.GreetingBlock}`}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h1 className={'h1_heading'}>{title}</h1>
                </div>
                <div className={classes.description}>
                    <p className={'medium-text'}>
                        {textContent}
                    </p>
                </div>
                {
                    isMobile
                        ? <div className={classes.entity_photo_between}>
                            <img src={imageUrl}/>
                        </div>
                        : '123'
                }
                <div className={classes.buttons}>
                    <Button color={'white'}><p className={'small-text'}>Записаться</p></Button>
                </div>
            </div>
            <div className={classes.entity_photo}>
                <img src={implantion}/>
            </div>

        </div>
    );
};

export default GreetingBlock;