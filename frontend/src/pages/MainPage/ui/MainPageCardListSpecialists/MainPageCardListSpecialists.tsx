import React from 'react';
import * as classes from './MainPageCardListSpecialists.module.scss'
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import {doctorsApi} from "entities/Doctor";
import {DoctorsBlock} from "widgets/DoctorsBlock";
const MainPageCardListSpecialists = () => {
    const  {data: doctors, error, isLoading} = doctorsApi.useGetDoctorsQuery();
    return (
        <div className={`container ${classes.MainPageCardListSpecialists}`}>
            <ContainerDescription
                head={'Специалисты'}
                description={'Наши врачи — высококвалифицированные профессионалы, прошедшие тщательный отбор и обладающие многолетним опытом. '}
                position={'center'}
            />
            {isLoading && <h1>Идет загрузка...</h1>}
            {/*<DoctorsBlock body={doctors}/>*/}
        </div>
    );
};

export default MainPageCardListSpecialists;