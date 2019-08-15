//Components
import CarLineGroups from './pages/carLineGroups';
import CarLine from './pages/carLine';
import Engine from './pages/engine';

//Enums
import { routesPage } from './enums/routes-page';

export interface Router {
    path: string;
    component: any;
    key: String;
}

export const routes: Router[] = [
    {
        path: '/',
        component: CarLineGroups,
        key: routesPage.CARLINE_GROUP
    },
    {
        path: `/${routesPage.CARLINE}`,
        component: CarLine,
        key: routesPage.CARLINE
    },
    {
        path: `/${routesPage.ENGINE}`,
        component: Engine,
        key: routesPage.ENGINE
    }
];
