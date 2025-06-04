import {RouteProps} from "react-router-dom";
import React from "react";
import {MainPageAsync} from "pages/MainPage/MainPage.async";
import {ServicesPageAsync} from "pages/ServicesPage/ServicesPage.async";
import {PricesPageAsync} from "pages/PricesPage/PricesPage.async";
import {StocksPageAsync} from "pages/StocksPage/StocksPage.async";
import {DantistsPageAsync} from "pages/DantistsPage/DantistsPage.async";
import {ContactsPageAsync} from "pages/ContactsPage/ContactsPage.async";
import {CasesPageAsync} from "pages/CasesPage/CasesPage.async";
import ImplantationPage from "pages/ImplantationPage/ImplantationPage";
import {ServicePageAsync} from "pages/ServicePage/ServicePage.async";
export enum AppRoutes {
    MAIN = 'main',
    SERVICES = 'services',
    PRICES = 'prices',
    STOCS = 'stocs',
    DANTISTS = 'dantists',
    CONTACTS = 'contacts',
    CASES = 'cases',
    // SERVICES_IMPLANTATIONS = 'implantation',
    SERVICE_PAGES = 'service_pages',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.SERVICES]: '/services',
    [AppRoutes.PRICES]: '/prices',
    [AppRoutes.STOCS]: '/stocks',
    [AppRoutes.DANTISTS]: '/dantists',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.CASES]: '/cases',
    // [AppRoutes.SERVICES_IMPLANTATIONS]: '/services/implantation',
    [AppRoutes.SERVICE_PAGES]: '/services/:slug',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />,
        children: false
    },
    [AppRoutes.SERVICES]: {
        path: RoutePath.services,
        element: <ServicesPageAsync />,
        children: 'Услуги'
    },
    [AppRoutes.PRICES]: {
        path: RoutePath.prices,
        element: <PricesPageAsync />,
        children: 'Цены'
    },
    [AppRoutes.STOCS]: {
        path: RoutePath.stocs,
        element: <StocksPageAsync />,
        children: 'Акции'
    },
    [AppRoutes.DANTISTS]: {
        path: RoutePath.dantists,
        element: <DantistsPageAsync />,
        children: 'Специалисты'
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPageAsync />,
        children: 'Контакты'
    },
    [AppRoutes.CASES]: {
        path: RoutePath.cases,
        element: <CasesPageAsync />,
        children: 'Кейсы'
    },
    // [AppRoutes.SERVICES_IMPLANTATIONS]: {
    //     path: `${RoutePath.implantation}`,
    //     element: <ImplantationPage />,
    //     children: false,
    // },
    [AppRoutes.SERVICE_PAGES]: {
        path: RoutePath.service_pages,
        element: <ServicePageAsync />,
        children: false
    }
}