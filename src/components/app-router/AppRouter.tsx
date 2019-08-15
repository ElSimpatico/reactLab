import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../../routes';
import NavigationPages from '../navigation-pages/navigation-pages';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <div
                className={'principalClass'}
                style={{
                    position: 'relative',
                    height: 'calc(100vh - 22px)',
                    width: '100vw'
                }}
            >
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.path === '/' ? true : false}
                                render={props => (
                                    <div
                                        className={'contentPages'}
                                        style={{
                                            margin: '20px',
                                            overflowY: 'scroll',
                                            overflowX: 'hidden',
                                            maxHeight: '80vh'
                                        }}
                                    >
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

export default AppRouter;
