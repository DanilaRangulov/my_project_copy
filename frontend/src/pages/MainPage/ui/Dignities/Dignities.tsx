import React from 'react';
import * as classes from './dignities.module.scss'
import 'app/styles/index.scss'
import quotation from 'shared/assets/images/icons/quotations/quotation_white.png'
import microscope from 'shared/assets/images/dignities/icons/microscope.png'
import command from 'shared/assets/images/dignities/icons/command.png'
import love from 'shared/assets/images/dignities/icons/love.png'
import useIsMobile from "shared/functions/isMobile";
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
const Dignities = () => {
    const isMobile = useIsMobile();
    return (
        <div className={classes.dignities_wrapper}>
            <p className={`large-text ${classes.mobile_tittle}`} style={{display: isMobile ? 'flex' : 'none'}}>
                Почему тысячи пациентов выбрали
                NIKA CLINIC?
            </p>
            <div className={classes.dignities}>
                <div className={classes.left_content} style={{display: isMobile ? 'none' : 'flex'}}>
                    <p className={'large-text'}>
                        Почему тысячи пациентов выбрали
                        NIKA CLINIC?
                    </p>
                    <p className={'medium-text'}>
                        Нас ценят за профессионализм
                        и индивидуальный подход
                    </p>
                </div>
                <div className={classes.right_content}>
                    <p className={'medium-text'} style={{display: isMobile ? 'flex' : 'none'}}>
                        Нас ценят за профессионализм
                        и индивидуальный подход
                    </p>
                    <div className={classes.dignities_item}>
                        <div className={classes.block_caption}>
                            <p className={`medium-text`}>
                                Лучшее оборудование
                            </p>
                        </div>
                        <div className={classes.block_content}>
                            <div className={classes.block_description} style={{display: isMobile ? 'none' : 'flex'}}>
                                <img
                                    src={quotation}
                                    className={classes.quotation}
                                />
                                <p className={'small-text'}>
                                    Мы оснащены самым современным оборудованием,
                                    что позволяет нам предоставлять высококачественное и точное лечение для всех наших
                                    пациентов.
                                </p>
                            </div>
                            <img
                                src={microscope}
                                className={classes.bottom_image}
                            />
                        </div>
                    </div>
                    <div className={classes.dignities_item}>
                        <div className={classes.block_caption}>
                            <p className={`medium-text`}>
                                Высокая
                                квалификация
                            </p>
                        </div>
                        <div className={classes.block_content}>
                            <div className={classes.block_description} style={{display: isMobile ? 'none' : 'flex'}}>
                                <img
                                    src={quotation}
                                    className={classes.quotation}
                                />
                                <p className={'small-text'}>
                                    Врачи со стажем от 5 до 20 лет постоянно повышают квалификацию,
                                    изучают международный опыт. Клиника имеет все лицензии и сертификаты.
                                </p>
                            </div>
                            <img
                                src={command}
                                className={classes.bottom_image}
                            />
                        </div>
                    </div>
                    <div className={classes.dignities_item}>
                        <div className={classes.block_caption}>
                            <p className={`medium-text`}>
                                Персональный
                                подход
                            </p>
                        </div>
                        <div className={classes.block_content}>
                            <div className={classes.block_description} style={{display: isMobile ? 'none' : 'flex'}}>
                                <img
                                    src={quotation}
                                    className={classes.quotation}
                                />
                                <p className={'small-text'}>
                                    Индивидуальный подход к каждому пациенту: персонализированные планы лечения,
                                    учитывающие все особенности и потребности вашего здоровья.
                                </p>
                            </div>
                            <img
                                src={love}
                                className={classes.bottom_image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dignities;