import React from 'react';
import Button from "shared/ui/Button/Button";
import lab from "shared/assets/images/benefit/freepik__expand__68937.jpg";
import * as classes from './ItemSlide.module.scss'
import {ItemSlideModel} from "widgets/ItemsSlider/model/types";
import {Modal} from "shared/ui/Modal";
const ItemSlide = (props: ItemSlideModel) => {
    const {title, textContent, imageUrl} = props
    const [isOpen, setIsOpen] = React.useState(false);
    const onClickModal = () => {
        setIsOpen(prevState => !prevState);
    }
    return (
        <div className={classes.itemSlide}>
            <div className={classes.item_img}>
                <img src={lab}/>
            </div>
            <div className={classes.item_content}>
                <p className={`medium-text ${classes.title}`}>{title}</p>
                <p className={`medium-text ${classes.text_description}`}>
                    {textContent}
                </p>
                <Button color={'blue'} align={'flex-start'} onClickHandle={onClickModal}><p className={'medium-text'}>Подробнее</p></Button>
                <Modal isOpen={isOpen} onClose={onClickModal}>
                    <div>2222</div>
                </Modal>
            </div>
        </div>
    );
};

export default ItemSlide;