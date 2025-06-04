import React, {useEffect, useState} from 'react';
import {CardList} from "shared/ui/CardList";
import {PortfolioCard} from "shared/ui/PortfolioCard";
import {Case, casesApi} from "entities/Cases";

interface CasesBlockProps {
    showMoreCount: number
    slug: string,
}

const CasesBlock = (props: CasesBlockProps) => {
    const {showMoreCount, slug} = props;
    const [visibleElements, setVisibleElements] = useState<Array<Case>>([]);
    const  {data: body, error, isLoading, isSuccess, fetchNextPage, isFetching} = casesApi.useGetCasesBlockByServicePageInfiniteQuery(
            slug, {
                initialPageParam: {
                    pageNumber: 1,
                    pageSize: showMoreCount
                }
            }
        );
    const totalPages = body?.pages?.[0]?.totalPages ?? 1;
    useEffect(() => {
        if (body?.pages) {
            setVisibleElements(body.pages.flatMap(page => page.projects));
        }
    }, [body?.pages]);
    if (isLoading) return 'Загрузка'
    return (
        <div>
            <CardList title={'Портфолио'} showMoreCount={showMoreCount} fetchNextPage={fetchNextPage} totalPages={totalPages}>
                {visibleElements
                    ? visibleElements.map((element, index) => <PortfolioCard id={element.id} title={element.title} duration={element.duration} modalContent={element.modalContent} key={index}/>)
                    : null
                }
            </CardList>
        </div>
    );
};

export default CasesBlock;