import React from 'react';
import * as classes from './feedbackservicesgrid.module.scss'
import yandex from "shared/assets/images/feedbackservices/yandex_map.png";
import google from "shared/assets/images/feedbackservices/Google_2015_logo.svg.png";
import twogis from "shared/assets/images/feedbackservices/2gis_maps.png";
import prodoctorov from "shared/assets/images/feedbackservices/prodoctorov.png";
import FeedBackServices from "shared/ui/FeedBackServices/FeedBackServices";
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
const FeedBackServicesGrid = () => {
    return (
        <div className={`container ${classes.FeedBackServices}`}>
            <ContainerDescription head={'На нас можно положиться!'} description={''} position={'flex-start'}/>
            <div className={classes.FeedBackList}>
                <FeedBackServices image={yandex} score={4.3} count={12}/>
                <FeedBackServices image={google} score={4.3} count={12}/>
                <FeedBackServices image={twogis} score={4.3} count={12}/>
                <FeedBackServices image={prodoctorov} score={4.3} count={12}/>
            </div>
        </div>
    );
};

export default FeedBackServicesGrid;