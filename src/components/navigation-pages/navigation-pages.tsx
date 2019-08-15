//React Libraries
import React, { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

//Components
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

//Styles
import { useStyles } from './styles';

//Routes
import { Router } from '../../routes';

//Props
import { NavigationPageProps } from './navigation-page-props';

const NavigationPages: React.FC<NavigationPageProps> = props => {
    const [t] = useTranslation('common');
    const [tabSelected, setTabSelected] = useState(0);
    const classes = useStyles();

    function changeTab(event: ChangeEvent<any>, newTabSelected: number) {
        setTabSelected(newTabSelected);
    }

    return (
        <Tabs
            classes={{
                root: classes.root,
                indicator: classes.indicator
            }}
            variant='fullWidth'
            value={tabSelected}
            onChange={changeTab}
        >
            {props.routes.map((route: Router, index: number) => {
                return (
                    <Tab
                        key={index}
                        label={t(`routes.${route.key}`)}
                        component={Link}
                        to={route.path}
                    />
                );
            })}
        </Tabs>
    );
};

export default NavigationPages;
