// Pages component
import { CarSelection, CarBody, Engine } from '@pages';

// Enums
import { ROUTES_PAGE } from './enums';

export interface Router {
    path: string;
    component: any;
    key: String;
}

export const routes: Router[] = [
    {
        path: '/',
        component: CarSelection,
        key: ROUTES_PAGE.CAR_SELECTION
    },
    {
        path: `/${ROUTES_PAGE.CAR_BODY}`,
        component: CarBody,
        key: ROUTES_PAGE.CAR_BODY
    },
    {
        path: `/${ROUTES_PAGE.ENGINE}`,
        component: Engine,
        key: ROUTES_PAGE.ENGINE
    }
];
