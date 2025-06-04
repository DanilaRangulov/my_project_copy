import React from 'react';
import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import NavBar from "widgets/NavBar/NavBar";
import Footer from "widgets/Footer/Footer";
const App = () => {
    return (
        <div className={'app'}>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </div>
    );
};

export default App;