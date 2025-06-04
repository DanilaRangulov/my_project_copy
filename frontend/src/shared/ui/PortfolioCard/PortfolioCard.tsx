import React from 'react';
import * as classes from './PortfolioCard.module.scss'
import ReactCompareImage from "react-compare-image";
import image1 from 'shared/assets/images/cases/do.png'
import image2 from 'shared/assets/images/cases/posle.png'
import Button from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal";
import PortfolioModal from "shared/ui/PortfolioCard/ui/PortfolioModal/PortfolioModal";
import {Case} from "entities/Cases";
const PortfolioCard = (props: Case) => {
    const {title, duration, modalContent} = props
    const [isOpen, setIsOpen] = React.useState(false);
    const onClickModal = () => {
        setIsOpen(prevState => !prevState);
    }
    return (
        <div className={classes.PortfolioCard}>
                    <div className={classes.PortfolioBeforeAfterPhoto}>
                        <ReactCompareImage leftImage={image1} rightImage={image2} />
                    </div>
            <div className={classes.bottom_content}>
                <div>
                    <p className={'medium-text'}>
                        {title}
                    </p>
                </div>
                <div className={classes.other_content}>
                    <div className={classes.countOfVisiting}>
                        <svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" stroke="black" stroke-width="5" fill="white"/>
                            <line x1="50" y1="50" x2="50" y2="30" stroke="black" stroke-width="4" stroke-linecap="round"/>
                            <line x1="50" y1="50" x2="65" y2="60" stroke="black" stroke-width="4" stroke-linecap="round"/>
                            <circle cx="50" cy="50" r="2" fill="black"/>
                        </svg>
                        <p className={'small-text'}>{duration} приемов</p>
                    </div>
                    <Button color={'black'}><p className={'small-text'} onClick={onClickModal}>Подробнее</p></Button>
                    <PortfolioModal body={modalContent} isOpen={isOpen} onClickHandle={onClickModal}>
                    </PortfolioModal>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;