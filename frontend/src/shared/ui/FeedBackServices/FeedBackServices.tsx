import React from 'react';
import * as classes from './feedbackservices.module.scss'
interface IFeedBackServices {
    image: string,
    score: number,
    count: number
}
const FeedBackServices = ({image, score, count} : IFeedBackServices) => {
    return (
        <div className={classes.feedbackservices}>
            <div className={classes.image}>
                <img src={image}/>
            </div>
            <div className={classes.stars}>
                <p className={'medium-text'}>{score}</p>
            </div>
            <p className={'small-text'}>{count} отзывов</p>
        </div>
    );
};

export default FeedBackServices;