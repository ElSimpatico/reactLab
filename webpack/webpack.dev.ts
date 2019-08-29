// Webpack
import merge from 'webpack-merge';
import webpackCommon from './webpack.common';

// DotEnv
import { DotenvParseOutput } from 'dotenv';

// Plugins
import { HotModuleReplacementPlugin } from 'webpack';
import { defineEnvironmentPlugin } from './plugins/define-environment';

// Utils
import {
    getDotEnvironment,
    ENVIRONMENT
} from '../environments/utils/environment';

const environmentVariables: DotenvParseOutput = getDotEnvironment(
    ENVIRONMENT.DEV
);

export default merge(webpackCommon, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HotModuleReplacementPlugin(),
        defineEnvironmentPlugin(ENVIRONMENT.DEV)
    ],
    devServer: {
        port: parseInt(environmentVariables.PORT),
        proxy: {
            '/api/rest': {
                target: `${environmentVariables.HOST_PROXY}:${environmentVariables.PORT_PROXY}`,
                secure: false
            }
        }
    }
});
