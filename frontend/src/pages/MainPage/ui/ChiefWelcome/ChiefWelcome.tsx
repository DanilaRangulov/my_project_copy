import React from 'react';
import * as classes from './command.module.scss'
import chef from 'shared/assets/images/command/chief.png'
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import quotation from 'shared/assets/images/icons/quotations/quotation_blue.png'
import Button from "shared/ui/Button/Button";
import ChiefServicesItem from "pages/MainPage/ui/ChiefWelcome/ui/ChiefServicesItem";
const ChiefWelcome = () => {
    return (
        <div className={classes.command_container}>
            <ContainerDescription
                head={'Специалисты'}
                description={'Наши врачи — высококвалифицированные профессионалы, прошедшие тщательный отбор и обладающие многолетним опытом. '}
                position={'center'}
            />
            <div className={classes.command_content}>
                <div className={classes.chief_picture}>
                    <img src={chef}/>
                </div>
                <div className={classes.description}>
                    <div className={classes.chief_name}>
                        <p className={'large-text'}>Татьяна Сергеевна Жорняк</p>
                        <p className={'small-text'}>Главный врач стоматологии Ника</p>
                    </div>
                    <div className={classes.medium_content}>
                        <div className={classes.quotation}>
                            <div className={classes.quotation_content}>
                                <img src={quotation}/>
                                <p className={'medium-text'}>
                                    Для достижения отличных результатов лечения и протезирования,
                                    врач должен постоянно находиться в процессе познания и
                                    самосовершенствования
                                </p>
                            </div>
                            <p className={'small-text description-text'}>
                                — считает Татьяна Сергеевна
                            </p>
                        </div>
                        <div className={classes.experience}>
                            <p className={'medium-text'}>Общий стаж: более 26 лет</p>
                            <div>
                                <Button color={'blue'}><p className={'medium-text'}>Подробнее о враче</p></Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.chief_services}>
                        <p className={'large-text'}>Оказываемые услуги</p>
                        <div className={classes.services}>
                            <ChiefServicesItem text={'Лечение и профилактика'}/>
                            <ChiefServicesItem text={'Имплантация'}/>
                            <ChiefServicesItem text={'Протезирование'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChiefWelcome;