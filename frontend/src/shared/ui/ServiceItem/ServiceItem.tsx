import React from 'react';
import * as classes from './serviceitem.module.scss'
interface IServiceItem {
    title: string
    description: string
    imageUrl?: any
}
const ServiceItem = ({title, description, imageUrl}: IServiceItem) => {
    const fullImageUrl = process.env.REACT_APP_STRAPI_BASE_URL + imageUrl?.url

    return (
        <div className={classes.service_item}>
            <div className={classes.service_content}>
                <p className={`medium-text`}>{title}</p>
                <p className={'small-text description-text'}>{description}</p>
            </div>
            <div className={classes.service_picture}>
                {imageUrl ? <img src={fullImageUrl}/>  : null}
            </div>
        </div>
    );
};

export default ServiceItem;