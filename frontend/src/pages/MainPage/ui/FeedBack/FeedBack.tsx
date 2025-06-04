import React from 'react';
import DoctorItem from "pages/MainPage/ui/MainPageCardListSpecialists/ui/DoctorItem/DoctorItem";
import FeedBackItem from "shared/ui/FeedBackItem/FeedBackItem";
import * as classes from "./feedback.module.scss"
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import Button from "shared/ui/Button/Button";
const FeedBack = () => {
    return (
        <div className={`container ${classes.feedback}`}>
            <ContainerDescription
                head={'Отзывы'}
                description={''}
                position={'center'}
            />
            <div className={classes.cards_list}>
                <FeedBackItem
                    gender={'male'}
                    name={'Дмитрий'}
                    photo={''}
                    text={'' +
                        'Лучшая стоматология, что я знаю. Лечусь много лет у Татьяны Сергеевны. ' +
                        'Даже переехав в Москву приезжаю конкретно на зубки - сюда. Доброжелательно,' +
                        ' чисто, профессионально. Забыла что такое больные зубы, при постоянном наблюдении. ' +
                        'Спасибо, что есть такие врачи.'}
                    score={5}
                    service={'Я. Карты'}
                    date={'5 июня 2024 г.'}
                />
                <FeedBackItem
                    gender={'female'}
                    name={'Лидия'}
                    photo={''}
                    text={'' +
                        'Замечательная клиника! Очень доброжелательный и приветливый персонал. Врачи отлично знают свое дело. Прихожу сюда не первый раз и всегда остаюсь довольна! Рекомендую!Замечательная клиника! Очень доброжелательный и приветливый персонал. Врачи отлично знают свое дело. Прихожу сюда не первый раз и всегда остаюсь довольна! Рекомендую!'}
                    score={5}
                    service={'Я. Карты'}
                    date={'5 июня 2024 г.'}
                />
                <FeedBackItem
                    gender={'male'}
                    name={'Дмитрий'}
                    photo={''}
                    text={'' +
                        'Лучшая стоматология, что я знаю. Лечусь много лет у Татьяны Сергеевны. ' +
                        'Даже переехав в Москву приезжаю конкретно на зубки - сюда. Доброжелательно,' +
                        ' чисто, профессионально. Забыла что такое больные зубы, при постоянном наблюдении. ' +
                        'Спасибо, что есть такие врачи.'}
                    score={5}
                    service={'Я. Карты'}
                    date={'5 июня 2024 г.'}
                />
            </div>
            <Button color={'gray'}><p className={'small-text'}>Ещё отзывы</p></Button>
        </div>
    );
};

export default FeedBack;