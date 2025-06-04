import React from 'react';
import * as classes from './SpecialistsFilteredList.module.scss'
import {CardList} from "shared/ui/CardList";
import {PortfolioCard} from "shared/ui/PortfolioCard";
import {doctorsApi} from "entities/Doctor";
import DoctorItem from "pages/MainPage/ui/MainPageCardListSpecialists/ui/DoctorItem/DoctorItem";
import {DoctorCard} from "shared/ui/DoctorCard";
interface SpecialistsFilteredListProps {
    filteredBy: string
}
const SpecialistsFilteredList = (props: SpecialistsFilteredListProps) => {
    const {filteredBy} = props
    const  {data: doctors, error, isLoading} = doctorsApi.useGetDoctorsQuery();
    const filteredDoctors = doctors?.filter(doctor => doctor.specialty.includes(filteredBy))
    return (
        <div>
            {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
            {/*<CardList title={'Специалисты'} limit={3}>*/}
            {/*    {filteredDoctors && filteredDoctors.map(item =>*/}
            {/*        <DoctorCard name={item.name} specialty={item.specialty} experience={item.experience} countOfReviews={item.countOfReviews} imageUrl={item.imageUrl} key={item.id}/>*/}
            {/*    )}*/}
            {/*</CardList>*/}
        </div>
    );
};

export default SpecialistsFilteredList;