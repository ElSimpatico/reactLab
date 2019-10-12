import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { routes } from '@shared/routes';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import { State } from '@shared/state';
import { SIZE_TYPES, Spinner } from '@shared/components';

import { NavigationPages } from '@components';
import { Header } from '@components';

export const Layout: React.FC = () => {
    const classes = useStyles();

    const { showHeader } = useSelector((state: State) => state.layout);
    const { modelName, bodyName, totalPrice } = useSelector(
        (state: State) => state.carConfigurator
    );

    return (
        <>
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
                                        <Suspense
                                            fallback={
                                                <Spinner
                                                    size={SIZE_TYPES.big}
                                                ></Spinner>
                                            }
                                        >
                                            <route.component {...props} />
                                        </Suspense>
                                    </div>
                                </div>
                            )}
                        />
                    );
                })}
            </Switch>
            <NavigationPages routes={routes} />
        </>
    );
};
