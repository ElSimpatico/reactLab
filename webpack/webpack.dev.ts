import merge from 'webpack-merge';
import { HotModuleReplacementPlugin } from 'webpack';

import webpackConfig from './webpack.config';

export default merge(webpackConfig, {
    mode: 'development',
    plugins: [new HotModuleReplacementPlugin()],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        proxy: {
            '/api/rest': {
                target: 'http://localhost:3001',
                secure: false
            }
        }
    }
});
