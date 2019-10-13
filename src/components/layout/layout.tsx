/** React imports */
import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import { useTranslation } from 'react-i18next';

/** Local imports */
import { routes } from '@shared/routes';
import { State } from '@shared/state';

import { SIZE_TYPES, Spinner } from '@shared/components';
import { Header, NavigationPages, NextButton } from '@components';

import { useStyles } from './styles';

export const Layout: React.FC = () => {
    const classes = useStyles();

    const { showHeader, showNextButton } = useSelector(
        (state: State) => state.layout
    );
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
            {showNextButton && <NextButton></NextButton>}
            <NavigationPages routes={routes} />
        </>
    );
};
