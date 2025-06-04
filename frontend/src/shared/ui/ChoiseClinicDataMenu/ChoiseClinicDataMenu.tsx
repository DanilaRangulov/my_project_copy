import React, {useEffect, useState} from 'react';
import * as classes from './ChoiseClinicDataMenu.module.scss'
import Button from "shared/ui/Button/Button";
import * as events from "node:events";
import ChoiseClinicButton from "shared/ui/ChoiseClinicDataMenu/ui/ChoiseClinicButton";
interface IChoiseClinicDataMenu {
    elements: Array<string>,
    activeButton: string,
    setCurrentButton: Function,
}
const ChoiseClinicDataMenu = ({elements, activeButton, setCurrentButton} : IChoiseClinicDataMenu) => {
    const [data, setData] = useState<Record<string, Array<string>>>();
    // const [activeButton, setActiveButton] = useState<string>('');
    const onClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        const content: string = event.currentTarget.children[0].textContent
        setCurrentButton(content)
    }
    return (
        <div className={`container ${classes.choise_clinic_data_menu}`}>
            {/*{*/}
            {/*    data*/}
            {/*        ? Object.keys(data).map((element) => <Button id={'choise_clinic_data_menu' + element} activeID={activeButton} color={'gray'} children={<p className={'medium-text'}>{element}</p>} onClickHandle={onClickHandle} key={'choise_clinic_data_menu' + element}/>)*/}
            {/*        : 'Loading...'*/}
            {/*}*/}
            {
                elements
                    ? elements.map((element) => <ChoiseClinicButton buttonID={element} activeID={activeButton} children={<p className={'medium-text'}>{element}</p>} onClickHandle={onClickHandle} key={'choise_clinic_data_menu' + element}/>)
                    : 'Loading...'
            }
        </div>
    );
};

export default ChoiseClinicDataMenu;