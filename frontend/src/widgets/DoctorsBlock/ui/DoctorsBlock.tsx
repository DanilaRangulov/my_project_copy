import React, {useEffect, useState} from 'react';
import * as classes from './SpecialistsList.module.scss'
import {Doctor, doctorsApi, DoctorsBlockModel} from "entities/Doctor";
import {DoctorCard} from "shared/ui/DoctorCard";
import Button from "shared/ui/Button/Button";
import {Case, casesApi} from "entities/Cases";
import {CardList} from "shared/ui/CardList";
import {PortfolioCard} from "shared/ui/PortfolioCard";
interface DoctorBlockProps {
    slug: string
    showMoreCount: number
}
const DoctorsBlock = (props: DoctorBlockProps) => {
    const {showMoreCount, slug} = props
    const  {data: body, error, isLoading, fetchNextPage} = doctorsApi.useGetDoctorsBlockByServicePageInfiniteQuery(
        slug,
        {
            initialPageParam: {
                pageNumber: 1,
                pageSize: showMoreCount
            }
        }
    )
    const [visibleElements, setVisibleElements] = useState<Array<Doctor>>([]);
    const totalPages = body?.pages?.[0]?.totalPages ?? 1;
    useEffect(() => {
        if (body?.pages) {
            setVisibleElements(body.pages.flatMap(page => page.projects));
        }
    }, [body?.pages]);
    if (isLoading) return 'Загрузка'
    return (
        <div className={classes.specialistsList}>
            <CardList title={'Специалисты'} showMoreCount={showMoreCount} fetchNextPage={fetchNextPage} totalPages={totalPages}>
                {visibleElements
                    ? visibleElements.map((element, index) => <DoctorCard id={element.id} name={element.name} specialty={element.specialty} experience={element.experience} countOfReviews={element.countOfReviews} imageUrl={element.imageUrl} key={index}/>)
                    : null
                }
            </CardList>
        </div>
    );
};

export default DoctorsBlock;