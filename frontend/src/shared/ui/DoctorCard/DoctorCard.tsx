import React from 'react';
import * as classes from './DoctorCard.module.scss'
import {Doctor} from "entities/Doctor";

interface IDoctorCardProps {
    name: string
    speciality: string
    grade: string
    exp: number
    reviews: number
    img: string
}
const DoctorCard = (props : Doctor) => {
    const {name, specialty, experience, countOfReviews, imageUrl} = props
    const fullImageUrl = process.env.REACT_APP_STRAPI_BASE_URL + imageUrl?.url
    return (
        <div className={classes.doctor_item}>
            <div className={classes.doctor_information}>
                <div>
                    <p className={`medium-text ${classes.name}`}>{name}</p>
                    <p className={'small-text description-text'}>{specialty}</p>
                </div>
                <div>
                {/*    {*/}
                {/*        grade*/}
                {/*            ? <p className={`small-text ${classes.grade}`}>{'главный врач'}</p>*/}
                {/*        : null*/}
                {/*}*/}
                    <div className={classes.bottom_content}>
                        <div>
                            <p className={'small-text description-text'}>
                                {experience} лет
                            </p>
                            <p className={'small-text description-text'}>
                                опыта
                            </p>
                        </div>
                        <div>
                            <p className={'small-text description-text'}>{countOfReviews}</p>
                            <p className={'small-text description-text'}>отзывов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.doctor_img}>
                <img src={fullImageUrl}/>
            </div>
        </div>
    );
};

export default DoctorCard;