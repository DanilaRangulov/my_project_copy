import React, {useState} from 'react';
import * as classes from './ButtonList.module.scss'
import ItemSlide from "widgets/ItemsSlider/ui/ItemSlide/ItemSlide";
import ItemButton from "widgets/ItemsSlider/ui/ButtonsList/ui/ItemButton/ItemButton";
import {ItemSlideModel} from "widgets/ItemsSlider/model/types";
interface ButtonListProps {
    elements: ItemSlideModel[];
    slideById: Function;
}
const ButtonsList = (props: ButtonListProps) => {
    const {elements, slideById} = props;
    const [activeId, setActiveId] = useState<number>(0);
    const setActiveIdHandle = (id: number) => {
        setActiveId(id)
    }
    return (
        <div className={classes.ButtonsList}>
            {elements.map((item: ItemSlideModel, index) => <ItemButton slideById={slideById} id={index} setActiveId={setActiveIdHandle} activeId={activeId} title={item.buttonTitle} key={item.buttonTitle}/>)}
        </div>
    );
};

export default ButtonsList;