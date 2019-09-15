//React Libraries
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//Components
import { Link, withRouter } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

//Styles
import { useStyles } from './styles';

//Routes
import { Router } from '@shared/routes';

//Props
import { NavigationPageProps } from './navigation-page-props';
import { ROUTES_PAGE } from '@shared/enums';

const NavigationPagesInternal: React.FC<NavigationPageProps> = props => {
    const [t] = useTranslation('common');
    const [tabSelected, setTabSelected] = useState(props.routes[0].key);
    const classes = useStyles();

    useEffect(() => {
        console.log('No click tab');
        const pathname = props.location.pathname;
        if (pathname) {
            const routeKey =
                pathname !== '/'
                    ? props.location.pathname.split('/')[1]
                    : ROUTES_PAGE.CAR_SELECTION;
            setTabSelected(routeKey);
        }
    }, [props.location]);

    return (
        <Tabs
            classes={{
                root: classes.root,
                indicator: classes.indicator
            }}
            variant='fullWidth'
            value={tabSelected}
        >
            {props.routes.map((route: Router, index: number) => {
                return (
                    <Tab
                        classes={{
                            disabled: classes.disabled
                        }}
                        key={`${route.key}_${index}`}
                        value={route.key}
                        label={t(`routes.${route.key}`)}
                        component={Link}
                        to={route.path}
                        disabled={true}
                    />
                );
            })}
        </Tabs>
    );
};

export const NavigationPages = withRouter(NavigationPagesInternal);
