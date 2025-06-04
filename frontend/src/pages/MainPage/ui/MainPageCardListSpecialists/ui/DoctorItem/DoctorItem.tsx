import React from 'react';
import * as classes from './doctoritem.module.scss'

interface IDoctorItemProps {
    name: string
    speciality: string
    grade: string
    exp: number
    reviews: number
    img: string
}
const DoctorItem = ({name, speciality, grade, exp, reviews, img} : IDoctorItemProps) => {
    return (
        <div className={classes.doctor_item}>
            <div className={classes.doctor_information}>
                <div>
                    {/*<p className={'medium-text'} style={{fontSize: '21px', fontWeight: '420'}}>{name}</p>*/}
                    <p className={`medium-text ${classes.name}`}>{name}</p>
                    <p className={'small-text description-text'}>{speciality}</p>
                </div>
                <div>
                    {
                        grade
                            ? <p className={`small-text ${classes.grade}`}>{'главный врач'}</p>
                        : null
                }
                    <div className={classes.bottom_content}>
                        <div>
                            <p className={'small-text description-text'}>
                                {exp} лет
                            </p>
                            <p className={'small-text description-text'}>
                                опыта
                            </p>
                        </div>
                        <div>
                            <p className={'small-text description-text'}>{reviews}</p>
                            <p className={'small-text description-text'}>отзывов</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.doctor_img}>
                <img src={img}/>
            </div>
        </div>
    );
};

export default DoctorItem;