import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routes
import { routes } from '@shared/routes';

// Components
import { NavigationPages } from '@components';

// Styles
import { useStyles } from './styles';

export const AppRouter: React.FC = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.path === '/'}
                                render={props => (
                                    <div className={classes.wrappedContent}>
                                        <route.component {...props} />
                                    </div>
                                )}
                            />
                        );
                    })}
                </Switch>
                <NavigationPages routes={routes} />
            </div>
        </Router>
    );
};
