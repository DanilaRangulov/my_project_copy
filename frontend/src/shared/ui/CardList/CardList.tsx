import React from 'react';
import * as classes from './CardList.module.scss'
import Button from "shared/ui/Button/Button";
interface CardListProps {
    children: React.ReactNode[];
    showMoreCount: number;
    title: string;
    totalPages: number;
    fetchNextPage: any;
}
const CardList = (props: CardListProps) => {
    const {children, showMoreCount, title, totalPages, fetchNextPage} = props
    const [countToDisplay, setCountToDisplay] = React.useState(showMoreCount);
    const onClickHandle = () => {
        if (children.length / showMoreCount < totalPages) {
            fetchNextPage()
            setCountToDisplay(prevState => prevState + showMoreCount);
        } else if (countToDisplay / showMoreCount == totalPages) {
            setCountToDisplay(showMoreCount);
        } else {
            setCountToDisplay(prevState => prevState + showMoreCount);
        }
    }
    console.log(totalPages * showMoreCount)
    console.log(showMoreCount)
    const mods = {
        [classes.isDisplay]: totalPages != 1,
    }
    return (
        <div className={`${classes.CardList} container`}>
            <h1 className={`h1_heading ${classes.head_h1}`}>{title}</h1>
            <div className={`${classes.list} container`}>
                {children.slice(0, countToDisplay)}
            </div>
            <Button
                color={'gray'}
                mods={mods}
                additionalClassname={classes.CardListButton}
                onClickHandle={onClickHandle}
            >
                {
                    children && (countToDisplay / showMoreCount < totalPages)
                        ? <p className={'small-text'}>Ещё</p>
                        : <p className={'small-text'}>Свернуть</p>
                }
            </Button>
        </div>
    );
};

export default CardList;