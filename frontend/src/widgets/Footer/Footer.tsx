import React from 'react';
import * as classes from './footer.module.scss'
import vk from 'shared/assets/images/icons/media/vk_white.png'
import inst from 'shared/assets/images/icons/media/inst_white.png'
import tg from 'shared/assets/images/icons/media/tg_white.png'
import whatsapp from 'shared/assets/images/icons/media/whatsapp_white.png'
import {Link} from "react-router-dom";
import logo from "shared/assets/images/logo/nika_logo_white.png";
import Button from "shared/ui/Button/Button";
import isMobile from "shared/functions/isMobile";
import navBar from "widgets/NavBar/NavBar";
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={`container ${classes.footer_content}`}>
            {isMobile()
                ?
                <div className={classes.media_icons}>
                    <img src={vk}/>
                    <img src={tg}/>
                    <img src={inst}/>
                    <img src={whatsapp}/>
                </div>
                : null
            }
            {isMobile()
                ?
                <div className={classes.online_booking}>
                    <div><Button color={'white'}><p className={'small-text'}>Запись на прием</p></Button></div>
                </div>
                : null
            }
            <div className={classes.left_content}>
                <Link to={'/frontend/public'}><img src={logo} alt={'123'}/></Link>

                {
                    isMobile()
                        ? null
                        :
                        <p className={'small-text'}>
                        Все материалы, находящиеся на сайте,
                    охраняются в соответствии с законодательством
                    , в том числе, об авторском праве и смежных правах
                    </p>
                }

                <p className={'small-text'}>Copyright © 2013 - 2024 ООО НИКА</p>
            </div>
            <div className={classes.mid_content}>
                <p className={'small-text'}>Телефон</p>
                <p className={'small-text'}>(812) 604-24-46</p>
                <p className={'small-text'}>email</p>
                <p className={'small-text'}>nikaclinic@mail.ru</p>
                {isMobile()
                    ? null
                    :
                        <div className={classes.media_icons}>
                            <img src={vk}/>
                            <img src={tg}/>
                            <img src={inst}/>
                            <img src={whatsapp}/>
                        </div>
                }
                {/*{isMobile() ? null : <p>created by nshiki</p>}*/}
            </div>
            <div className={classes.right_content}>
                <p className={'medium-text'}>Ждем вас!</p>
                <div className={classes.links}>
                    <ul>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Услуги</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Цены</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Акции</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Кейсы</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Вакансии</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Контакты</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>Специалисты</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className={'small-text'}>О клинике</Link>
                        </li>
                    </ul>
                </div>
                {isMobile()
                    ? null
                    :
                        <div className={classes.online_booking}>
                            <div><Button color={'white'}><p className={'small-text'}>Записаться</p></Button></div>
                            <p className={'small-text'}>Онлайн запись для вашего удобства!</p>
                        </div>
                }
            </div>
        </div>
        </div>
    );
};

export default Footer;