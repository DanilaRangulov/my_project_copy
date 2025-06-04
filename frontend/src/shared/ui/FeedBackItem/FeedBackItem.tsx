import React, {ReactNode, useEffect, useRef, useState} from 'react';
import * as classes from './feedbackitem.module.scss'
import male_photo from 'shared/assets/images/feedback/male.png'
import female_photo from 'shared/assets/images/feedback/female.png'
import stars from 'shared/assets/images/feedback/score.png'
import quotation from 'shared/assets/images/quotation/quotation_gray.png'
interface IButton {
    photo: string,
    gender: string,
    name: string,
    text: string,
    score: number,
    date: string,
    service: string
}
const returnDefaultPhoto = (gender: string) => {
    if (gender === 'male') {
        return <img src={male_photo}></img>
    } else {
        return <img src={female_photo}></img>
    }
}
const FeedBackItem = ({photo, gender, name, text, score, date, service} : IButton) => {
    const itemTextRef = useRef(null)
    const [isOverflow, setIsOverflow] = useState<boolean>(false)
    useEffect(() => {
        const element = itemTextRef.current
        if (element) {
            setIsOverflow(element.scrollHeight > element.clientHeight)
        }
    },[])
    return (
        <div className={classes.feed_back_item}>
            <div className={classes.top_content}>
                <div className={classes.name_photo}>
                    {
                        photo
                            ? <img src={photo}/>
                            : returnDefaultPhoto(gender)
                    }
                    <p className={'medium-text'}>{name}</p>
                </div>
                <div className={classes.stars}>
                    <p className={'large-text'}>{score}</p>
                    <div>
                        <img src={stars}/>
                    </div>
                </div>
            </div>
            <div className={classes.feedback_text}>
                <div className={classes.quotation}>
                    <img src={quotation}/>
                </div>
                <div className={classes.feedback_content}>
                    <p className={`small-text ${classes.testtext}`} ref={itemTextRef}>{text}</p>
                    {
                        isOverflow
                            ? <p className={classes.overflow_marker}>Показать полностью..</p>
                            : null
                    }
                </div>
            </div>
            <div className={classes.bottom_content}>
                <p className={'small-text'}>{date}</p>
                <p className={'small-text'}>{service}</p>
            </div>
        </div>
    );
};

export default FeedBackItem;