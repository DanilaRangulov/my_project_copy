import React, {useEffect, useState} from 'react';
import ContainerDescription from "shared/ui/ContainerDescription/ContainerDescription";
import * as classes from "./ChoiseClinicDropDownMenu.module.scss"

const ChoiseClinicDropDownMenu = ({items} : {items : Array<string>}) => {
    const [selectedItem, setSelectedItem] = useState(items[0])
    const [isVisible, setIsVisible] = useState(false)
    const createItemList = (items : string[]) => {
        return items.map(item =>
            <li key={item} onClick={handleOnClick}>{item}</li>
        )
    }
    const handleClickOutside = (event: any) => {
        if (event.target.tagName != 'LI') {
            setIsVisible(false)
        }
    }
    const handleOnClick = (event: any) => {
        setSelectedItem(event.target.textContent)
        setIsVisible(false)
    }
    const handleClickDisplayMenu = () => {
        setIsVisible(!isVisible)
    }
    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);
    return (
        <div>
            <div className={classes.choise_gallery}>
                <span className={`medium-text ${classes.text}`}>
                    Обзор клиники на&nbsp;<span onClick={handleClickDisplayMenu} className={classes.choised_value}>{selectedItem}

                    {
                        isVisible
                            ?
                            <div className={classes.dropdown_menu}>
                                <ul>
                                    {
                                        createItemList(items)
                                    }
                                </ul>
                            </div>
                            : ''
                    }
                </span>
                </span>
                {/*<select className={classes.selection} name="select">*/}
                {/*    <option value="value1" selected><p className={'medium-text'}>На Новороссийской</p></option>*/}
                {/*    <option value="value2"><p className={'medium-text'}>На Богатырской</p></option>*/}
                {/*</select>*/}
            </div>
        </div>
    );
};

export default ChoiseClinicDropDownMenu;