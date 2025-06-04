import React from 'react';
import * as classes from './ImplantationPage.module.scss'
import {GreetingBlock} from "widgets/GreetingBlock";
import implantation from 'shared/assets/images/services/implantation.png'
import ImplantationReasons from "pages/ImplantationPage/ui/ImplantationReasons/ImplantationReasons";
import Paragraph from "widgets/Paragraph/ui/Paragraph";
// import {PortfolioList} from "widgets/CasesBlock";
import {SpecialistsFilteredList} from "widgets/SpecialistsFilteredList";
const ImplantationPage = () => {
    // const slideElements: ItemSlideInterface[] = [
    //     {
    //         id: 1,
    //         title: 'Зуб под ключ на имплантате Riellen\'s',
    //         buttonTitle: 'Имплант Riellens',
    //         textContent: 'Премиальный имплантат. В стоимость включено: Имплантат Riellen\'s ' +
    //             'работа врача+анестезия+ шовный материал+формирователь десны+ металлокерамическая коронка',
    //         imageUrl: implantation
    //     },
    //     {
    //         id: 2,
    //         title: 'Зуб под ключ на имплантате Nobel',
    //         buttonTitle: 'Имплант Nobel',
    //         textContent: 'Премиальный имплантат. В стоимость включено: Имплантат Riellen\'s ' +
    //             'работа врача+анестезия+ шовный материал+формирователь десны+ металлокерамическая коронка',
    //         imageUrl: implantation
    //     },
    //     {
    //         id: 3,
    //         title: 'Зуб под ключ на имплантате Zimmer',
    //         buttonTitle: 'Имплант Zimmer',
    //         textContent: 'Премиальный имплантат. В стоимость включено: Имплантат Riellen\'s ' +
    //             'работа врача+анестезия+ шовный материал+формирователь десны+ металлокерамическая коронка',
    //         imageUrl: implantation
    //     },
    // ]
    return (
        <div className={classes.ImplantationPage}>
            {/*<GreetingBlock*/}
            {/*    title={'Имплантация'}*/}
            {/*    content={*/}
            {/*    'Стоматология "Ника" оказывает услуги по имплантации зубов с использованием имплантов мирового уровня ' +*/}
            {/*        '- Nobel, Hi-Tec, Riellen\'s, Zimmer'}*/}
            {/*    imageUrl={implantation}*/}
            {/*/>*/}
            {/*<ImplantationReasons/>*/}
            {/*<Paragraph*/}
            {/*    title={'Об услуге'}>*/}
            {/*    Имплантация - это самый современный способ восстановления утраченного  зуба, а так же восстановление жевательной и эстетической функции на 100%. Установка титанового имплантата выполняется под местной анестезией, после этого пациенту требуется 3-6 месяцев, чтобы он прижился. Как только это происходит, на имплантант накручивается абатмент, который является связующим звеном между имплантатом и коронкой, после чего через 1-2 недели на абатмент прочно фиксируется коронка. По статистике, имплантированные зубы приживаются у 99% пациентов.*/}
            {/*</Paragraph>*/}
            {/*/!*<ItemsSlider elements={slideElements}/>*!/*/}
            {/*<PortfolioList/>*/}
            {/*<SpecialistsFilteredList filteredBy={'ортодонт'}/>*/}
        </div>
    );
};

export default ImplantationPage;