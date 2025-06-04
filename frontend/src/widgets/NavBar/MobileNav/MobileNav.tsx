import React, {useState} from 'react';
import MobileMenu from "widgets/NavBar/MobileNav/MobileMenu/MobileMenu";
import BurgerMenu from "widgets/NavBar/MobileNav/burgerMenu/burgerMenu";
import logo from "shared/assets/images/logo/nika_logo_skyblue.png";
import {Link} from "react-router-dom";
import * as classes from './mobilenav.module.scss'

const MobileNav = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const buttonHandler = () => {
        setIsOpen(current => !current)
        console.log('12')
    }
    return (
        <div className={classes.mobile_nav_bar}>

            <Link to={'/'}><img src={logo} alt={'123'}/></Link>
            <BurgerMenu isOpen={isOpen} buttonHandler={buttonHandler}/>
            <MobileMenu isOpen={isOpen}/>
            <div className={classes.fade_behind} style={{visibility: `${isOpen ? 'visible' : 'hidden'}`, opacity: `${isOpen ? '0.5' : '0'}`}}></div>
        </div>
    );
};

export default MobileNav;