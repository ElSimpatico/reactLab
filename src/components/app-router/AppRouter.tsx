/**React imports */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/**Local imports */
import { useStyles } from './styles';

import { Layout } from '@components';

export const AppRouter: React.FC = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Layout></Layout>
            </div>
        </Router>
    );
};
