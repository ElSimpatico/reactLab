/**React imports */
import { lazy } from 'react';

/**Local imports */
const CarSelection = lazy(() => import('@pages/car-selection/car-selection'));
const CarBody = lazy(() => import('@pages/car-body/car-body'));
const Engine = lazy(() => import('@pages/engine/engine'));

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
