import React from 'react';
import {Link, Route} from "react-router-dom";
import * as classes from "./navbar.module.scss"
import 'app/styles/index.scss'
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import DesktopNavBar from "widgets/NavBar/DesktopNavBar/DesktopNavBar";
import MobileNav from "widgets/NavBar/MobileNav/MobileNav";
const NavBar = () => {
    return (
        <div className={classes.navbar}>
                <DesktopNavBar/>
                <MobileNav/>
        </div>
    );
};

export default NavBar;