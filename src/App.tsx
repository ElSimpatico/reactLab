import React from 'react';
import AppRouter from './components/app-router/AppRouter';
import { I18nextProvider } from 'react-i18next';
import { i18n } from './translations/i18nextConfig';

const App: React.FC = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <AppRouter />
        </I18nextProvider>
    );
};

export default App;
