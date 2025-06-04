import React from 'react';
import {useParams} from "react-router-dom";
import {medicalServicePageApi} from "entities/MedicalServicePage";
import ServicePageBuilder from "pages/ServicePage/ui/ServicePageBuilder";
import * as classes from './ServicePage.module.scss'
import {casesApi} from "entities/Cases";
import {CasesBlock} from "widgets/CasesBlock";
import {DoctorsBlock} from "widgets/DoctorsBlock";
import {doctorsApi} from "entities/Doctor";
const ServicePage = () => {
    const {slug} = useParams();
    const  {data: servicePageData, error : servicePageError, isLoading: servicePageIsLoading} = medicalServicePageApi.useGetMedicalServiceByItemQuery(slug)
    // const  {data: casesBlockData, error: casesBlockError, isLoading: casesBlockIsLoading} = casesApi.useGetCasesBlockQuery(slug)
    // const  {data: doctorsBlockData, error: doctorsBlockError, isLoading: doctorsBlockIsLoading} = doctorsApi.useGetDoctorsBlockQuery(slug)
    return (
        <div className={`container ${classes.servicePage}`}>
            <ServicePageBuilder {...servicePageData} />
            <CasesBlock slug={slug} showMoreCount={6}/>
            <DoctorsBlock slug={slug} showMoreCount={6}/>
        </div>
    );
};

export default ServicePage;