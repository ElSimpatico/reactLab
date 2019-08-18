import merge from 'webpack-merge';

import webpackConfig from './webpack.config';
import { extractText, optimizeCss } from './plugins/css-webpack';

export default merge(webpackConfig, {
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
    plugins: [extractText, optimizeCss]
});
