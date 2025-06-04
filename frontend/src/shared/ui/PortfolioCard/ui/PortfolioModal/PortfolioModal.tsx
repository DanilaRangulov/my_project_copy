import React from 'react';
import {Modal} from "shared/ui/Modal";
import * as classes from './PortfolioModal.module.scss'
import Paragraph from "widgets/Paragraph/ui/Paragraph";
import image1 from "shared/assets/images/cases/do.png";
import image2 from "shared/assets/images/cases/posle.png";
import ReactCompareImage from "react-compare-image";
import {DoctorCard} from "shared/ui/DoctorCard";
import {CaseModalContent} from "entities/Cases";
interface CaseModalProps {
    body: CaseModalContent
    isOpen: boolean;
    onClickHandle: () => void;
}
const PortfolioModal = (props: CaseModalProps) => {
    const {body, isOpen, onClickHandle} = props;
    return (
        <Modal isOpen={isOpen} onClose={onClickHandle}>
            <div className={`${classes.content}`}>
                <div className={classes.title}>
                    <h1 className={'h1_heading'}>Лечение скрытого, глубокого кариеса</h1>
                </div>
                <div className={classes.duration}>
                    <svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="black" stroke-width="5" fill="white"/>
                        <line x1="50" y1="50" x2="50" y2="30" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        <line x1="50" y1="50" x2="65" y2="60" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        <circle cx="50" cy="50" r="2" fill="black"/>
                    </svg>
                    <p className={'small-text'}>1 прием</p>
                </div>
                <div className={classes.beforeAfter}>
                    <ReactCompareImage leftImage={image1} rightImage={image2} />
                </div>
                <Paragraph title={'Диагноз'} markdownContent={body.description}/>
                <Paragraph title={'Схема лечения'} markdownContent={body.diagnosis}/>
                <div className={classes.doctor}>
                    <h1 className={'h1_heading'}>Лечащий врач:</h1>
                    <DoctorCard {...body.doctor}/>
                </div>
            </div>
        </Modal>
    );
};

export default PortfolioModal;