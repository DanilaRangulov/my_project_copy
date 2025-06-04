import React from 'react';
import ServiceItem from "shared/ui/ServiceItem/ServiceItem";
import diagnostics from "shared/assets/images/services/diagnostic.png";
import hygienic from "shared/assets/images/services/hygienic.png";
import implantation from "shared/assets/images/services/implantation.png";
import kids from "shared/assets/images/services/kids.png";
import ortodontia from "shared/assets/images/services/ortodontia.png";
import therapy from "shared/assets/images/services/therapy.png";
import * as classes from './mpserviceslist.module.scss'
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
const MpServicesList = () => {
    return (
        <div className={`container ${classes.mp_services_list}`}>
            <ContainerDescription
                head={'Популярные услуги'}
                description={'' +
                    'В Nika Clinic мы предлагаем широкий спектр стоматологических услуг. ' +
                    'Наши современные методы и индивидуальный подход обеспечат вам качественное' +
                    ' лечение и долгосрочные результаты.'}
                position={'center'}
            />
            <div className={classes.services_list}>
                <ServiceItem
                    title={'Диагностика'}
                    description={'консультации 3D томография исследование осмотр '}
                    imageUrl={diagnostics}
                />
                <ServiceItem
                    title={'Гигиена'}
                    description={'укрепление эмали, ультразвуковая чистка'}
                    imageUrl={therapy}
                />
                <ServiceItem
                    title={'Детская стоматология'}
                    description={'Наши специалисты создадут комфортную и дружелюбную атмосферу'}
                    imageUrl={kids}
                />
                <ServiceItem
                    title={'Ортодонтия'}
                    description={'Современные системы для идеальной улыбки и комфортного выравнивания зубов.'}
                    imageUrl={ortodontia}
                />
                <ServiceItem
                    title={'Имплантация'}
                    description={'Системы: Nobel, Hi-Tec, Riellens, Zimmer и с применением самого передового оборудования!'}
                    imageUrl={implantation}
                />
                <ServiceItem
                    title={'Остальные услуги'}
                    description={'Ознакомьтесь с полным перечнем услуг, предлагаемых нашей клиникой!'}
                    // imageUrl={diagnostics}
                />
            </div>
        </div>
    );
};

export default MpServicesList;