import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';
import NavigationPages from '../navigation-pages/navigation-pages';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    const routeProps = {
                        ...route,
                        key: `routes_${index}`
                    };
                    return <Route {...routeProps} />;
                })}
            </Switch>
            <NavigationPages />
        </Router>
    );
};

export default AppRouter;
