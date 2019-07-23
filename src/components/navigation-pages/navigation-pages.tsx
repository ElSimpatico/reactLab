import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

import { routesPage } from '../../enums/routes-page';

import { useTranslation } from 'react-i18next';

const NavigationPages: React.FC = () => {
    const [t, i18n] = useTranslation('common');
    const [tabSelected, setTabSelected] = useState(0);

    function changeTab(event: ChangeEvent<any>, newTabSelected: number) {
        setTabSelected(newTabSelected);
    }
    return (
        <div style={{ position: 'absolute', bottom: '3px', width: '100%' }}>
            <Tabs variant='fullWidth' value={tabSelected} onChange={changeTab}>
                <Tab label={t('model')} component={Link} to='/' />
                <Tab
                    label={t('finish')}
                    component={Link}
                    to={`/${routesPage.carline}`}
                />
                <Tab
                    label={t('exterior')}
                    component={Link}
                    to={`/${routesPage.engine}`}
                />
            </Tabs>
        </div>
    );
};

export default NavigationPages;
