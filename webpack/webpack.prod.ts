// Webpack
import merge from 'webpack-merge';
import webpackCommon from './webpack.common';

// DotEnv
import { DotenvParseOutput } from 'dotenv';

// Plugins
import { extractText, optimizeCss } from './plugins/css-webpack';
import { defineEnvironmentPlugin } from './plugins/define-environment';

//Utils
import { ENVIRONMENT } from '../environments/utils/environment';

export default merge(webpackCommon, {
    mode: 'production',
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    filename: '[name].js',
                    test: /[\\/]node_modules[\\/]((?!react))/
                },
                react: {
                    chunks: 'all',
                    filename: '[name].js',
                    test: /[\\/]node_modules[\\/](react.*)[\\/]/
                },
                materialui: {
                    chunks: 'all',
                    filename: '[name].js',
                    test: /[\\/]node_modules[\\/](material-ui.*)[\\/]/
                }
            }
        }
    },
    plugins: [
        extractText,
        optimizeCss,
        defineEnvironmentPlugin(ENVIRONMENT.PRO)
    ]
});
