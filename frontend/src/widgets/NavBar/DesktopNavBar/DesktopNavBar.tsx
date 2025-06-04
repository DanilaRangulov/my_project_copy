import React from 'react';
import {Link} from "react-router-dom";
import logo from 'shared/assets/images/logo/nika_logo_skyblue.png'
import * as classes from "./desktopnavbar.module.scss";
import Button from "shared/ui/Button/Button";
const DesktopNavBar = () => {
    return (
        <div className={classes.desktop_nav_bar}>
            <div className={classes.mini_navbar}>
                <div className={classes.mini_navbar_content}>
                        <div className={classes.mini_navbar_content_left}>
                            <Link className={'small-text'} to={'/services'}>Вакансии</Link>
                            <Link className={'small-text'} to={'/prices'}>Отзывы</Link>
                            <Link className={'small-text'} to={'/stocks'}>О клинике</Link>
                        </div>
                        <div className={classes.mini_navbar_content_right}>
                            <p className={'small-text'}>(812) 604-24-46</p>
                            <Link to={'/contacts'} className={'small-text'}>ПН-ВС: 9:00 - 21:00</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.main_navbar}>
                    <div className={classes.main_navbar_content}>
                        <Link to={'/'}><img src={logo} alt={'123'}/></Link>
                        <Link to={'/services'} className={'medium-text'}>Услуги</Link>
                        <Link to={'/prices'} className={'medium-text'}>Цены</Link>
                        <Link to={'/stocks'} className={'medium-text'}>Акции</Link>
                        <Link to={'/dantists'} className={'medium-text'}>Специалисты</Link>
                        <Link to={'/contacts'} className={'medium-text'}>Контакты</Link>
                        <Link to={'/cases'} className={'medium-text'}>Кейсы</Link>
                        <Button color={'black'}><p className={'small-text'}>Запись на прием</p></Button>
                    </div>
                </div>
            </div>
            );
            };

            export default DesktopNavBar;