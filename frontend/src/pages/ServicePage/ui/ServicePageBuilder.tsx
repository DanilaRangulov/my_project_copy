import React, {ReactNode} from 'react';
import {MedicalServicePage} from "entities/MedicalServicePage";
import {blockType} from "pages/ServicePage/model/types";
import {GreetingBlock} from "widgets/GreetingBlock";
import {ItemsSlider} from "widgets/ItemsSlider";
import {Paragraph} from "widgets/Paragraph";
import {CasesBlock} from "widgets/CasesBlock";
import {DoctorsBlock} from "widgets/DoctorsBlock";
const buildPage = (data : blockType[]): ReactNode => {
    return  data.map((element: blockType, index) => {
        if (element.component === 'service-page-blocks.greetings-block') {
            return <GreetingBlock {...element} key={'greetings-block' + index} />;
        } else if (element.component === 'service-page-blocks.paragraph') {
            return <Paragraph {...element} key={'paragraph' + index}/>;
        } else if (element.component === 'service-page-blocks.item-slider') {
            return <ItemsSlider {...element} key={'item-slider' + index}/>;
        }
    })
}

const ServicePageBuilder = (props: MedicalServicePage) => {
    const {body} = props
    return (
        <>
            {(body) ? buildPage(body) : 'ничего тут нет'}
        </>
    );
};

export default ServicePageBuilder;