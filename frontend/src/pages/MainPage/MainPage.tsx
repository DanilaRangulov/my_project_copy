import React from 'react';
import Welcome from "pages/MainPage/ui/Welcome/Welcome";
import StocksSection from "pages/MainPage/ui/StocksSection/StocksSection";
import * as classes from './mainpage.module.scss'
import Dignities from "pages/MainPage/ui/Dignities/Dignities";
import ChiefWelcome from "pages/MainPage/ui/ChiefWelcome/ChiefWelcome";
import MainPageCardListSpecialists from "pages/MainPage/ui/MainPageCardListSpecialists/MainPageCardListSpecialists";
import MPServicesList from "pages/MainPage/ui/MPServicesList/MPServicesList";
import ClinicReviewGallery from "pages/MainPage/ui/ClinicReviewGallery/ClinicReviewGallery";
import FeedBackServicesGrid from "pages/MainPage/ui/FeedBackServices/FeedBackServicesGrid";
import FeedBack from "pages/MainPage/ui/FeedBack/FeedBack";
import SubmitWidget from "widgets/SubmitWidget/SubmitWidget";
import Map from "pages/MainPage/ui/Map/Map";
import Footer from "widgets/Footer/Footer";
import ClinicBenefits from "pages/MainPage/ui/ClinicBenefits/ClinicBenefits";
const MainPage = () => {
    return (
        <div className={classes.main_page}>
            <Welcome/>
            <StocksSection/>
            {/*<Dignities/>*/}
            {/*<ChiefWelcome/>*/}
            <MainPageCardListSpecialists/>
            <ClinicBenefits/>
            <MPServicesList/>
            <ClinicReviewGallery/>
            <FeedBack/>
            <FeedBackServicesGrid/>
            {/*<SubmitWidget/>*/}
            <Map/>
        </div>
    );
};

export default MainPage;