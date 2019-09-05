/** React imports */
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

/** Third-party imports */
import { i18n } from './translations/i18nextConfig';

/** Local imports */
import { AppRouter } from '@components';
import { createReduxStore } from '@core/redux/store';

const App: React.FC = () => {
    return (
        <Provider store={createReduxStore()}>
            <I18nextProvider i18n={i18n}>
                <AppRouter />
            </I18nextProvider>
        </Provider>
    );
};

export default App;
