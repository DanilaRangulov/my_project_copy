import React from 'react';

import FeedBackServices from "shared/ui/FeedBackServices/FeedBackServices";
import yandex from 'shared/assets/images/feedbackservices/yandex_map.png'
import SubmitWidget from "widgets/SubmitWidget/SubmitWidget";
import Map from "pages/MainPage/ui/Map/Map";
import Footer from "widgets/Footer/Footer";
import Welcome from "pages/MainPage/ui/Welcome/Welcome";
import ChoiseClinicDataMenu from "shared/ui/ChoiseClinicDataMenu/ChoiseClinicDataMenu";
import ClinicBenefits from "pages/MainPage/ui/ClinicBenefits/ClinicBenefits";
import {GreetingBlock} from "widgets/GreetingBlock";
import {DropDownContent} from "shared/ui/DropDownContent";
import Button from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal";
const CasesPage = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClickModal = () => {
        setIsOpen(true);
    }
    return (
        <div>
            <Button color={'blue'} align={'flex-start'} onClickHandle={onClickModal}><p className={'medium-text'}>Подробнее</p></Button>
        </div>
    );
};

export default CasesPage;