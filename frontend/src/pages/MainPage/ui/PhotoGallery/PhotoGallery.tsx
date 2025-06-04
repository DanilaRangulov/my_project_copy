import React from 'react';
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import * as classes from './photogallery.module.scss'
const PhotoGallery = () => {
    return (
        <div>
            <ContainerDescription
                head={'Фотогалерея'}
                description={'Современные кабинеты ' +
                    'и оборудование для комфортного и эффективного лечения'}
                position={'center'}
            />
            <div className={classes.choise_gallery}>
                <p className={'medium-text'}>Обзор клиники </p>
                <select className={classes.selection} name="select">
                    <option value="value1" selected><p>На Новороссийской</p></option>
                    <option value="value2">На Богатырской</option>
                </select>
            </div>
        </div>
    );
};

export default PhotoGallery;