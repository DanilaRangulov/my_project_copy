import React, {FC} from 'react';
import * as classes from './stocksitem.module.scss'
import 'app/styles/index.scss'
import image from 'shared/assets/images/stocks/mwjmhrm394ydsuxzvusdw0ux4irlpjgj.jpg'

interface IStocksItem {
    imageURL: string,
    title: string,
    date_start: string,
    date_end?: string,
    sale?: string,
}
const StocksItem = ({imageURL, title, date_start, date_end, sale} : IStocksItem) => {
    return (
        <div className={classes.stocks_item}>
            <div className={classes.image_content}>
                <img src={imageURL}/>
            </div>
            <div className={classes.content}>
                <p className={'medium-text'}>{title}</p>
                <div className={classes.bottom_content}>
                    <p className={'small-text'}>{date_start}</p>
                    <p className={'medium-text'}>{sale}</p>
                </div>
            </div>
        </div>
    );
};

export default StocksItem;