/**React imports */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**Local imports */
import { routes } from '@shared/routes';
import { NavigationPages, Header } from '@components';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { State } from '@shared/state';

export const AppRouter: React.FC = () => {
    const classes = useStyles();

    const { modelName, bodyName, totalPrice } = useSelector(
        (state: State) => state.carConfigurator
    );
    const { showHeader } = useSelector((state: State) => state.layout);

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
                                    <div className={classes.wrapped}>
                                        {showHeader && (
                                            <Header
                                                title={modelName}
                                                subTitle={bodyName}
                                                price={totalPrice}
                                            ></Header>
                                        )}
                                        <div className={classes.wrappedContent}>
                                            <route.component {...props} />
                                        </div>
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
