import React, {useLayoutEffect, useRef} from 'react';
import * as classes from './welcome.module.scss'
import quotation from 'shared/assets/images/icons/quotations/quotation_blue.png'
import 'app/styles/index.scss'
import image1920 from 'shared/assets/images/welcome/welcome1920x1440.png'
import image1600 from 'shared/assets/images/welcome/welcome1600x1200.png'
import image1280 from 'shared/assets/images/welcome/welcome1280x960.png'
import image1080 from 'shared/assets/images/welcome/welcome1080x810.png'
import doctor from 'shared/assets/images/welcome/doctor_welcome.png'
import doctor2 from 'shared/assets/images/command/chief.png'
import defa from "shared/assets/images/test/def.png";
import Button from "shared/ui/Button/Button";
import {useMediaQuery} from "react-responsive";
const Welcome = () => {
    // function
    const isMobile = useMediaQuery({query: '(max-width: 600px)'});
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return (
        <div className={classes.welcome}>
            <div className={`container ${classes.content}`}>
                <div className={classes.welcome_title}>
                    <p className={'large-text'}>Ваша улыбка - наша забота</p>
                </div>
                {/*<div className={classes.welcome_content}>*/}
                {/*    <div className={classes.welcome_left_content}>*/}
                {/*<div className={classes.welcome_title_mobile}>*/}
                {/*    <p className={'large-text'}>Ваша улыбка - наша забота</p>*/}
                {/*</div>*/}
                <div className={classes.welcome_quote}>
                    <img src={quotation} alt={'Error'}/>
                    <p className={'small-text'}>
                        Более 10 лет мы помогаем нашим пациентам обрести здоровую и красивую улыбку.
                        В Nika Clinic вы найдете профессиональных врачей, современные методы лечения
                        и индивидуальный подход к каждому пациенту.
                    </p>
                </div>
                <div className={classes.welcome_dignities}>
                    <div>
                        <p className={'large-text'}>
                            11
                        </p>
                        <p className={'small-text'}>
                            лет на рынке
                        </p>
                    </div>
                    <div>
                        <p className={'large-text'}>
                            29
                        </p>
                        <p className={'small-text'}>
                            врачей
                        </p>
                    </div>
                    {/*</div>*/}
                    {/*<div className={classes.doctor_photo}>*/}
                    {/*    <img src={doctor2}/>*/}
                    {/*    <div className={classes.doctor_about}>*/}
                    {/*        <p className={'medium-text'}>Жорняк Татьяна Сергеевна</p>*/}
                    {/*        <p className={'medium-text'}>стоматолог-хирург</p>*/}
                    {/*        <p className={'small-text'}>подробнее о враче</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className={classes.buttons}>
                    <Button color={'blue'}><p className={'small-text'}>Подробнее</p></Button>
                    {
                        isMobile
                            ? <Button color={'black'}><p className={'small-text'}>Рейтинги</p></Button>
                            : <Button color={'black'}><p className={'medium-text'}>Рейтинги</p></Button>
                    }

                </div>
                {/*<div className={classes.welcome_right_content}>*/}
                {/*    <picture>*/}
                {/*        <source srcSet={image1920} media="(min-width: 1900px)"/>*/}
                {/*        <source srcSet={image1600} media="(min-width: 1600px)"/>*/}
                {/*        <source srcSet={image1280} media="(min-width: 1200px)"/>*/}
                {/*        <source srcSet={image1080} media="(min-width: 1080px)"/>*/}
                {/*        <img src={defa}/>*/}
                {/*    </picture>*/}
                {/*</div>*/}
            </div>
            <div className={classes.doctor_photo}>
                <img src={doctor2}/>
                <div className={classes.doctor_about}>
                    <p className={'medium-text'}>Жорняк Татьяна Сергеевна</p>
                    <p className={'medium-text'}>стоматолог-хирург</p>
                    <p className={'small-text'}>подробнее о враче</p>
                </div>
            </div>

            {/*</div>*/}
        </div>
    );
};

export default Welcome;