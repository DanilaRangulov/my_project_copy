import React from 'react';
import {GreetingBlock} from "widgets/GreetingBlock";
import implantion from "shared/assets/images/services/testing_greetingblock.png";
import CardList from "shared/ui/CardList/CardList";
import ServiceItem from "shared/ui/ServiceItem/ServiceItem";
import {medicalServicesApi} from "entities/MedicalServices";
import * as classes from './ServicesPage.module.scss'
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import {Link} from "react-router-dom";

const ServicesPage = () => {
    const  {data: services, error, isLoading} = medicalServicesApi.useGetMedicalServicesQuery();
    console.log(services)
    return (
        <div>
            {/*<GreetingBlock title={'Услуги'} content={'Подарим промокод на второе посещение'} imageUrl={implantion}/>*/}
            <div className={`container ${classes.blockDescription}`}>
                <h1>Наши услуги</h1>
            </div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {/*<CardList title={'Наши услуги'}>*/}
            {/*    {services && services.map(item =>*/}
            {/*        <Link to={item.slug}><ServiceItem title={item.name} description={item.textDescription} imageUrl={item.imageUrl} key={item.id}/></Link>*/}
            {/*    )}*/}
            {/*</CardList>*/}
        </div>
    );
};

export default ServicesPage;