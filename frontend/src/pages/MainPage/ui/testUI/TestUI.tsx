import React from 'react';
import * as classes from './testui.module.scss'
import FeedBackItem from "shared/ui/FeedBackItem/FeedBackItem";
const TestUi = () => {
    return (
        <div className={classes.testui}>
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
    );
};

export default TestUi;