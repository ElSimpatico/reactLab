//Components
import CarLineGroups from "./pages/carLineGroups";
import CarLine from "./pages/carLine";
import Engine from "./pages/engine";

import { routesPage } from "./enums/routes-page";
export const routes = [
    {
        path: "/",
        component: CarLineGroups,
        exact: true
    },
    {
        path: `/${routesPage.carline}`,
        component: CarLine,
        exact: true
    },
    {
        path: `/${routesPage.engine}`,
        component: Engine,
        exact: true
    }
];
