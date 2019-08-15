// Pages component
import CarSelection from './pages/car-selection';
import CarBody from './pages/car-body';
import Engine from './pages/engine';

// Enums
import { routesPage } from './enums/routes-page';

export interface Router {
    path: string;
    component: any;
    key: String;
}

export const routes: Router[] = [
    {
        path: '/',
        component: CarSelection,
        key: routesPage.CAR_SELECTION
    },
    {
        path: `/${routesPage.CAR_BODY}`,
        component: CarBody,
        key: routesPage.CAR_BODY
    },
    {
        path: `/${routesPage.ENGINE}`,
        component: Engine,
        key: routesPage.ENGINE
    }
];
