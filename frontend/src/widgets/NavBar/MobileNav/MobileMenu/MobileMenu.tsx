import React, {useEffect} from 'react';
import * as classes from './mobilemenu.module.scss'
import styled from "styled-components";
import {Link} from "react-router-dom";
import '/src/app/styles/index.scss'
import vk from 'shared/assets/images/icons/media/vk.png'
import inst from 'shared/assets/images/icons/media/inst.png'
import tg from 'shared/assets/images/icons/media/tg.png'
import whatsapp from 'shared/assets/images/icons/media/whatsapp.png'
const StyledMobileMenu = styled.div<{open: boolean}>`
  transform: ${p => p.open ? 'translateX(0%)' : 'translateX(100%)'};
`;
const MobileMenu = ({isOpen} : {isOpen: boolean}) => {
    // const vh = window.innerHeight / 100;
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
    useEffect(() => {isOpen ? document.body.style.setProperty('overflow', 'hidden') :  document.body.style.removeProperty('overflow');}, [isOpen]);
    return (
        <StyledMobileMenu open={isOpen} className={classes.mobileMenu}>
            <div className={classes.mobileMenu_title}>
                <p className={'large-text'}>
                    Навигация
                </p>
            </div>
            <div className={classes.mobileMenuContent}>
                <div className={classes.mobileMenu_mini_text}>
                    <p className={'description-text'}>ПН-ВС: 9:00 - 21:00</p>
                    <p className={'description-text'}>(812) 604-24-46</p>
                </div>
                <Link to={'/services'} className={'medium-text'}>
                    Услуги
                    <hr/>
                </Link>
                <Link to={'/prices'} className={'medium-text'}>
                    Цены
                    <hr/>
                </Link>
                <Link to={'/stocks'} className={'medium-text'}>
                    Акции
                    <hr/>
                </Link>
                <Link to={'/dantists'} className={'medium-text'}>
                    Специалисты
                    <hr/>
                </Link>
                <Link to={'/contacts'} className={'medium-text'}>
                    Контакты
                    <hr/>
                </Link>
                <Link to={'/cases'} className={'medium-text'}>
                    Кейсы
                    <hr/>
                </Link>
                <Link className={'medium-text'} to={'/services'}>
                    Вакансии
                    <hr/>
                </Link>
                <Link className={'medium-text'} to={'/prices'}>
                    Отзывы
                    <hr/>
                </Link>
                <Link className={'medium-text'} to={'/stocks'}>
                    О клинике
                    <hr/>
                </Link>
                <div>
                    <p className={'description-text'}>Мы в соцсетях:</p>
                </div>
                <div className={classes.media_icons}>
                    <img src={vk}/>
                    <img src={tg}/>
                    <img src={inst}/>
                    <img src={whatsapp}/>
                </div>
            </div>
        </StyledMobileMenu>
    );
};

export default MobileMenu;